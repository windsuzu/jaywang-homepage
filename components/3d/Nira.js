import { useState, useEffect, useRef, useCallback } from "react";
import {
    Vector3,
    Scene,
    WebGLRenderer,
    sRGBEncoding,
    OrthographicCamera,
    AmbientLight,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { loadGLTFModel } from "../../libs/model";
import { NiraSpinner, NiraContainer } from "./NiraLoader";

function easeOutCirc(x) {
    return Math.sqrt(1 - Math.pow(x - 1, 4));
}

const Nira = () => {
    const refContainer = useRef();
    const [loading, setLoading] = useState(true);
    const [renderer, setRenderer] = useState();
    const [_camera, setCamera] = useState();
    const [target] = useState(new Vector3(0.1, 0.8, 0.1));
    const [initialCameraPosition] = useState(
        new Vector3(
            20 * Math.sin(0.2 * Math.PI),
            10,
            50 * Math.cos(0.2 * Math.PI)
        )
    );
    const [scene] = useState(new Scene());
    const [_controls, setControls] = useState();

    const handleWindowResize = useCallback(() => {
        const { current: container } = refContainer;
        if (container && renderer) {
            const scW = container.clientWidth;
            const scH = container.clientHeight;

            renderer.setSize(scW, scH);
        }
    }, [renderer]);

    useEffect(() => {
        const { current: container } = refContainer;
        if (container && !renderer) {
            const scW = container.clientWidth;
            const scH = container.clientHeight;

            const renderer = new WebGLRenderer({
                antialias: true,
                alpha: true,
            });
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(scW, scH);
            renderer.outputEncoding = sRGBEncoding;
            container.appendChild(renderer.domElement);
            setRenderer(renderer);

            const scale = scH * 0.001 + 1.6;
            const camera = new OrthographicCamera(
                -scale,
                scale,
                scale,
                -scale,
                0.01,
                50000
            );
            camera.position.copy(initialCameraPosition);
            camera.lookAt(target);
            setCamera(camera);

            const controls = new OrbitControls(camera, renderer.domElement);
            controls.autoRotate = true;
            controls.target = target;
            setControls(controls);

            loadGLTFModel(scene, "/3d-model/scene.gltf", {
                receiveShadow: false,
                castShadow: false,
            }).then(() => {
                animate();
                setLoading(false);
            });

            let req = null;
            let frame = 0;
            const animate = () => {
                req = requestAnimationFrame(animate);
                frame = frame <= 100 ? frame + 1 : frame;

                if (frame <= 100) {
                    const p = initialCameraPosition;
                    const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;

                    camera.position.y = 10;
                    camera.position.x =
                        p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);
                    camera.position.z =
                        p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);
                    camera.lookAt(target);
                } else {
                    controls.update();
                }

                renderer.render(scene, camera);
            };

            return () => {
                cancelAnimationFrame(req);
                renderer.dispose();
            };
        }
    }, [renderer, initialCameraPosition, scene, target]);

    useEffect(() => {
        window.addEventListener("resize", handleWindowResize, false);
        return () => {
            window.removeEventListener("resize", handleWindowResize, false);
        };
    }, [renderer, handleWindowResize]);

    return (
        <NiraContainer ref={refContainer}>
            {loading && <NiraSpinner />}
        </NiraContainer>
    );
};

export default Nira;

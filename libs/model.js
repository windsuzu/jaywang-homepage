import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export function loadGLTFModel(
    scene,
    path,
    options = { receiveShadow: true, castShadow: true }
) {
    const { receiveShadow, castShadow } = options;

    return new Promise((resolve, reject) => {
        const loader = new GLTFLoader();

        const loadHandler = (gltf) => {
            const obj = gltf.scene;
            obj.name = "fast-food";
            obj.position.x = 0;
            obj.position.y = 0;
            obj.receiveShadow = receiveShadow;
            obj.castShadow = castShadow;
            scene.add(obj);

            obj.traverse(function (child) {
                if (child.isMesh) {
                    child.castShadow = castShadow;
                    child.receiveShadow = receiveShadow;
                }
            });
            resolve(obj);
        };

        const errorHandler = (error) => {
            reject(error);
        };

        loader.load(path, loadHandler, undefined, errorHandler);
    });
}

import Fonts from "../components/ui/Fonts";
import Layout from "../components/layouts/Layout";
import { AnimatePresence } from "framer-motion";
import Chakra from "../components/ui/Chakra";

if (typeof window !== "undefined") {
    window.history.scrollRestoration = "manual";
}

const exitCompleteHandler = () => {
    if (typeof window !== "undefined") {
        window.scrollTo({ top: 0 });
    }
};

function MyApp({ Component, pageProps, router }) {
    return (
        <Chakra cookies={pageProps.cookies}>
            <Fonts />
            <Layout>
                <AnimatePresence
                    exitBeforeEnter
                    initial={true}
                    onExitComplete={exitCompleteHandler}
                >
                    <Component {...pageProps} key={router.pathname} />
                </AnimatePresence>
            </Layout>
        </Chakra>
    );
}

export default MyApp;

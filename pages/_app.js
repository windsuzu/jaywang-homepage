import { ChakraProvider } from "@chakra-ui/react";
import theme from "../libs/theme";
import Fonts from "../components/ui/Fonts";
import Layout from "../components/layouts/Layout";
import { AnimatePresence } from "framer-motion";

const exitCompleteHandler = () => {
    if (typeof window !== "undefined") {
        window.scrollTo({ top: 0 });
    }
};

function MyApp({ Component, pageProps, router }) {
    return (
        <ChakraProvider theme={theme}>
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
        </ChakraProvider>
    );
}

export default MyApp;

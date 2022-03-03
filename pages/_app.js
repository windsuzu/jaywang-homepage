import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/ui/Layout";
import theme from "../libs/theme";
import Fonts from "../components/ui/Fonts";

function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider theme={theme}>
            <Fonts />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ChakraProvider>
    );
}

export default MyApp;

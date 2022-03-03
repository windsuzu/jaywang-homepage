import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import Layout from "../components/ui/Layout";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ChakraProvider>
    );
}

export default MyApp;

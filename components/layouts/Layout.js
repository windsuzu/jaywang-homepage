import { Box, Container } from "@chakra-ui/react";
import Head from "next/head";
import Navbar from "../navbar/Navbar";
import NiraLoader from "../3d/NiraLoader";
import dynamic from "next/dynamic";
import Footer from "./Footer";

const LazyNira = dynamic(() => import("../3d/Nira"), {
    ssr: false,
    loading: () => <NiraLoader />,
});

const Layout = (props) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta name="description" content="Jay Wang's Homepage" />
                <meta name="author" content="Shih-Chieh Wang" />
                <meta name="author" content="windsuzu" />
                <link rel="apple-touch-icon" href="apple-touch-icon.png" />
                <link
                    rel="shortcut icon"
                    href="/favicon.ico"
                    type="image/x-icon"
                />
                <meta property="og:site_name" content="Jay Wang's Homepage" />
                <meta property="og:type" content="website" />
                <title>Homepage - Jay Wang</title>
            </Head>
            <Navbar />
            <Container maxW="container.md" pt={14}>
                <LazyNira />
                {props.children}
                <Footer />
            </Container>
        </Box>
    );
};

export default Layout;

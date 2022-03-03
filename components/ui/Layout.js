import { Box, Container } from "@chakra-ui/react";
import Head from "next/head";
import Navbar from "../Navbar/Navbar";

const Layout = (props) => {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <title>Jay Wang - Homepage</title>
            </Head>
            <Box as="main" pb={8}>
                <Navbar />

                <Container maxW="container.md" pt={14}>
                    {props.children}
                </Container>
            </Box>
        </>
    );
};

export default Layout;

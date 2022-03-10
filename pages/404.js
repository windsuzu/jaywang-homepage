import {
    Box,
    Button,
    Container,
    Divider,
    Heading,
    Text,
} from "@chakra-ui/react";
import Link from "next/link";

const NotFound = () => (
    <Container>
        <Heading as="h1">Page Not Found</Heading>
        <Text>The page you&apos;re looking for was not found.</Text>
        <Divider my={6} />
        <Box my={6} align="center">
            <Link href="/" passHref>
                <Button colorScheme="teal">Return to home</Button>
            </Link>
        </Box>
    </Container>
);

export default NotFound;
export { getInitialProps } from "../components/ui/Chakra";

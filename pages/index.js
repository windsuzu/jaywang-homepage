import {
    Box,
    Container,
    Flex,
    Heading,
    useColorModeValue,
} from "@chakra-ui/react";

export default function Home() {
    return (
        <Container>
            <Box
                bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
                borderRadius="lg"
                align="center"
                p={3}
                mb={6}
            >
                Hello, I&apos;m a front-end developer from Taiwan!
            </Box>
            <Flex>
                <Box flexGrow={1}>
                    <Heading as="h2">Jay Wang</Heading>
                    <p>Learner (Web, Mobile, Machine Learning)</p>
                </Box>
            </Flex>
        </Container>
    );
}

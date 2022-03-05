import {
    Box,
    Container,
    Heading,
    useColorModeValue,
    Image,
} from "@chakra-ui/react";
import BioSection from "../components/about/bio/BioSection";
import InterestSection from "../components/about/interest/InterestSection";
import WhoSection from "../components/about/who/WhoSection";

export default function Home() {
    return (
        <Container>
            <Box
                bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
                borderRadius="lg"
                align="center"
                p={3}
                my={6}
            >
                Hello, I&apos;m a front-end developer from Taiwan!
            </Box>
            <Box display={{ md: "flex" }}>
                <Box flexGrow={1}>
                    <Heading as="h2">Jay Wang</Heading>
                    <p>Enthusiastic Learner ( Web, Mobile, ML/DL )</p>
                </Box>
                <Box
                    flexShrink={0}
                    mt={{ base: 4, md: 0 }}
                    ml={{ md: 6 }}
                    textAlign="center"
                >
                    <Box
                        w="100px"
                        h="100px"
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="solid"
                        borderRadius="full"
                        display="inline-block"
                        overflow="hidden"
                    >
                        <Image
                            src="/images/me.jpg"
                            width="100%"
                            height="100%"
                            alt="Profile avatar"
                        />
                    </Box>
                </Box>
            </Box>
            <WhoSection delay={0.1} />
            <BioSection delay={0.4} />
            <InterestSection delay={0.7} />
        </Container>
    );
}

import {
    Box,
    Container,
    Heading,
    useColorModeValue,
    Image,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import InterestSection from "../components/about/InterestSection";
import BioSection from "../components/about/BioSection";
import WhoSection from "../components/about/WhoSection";
import WebSection from "../components/about/WebSection";
import AckSection from "../components/about/AckSection";
import Page from "../components/layouts/Page";
import { zh } from "../locales/zh";
import { en } from "../locales/en";

export default function Home() {
    const router = useRouter();
    const { locale } = router;
    const t = locale === "zh" ? zh : en;

    return (
        <Page>
            <Container>
                <Box
                    bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
                    borderRadius="lg"
                    align="center"
                    p={3}
                    my={6}
                >
                    {t.greet}
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
                <BioSection delay={0.3} />
                <InterestSection delay={0.5} />
                <WebSection delay={0.7} />
                <AckSection delay={0.9} />
            </Container>
        </Page>
    );
}

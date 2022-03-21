import { Box, Container, Heading, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Page from "../components/layouts/Page";
import { zh } from "../locales/zh";
import { en } from "../locales/en";
import Image from "next/image";
import dynamic from "next/dynamic";

const InterestSection = dynamic(() =>
    import("../components/about/InterestSection")
);
const BioSection = dynamic(() => import("../components/about/BioSection"));
const WhoSection = dynamic(() => import("../components/about/WhoSection"));
const WebSection = dynamic(() => import("../components/about/WebSection"));
const AckSection = dynamic(() => import("../components/about/AckSection"));

export default function Home() {
    const router = useRouter();
    const { locale } = router;
    const t = locale === "zh" ? zh : en;

    const lifes = [
        [1996, t.life1],
        [2016, t.life2],
        [2017, t.life3],
        [2019, t.life4],
        [2021, t.life5],
        [2021, t.life6],
    ];

    const interests = [
        t.interest1,
        t.interest2,
        t.interest3,
        t.interest4,
        t.interest5,
        t.interest6,
        t.interest7,
    ];

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
                        <p>{t.identity}</p>
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
                <WhoSection delay={0.1} title={t.section1} info={t.me} />
                <BioSection delay={0.3} title={t.section2} lifes={lifes} />
                <InterestSection
                    delay={0.5}
                    title={t.section3}
                    interests={interests}
                />
                <WebSection delay={0.7} title={t.section4} />
                <AckSection delay={0.9} title={t.section5} />
            </Container>
        </Page>
    );
}

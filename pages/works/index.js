import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Section from "../../components/ui/Section";
import WorksModel from "../../model/works.json";
import { WorkGridItem } from "../../components/ui/GridItem";
import Page from "../../components/layouts/Page";
import { useRouter } from "next/router";

const WorksPage = () => {
    const router = useRouter();
    const { locale } = router;
    const desc = locale === "zh" ? "desc_zh" : "desc_en";

    return (
        <Page title="Works">
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Works
                </Heading>

                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    {WorksModel.map((item, idx) => {
                        return (
                            <Section key={item.id} delay={0.15 * idx}>
                                <WorkGridItem
                                    thumb={item.cover}
                                    title={item.title}
                                    link={`/works/${item.id}`}
                                >
                                    {item[desc]}
                                </WorkGridItem>
                            </Section>
                        );
                    })}
                </SimpleGrid>
            </Container>
        </Page>
    );
};

export default WorksPage;

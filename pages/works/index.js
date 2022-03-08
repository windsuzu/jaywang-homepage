import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Section from "../../components/ui/Section";
import WorksModel from "../../model/works.json";
import GridItem from "../../components/ui/GridItem";
import Page from "../../components/layouts/Page";

const WorksPage = () => {
    return (
        <Page title="Works">
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Works
                </Heading>

                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    {WorksModel.map((item) => {
                        return (
                            <Section key={item.id}>
                                <GridItem
                                    title={item.title}
                                    thumb={item.cover}
                                    link={`works/${item.id}`}
                                >
                                    {item.desc_zh}
                                </GridItem>
                            </Section>
                        );
                    })}
                </SimpleGrid>
            </Container>
        </Page>
    );
};

export default WorksPage;

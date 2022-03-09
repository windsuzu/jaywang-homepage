import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Page from "../../components/layouts/Page";
import Section from "../../components/ui/Section";
import PostsModel from "../../model/posts.json";
import { PostGridItem } from "../../components/ui/GridItem";

const PostsPage = () => {
    return (
        <Page title="Posts">
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    My Posts
                </Heading>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    {PostsModel.map((item) => {
                        return (
                            <Section key={item.id}>
                                <PostGridItem
                                    title={item["title_zh"]}
                                    thumb={item.cover}
                                    link={item.url}
                                />
                            </Section>
                        );
                    })}
                </SimpleGrid>
            </Container>
        </Page>
    );
};

export default PostsPage;

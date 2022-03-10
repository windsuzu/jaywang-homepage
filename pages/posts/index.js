import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Page from "../../components/layouts/Page";
import Section from "../../components/ui/Section";
import PostsModel from "../../model/posts.json";
import { PostGridItem } from "../../components/ui/GridItem";
import { useRouter } from "next/router";

const PostsPage = () => {
    const router = useRouter();
    const { locale } = router;
    const title = locale === "zh" ? "title_zh" : "title_en";

    return (
        <Page title="Posts">
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    My Posts
                </Heading>

                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    {PostsModel.map((item, idx) => {
                        return (
                            <Section key={item.id} delay={0.15 * idx}>
                                <PostGridItem
                                    title={item[title]}
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

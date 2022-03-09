import WorksModel from "../../model/works.json";
import Page from "../../components/layouts/Page";
import { Title, Meta, WorkImage } from "../../components/works/workdetail";
import Paragraph from "../../components/ui/Paragraph";
import {
    Badge,
    Container,
    Link,
    List,
    ListItem,
    SimpleGrid,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const WorkDetailPage = (props) => {
    const {
        id,
        title,
        time,
        platform,
        stack,
        source,
        full_desc_zh,
        full_desc_en,
        cover,
        web_screenshots,
        phone_screenshots,
    } = props.data;

    return (
        <Page title={title}>
            <Container>
                <Title>
                    {title} <Badge>{time}</Badge>
                </Title>
                <List ml={4} mb={4}>
                    {platform && (
                        <ListItem>
                            <Meta>PlatForm</Meta>
                            <span>{platform}</span>
                        </ListItem>
                    )}
                    {stack && (
                        <ListItem>
                            <Meta>Stack</Meta>
                            <span>{stack}</span>
                        </ListItem>
                    )}
                    {source && (
                        <ListItem>
                            <Meta>Source</Meta>
                            <Link href={source}>
                                {source}
                                <ExternalLinkIcon mx="2px" />
                            </Link>
                        </ListItem>
                    )}
                </List>

                <Paragraph>{full_desc_zh}</Paragraph>

                {cover && <WorkImage src={cover} alt={title} my={6} />}

                {web_screenshots &&
                    web_screenshots.map((url) => (
                        <WorkImage src={url} key={url} alt={title} my={4} />
                    ))}

                {/* TODO fix phone arrangement */}
                {phone_screenshots && (
                    <SimpleGrid columns={2} gap={2}>
                        {phone_screenshots.map((url) => (
                            <WorkImage src={url} key={url} alt={title} />
                        ))}
                    </SimpleGrid>
                )}
            </Container>
        </Page>
    );
};

export const getStaticProps = async (ctx) => {
    const id = ctx.params.work_id;
    const workDetail = WorksModel.find((item) => item.id === id);

    return {
        props: {
            data: workDetail,
        },
    };
};

export const getStaticPaths = async () => {
    const works = WorksModel.map((item) => item.id);
    return {
        paths: works.map((id) => ({ params: { work_id: id } })),
        fallback: "blocking",
    };
};

export default WorkDetailPage;

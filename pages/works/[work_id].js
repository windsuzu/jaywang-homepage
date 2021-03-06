import WorksModel from "../../model/works.json";
import Page from "../../components/layouts/Page";
import { Title, Meta, WorkImage } from "../../components/works/workdetail";
import Paragraph from "../../components/ui/Paragraph";
import { useRouter } from "next/router";
import {
    DemoButton,
    GooglePlayButton,
    AppleStoreButton,
} from "../../components/ui/StoreButton";
import {
    Badge,
    Box,
    Container,
    Link,
    List,
    ListItem,
    SimpleGrid,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const WorkDetailPage = (props) => {
    const {
        title_zh,
        title_en,
        time,
        platform,
        stack,
        source,
        full_desc_zh,
        full_desc_en,
        cover,
        web_screenshots,
        phone_screenshots,
        demo,
        android,
        ios,
    } = props.data;

    const router = useRouter();
    const { locale } = router;
    const fullDesc = locale === "zh" ? full_desc_zh : full_desc_en;
    const title = locale === "zh" ? title_zh : title_en;

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
                            <Link href={source} target="_blank">
                                {source}
                                <ExternalLinkIcon mx="2px" />
                            </Link>
                        </ListItem>
                    )}
                </List>

                <Paragraph>{fullDesc}</Paragraph>

                {demo && <DemoButton link={demo} />}

                {android && ios && (
                    <SimpleGrid columns={2} gap={6}>
                        <GooglePlayButton link={android} />
                        <AppleStoreButton link={ios} />
                    </SimpleGrid>
                )}

                {cover && (
                    <WorkImage src={cover} alt={title} my={6} w={720} h={400} />
                )}

                {web_screenshots &&
                    web_screenshots.map((url) => (
                        <WorkImage
                            src={url}
                            key={url}
                            alt={title}
                            my={4}
                            w={1024}
                            h={608}
                        />
                    ))}

                {phone_screenshots && (
                    <SimpleGrid columns={2} gap={2} my={4}>
                        {phone_screenshots.map((url) => (
                            <WorkImage
                                src={url}
                                key={url}
                                alt={title}
                                w={342}
                                h={640}
                            />
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

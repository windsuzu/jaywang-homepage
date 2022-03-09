import { Box, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";

export const PostGridItem = (props) => (
    <Box w="100%" textAlign="center">
        <LinkBox cursor="pointer">
            <Image
                alt={props.title}
                src={props.thumb}
                width={720}
                height={400}
                placeholder="blur"
                blurDataURL={props.thumb}
                className="rounded-image"
                loading="lazy"
            />
            <LinkOverlay href={props.link} target="_blank">
                <Text mt={2}>{props.title}</Text>
            </LinkOverlay>
            <Text fontSize={14}>{props.children}</Text>
        </LinkBox>
    </Box>
);

export const WorkGridItem = (props) => {
    return (
        <Box w="100%" textAlign="center">
            <Link href={props.link} scroll={false} passHref>
                <LinkBox cursor="pointer">
                    <Image
                        alt={props.title}
                        src={props.thumb}
                        width={720}
                        height={400}
                        placeholder="blur"
                        blurDataURL={props.thumb}
                        className="rounded-image"
                        loading="lazy"
                    />
                    <LinkOverlay href={props.link}>
                        <Text mt={2} fontSize={20}>
                            {props.title}
                        </Text>
                    </LinkOverlay>
                    <Text fontSize={14}>{props.children}</Text>
                </LinkBox>
            </Link>
        </Box>
    );
};

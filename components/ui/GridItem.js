import { Box, LinkBox, LinkOverlay, Text, Image } from "@chakra-ui/react";
import Link from "next/link";

export const PostGridItem = (props) => (
    <Box w="100%" textAlign="center">
        <LinkBox cursor="pointer">
            <Image
                alt={props.title}
                src={props.thumb}
                placeholder="blur"
                loading="lazy"
                className="grid-item-thumb"
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
                        placeholder="blur"
                        loading="lazy"
                        className="grid-item-thumb"
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

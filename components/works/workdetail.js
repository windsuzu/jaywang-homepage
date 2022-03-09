import { ChevronRightIcon } from "@chakra-ui/icons";
import { Badge, Box, chakra, Heading, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import NextImage from "next/image";

export const Title = (props) => (
    <Box>
        <NextLink href="/works" passHref>
            <Link>Works</Link>
        </NextLink>
        <span>
            {" "}
            <ChevronRightIcon />{" "}
        </span>
        <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
            {props.children}
        </Heading>
    </Box>
);

const Image = chakra(NextImage, {
    baseStyle: {},
    shouldForwardProp: (prop) =>
        [
            "width",
            "height",
            "src",
            "alt",
            "quality",
            "placeholder",
            "blurDataURL",
            "loader",
        ].includes(prop),
});

export const WorkImage = (props) => {
    return (
        <Box my={props.my}>
            <Image
                src={props.src}
                alt={props.alt}
                width={props.w}
                height={props.h}
                placeholder="blur"
                blurDataURL={props.src}
                loading="lazy"
                borderRadius="lg"
            />
        </Box>
    );
};

export const Meta = (props) => (
    <Badge colorScheme="green" mr={2}>
        {props.children}
    </Badge>
);

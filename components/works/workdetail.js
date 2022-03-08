import { ChevronRightIcon } from "@chakra-ui/icons";
import { Badge, Box, Heading, Image, Link } from "@chakra-ui/react";
import NextLink from "next/link";

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

export const WorkImage = (props) => (
    <Image
        borderRadius="lg"
        w="full"
        src={props.src}
        alt={props.alt}
        my={props.my}
    />
);

export const Meta = (props) => (
    <Badge colorScheme="green" mr={2}>
        {props.children}
    </Badge>
);

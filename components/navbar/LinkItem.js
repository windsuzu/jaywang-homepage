import { Link, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";

const LinkItem = (props) => {
    const router = useRouter();
    const active = router.pathname === props.href;
    const inactiveColor = useColorModeValue("gray200", "whiteAlpha.900");

    return (
        <NextLink href={props.href} passHref scroll={false}>
            <Link
                p={2}
                bg={active && "grassTeal"}
                color={active ? "#202023" : inactiveColor}
                target={props.href.includes("http") ? "_blank" : "_self"}
                {...props}
            >
                {props.children}
            </Link>
        </NextLink>
    );
};

export default LinkItem;

import Logo from "./Logo";
import {
    Box,
    Container,
    Flex,
    Stack,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Link,
    useColorModeValue,
    IconButton,
} from "@chakra-ui/react";
import LinkItem from "./LinkItem";
import NextLink from "next/link";
import { HamburgerIcon } from "@chakra-ui/icons";
import { IoLogoGithub } from "react-icons/io5";
import ThemeToggleButton from "./ThemeToggleButton";

const Item = (props) => (
    <NextLink href={props.href} passHref>
        <MenuItem
            as={Link}
            target={props.href.includes("http") ? "_blank" : "_self"}
        >
            {props.label}
        </MenuItem>
    </NextLink>
);

const Navbar = (props) => {
    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            bg={useColorModeValue("#ffffff40", "20202380")}
            css={{ backdropFilter: "blur(10px)" }}
            zIndex={1}
            {...props}
        >
            <Container
                display="flex"
                p={2}
                maxW="container.lg.md"
                wrap="wrap"
                align="center"
                justify="space-between"
            >
                <Flex align="center" mr={5}>
                    <Logo />
                </Flex>
                <Stack
                    direction={{ base: "column", md: "row" }}
                    display={{ base: "none", md: "flex" }}
                    width={{ base: "full", md: "auto" }}
                    alignItems="center"
                    flexGrow={1}
                    mt={{ base: 4, md: 0 }}
                >
                    <LinkItem href="/works">Works</LinkItem>
                    <LinkItem href="/posts">Posts</LinkItem>
                    <LinkItem
                        href="https://github.com/windsuzu/"
                        display="inline-flex"
                        alignItems="center"
                        style={{ gap: 4 }}
                        pl={2}
                    >
                        <IoLogoGithub />
                        Source
                    </LinkItem>
                </Stack>

                <Box flex={1} align="right">
                    <ThemeToggleButton />
                    <Box ml={2} display={{ base: "inline-block", md: "none" }}>
                        <Menu isLazy id="navbar-menu">
                            <MenuButton
                                as={IconButton}
                                icon={<HamburgerIcon />}
                                variant="outline"
                                aria-label="Options"
                            />
                            <MenuList>
                                <Item href="/" label="Home" />
                                <Item href="/works" label="Works" />
                                <Item href="/posts" label="Posts" />
                                <Item
                                    href="https://github.com/windsuzu"
                                    label="Source"
                                />
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Navbar;

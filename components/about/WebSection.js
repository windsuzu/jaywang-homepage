import { Button, Heading, Link, List, ListItem } from "@chakra-ui/react";
import React from "react";
import Section from "../ui/Section";
import {
    IoLogoGithub,
    IoLogoMedium,
    IoLogoLinkedin,
    IoMailOutline,
} from "react-icons/io5";
import IndexButton from "../ui/IndexButton";

const WebSection = (props) => {
    return (
        <Section delay={props.delay}>
            <Heading as="h3" variant="section-title">
                {props.title}
            </Heading>
            <List>
                <ListItem>
                    <Link href="https://github.com/windsuzu" target="_blank">
                        <Button
                            variant="ghost"
                            colorScheme="teal"
                            leftIcon={<IoLogoGithub />}
                        >
                            @github/windsuzu
                        </Button>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href="https://windsuzu.medium.com/" target="_blank">
                        <Button
                            variant="ghost"
                            colorScheme="teal"
                            leftIcon={<IoLogoMedium />}
                        >
                            @medium/windsuzu
                        </Button>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link
                        href="https://www.linkedin.com/in/windsuzu/"
                        target="_blank"
                    >
                        <Button
                            variant="ghost"
                            colorScheme="teal"
                            leftIcon={<IoLogoLinkedin />}
                        >
                            @linkedin/windsuzu
                        </Button>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href="mailto:windsuzu@gmail.com" target="_blank">
                        <Button
                            variant="ghost"
                            colorScheme="teal"
                            leftIcon={<IoMailOutline />}
                        >
                            @email/windsuzu@gmail.com
                        </Button>
                    </Link>
                </ListItem>
            </List>
            <IndexButton link="/posts">My Posts</IndexButton>
        </Section>
    );
};

export default WebSection;

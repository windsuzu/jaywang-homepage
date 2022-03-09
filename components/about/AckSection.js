import { Heading, Link, List, ListIcon, ListItem } from "@chakra-ui/react";
import React from "react";
import { MdFavorite } from "react-icons/md";
import Section from "../ui/Section";

const AckSection = ({ delay, title }) => {
    return (
        <Section delay={delay}>
            <Heading as="h3" variant="section-title">
                {title}
            </Heading>

            <List my={4}>
                <ListItem>
                    <ListIcon as={MdFavorite} color="red.500" />
                    wonderful portfolio tutorial from{" "}
                    <Link
                        href="https://www.youtube.com/watch?v=bSMZgXzC9AA"
                        target="_blank"
                    >
                        @devaslife
                    </Link>
                </ListItem>

                <ListItem>
                    <ListIcon as={MdFavorite} color="red.500" />
                    beautiful nirachan 3D model designed by{" "}
                    <Link href="https://skfb.ly/onKZV" target="_blank">
                        @KRei
                    </Link>
                </ListItem>
                <ListItem>
                    <ListIcon as={MdFavorite} color="red.500" />
                    Icons created by Freepik - Flaticon
                </ListItem>
            </List>
        </Section>
    );
};

export default AckSection;

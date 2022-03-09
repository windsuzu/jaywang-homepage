import { Heading, List, ListItem } from "@chakra-ui/react";
import React from "react";
import Section from "../ui/Section";

const InterestSection = ({ delay, title, interests }) => {
    return (
        <Section delay={delay}>
            <Heading as="h3" variant="section-title">
                {title}
            </Heading>
            <List>
                {interests.map((interest, idx) => (
                    <ListItem key={idx}>{interest}</ListItem>
                ))}
            </List>
        </Section>
    );
};

export default InterestSection;

import { Heading } from "@chakra-ui/react";
import React from "react";
import Section from "../../ui/Section";
import Link from "next/link";
import Paragraph from "../../ui/Paragraph";

const InterestSection = ({ delay }) => {
    return (
        <Section delay={delay}>
            <Heading as="h3" variant="section-title">
                I ♥
            </Heading>
            <Paragraph>
                Art, Music,{" "}
                <Link href="https://illust.odoruinu.net/" target="_blank">
                    Drawing
                </Link>
                , Playing Drums,{" "}
                <Link href="https://500px.com/p/craftzdog" target="_blank">
                    Photography
                </Link>
                , Leica, Machine Learning
            </Paragraph>
        </Section>
    );
};

export default InterestSection;

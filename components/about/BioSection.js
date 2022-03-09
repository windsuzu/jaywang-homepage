import { Heading } from "@chakra-ui/react";
import Section from "../ui/Section";
import { BioRow, BioYear } from "./Bio";

const BioSection = ({ delay }) => {
    return (
        <Section delay={delay}>
            <Heading as="h3" variant="section-title">
                Bio
            </Heading>
            <BioRow>
                <BioYear>1996</BioYear>
                Born in Taichung, Taiwan.
            </BioRow>
        </Section>
    );
};

export default BioSection;

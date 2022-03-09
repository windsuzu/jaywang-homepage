import { Heading } from "@chakra-ui/react";
import Section from "../ui/Section";
import { BioRow, BioYear } from "./Bio";

const BioSection = ({ delay, title, lifes }) => {
    return (
        <Section delay={delay}>
            <Heading as="h3" variant="section-title">
                {title}
            </Heading>
            {lifes.map((life, idx) => {
                const [year, bio] = life;
                return (
                    <BioRow key={idx}>
                        <BioYear>{year}</BioYear>
                        {bio}
                    </BioRow>
                );
            })}
        </Section>
    );
};

export default BioSection;

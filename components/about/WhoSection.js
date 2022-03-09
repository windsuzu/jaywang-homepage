import { Heading } from "@chakra-ui/react";
import Section from "../ui/Section";
import IndexButton from "../ui/IndexButton";
import Paragraph from "../ui/Paragraph";

const WhoSection = ({ delay, title, info }) => {
    return (
        <Section delay={delay}>
            <Heading as="h3" variant="section-title">
                {title}
            </Heading>
            <Paragraph>{info}</Paragraph>
            <IndexButton link="/works">My Portfolio</IndexButton>
        </Section>
    );
};

export default WhoSection;

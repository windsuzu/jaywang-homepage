import { Heading } from "@chakra-ui/react";
import Section from "../ui/Section";
import IndexButton from "../ui/IndexButton";

const WhoSection = ({ delay }) => {
    return (
        <Section delay={delay}>
            <Heading as="h3" variant="section-title">
                Who am I?
            </Heading>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur nobis, eveniet ratione accusamus tempore et vero
                eaque distinctio a reprehenderit autem magnam qui est. Dolores
                saepe deserunt iure veritatis doloremque, nam non dignissimos
                blanditiis, quasi at atque praesentium harum recusandae incidunt
                a laudantium sequi dolor ipsum numquam ipsam mollitia
                voluptatibus.
            </p>
            <IndexButton link="/works">My Portfolio</IndexButton>
        </Section>
    );
};

export default WhoSection;

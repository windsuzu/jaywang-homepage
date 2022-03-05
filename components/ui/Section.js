import { motion } from "framer-motion";
import { chakra, shouldForwardProp } from "@chakra-ui/react";

// What's shouldForwardProp
// https://stackoverflow.com/questions/69730364/what-is-the-purpose-of-shouldforwardprop-option-in-styled

// Allowing custom props to be forwarded
// https://chakra-ui.com/docs/styled-system/features/chakra-factory#allowing-custom-props-to-be-forwarded
const StyledDiv = chakra(motion.div, {
    shouldForwardProp: (prop) => {
        // shouldForwardProp(prop): forward Chakra's props
        // prop === "transition": forward transition props
        return shouldForwardProp(prop) || prop === "transition";
    },
});

const Section = ({ children, delay = 0 }) => (
    <StyledDiv
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay }}
        mb={6}
    >
        {children}
    </StyledDiv>
);

export default Section;

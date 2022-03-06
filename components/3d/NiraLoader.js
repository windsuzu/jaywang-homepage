import { Box, Spinner } from "@chakra-ui/react";
import React, { forwardRef } from "react";

export const NiraSpinner = () => (
    <Spinner
        size="xl"
        position="absolute"
        left="50%"
        top="50%"
        ml="calc(0px - var(--spinner-size) / 2)"
        mt="calc(0px - var(--spinner-size))"
    />
);

export const NiraContainer = forwardRef(function Container(props, ref) {
    return (
        <Box
            ref={ref}
            className="fast-food"
            m="auto"
            mt={["0px", "-30px", "-90px"]}
            mb={["-80px", "-140px", "-200px"]}
            w={[280, 480, 640]}
            h={[280, 480, 640]}
            position="relative"
        >
            {props.children}
        </Box>
    );
});

const NiraLoader = () => (
    <NiraContainer>
        <NiraSpinner />
    </NiraContainer>
);

export default NiraLoader;

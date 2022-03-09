import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Button } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const IndexButton = (props) => {
    return (
        <Box align="center" my={4}>
            <Link href={props.link} scroll={false} passHref>
                <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                    {props.children}
                </Button>
            </Link>
        </Box>
    );
};

export default IndexButton;

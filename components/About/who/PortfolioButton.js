import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Button } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const PortfolioButton = () => {
    return (
        <Box align="center" my={4}>
            <Link href="/works" scroll={false} passHref>
                <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                    My portfolio
                </Button>
            </Link>
        </Box>
    );
};

export default PortfolioButton;

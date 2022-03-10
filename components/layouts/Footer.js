import { Box } from "@chakra-ui/react";

const Footer = () => {
    return (
        <Box align="center" opacity={0.4} fontSize="sm">
            {new Date().getFullYear()} Jay Wang &copy; All Rights Reserved.
        </Box>
    );
};

export default Footer;

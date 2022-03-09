import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

// ColorMode
// https://chakra-ui.com/docs/features/color-mode#updating-the-theme-config
const config = {
    initialColorMode: "light",
    useSystemColorMode: true,
};

// Global Styles
// https://chakra-ui.com/docs/features/global-styles
const styles = {
    global: (props) => ({
        body: {
            bg: mode("#f0e7db", "#202023")(props),
        },
        ".rounded-image": {
            borderRadius: "12px",
        },
    }),
};

// Customizing single components
// https://chakra-ui.com/docs/styled-system/theming/customize-theme#customizing-single-components
const components = {
    Heading: {
        variants: {
            "section-title": {
                textDecoration: "underline",
                fontSize: 20,
                textUnderlineOffset: 6,
                textDecorationColor: "#525252",
                textDecorationThickness: 4,
                marginTop: 3,
                marginBottom: 4,
            },
        },
    },
    Link: {
        baseStyle: (props) => ({
            color: mode("#3d7aed", "#ff63c3")(props),
            textUnderlineOffset: 3,
        }),
    },
};

// Customizing theme tokens
// https://chakra-ui.com/docs/styled-system/theming/customize-theme#customizing-theme-tokens
const fonts = {
    heading: "'M PLUS Rounded 1c'",
};

const colors = {
    grassTeal: "#88ccca",
};

const theme = extendTheme({ config, styles, components, fonts, colors });

export default theme;

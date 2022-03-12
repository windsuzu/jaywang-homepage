import { Box, Image, Link } from "@chakra-ui/react";

const StoreButton = (props) => {
    return (
        <Box align="center" my={6}>
            <Link href={props.link} target="_blank">
                <Image
                    src={props.src}
                    alt={props.alt}
                    width={props.w || 300}
                    height={props.h || 100}
                ></Image>
            </Link>
        </Box>
    );
};

export const GooglePlayButton = ({ link }) => (
    <StoreButton
        link={link}
        src="/images/works/google-play-trimmy.png"
        alt="Download on Google Play"
        w="100%"
        h="100%"
    />
);
export const AppleStoreButton = ({ link }) => (
    <StoreButton
        link={link}
        src="/images/works/apple-store-trimmy.png"
        alt="Download on Apple Store"
        w="100%"
        h="100%"
    />
);

export const DemoButton = ({ link }) => (
    <StoreButton
        link={link}
        src="/images/works/demo.png"
        alt="View Online Demo"
    />
);

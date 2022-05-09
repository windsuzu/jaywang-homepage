import { Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 1rem;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 10px;
    cursor: pointer;

    &:hover img {
        transform: rotate(20deg);
    }

    img {
        transition: 200ms ease;
    }
`;

const Logo = () => {
    const logoImg = `/images/jay${useColorModeValue("", "-dark")}.png`;
    return (
        <Link href="/" scroll={false} passHref>
            <LogoBox>
                <Image src={logoImg} width={20} height={20} alt="logo" />
                <Text
                    color={useColorModeValue("gray.800", "whiteAlpha.900")}
                    fontFamily="'M PLUS Rounded 1c', sans-serif"
                    fontWeight="bold"
                    letterSpacing={0.01}
                    pl={2}
                >
                    Jay Wang
                </Text>
            </LogoBox>
        </Link>
    );
};

export default Logo;

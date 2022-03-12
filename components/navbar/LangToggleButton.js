import { AnimatePresence, motion } from "framer-motion";
import { Icon, IconButton, useColorModeValue } from "@chakra-ui/react";
import { RiCelsiusLine, RiFahrenheitLine } from "react-icons/ri";
import { useState } from "react";
import { useRouter } from "next/router";

// switching only the locale while preserving all routing information
// https://stackoverflow.com/a/70076823

const LangToggleButton = () => {
    // use key to fresh (unmount/mount) button for animating
    const [buttonKey, setButtonKey] = useState(0);

    const router = useRouter();
    const { locale, pathname, asPath, query } = router;
    const [lang, setLang] = useState(locale);

    const CelsiusIcon = <Icon as={RiCelsiusLine} />;
    const FahrenheitIcon = <Icon as={RiFahrenheitLine} />;

    const changeLanguage = (e) => {
        setButtonKey((prev) => prev + 1);
        const locale = lang === "zh" ? "en" : "zh";
        setLang(locale);
        router.push({ pathname, query }, asPath, { locale });
    };

    return (
        <AnimatePresence exitBeforeEnter initial="false">
            <motion.div
                key={buttonKey}
                style={{ display: "inline-block" }}
                initial={{ rotateY: -360, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                exit={{ rotateY: 360, opacity: 0 }}
            >
                <IconButton
                    aria-label="Change Language"
                    colorScheme={useColorModeValue("blackAlpha", "gray")}
                    icon={locale === "zh" ? CelsiusIcon : FahrenheitIcon}
                    onClick={changeLanguage}
                />
            </motion.div>
        </AnimatePresence>
    );
};

export default LangToggleButton;

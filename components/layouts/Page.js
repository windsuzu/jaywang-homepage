import { motion } from "framer-motion";
import Head from "next/head";

const pageVariants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    visible: {
        opacity: 1,
        x: 0,
        y: 0,
    },
    exit: { opacity: 0, x: -0, y: 20 },
};

const Page = (props) => {
    return (
        <motion.article
            variants={pageVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.4, type: "easeInOut" }}
            style={{ position: "relative" }}
        >
            <>
                {props.title && (
                    <Head>
                        <title>{props.title} - Jay Wang</title>
                        <meta name="twitter:title" content={props.title} />
                        <meta property="og:title" content={props.title} />
                    </Head>
                )}
                {props.children}
            </>
        </motion.article>
    );
};

export default Page;

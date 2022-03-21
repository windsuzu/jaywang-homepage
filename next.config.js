const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const { ANALYZE } = process.env;

const nextConfig = {
    reactStrictMode: true,
    i18n: {
        locales: ["en", "zh"],
        defaultLocale: "zh",
    },
    webpack: function (config) {
        if (ANALYZE) {
            config.plugins.push(
                new BundleAnalyzerPlugin({
                    analyzerMode: "server",
                    analyzerPort: 8888,
                    openAnalyzer: true,
                })
            );
        }
        return config;
    },
    "next-unused": {
        alias: {},
        include: ["pages", "components"],
        exclude: [],
        entrypoints: [],
    },
};

module.exports = nextConfig;

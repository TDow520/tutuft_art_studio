import withTM from "next-transpile-modules";

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["kicmlpumxgdnyiklrmzf.supabase.co"] // external image domains for supabase
    },
    env: { SQUARE_ACCESS_TOKEN: process.env.SQ_ACCESS_TOKEN },
    reactStrictMode: true,
    experimental: { esmExternals: "loose" },
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.fallback = { fs: false };
        }

        config.module.rules.push({
            test: /\.css$/,
            use: [
                "style-loader",
                "css-loader",
                "postcss-loader" // Ensure postcss-loader is included
            ]
        });

        return config;
    }
};

export default withTM(["@square/web-sdk", "react-square-web-payments-sdk"])(
    nextConfig
);

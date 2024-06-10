import withTM from 'next-transpile-modules';
const transpileModules = withTM(["@square/web-sdk", "react-square-web-payments-sdk"]);

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["kicmlpumxgdnyiklrmzf.supabase.co"] // external image domains for supabase
    },
    env: {
        SQUARE_ACCESS_TOKEN: process.env.SQ_ACCESS_TOKEN, 
        SQUARE_APP_ID: process.env.SQ_APP_ID,
        SQUARE_LOCATION_ID: process.env.SQ_LOCATION_ID,
    },
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

export default transpileModules(nextConfig);
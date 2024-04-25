/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    theme: {
        extend: { 
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
            },
            colors: {
                olive: {
                    50: "#f7f9e3", // very light olive
                    100: "#eff3c6", // lighter olive
                    200: "#e6edaa", // light olive
                    300: "#dde78d", // soft olive
                    400: "#d3e171", // medium light olive
                    500: "#cada54", // standard olive
                    600: "#b8c943", // medium dark olive
                    700: "#a5b731", // dark olive
                    800: "#939520", // very dark olive
                    900: "#807210" // almost black olive
                },
                forestgreen: {
                    50: "#e6f2ec", // very light forest green
                    100: "#cde5d8", // lighter forest green
                    200: "#b3d7c5", // light forest green
                    300: "#99cab1", // soft forest green
                    400: "#7fbd9e", // medium light forest green
                    500: "#66b08a", // standard forest green
                    600: "#4da376", // medium dark forest green
                    700: "#338563", // dark forest green
                    800: "#1a674f", // very dark forest green
                    900: "#00493c" // almost black forest green
                },
                gold: {
                    50: "#fff9e6", // very light gold
                    100: "#ffefcc", // lighter gold
                    200: "#ffe5b3", // light gold
                    300: "#ffdb99", // soft gold
                    400: "#ffd180", // medium light gold
                    500: "#ffc766", // standard gold
                    600: "#ffbd4d", // medium dark gold
                    700: "#ffb333", // dark gold
                    800: "#ffa91a", // very dark gold
                    900: "#ff9f00" // almost black gold
                }
            }
        },
        screens: {
            phone: { max: "640px" },
            phone_land: { min: "641px", max: "813px" }, // 640px to 800px is phone landscape
            tablet: { min: "814px", max: "1023px" },
            laptop: { min: "1024px", max: "1450px" },
            desktop: { min: "1451px" }
        }
    },
    plugins: []
};

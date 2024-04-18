/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      'phone': { 'max': '640px' },
      'phone_land': { 'min': '641px', 'max': '813px' }, // 640px to 800px is phone landscape
      'tablet': { 'min': '814px', 'max': '1023px' },
      'laptop': { 'min': '1024px', 'max': '1450px' },
      'desktop': { 'min': '1451px' }
    },
  },
  plugins: [],
};

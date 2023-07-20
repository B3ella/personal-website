/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    tailwindConfig: "./styles/tailwind.config.js",
    plugins: ["prettier-plugin-tailwindcss"],
    theme: {
        extend: {
            fontFamily: {
                condensed: ["Roboto Condensed", "sans-serif"],
                roboto: ["Roboto", "sans-serif"],
                mono: ["Roboto Mono", "monospace"],
            },
            fontSize: {
                "10xl": "9rem",
            },
            colors: {
                green: "#84a98c",
                dark: "#090c09",
                "light-green": "#cad2c5",
                light: "#ddd",
            },
            spacing: {
                3.75: "15px",
                "h-screen/4": "25vh",
                "1/10": "10%",
                12.5: "3.125rem",
            },
            lineHeight: {
                "title-tight": 1.1,
                title: 1.2,
                "title-loose": 1.3,
                "p-tight": 1.3,
                p: 1.4,
                "p-loose": 1.5,
            },
        },
    },
    plugins: [],
};

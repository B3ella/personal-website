module.exports = {
    trailingComma: "es5",
    tabWidth: 4,
    semi: false,
    singleQuote: false,
    tailwindConfig: "./styles/tailwind.config.js",
    plugins: [require.resolve("prettier-plugin-astro")],
    overrides: [
        {
            files: "*.astro",
            options: {
                parser: "astro",
            },
        },
    ],
}

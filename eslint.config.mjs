// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
    // Your custom configs here
    {
        files: ["**/*.vue", "**/*.ts", "**/*.tsx"],
        rules: {
            "vue/no-use-v-if-with-v-for": "off",
            "vue/multi-word-component-names": "off",
            "no-console": ["error", { allow: ["warn", "error"] }],
            "no-nested-ternary": ["error"],
            "@typescript-eslint/no-explicit-any": "off",
            "max-lines": [
                "error",
                {
                    max: 1500,
                    skipBlankLines: true,
                    skipComments: true,
                },
            ],
            complexity: ["error", 15],
            eqeqeq: 2,
        },
    }
);

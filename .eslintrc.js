module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: ["google", "plugin:react/recommended", "prettier"],
    overrides: [
        {
            env: {
                node: true,
            },
            files: [".eslintrc.{js,cjs}"],
            parserOptions: {
                sourceType: "script",
            },
        },
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["react", "prettier"],
    rules: {
        indent: ["error", 4],
        quotes: ["error", "double"],
        "comma-dangle": ["error", "always-multiline"],
        "spaced-comment": ["error", "always", {markers: ["/"]}],
        "react/prop-types": ["off"],
        "space-before-function-paren": ["error", "never"],
        "valid-jsdoc": "off",
        "semi": ["error", "never"],
    },
}

import globals from "globals";
import pluginJs from "@eslint/js";
import prettier from "eslint-plugin-prettier";

export default [
  {
    ignores: [
      "**/node_modules/**",
      "**/.github/**",
      "**/.vscode/**",
      "**/.git/**",
      "**/.devcontainer/**",
      "**/.husky/**",
      "**/package.json",
      "**/package-lock.json",
      "**/.eslintignore",
      "**/.prettierrc.cjs",
      "**/migrations/**",
      "**/tests/**",
    ],
  },
  {
    languageOptions: { globals: globals.browser },
  },
  pluginJs.configs.recommended,
  {
    files: ['**/*.js'],
    linterOptions: {
      noInlineConfig: true,
    },
    plugins: { prettier },
    rules: {
      "prettier/prettier": "error",
      semi: ["error", "always"],
      quotes: ["error", "single"],
      "comma-dangle": ["error", "always-multiline"],
      indent: ["error", 2],
      "lines-around-comment": ["error", { beforeBlockComment: true }],
      "no-unused-vars": [
        "error",
        { vars: "all", args: "none", ignoreRestSiblings: false },
      ],
      "no-extra-semi": "error",
      "no-console": "warn",
      "object-curly-spacing": ["error", "always"],
      "space-in-parens": ["error", "never"],
      camelcase: ["error", { properties: "always" }],
      "function-call-argument-newline": ["error", "consistent"],
    },
  },
  {
    files: ['**/*.html'],
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "double"],
      indent: ["error", 2],
    },
  },
];

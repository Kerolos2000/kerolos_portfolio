import eslint from "@typescript-eslint/eslint-plugin";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintConfigUniverse from "eslint-config-universe";
import pluginImport from "eslint-plugin-import";
import perfectionist from "eslint-plugin-perfectionist";
import pluginReact from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import pluginReactRefresh from "eslint-plugin-react-refresh";
import sonarjs from "eslint-plugin-sonarjs";
import sortDestructureKeys from "eslint-plugin-sort-destructure-keys";
import unicorn from "eslint-plugin-unicorn";
import globals from "globals";
import prettier from "prettier";
import tseslint from "typescript-eslint";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: { globals: globals.browser },
  },
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    plugins: {
      eslint,
      eslintConfigPrettier,
      eslintConfigUniverse,
      perfectionist,
      pluginImport,
      pluginReactRefresh,
      prettier,
      reactHooks,
      sonarjs,
      sortDestructureKeys,
      unicorn,
    },
    rules: {
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-empty-interface": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-unused-vars": "error",
      "no-unused-vars": "off",
      "padding-line-between-statements": "warn",
      "perfectionist/sort-imports": "warn",
      "perfectionist/sort-jsx-props": "off",
      'perfectionist/sort-objects': [
        'warn',
        {
          ignoreCase: true,
          order: 'asc',
          partitionByComment: false,
          partitionByNewLine: false,
          type: 'alphabetical',
        },
      ],
      "prefer-const": ["error", { ignoreReadBeforeAssign: true }],
      "react/jsx-sort-props": "warn",
      "react/no-unescaped-entities": "off",
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "react/self-closing-comp": "warn",
    },
  },
];

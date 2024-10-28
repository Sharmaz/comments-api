import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


export default [
  {ignores: [
    "**/src/db/migrations",
    "**/src/db/seeders",
    "**/src/db/sequelize.config.js",
    "**/jest.config.unit.js",
    "**/jest.config.e2e.js",
    "**/dist/**"
  ]},
  {files: ["**/*.{js,mjs,cjs,ts}"]},
  {files: ["**/*.js"], languageOptions: {sourceType: "commonjs"}},
  {languageOptions: { globals: globals.node }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];

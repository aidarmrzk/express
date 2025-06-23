import js from "@eslint/js"
import globals from "globals"
import tseslint from "typescript-eslint"
import { defineConfig } from "eslint/config"

export default defineConfig([
  {
    ignores: ["webpack.config.js", "babel.config.js", "**/*.test.js"],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { js },
    extends: ["js/recommended"],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    languageOptions: { globals: globals.browser },
  },
  tseslint.configs.recommended,
  {
    // Добавляем кастомные правила
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "warn", // или "error"
        {
          argsIgnorePattern: "^_", // игнорировать аргументы, начинающиеся с _
          varsIgnorePattern: "^_", // игнорировать переменные, начинающиеся с _
          caughtErrorsIgnorePattern: "^_", // игнорировать ошибки в catch, начинающиеся с _
        },
      ],
    },
  },
])

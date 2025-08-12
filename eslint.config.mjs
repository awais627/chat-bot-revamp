import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import tailwindcss from 'eslint-plugin-tailwindcss';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import prettier from 'eslint-plugin-prettier';
import tseslint from 'typescript-eslint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals'),

  ...tseslint.configs.recommended,

  {
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      prettier,
      tailwindcss,
      '@typescript-eslint': tseslint.plugin,
    },
    rules: {
      // React Hooks
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // React
      'react/react-in-jsx-scope': 'off',
      'react/jsx-key': 'error',
      'react/jsx-boolean-value': 'warn',
      'react/jsx-wrap-multilines': 'warn',

      // TypeScript
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          args: 'none',
        },
      ],
      '@typescript-eslint/explicit-module-boundary-types': 'off',

      // General
      'object-curly-spacing': ['warn', 'always'],
      'max-len': [
        'warn',
        {
          code: 120,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreComments: true,
        },
      ],
      'no-plusplus': [
        'error',
        {
          allowForLoopAfterthoughts: true,
        },
      ],
      'prettier/prettier': [
        'warn',
        {
          singleQuote: true,
          semi: true,
          trailingComma: 'none',
          endOfLine: 'auto',
        },
      ],

      // Tailwind
      'tailwindcss/no-custom-classname': 'off',
    },
  },
];

export default eslintConfig;

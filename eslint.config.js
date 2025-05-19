import jsPlugin from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort';
import unicornPlugin from 'eslint-plugin-unicorn';
import unusedImportsPlugin from 'eslint-plugin-unused-imports';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';

import prettierOptions from './prettier.config.js';

export default [
    {
        linterOptions: {
            noInlineConfig: false,
            reportUnusedDisableDirectives: 'error',
        },
    },
    {
        ignores: [
            'dist/*',
            'node_modules/*',
            '**/*.config.{js,ts}',
            '**/*.test.{js,ts}',
            'coverage/*',
            'src/components/ui/*',
        ],
    },
    ...tseslint.configs.recommendedTypeChecked,
    {
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            globals: { ...globals.browser },
            parser: tseslint.parser,
            parserOptions: {
                ecmaVersion: 2023,
                sourceType: 'module',
                project: './tsconfig.json',
                tsconfigRootDir: import.meta.dirname,
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
    },
    jsPlugin.configs.recommended,
    unicornPlugin.configs.recommended,
    prettierConfig,
    {
        files: ['**/*.{ts,tsx,js}'],
        plugins: {
            '@typescript-eslint': tseslint.plugin,
            'unused-imports': unusedImportsPlugin,
            'simple-import-sort': simpleImportSortPlugin,
            prettier: prettierPlugin,
            'react-hooks': reactHooksPlugin,
            react: reactPlugin,
        },
        rules: {
            'simple-import-sort/imports': 'error',
            'simple-import-sort/exports': 'error',
            'unused-imports/no-unused-imports': 'warn',
            '@typescript-eslint/consistent-type-imports': 'off',
            '@typescript-eslint/explicit-function-return-type': 'error',
            '@typescript-eslint/consistent-type-assertions': ['error', { assertionStyle: 'never' }],
            '@typescript-eslint/explicit-member-accessibility': [
                'error',
                { accessibility: 'explicit', overrides: { constructors: 'off' } },
            ],
            '@typescript-eslint/member-ordering': 'error',
            'prettier/prettier': ['error', prettierOptions],
            'unicorn/no-null': 'off',
            'unicorn/filename-case': 'off',
            'unicorn/prevent-abbreviations': 'off',
            'unicorn/no-empty-file': 'warn',
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'error',
            'no-unused-vars': 'off',
            'object-shorthand': ['error', 'always'],
        },
    },
];

import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        globals: true,
        environment: 'jsdom',
        coverage: {
            exclude: ['**/*.config.*', './src/index.tsx', '**/vite-env.*'],
            reporter: ['text', 'json-summary', 'json'],
            reportOnFailure: true,
            thresholds: {
                lines: 25,
                branches: 25,
                functions: 25,
                statements: 25,
            },
        },
    },
});

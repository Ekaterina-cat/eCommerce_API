import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
    test: {
        globals: true,
        environment: 'jsdom',
        coverage: {
            exclude: [
                '**/*.config.*',
                './src/index.tsx',
                '**/vite-env.*',
                'src/components/ui',
                './src/lib',
                '**/*/constants',
            ],
            reporter: ['text', 'json-summary', 'json', 'html'],
            reportOnFailure: true,
            thresholds: {
                lines: 25,
                branches: 25,
                functions: 25,
                statements: 25,
            },
        },
    },
    resolve: {
        alias: {
            '@assets': path.resolve(__dirname, './src/assets'),
            '@components': path.resolve(__dirname, './src/components'),
            '@pages': path.resolve(__dirname, './src/pages'),
            '@utils': path.resolve(__dirname, './src/utils'),
            '@services': path.resolve(__dirname, './src/services'),
            '@constants': path.resolve(__dirname, './src/constants'),
            '@types': path.resolve(__dirname, './src/types'),
            '@hooks': path.resolve(__dirname, './src/hooks'),
            '@routes': path.resolve(__dirname, './src/routes'),
            '@lib': path.resolve(__dirname, './src/lib'),
        },
    },
});

import '@testing-library/jest-dom';

import type { Client } from '@commercetools/ts-client';
import type { JSX } from 'react';
import type { LinkProps } from 'react-router';
import { createPath } from 'react-router';
import { vi } from 'vitest';

vi.stubEnv('VITE_PROJECT_KEY', 'test-project');
vi.stubEnv('VITE_CLIENT_ID', 'test-client-id');
vi.stubEnv('VITE_CLIENT_SECRET', 'test-secret');
vi.stubEnv('VITE_OAUTH_URI', 'https://fake-oauth');
vi.stubEnv('VITE_BASE_URI', 'https://fake-api');
vi.stubEnv('VITE_SCOPES', 'manage_project:project');

vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom');
    return {
        ...actual,
        Link: ({ children, to }: LinkProps): JSX.Element => {
            const href = typeof to === 'string' ? to : createPath(to);

            return <a href={href}>{children}</a>;
        },
    };
});

vi.mock('@commercetools/platform-sdk', async () => {
    const actual = await vi.importActual<typeof import('@commercetools/platform-sdk')>('@commercetools/platform-sdk');
    return {
        ...actual,
        createApiBuilderFromCtpClient: vi.fn(),
    };
});

vi.mock('@commercetools/ts-client', async () => {
    const actual = await vi.importActual<typeof import('@commercetools/ts-client')>('@commercetools/ts-client');
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    const mockClient: Client = {
        execute: vi.fn(),
    } as unknown as Client;

    return {
        ...actual,
        ClientBuilder: vi.fn().mockImplementation(() => ({
            withPasswordFlow: vi.fn().mockReturnThis(),
            withHttpMiddleware: vi.fn().mockReturnThis(),
            build: vi.fn().mockReturnValue(mockClient),
        })),
    };
});

globalThis.ResizeObserver = vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
}));

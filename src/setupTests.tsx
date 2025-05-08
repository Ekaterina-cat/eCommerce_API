import type { JSX } from 'react';
import type { LinkProps } from 'react-router';
import { createPath } from 'react-router';
import { vi } from 'vitest';

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

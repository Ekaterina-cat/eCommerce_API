import { ROUTE_PATH } from '@routes/constants/routes.ts';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { describe, it } from 'vitest';

import { Login } from './Login.tsx';

describe('Login', () => {
    it('renders Login', () => {
        render(
            <MemoryRouter initialEntries={[ROUTE_PATH.LOGIN]}>
                <Login />
            </MemoryRouter>,
        );
    });
});

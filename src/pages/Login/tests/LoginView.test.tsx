import { ROUTE_PATH } from '@routes/constants/routes.ts';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { describe, it } from 'vitest';

import { LoginView } from '../LoginView.tsx';

describe('LoginView', () => {
    it('renders LoginView', () => {
        render(
            <MemoryRouter initialEntries={[ROUTE_PATH.LOGIN]}>
                <LoginView />
            </MemoryRouter>,
        );
    });
});

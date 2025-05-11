import LoginFormContainer from '@components/LoginForm/LoginFormContainer';
import { ROUTE_PATH } from '@routes/constants/routes.ts';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { describe, it } from 'vitest';

describe('LoginFormContainer', () => {
    it('renders LoginFormContainer', () => {
        render(
            <MemoryRouter initialEntries={[ROUTE_PATH.LOGIN]}>
                <LoginFormContainer />
            </MemoryRouter>,
        );
    });
});

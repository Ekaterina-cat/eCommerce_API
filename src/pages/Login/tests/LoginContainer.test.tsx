import { LoginContainer } from '@pages/Login/LoginContainer';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { describe, it } from 'vitest';

describe('LoginContainer', () => {
    it('renders without crashing', () => {
        render(
            <MemoryRouter>
                <LoginContainer />
            </MemoryRouter>,
        );
    });
});

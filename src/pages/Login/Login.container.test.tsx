import { LoginNavigation } from '@pages/Login/Login.container.tsx';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { describe, it } from 'vitest';

describe('LoginNavigation', () => {
    it('renders without crashing', () => {
        render(
            <MemoryRouter>
                <LoginNavigation />
            </MemoryRouter>,
        );
    });
});

import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { describe, it } from 'vitest';

import { RegisterNavigation } from './Register.container';

describe('RegisterNavigation', () => {
    it('navigates to login page when button is clicked', () => {
        render(
            <MemoryRouter>
                <RegisterNavigation />
            </MemoryRouter>,
        );
    });
});

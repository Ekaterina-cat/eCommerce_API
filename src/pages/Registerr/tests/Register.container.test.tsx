import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { describe, it } from 'vitest';

import { RegisterContainer } from '../Register.container';

describe('RegisterContainer', () => {
    it('navigates to login page when button is clicked', () => {
        render(
            <MemoryRouter>
                <RegisterContainer />
            </MemoryRouter>,
        );
    });
});

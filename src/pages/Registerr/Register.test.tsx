import { ROUTE_PATH } from '@routes/constants/routes.constant.ts';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { describe, it } from 'vitest';

import { Register } from './Register.tsx';

describe('Register', () => {
    it('renders Register', () => {
        render(
            <MemoryRouter initialEntries={[ROUTE_PATH.LOGIN]}>
                <Register />
            </MemoryRouter>,
        );
    });
});

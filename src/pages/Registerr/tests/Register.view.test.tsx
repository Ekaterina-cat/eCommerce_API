import { ROUTE_PATH } from '@routes/constants/routes.constant.ts';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { describe, it } from 'vitest';

import { RegisterView } from '../Register.view.tsx';

describe('RegisterView', () => {
    it('renders Register', () => {
        render(
            <MemoryRouter initialEntries={[ROUTE_PATH.LOGIN]}>
                <RegisterView />
            </MemoryRouter>,
        );
    });
});

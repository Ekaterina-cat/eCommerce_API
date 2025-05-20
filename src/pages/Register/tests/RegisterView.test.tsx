import { ROUTE_PATH } from '@routes/constants/routes.ts';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { describe, it } from 'vitest';

import { RegisterView } from '../RegisterView.tsx';

describe('RegisterView', () => {
    it('renders RegisterView', () => {
        render(
            <MemoryRouter initialEntries={[ROUTE_PATH.LOGIN]}>
                <RegisterView />
            </MemoryRouter>,
        );
    });
});

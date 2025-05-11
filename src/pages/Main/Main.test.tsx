import { ROUTE_PATH } from '@routes/constants/routes.ts';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { describe, it } from 'vitest';

import { Main } from './Main.tsx';

describe('Main', () => {
    it('renders Main', () => {
        render(
            <MemoryRouter initialEntries={[ROUTE_PATH.MAIN]}>
                <Main />
            </MemoryRouter>,
        );
    });
});

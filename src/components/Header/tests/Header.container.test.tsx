import { ROUTE_PATH } from '@routes/constants/routes.constant.ts';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { describe, it } from 'vitest';

import HeaderContainer from '../Header.container.tsx';

describe('HeaderContainer', () => {
    it('calls HeaderView ', () => {
        render(
            <MemoryRouter initialEntries={[ROUTE_PATH.MAIN]}>
                <HeaderContainer />
            </MemoryRouter>,
        );
    });
});

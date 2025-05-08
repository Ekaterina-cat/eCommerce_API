import HeaderView from '@components/Header/Header.view';
import { ROUTE_PATH } from '@routes/constants/routes.constant.ts';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { describe, it } from 'vitest';

describe('HeaderView', () => {
    it('renders HeaderView', () => {
        render(
            <MemoryRouter initialEntries={[ROUTE_PATH.MAIN]}>
                <HeaderView onLogout={() => false} />
            </MemoryRouter>,
        );
    });
});

import Header from '@components/Header/Header.tsx';
import { ROUTE_PATH } from '@routes/constants/routes.ts';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { describe, it } from 'vitest';

describe('Header', () => {
    it('render header', () => {
        render(
            <MemoryRouter initialEntries={[ROUTE_PATH.MAIN]}>
                <Header />
            </MemoryRouter>,
        );
    });
});

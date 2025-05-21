import { LoginContainer } from '@pages/Login/LoginContainer.tsx';
import { Main } from '@pages/Main/Main.tsx';
import { ROUTE_PATH } from '@routes/constants/routes.ts';
import { useUserStore } from '@store/login.store.ts';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router';
import { describe, expect, it, vi } from 'vitest';

describe('LoginContainer', () => {
    it('should show LoginContainer when user is not logged in', () => {
        vi.mocked(useUserStore).setState({ isLoggedIn: false });

        render(
            <MemoryRouter initialEntries={[ROUTE_PATH.LOGIN]}>
                <Routes>
                    <Route path={ROUTE_PATH.LOGIN} element={<LoginContainer />} />
                </Routes>
            </MemoryRouter>,
        );

        expect(screen.getByText('TO REGISTER')).toBeDefined();
    });

    it('should redirect to main when user is already logged in', () => {
        vi.mocked(useUserStore).setState({ isLoggedIn: true });

        render(
            <MemoryRouter initialEntries={[ROUTE_PATH.LOGIN]}>
                <Routes>
                    <Route path={ROUTE_PATH.LOGIN} element={<LoginContainer />} />
                    <Route path={ROUTE_PATH.MAIN} element={<Main />} />
                </Routes>
            </MemoryRouter>,
        );

        expect(screen.getByText('Main')).toBeDefined();
    });
});

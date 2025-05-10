import { LoginNavigation } from '@pages/Login/Login.container';
import { Main } from '@pages/Main/Main.tsx';
import { ROUTE_PATH } from '@routes/constants/routes.ts';
import ProtectedRoute from '@routes/guards/ProtectedRoute';
import { useUserStore } from '@store/login.store.ts';
import { render, screen } from '@testing-library/react';
import type { JSX } from 'react';
import { MemoryRouter, Route, Routes } from 'react-router';
import { beforeEach, describe, expect, it, vi } from 'vitest';

vi.mock('@pages/Login/Login.tsx', () => ({
    Login: (): JSX.Element => <div>Login</div>,
}));

vi.mock('@pages/Main/Main.tsx', () => ({
    Main: (): JSX.Element => <div>Main</div>,
}));

describe('ProtectedRoute', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('should redirect to main when user is logged in', () => {
        vi.mocked(useUserStore).setState({ isLoggedIn: true });

        render(
            <MemoryRouter initialEntries={[ROUTE_PATH.LOGIN]}>
                <Routes>
                    <Route path={ROUTE_PATH.MAIN} element={<Main />} />
                    <Route element={<ProtectedRoute />}>
                        <Route path={ROUTE_PATH.LOGIN} element={<LoginNavigation />} />
                    </Route>
                </Routes>
            </MemoryRouter>,
        );

        expect(screen.getByText('Main')).toBeDefined();
    });

    it('should show Login when user is not logged in', () => {
        vi.mocked(useUserStore).setState({ isLoggedIn: false });

        render(
            <MemoryRouter initialEntries={[ROUTE_PATH.LOGIN]}>
                <Routes>
                    <Route path={ROUTE_PATH.MAIN} element={<Main />} />
                    <Route element={<ProtectedRoute />}>
                        <Route path={ROUTE_PATH.LOGIN} element={<LoginNavigation />} />
                    </Route>
                </Routes>
            </MemoryRouter>,
        );

        expect(screen.getByText('TO LOGIN')).toBeDefined();
    });
});

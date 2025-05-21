import { ROUTE_PATH } from '@routes/constants/routes';
import { useUserStore } from '@store/login.store.ts';
import type { JSX } from 'react';
import { Navigate, useNavigate } from 'react-router';

import { LoginView } from './LoginView';

export const LoginContainer = (): JSX.Element => {
    const isLoggedIn = useUserStore((state) => state.isLoggedIn);
    const navigate = useNavigate();

    if (isLoggedIn) {
        return <Navigate replace to={ROUTE_PATH.MAIN} />;
    }

    const handleNavigateToRegister = (): void => {
        void navigate(ROUTE_PATH.REGISTER);
    };

    return <LoginView onRegister={handleNavigateToRegister} />;
};

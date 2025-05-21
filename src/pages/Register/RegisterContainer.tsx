import { ROUTE_PATH } from '@routes/constants/routes.ts';
import { useUserStore } from '@store/login.store.ts';
import type { JSX } from 'react';
import { Navigate, useNavigate } from 'react-router';

import { RegisterView } from './RegisterView.tsx';

export const RegisterContainer = (): JSX.Element => {
    const isLoggedIn = useUserStore((state) => state.isLoggedIn);
    const navigate = useNavigate();

    if (isLoggedIn) {
        return <Navigate replace to={ROUTE_PATH.MAIN} />;
    }

    const handleNavigateToLogin = (): void => {
        void navigate(ROUTE_PATH.LOGIN);
    };

    return <RegisterView onLogin={handleNavigateToLogin} />;
};

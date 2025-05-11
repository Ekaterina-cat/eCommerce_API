import { ROUTE_PATH } from '@routes/constants/routes';
import type { JSX } from 'react';
import { useNavigate } from 'react-router';

import { LoginView } from './Login.view';

export const LoginContainer = (): JSX.Element => {
    const navigate = useNavigate();

    const handleNavigateToRegister = (): void => {
        void navigate(ROUTE_PATH.REGISTER);
    };

    return (
        <>
            <LoginView onRegister={handleNavigateToRegister} />
        </>
    );
};

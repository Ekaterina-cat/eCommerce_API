import { ROUTE_PATH } from '@routes/constants/routes.ts';
import type { JSX } from 'react';
import { useNavigate } from 'react-router';

import { RegisterView } from './RegisterView.tsx';

export const RegisterContainer = (): JSX.Element => {
    const navigate = useNavigate();

    const handleNavigateToLogin = (): void => {
        void navigate(ROUTE_PATH.LOGIN);
    };

    return <RegisterView onLogin={handleNavigateToLogin} />;
};

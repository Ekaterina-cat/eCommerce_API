import { ROUTE_PATH } from '@routes/constants/routes';
import type { JSX } from 'react';
import { useNavigate } from 'react-router';

import { RegisterView } from './Register.view';

export const RegisterNavigation = (): JSX.Element => {
    const navigate = useNavigate();

    const handleClick = (): void => {
        void navigate(ROUTE_PATH.LOGIN);
    };

    return <RegisterView onRegisterClick={handleClick} />;
};

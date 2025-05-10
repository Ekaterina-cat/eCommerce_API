import LoginFormContainer from '@components/LoginForm/LoginFormContainer';
import { Button } from '@components/ui/Button';
import { ROUTE_PATH } from '@routes/constants/routes';
import type { JSX } from 'react';
import { useNavigate } from 'react-router';

export const LoginNavigation = (): JSX.Element => {
    const navigate = useNavigate();

    const handleClick = (): void => {
        void navigate(ROUTE_PATH.REGISTER);
    };

    return (
        <>
            <LoginFormContainer />
            <Button onClick={handleClick}>TO LOGIN</Button>
        </>
    );
};

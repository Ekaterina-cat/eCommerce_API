import LoginFormContainer from '@components/LoginForm/LoginFormContainer';
import { Button } from '@components/ui/Button';
import type { JSX } from 'react';

interface LoginProps {
    onRegister?: () => void;
}

export const LoginView = ({ onRegister }: LoginProps): JSX.Element => {
    return (
        <>
            <LoginFormContainer />
            <Button onClick={onRegister}>TO REGISTER</Button>
        </>
    );
};

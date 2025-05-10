import { Button } from '@components/ui/button-reusable';
import type { JSX } from 'react';
interface LoginProps {
    onLoginClick?: () => void;
}

export const LoginView = ({ onLoginClick }: LoginProps): JSX.Element => {
    return (
        <div>
            <Button onClick={onLoginClick}>TO LOGIN</Button>
        </div>
    );
};

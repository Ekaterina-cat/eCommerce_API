import { RegistrationFormContainer } from '@components/RegistrationForm/RegistrationFormContainer';
import { Button } from '@components/ui/Button';
import type { JSX } from 'react';

interface RegisterProps {
    onLogin?: () => void;
}
export const RegisterView = ({ onLogin }: RegisterProps): JSX.Element => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <RegistrationFormContainer />
            <Button onClick={onLogin} className="mt-4">
                TO LOGIN
            </Button>
        </div>
    );
};

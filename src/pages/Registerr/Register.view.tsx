import { Button } from '@components/ui/Button';
import type { JSX } from 'react';

interface RegisterProps {
    onLogin?: () => void;
}
export const RegisterView = ({ onLogin }: RegisterProps): JSX.Element => {
    return <Button onClick={onLogin}>TO LOGIN</Button>;
};

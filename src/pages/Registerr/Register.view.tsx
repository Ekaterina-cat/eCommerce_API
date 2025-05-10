import { Button } from '@components/ui/Button';
import type { JSX } from 'react';
interface RegisterProps {
    onRegisterClick?: () => void;
}
export const RegisterView = ({ onRegisterClick }: RegisterProps): JSX.Element => {
    return <Button onClick={onRegisterClick}>TO REGISTER</Button>;
};

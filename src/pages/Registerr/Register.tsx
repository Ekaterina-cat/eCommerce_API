import { Button } from '@components/ui/Button';
import { ROUTE_PATH } from '@routes/constants/routes';
import type { JSX } from 'react';
import { useNavigate } from 'react-router';

export const Register = (): JSX.Element => {
    const navigate = useNavigate();

    const handleClick = (): void => {
        void navigate(ROUTE_PATH.LOGIN);
    };
    return <Button onClick={handleClick}>TO REGISTER</Button>;
};

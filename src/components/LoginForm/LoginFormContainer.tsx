import type { LoginInputs } from '@components/LoginForm/types/LoginForm.ts';
import { ROUTE_PATH } from '@routes/constants/routes.ts';
import { clientService } from '@services/client/client.service.ts';
import { useUserStore } from '@store/login.store.ts';
import type { JSX } from 'react';
import { useNavigate } from 'react-router';

import LoginFormView from './LoginFormView.tsx';

const LoginFormContainer = (): JSX.Element => {
    const loggedInErrorMessage = useUserStore((state) => state.loggedInErrorMessage);
    const updateIsLoggedIn = useUserStore((state) => state.updateIsLoggedIn);
    const updateLoggedInErrorMessage = useUserStore((state) => state.updateLoggedInErrorMessage);
    const errorCallback = (errorMessage: string): void => {
        updateLoggedInErrorMessage(errorMessage);
    };
    const navigate = useNavigate();

    const handleFormSubmit = async (data: LoginInputs): Promise<void> => {
        const { email, password } = data;
        const customerResult = await clientService.login({ email, password, errorCallback });

        if (customerResult) {
            updateIsLoggedIn(true);
            await navigate(ROUTE_PATH.MAIN);
        }
    };

    return (
        <LoginFormView
            handleFormSubmit={(data) => {
                void handleFormSubmit(data);
            }}
            loggedInErrorMessage={loggedInErrorMessage}
        />
    );
};

export default LoginFormContainer;

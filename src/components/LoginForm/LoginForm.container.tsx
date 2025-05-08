import type { LoginInputs } from '@components/LoginForm/types/LoginForm.ts';
import { ROUTE_PATH } from '@routes/constants/routes.constant.ts';
import { clientService } from '@services/client.service.ts';
import { useUserStore } from '@store/store.ts';
import type { FormEvent, JSX } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';

import LoginFormView from './LoginForm.view.tsx';

const LoginFormContainer = (): JSX.Element => {
    const loggedInErrorMessage = useUserStore((state) => state.loggedInErrorMessage);
    const updateIsLoggedIn = useUserStore((state) => state.updateIsLoggedIn);
    const updateLoggedInErrorMessage = useUserStore((state) => state.updateLoggedInErrorMessage);
    const errorCallback = (errorMessage: string): void => {
        updateLoggedInErrorMessage(errorMessage);
    };
    const navigate = useNavigate();
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm<LoginInputs>();
    const onSubmit: SubmitHandler<LoginInputs> = async ({ email, password }): Promise<void> => {
        const customerResult = await clientService.login({ email, password, errorCallback });

        if (customerResult) {
            updateIsLoggedIn(true);
            await navigate(ROUTE_PATH.MAIN);
        }

        reset();
    };
    const handleFormSubmit = (event: FormEvent<HTMLFormElement>): void => void handleSubmit(onSubmit)(event);

    return (
        <LoginFormView
            register={register}
            errors={errors}
            handleFormSubmit={handleFormSubmit}
            loggedInErrorMessage={loggedInErrorMessage}
        />
    );
};

export default LoginFormContainer;

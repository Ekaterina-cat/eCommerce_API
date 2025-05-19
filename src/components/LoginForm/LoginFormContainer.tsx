import type { LoginInputs } from '@components/LoginForm/types/LoginForm.ts';
import { loginValidationSchema } from '@components/LoginForm/validation/loginValidationSchema.ts';
import { zodResolver } from '@hookform/resolvers/zod';
import { ROUTE_PATH } from '@routes/constants/routes.ts';
import { clientService } from '@services/client/client.service.ts';
import { useUserStore } from '@store/login.store.ts';
import React, { JSX } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { z } from 'zod';

import LoginFormView from './LoginFormView.tsx';

const LoginFormContainer = (): JSX.Element => {
    const updateIsLoggedIn = useUserStore((state) => state.updateIsLoggedIn);
    const updateLoggedInErrorMessage = useUserStore((state) => state.updateLoggedInErrorMessage);
    const navigate = useNavigate();

    const form = useForm<z.infer<typeof loginValidationSchema>>({
        resolver: zodResolver(loginValidationSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });
    const errorCallback = (errorMessage: string): void => {
        updateLoggedInErrorMessage(errorMessage);
    };

    const onSubmit = async (data: LoginInputs): Promise<void> => {
        const { email, password } = data;
        const customerResult = await clientService.login({ email, password, errorCallback });

        if (customerResult) {
            updateIsLoggedIn(true);
            form.reset();
            await navigate(ROUTE_PATH.MAIN);
        }
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        void form.handleSubmit(onSubmit)(event);
    };

    return <LoginFormView form={form} onSubmit={handleSubmit} />;
};

export default LoginFormContainer;

import { ROUTE_PATH } from '@routes/constants/routes.constant.ts';
import { clientService } from '@services/client.service.ts';
import type { FormEvent, JSX } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';

import LoginFormView from './LoginForm.view.tsx';

export type LoginInputs = {
    email: string;
    password: string;
};

const LoginFormContainer = (): JSX.Element => {
    const navigate = useNavigate();
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm<LoginInputs>();
    const onSubmit: SubmitHandler<LoginInputs> = async ({ email, password }): Promise<void> => {
        const customerResult = await clientService.login({ email, password });

        if (customerResult) {
            await navigate(ROUTE_PATH.MAIN);
        }

        reset();
    };
    const handleFormSubmit = (event: FormEvent<HTMLFormElement>): void => void handleSubmit(onSubmit)(event);

    return <LoginFormView register={register} errors={errors} handleFormSubmit={handleFormSubmit} />;
};

export default LoginFormContainer;

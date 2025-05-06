import type { FormEvent, JSX } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import LoginFormView from './LoginForm.view.tsx';

export type LoginInputs = {
    email: string;
    password: string;
};

const LoginFormContainer = (): JSX.Element => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm<LoginInputs>();
    const onSubmit: SubmitHandler<LoginInputs> = (data): void => {
        console.log({ data });
        reset();
    };
    const handleFormSubmit = (event: FormEvent<HTMLFormElement>): void => void handleSubmit(onSubmit)(event);

    return <LoginFormView register={register} errors={errors} handleFormSubmit={handleFormSubmit} />;
};

export default LoginFormContainer;

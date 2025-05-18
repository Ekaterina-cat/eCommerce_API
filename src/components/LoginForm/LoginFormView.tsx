import { Alert } from '@components/Alert/Alert.tsx';
import type { LoginInputs } from '@components/LoginForm/types/LoginForm.ts';
import { Button } from '@components/ui/Button';
import { Form } from '@components/ui/Form';
import React, { JSX } from 'react';
import { UseFormReturn } from 'react-hook-form';

import { LoginFormInput } from './LoginFormInput';

type LoginFormViewProps = {
    form: UseFormReturn<LoginInputs>;
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    loggedInErrorMessage: string;
};

const LoginFormView = ({ form, onSubmit, loggedInErrorMessage }: LoginFormViewProps): JSX.Element => {
    return (
        <>
            <Form {...form}>
                <form className="form space-y-4" onSubmit={onSubmit}>
                    <LoginFormInput
                        form={form}
                        name="email"
                        label="Email"
                        type="email"
                        placeholder="test@email.com"
                        error={form.formState.errors.email}
                    />

                    <LoginFormInput
                        form={form}
                        name="password"
                        label="Password"
                        type="password"
                        error={form.formState.errors.password}
                    />

                    <Button type="submit" className="mb-6 submitInput">
                        Submit
                    </Button>
                </form>
            </Form>
            <Alert errorMessage={loggedInErrorMessage} />
        </>
    );
};

export default LoginFormView;

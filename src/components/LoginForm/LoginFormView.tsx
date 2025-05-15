import { Alert } from '@components/Alert/Alert.tsx';
import type { LoginInputs } from '@components/LoginForm/types/LoginForm.ts';
import { LoginFormErrorMessage } from '@components/LoginForm/types/LoginForm.ts';
import { Button } from '@components/ui/Button';
import { Form } from '@components/ui/Form';
import { TextInput } from '@components/ui/TextInput';
import type { FormEvent, JSX } from 'react';
import { UseFormReturn } from 'react-hook-form';

type LoginFormViewProps = {
    form: UseFormReturn<LoginInputs>;
    onSubmit: (data: LoginInputs) => Promise<void>;
    loggedInErrorMessage: string;
};

const LoginFormView = ({ form, onSubmit, loggedInErrorMessage }: LoginFormViewProps): JSX.Element => {
    const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
        void form.handleSubmit(onSubmit)(event);
    };

    return (
        <>
            <Form {...form}>
                <form className="form" onSubmit={handleSubmit}>
                    <TextInput
                        control={form.control}
                        name="email"
                        label="Email"
                        type="email"
                        placeholder="test@email.com"
                        rules={{ required: true }}
                        errorMessage={LoginFormErrorMessage.EmailRequired}
                    />

                    <TextInput
                        control={form.control}
                        name="password"
                        label="Password"
                        type="password"
                        rules={{ required: true, minLength: 2 }}
                        errorMessage={(error: { type: string }) =>
                            error.type === 'required'
                                ? LoginFormErrorMessage.PasswordRequired
                                : error.type === 'minLength'
                                  ? LoginFormErrorMessage.PasswordMinLength
                                  : LoginFormErrorMessage.InvalidPassword
                        }
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

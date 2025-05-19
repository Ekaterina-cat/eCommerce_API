import FormInput from '@components/FormInput/FormInput.tsx';
import { LoginFormViewProps } from '@components/LoginForm/types/LoginForm.ts';
import { Button } from '@components/ui/Button';
import { Form } from '@components/ui/Form';
import { JSX } from 'react';

const LoginFormView = ({ form, onSubmit }: LoginFormViewProps): JSX.Element => {
    return (
        <>
            <Form {...form}>
                <form className="form space-y-4" onSubmit={onSubmit}>
                    <FormInput
                        control={form.control}
                        name="email"
                        label="Email"
                        type="email"
                        placeholder="test@email.com"
                        error={form.formState.errors.email}
                    />

                    <FormInput
                        control={form.control}
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
        </>
    );
};

export default LoginFormView;

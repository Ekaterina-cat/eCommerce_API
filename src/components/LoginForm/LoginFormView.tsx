import { Alert } from '@components/Alert/Alert.tsx';
import type { LoginInputs } from '@components/LoginForm/types/LoginForm.ts';
import { LoginFormErrorMessage, ValidationRule } from '@components/LoginForm/types/LoginForm.ts';
import { Button } from '@components/ui/Button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@components/ui/Form';
import { Input } from '@components/ui/Input';
import type { JSX } from 'react';
import { useForm } from 'react-hook-form';

type LoginFormViewProps = {
    handleFormSubmit: (data: LoginInputs) => void;
    loggedInErrorMessage: string;
};

const LoginFormView = ({ handleFormSubmit, loggedInErrorMessage }: LoginFormViewProps): JSX.Element => {
    const form = useForm<LoginInputs>();

    const onSubmit = (data: LoginInputs): void => {
        handleFormSubmit(data);
    };

    return (
        <>
            <Form {...form}>
                <form
                    onSubmit={(event) => {
                        void form.handleSubmit(onSubmit)(event);
                    }}
                    className="space-y-6"
                >
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input type="email" placeholder="test@email.com" {...field} />
                                </FormControl>
                                <FormMessage>
                                    {form.formState.errors.email && LoginFormErrorMessage.EmailRequired}
                                </FormMessage>
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input type="password" {...field} />
                                </FormControl>
                                <FormMessage>
                                    {form.formState.errors.password?.type === ValidationRule.Required
                                        ? LoginFormErrorMessage.PasswordRequired
                                        : form.formState.errors.password?.type === ValidationRule.MinLength
                                          ? LoginFormErrorMessage.PasswordMinLength
                                          : LoginFormErrorMessage.InvalidPassword}
                                </FormMessage>
                            </FormItem>
                        )}
                    />

                    <Button type="submit" className="w-full">
                        Submit
                    </Button>
                </form>
            </Form>
            <Alert errorMessage={loggedInErrorMessage} />
        </>
    );
};

export default LoginFormView;

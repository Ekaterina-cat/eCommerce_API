import { Alert } from '@components/Alert/Alert.tsx';
import type { LoginInputs } from '@components/LoginForm/types/LoginForm.ts';
import { LoginFormErrorMessage, ValidationRule } from '@components/LoginForm/types/LoginForm.ts';
import type { FormEvent, JSX } from 'react';
import type { FieldErrors, UseFormRegister } from 'react-hook-form';

type LoginFormViewProps = {
    register: UseFormRegister<LoginInputs>;
    errors: FieldErrors<LoginInputs>;
    handleFormSubmit: (event: FormEvent<HTMLFormElement>) => void;
    loggedInErrorMessage: string;
};

const LoginFormView = ({
    register,
    errors,
    handleFormSubmit,
    loggedInErrorMessage,
}: LoginFormViewProps): JSX.Element => {
    return (
        <>
            <form className="form" onSubmit={handleFormSubmit}>
                <div className="mb-6">
                    <label className="label">Email</label>
                    <input
                        className="input"
                        type="email"
                        placeholder="test@email.com"
                        {...register('email', { required: true })}
                    />
                    {errors.email && <p role="alert">{LoginFormErrorMessage.EmailRequired}</p>}
                </div>
                <div className="mb-6">
                    <label className="label">Password</label>
                    <input
                        className="input"
                        type="password"
                        {...register('password', { required: true, minLength: 2 })}
                        aria-invalid={errors.password ? 'true' : 'false'}
                    />
                    {errors.password && (
                        <p role="alert">
                            {errors.password.type === ValidationRule.Required
                                ? LoginFormErrorMessage.PasswordRequired
                                : errors.password.type === ValidationRule.MinLength
                                  ? LoginFormErrorMessage.PasswordMinLength
                                  : LoginFormErrorMessage.InvalidPassword}
                        </p>
                    )}
                </div>
                <input className="mb-6 submitInput" type="submit" />
            </form>
            <Alert errorMessage={loggedInErrorMessage} />
        </>
    );
};

export default LoginFormView;

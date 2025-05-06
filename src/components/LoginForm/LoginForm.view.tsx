import type { LoginInputs } from '@components/LoginForm/LoginForm.container.tsx';
import { LoginFormErrorMessage, ValidationRule } from '@components/LoginForm/types/LoginForm.ts';
import type { FormEvent, JSX } from 'react';
import type { FieldErrors, UseFormRegister } from 'react-hook-form';

type LoginFormViewProps = {
    register: UseFormRegister<LoginInputs>;
    errors: FieldErrors<LoginInputs>;
    handleFormSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

const LoginFormView = ({ register, errors, handleFormSubmit }: LoginFormViewProps): JSX.Element => {
    return (
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
    );
};

export default LoginFormView;

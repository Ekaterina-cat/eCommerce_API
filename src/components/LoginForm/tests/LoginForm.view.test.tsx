import LoginFormView from '@components/LoginForm/LoginForm.view.tsx';
import type { LoginInputs } from '@components/LoginForm/types/LoginForm.ts';
import { LoginFormErrorMessage, ValidationRule } from '@components/LoginForm/types/LoginForm.ts';
import { render, screen } from '@testing-library/react';
import type { FieldErrors } from 'react-hook-form';
import { describe, expect, it, vi } from 'vitest';

const mockRegister = vi.fn().mockImplementation(() => ({}));
const mockHandleFormSubmit = vi.fn();

describe('LoginFormView', () => {
    const mockErrors: FieldErrors<LoginInputs> = {};

    it('renders LoginFormView', () => {
        render(<LoginFormView register={mockRegister} errors={mockErrors} handleFormSubmit={mockHandleFormSubmit} />);
    });

    it('displays validation errors', () => {
        const mockErrors: FieldErrors<LoginInputs> = {
            email: {
                type: ValidationRule.Required,
                message: LoginFormErrorMessage.EmailRequired,
            },
            password: {
                type: ValidationRule.MinLength,
                message: LoginFormErrorMessage.PasswordMinLength,
            },
        };

        render(<LoginFormView register={mockRegister} errors={mockErrors} handleFormSubmit={mockHandleFormSubmit} />);

        expect(screen.getByText(LoginFormErrorMessage.EmailRequired)).toBeDefined();
        expect(screen.getByText(LoginFormErrorMessage.PasswordMinLength)).toBeDefined();
    });
});

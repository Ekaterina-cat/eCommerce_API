import '@testing-library/jest-dom';

import LoginFormView from '@components/LoginForm/LoginFormView.tsx';
import type { LoginInputs } from '@components/LoginForm/types/LoginForm';
import { LoginFormErrorMessage } from '@components/LoginForm/types/LoginForm.ts';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import type { JSX } from 'react';
import { useForm } from 'react-hook-form';
import { describe, expect, it, vi } from 'vitest';

const TestWrapper = ({
    onSubmit,
    errorMessage,
}: {
    onSubmit: (data: LoginInputs) => Promise<void>;
    errorMessage?: string;
}): JSX.Element => {
    const form = useForm<LoginInputs>({
        defaultValues: {
            email: '',
            password: '',
        },
        mode: 'onSubmit',
    });

    return <LoginFormView form={form} onSubmit={onSubmit} loggedInErrorMessage={errorMessage || ''} />;
};

describe('LoginFormView', () => {
    it('renders form fields and button', () => {
        render(<TestWrapper onSubmit={vi.fn()} />);
        expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
    });

    it('shows validation errors on empty submit', async () => {
        render(<TestWrapper onSubmit={vi.fn()} />);

        fireEvent.click(screen.getByRole('button', { name: /submit/i }));

        await waitFor(() => {
            expect(screen.getByText(LoginFormErrorMessage.EmailRequired)).toBeInTheDocument();
            expect(screen.getByText(LoginFormErrorMessage.PasswordRequired)).toBeInTheDocument();
        });
    });

    it('shows short password error', async () => {
        render(<TestWrapper onSubmit={vi.fn()} />);

        fireEvent.input(screen.getByLabelText(/email/i), {
            target: { value: 'test@email.com' },
        });

        fireEvent.input(screen.getByLabelText(/password/i), {
            target: { value: '1' },
        });

        fireEvent.click(screen.getByRole('button', { name: /submit/i }));

        await waitFor(() => {
            expect(screen.getByText(LoginFormErrorMessage.PasswordMinLength)).toBeInTheDocument();
        });
    });

    it('submits with valid data', async () => {
        const onSubmitMock = vi.fn(() => Promise.resolve());
        render(<TestWrapper onSubmit={onSubmitMock} />);

        fireEvent.input(screen.getByLabelText(/email/i), {
            target: { value: 'test@email.com' },
        });

        fireEvent.input(screen.getByLabelText(/password/i), {
            target: { value: '123456' },
        });

        fireEvent.click(screen.getByRole('button', { name: /submit/i }));

        await waitFor(() => {
            expect(onSubmitMock).toHaveBeenCalledWith({
                email: 'test@email.com',
                password: '123456',
            });
        });
    });

    it('displays error message from props', () => {
        render(<TestWrapper onSubmit={vi.fn()} errorMessage="Some login error" />);
        expect(screen.getByText('Some login error')).toBeInTheDocument();
    });
});

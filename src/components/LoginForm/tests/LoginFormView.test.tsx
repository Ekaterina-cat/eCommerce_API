import '@testing-library/jest-dom';

import LoginFormView from '@components/LoginForm/LoginFormView.tsx';
import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

const mockHandleFormSubmit = vi.fn();

describe('LoginFormView', () => {
    it('renders LoginFormView', () => {
        render(<LoginFormView handleFormSubmit={mockHandleFormSubmit} loggedInErrorMessage={'loggedInErrorMessage'} />);

        expect(screen.getByLabelText(/email/i)).toBeDefined();
        expect(screen.getByLabelText(/password/i)).toBeDefined();
        expect(screen.getByRole('button', { name: /submit/i })).toBeDefined();
    });

    it('displays error message', () => {
        render(<LoginFormView handleFormSubmit={mockHandleFormSubmit} loggedInErrorMessage={'Test error message'} />);

        expect(screen.getByText('Test error message')).toBeDefined();
    });
});

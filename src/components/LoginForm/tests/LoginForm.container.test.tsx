import LoginFormContainer from '@components/LoginForm/LoginForm.container.tsx';
import { render } from '@testing-library/react';
import { describe, it } from 'vitest';

describe('LoginFormContainer', () => {
    it('renders LoginFormContainer', () => {
        render(<LoginFormContainer />);
    });
});

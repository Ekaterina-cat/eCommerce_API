import { render } from '@testing-library/react';
import { describe, it } from 'vitest';

import { Login } from './Login.tsx';

describe('Login', () => {
    it('renders Login', () => {
        render(<Login />);
    });
});

import { render } from '@testing-library/react';
import { describe, it } from 'vitest';

import { Register } from './Register.tsx';

describe('Register', () => {
    it('renders Register', () => {
        render(<Register />);
    });
});

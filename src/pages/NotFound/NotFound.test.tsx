import { render } from '@testing-library/react';
import { describe, it } from 'vitest';

import { NotFound } from './NotFound.tsx';

describe('NotFound', () => {
    it('renders NotFound', () => {
        render(<NotFound />);
    });
});

import Products from '@pages/Products/Products.tsx';
import { render } from '@testing-library/react';
import { describe, it } from 'vitest';

describe('Products', () => {
    it('renders Products', () => {
        render(<Products />);
    });
});

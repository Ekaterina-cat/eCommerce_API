import { LocalizedString } from '@commercetools/platform-sdk';
import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import ProductDetailedView from '../ProductDetailedView';
import { renderLocalizedString, renderValue } from '../types/ProductType';

const mockLocalizedString = (enValue: string): LocalizedString => ({
    'en-US': enValue,
});

describe('ProductDetailedView', () => {
    const mockProps = {
        images: 'test-image.jpg',
        name: mockLocalizedString('Test Product'),
        description: mockLocalizedString('Test Description'),
        price: 100,
        id: '123',
        onProducts: vi.fn(),
    };

    it('renders the product image', () => {
        render(<ProductDetailedView {...mockProps} />);
        const image = screen.getByAltText(mockProps.images || '');
        expect(image).toBeDefined();
    });

    it('displays the correct product name', () => {
        render(<ProductDetailedView {...mockProps} />);
        const productName = renderLocalizedString(mockProps.name);
        expect(screen.getByText(productName)).toBeDefined();
    });

    it('calls onProducts when the back button is clicked', () => {
        render(<ProductDetailedView {...mockProps} />);
        const backButton = screen.getByText(/Back to Products/i);
        backButton.click();
        expect(mockProps.onProducts).toHaveBeenCalled();
    });

    it('displays the correct product price', () => {
        render(<ProductDetailedView {...mockProps} />);
        const productPrice = `\u20AC ${renderValue(mockProps.price)}`;
        expect(screen.getByText(productPrice)).toBeDefined();
    });

    it('displays the correct product id', () => {
        render(<ProductDetailedView {...mockProps} />);
        const productId = `Product Id: ${renderValue(mockProps.id)}`;
        expect(screen.getByText(productId)).toBeDefined();
    });
});

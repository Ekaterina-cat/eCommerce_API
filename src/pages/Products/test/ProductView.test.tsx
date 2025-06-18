import { ProductProjection } from '@commercetools/platform-sdk';
import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import ProductsView from '../ProductsView';

const mockProducts: ProductProjection[] = [
    {
        id: '1',
        version: 1,
        createdAt: '2023-01-01T00:00:00Z',
        lastModifiedAt: '2023-01-01T00:00:00Z',
        productType: {
            id: 'type1',
            typeId: 'product-type',
        },
        name: { 'en-US': 'Product 1' },
        slug: { 'en-US': 'product-1' },
        masterVariant: {
            prices: [
                {
                    id: 'price1',
                    key: 'standard-price',
                    value: {
                        currencyCode: 'EUR',
                        centAmount: 1000,
                        fractionDigits: 2,
                        type: 'centPrecision',
                    },
                },
            ],
            id: 1,
            sku: 'SKU1',
        },
        categories: [],
        variants: [],
    },
    {
        id: '2',
        version: 1,
        createdAt: '2023-01-01T00:00:00Z',
        lastModifiedAt: '2023-01-01T00:00:00Z',
        productType: {
            id: 'type2',
            typeId: 'product-type',
        },
        name: { 'en-US': 'Product 2' },
        slug: { 'en-US': 'product-2' },
        masterVariant: {
            prices: [
                {
                    id: 'price2',
                    key: 'standard-price',
                    value: {
                        currencyCode: 'EUR',
                        centAmount: 2000,
                        fractionDigits: 2,
                        type: 'centPrecision',
                    },
                },
            ],
            id: 2,
            sku: 'SKU2',
        },
        categories: [],
        variants: [],
    },
];

describe('ProductsView', () => {
    it('renders the component with products', () => {
        const mockOnCardClick = vi.fn();
        const mockOnaddTocart = vi.fn();
        render(<ProductsView products={mockProducts} onCardClick={mockOnCardClick} onAddToCard={mockOnaddTocart} />);

        expect(screen.getByText('Products')).toBeDefined();

        for (const product of mockProducts) {
            expect(screen.getByText(product.name['en-US'])).toBeDefined();
            expect(screen.getByText(product.slug['en-US'])).toBeDefined();
        }
    });
});

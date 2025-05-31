import { clientService } from '@services/client/client.service';
import { render, screen, waitFor } from '@testing-library/react';
import { useNavigate, useParams } from 'react-router';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { ProductDetailedContainer } from '../ProductDetailedContainer';

vi.mock('react-router', () => ({
    useNavigate: vi.fn(),
    useParams: vi.fn(),
}));

vi.mock('@services/client/client.service', () => ({
    clientService: {
        getById: vi.fn(),
    },
}));

vi.mock('./ProductDetailedView', () => ({
    default: vi.fn(() => <div>Product Detailed View Mock</div>),
}));

describe('ProductDetailedContainer', () => {
    const mockNavigate = vi.fn();
    const mockById = vi.fn();

    beforeEach(() => {
        vi.clearAllMocks();
        vi.mocked(useNavigate).mockReturnValue(mockNavigate);
        clientService.getById = mockById;
    });

    it('should render loading state initially', () => {
        vi.mocked(useParams).mockReturnValue({ id: undefined });
        render(<ProductDetailedContainer />);
        expect(screen.getByText('Loading...')).toBeDefined();
    });

    it('should fetch product and render ProductDetailedView when product is found', async () => {
        const mockProduct = {
            id: '123',
            name: 'Test Product',
            description: 'Test Description',
            masterVariant: {
                prices: [{ value: { centAmount: 1000 } }],
                images: [{ url: 'http://example.com/image.jpg' }],
            },
        };

        vi.mocked(useParams).mockReturnValue({ id: ':123' });
        mockById.mockResolvedValue(mockProduct);

        render(<ProductDetailedContainer />);

        await waitFor(() => {
            expect(mockById).toHaveBeenCalled();
        });
    });
});

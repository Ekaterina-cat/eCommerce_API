import { ProductProjection } from '@commercetools/platform-sdk';

export interface Price {
    value: {
        currencyCode: string;
        centAmount: number;
    };
}

export interface ProductsViewProps {
    products: ProductProjection[];
}

export interface ProductsViewExtendedProps extends ProductsViewProps {
    onCardClick: (id: string) => void;
    onAddToCard: (productId: string) => void;
}

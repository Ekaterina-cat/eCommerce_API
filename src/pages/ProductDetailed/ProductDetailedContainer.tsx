import { ROUTE_PATH } from '@routes/constants/routes';
import { JSX } from 'react';
import { useNavigate, useParams } from 'react-router';

import ProductDetailedView from './ProductDetailedView';

export const ProductDetailedContainer = (): JSX.Element => {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const handleNavigateToProducts = (): void => {
        void navigate(ROUTE_PATH.PRODUCTS);
    };
    return <ProductDetailedView id={id} onProducts={handleNavigateToProducts} />;
};

import { ROUTE_PATH } from '@routes/constants/routes';
import { JSX } from 'react';
import { useNavigate } from 'react-router';

import { ShoppingCartView } from './ShoppingCartView';

export const ShoppingCartContainer = (): JSX.Element => {
    const navigate = useNavigate();
    const handleNavigateToProducts = (): void => {
        void navigate(ROUTE_PATH.PRODUCTS);
    };
    return <ShoppingCartView onProducts={handleNavigateToProducts} />;
};

import { ProductProjection } from '@commercetools/platform-sdk';
import { ROUTE_PATH } from '@routes/constants/routes';
import { clientService } from '@services/client/client.service';
import { JSX, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import ProductsView from './ProductsView';

const ProductContainer = (): JSX.Element => {
    const [products, setProducts] = useState<ProductProjection[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async (): Promise<void> => {
            try {
                const response = await clientService.getAll();
                console.log(response);
                setProducts(response);
            } catch (error_) {
                setError('Failed to fetch products');
                console.error(error_);
            } finally {
                setLoading(false);
            }
        };

        void fetchProducts();
    }, []);

    const handleCardClick = (id: string): void => {
        void navigate(`${ROUTE_PATH.PRODUCTS}/${id}`);
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return <ProductsView products={products} onCardClick={handleCardClick} />;
};

export default ProductContainer;

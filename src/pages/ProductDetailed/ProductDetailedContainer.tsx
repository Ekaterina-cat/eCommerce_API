import { ProductProjection } from '@commercetools/platform-sdk';
import { ROUTE_PATH } from '@routes/constants/routes';
import { clientService } from '@services/client/client.service';
import { JSX, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

import ProductDetailedView from './ProductDetailedView';

export const ProductDetailedContainer = (): JSX.Element => {
    const [product, setProduct] = useState<ProductProjection | null>(null);
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        const fetchProduct = async (): Promise<void> => {
            try {
                const productsList = await clientService.getListOfProducts();
                console.log(productsList);
                const foundProduct = id?.slice(1) ? productsList.find((prod) => prod.id === id.slice(1)) : undefined;
                if (foundProduct) {
                    setProduct(foundProduct);
                }
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        if (id) {
            fetchProduct().catch((error) => {
                console.error('Error fetching product:', error);
            });
        }
    }, [id]);

    const handleNavigateToProducts = (): void => {
        void navigate(ROUTE_PATH.PRODUCTS);
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <ProductDetailedView
            name={product.name}
            description={product.description}
            price={product.masterVariant.prices?.[0]?.value?.centAmount || 0}
            id={product.id}
            images={product.masterVariant.images?.[0]?.url || ''}
            onProducts={handleNavigateToProducts}
        />
    );
};

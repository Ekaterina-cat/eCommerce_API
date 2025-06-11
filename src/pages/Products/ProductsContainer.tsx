import { Cart, ProductProjection } from '@commercetools/platform-sdk';
import { ROUTE_PATH } from '@routes/constants/routes';
import { clientService } from '@services/client/client.service';
import { JSX, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import ProductsView from './ProductsView';

const ProductContainer = (): JSX.Element => {
    const [products, setProducts] = useState<ProductProjection[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [cart, setCartId] = useState<Cart | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const initializeData = async (): Promise<void> => {
            try {
                const newCart = await clientService.createCart('EUR');
                setCartId(newCart);
                const productsResponse = await clientService.getAll();
                setProducts(productsResponse);
            } catch (error) {
                setError('Failed to initialize data');
                console.error('Initialization error:', error);
            } finally {
                setLoading(false);
            }
        };

        void initializeData();
    }, []);

    const handleAddToCart = async (productId: string): Promise<void> => {
        if (!cart) {
            console.error('Cart is not available');
            return;
        }

        try {
            const updatedCart = await clientService.updateCart({
                cartId: cart.id,
                productId,
                version: cart.version,
            });
            setCartId(updatedCart);
            alert('Product added to cart!');
        } catch (error) {
            console.error('Error adding product to cart:', error);
            alert('Failed to add product to cart.');
        }
    };

    const handleCardClick = (id: string): void => {
        void navigate(`${ROUTE_PATH.PRODUCTS}/${id}`);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <ProductsView
            products={products}
            onCardClick={handleCardClick}
            onAddToCard={(productId: string) => {
                void handleAddToCart(productId);
            }}
        />
    );
};

export default ProductContainer;

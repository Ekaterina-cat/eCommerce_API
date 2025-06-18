import { Cart, ProductProjection } from '@commercetools/platform-sdk';
import useFetch from '@hooks/UseFecth/useFetch';
import { ROUTE_PATH } from '@routes/constants/routes';
import { clientService } from '@services/client/client.service';
import { JSX, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import ProductsView from './ProductsView';

const ProductContainer = (): JSX.Element => {
    const navigate = useNavigate();
    const [cart, setCartId] = useState<Cart | null>(null);
    const [isCartLoading, setIsCartLoading] = useState(true);

    const {
        data: products,
        error: productsError,
        loading: productsLoading,
    } = useFetch<ProductProjection[]>(() => clientService.getAll());

    useEffect(() => {
        const initializeCart = async (): Promise<void> => {
            try {
                const localCartId = localStorage.getItem('cartIdAnon');

                if (localCartId) {
                    const cartData = await clientService.getCart();
                    setCartId(cartData);
                }
            } catch (error) {
                const newCart = await clientService.createCart('EUR');
                localStorage.setItem('cartIdAnon', newCart.id);
                setCartId(newCart);
                console.error('Error initializing cart:', error);
            } finally {
                setIsCartLoading(false);
            }
        };
        void initializeCart();
    }, []);

    const handleAddToCart = async (productId: string): Promise<void> => {
        if (!cart) {
            const newCart = await clientService.createCart('EUR');
            localStorage.setItem('cartIdAnon', newCart.id);
            setCartId(newCart);
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

    if (productsLoading || isCartLoading) return <div>Loading...</div>;
    if (productsError) return <div>{productsError}</div>;

    return (
        <ProductsView
            products={products ?? []}
            onCardClick={handleCardClick}
            onAddToCard={(productId: string) => {
                void handleAddToCart(productId);
            }}
        />
    );
};

export default ProductContainer;

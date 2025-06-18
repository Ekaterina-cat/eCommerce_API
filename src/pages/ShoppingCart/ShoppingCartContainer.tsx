import { Cart, LineItem } from '@commercetools/platform-sdk';
import { ROUTE_PATH } from '@routes/constants/routes';
import { clientService } from '@services/client/client.service';
import { JSX, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import { ShoppingCartView } from './ShoppingCartView';

export const ShoppingCartContainer = (): JSX.Element => {
    const [cart, setCart] = useState<Cart | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCart = async (): Promise<void> => {
            try {
                const cartData = await clientService.getCart();
                setCart(cartData);
            } catch (error) {
                console.error('Error fetching cart:', error);
            } finally {
                setLoading(false);
            }
        };

        void fetchCart();
    }, []);

    const handleReturnToShop = (): void => {
        void navigate(ROUTE_PATH.PRODUCTS);
    };

    const updateLineItemQuantity = async (productId: string, newQuantity: number): Promise<void> => {
        if (!cart) return;

        try {
            const lineItem = cart.lineItems.find((item) => item.productId === productId);
            if (!lineItem) {
                console.error(`No line item found with productId: ${productId}`);
                return;
            }

            const updatedCart = await clientService.updateQuantityCart({
                cartId: cart.id,
                lineItemId: lineItem.id,
                version: cart.version,
                quantity: newQuantity,
            });
            setCart(updatedCart);
        } catch (error) {
            console.error('Error updating item quantity:', error);
        }
    };

    const handleIncrement = (productId: string, quantity: number): void => {
        void updateLineItemQuantity(productId, quantity + 1);
    };

    const handleDecrement = (productId: string, quantity: number): void => {
        if (quantity <= 1) return;
        void updateLineItemQuantity(productId, quantity - 1);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    const cartItems =
        cart?.lineItems?.map((item: LineItem) => ({
            id: item.id,
            name: item.name['en-US'] || 'Unknown Product',
            productId: item.productId || 'Unknown ProductID',
            quantity: item.quantity,
            price: {
                value: {
                    centAmount: item.price.value.centAmount,
                    currencyCode: item.price.value.currencyCode,
                },
            },
        })) || [];

    return (
        <ShoppingCartView
            onProducts={handleReturnToShop}
            cartItems={cartItems}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
        />
    );
};

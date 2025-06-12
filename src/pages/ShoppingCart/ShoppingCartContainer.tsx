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

    if (loading) {
        return <div>Loading...</div>;
    }

    const cartItems: Array<{
        id: string;
        name: string;
        quantity: number;
        price: {
            value: {
                centAmount: number;
                currencyCode: string;
            };
        };
    }> =
        cart?.lineItems?.map((item: LineItem) => ({
            id: item.id,
            name: item.name['en-US'] || 'Unknown Product',
            quantity: item.quantity,
            price: {
                value: {
                    centAmount: item.price.value.centAmount,
                    currencyCode: item.price.value.currencyCode,
                },
            },
        })) || [];

    return <ShoppingCartView onProducts={handleReturnToShop} cartItems={cartItems} />;
};

import { Button } from '@components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@components/ui/Cards';
import { IconEmptyBoxtSvg } from '@constants/Constant';
import { JSX } from 'react';
interface CartItem {
    id: string;
    name: string;
    quantity: number;
    price: {
        value: {
            centAmount: number;
            currencyCode: string;
        };
    };
}
interface ShoppingCartProps {
    onProducts?: VoidFunction;
    cartItems: CartItem[];
}

export const ShoppingCartView = ({ onProducts, cartItems }: ShoppingCartProps): JSX.Element => {
    if (!cartItems || cartItems.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen space-y-10">
                <IconEmptyBoxtSvg />
                <div className="flex justify-center items-center">
                    <p className="text-red-500 uppercase border-4 border-grey-500 p-6">Your Cart Is Currently Empty.</p>
                </div>
                <Button onClick={onProducts}>Return to shop</Button>
            </div>
        );
    }

    return (
        <div className="flex flex-col">
            {cartItems.map((cartItem) => (
                <div key={cartItem.id} className="flex justify-between items-center mb-4">
                    <Card className="overflow-hidden flex flex-col justify-center w-1/2 h-full group hover:border-green-500 transition-all duration-800">
                        <CardHeader className="flex-grow flex flex-col items-center">
                            <CardTitle className="text-center">{cartItem.name}</CardTitle>
                            <div className="flex justify-center items-center h-48 w-full">
                                <img
                                    src={`public/${cartItem.name}_1.png`}
                                    alt={cartItem.name}
                                    className="object-contain max-h-full max-w-full transform group-hover:scale-115 transition-transform duration-800 origin-center"
                                />
                            </div>
                        </CardHeader>
                        <CardContent className="flex justify-center">
                            <p className="text-lg font-semibold">
                                {cartItem.price?.value?.currencyCode ?? 'N/A'}{' '}
                                {cartItem.price?.value?.centAmount ? cartItem.price.value.centAmount / 100 : 'N/A'}
                            </p>
                        </CardContent>
                    </Card>
                    <div className="flex flex-col justify-center items-center w-1/2 space-y-2">
                        <Button>Button 1</Button>
                        <Button>Button 2</Button>
                    </div>
                </div>
            ))}
        </div>
    );
};

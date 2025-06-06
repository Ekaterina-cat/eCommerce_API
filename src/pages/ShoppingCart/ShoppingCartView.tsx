import { Button } from '@components/ui/Button';
import { IconEmptyBoxtSvg } from '@constants/Constant';
import { JSX } from 'react';

import { ShoppingCartProps } from './type/ShoppingCartType';

export const ShoppingCartView = ({ onProducts }: ShoppingCartProps): JSX.Element => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen space-y-10">
            <IconEmptyBoxtSvg />
            <div className="flex justify-center items-center">
                <p className="text-red-500 uppercase border-4 border-grey-500 p-6">Your Cart Is Currently Empty.</p>
            </div>
            <Button onClick={onProducts}>Return to shop</Button>
        </div>
    );
};

import { Button } from '@components/ui/Button';
import { JSX, useState } from 'react';

export const Counter = (): JSX.Element => {
    const [count, setCount] = useState(1);

    const valueCount = (): void => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    return (
        <div className="flex flex-row border-2 border-gray-900 rounded-lg">
            <Button className="border-none bg-amber-50 text-amber-950 font-bold text-lg" onClick={valueCount}>
                -
            </Button>
            <h1 className="flex items-center justify-center flex-1 font-bold mx-4">{count}</h1>
            <Button
                className="border-none bg-amber-50 text-amber-950 font-bold text-lg"
                onClick={() => setCount(count + 1)}
            >
                +
            </Button>
        </div>
    );
};

import { Button } from '@components/ui/Button';
import { JSX } from 'react';

interface CounterViewProps {
    count: number;
    onIncrement: () => void;
    onDecrement: () => void;
}

export const CounterView = ({ count, onIncrement, onDecrement }: CounterViewProps): JSX.Element => {
    return (
        <div className="flex flex-row border-2 border-gray-900 rounded-lg">
            <Button className="border-none bg-amber-50 text-amber-950 font-bold text-lg" onClick={onDecrement}>
                -
            </Button>
            <h1 className="flex items-center justify-center flex-1 font-bold mx-4">{count}</h1>
            <Button className="border-none bg-amber-50 text-amber-950 font-bold text-lg" onClick={onIncrement}>
                +
            </Button>
        </div>
    );
};

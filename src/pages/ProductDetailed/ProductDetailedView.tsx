import { Button } from '@components/ui/Button';
import { JSX } from 'react';

interface ProductDetailedProps {
    id?: string;
    onProducts?: () => void;
}

const ProductDetailedView = ({ id, onProducts }: ProductDetailedProps): JSX.Element => {
    return (
        <div>
            <Button onClick={onProducts}>Back to Products</Button>
            <h1>Product ID: {id}</h1>
            <p>ProductDetailed work</p>
        </div>
    );
};

export default ProductDetailedView;

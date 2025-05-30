import { Button } from '@components/ui/Button';
import { JSX } from 'react';

import { ProductDetailedProps, renderLocalizedString, renderValue } from './types/ProductType';

const ProductDetailedView = ({
    images,
    name,
    description,
    price,
    id,
    onProducts,
}: ProductDetailedProps): JSX.Element => {
    return (
        <div>
            <Button onClick={onProducts}>Back to Products</Button>
            <img src={images} alt={images} />
            <h1>{renderLocalizedString(name)}</h1>
            <p>{renderLocalizedString(description)}</p>
            <p>Price: {renderValue(price)} EUR</p>
            <p>Product Id: {renderValue(id)}</p>
            <Button>Add to Cart</Button>
        </div>
    );
};

export default ProductDetailedView;

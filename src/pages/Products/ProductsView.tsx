import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@components/ui/Cards';
import { JSX } from 'react';

import { ProductsViewExtendedProps } from './type/Product';

const ProductsView = ({ products, onCardClick }: ProductsViewExtendedProps): JSX.Element => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.map((product) => (
                    <Card
                        key={product.id}
                        className="overflow-hidden"
                        onClick={() => onCardClick(product.id)}
                        style={{ cursor: 'pointer' }}
                    >
                        <CardHeader>
                            <CardTitle>{product.name['en-US']}</CardTitle>
                            <CardDescription>{product.slug['en-US']}</CardDescription>
                            <img src={`./src/assets/${product.name['en-US']}_1`} alt={product.name['en-US']} />
                        </CardHeader>
                        <CardContent>
                            <p className="text-lg font-semibold">
                                {product.masterVariant.prices?.[0]?.value?.currencyCode ?? 'N/A'}{' '}
                                {product.masterVariant.prices?.[0]?.value?.centAmount
                                    ? product.masterVariant.prices[0].value.centAmount / 100
                                    : 'N/A'}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default ProductsView;

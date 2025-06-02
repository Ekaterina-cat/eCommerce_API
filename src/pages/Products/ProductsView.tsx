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
                        className="overflow-hidden flex flex-col h-full group hover:border-blue-500 transition-all duration-800"
                        onClick={() => onCardClick(product.id)}
                        style={{ cursor: 'pointer' }}
                    >
                        <CardHeader className="flex-grow flex flex-col items-center">
                            <CardTitle className="text-center">{product.name['en-US']}</CardTitle>
                            <CardDescription className="text-center">{product.slug['en-US']}</CardDescription>
                            <div className="flex justify-center items-center h-48 w-full">
                                <img
                                    src={`public/${product.name['en-US']}_1.png`}
                                    alt={product.name['en-US']}
                                    className="object-contain max-h-full max-w-full transform group-hover:scale-115 transition-transform duration-800 origin-center"
                                />
                            </div>
                        </CardHeader>
                        <CardContent className="flex justify-center">
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

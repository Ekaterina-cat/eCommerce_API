import { Button } from '@components/ui/Button';
import { JSX } from 'react';

import { euroSign, ProductDetailedProps, renderLocalizedString, renderValue } from './types/ProductType';

const ProductDetailedView = ({
    images,
    name,
    description,
    price,
    id,
    onProducts,
}: ProductDetailedProps): JSX.Element => {
    return (
        <div className="flex flex-col items-center">
            <Button onClick={onProducts} className="self-start mb-5">
                <svg
                    className="w-3.5 h-3.5 ms-2 rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                </svg>
                Back to Products
            </Button>
            <div className="flex w-full gap-10">
                <div className="flex-1 flex justify-center items-center">
                    <img src={images} alt={images} />
                </div>
                <div className="flex-1 flex flex-col gap-4">
                    <h1 className="capitalize font-bold text-3xl">{renderLocalizedString(name)}</h1>
                    <p className="text-gray-400 border-b-2 border-gray-300 pb-2">
                        SKU: <span className="text-gray-900"></span>
                    </p>
                    <p className="text-gray-400 text-1xl">{renderLocalizedString(description)}</p>
                    <p className="font-bold text-2.5xl text-red-500">
                        {euroSign} {renderValue(price)}
                    </p>
                    <p>Product Id: {renderValue(id)}</p>
                    <Button className="add-to-cart-button w-1/3 bg-white text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">
                        <svg
                            className="w-3.5 h-3.5 me-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 18 21"
                        >
                            <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                        </svg>
                        Add to Cart
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailedView;

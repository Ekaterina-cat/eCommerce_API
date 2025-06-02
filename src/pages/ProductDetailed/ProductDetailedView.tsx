import ImageCarouselView from '@components/ImageCarousel/ImageCarouselView';
import useModalWinProductDetailed from '@components/ModalWinProductDetailed/ModalWinProductDetailedContainer';
import ModalWinProductDetailedView from '@components/ModalWinProductDetailed/ModalWinProductDetailedView';
import { Button } from '@components/ui/Button';
import { JSX } from 'react';

import { euroSign, ProductDetailedProps, renderLocalizedString, renderValue } from './types/ProductType';

const ProductDetailedView = ({
    name,
    description,
    price,
    id,
    sku,
    onProducts,
    images,
    currentIndex,
    onNextImage,
    onPrevImage,
    setImageIndex,
}: ProductDetailedProps): JSX.Element => {
    const { isModalOpen, openModal, closeModal } = useModalWinProductDetailed();
    return (
        <div className="flex flex-col items-center p-4">
            <Button onClick={onProducts} className="self-start mb-5 p-2">
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

            <div className="flex flex-col lg:flex-row gap-6 w-full h-full">
                <div className="w-full lg:w-1/2">
                    <ImageCarouselView
                        images={images}
                        currentIndex={currentIndex}
                        onNextImage={onNextImage}
                        onPrevImage={onPrevImage}
                        setImageIndex={setImageIndex}
                        onOpenModal={openModal}
                    />
                </div>
                <div className="w-full lg:w-1/2 flex flex-col gap-4">
                    <h1 className="capitalize font-bold text-2xl md:text-3xl">{renderLocalizedString(name)}</h1>
                    <p className="text-gray-400 border-b-2 border-gray-300 pb-2 text-sm md:text-base">
                        SKU: <span className="text-gray-900">{sku}</span>
                    </p>
                    <p className="text-gray-400 text-sm md:text-base">{renderLocalizedString(description)}</p>
                    <p className="font-bold text-xl md:text-2xl lg:text-3xl text-red-500">
                        {euroSign} {renderValue(price)}
                    </p>
                    <p className="text-sm md:text-base">Product Id: {renderValue(id)}</p>
                    <Button className="add-to-cart-button w-full md:w-1/3 bg-white text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">
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
            {isModalOpen && (
                <ModalWinProductDetailedView
                    images={images}
                    currentIndex={currentIndex}
                    onClose={closeModal}
                    onNextImage={onNextImage}
                    onPrevImage={onPrevImage}
                />
            )}
        </div>
    );
};

export default ProductDetailedView;

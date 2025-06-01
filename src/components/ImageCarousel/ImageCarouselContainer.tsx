import { ProductProjection } from '@commercetools/platform-sdk';
import { renderLocalizedString } from '@pages/ProductDetailed/types/ProductType';
import { useEffect, useState } from 'react';

import { ImageCarouselProduct, ImportedImage } from './type/ImageCarousel';

export const ImageCarouselContainer = (product: ProductProjection | null): ImageCarouselProduct => {
    const [images, setImages] = useState<string[]>([]);
    const [imageIndex, setImageIndex] = useState<number>(0);

    useEffect(() => {
        const loadImage = async (): Promise<void> => {
            try {
                if (product) {
                    const imagesArray: string[] = [];
                    for (let i = 1; i <= 3; i++) {
                        const imageName = `${renderLocalizedString(product.name)}_${i}.png`;
                        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                        const imageModule: ImportedImage = await import(/* @vite-ignore */ `/src/assets/${imageName}`);
                        imagesArray.push(imageModule.default);
                    }
                    setImages(imagesArray);
                }
            } catch (error) {
                console.error('Error loading images:', error);
            }
        };
        void loadImage();
    }, [product]);

    const handleNextImage = (): void => {
        setImageIndex((prev) => (prev + 1) % images.length);
    };

    const handlePrevImage = (): void => {
        setImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleSetImageIndex = (index: number): void => {
        setImageIndex(index);
    };

    return {
        images,
        imageIndex,
        handleNextImage,
        handlePrevImage,
        handleSetImageIndex,
    };
};

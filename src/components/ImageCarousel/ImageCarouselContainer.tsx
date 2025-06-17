import { ProductProjection } from '@commercetools/platform-sdk';
import { useEffect, useState } from 'react';

import { ImageCarouselProduct } from './type/ImageCarousel';

export const ImageCarouselContainer = (product: ProductProjection | null): ImageCarouselProduct => {
    const [images, setImages] = useState<string[]>([]);
    const [imageIndex, setImageIndex] = useState<number>(0);

    useEffect(() => {
        const loadImage = (): void => {
            try {
                if (product) {
                    const imagesArray: string[] = [];
                    for (let i = 1; i <= 3; i++) {
                        const imageName = `${product.name['en-US']}_${i}.png`;
                        imagesArray.push(`/${imageName}`);
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

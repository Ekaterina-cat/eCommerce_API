import { ProductProjection } from '@commercetools/platform-sdk';
import { ROUTE_PATH } from '@routes/constants/routes';
import { clientService } from '@services/client/client.service';
import { JSX, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

import ProductDetailedView from './ProductDetailedView';
import { renderLocalizedString } from './types/ProductType';

type ImportedImage = {
    default: string;
};

export const ProductDetailedContainer = (): JSX.Element => {
    const [product, setProduct] = useState<ProductProjection | null>(null);
    const [imageIndex, setImageIndex] = useState<number>(0);
    const [images, setImages] = useState<string[]>([]);
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        const fetchProduct = async (): Promise<void> => {
            try {
                const product = await clientService.getById(id!);
                console.log(product);
                setProduct(product);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        void fetchProduct();
    }, [id]);

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

    const handleNavigateToProducts = (): void => {
        void navigate(ROUTE_PATH.PRODUCTS);
    };

    if (!product || images.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <ProductDetailedView
            name={product.name}
            description={product.description}
            price={product.masterVariant.prices?.[0]?.value?.centAmount || 0}
            id={product.id}
            sku={product.masterVariant.sku}
            onProducts={handleNavigateToProducts}
            images={images}
            currentIndex={imageIndex}
            onNextImage={handleNextImage}
            onPrevImage={handlePrevImage}
            setImageIndex={handleSetImageIndex}
        />
    );
};

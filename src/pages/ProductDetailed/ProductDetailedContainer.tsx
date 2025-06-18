import { ProductProjection } from '@commercetools/platform-sdk';
import { ImageCarouselContainer } from '@components/ImageCarousel/ImageCarouselContainer';
import useFetch from '@hooks/UseFecth/useFetch';
import { ROUTE_PATH } from '@routes/constants/routes';
import { clientService } from '@services/client/client.service';
import { JSX } from 'react';
import { useNavigate, useParams } from 'react-router';

import ProductDetailedView from './ProductDetailedView';

export const ProductDetailedContainer = (): JSX.Element => {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();

    const { data: product, error, loading } = useFetch<ProductProjection>(() => clientService.getById(id!));

    const { images, imageIndex, handleNextImage, handlePrevImage, handleSetImageIndex } =
        ImageCarouselContainer(product);

    const handleNavigateToProducts = (): void => {
        void navigate(ROUTE_PATH.PRODUCTS);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error || !product || images.length === 0) {
        return <div>Error: {error || 'No product data available'}</div>;
    }

    return (
        <ProductDetailedView
            name={product.name}
            description={product.description}
            price={(product.masterVariant.prices?.[0]?.value?.centAmount || 0) / 100}
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

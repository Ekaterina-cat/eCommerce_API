import './style/ModalWinProductDetailedView.style.css';

import ImageCarouselView from '@components/ImageCarousel/ImageCarouselView';
import { Button } from '@components/ui/Button';
import { JSX } from 'react';

interface ModalWinProductDetailedViewProps {
    images: string[];
    currentIndex: number;
    onClose: () => void;
    onNextImage: () => void;
    onPrevImage: () => void;
}

const ModalWinProductDetailedView = ({
    images,
    currentIndex,
    onClose,
    onNextImage,
    onPrevImage,
}: ModalWinProductDetailedViewProps): JSX.Element => {
    return (
        <div className="modal-overlay">
            <Button onClick={onClose} className="modal-close-button">
                Close
            </Button>
            <div className="large-image-carousel">
                <ImageCarouselView
                    images={images}
                    currentIndex={currentIndex}
                    onNextImage={onNextImage}
                    onPrevImage={onPrevImage}
                    setImageIndex={() => {}}
                    onOpenModal={() => {}}
                />
            </div>
        </div>
    );
};

export default ModalWinProductDetailedView;

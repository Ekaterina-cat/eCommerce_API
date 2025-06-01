export interface ImageCarouselProduct {
    images: string[];
    imageIndex: number;
    handleNextImage: () => void;
    handlePrevImage: () => void;
    handleSetImageIndex: (index: number) => void;
}

export interface ImageCarouselProps {
    images: string[];
    currentIndex: number;
    onNextImage: () => void;
    onPrevImage: () => void;
    setImageIndex: (index: number) => void;
    onOpenModal: () => void;
}

export type ImportedImage = {
    default: string;
};

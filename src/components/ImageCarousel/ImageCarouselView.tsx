import { JSX } from 'react';

import { ImageCarouselProps } from './type/ImageCarousel';

const ImageCarouselView = ({
    images,
    currentIndex,
    onNextImage,
    onPrevImage,
    setImageIndex,
}: ImageCarouselProps): JSX.Element => {
    return (
        <div className="relative w-full max-w-[600px] h-[400px]">
            <div className="w-full h-full p-4">
                <img src={images[currentIndex]} alt={'image'} className="w-full h-full object-contain rounded-lg" />
            </div>
            <button
                onClick={onPrevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
                aria-label="Previous image"
            >
                <svg
                    className="w-6 h-6 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button
                onClick={onNextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
                aria-label="Next image"
            >
                <svg
                    className="w-6 h-6 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
            </button>
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => currentIndex !== index && setImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                            index === currentIndex ? 'bg-primary' : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageCarouselView;

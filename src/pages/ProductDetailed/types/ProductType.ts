import { LocalizedString } from '@commercetools/platform-sdk';

export const renderLocalizedString = (
    value?: LocalizedString,
    defaultValue: string = 'No information available',
): string => {
    return value ? value['en-US'] : defaultValue;
};

export const renderValue = (
    value?: string | number,
    defaultValue: string = 'No information available',
): string | number => {
    return value === undefined ? defaultValue : value;
};

export interface ProductDetailedProps {
    name?: LocalizedString;
    description?: LocalizedString;
    price?: number;
    id?: string;
    sku?: string;
    onProducts?: () => void;
    images: string[];
    currentIndex: number;
    onNextImage: () => void;
    onPrevImage: () => void;
    setImageIndex: (index: number) => void;
}

export const euroSign: string = '\u20AC';

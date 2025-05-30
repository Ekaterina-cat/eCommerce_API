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
    images?: string;
    name?: LocalizedString;
    description?: LocalizedString;
    price?: number;
    id?: string;
    onProducts?: () => void;
}

export const euroSign: string = '\u20AC';

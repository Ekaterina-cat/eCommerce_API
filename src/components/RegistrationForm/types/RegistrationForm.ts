import { FieldError } from 'react-hook-form';

type FormData = {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    street: string;
    city: string;
    postalCode: string;
    country: string;
};

export type TextInputProps = {
    label: string;
    type?: string;
    name: keyof FormData;
    placeholder?: string;
    description?: string;
    error?: FieldError;
};

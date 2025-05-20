import { FormEvent } from 'react';
import { FieldPath, FieldValues, UseFormReturn } from 'react-hook-form';

export interface Address {
    streetName: string;
    city: string;
    postalCode: string;
    country: string;
}

export interface RegisterFormData extends Address {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    defaultShippingAddress?: boolean;
    useAsBillingAddress?: boolean;
    billing_streetName?: string;
    billing_city?: string;
    billing_postalCode?: string;
    billing_country?: string;
    defaultBillingAddress?: boolean;
}

export interface RegistrationFormViewProps {
    form: UseFormReturn<RegisterFormData>;
    handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
    isLoading: boolean;
    useAsBillingAddress?: boolean;
}

export type TextFieldConfig<T extends FieldValues> = {
    name: FieldPath<T>;
    label: string;
    placeholder?: string;
    type?: string;
};

export const customerDataFields: TextFieldConfig<RegisterFormData>[] = [
    { name: 'email', label: 'Email', placeholder: 'test@test.com', type: 'email' },
    { name: 'password', label: 'Password', type: 'password' },
    { name: 'firstName', label: 'First Name' },
    { name: 'lastName', label: 'Last Name' },
    { name: 'dateOfBirth', label: 'Date of Birth', type: 'date' },
];

export const customerAddress: TextFieldConfig<RegisterFormData>[] = [
    { name: 'streetName', label: 'Street' },
    { name: 'city', label: 'City' },
    { name: 'postalCode', label: 'Postal Code' },
];

export const billingAddress: TextFieldConfig<RegisterFormData>[] = [
    { name: 'billing_streetName', label: 'Street' },
    { name: 'billing_city', label: 'City' },
    { name: 'billing_postalCode', label: 'Postal Code' },
];

export const countries = [
    { label: 'Belarus', value: 'BY' },
    { label: 'Poland', value: 'PL' },
    { label: 'Germany', value: 'DE' },
];

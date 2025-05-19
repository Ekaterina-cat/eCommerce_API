import { FormEvent } from 'react';
import { FieldPath, FieldValues, UseFormReturn } from 'react-hook-form';

export type RegisterFormData = {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    streetName: string;
    city: string;
    postalCode: string;
    country: string;
};

export interface RegistrationFormViewProps {
    form: UseFormReturn<RegisterFormData>;
    handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export type TextFieldConfig<T extends FieldValues> = {
    name: FieldPath<T>;
    label: string;
    placeholder?: string;
    type?: string;
};

export const textFields: TextFieldConfig<RegisterFormData>[] = [
    { name: 'email', label: 'Email', placeholder: 'test@test.com', type: 'email' },
    { name: 'password', label: 'Password', type: 'password' },
    { name: 'firstName', label: 'First Name' },
    { name: 'lastName', label: 'Last Name' },
    { name: 'streetName', label: 'Street' },
    { name: 'city', label: 'City' },
    { name: 'postalCode', label: 'Postal Code' },
    { name: 'dateOfBirth', label: 'Date of Birth', type: 'date' },
];

export const countries = [
    { label: 'Belarus', value: 'BY' },
    { label: 'Poland', value: 'PL' },
    { label: 'Germany', value: 'DE' },
];

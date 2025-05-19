import { FormEvent } from 'react';
import { FieldPath, FieldValues, UseFormReturn } from 'react-hook-form';
import { z } from 'zod';

const errorMessages = {
    required: {
        email: 'Email is required',
        password: 'Password is required',
        firstName: 'First Name is required',
        lastName: 'Last Name is required',
        dateOfBirth: 'Date of Birth is required',
        streetName: 'Street is required',
        city: 'City is required',
        postalCode: 'Postal Code is required',
        country: 'Country is required',
    },
    custom: {
        email: 'Email must be valid',
        passwordMinLength: 'Password must be at least 8 characters long',
        passwordUppercase: 'Password must contain at least one uppercase letter',
        passwordLowercase: 'Password must contain at least one lowercase letter',
        passwordNumber: 'Password must contain at least one number',
        firstName: 'First name must contain only letters',
        lastName: 'Last name must contain only letters',
        dateOfBirth: 'You must be at least 13 years old',
        city: 'City must contain only letters',
    },
};

export const validationRegistrationForm = z.object({
    email: z.string({ required_error: errorMessages.required.email }).email({ message: errorMessages.custom.email }),
    password: z
        .string()
        .min(8, { message: errorMessages.custom.passwordMinLength })
        .regex(/[A-Z]/, { message: errorMessages.custom.passwordUppercase })
        .regex(/[a-z]/, { message: errorMessages.custom.passwordLowercase })
        .regex(/[0-9]/, { message: errorMessages.custom.passwordNumber }),
    firstName: z
        .string()
        .min(1, { message: errorMessages.required.firstName })
        .regex(/^[A-Za-z]+$/, { message: errorMessages.custom.firstName }),
    lastName: z
        .string()
        .min(1, { message: errorMessages.required.lastName })
        .regex(/^[A-Za-z]+$/, { message: errorMessages.custom.lastName }),
    dateOfBirth: z.string().refine(
        (val) => {
            const dateOfBirth = new Date(val);
            const today = new Date();
            const age = today.getFullYear() - dateOfBirth.getFullYear();

            return age >= 13;
        },
        { message: errorMessages.custom.dateOfBirth },
    ),
    streetName: z.string().min(1, { message: errorMessages.required.streetName }),
    city: z
        .string()
        .min(1, { message: errorMessages.required.city })
        .regex(/^[A-Za-z]+$/, { message: errorMessages.custom.city }),
    postalCode: z.string().min(1, { message: errorMessages.required.postalCode }),
    country: z.string().min(1, { message: errorMessages.required.country }),
});

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

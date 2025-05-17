import { FieldError, UseFormReturn } from 'react-hook-form';
import { z } from 'zod';

export const enum RegistrationFormErrorMessage {
    EmailRequired = 'Email is required',
    PasswordRequired = 'Password is required',
    FirstNameRequired = 'First Name is required',
    LastNameRequired = 'Last Name is required',
    DateOfBirthRequired = 'Date of Birth is required',
    StreetRequired = 'Street is required',
    CityRequired = 'City is required',
    PostalCodeRequired = 'Postal Code is required',
    CountryRequired = 'Country is required',
}

export const validationRegistrationForm = z.object({
    email: z.string().email({ message: RegistrationFormErrorMessage.EmailRequired }),
    password: z
        .string()
        .min(8, { message: 'Password must be at least 8 characters long' })
        .regex(/[A-Z]/, { message: 'Password must contain at least one uppercase letter' })
        .regex(/[a-z]/, { message: 'Password must contain at least one lowercase letter' })
        .regex(/[0-9]/, { message: 'Password must contain at least one number' }),
    firstName: z
        .string()
        .min(1, { message: RegistrationFormErrorMessage.FirstNameRequired })
        .regex(/^[A-Za-z]+$/, { message: 'First name must contain only letters' }),
    lastName: z
        .string()
        .min(1, { message: RegistrationFormErrorMessage.LastNameRequired })
        .regex(/^[A-Za-z]+$/, { message: 'Last name must contain only letters' }),
    dateOfBirth: z.string().refine(
        (val) => {
            const dob = new Date(val);
            const today = new Date();
            const age = today.getFullYear() - dob.getFullYear();
            return age >= 13;
        },
        { message: 'You must be at least 13 years old' },
    ),
    street: z.string().min(1, { message: RegistrationFormErrorMessage.StreetRequired }),
    city: z
        .string()
        .min(1, { message: RegistrationFormErrorMessage.CityRequired })
        .regex(/^[A-Za-z]+$/, { message: 'City must contain only letters' }),
    postalCode: z.string().min(1, { message: RegistrationFormErrorMessage.PostalCodeRequired }),
    country: z.string().min(1, { message: RegistrationFormErrorMessage.CountryRequired }),
});

export type RegistrationFormData = z.infer<typeof validationRegistrationForm>;

export type FormInputProps = {
    label: string;
    type?: string;
    name: keyof RegistrationFormData;
    placeholder?: string;
    description?: string;
    form: UseFormReturn<RegistrationFormData>;
    error?: FieldError;
};

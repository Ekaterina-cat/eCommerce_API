import { z } from 'zod';

import { emailSchema, passwordSchema } from '../../../shared/validation/sharedValidationSchema.ts';

const errorMessages = {
    required: {
        firstName: 'First Name is required',
        lastName: 'Last Name is required',
        dateOfBirth: 'Date of Birth is required',
        streetName: 'Street is required',
        city: 'City is required',
        postalCode: 'Postal Code is required',
        country: 'Country is required',
    },
    custom: {
        firstName: 'First name must contain only letters',
        lastName: 'Last name must contain only letters',
        dateOfBirth: 'You must be at least 13 years old',
        city: 'City must contain only letters',
    },
};

export const registrationValidationSchema = z.object({
    email: emailSchema,
    password: passwordSchema,
    firstName: z
        .string()
        .trim()
        .min(1, { message: errorMessages.required.firstName })
        .regex(/^[A-Za-z]+$/, { message: errorMessages.custom.firstName }),
    lastName: z
        .string()
        .trim()
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
    streetName: z.string().trim().min(1, { message: errorMessages.required.streetName }),
    city: z
        .string()
        .trim()
        .min(1, { message: errorMessages.required.city })
        .regex(/^[A-Za-z]+$/, { message: errorMessages.custom.city }),
    postalCode: z.string().trim().min(1, { message: errorMessages.required.postalCode }),
    country: z.string().trim().min(1, { message: errorMessages.required.country }),
    defaultShippingAddress: z.boolean().optional(),
    useAsBillingAddress: z.boolean().optional(),
});

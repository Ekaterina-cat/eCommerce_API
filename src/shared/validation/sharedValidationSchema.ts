import { z } from 'zod';

const errorMessages = {
    required: {
        email: 'Email is required',
        password: 'Password is required',
    },
    custom: {
        email: 'Email must be valid',
        passwordMinLength: 'Password must be at least 8 characters long',
        passwordUppercase: 'Password must contain at least one uppercase letter',
        passwordLowercase: 'Password must contain at least one lowercase letter',
        passwordNumber: 'Password must contain at least one number',
    },
};

export const emailSchema = z
    .string({ required_error: errorMessages.required.email })
    .trim()
    .email({ message: errorMessages.custom.email });

export const passwordSchema = z
    .string({ required_error: errorMessages.required.password })
    .trim()
    .min(8, { message: errorMessages.custom.passwordMinLength })
    .regex(/[A-Z]/, { message: errorMessages.custom.passwordUppercase })
    .regex(/[a-z]/, { message: errorMessages.custom.passwordLowercase })
    .regex(/[0-9]/, { message: errorMessages.custom.passwordNumber });

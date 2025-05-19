import { z } from 'zod';

import { emailSchema, passwordSchema } from '../../../shared/validation/sharedValidationSchema.ts';

export const loginValidationSchema = z.object({
    email: emailSchema,
    password: passwordSchema,
});

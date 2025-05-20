import { Address } from '@components/RegistrationForm/types/RegistrationForm.ts';
import { z } from 'zod';

import { registrationValidationSchema } from '../validation/registrationValidationSchema.ts';

export const createCustomerAddresses = (values: z.infer<typeof registrationValidationSchema>): Address[] => {
    const shipping = {
        streetName: values.streetName,
        city: values.city,
        postalCode: values.postalCode,
        country: values.country,
    };

    if (values.useAsBillingAddress) return [shipping];

    const billing = {
        streetName: values.billing_streetName!,
        city: values.billing_city!,
        postalCode: values.billing_postalCode!,
        country: values.billing_country!,
    };

    return [shipping, billing];
};

import { describe, expect, it } from 'vitest';
import { createCustomerAddresses } from '@components/RegistrationForm/utils/createAddressess.ts';

describe('createCustomerAddresses', () => {
    const baseShipping = {
        streetName: 'streetName',
        city: 'city',
        postalCode: 'postalCode',
        country: 'country',
    };

    it('returns shipping address', () => {
        const values = {
            ...baseShipping,
            useAsBillingAddress: true,
        };

        const result = createCustomerAddresses(values as any);
        expect(result).toEqual([baseShipping]);
    });
});

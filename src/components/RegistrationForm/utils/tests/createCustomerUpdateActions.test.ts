import { describe, expect, it } from 'vitest';
import { createCustomerUpdateActions } from '@components/RegistrationForm/utils/createCustomerUpdateActions.ts';

describe('createCustomerUpdateActions', () => {
    it('returns empty array without ID', () => {
        const actions = createCustomerUpdateActions({
            defaultShipping: false,
            defaultBilling: false,
        });
        expect(actions).toEqual([]);
    });
});

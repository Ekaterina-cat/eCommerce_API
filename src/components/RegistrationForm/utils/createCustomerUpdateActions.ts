import { CustomerUpdateAction } from '@commercetools/platform-sdk';

export const createCustomerUpdateActions = ({
    shippingAddressId,
    billingAddressId,
    defaultShipping,
    defaultBilling,
}: {
    shippingAddressId?: string;
    billingAddressId?: string;
    defaultShipping: boolean;
    defaultBilling: boolean;
}): CustomerUpdateAction[] => {
    const actions: CustomerUpdateAction[] = [];

    if (shippingAddressId) {
        actions.push({ action: 'addShippingAddressId', addressId: shippingAddressId });
        if (defaultShipping) {
            actions.push({ action: 'setDefaultShippingAddress', addressId: shippingAddressId });
        }
    }

    if (billingAddressId) {
        actions.push({ action: 'addBillingAddressId', addressId: billingAddressId });
        if (defaultBilling) {
            actions.push({ action: 'setDefaultBillingAddress', addressId: billingAddressId });
        }
    }

    return actions;
};

export const DefaultValues = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    streetName: '',
    city: '',
    postalCode: '',
    country: '',
    defaultShippingAddress: true,
    useAsBillingAddress: true,
    billing_streetName: '',
    billing_city: '',
    billing_postalCode: '',
    billing_country: '',
    DefaultShippingAddress: true,
};

export const enum FiledName {
    Country = 'country',
    BillingCountry = 'billing_country',
    DefaultShippingAddress = 'defaultShippingAddress',
    UseAsBillingAddress = 'useAsBillingAddress',
    DefaultBillingAddress = 'defaultBillingAddress',
}

export const enum Placeholder {
    Country = 'Select a country',
}

export const enum Label {
    DefaultShippingAddress = 'Set as default delivery address',
    DefaultBillingAddress = 'Set as default billing address',
    UseAsBillingAddress = 'Use delivery address as billing address',
    Country = 'Country',
}

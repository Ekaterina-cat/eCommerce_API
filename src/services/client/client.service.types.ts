import type { Customer } from '@commercetools/platform-sdk';
import type { TokenCacheOptions } from '@commercetools/ts-client';

interface TokenStore {
    token: string;
    expirationTime: number;
    refreshToken?: string;
    tokenCacheKey?: TokenCacheOptions;
}

export interface UserCredentials {
    email: string;
    password: string;
}

export interface Login extends UserCredentials {
    successCallback?: (userInfo: UserInfo) => void;
    errorCallback?: (errorMessage: string) => void;
}

export interface UserInfo {
    customer: Customer;
    tokenStore: TokenStore;
}

export interface CustomerDetails {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    addresses?: Array<{
        streetName?: string;
        city?: string;
        postalCode?: string;
        country: string;
    }>;
}

export interface Register {
    customerData: CustomerDetails;
    successCallback?: (customer: CustomerInfo) => void;
    errorCallback?: (errorMessage: string) => void;
}

export interface CustomerInfo {
    customer: Customer;
    tokenStore: TokenStore;
}

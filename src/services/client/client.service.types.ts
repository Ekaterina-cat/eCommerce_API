import type { Customer } from '@commercetools/platform-sdk';
import type { TokenCacheOptions } from '@commercetools/ts-client';

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
    tokenStore: {
        token: string;
        expirationTime: number;
        refreshToken?: string;
        tokenCacheKey?: TokenCacheOptions;
    };
}

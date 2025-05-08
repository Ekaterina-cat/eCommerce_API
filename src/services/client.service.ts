/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { Customer } from '@commercetools/platform-sdk';
import { createApiBuilderFromCtpClient } from '@commercetools/platform-sdk';
import type { Client, TokenCacheOptions, TokenStore } from '@commercetools/ts-client';
import { ClientBuilder } from '@commercetools/ts-client';

interface UserCredentials {
    email: string;
    password: string;
}

interface Login extends UserCredentials {
    successCallback?: (userInfo: UserInfo) => void;
    errorCallback?: (errorMessage: string) => void;
}

interface UserInfo {
    customer: Customer;
    tokenStore: {
        token: string;
        expirationTime: number;
        refreshToken?: string;
        tokenCacheKey?: TokenCacheOptions;
    };
}

class ClientService {
    private tokenStore: TokenStore = {
        token: '',
        refreshToken: '',
        expirationTime: 0,
    };

    public async login({ email, password, successCallback, errorCallback }: Login): Promise<UserInfo | undefined> {
        try {
            const apiRoot = createApiBuilderFromCtpClient(this.getClient({ email, password }));
            const response = await apiRoot
                .withProjectKey({ projectKey: import.meta.env.VITE_PROJECT_KEY })
                .login()
                .post({
                    body: {
                        email,
                        password,
                    },
                })
                .execute();

            if (response.statusCode === 200) {
                const userInfo = {
                    customer: response.body.customer,
                    tokenStore: this.tokenStore,
                };

                if (successCallback) {
                    successCallback(userInfo);
                }

                return userInfo;
            }
        } catch (error) {
            if (errorCallback) {
                if (error instanceof Error) {
                    errorCallback(error.message);
                } else if (typeof error === 'string') {
                    errorCallback(error);
                }
            }
        }
    }

    private getClient({ email, password }: UserCredentials): Client {
        return new ClientBuilder()
            .withPasswordFlow({
                host: import.meta.env.VITE_OAUTH_URI,
                projectKey: import.meta.env.VITE_PROJECT_KEY,
                credentials: {
                    clientId: import.meta.env.VITE_CLIENT_ID,
                    clientSecret: import.meta.env.VITE_CLIENT_SECRET,
                    user: {
                        username: email,
                        password,
                    },
                },
                // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
                scopes: import.meta.env.VITE_SCOPES.split(','),
                tokenCache: {
                    get: () => this.tokenStore,
                    set: (newTokenStore) => {
                        Object.assign(this.tokenStore, newTokenStore);
                    },
                },
                httpClient: fetch,
            })
            .withHttpMiddleware({
                host: import.meta.env.VITE_BASE_URI,
                httpClient: fetch,
            })
            .build();
    }
}

export const clientService = new ClientService();

import { ApiRoot, Cart, createApiBuilderFromCtpClient, ProductProjection } from '@commercetools/platform-sdk';
import type { Client } from '@commercetools/ts-client';
import { ClientBuilder } from '@commercetools/ts-client';
import {
    CustomerInfo,
    Login,
    Register,
    UpdateCustomer,
    UserCredentials,
    UserInfo,
} from '@services/client/client.service.types.ts';
import { envService } from '@services/env.service.ts';
import { tokenCacheService } from '@services/tokenCache.service.ts';

class ClientService {
    public async login({ email, password, successCallback, errorCallback }: Login): Promise<UserInfo | undefined> {
        try {
            const client = this.getClientWithPasswordFlow({ email, password });
            const response = await this.createApiRoot(client)
                .withProjectKey({ projectKey: envService.getProjectKey() })
                .login()
                .post({
                    body: {
                        email,
                        password,
                    },
                })
                .execute();

            if (response.statusCode !== 200) return;

            const userInfo = {
                customer: response.body.customer,
                tokenStore: tokenCacheService.getTokenStore(),
            };

            if (!successCallback) return userInfo;

            successCallback(userInfo);

            return userInfo;
        } catch (error) {
            if (!errorCallback) return;

            errorCallback(this.handleError(error));
        }
    }

    public async createCustomer({
        customerData,
        successCallback,
        errorCallback,
    }: Register): Promise<CustomerInfo | undefined> {
        try {
            const client = this.getClient();
            const response = await this.createApiRoot(client)
                .withProjectKey({ projectKey: envService.getProjectKey() })
                .customers()
                .post({ body: customerData })
                .execute();

            if (response.statusCode !== 201) return;

            const customerInfo = {
                customer: response.body.customer,
                tokenStore: tokenCacheService.getTokenStore(),
            };

            if (!successCallback) return customerInfo;

            successCallback(customerInfo);

            return customerInfo;
        } catch (error) {
            if (!errorCallback) return;

            errorCallback(this.handleError(error));
        }
    }

    public async updateCustomer({ customerId, version, actions, errorCallback }: UpdateCustomer): Promise<void> {
        try {
            const client = this.getClient();
            await this.createApiRoot(client)
                .withProjectKey({ projectKey: envService.getProjectKey() })
                .customers()
                .withId({ ID: customerId })
                .post({
                    body: {
                        version,
                        actions,
                    },
                })
                .execute();
        } catch (error) {
            if (errorCallback) {
                errorCallback(this.handleError(error));
            }
        }
    }

    public async getById(id: string): Promise<ProductProjection> {
        try {
            const client = this.getClient();
            const response = await this.createApiRoot(client)
                .withProjectKey({ projectKey: envService.getProjectKey() })
                .productProjections()
                .withId({ ID: id })
                .get()
                .execute();
            return response.body;
        } catch (error) {
            console.error('Error fetching products:', error);
            throw error;
        }
    }

    public async getAll(): Promise<ProductProjection[]> {
        try {
            const client = this.getClient();
            const response = await this.createApiRoot(client)
                .withProjectKey({ projectKey: envService.getProjectKey() })
                .productProjections()
                .get()
                .execute();
            return response.body.results;
        } catch (error) {
            console.error('Error fetching products:', error);
            throw error;
        }
    }

    public async createCart(currency: string): Promise<Cart> {
        try {
            const client = this.getClientForAnonymousSession();
            const apiRoot = this.createApiRoot(client).withProjectKey({
                projectKey: envService.getProjectKey(),
            });

            const response = await apiRoot
                .me()
                .carts()
                .post({
                    body: {
                        currency,
                    },
                })
                .execute();

            return response.body;
        } catch (error) {
            console.error('Error creating cart:', error);
            throw error;
        }
    }

    public async updateCart({
        cartId,
        productId,
        version,
    }: {
        cartId: string;
        productId: string;
        version: number;
    }): Promise<Cart> {
        try {
            const client = this.getClientForAnonymousSession();
            const apiRoot = this.createApiRoot(client).withProjectKey({
                projectKey: envService.getProjectKey(),
            });

            const response = await apiRoot
                .me()
                .carts()
                .withId({ ID: cartId })
                .post({
                    body: {
                        version,
                        actions: [
                            {
                                action: 'addLineItem',
                                productId,
                                variantId: 1,
                                quantity: 1,
                            },
                        ],
                    },
                })
                .execute();

            return response.body;
        } catch (error) {
            console.error('Error adding product to cart:', error);
            throw error;
        }
    }

    public async getCart(): Promise<Cart> {
        try {
            const client = this.getClientForAnonymousSession();
            const apiRoot = this.createApiRoot(client).withProjectKey({
                projectKey: envService.getProjectKey(),
            });

            const response = await apiRoot.me().activeCart().get().execute();

            return response.body;
        } catch (error) {
            console.error('Error fetching cart:', error);
            throw error;
        }
    }

    private getClientForAnonymousSession(): Client {
        return new ClientBuilder()
            .withAnonymousSessionFlow({
                host: envService.getOauthUrl(),
                projectKey: envService.getProjectKey(),
                credentials: {
                    clientId: envService.getClientId(),
                    clientSecret: envService.getClientSecret(),
                },
                scopes: envService.getScopes(),
                tokenCache: tokenCacheService.tokenCache,
                httpClient: fetch,
            })
            .withHttpMiddleware({
                host: envService.getBaseUrl(),
                httpClient: fetch,
            })
            .build();
    }

    private getClient(): Client {
        return new ClientBuilder()
            .defaultClient(
                envService.getBaseUrl(),
                {
                    clientId: envService.getClientId(),
                    clientSecret: envService.getClientSecret(),
                },
                envService.getOauthUrl(),
                envService.getProjectKey(),
            )
            .build();
    }

    private getClientWithPasswordFlow({ email, password }: UserCredentials): Client {
        return new ClientBuilder()
            .withPasswordFlow({
                host: envService.getOauthUrl(),
                projectKey: envService.getProjectKey(),
                credentials: {
                    clientId: envService.getClientId(),
                    clientSecret: envService.getClientSecret(),
                    user: {
                        username: email,
                        password,
                    },
                },
                scopes: envService.getScopes(),
                tokenCache: tokenCacheService.tokenCache,
                httpClient: fetch,
            })
            .withHttpMiddleware({
                host: envService.getBaseUrl(),
                httpClient: fetch,
            })
            .build();
    }

    private createApiRoot(client: Client): ApiRoot {
        return createApiBuilderFromCtpClient(client);
    }

    private handleError(error: unknown): string {
        if (error instanceof Error) {
            return error.message;
        } else if (typeof error === 'string') {
            return error;
        }

        return 'An unknown error occurred';
    }
}

export const clientService = new ClientService();

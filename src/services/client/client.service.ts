import { createApiBuilderFromCtpClient } from '@commercetools/platform-sdk';
import type { Client } from '@commercetools/ts-client';
import { ClientBuilder } from '@commercetools/ts-client';
import { Login, UserCredentials, UserInfo } from '@services/client/client.service.types.ts';
import { envService } from '@services/env.service.ts';
import { tokenCacheService } from '@services/tokenCache.service.ts';

class ClientService {
    public async login({ email, password, successCallback, errorCallback }: Login): Promise<UserInfo | undefined> {
        try {
            const apiRoot = createApiBuilderFromCtpClient(this.getClient({ email, password }));
            const response = await apiRoot
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

            if (!successCallback) return;

            successCallback(userInfo);

            return userInfo;
        } catch (error) {
            if (!errorCallback) return;

            if (error instanceof Error) {
                errorCallback(error.message);
            } else if (typeof error === 'string') {
                errorCallback(error);
            }
        }
    }

    private getClient({ email, password }: UserCredentials): Client {
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
}

export const clientService = new ClientService();

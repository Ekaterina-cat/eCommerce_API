import type { TokenStore } from '@commercetools/ts-client';

interface TokenCache {
    get: () => TokenStore;
    set: (newTokenStore: TokenStore) => void;
}

class TokenCacheService {
    private tokenStore: TokenStore = {
        token: '',
        refreshToken: '',
        expirationTime: 0,
    };

    public get tokenCache(): TokenCache {
        return {
            get: (): TokenStore => this.getTokenStore(),
            set: (newTokenStore: TokenStore): void => this.setTokenStore(newTokenStore),
        };
    }

    public getTokenStore(): TokenStore {
        return this.tokenStore;
    }

    public setTokenStore(newTokenStore: TokenStore): void {
        Object.assign(this.tokenStore, newTokenStore);
    }
}

export const tokenCacheService = new TokenCacheService();

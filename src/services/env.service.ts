import { z } from 'zod';

const stringSchema = z.string();

class EnvService {
    public getProjectKey(): string {
        return this.getEnvVariable(import.meta.env.VITE_PROJECT_KEY);
    }

    public getOauthUrl(): string {
        return this.getEnvVariable(import.meta.env.VITE_OAUTH_URI);
    }

    public getClientId(): string {
        return this.getEnvVariable(import.meta.env.VITE_CLIENT_ID);
    }

    public getClientSecret(): string {
        return this.getEnvVariable(import.meta.env.VITE_CLIENT_SECRET);
    }

    public getBaseUrl(): string {
        return this.getEnvVariable(import.meta.env.VITE_BASE_URI);
    }

    public getScopes(): Array<string> {
        return this.getEnvVariable(import.meta.env.VITE_SCOPES).split(',');
    }

    private getEnvVariable(variable: unknown): string {
        try {
            return stringSchema.parse(variable);
        } catch {
            return '';
        }
    }
}

export const envService = new EnvService();

import 'vite/client';

interface ImportMetaEnvironment {
    readonly VITE_BASE_URI: string;
    readonly VITE_OAUTH_URI: string;
    readonly VITE_PROJECT_KEY: string;
    readonly VITE_CLIENT_ID: string;
    readonly VITE_CLIENT_SECRET: string;
    readonly VITE_SCOPES: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnvironment;
}

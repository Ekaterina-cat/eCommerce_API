import 'vite/client';

interface ImportMetaEnvironment {
    readonly VITE_BASE_URL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnvironment;
}

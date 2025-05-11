import { Alert as LibraryAlert, AlertDescription, AlertTitle } from '@components/ui/Alert.tsx';
import { AlertCircle } from 'lucide-react';
import type { JSX } from 'react';

export const Alert = ({ errorMessage }: { errorMessage: string }): JSX.Element | null => {
    if (!errorMessage) return null;

    return (
        <LibraryAlert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{errorMessage}</AlertDescription>
        </LibraryAlert>
    );
};

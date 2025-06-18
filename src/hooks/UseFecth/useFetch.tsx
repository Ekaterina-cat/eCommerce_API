import { useEffect, useState } from 'react';

interface FetchResult<T> {
    data: T | null;
    error: string | null;
    loading: boolean;
}

const useFetch = <T,>(fetchFunction: () => Promise<T>): FetchResult<T> => {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async (): Promise<void> => {
            try {
                const result = await fetchFunction();
                setData(result);
            } catch (error_) {
                setError('Failed to fetch data');
                console.error('Fetch error:', error_);
            } finally {
                setLoading(false);
            }
        };

        void fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return { data, error, loading };
};

export default useFetch;

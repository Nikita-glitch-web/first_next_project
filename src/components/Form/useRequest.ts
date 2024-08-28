import { useState } from 'react';

type UseApiRequestResult<T> = {
  makeRequest: (body?: T) => Promise<any>;
  loading: boolean;
  error: string | null;
};

function useApiRequest<T>(url: string, method: 'POST' | 'PUT' | 'PATCH' | 'GET'): UseApiRequestResult<T> {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const makeRequest = async (body?: T): Promise<any> => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url, {
        method,
        headers: {
          Accept: 'application/json',
          ...(method !== 'GET' && {
            'Content-Type': 'application/json',
          }),
        },
        ...(method !== 'GET' && body && { body: JSON.stringify(body) }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json(); // Повертаємо відповідь для обробки даних
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return { makeRequest, loading, error };
}

export default useApiRequest;

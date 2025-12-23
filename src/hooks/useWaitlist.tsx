import { useState } from 'react';

interface UseWaitlistReturn {
  isLoading: boolean;
  error: string | null;
  success: boolean;
  submitEmail: (email: string, source: string) => Promise<void>;
  resetState: () => void;
}

export const useWaitlist = (): UseWaitlistReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const submitEmail = async (email: string, source: string) => {
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, source }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || data.error || 'Failed to join waitlist');
      }

      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const resetState = () => {
    setError(null);
    setSuccess(false);
  };

  return { isLoading, error, success, submitEmail, resetState };
};
import React, { useState, useEffect } from 'react';
import { Input, Button } from '../ui';
import { useWaitlist } from '../../hooks/useWaitlist';

export const CTASection = () => {
  const [email, setEmail] = useState('');
  const { isLoading, error, success, submitEmail, resetState } = useWaitlist();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitEmail(email, 'cta');
  };

  // Auto-hide success message after 3 seconds
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        resetState(); // Clear success state
        setEmail('');  // Clear email input
      }, 3000); // 3 seconds

      return () => clearTimeout(timer);
    }
  }, [success, resetState]);

  return (
    <section className="bg-white px-6 py-32 text-center dark:bg-background-dark">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-10 text-4xl font-medium tracking-tight text-gray-900 md:text-5xl dark:text-white">
          Life already throws enough surprises.
        </h2>
        
        {success ? (
          <div className="mx-auto max-w-md rounded-2xl bg-green-50 p-6 dark:bg-green-900/20">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/40">
              <svg className="h-6 w-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="font-medium text-green-900 dark:text-green-100">
              You're on the waitlist!
            </p>
            <p className="mt-2 text-sm text-green-700 dark:text-green-300">
              We'll notify you when we launch.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mx-auto mb-8 flex max-w-md flex-col items-center justify-center gap-4 sm:flex-row">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
                required
                className="h-12 w-full"
              />
              <Button
                type="submit"
                variant="primary"
                disabled={isLoading}
                className="h-12 w-full whitespace-nowrap px-8 sm:w-auto"
              >
                {isLoading ? 'Joining...' : 'Join Waitlist'}
              </Button>
            </div>
            {error && (
              <p className="mb-4 text-sm text-red-600 dark:text-red-400">
                {error}
              </p>
            )}
          </form>
        )}
        
        <p className="text-sm font-light text-gray-600 dark:text-text-muted">
          We're building this carefully. No spam.
        </p>
      </div>
    </section>
  );
};
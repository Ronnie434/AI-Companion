import React, { useState } from 'react';
import { useWaitlist } from '../../hooks/useWaitlist';
import { Input, Button } from '../ui';

export const Footer = () => {
  const [email, setEmail] = useState('');
  const { isLoading, error, success, submitEmail } = useWaitlist();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitEmail(email, 'footer');
    if (success) {
      setEmail('');
    }
  };

  return (
    <footer className="border-t border-gray-200 bg-white py-12 dark:border-white/5 dark:bg-background-dark">
      <div className="mx-auto max-w-7xl px-6">
        {/* Waitlist Section */}
        <div className="mb-8 text-center">
          <h3 className="mb-4 text-lg font-medium text-gray-900 dark:text-white">
            Stay Updated
          </h3>
          
          {success ? (
            <div className="mx-auto max-w-md rounded-2xl bg-green-50 p-4 dark:bg-green-900/20">
              <p className="text-sm font-medium text-green-900 dark:text-green-100">
                ✓ You're on the waitlist!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mx-auto flex max-w-md gap-2">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
                required
                className="h-10 flex-1"
              />
              <Button
                type="submit"
                variant="primary"
                disabled={isLoading}
                size="sm"
                className="whitespace-nowrap"
              >
                {isLoading ? 'Joining...' : 'Join Waitlist'}
              </Button>
            </form>
          )}
          
          {error && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-400">
              {error}
            </p>
          )}
        </div>

        {/* Copyright */}
        <p className="text-center text-sm font-light text-gray-600 dark:text-text-muted">
          © 2025 AI Companion. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
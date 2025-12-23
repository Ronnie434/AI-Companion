import React, { useState, useEffect } from 'react';
import { useWaitlistModal } from '../../contexts/WaitlistContext';
import { useWaitlist } from '../../hooks/useWaitlist';
import { Input, Button } from '.';

export const WaitlistModal: React.FC = () => {
  const { isModalOpen, closeModal } = useWaitlistModal();
  const { isLoading, error, success, submitEmail, resetState } = useWaitlist();
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        closeModal();
        setEmail('');
        resetState();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [success, closeModal, resetState]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen, closeModal]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitEmail(email, 'header');
  };

  if (!isModalOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={closeModal}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="relative w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl dark:bg-gray-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={closeModal}
          className="absolute right-4 top-4 text-gray-400 transition-colors hover:text-gray-600 dark:hover:text-gray-300"
          aria-label="Close modal"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <div className="text-center">
          <h2 id="modal-title" className="mb-4 text-3xl font-medium text-gray-900 dark:text-white">
            Join the Waitlist
          </h2>
          <p className="mb-8 text-gray-600 dark:text-gray-400">
            Be among the first to experience your AI companion that never forgets.
          </p>

          {success ? (
            <div className="rounded-2xl bg-green-50 p-6 dark:bg-green-900/20">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/40">
                <svg className="h-6 w-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="font-medium text-green-900 dark:text-green-100">
                You're on the list!
              </p>
              <p className="mt-2 text-sm text-green-700 dark:text-green-300">
                We'll notify you when we launch.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
                required
                className="w-full"
                aria-label="Email address"
              />
              
              {error && (
                <p className="text-sm text-red-600 dark:text-red-400" role="alert">
                  {error}
                </p>
              )}

              <Button
                type="submit"
                variant="primary"
                disabled={isLoading}
                className="w-full"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Joining...
                  </span>
                ) : (
                  'Join Waitlist'
                )}
              </Button>
            </form>
          )}

          <p className="mt-6 text-xs text-gray-500 dark:text-gray-400">
            We respect your privacy. No spam, ever.
          </p>
        </div>
      </div>
    </div>
  );
};
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white py-12 dark:border-white/5 dark:bg-background-dark">
      <div className="mx-auto max-w-7xl px-6">
        {/* Links */}
        <div className="flex justify-center gap-6 mb-6">
          <Link
            to="/privacy"
            className="text-sm font-light text-gray-600 dark:text-muted-foreground hover:text-primary dark:hover:text-primary transition-colors"
          >
            Privacy Policy
          </Link>
          <span className="text-gray-300 dark:text-zinc-700">|</span>
          <Link
            to="/terms"
            className="text-sm font-light text-gray-600 dark:text-muted-foreground hover:text-primary dark:hover:text-primary transition-colors"
          >
            Terms of Service
          </Link>
        </div>
        {/* Copyright */}
        <p className="text-center text-sm font-light text-gray-600 dark:text-muted-foreground">
          © 2025 Asteron. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
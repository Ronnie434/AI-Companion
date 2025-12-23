interface FooterProps {
  onNavigateToPrivacy?: () => void;
  onNavigateToTerms?: () => void;
}

export const Footer = ({ onNavigateToPrivacy, onNavigateToTerms }: FooterProps) => {
  return (
    <footer className="border-t border-gray-200 bg-white py-12 dark:border-white/5 dark:bg-background-dark">
      <div className="mx-auto max-w-7xl px-6">
        {/* Links */}
        <div className="flex justify-center gap-6 mb-6">
          <button
            onClick={onNavigateToPrivacy}
            className="text-sm font-light text-gray-600 dark:text-muted-foreground hover:text-primary dark:hover:text-primary transition-colors"
          >
            Privacy Policy
          </button>
          <span className="text-gray-300 dark:text-zinc-700">|</span>
          <button
            onClick={onNavigateToTerms}
            className="text-sm font-light text-gray-600 dark:text-muted-foreground hover:text-primary dark:hover:text-primary transition-colors"
          >
            Terms of Service
          </button>
        </div>
        {/* Copyright */}
        <p className="text-center text-sm font-light text-gray-600 dark:text-muted-foreground">
          © 2025 AI Companion. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
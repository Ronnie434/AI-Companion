import { Button, ThemeToggle } from '../ui';
import { Logo } from './Logo';

export const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white/70 backdrop-blur-xl transition-all duration-300 dark:border-white/5 dark:bg-background-dark/70">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Logo />
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button
            variant="ghost"
            className="!bg-gray-900 px-5 text-sm font-medium !text-white hover:!bg-gray-800 dark:!bg-white dark:!text-gray-900 dark:hover:!bg-gray-200"
          >
            Join Waitlist
          </Button>
        </div>
      </div>
    </header>
  );
};
import { Button } from '../ui';
import { Logo } from './Logo';

export const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-background-dark/70 backdrop-blur-xl transition-all duration-300">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Logo />
        <Button
          variant="ghost"
          className="!bg-white px-5 text-sm font-medium !text-gray-900 hover:!bg-gray-200"
        >
          Join Waitlist
        </Button>
      </div>
    </header>
  );
};
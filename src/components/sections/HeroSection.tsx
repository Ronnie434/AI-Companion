import { Button } from '../ui';
import { useWaitlistModal } from '../../contexts/WaitlistContext';

export const HeroSection = () => {
  const { openModal } = useWaitlistModal();
  
  return (
    <section className="relative px-6 pb-20 pt-32 lg:pb-32 lg:pt-48">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-background-dark">
        <div className="absolute left-1/2 top-0 h-[800px] w-full -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-400/20 via-white/0 to-transparent opacity-30 dark:from-blue-900/40 dark:via-background-dark/0"></div>
      </div>
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
        <h1 className="text-4xl font-normal leading-[1.1] tracking-tight text-gray-900 sm:text-6xl md:text-7xl dark:text-white">
          Stop getting <br className="hidden md:block" />
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text font-medium text-transparent dark:from-blue-200 dark:to-indigo-200">
            surprised by life.
          </span>
        </h1>
        <p className="max-w-2xl text-lg font-light leading-relaxed text-gray-600 md:text-xl dark:text-text-muted">
          Your AI companion that remembers, tracks, and warns you about what's coming — before it becomes a problem.
        </p>
        <div className="flex w-full flex-col gap-4 pt-4 sm:w-auto sm:flex-row">
          <Button
            variant="primary"
            onClick={openModal}
            className="h-12 w-full px-8 shadow-[0_0_40px_-10px_rgba(95,165,249,0.3)] sm:w-auto"
          >
            Get Early Access
          </Button>
          <Button
            variant="secondary"
            className="h-12 w-full px-8 sm:w-auto"
            onClick={() => {
              document.getElementById('how-it-works')?.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            }}
          >
            See how it works
          </Button>
        </div>
      </div>
    </section>
  );
};
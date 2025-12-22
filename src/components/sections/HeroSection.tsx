import { Button } from '../ui';

export const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6">
      <div className="absolute inset-0 -z-10 h-full w-full bg-background-dark">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] opacity-30 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-background-dark/0 to-transparent"></div>
      </div>
      <div className="mx-auto max-w-4xl text-center flex flex-col items-center gap-8">
        <h1 className="text-4xl font-normal leading-[1.1] tracking-tight text-white sm:text-6xl md:text-7xl">
          Stop getting <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-200 font-medium">
            surprised by life.
          </span>
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-text-muted md:text-xl font-light">
          Your AI companion that remembers, tracks, and warns you about what's coming — before it becomes a problem.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
          <Button
            variant="primary"
            className="h-12 w-full sm:w-auto px-8 shadow-[0_0_40px_-10px_rgba(95,165,249,0.3)]"
          >
            Get Early Access
          </Button>
          <Button
            variant="secondary"
            className="h-12 w-full sm:w-auto px-8"
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
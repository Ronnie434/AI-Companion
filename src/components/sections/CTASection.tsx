import { Input, Button } from '../ui';

export const CTASection = () => {
  return (
    <section className="py-32 px-6 bg-background-dark text-center">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-10">
          Life already throws enough surprises.
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-8">
          <Input
            type="email"
            placeholder="Enter your email"
            className="h-12 w-full"
          />
          <Button
            variant="primary"
            className="h-12 w-full sm:w-auto px-8 whitespace-nowrap"
          >
            Join Waitlist
          </Button>
        </div>
        <p className="text-text-muted text-sm font-light">We're building this carefully. No spam.</p>
      </div>
    </section>
  );
};
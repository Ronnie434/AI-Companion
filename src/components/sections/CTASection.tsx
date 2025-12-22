import { Input, Button } from '../ui';

export const CTASection = () => {
  return (
    <section className="bg-white px-6 py-32 text-center dark:bg-background-dark">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-10 text-4xl font-medium tracking-tight text-gray-900 md:text-5xl dark:text-white">
          Life already throws enough surprises.
        </h2>
        <div className="mx-auto mb-8 flex max-w-md flex-col items-center justify-center gap-4 sm:flex-row">
          <Input
            type="email"
            placeholder="Enter your email"
            className="h-12 w-full"
          />
          <Button
            variant="primary"
            className="h-12 w-full whitespace-nowrap px-8 sm:w-auto"
          >
            Join Waitlist
          </Button>
        </div>
        <p className="text-sm font-light text-gray-600 dark:text-text-muted">We're building this carefully. No spam.</p>
      </div>
    </section>
  );
};
import { Step } from '../features';
import { steps } from '../../data/content';

export const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="border-t border-gray-200 bg-gradient-to-b from-white to-gray-50 px-6 py-24 dark:border-white/5 dark:from-background-dark dark:to-surface">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-20 text-center text-3xl font-medium text-gray-900 dark:text-white">How it works</h2>
        <div className="relative grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="absolute left-0 top-6 hidden h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-white/10 md:block"></div>
          {steps.map((step) => (
            <Step
              key={step.number}
              step={step}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
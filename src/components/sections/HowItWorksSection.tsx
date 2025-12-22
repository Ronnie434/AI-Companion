import { Step } from '../features';
import { steps } from '../../data/content';

export const HowItWorksSection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background-dark to-surface border-t border-white/5">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-medium text-center text-white mb-20">How it works</h2>
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="hidden md:block absolute top-6 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
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
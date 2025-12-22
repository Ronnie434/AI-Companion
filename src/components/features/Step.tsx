import type { Step as StepType } from '../../types';

interface StepProps {
  step: StepType;
}

export const Step = ({ step }: StepProps) => {
  return (
    <div className="relative flex flex-col items-center gap-6 text-center">
      <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 bg-white font-medium text-gray-900 shadow-lg dark:border-white/10 dark:bg-surface dark:text-white">
        {step.number}
      </div>
      <div>
        <h3 className="mb-2 text-xl font-medium text-gray-900 dark:text-white">{step.title}</h3>
        <p className="font-light leading-relaxed text-gray-600 dark:text-text-muted">{step.description}</p>
      </div>
    </div>
  );
};
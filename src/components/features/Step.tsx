import type { Step as StepType } from '../../types';

interface StepProps {
  step: StepType;
}

export const Step = ({ step }: StepProps) => {
  return (
    <div className="relative flex flex-col items-center text-center gap-6">
      <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-surface border border-white/10 text-white font-medium shadow-lg">
        {step.number}
      </div>
      <div>
        <h3 className="text-xl font-medium text-white mb-2">{step.title}</h3>
        <p className="text-text-muted font-light leading-relaxed">{step.description}</p>
      </div>
    </div>
  );
};
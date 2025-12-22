import type { Problem } from '../../types';
import { Icon } from '../ui';

interface ProblemCardProps {
  problem: Problem;
}

export const ProblemCard = ({ problem }: ProblemCardProps) => {
  return (
    <div className="group relative rounded-3xl border border-gray-200 bg-white p-8 transition-all duration-500 hover:bg-gray-50 dark:border-white/5 dark:bg-white/[0.03] dark:hover:bg-white/[0.06]">
      <div className="mb-6 inline-flex rounded-2xl bg-blue-500/10 p-3 text-primary">
        <Icon name={problem.icon} size={28} />
      </div>
      <h3 className="mb-3 text-xl font-medium text-gray-900 dark:text-white">{problem.title}</h3>
      <p className="font-light leading-relaxed text-gray-600 dark:text-text-muted">{problem.description}</p>
    </div>
  );
};
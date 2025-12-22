import type { Problem } from '../../types';
import { Icon } from '../ui';

interface ProblemCardProps {
  problem: Problem;
}

export const ProblemCard = ({ problem }: ProblemCardProps) => {
  return (
    <div className="group relative p-8 rounded-3xl bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-500 border border-white/5">
      <div className="mb-6 inline-flex p-3 rounded-2xl bg-blue-500/10 text-primary">
        <Icon name={problem.icon} size={28} />
      </div>
      <h3 className="text-xl font-medium text-white mb-3">{problem.title}</h3>
      <p className="text-text-muted leading-relaxed font-light">{problem.description}</p>
    </div>
  );
};
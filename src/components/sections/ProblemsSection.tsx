import { ProblemCard } from '../features';
import { problems } from '../../data/content';

export const ProblemsSection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background-dark to-surface">
      <div className="mx-auto max-w-6xl">
        <div className="mb-20 flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">
            Life isn't hard. <br />
            <span className="text-text-muted">Remembering everything is.</span>
          </h2>
          <p className="text-text-muted text-lg font-light max-w-lg">
            Your brain was never meant to be a task manager.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <ProblemCard
              key={index}
              problem={problem}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
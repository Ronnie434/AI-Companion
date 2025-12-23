import { ProblemCard } from '../features';
import { problems } from '../../data/content';

export const ProblemsSection = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 px-6 py-24 dark:from-background-dark dark:to-surface-dark">
      <div className="mx-auto max-w-6xl">
        <div className="mb-20 flex flex-col items-center text-center">
          <h2 className="mb-6 text-3xl font-medium tracking-tight text-gray-900 md:text-5xl dark:text-white">
            Life isn't hard. <br />
            <span className="text-gray-600 dark:text-muted-foreground">Remembering everything is.</span>
          </h2>
          <p className="max-w-lg text-lg font-light text-gray-600 dark:text-muted-foreground">
            Your brain was never meant to be a task manager.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
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
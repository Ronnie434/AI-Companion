import { FeatureCard } from '../features';
import { features } from '../../data/content';

export const FeaturesSection = () => {
  return (
    <section className="bg-white px-6 py-24 dark:bg-background-dark">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              feature={feature}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
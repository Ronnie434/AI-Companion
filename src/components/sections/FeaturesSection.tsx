import { FeatureCard } from '../features';
import { features } from '../../data/content';

export const FeaturesSection = () => {
  return (
    <section className="py-24 px-6 bg-background-dark">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
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
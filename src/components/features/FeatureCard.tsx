import type { Feature } from '../../types';
import { Icon, Card } from '../ui';

interface FeatureCardProps {
  feature: Feature;
}

export const FeatureCard = ({ feature }: FeatureCardProps) => {
  return (
    <Card hover className="flex flex-col gap-6 p-8">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
        <Icon name={feature.icon} size={32} />
      </div>
      <div>
        <h3 className="mb-3 text-2xl font-medium text-gray-900 dark:text-white">{feature.title}</h3>
        <p className="text-lg font-light leading-relaxed text-gray-600 dark:text-muted-foreground">
          <span className="font-normal text-gray-900 dark:text-white">{feature.highlight}</span> {feature.description}
        </p>
      </div>
    </Card>
  );
};
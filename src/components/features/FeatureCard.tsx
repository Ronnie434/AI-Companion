import type { Feature } from '../../types';
import { Icon, Card } from '../ui';

interface FeatureCardProps {
  feature: Feature;
}

export const FeatureCard = ({ feature }: FeatureCardProps) => {
  return (
    <Card hover className="flex flex-col gap-6 p-8">
      <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-primary/10 text-primary">
        <Icon name={feature.icon} size={32} />
      </div>
      <div>
        <h3 className="text-2xl font-medium text-white mb-3">{feature.title}</h3>
        <p className="text-text-muted text-lg font-light leading-relaxed">
          <span className="text-white font-normal">{feature.highlight}</span> {feature.description}
        </p>
      </div>
    </Card>
  );
};
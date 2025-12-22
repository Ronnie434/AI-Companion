import { Icon } from '../ui';

export const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-primary">
        <Icon name="smart_toy" size={20} />
      </div>
      <h2 className="text-base font-medium tracking-wide text-white/90">AI Companion</h2>
    </div>
  );
};
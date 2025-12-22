import { Icon } from '../ui';
import { privacyPoints } from '../../data/content';

export const PrivacySection = () => {
  return (
    <section className="py-24 px-6 bg-surface">
      <div className="mx-auto max-w-4xl rounded-[2rem] bg-white/[0.02] border border-white/5 p-10 md:p-16 text-center">
        <div className="inline-flex mb-8 text-primary/80">
          <Icon name="shield_lock" className="text-[48px]" />
        </div>
        <h2 className="text-3xl font-medium text-white mb-4">Your life data stays yours.</h2>
        <p className="text-text-muted text-lg font-light mb-12">We build for trust, not for advertisers.</p>
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
          {privacyPoints.map((point, index) => (
            <div key={index} className="flex items-center gap-3 text-text-muted font-light">
              <Icon name="check" className="text-emerald-400 text-xl" />
              <span>{point.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
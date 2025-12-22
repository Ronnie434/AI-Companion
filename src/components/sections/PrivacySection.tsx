import { Icon } from '../ui';
import { privacyPoints } from '../../data/content';

export const PrivacySection = () => {
  return (
    <section className="bg-gray-100 px-6 py-24 dark:bg-surface">
      <div className="mx-auto max-w-4xl rounded-[2rem] border border-gray-200 bg-white p-10 text-center md:p-16 dark:border-white/5 dark:bg-white/[0.02]">
        <div className="mb-8 inline-flex text-primary/80">
          <Icon name="shield_lock" className="text-[48px]" />
        </div>
        <h2 className="mb-4 text-3xl font-medium text-gray-900 dark:text-white">Your life data stays yours.</h2>
        <p className="mb-12 text-lg font-light text-gray-600 dark:text-text-muted">We build for trust, not for advertisers.</p>
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
          {privacyPoints.map((point, index) => (
            <div key={index} className="flex items-center gap-3 font-light text-gray-600 dark:text-text-muted">
              <Icon name="check" className="text-xl text-emerald-400" />
              <span>{point.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
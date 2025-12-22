import { Badge } from '../ui';

export const ValuePropSection = () => {
  return (
    <section className="py-32 px-6 bg-surface relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="mx-auto max-w-4xl text-center relative z-10">
        <Badge className="mb-8">Proactive Intelligence</Badge>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-8">
          This app doesn't wait <br />
          <span className="font-medium text-blue-100">for you to ask.</span>
        </h2>
        <p className="text-lg md:text-xl text-text-muted leading-relaxed font-light max-w-2xl mx-auto">
          Most apps react. This one anticipates. It remembers what you tell it, tracks time and patterns, and warns you{' '}
          <span className="text-primary font-medium">before</span> things go wrong. No micromanagement. No constant prompting.
        </p>
      </div>
    </section>
  );
};
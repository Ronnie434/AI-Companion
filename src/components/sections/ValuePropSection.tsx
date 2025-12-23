import { Badge } from '../ui';
import { motion } from 'framer-motion';

export const ValuePropSection = () => {
  return (
    <section className="relative overflow-hidden bg-surface-light px-6 py-40 dark:bg-surface-dark">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[100px]"></div>
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Badge className="mb-8">Proactive Intelligence</Badge>
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 text-4xl font-normal tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
          style={{marginTop: "20px"}}
        >
          This app doesn't wait <br />
          <span className="font-medium text-blue-700 dark:text-blue-100">for you to ask.</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto max-w-2xl text-lg font-light leading-relaxed text-gray-600 md:text-xl dark:text-muted-foreground"
        >
          Most apps react. This one anticipates. It remembers what you tell it, tracks time and patterns, and warns you{' '}
          <span className="font-medium text-primary">before</span> things go wrong. No micromanagement. No constant prompting.
        </motion.p>
      </div>
    </section>
  );
};
import { Step } from '../features';
import { steps } from '../../data/content';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5
    }
  }
};

export const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="border-t border-gray-200 bg-gradient-to-b from-white to-gray-50 px-6 py-24 dark:border-white/5 dark:from-background-dark dark:to-surface-dark">
      <div className="mx-auto max-w-6xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20 text-center text-3xl font-medium text-gray-900 dark:text-white"
        >
          How it works
        </motion.h2>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative grid grid-cols-1 gap-12 md:grid-cols-3"
        >
          <div className="absolute left-0 top-6 hidden h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-white/10 md:block"></div>
          {steps.map((step) => (
            <motion.div key={step.number} variants={itemVariants}>
              <Step
                step={step}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
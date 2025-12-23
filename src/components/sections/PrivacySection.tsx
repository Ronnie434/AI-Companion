import { Icon } from '../ui';
import { privacyPoints } from '../../data/content';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5
    }
  }
};

export const PrivacySection = () => {
  return (
    <section className="bg-surface-light px-6 py-24 dark:bg-surface-dark">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-4xl rounded-[2rem] border border-gray-200 bg-white p-10 text-center md:p-16 dark:border-white/10 dark:bg-background-dark"
      >
        <div className="mb-8 inline-flex text-primary/80">
          <Icon name="shield_lock" className="text-[48px]" />
        </div>
        <h2 className="mb-4 text-3xl font-medium text-gray-900 dark:text-white">Your life data stays yours.</h2>
        <p className="mb text-lg font-light text-gray-600 dark:text-muted-foreground">
          We build for trust, not for advertisers.
        </p>
        <p className="mb-12 text-lg font-lighter text-gray-500 dark:text-gray-400">
          You can review and delete anything you’ve saved at any time.
        </p>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-x-12 gap-y-6"
        >
          {privacyPoints.map((point, index) => (
            <motion.div key={index} variants={itemVariants} className="flex items-center gap-3 font-light text-gray-600 dark:text-muted-foreground">
              <Icon name="check" className="text-xl text-emerald-400" />
              <span>{point.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
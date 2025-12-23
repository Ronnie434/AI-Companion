import { FeatureCard } from '../features';
import { features } from '../../data/content';
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export const FeaturesSection = () => {
  return (
    <section className="bg-white px-6 py-24 dark:bg-background-dark">
      <div className="mx-auto max-w-6xl">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <FeatureCard
                feature={feature}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
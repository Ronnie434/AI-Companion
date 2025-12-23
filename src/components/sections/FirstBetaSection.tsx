import { motion } from 'framer-motion';
import { Icon } from '../ui';

export const FirstBetaSection = () => {
  return (
    <section className="bg-surface-light px-6 py-24 dark:bg-surface-dark">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-[2rem] border border-gray-200 bg-white p-8 md:p-12 dark:border-white/10 dark:bg-background-dark shadow-sm"
        >
          <div className="text-center mb-10">
            <h2 className="mb-4 text-3xl font-medium text-gray-900 dark:text-white">
              What you'll get in the first beta
            </h2>
            <p className="mx-auto max-w-2xl text-lg font-light text-gray-600 dark:text-muted-foreground">
              We're starting with the smallest version that delivers calm, reliable foresight.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1 max-w-2xl mx-auto">
            <ul className="space-y-4">
              {[
                "Capture thoughts, tasks, bills, and follow-ups by typing or voice",
                "Automatic organization into Today + Upcoming",
                "A daily brief that shows what matters (and what can wait)",
                "Smart reminders with snooze and reschedule",
                "Quiet hours + notification limits to avoid noise"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-lg font-light text-gray-700 dark:text-gray-300">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                    <Icon name="check" className="h-3 w-3 text-blue-600 dark:text-blue-400" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 text-center">
             <p className="text-sm text-gray-500 dark:text-gray-400">
              Early access will roll out in small batches so we can build this carefully.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

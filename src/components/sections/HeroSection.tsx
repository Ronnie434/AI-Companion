import { Button } from '../ui';
import { useWaitlistModal } from '../../contexts/WaitlistContext';
import { motion } from 'framer-motion';
import previewMock from '../../assets/preview_mock.png';

export const HeroSection = () => {
  const { openModal } = useWaitlistModal();
  
  return (
    <section className="relative px-6 pb-20 pt-32 lg:pb-32 lg:pt-48 overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-background-dark">
        <div className="absolute left-1/2 top-0 h-[800px] w-full -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-400/20 via-white/0 to-transparent opacity-30 dark:from-blue-900/40 dark:via-background-dark/0"></div>
      </div>
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
        <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
          <h1 className="text-4xl font-normal leading-[1.1] tracking-tight text-gray-900 sm:text-6xl md:text-7xl dark:text-white">
            Stop getting <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text font-medium text-transparent dark:from-blue-200 dark:to-indigo-200">
              surprised by life.
            </span>
          </h1>
        </motion.div>
        <motion.p 
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.2 }}
  className="max-w-2xl text-lg font-light leading-relaxed text-gray-600 md:text-xl dark:text-muted-foreground"
>
          Your AI companion that remembers, tracks, and warns you about what's coming — before it becomes a problem.
        </motion.p>
        <motion.div 
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.4 }}
  className="flex w-full flex-col gap-4 pt-4 sm:w-auto sm:flex-row"
>
          <Button
            variant="primary"
            onClick={openModal}
            className="h-12 w-full px-8 shadow-[0_0_40px_-10px_rgba(95,165,249,0.3)] sm:w-auto"
          >
            Get Early Access
          </Button>
          <Button
            variant="secondary"
            className="h-12 w-full px-8 sm:w-auto"
            onClick={() => {
              document.getElementById('how-it-works')?.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            }}
          >
            See how it works
          </Button>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 40 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.7, delay: 0.6 }}
           className="relative mt-16 w-full max-w-5xl"
         >
           <div className="relative rounded-3xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 dark:bg-white/5 dark:ring-white/10 lg:rounded-[2.5rem] lg:p-4">
             <img
               src={previewMock}
               alt="Preview of capture and daily brief screens"
               className="rounded-2xl shadow-2xl ring-1 ring-gray-900/10 dark:ring-white/10 lg:rounded-[2rem]"
             />
           </div>
         </motion.div>
      </div>
    </section>
  );
};
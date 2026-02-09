import { motion } from 'framer-motion';

const AnimatedBackground = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-grid-surface bg-[length:40px_40px] opacity-40 dark:opacity-20" />
    <motion.div
      className="absolute -left-24 top-20 h-64 w-64 rounded-full bg-lucid/20 blur-3xl"
      animate={{ y: [0, -30, 0] }}
      transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.div
      className="absolute right-0 top-10 h-72 w-72 rounded-full bg-aura/20 blur-3xl"
      animate={{ y: [0, 25, 0] }}
      transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.div
      className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl"
      animate={{ y: [0, -20, 0] }}
      transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
    />
  </div>
);

export default AnimatedBackground;

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const ProgressRow = ({ label, value }) => (
  <div className="space-y-2">
    <div className="flex items-center justify-between text-xs font-medium text-slate-600 dark:text-slate-300">
      <span>{label}</span>
      <span>{value}%</span>
    </div>
    <div className="h-2 w-full rounded-full bg-slate-200 dark:bg-slate-800">
      <div
        className="h-2 rounded-full bg-gradient-to-r from-lucid via-pulse to-aura"
        style={{ width: `${value}%` }}
      />
    </div>
  </div>
);

const ExplainableAIAccordion = ({ reasons = [], breakdown = {} }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-sm dark:border-slate-800 dark:bg-white/5">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-3 text-left"
        onClick={() => setOpen((prev) => !prev)}
      >
        <div>
          <p className="text-sm font-semibold text-slate-900 dark:text-white">Why this mentor?</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">Explainable AI reasoning, no black boxes.</p>
        </div>
        <ChevronDown
          size={18}
          className={`transition ${open ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="mt-4 space-y-4">
              <div className="space-y-2">
                {reasons.map((reason) => (
                  <p key={reason} className="text-sm text-slate-600 dark:text-slate-300">
                    • {reason}
                  </p>
                ))}
              </div>
              <div className="space-y-3">
                <ProgressRow label="Skill match" value={breakdown.skillMatch ?? 0} />
                <ProgressRow label="Goal alignment" value={breakdown.goalAlignment ?? 0} />
                <ProgressRow label="Availability fit" value={breakdown.availabilityFit ?? 0} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ExplainableAIAccordion;

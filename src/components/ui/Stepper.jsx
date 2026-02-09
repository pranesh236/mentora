import { CheckCircle2 } from 'lucide-react';

const Stepper = ({ steps, activeStep }) => (
  <div className="flex flex-wrap items-center gap-4">
    {steps.map((step, index) => {
      const isDone = index < activeStep;
      const isActive = index === activeStep;
      return (
        <div key={step} className="flex items-center gap-2">
          <div
            className={`flex h-8 w-8 items-center justify-center rounded-full border text-sm font-semibold ${
              isDone
                ? 'border-emerald-500 bg-emerald-500 text-white'
                : isActive
                ? 'border-lucid text-lucid'
                : 'border-slate-200 text-slate-400 dark:border-slate-700'
            }`}
          >
            {isDone ? <CheckCircle2 size={16} /> : index + 1}
          </div>
          <span className={`text-sm ${isActive ? 'text-slate-900 dark:text-white' : 'text-slate-500'}`}>
            {step}
          </span>
        </div>
      );
    })}
  </div>
);

export default Stepper;

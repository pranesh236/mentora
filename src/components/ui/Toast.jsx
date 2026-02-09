import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Info, TriangleAlert, X } from 'lucide-react';

const iconMap = {
  info: Info,
  success: CheckCircle2,
  warning: TriangleAlert,
};

const styleMap = {
  info: 'bg-slate-900 text-white',
  success: 'bg-emerald-600 text-white',
  warning: 'bg-amber-500 text-white',
};

const ToastViewport = ({ toasts, onDismiss }) => (
  <div className="pointer-events-none fixed right-6 top-6 z-50 flex w-[320px] flex-col gap-3">
    <AnimatePresence>
      {toasts.map((toast) => {
        const Icon = iconMap[toast.type] ?? Info;
        return (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`pointer-events-auto rounded-2xl px-4 py-3 shadow-soft ${styleMap[toast.type] ?? styleMap.info}`}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3">
                <Icon size={18} className="mt-0.5" />
                <div>
                  <p className="text-sm font-semibold">{toast.title}</p>
                  {toast.description && (
                    <p className="text-xs opacity-90">{toast.description}</p>
                  )}
                </div>
              </div>
              <button
                onClick={() => onDismiss(toast.id)}
                className="rounded-full p-1 transition hover:bg-white/10"
                aria-label="Dismiss"
              >
                <X size={14} />
              </button>
            </div>
          </motion.div>
        );
      })}
    </AnimatePresence>
  </div>
);

export default ToastViewport;

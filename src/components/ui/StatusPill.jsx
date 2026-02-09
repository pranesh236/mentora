import { cn } from '../../utils/classNames';

const statusStyles = {
  New: 'bg-lucid/15 text-lucid',
  'Awaiting decision': 'bg-amber-500/15 text-amber-600',
  'In review': 'bg-lucid/15 text-lucid',
  Confirmed: 'bg-emerald-500/15 text-emerald-600',
  'Pending response': 'bg-slate-200 text-slate-600 dark:bg-slate-800 dark:text-slate-300',
  Accepted: 'bg-emerald-500/15 text-emerald-600',
  Rejected: 'bg-rose-500/15 text-rose-500',
};

const StatusPill = ({ status }) => (
  <span className={cn('rounded-full px-3 py-1 text-xs font-semibold', statusStyles[status] ?? 'bg-slate-100 text-slate-600')}>
    {status}
  </span>
);

export default StatusPill;

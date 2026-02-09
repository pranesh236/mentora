import { cn } from '../../utils/classNames';

const MatchScoreBadge = ({ score }) => {
  const tone = score >= 92 ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400' : score >= 88 ? 'bg-lucid/15 text-lucid' : 'bg-amber-500/15 text-amber-500';

  return (
    <span
      className={cn(
        'rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em]',
        tone
      )}
    >
      {score}% match
    </span>
  );
};

export default MatchScoreBadge;

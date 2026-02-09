import { Briefcase, Calendar, Sparkles } from 'lucide-react';
import Button from './Button';
import ExplainableAIAccordion from './ExplainableAIAccordion';
import MatchScoreBadge from './MatchScoreBadge';

const MentorCard = ({ mentor, onRequest }) => (
  <div className="glass flex h-full flex-col gap-4 rounded-3xl border border-white/30 p-5">
    <div className="flex items-start justify-between gap-4">
      <div>
        <p className="text-lg font-semibold text-slate-900 dark:text-white">{mentor.name}</p>
        <p className="text-sm text-slate-500 dark:text-slate-400">{mentor.domain}</p>
      </div>
      <MatchScoreBadge score={mentor.match} />
    </div>

    <div className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
      <div className="flex items-center gap-2">
        <Briefcase size={16} className="text-lucid" />
        <span>{mentor.experience} of experience</span>
      </div>
      <div className="flex items-center gap-2">
        <Calendar size={16} className="text-emerald-400" />
        <span>{mentor.availability}</span>
      </div>
      <div className="flex items-center gap-2">
        <Sparkles size={16} className="text-amber-400" />
        <span>{mentor.focus.join(' • ')}</span>
      </div>
    </div>

    <ExplainableAIAccordion reasons={mentor.why} breakdown={mentor.aiBreakdown} />

    <Button onClick={() => onRequest(mentor)} className="mt-auto w-full">
      Request mentorship
    </Button>
  </div>
);

export default MentorCard;

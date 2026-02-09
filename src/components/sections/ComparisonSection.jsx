import { CheckCircle2, XCircle } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const traditional = [
  'Scroll through hundreds of profiles with little guidance.',
  'Unclear why a mentor is a fit beyond a headline.',
  'Availability mismatch discovered late.',
  'Decision fatigue before first session.',
];

const mentorAI = [
  'Goal-first onboarding prioritizes clarity before selection.',
  'Explainable AI reveals why each mentor is recommended.',
  'Availability and response time are matched up front.',
  'Confidence-building flow from first click to first call.',
];

const ComparisonSection = () => (
  <section className="py-20">
    <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
      <SectionHeading
        eyebrow="Why we’re different"
        title="Traditional mentorship platforms leave you guessing"
        subtitle="MentorAI replaces guessing with transparent, guided decisions."
      />
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white/70 p-6 dark:border-slate-800 dark:bg-white/5">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Traditional</p>
          <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
            {traditional.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <XCircle size={18} className="text-rose-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-lucid/30 bg-lucid/10 p-6 text-slate-900 dark:border-lucid/50 dark:bg-white/5 dark:text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-lucid">MentorAI</p>
          <ul className="mt-4 space-y-3 text-sm">
            {mentorAI.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-emerald-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default ComparisonSection;

import { Brain, Compass, UserCheck } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const steps = [
  {
    title: 'Clarify your goal first',
    description: 'Guided onboarding maps your ambition, skills, and confidence gaps before any mentor selection.',
    icon: Compass,
  },
  {
    title: 'AI matches with reasons',
    description: 'Every recommendation shows skill alignment, goal fit, and availability compatibility.',
    icon: Brain,
  },
  {
    title: 'Connect with confidence',
    description: 'Request sessions only after you understand the mentor fit. No pressure, no confusion.',
    icon: UserCheck,
  },
];

const HowItWorks = () => (
  <section className="py-20">
    <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
      <SectionHeading
        eyebrow="How it works"
        title="Career clarity in three calm steps"
        subtitle="We reduce decision fatigue by sequencing clarity, AI reasoning, and mentor connection."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {steps.map(({ title, description, icon: Icon }) => (
          <div key={title} className="glass rounded-3xl border border-white/30 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lucid/15 text-lucid">
              <Icon size={20} />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;

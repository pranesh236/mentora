import { Calendar, LineChart, ShieldCheck, Sparkles } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const features = [
  {
    title: 'Goal-first onboarding',
    description: 'We capture intent, not just skills. Your clarity score drives mentor selection.',
    icon: Sparkles,
  },
  {
    title: 'Explainable AI matching',
    description: 'Every match includes a transparent breakdown of skill and goal alignment.',
    icon: LineChart,
  },
  {
    title: 'Availability intelligence',
    description: 'Calendars, time zones, and bandwidth matched so sessions happen faster.',
    icon: Calendar,
  },
  {
    title: 'Trust-first verification',
    description: 'Mentors are vetted for impact, empathy, and reliability—not just titles.',
    icon: ShieldCheck,
  },
];

const FeatureCards = () => (
  <section className="py-20">
    <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
      <SectionHeading
        eyebrow="Why MentorAI"
        title="Designed for confidence, not endless scrolling"
        subtitle="Mentor discovery becomes a guided decision with transparent AI and human empathy."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {features.map(({ title, description, icon: Icon }) => (
          <div key={title} className="glass rounded-3xl border border-white/30 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-500">
              <Icon size={20} />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeatureCards;

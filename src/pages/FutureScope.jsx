import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import { roadmapItems } from '../data/roadmap';

const FutureScope = () => (
  <section className="mx-auto max-w-6xl px-6 py-16">
    <div className="flex flex-col gap-12">
      <SectionHeading
        eyebrow="Future scope"
        title="Where MentorAI is headed"
        subtitle="We are building a full-stack career intelligence platform that evolves with you."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {roadmapItems.map((item) => (
          <Card key={item.title} className="space-y-3">
            <div className="flex items-center justify-between">
              <p className="text-lg font-semibold text-slate-900 dark:text-white">{item.title}</p>
              <span className="rounded-full bg-lucid/15 px-3 py-1 text-xs font-semibold text-lucid">
                {item.horizon}
              </span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300">{item.description}</p>
          </Card>
        ))}
      </div>

      <Card className="space-y-4">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Institution onboarding</h3>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          Partnering with universities and learning programs to give cohorts AI-guided mentorship, cohort analytics, and mentor capacity planning.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            'Cohort success dashboards',
            'AI-driven placement readiness',
            'Mentor capacity forecasting',
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-slate-200 bg-white/70 px-4 py-3 text-xs text-slate-600 dark:border-slate-800 dark:bg-white/5 dark:text-slate-300">
              {item}
            </div>
          ))}
        </div>
      </Card>
    </div>
  </section>
);

export default FutureScope;

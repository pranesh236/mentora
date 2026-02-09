import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import ExplainableAIAccordion from '../components/ui/ExplainableAIAccordion';

const AIExplanation = () => (
  <section className="mx-auto max-w-6xl px-6 py-16">
    <div className="flex flex-col gap-10">
      <SectionHeading
        eyebrow="AI transparency"
        title="Every match is explainable"
        subtitle="MentorAI never asks you to trust a black box. We show why a mentor is recommended in plain language and metrics."
      />

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="space-y-4">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Match breakdown</h3>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            We weigh three pillars to keep the recommendation honest and actionable.
          </p>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between text-xs font-medium text-slate-600 dark:text-slate-300">
                <span>Skill match</span>
                <span>92%</span>
              </div>
              <div className="mt-2 h-2 rounded-full bg-slate-200 dark:bg-slate-800">
                <div className="h-2 w-[92%] rounded-full bg-gradient-to-r from-lucid via-pulse to-aura" />
              </div>
              <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                Your skills overlap with 4 of the mentor’s core coaching themes.
              </p>
            </div>
            <div>
              <div className="flex items-center justify-between text-xs font-medium text-slate-600 dark:text-slate-300">
                <span>Goal alignment</span>
                <span>95%</span>
              </div>
              <div className="mt-2 h-2 rounded-full bg-slate-200 dark:bg-slate-800">
                <div className="h-2 w-[95%] rounded-full bg-gradient-to-r from-emerald-400 to-lucid" />
              </div>
              <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                The mentor has successfully guided similar career pivots in the last year.
              </p>
            </div>
            <div>
              <div className="flex items-center justify-between text-xs font-medium text-slate-600 dark:text-slate-300">
                <span>Availability fit</span>
                <span>88%</span>
              </div>
              <div className="mt-2 h-2 rounded-full bg-slate-200 dark:bg-slate-800">
                <div className="h-2 w-[88%] rounded-full bg-gradient-to-r from-amber-400 to-emerald-400" />
              </div>
              <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                The mentor offers sessions during your preferred evening slots.
              </p>
            </div>
          </div>
        </Card>

        <Card className="space-y-4">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Human-readable rationale</h3>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            A transparent, conversational explanation accompanies every match so you can decide quickly.
          </p>
          <ExplainableAIAccordion
            reasons={[
              'Mentor has led two AI product launches within the last 18 months.',
              'Their mentees reported 25% faster role transitions with similar goals.',
              'Availability overlaps with your preferred Wednesday and Friday slots.',
            ]}
            breakdown={{ skillMatch: 92, goalAlignment: 95, availabilityFit: 88 }}
          />
          <div className="rounded-2xl border border-slate-200 bg-white/70 px-4 py-3 text-xs text-slate-600 dark:border-slate-800 dark:bg-white/5 dark:text-slate-300">
            We also surface bias checks and mentor quality signals before a recommendation is finalized.
          </div>
        </Card>
      </div>
    </div>
  </section>
);

export default AIExplanation;

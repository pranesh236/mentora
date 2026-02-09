import { testimonials } from '../../data/testimonials';
import SectionHeading from '../ui/SectionHeading';

const Testimonials = () => (
  <section className="py-20">
    <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
      <SectionHeading
        eyebrow="Trusted by ambitious talent"
        title="Real outcomes, not vague promises"
        subtitle="Mentees describe the experience as clear, calm, and confidence-building."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <div key={testimonial.name} className="glass rounded-3xl border border-white/30 p-6">
            <p className="text-sm text-slate-600 dark:text-slate-300">“{testimonial.quote}”</p>
            <p className="mt-4 text-sm font-semibold text-slate-900 dark:text-white">{testimonial.name}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">{testimonial.role}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;

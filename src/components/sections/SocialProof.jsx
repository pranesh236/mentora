import { socialProof } from '../../data/testimonials';

const SocialProof = () => (
  <section className="py-16">
    <div className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-4">
      {socialProof.map((item) => (
        <div key={item.label} className="glass rounded-2xl border border-white/30 p-5 text-center">
          <p className="text-2xl font-semibold text-slate-900 dark:text-white">{item.label}</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">{item.value}</p>
        </div>
      ))}
    </div>
  </section>
);

export default SocialProof;

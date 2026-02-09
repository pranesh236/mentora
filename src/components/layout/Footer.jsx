import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="border-t border-slate-200/70 bg-white/70 py-10 dark:border-white/10 dark:bg-ink/80">
    <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between">
      <div>
        <p className="text-lg font-semibold text-slate-900 dark:text-white">MentorAI</p>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Explainable AI mentorship for confident career decisions.
        </p>
      </div>
      <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-300">
        <Link to="/auth" className="hover:text-slate-900 dark:hover:text-white">Login</Link>
        <Link to="/onboarding/mentee" className="hover:text-slate-900 dark:hover:text-white">Mentee onboarding</Link>
        <Link to="/onboarding/mentor" className="hover:text-slate-900 dark:hover:text-white">Mentor onboarding</Link>
        <Link to="/ai-explain" className="hover:text-slate-900 dark:hover:text-white">AI transparency</Link>
        <Link to="/future" className="hover:text-slate-900 dark:hover:text-white">Roadmap</Link>
      </div>
    </div>
  </footer>
);

export default Footer;

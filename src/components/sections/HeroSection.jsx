import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import AnimatedBackground from '../layout/AnimatedBackground';
import Button from '../ui/Button';

const HeroSection = () => (
  <section className="relative overflow-hidden bg-light-hero py-24 dark:bg-hero-gradient">
    <AnimatedBackground />
    <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 lg:flex-row lg:items-center">
      <div className="flex-1 space-y-6">
        <motion.span
          className="inline-flex items-center gap-2 rounded-full border border-lucid/30 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-700 shadow-sm dark:border-lucid/40 dark:bg-white/10 dark:text-slate-200"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Sparkles size={14} className="text-lucid" />
          AI-Powered Career Clarity
        </motion.span>
        <motion.h1
          className="text-4xl font-semibold leading-tight text-slate-900 dark:text-white md:text-5xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Find the mentor who understands your goals, not just your resume.
        </motion.h1>
        <motion.p
          className="max-w-xl text-lg text-slate-600 dark:text-slate-300"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          MentorAI blends explainable matching, real-world expertise, and guided onboarding so you gain confidence before you even book the first session.
        </motion.p>
        <motion.div
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Button as={Link} to="/onboarding/mentee" size="lg">
            Find My Career Mentor
            <ArrowRight size={16} />
          </Button>
          <Button as={Link} to="/onboarding/mentor" variant="secondary" size="lg">
            Become a Mentor
          </Button>
        </motion.div>
        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-300">
          <div className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-emerald-500" />
            Verified mentors, transparent matches
          </div>
          <div className="flex items-center gap-2">
            <Sparkles size={16} className="text-lucid" />
            AI guidance with human oversight
          </div>
        </div>
      </div>
      <div className="flex-1">
        <motion.div
          className="glass rounded-3xl border border-white/30 p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-slate-900 dark:text-white">AI Career Snapshot</p>
            <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-500">Live</span>
          </div>
          <div className="mt-6 space-y-4 text-sm text-slate-600 dark:text-slate-300">
            <div className="flex items-center justify-between">
              <span>Goal clarity score</span>
              <span className="text-slate-900 dark:text-white">92%</span>
            </div>
            <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-800">
              <div className="h-2 w-[92%] rounded-full bg-gradient-to-r from-lucid via-pulse to-aura" />
            </div>
            <div className="flex items-center justify-between">
              <span>Mentor availability fit</span>
              <span className="text-slate-900 dark:text-white">88%</span>
            </div>
            <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-800">
              <div className="h-2 w-[88%] rounded-full bg-gradient-to-r from-emerald-400 to-lucid" />
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 text-xs text-slate-600 dark:border-slate-800 dark:bg-white/5 dark:text-slate-300">
              “Our AI emphasizes your career goal and learning style first. Mentor recommendations are scored against your confidence gaps.”
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;

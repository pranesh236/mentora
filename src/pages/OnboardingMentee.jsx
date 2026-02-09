import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Clock, Compass, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import SectionHeading from '../components/ui/SectionHeading';
import TagInput from '../components/ui/TagInput';
import Slider from '../components/ui/Slider';
import AvailabilityPicker from '../components/ui/AvailabilityPicker';
import { useToast } from '../hooks/useToast';
import { useAuth } from '../hooks/useAuth';
import { upsertMenteeProfile } from '../services/firestore';

const goals = [
  { title: 'Career pivot into AI', description: 'Map the fastest path to AI/ML roles.' },
  { title: 'Leadership readiness', description: 'Build confidence for senior IC or manager roles.' },
  { title: 'Portfolio polish', description: 'Curate a portfolio that tells your story.' },
  { title: 'Interview mastery', description: 'Practice high-stakes interviews with clarity.' },
];

const OnboardingMentee = () => {
  const [goal, setGoal] = useState(goals[0].title);
  const [skills, setSkills] = useState(['Product sense', 'Data analysis']);
  const [experience, setExperience] = useState(4);
  const [availability, setAvailability] = useState('Weekday evenings');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { pushToast } = useToast();
  const { user } = useAuth();

  const handleSubmit = () => {
    if (!user) {
      pushToast({ title: 'Please log in first', description: 'Create an account to save your onboarding.', type: 'warning' });
      navigate('/auth');
      return;
    }
    setLoading(true);
    window.setTimeout(async () => {
      await upsertMenteeProfile(user.uid, {
        goal,
        skills,
        experience,
        availability,
      });
      setLoading(false);
      pushToast({
        title: 'Mentor shortlist ready',
        description: 'We ranked your top mentors with explainable match scores.',
        type: 'success',
      });
      navigate('/dashboard/mentee');
    }, 1200);
  };

  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <div className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="Mentee onboarding"
          title="Clarity before matching"
          subtitle="Tell us what you want to achieve. We’ll handle the mentor search with explainable AI."
        />

        <Card className="space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white">
              <Compass size={18} className="text-lucid" />
              Career goal selection
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {goals.map((item) => (
                <button
                  key={item.title}
                  onClick={() => setGoal(item.title)}
                  className={`rounded-3xl border p-4 text-left transition ${
                    goal === item.title
                      ? 'border-lucid bg-lucid/10 text-slate-900 dark:text-white'
                      : 'border-slate-200 bg-white/70 text-slate-600 hover:border-slate-300 dark:border-slate-800 dark:bg-white/5 dark:text-slate-300'
                  }`}
                >
                  <p className="text-sm font-semibold">{item.title}</p>
                  <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">{item.description}</p>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white">
              <Sparkles size={18} className="text-emerald-400" />
              Skill selection
            </div>
            <TagInput tags={skills} setTags={setSkills} />
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white">
              <Brain size={18} className="text-aura" />
              Experience level (years)
            </div>
            <Slider label="Years of professional experience" value={experience} setValue={setExperience} min={0} max={12} />
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white">
              <Clock size={18} className="text-lucid" />
              Availability preference
            </div>
            <AvailabilityPicker value={availability} setValue={setAvailability} />
          </div>

          <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white/70 px-4 py-3 text-xs text-slate-600 dark:border-slate-800 dark:bg-white/5 dark:text-slate-300">
            <span>AI will prioritize mentors who match your goal and learning style.</span>
            <span className="font-semibold text-slate-900 dark:text-white">Goal clarity score: 91%</span>
          </div>

          <Button onClick={handleSubmit} size="lg" className="w-full">
            Let AI Find My Mentor
          </Button>
        </Card>
      </div>

      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="glass flex max-w-md flex-col items-center gap-4 rounded-3xl border border-white/20 p-8 text-center"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
            >
              <div className="ai-ring flex h-16 w-16 items-center justify-center rounded-full">
                <div className="h-10 w-10 rounded-full bg-ink" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Building your mentor shortlist</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Mapping goal alignment, skill overlap, and mentor availability. This takes about 20 seconds.
              </p>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                Explainable match scores loading
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default OnboardingMentee;

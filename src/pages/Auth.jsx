import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, User, Users } from 'lucide-react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Stepper from '../components/ui/Stepper';
import { auth } from '../firebase';
import { createUserProfile } from '../services/firestore';
import { useToast } from '../hooks/useToast';

const steps = ['Account', 'Profile', 'Done'];

const Auth = () => {
  const [mode, setMode] = useState('login');
  const [role, setRole] = useState('mentee');
  const [step, setStep] = useState(0);
  const navigate = useNavigate();
  const { pushToast } = useToast();
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    focus: '',
  });

  const handleOnboarding = () => {
    navigate(role === 'mentor' ? '/onboarding/mentor' : '/onboarding/mentee');
  };

  const handleSubmit = async () => {
    try {
      if (mode === 'signup') {
        if (form.password !== form.confirmPassword) {
          pushToast({ title: 'Passwords do not match', type: 'warning' });
          return;
        }
        const result = await createUserWithEmailAndPassword(auth, form.email, form.password);
        await createUserProfile(result.user.uid, {
          name: form.name,
          focus: form.focus,
          role,
          email: form.email,
        });
        pushToast({ title: 'Account created', description: 'Continue to onboarding.', type: 'success' });
        setStep(2);
      } else {
        await signInWithEmailAndPassword(auth, form.email, form.password);
        pushToast({ title: 'Welcome back', description: 'Let’s continue to onboarding.', type: 'success' });
        setStep(2);
      }
    } catch (error) {
      pushToast({
        title: 'Authentication failed',
        description: error.message,
        type: 'warning',
      });
    }
  };

  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <div className="flex flex-col gap-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold text-slate-900 dark:text-white">
              {mode === 'login' ? 'Welcome back' : 'Create your account'}
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Start with a calm, guided setup. No pressure, just clarity.
            </p>
          </div>
          <div className="flex rounded-full border border-slate-200 bg-white/70 p-1 text-xs dark:border-slate-800 dark:bg-white/5">
            {['login', 'signup'].map((item) => (
              <button
                key={item}
                onClick={() => setMode(item)}
                className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition ${
                  mode === item ? 'bg-lucid/20 text-lucid' : 'text-slate-500 dark:text-slate-400'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <Card className="space-y-6">
          <Stepper steps={steps} activeStep={step} />

          <div className="grid gap-3 md:grid-cols-2">
            <button
              onClick={() => setRole('mentee')}
              className={`flex items-center gap-3 rounded-2xl border px-4 py-3 text-left text-sm font-medium transition ${
                role === 'mentee'
                  ? 'border-lucid bg-lucid/10 text-slate-900 dark:text-white'
                  : 'border-slate-200 bg-white/70 text-slate-600 dark:border-slate-800 dark:bg-white/5 dark:text-slate-300'
              }`}
            >
              <Users size={18} className="text-lucid" />
              Mentee
            </button>
            <button
              onClick={() => setRole('mentor')}
              className={`flex items-center gap-3 rounded-2xl border px-4 py-3 text-left text-sm font-medium transition ${
                role === 'mentor'
                  ? 'border-lucid bg-lucid/10 text-slate-900 dark:text-white'
                  : 'border-slate-200 bg-white/70 text-slate-600 dark:border-slate-800 dark:bg-white/5 dark:text-slate-300'
              }`}
            >
              <User size={18} className="text-lucid" />
              Mentor
            </button>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid gap-4"
            >
              {step === 0 && (
                <div className="grid gap-4 md:grid-cols-2">
                  <label className="flex flex-col gap-2 text-sm text-slate-600 dark:text-slate-300">
                    Email
                    <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/70 px-3 py-2 dark:border-slate-800 dark:bg-white/5">
                      <Mail size={16} />
                      <input
                        className="w-full bg-transparent outline-none"
                        placeholder="you@company.com"
                        value={form.email}
                        onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
                      />
                    </div>
                  </label>
                  <label className="flex flex-col gap-2 text-sm text-slate-600 dark:text-slate-300">
                    Password
                    <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/70 px-3 py-2 dark:border-slate-800 dark:bg-white/5">
                      <Lock size={16} />
                      <input
                        type="password"
                        className="w-full bg-transparent outline-none"
                        placeholder="••••••••"
                        value={form.password}
                        onChange={(event) => setForm((prev) => ({ ...prev, password: event.target.value }))}
                      />
                    </div>
                  </label>
                  {mode === 'signup' && (
                    <label className="flex flex-col gap-2 text-sm text-slate-600 dark:text-slate-300 md:col-span-2">
                      Confirm password
                      <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/70 px-3 py-2 dark:border-slate-800 dark:bg-white/5">
                        <Lock size={16} />
                        <input
                          type="password"
                          className="w-full bg-transparent outline-none"
                          placeholder="••••••••"
                          value={form.confirmPassword}
                          onChange={(event) => setForm((prev) => ({ ...prev, confirmPassword: event.target.value }))}
                        />
                      </div>
                    </label>
                  )}
                </div>
              )}

              {step === 1 && (
                <div className="grid gap-4 md:grid-cols-2">
                  <label className="flex flex-col gap-2 text-sm text-slate-600 dark:text-slate-300">
                    Full name
                    <input
                      className="rounded-2xl border border-slate-200 bg-white/70 px-3 py-2 outline-none dark:border-slate-800 dark:bg-white/5"
                      placeholder="Your name"
                      value={form.name}
                      onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
                    />
                  </label>
                  <label className="flex flex-col gap-2 text-sm text-slate-600 dark:text-slate-300">
                    Primary focus
                    <input
                      className="rounded-2xl border border-slate-200 bg-white/70 px-3 py-2 outline-none dark:border-slate-800 dark:bg-white/5"
                      placeholder="AI product, Design, Data"
                      value={form.focus}
                      onChange={(event) => setForm((prev) => ({ ...prev, focus: event.target.value }))}
                    />
                  </label>
                </div>
              )}

              {step === 2 && (
                <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-600 dark:text-emerald-300">
                  You are all set. Next, we will guide your {role} onboarding with a clarity-first flow.
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setStep((prev) => Math.max(0, prev - 1))}
              disabled={step === 0}
            >
              Back
            </Button>
            {step < 2 ? (
              <Button
                size="sm"
                onClick={async () => {
                  if (step === 0) {
                    if (mode === 'login') {
                      await handleSubmit();
                      return;
                    }
                    setStep(1);
                    return;
                  }
                  if (step === 1) {
                    await handleSubmit();
                    return;
                  }
                }}
              >
                Continue
              </Button>
            ) : (
              <Button size="sm" onClick={handleOnboarding}>Go to onboarding</Button>
            )}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Auth;

import { useState } from 'react';
import { BadgeCheck, BookOpen, Briefcase, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import SectionHeading from '../components/ui/SectionHeading';
import TagInput from '../components/ui/TagInput';
import Slider from '../components/ui/Slider';
import AvailabilityPicker from '../components/ui/AvailabilityPicker';
import { useToast } from '../hooks/useToast';
import { useAuth } from '../hooks/useAuth';
import { upsertMentorProfile } from '../services/firestore';

const OnboardingMentor = () => {
  const [expertise, setExpertise] = useState('AI Product Strategy');
  const [skills, setSkills] = useState(['Roadmapping', 'Mentor coaching', 'Go-to-market']);
  const [experience, setExperience] = useState(10);
  const [availability, setAvailability] = useState('Flexible schedule');
  const [bio, setBio] = useState('I help ambitious professionals transition into AI-first product roles with clarity and momentum.');
  const navigate = useNavigate();
  const { pushToast } = useToast();
  const { user, profile } = useAuth();

  const handleComplete = () => {
    if (!user) {
      pushToast({ title: 'Please log in first', description: 'Create an account to save your mentor profile.', type: 'warning' });
      navigate('/auth');
      return;
    }
    pushToast({
      title: 'Mentor profile completed',
      description: 'You are ready to receive mentorship requests.',
      type: 'success',
    });
    upsertMentorProfile(user.uid, {
      name: profile?.name ?? user.email?.split('@')[0] ?? 'Mentor',
      domain: expertise,
      experience: `${experience} years`,
      match: 90,
      focus: skills,
      availability,
      why: [
        'Specializes in clarity-first mentorship.',
        'Strong alignment with goal-setting best practices.',
        'Availability matches mentee demand.',
      ],
      aiBreakdown: { skillMatch: 90, goalAlignment: 92, availabilityFit: 88 },
      bio,
    }).then(() => navigate('/dashboard/mentor'));
  };

  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <div className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="Mentor onboarding"
          title="Set the tone for meaningful mentorship"
          subtitle="We surface your strengths and time preferences so mentees receive the right guidance."
        />

        <Card className="space-y-8">
          <label className="space-y-2 text-sm font-semibold text-slate-900 dark:text-white">
            <div className="flex items-center gap-2">
              <Briefcase size={18} className="text-lucid" />
              Domain expertise
            </div>
            <input
              value={expertise}
              onChange={(event) => setExpertise(event.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-white/70 px-3 py-2 text-sm font-normal text-slate-600 outline-none dark:border-slate-800 dark:bg-white/5 dark:text-slate-300"
            />
          </label>

          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white">
              <BadgeCheck size={18} className="text-emerald-400" />
              Skills you mentor on
            </div>
            <TagInput tags={skills} setTags={setSkills} />
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white">
              <BookOpen size={18} className="text-aura" />
              Years of experience
            </div>
            <Slider label="Years in industry" value={experience} setValue={setExperience} min={3} max={20} />
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white">
              <Clock size={18} className="text-lucid" />
              Availability
            </div>
            <AvailabilityPicker value={availability} setValue={setAvailability} />
          </div>

          <label className="space-y-2 text-sm font-semibold text-slate-900 dark:text-white">
            Short bio
            <textarea
              value={bio}
              onChange={(event) => setBio(event.target.value)}
              rows={4}
              className="w-full rounded-2xl border border-slate-200 bg-white/70 px-3 py-2 text-sm font-normal text-slate-600 outline-none dark:border-slate-800 dark:bg-white/5 dark:text-slate-300"
            />
          </label>

          <Button size="lg" className="w-full" onClick={handleComplete}>
            Complete mentor profile
          </Button>
        </Card>
      </div>
    </section>
  );
};

export default OnboardingMentor;

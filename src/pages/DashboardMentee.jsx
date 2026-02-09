import { useEffect, useState } from 'react';
import { Compass, FileCheck2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import MentorCard from '../components/ui/MentorCard';
import LoadingSkeletons from '../components/ui/LoadingSkeletons';
import StatusPill from '../components/ui/StatusPill';
import Button from '../components/ui/Button';
import { useToast } from '../hooks/useToast';
import { useAuth } from '../hooks/useAuth';
import { createMentorRequest, fetchMenteeRequests, fetchMentors, seedMentorsIfEmpty } from '../services/firestore';

const DashboardMentee = () => {
  const [loading, setLoading] = useState(true);
  const [mentorList, setMentorList] = useState([]);
  const [requests, setRequests] = useState([]);
  const { pushToast } = useToast();
  const { user } = useAuth();

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const mentorsData = await fetchMentors();
      setMentorList(mentorsData);
      if (user) {
        const requestData = await fetchMenteeRequests(user.uid);
        setRequests(requestData);
      }
      setLoading(false);
    };

    loadData();
  }, [user]);

  const handleRequest = async (mentor) => {
    if (!user) {
      pushToast({ title: 'Please log in first', description: 'Sign in to request mentorship.', type: 'warning' });
      return;
    }
    await createMentorRequest({
      mentorId: mentor.id,
      menteeId: user.uid,
      title: 'Career clarity session',
    });
    const requestData = await fetchMenteeRequests(user.uid);
    setRequests(requestData);
    pushToast({
      title: 'Mentorship request sent',
      description: `We notified ${mentor.name}. You will hear back within 72 hours.`,
      type: 'success',
    });
  };

  const handleSeed = async () => {
    const seeded = await seedMentorsIfEmpty();
    if (seeded) {
      const mentorsData = await fetchMentors();
      setMentorList(mentorsData);
      pushToast({ title: 'Sample mentors added', description: 'You can now explore recommendations.', type: 'success' });
    } else {
      pushToast({ title: 'Mentors already exist', description: 'Your database already has mentors.', type: 'info' });
    }
  };

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="Mentee dashboard"
          title="Welcome back, Aria"
          subtitle="Your clarity score is rising. Here are mentors who align with your next career move."
        />

        <div className="grid gap-6 md:grid-cols-[1.4fr_1fr]">
          <Card className="space-y-4">
            <div className="flex items-center gap-3">
              <Compass size={18} className="text-lucid" />
              <p className="text-sm font-semibold text-slate-900 dark:text-white">Current goal</p>
            </div>
            <p className="text-xl font-semibold text-slate-900 dark:text-white">
              Transition into AI Product Management with a focus on ethical systems.
            </p>
            <div className="rounded-2xl border border-slate-200 bg-white/70 px-4 py-3 text-xs text-slate-600 dark:border-slate-800 dark:bg-white/5 dark:text-slate-300">
              AI insight: Your strongest alignment is with mentors who have shipped human-centered AI products.
            </div>
          </Card>

          <Card className="space-y-4">
            <div className="flex items-center gap-3">
              <FileCheck2 size={18} className="text-emerald-400" />
              <p className="text-sm font-semibold text-slate-900 dark:text-white">Request status</p>
            </div>
            <div className="space-y-3">
              {requests.length === 0 && (
                <div className="rounded-2xl border border-dashed border-slate-200 bg-white/70 px-4 py-6 text-center text-xs text-slate-500 dark:border-slate-800 dark:bg-white/5 dark:text-slate-300">
                  No requests yet. Once you request a mentor, status will appear here.
                </div>
              )}
              {requests.map((request) => (
                <div key={request.id} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white/70 px-4 py-3 text-xs dark:border-slate-800 dark:bg-white/5">
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">{request.title}</p>
                    <p className="text-slate-500 dark:text-slate-400">Mentor ID: {request.mentorId}</p>
                  </div>
                  <StatusPill status={request.status} />
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="AI recommendations"
              title="Mentors ranked by confidence"
              subtitle="Each match includes transparent reasoning so you can decide faster."
            />
            <Button as={Link} to="/ai-explain" variant="secondary" size="sm">
              How AI matches you
            </Button>
          </div>
          {loading ? (
            <LoadingSkeletons count={3} />
          ) : mentorList.length === 0 ? (
            <div className="glass flex flex-col items-center gap-4 rounded-3xl border border-white/30 p-8 text-center">
              <p className="text-sm text-slate-600 dark:text-slate-300">
                No mentors found in Firestore. Add sample mentors to explore the experience.
              </p>
              <Button onClick={handleSeed} size="sm">Seed sample mentors</Button>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-3">
              {mentorList.map((mentor) => (
                <MentorCard key={mentor.id} mentor={mentor} onRequest={handleRequest} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DashboardMentee;

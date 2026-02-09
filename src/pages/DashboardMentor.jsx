import { useEffect, useState } from 'react';
import { Check, X } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import StatusPill from '../components/ui/StatusPill';
import Button from '../components/ui/Button';
import { useToast } from '../hooks/useToast';
import { useAuth } from '../hooks/useAuth';
import { fetchMentorRequests, updateRequestStatus } from '../services/firestore';

const DashboardMentor = () => {
  const [requests, setRequests] = useState([]);
  const { pushToast } = useToast();
  const { user } = useAuth();

  useEffect(() => {
    const loadRequests = async () => {
      if (!user) return;
      const data = await fetchMentorRequests(user.uid);
      setRequests(data);
    };
    loadRequests();
  }, [user]);

  const handleDecision = (id, decision) => {
    setRequests((prev) =>
      prev.map((req) => (req.id === id ? { ...req, status: decision } : req))
    );
    updateRequestStatus(id, decision);
    pushToast({
      title: decision === 'Accepted' ? 'Request accepted' : 'Request declined',
      description: decision === 'Accepted' ? 'We notified the mentee and reserved your slot.' : 'The mentee has been informed politely.',
      type: decision === 'Accepted' ? 'success' : 'warning',
    });
  };

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="Mentor dashboard"
          title="Your mentorship queue"
          subtitle="Review incoming requests with clear context so you can protect your time."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {requests.length === 0 && (
            <Card className="space-y-4">
              <p className="text-sm text-slate-600 dark:text-slate-300">
                No requests yet. Once a mentee requests you, it will appear here.
              </p>
            </Card>
          )}
          {requests.map((request) => (
            <Card key={request.id} className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-lg font-semibold text-slate-900 dark:text-white">{request.title}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Mentee ID: {request.menteeId}</p>
                </div>
                <StatusPill status={request.status} />
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white/70 px-4 py-3 text-xs text-slate-600 dark:border-slate-800 dark:bg-white/5 dark:text-slate-300">
                AI insight: This mentee matches your strengths in goal-setting and structured feedback.
              </div>
              <div className="flex gap-3">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => handleDecision(request.id, 'Accepted')}
                >
                  <Check size={16} />
                  Accept
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleDecision(request.id, 'Rejected')}
                >
                  <X size={16} />
                  Decline
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DashboardMentor;

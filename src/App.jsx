import { AnimatePresence, motion } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/ui/ScrollToTop';
import { firebaseReady } from './firebase';
import Home from './pages/Home';
import Auth from './pages/Auth';
import OnboardingMentee from './pages/OnboardingMentee';
import OnboardingMentor from './pages/OnboardingMentor';
import DashboardMentee from './pages/DashboardMentee';
import DashboardMentor from './pages/DashboardMentor';
import AIExplanation from './pages/AIExplanation';
import FutureScope from './pages/FutureScope';
import NotFound from './pages/NotFound';

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -16 },
};

const PageShell = ({ children }) => (
  <motion.main
    className="min-h-screen"
    variants={pageVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={{ duration: 0.4, ease: 'easeOut' }}
  >
    {children}
  </motion.main>
);

const App = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-ink dark:text-slate-100">
      <ScrollToTop />
      {!firebaseReady && (
        <div className="bg-amber-500/10 px-6 py-3 text-xs text-amber-700 dark:text-amber-200">
          Firebase is not configured. Add your keys to `.env` to enable Auth + Firestore. The UI is running in demo mode.
        </div>
      )}
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageShell><Home /></PageShell>} />
          <Route path="/auth" element={<PageShell><Auth /></PageShell>} />
          <Route path="/onboarding/mentee" element={<PageShell><OnboardingMentee /></PageShell>} />
          <Route path="/onboarding/mentor" element={<PageShell><OnboardingMentor /></PageShell>} />
          <Route path="/dashboard/mentee" element={<PageShell><DashboardMentee /></PageShell>} />
          <Route path="/dashboard/mentor" element={<PageShell><DashboardMentor /></PageShell>} />
          <Route path="/ai-explain" element={<PageShell><AIExplanation /></PageShell>} />
          <Route path="/future" element={<PageShell><FutureScope /></PageShell>} />
          <Route path="*" element={<PageShell><NotFound /></PageShell>} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default App;

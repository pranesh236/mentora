import { Link } from 'react-router-dom';
import HeroSection from '../components/sections/HeroSection';
import SocialProof from '../components/sections/SocialProof';
import FeatureCards from '../components/sections/FeatureCards';
import HowItWorks from '../components/sections/HowItWorks';
import ComparisonSection from '../components/sections/ComparisonSection';
import Testimonials from '../components/sections/Testimonials';
import Button from '../components/ui/Button';
import SectionHeading from '../components/ui/SectionHeading';

const Home = () => (
  <div>
    <HeroSection />
    <SocialProof />
    <FeatureCards />
    <HowItWorks />
    <ComparisonSection />
    <Testimonials />

    <section className="py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
        <div className="glass rounded-3xl border border-white/30 p-10 text-center">
          <SectionHeading
            align="center"
            eyebrow="Ready to begin"
            title="Clarity first, mentorship second"
            subtitle="Your career deserves a calm, intelligent decision flow. MentorAI is built to guide you through every step with transparency."
          />
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button as={Link} to="/onboarding/mentee" size="lg">
              Find My Career Mentor
            </Button>
            <Button as={Link} to="/onboarding/mentor" variant="secondary" size="lg">
              Become a Mentor
            </Button>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Home;

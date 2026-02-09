import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LogOut, Menu, X } from 'lucide-react';
import Button from '../ui/Button';
import ThemeToggle from '../ui/ThemeToggle';
import { useAuth } from '../../hooks/useAuth';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Onboarding', to: '/onboarding/mentee' },
  { label: 'Mentee Dashboard', to: '/dashboard/mentee' },
  { label: 'Mentor Dashboard', to: '/dashboard/mentor' },
  { label: 'AI Explainability', to: '/ai-explain' },
  { label: 'Future Scope', to: '/future' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user, profile, logout } = useAuth();

  return (
    <motion.header
      className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-ink/80"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2 text-lg font-semibold text-slate-900 dark:text-white">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-lucid to-aura text-white">AI</span>
          MentorAI
        </Link>
        <div className="hidden items-center gap-5 text-sm text-slate-600 dark:text-slate-300 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `transition hover:text-slate-900 dark:hover:text-white ${isActive ? 'text-slate-900 dark:text-white' : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          {user ? (
            <>
              <div className="hidden items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-xs font-medium text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 md:flex">
                {profile?.name ?? user.email}
              </div>
              <Button variant="ghost" size="sm" className="hidden md:inline-flex" onClick={logout}>
                <LogOut size={16} />
                Sign out
              </Button>
            </>
          ) : (
            <>
              <Button as={Link} to="/auth" variant="secondary" size="sm" className="hidden md:inline-flex">
                Become a Mentor
              </Button>
              <Button as={Link} to="/auth" size="sm" className="hidden md:inline-flex">
                Find My Mentor
              </Button>
            </>
          )}
          <button
            className="rounded-full border border-slate-200 bg-white/70 p-2 text-slate-600 hover:border-slate-300 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 lg:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>
      {mobileOpen && (
        <div className="border-t border-slate-200/70 bg-white/90 px-6 py-4 text-sm text-slate-600 dark:border-white/10 dark:bg-ink/90 dark:text-slate-300 lg:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `transition hover:text-slate-900 dark:hover:text-white ${isActive ? 'text-slate-900 dark:text-white' : ''}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            {!user && (
              <div className="flex flex-col gap-3 pt-2">
                <Button as={Link} to="/auth" variant="secondary" size="sm">
                  Become a Mentor
                </Button>
                <Button as={Link} to="/auth" size="sm">
                  Find My Mentor
                </Button>
              </div>
            )}
            {user && (
              <Button variant="ghost" size="sm" onClick={logout}>
                <LogOut size={16} />
                Sign out
              </Button>
            )}
          </div>
        </div>
      )}
    </motion.header>
  );
};

export default Navbar;

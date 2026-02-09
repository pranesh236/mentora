import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

const NotFound = () => (
  <section className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 py-20 text-center">
    <h1 className="text-4xl font-semibold text-slate-900 dark:text-white">Page not found</h1>
    <p className="text-sm text-slate-500 dark:text-slate-400">
      The page you are looking for does not exist yet. Let’s guide you back to clarity.
    </p>
    <Button as={Link} to="/">
      Return home
    </Button>
  </section>
);

export default NotFound;

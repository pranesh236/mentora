import { cn } from '../../utils/classNames';

const baseStyles = 'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lucid focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-ink disabled:opacity-60 disabled:cursor-not-allowed';

const variants = {
  primary: 'bg-gradient-to-r from-lucid via-pulse to-aura text-white shadow-glow hover:shadow-soft hover:-translate-y-0.5',
  secondary: 'bg-white/80 text-slate-900 border border-slate-200 hover:border-slate-300 hover:-translate-y-0.5 dark:bg-white/10 dark:text-slate-100 dark:border-white/10',
  ghost: 'text-slate-700 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800',
  outline: 'border border-slate-300 text-slate-900 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3 text-base',
};

const Button = ({ as: Component = 'button', variant = 'primary', size = 'md', className, ...props }) => {
  const buttonProps = Component === 'button' ? { type: 'button' } : {};
  return <Component className={cn(baseStyles, variants[variant], sizes[size], className)} {...buttonProps} {...props} />;
};

export default Button;

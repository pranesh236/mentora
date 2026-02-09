import { cn } from '../../utils/classNames';

const Card = ({ className, ...props }) => (
  <div className={cn('glass rounded-3xl border border-white/30 p-6', className)} {...props} />
);

export default Card;

const SectionHeading = ({ eyebrow, title, subtitle, align = 'left' }) => {
  const alignment = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <div className={`flex flex-col gap-3 ${alignment}`}>
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-semibold text-slate-900 dark:text-white md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-base text-slate-600 dark:text-slate-300">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;

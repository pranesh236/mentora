const LoadingSkeletons = ({ count = 3 }) => (
  <div className="grid gap-4 md:grid-cols-3">
    {Array.from({ length: count }).map((_, index) => (
      <div
        key={`skeleton-${index}`}
        className="glass h-44 rounded-2xl border border-white/30 p-4"
      >
        <div className="shimmer animate-shimmer h-4 w-24 rounded-full" />
        <div className="mt-4 space-y-2">
          <div className="shimmer animate-shimmer h-3 w-full rounded-full" />
          <div className="shimmer animate-shimmer h-3 w-5/6 rounded-full" />
          <div className="shimmer animate-shimmer h-3 w-3/4 rounded-full" />
        </div>
      </div>
    ))}
  </div>
);

export default LoadingSkeletons;

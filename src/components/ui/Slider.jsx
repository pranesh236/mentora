const Slider = ({ label, value, setValue, min = 0, max = 10, step = 1 }) => (
  <div className="space-y-3">
    <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-300">
      <span>{label}</span>
      <span className="font-semibold text-slate-900 dark:text-white">{value}</span>
    </div>
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(event) => setValue(Number(event.target.value))}
      className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-lucid dark:bg-slate-800"
    />
  </div>
);

export default Slider;

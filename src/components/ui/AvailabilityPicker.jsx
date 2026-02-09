const availabilityOptions = [
  'Weekday mornings',
  'Weekday evenings',
  'Weekend focus',
  'Flexible schedule',
];

const AvailabilityPicker = ({ value, setValue }) => (
  <div className="grid gap-3 md:grid-cols-2">
    {availabilityOptions.map((option) => (
      <button
        key={option}
        type="button"
        onClick={() => setValue(option)}
        className={`rounded-2xl border px-4 py-3 text-left text-sm font-medium transition ${
          value === option
            ? 'border-lucid bg-lucid/10 text-slate-900 dark:text-white'
            : 'border-slate-200 bg-white/70 text-slate-600 hover:border-slate-300 dark:border-slate-800 dark:bg-white/5 dark:text-slate-300'
        }`}
      >
        {option}
      </button>
    ))}
  </div>
);

export default AvailabilityPicker;

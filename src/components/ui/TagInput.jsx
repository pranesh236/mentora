import { X } from 'lucide-react';

const TagInput = ({ tags, setTags, placeholder = 'Add a skill and press Enter' }) => {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && event.target.value.trim()) {
      event.preventDefault();
      const value = event.target.value.trim();
      if (!tags.includes(value)) {
        setTags([...tags, value]);
      }
      event.target.value = '';
    }
  };

  const removeTag = (value) => {
    setTags(tags.filter((tag) => tag !== value));
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white/70 px-3 py-2 text-sm shadow-sm dark:border-slate-800 dark:bg-white/5">
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-200"
          >
            {tag}
            <button onClick={() => removeTag(tag)} className="opacity-70 hover:opacity-100">
              <X size={12} />
            </button>
          </span>
        ))}
        <input
          type="text"
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="flex-1 bg-transparent py-1 text-sm text-slate-700 outline-none dark:text-slate-200"
        />
      </div>
    </div>
  );
};

export default TagInput;

import { useState } from "react";
import { moodOptions } from "@/lib/moodData";

interface ReflectionInputProps {
  onSubmit: (moodLabel: string) => void;
  isLoading: boolean;
}

const ReflectionInput = ({ onSubmit, isLoading }: ReflectionInputProps) => {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSubmit = () => {
    if (selected && !isLoading) {
      onSubmit(selected);
    }
  };

  return (
    <section className="w-full max-w-xl mx-auto px-4 animate-fade-in-delay opacity-0">
      <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-5">
        <p className="text-xs uppercase tracking-widest text-muted-foreground text-center">
          How are you feeling?
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
          {moodOptions.map((mood) => (
            <button
              key={mood.label}
              onClick={() => setSelected(mood.label)}
              className={`flex items-center gap-2 px-3.5 py-3 rounded-xl text-sm transition-all duration-300
                ${
                  selected === mood.label
                    ? "bg-primary/15 ring-1 ring-primary/40 text-foreground scale-[1.02] shadow-sm"
                    : "bg-accent/40 text-foreground/70 hover:bg-accent/70 hover:scale-[1.01]"
                }`}
            >
              <span className="text-lg">{mood.emoji}</span>
              <span className="text-left leading-tight">{mood.label}</span>
            </button>
          ))}
        </div>
        <div className="flex justify-end">
          <button
            onClick={handleSubmit}
            disabled={!selected || isLoading}
            className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium
              transition-all duration-300 ease-out
              hover:shadow-lg hover:shadow-primary/20 hover:scale-[1.02]
              active:scale-[0.98] active:shadow-primary/30
              disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none"
          >
            Generate Insight
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReflectionInput;

import type { ReflectionEntry } from "@/lib/types";

interface ReflectionTimelineProps {
  entries: ReflectionEntry[];
}

const moodDotClass: Record<string, string> = {
  Positive: "mood-dot-positive",
  Neutral: "mood-dot-neutral",
  Negative: "mood-dot-negative",
};

const ReflectionTimeline = ({ entries }: ReflectionTimelineProps) => {
  if (entries.length === 0) return null;

  return (
    <section className="w-full max-w-xl mx-auto px-4 mt-12 animate-fade-in-delay-2 opacity-0">
      <h2 className="text-xs uppercase tracking-widest text-muted-foreground mb-4 text-center">
        Recent Reflections
      </h2>
      <div className="space-y-3">
        {entries.map((entry, i) => (
          <div
            key={i}
            className="flex items-center gap-3 text-sm text-muted-foreground px-4 py-2.5 rounded-xl bg-card/50"
          >
            <span className={`w-2 h-2 rounded-full flex-shrink-0 ${moodDotClass[entry.mood] || "mood-dot-neutral"}`} />
            <span className="truncate flex-1">{entry.text}</span>
            <span className="text-xs text-muted-foreground/60 flex-shrink-0">{entry.time}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReflectionTimeline;

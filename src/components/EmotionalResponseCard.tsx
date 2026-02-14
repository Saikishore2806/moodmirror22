import type { AnalysisResult } from "@/lib/types";

interface EmotionalResponseCardProps {
  result: AnalysisResult;
}

const moodConfig = {
  Positive: {
    dotClass: "mood-dot-positive",
    label: "Positive",
  },
  Neutral: {
    dotClass: "mood-dot-neutral",
    label: "Neutral",
  },
  Negative: {
    dotClass: "mood-dot-negative",
    label: "Negative",
  },
} as const;

const EmotionalResponseCard = ({ result }: EmotionalResponseCardProps) => {
  const mood = result.mood as keyof typeof moodConfig;
  const config = moodConfig[mood] || moodConfig.Neutral;

  return (
    <section className="w-full max-w-xl mx-auto px-4 mt-8 animate-scale-in opacity-0" style={{ animationFillMode: "forwards" }}>
      <div className="glass-card-elevated rounded-2xl p-6 sm:p-8 space-y-6">
        {/* Mood */}
        <div className="flex items-center gap-3">
          <span className={`w-3 h-3 rounded-full ${config.dotClass}`} />
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-0.5">Mood Detected</p>
            <p className="text-xl font-semibold text-foreground">{config.label}</p>
          </div>
        </div>

        {/* Insight */}
        <div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1.5">Emotional Insight</p>
          <p className="text-foreground/80 leading-relaxed">{result.insight}</p>
        </div>

        {/* Action */}
        <div className="bg-accent/50 rounded-xl p-4">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1.5">Suggested Action</p>
          <p className="text-foreground/80 text-sm leading-relaxed">{result.action}</p>
        </div>

        {/* Affirmation */}
        {result.affirmation && (
          <div className="text-center pt-2">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1.5">Affirmation</p>
            <p className="text-quote text-lg italic text-muted-foreground">"{result.affirmation}"</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default EmotionalResponseCard;

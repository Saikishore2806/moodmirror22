import { useState } from "react";
import { Wind, Heart, Sparkles } from "lucide-react";

const MicroTools = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [breathCount, setBreathCount] = useState(0);
  const [gratitude, setGratitude] = useState("");
  const [gratitudeSaved, setGratitudeSaved] = useState(false);
  const [encouragementSent, setEncouragementSent] = useState(false);

  const startBreathing = () => {
    setActiveModal("breathe");
    setBreathCount(0);
    let count = 0;
    const interval = setInterval(() => {
      count++;
      setBreathCount(count);
      if (count >= 4) {
        clearInterval(interval);
      }
    }, 7500);
  };

  const tools = [
    {
      icon: Wind,
      label: "30s Breathing",
      onClick: startBreathing,
    },
    {
      icon: Heart,
      label: "One Gratitude",
      onClick: () => {
        setGratitude("");
        setGratitudeSaved(false);
        setActiveModal("gratitude");
      },
    },
    {
      icon: Sparkles,
      label: "Encouragement",
      onClick: () => {
        setEncouragementSent(false);
        setActiveModal("encourage");
      },
    },
  ];

  const encouragements = [
    "You are doing better than you think.",
    "It's okay to take things one step at a time.",
    "You are worthy of rest and kindness.",
    "This moment will pass. You are strong.",
  ];

  return (
    <>
      <section className="w-full max-w-xl mx-auto px-4 mt-12 animate-fade-in-delay-3 opacity-0">
        <div className="flex justify-center gap-3">
          {tools.map((tool) => (
            <button
              key={tool.label}
              onClick={tool.onClick}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full glass-card text-sm text-foreground/80
                transition-all duration-300 hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
            >
              <tool.icon className="w-4 h-4" />
              <span className="hidden sm:inline">{tool.label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Modals */}
      {activeModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/10 backdrop-blur-sm animate-fade-in"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="glass-card-elevated rounded-2xl p-8 max-w-sm w-full mx-4 animate-scale-in text-center"
            onClick={(e) => e.stopPropagation()}
          >
            {activeModal === "breathe" && (
              <div className="space-y-6">
                <div
                  className="w-20 h-20 rounded-full bg-primary/20 mx-auto flex items-center justify-center"
                  style={{ animation: "breathe 7.5s ease-in-out infinite" }}
                >
                  <Wind className="w-8 h-8 text-primary" />
                </div>
                <p className="text-foreground font-medium">
                  {breathCount >= 4 ? "Well done. Feel the calm." : "Breathe in… hold… breathe out…"}
                </p>
                <p className="text-xs text-muted-foreground">Cycle {Math.min(breathCount + 1, 4)} of 4</p>
                <button
                  onClick={() => setActiveModal(null)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Close
                </button>
              </div>
            )}

            {activeModal === "gratitude" && (
              <div className="space-y-4">
                <Heart className="w-8 h-8 text-mood-positive mx-auto" />
                <p className="text-foreground font-medium">One thing you're grateful for</p>
                {gratitudeSaved ? (
                  <p className="text-sm text-muted-foreground">Saved to your heart. 💚</p>
                ) : (
                  <>
                    <input
                      type="text"
                      value={gratitude}
                      onChange={(e) => setGratitude(e.target.value)}
                      placeholder="I'm grateful for…"
                      className="w-full bg-accent/50 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none"
                    />
                    <button
                      onClick={() => setGratitudeSaved(true)}
                      disabled={!gratitude.trim()}
                      className="px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium
                        disabled:opacity-40 transition-all hover:shadow-md"
                    >
                      Save
                    </button>
                  </>
                )}
                <button
                  onClick={() => setActiveModal(null)}
                  className="block mx-auto text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Close
                </button>
              </div>
            )}

            {activeModal === "encourage" && (
              <div className="space-y-4">
                <Sparkles className="w-8 h-8 text-mood-neutral mx-auto" />
                {encouragementSent ? (
                  <>
                    <p className="text-foreground font-medium">
                      {encouragements[Math.floor(Math.random() * encouragements.length)]}
                    </p>
                    <p className="text-xs text-muted-foreground">Sent with love. ✨</p>
                  </>
                ) : (
                  <>
                    <p className="text-foreground font-medium">Send yourself some encouragement?</p>
                    <button
                      onClick={() => setEncouragementSent(true)}
                      className="px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium
                        transition-all hover:shadow-md"
                    >
                      Yes, I need this
                    </button>
                  </>
                )}
                <button
                  onClick={() => setActiveModal(null)}
                  className="block mx-auto text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default MicroTools;

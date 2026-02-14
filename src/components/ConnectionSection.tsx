import { useState } from "react";
import { Users, MessageCircleHeart } from "lucide-react";

const ConnectionSection = () => {
  const [shared, setShared] = useState(false);
  const [writing, setWriting] = useState(false);
  const [message, setMessage] = useState("");
  const [messageSaved, setMessageSaved] = useState(false);

  return (
    <section className="w-full max-w-xl mx-auto px-4 mt-6 animate-fade-in space-y-4">
      {/* Empathy prompt */}
      <p className="text-center text-sm text-muted-foreground/70 italic text-quote">
        "If someone you care about felt this way, what would you say to them?"
      </p>

      {/* Educational line */}
      <p className="text-center text-xs text-muted-foreground/50">
        Emotional awareness improves how we communicate and connect with others.
      </p>

      {/* Strengthen Connection */}
      <div className="glass-card rounded-2xl p-5 space-y-3">
        <p className="text-xs uppercase tracking-widest text-muted-foreground text-center mb-2">
          Strengthen Connection
        </p>
        <div className="flex flex-col sm:flex-row gap-2 justify-center">
          <button
            onClick={() => setShared(true)}
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-accent/60 text-sm text-foreground/80
              transition-all duration-300 hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
          >
            <Users className="w-4 h-4" />
            {shared ? "Shared with care ✨" : "Share this reflection with someone you trust"}
          </button>
          <button
            onClick={() => { setWriting(true); setMessageSaved(false); setMessage(""); }}
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-accent/60 text-sm text-foreground/80
              transition-all duration-300 hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
          >
            <MessageCircleHeart className="w-4 h-4" />
            Write a supportive message for a friend
          </button>
        </div>

        {writing && (
          <div className="pt-2 space-y-2 animate-fade-in">
            {messageSaved ? (
              <p className="text-sm text-center text-muted-foreground">Words of kindness, saved. 💚</p>
            ) : (
              <>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="What would you say to a friend who needs support?"
                  className="w-full bg-accent/50 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none resize-none h-20"
                />
                <button
                  onClick={() => setMessageSaved(true)}
                  disabled={!message.trim()}
                  className="block mx-auto px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium
                    disabled:opacity-40 transition-all hover:shadow-md"
                >
                  Save
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default ConnectionSection;

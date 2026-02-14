import { useState } from "react";

interface ReflectionInputProps {
  onSubmit: (text: string) => void;
  isLoading: boolean;
}

const ReflectionInput = ({ onSubmit, isLoading }: ReflectionInputProps) => {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (text.trim() && !isLoading) {
      onSubmit(text.trim());
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && e.metaKey) {
      handleSubmit();
    }
  };

  return (
    <section className="w-full max-w-xl mx-auto px-4 animate-fade-in-delay opacity-0">
      <div className="glass-card rounded-2xl p-6 sm:p-8">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Take a moment… what's on your mind?"
          rows={4}
          className="w-full bg-transparent border-none outline-none resize-none text-foreground text-lg placeholder:text-muted-foreground/50 leading-relaxed"
        />
        <div className="flex justify-end mt-4">
          <button
            onClick={handleSubmit}
            disabled={!text.trim() || isLoading}
            className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium
              transition-all duration-300 ease-out
              hover:shadow-lg hover:shadow-primary/20 hover:scale-[1.02]
              active:scale-[0.98] active:shadow-primary/30
              disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none"
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                Reflecting…
              </span>
            ) : (
              "Reflect"
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReflectionInput;

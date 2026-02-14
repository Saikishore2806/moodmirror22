const LoadingState = () => {
  return (
    <div className="w-full max-w-xl mx-auto px-4 mt-8 text-center animate-fade-in">
      <div className="glass-card rounded-2xl p-8 flex flex-col items-center gap-4">
        <div className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="w-2 h-2 rounded-full bg-primary animate-pulse-soft"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
          ))}
        </div>
        <p className="text-muted-foreground text-sm">Analyzing your emotional tone…</p>
      </div>
    </div>
  );
};

export default LoadingState;

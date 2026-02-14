const HeroSection = () => {
  return (
    <section className="text-center pt-16 pb-8 px-4 animate-fade-in">
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-foreground mb-4">
        MoodMirror
      </h1>
      <p className="text-xl sm:text-2xl font-light text-muted-foreground mb-3 animate-fade-in-delay opacity-0">
        Pause. Reflect. Reconnect.
      </p>
      <p className="text-sm text-muted-foreground/70 max-w-md mx-auto animate-fade-in-delay-2 opacity-0">
        A private space for emotional clarity powered by AI.
      </p>
    </section>
  );
};

export default HeroSection;

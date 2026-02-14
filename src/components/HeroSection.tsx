const HeroSection = () => {
  return (
    <section className="text-center pt-16 pb-8 px-4 animate-fade-in">
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-foreground mb-4">
        MoodMirror
      </h1>
      <p className="text-xl sm:text-2xl font-light text-muted-foreground mb-3 animate-fade-in-delay opacity-0">
        Technology that listens. Connection that heals.
      </p>
      <p className="text-sm text-muted-foreground/70 max-w-md mx-auto animate-fade-in-delay-2 opacity-0">
        Understanding your emotions helps you connect better with others.
      </p>
    </section>
  );
};

export default HeroSection;

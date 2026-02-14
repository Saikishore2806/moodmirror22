const quotes = [
  "Your feelings are valid.",
  "You don't have to carry everything at once.",
  "Be gentle with yourself—you're doing your best.",
  "Feelings are visitors. Let them come and go.",
  "Stillness is not doing nothing. It is being present.",
  "You are allowed to take up space.",
  "Healing is not linear, and that's okay.",
  "Breathe. You are exactly where you need to be.",
];

const QuoteOfTheDay = () => {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <section className="w-full max-w-xl mx-auto px-4 mt-14 mb-6 text-center animate-fade-in-delay-3 opacity-0">
      <p className="text-quote text-lg italic text-muted-foreground/70">"{quote}"</p>
    </section>
  );
};

export default QuoteOfTheDay;

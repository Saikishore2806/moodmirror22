import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import ReflectionInput from "@/components/ReflectionInput";
import EmotionalResponseCard from "@/components/EmotionalResponseCard";
import LoadingState from "@/components/LoadingState";
import ReflectionTimeline from "@/components/ReflectionTimeline";
import MicroTools from "@/components/MicroTools";
import ConnectionSection from "@/components/ConnectionSection";
import QuoteOfTheDay from "@/components/QuoteOfTheDay";
import PrivacyFooter from "@/components/PrivacyFooter";
import type { AnalysisResult, ReflectionEntry } from "@/lib/types";

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [timeline, setTimeline] = useState<ReflectionEntry[]>([]);

  const handleReflect = async (text: string) => {
    setIsLoading(true);
    setResult(null);

    try {
      const response = await fetch("https://moodmirror-hx45.onrender.com/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });

      if (!response.ok) throw new Error("Analysis failed");

      const data = await response.json();

      const analysisResult: AnalysisResult = {
        mood: data.mood || data.sentiment || "Neutral",
        insight: data.insight || data.analysis || data.message || "Your emotions are a reflection of your inner world.",
        affirmation: data.affirmation || data.quote || undefined,
      };

      setResult(analysisResult);

      const now = new Date();
      const timeStr = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

      setTimeline((prev) => [
        { text: text.slice(0, 60), mood: analysisResult.mood, time: timeStr },
        ...prev.slice(0, 4),
      ]);
    } catch {
      setResult({
        mood: "Neutral",
        insight: "We couldn't reach the reflection engine right now. Take a deep breath and try again in a moment.",
        affirmation: "You are enough, just as you are.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="gradient-bg min-h-screen flex flex-col">
      <main className="flex-1 flex flex-col items-center pb-4">
        <HeroSection />
        <ReflectionInput onSubmit={handleReflect} isLoading={isLoading} />
        {isLoading && <LoadingState />}
        {result && !isLoading && (
          <>
            <EmotionalResponseCard result={result} />
            <ConnectionSection />
          </>
        )}
        <ReflectionTimeline entries={timeline} />
        <MicroTools />
        <QuoteOfTheDay />
      </main>
      <PrivacyFooter />
    </div>
  );
};

export default Index;

import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import ReflectionInput from "@/components/ReflectionInput";
import EmotionalResponseCard from "@/components/EmotionalResponseCard";
import ReflectionTimeline from "@/components/ReflectionTimeline";
import MicroTools from "@/components/MicroTools";
import ConnectionSection from "@/components/ConnectionSection";
import QuoteOfTheDay from "@/components/QuoteOfTheDay";
import PrivacyFooter from "@/components/PrivacyFooter";
import { moodOptions } from "@/lib/moodData";
import type { AnalysisResult, ReflectionEntry } from "@/lib/types";

const Index = () => {
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [timeline, setTimeline] = useState<ReflectionEntry[]>([]);

  const handleReflect = (moodLabel: string) => {
    const mood = moodOptions.find((m) => m.label === moodLabel);
    if (!mood) return;

    setResult(mood.result);

    const now = new Date();
    const timeStr = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    setTimeline((prev) => [
      { text: moodLabel, mood: mood.result.mood, time: timeStr },
      ...prev.slice(0, 4),
    ]);
  };

  return (
    <div className="gradient-bg min-h-screen flex flex-col">
      <main className="flex-1 flex flex-col items-center pb-4">
        <HeroSection />
        <ReflectionInput onSubmit={handleReflect} isLoading={false} />
        {result && (
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

import type { AnalysisResult } from "./types";

export interface MoodOption {
  label: string;
  emoji: string;
  result: AnalysisResult;
}

export const moodOptions: MoodOption[] = [
  {
    label: "Academic Stress",
    emoji: "📚",
    result: {
      mood: "Negative",
      insight: "You may be experiencing pressure from deadlines or expectations.",
      action: "Break your work into smaller steps and take a 2-minute breathing pause.",
      affirmation: "You are capable of handling this challenge.",
    },
  },
  {
    label: "Career Confusion",
    emoji: "🧭",
    result: {
      mood: "Neutral",
      insight: "Uncertainty about the future can feel overwhelming.",
      action: "Write down three strengths you already have.",
      affirmation: "Clarity grows with exploration and patience.",
    },
  },
  {
    label: "Feeling Lonely",
    emoji: "🌧️",
    result: {
      mood: "Negative",
      insight: "Loneliness often reflects a need for meaningful connection.",
      action: "Reach out to one trusted person today.",
      affirmation: "You are valued more than you realize.",
    },
  },
  {
    label: "Feeling Overwhelmed",
    emoji: "😮‍💨",
    result: {
      mood: "Negative",
      insight: "You might be juggling too many responsibilities.",
      action: "Pause and focus on completing one small task.",
      affirmation: "It's okay to slow down.",
    },
  },
  {
    label: "Feeling Grateful",
    emoji: "🙏",
    result: {
      mood: "Positive",
      insight: "Gratitude strengthens emotional resilience.",
      action: "Share your appreciation with someone today.",
      affirmation: "Your positivity creates meaningful impact.",
    },
  },
  {
    label: "General Reflection",
    emoji: "🪞",
    result: {
      mood: "Neutral",
      insight: "Taking time to reflect increases emotional awareness.",
      action: "Spend a quiet moment acknowledging your emotions.",
      affirmation: "Your feelings are valid.",
    },
  },
];

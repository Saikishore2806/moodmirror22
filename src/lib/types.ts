export interface AnalysisResult {
  mood: string;
  insight: string;
  affirmation?: string;
}

export interface ReflectionEntry {
  text: string;
  mood: string;
  time: string;
}

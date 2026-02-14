export interface AnalysisResult {
  mood: string;
  insight: string;
  action: string;
  affirmation?: string;
}

export interface ReflectionEntry {
  text: string;
  mood: string;
  time: string;
}

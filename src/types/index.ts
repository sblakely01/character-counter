
export interface TextInputProps {
  onTextChange: (text: string) => void;
  placeholder?: string;
  initialValue?: string;
}

export interface TextStats {
  characterCount: number;
  wordCount: number;
  readingTime: number; 
}
 
export interface StatsDisplayProps {
  stats: TextStats;
  showReadingTime?: boolean;
}

export interface CharacterCounterProps {
  showReadingTime?: boolean;
  text: string;
  minWords?: number;
  maxWords?: number;
  targetReadingTime?: number; 
}
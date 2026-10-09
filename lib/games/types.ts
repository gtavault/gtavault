export type GameType =
  | "knowledge"
  | "location"
  | "character"
  | "timeline"
  | "higher-lower"
  | "quote";

export interface GameQuestion {
  id: string;
  type: GameType;
  question: string;
  options: string[];
  answer: string;
  difficulty: "easy" | "medium" | "hard";
}
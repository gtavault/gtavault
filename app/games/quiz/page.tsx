import type { Metadata } from "next";
import Quiz from "@/components/games/Quiz";
import { questions } from "@/lib/games/questions";

export const metadata: Metadata = {
  title: "GTA V Knowledge Quiz",
  description:
    "Test your GTA V knowledge with the GTA Vault quiz. Answer questions about Los Santos, characters, missions, vehicles and the world of Grand Theft Auto V.",
  alternates: {
    canonical: "/games/quiz",
  },
};

export default function QuizPage() {
  return (
    <main>
      <Quiz
        questions={questions}
        title="GTA V Knowledge Challenge"
        description="How well do you know Los Santos?"
      />
    </main>
  );
}
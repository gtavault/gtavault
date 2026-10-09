"use client";

import Link from "next/link";
import { useState } from "react";
import type { GameQuestion } from "@/lib/games/types";

interface QuizProps {
  questions: GameQuestion[];
  title?: string;
  description?: string;
}

type Difficulty = "easy" | "medium" | "hard";
type Accent = "emerald" | "yellow" | "pink";
function getDifficultyLabel(difficulty: Difficulty) {
  if (difficulty === "easy") return "Easy";
  if (difficulty === "medium") return "Intermediate";
  return "Expert";
}
function shuffle<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}

function prepareQuestions(
  questions: GameQuestion[],
  difficulty: Difficulty
): GameQuestion[] {
  return shuffle(
    questions
      .filter((question) => question.difficulty === difficulty)
      .map((question) => ({
        ...question,
        options: shuffle(question.options),
      }))
  );
}

export default function Quiz({
  questions,
 title = "Vault Quiz",
description = "Test your GTA knowledge.",
}: QuizProps) {
  const [difficulty, setDifficulty] = useState<Difficulty | null>(null);

  const [shuffledQuestions, setShuffledQuestions] = useState<GameQuestion[]>(
    []
  );

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const activeQuestions = shuffledQuestions;
  const question = activeQuestions[currentQuestion];

  /* ========================================================= */
  /* DIFFICULTY SELECTION */
  /* ========================================================= */

  if (!difficulty) {
    const difficulties = [
  {
    value: "easy" as const,
    number: "01",
    label: "Easy",
    description: "A relaxed introduction to the GTA universe.",
    accent: "emerald" as Accent,
  },
  {
    value: "medium" as const,
    number: "02",
    label: "Intermediate",
    description: "For players who know their way around Los Santos.",
    accent: "yellow" as Accent,
  },
  {
    value: "hard" as const,
    number: "03",
    label: "Expert",
    description: "Deep GTA knowledge required.",
    accent: "pink" as Accent,
  },
];
   

    return (
  <section className="relative overflow-hidden border-y border-white/10 bg-zinc-950 shadow-[0_30px_100px_rgba(0,0,0,0.45)]">

    {/* Ambient background */}

    <div className="pointer-events-none absolute inset-0">
      <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-pink-500/[0.055] blur-[130px]" />
      <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-cyan-400/[0.04] blur-[130px]" />

      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
    </div>

    <div className="relative">

      {/* ===================================================== */}
      {/* HEADER */}
      {/* ===================================================== */}

      <div className="border-b border-white/10 px-5 py-12 sm:px-8 sm:py-16 lg:px-14 lg:py-20">
<Link
  href="/games"
  className="inline-flex items-center gap-2 text-sm font-medium text-pink-500 transition-colors hover:text-pink-400"
>
  <span className="text-lg leading-none">←</span>
  <span>Back to Games</span>
</Link>
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

          <div className="max-w-4xl">

 <div className="flex items-center justify-between gap-4">





</div>

            <h2 className="mt-5 text-5xl font-black tracking-[-0.065em] text-white sm:text-6xl lg:text-8xl">
              Vault Quiz
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-500 sm:text-base">
              Test your GTA knowledge across three levels of difficulty.
              Choose your challenge and see where you rank.
            </p>

          </div>

          <div className="hidden shrink-0 lg:block">

            <p className="text-right text-[10px] font-black uppercase tracking-[0.35em] text-zinc-700">
              Challenge
            </p>

            <p className="mt-2 text-right text-sm font-bold text-zinc-400">
              03 Levels
            </p>

          </div>

        </div>

      </div>

      {/* ===================================================== */}
      {/* MOBILE INTRO */}
      {/* ===================================================== */}

      <div className="border-b border-white/10 px-5 py-5 sm:px-8 md:hidden">

        <div className="flex items-center justify-between">

          <p className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-600">
            Select difficulty
          </p>

          <p className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-700">
            20 questions each
          </p>

        </div>

      </div>

      {/* ===================================================== */}
      {/* DIFFICULTY GRID */}
      {/* ===================================================== */}

      <div className="px-5 py-5 sm:px-8 sm:py-8 lg:px-14 lg:py-10">

        <div className="grid gap-3 md:grid-cols-3 md:gap-4">

          {difficulties.map((level) => {

            const accentClasses = {
              emerald: {
                border:
                  "hover:border-emerald-400/50",
                glow:
                  "group-hover:bg-emerald-400/[0.06]",
                number:
                  "group-hover:text-emerald-400",
                arrow:
                  "group-hover:text-emerald-300",
                line:
                  "group-hover:bg-emerald-400",
              },
              yellow: {
                border:
                  "hover:border-yellow-400/50",
                glow:
                  "group-hover:bg-yellow-400/[0.06]",
                number:
                  "group-hover:text-yellow-400",
                arrow:
                  "group-hover:text-yellow-300",
                line:
                  "group-hover:bg-yellow-400",
              },
              pink: {
                border:
                  "hover:border-pink-400/50",
                glow:
                  "group-hover:bg-pink-400/[0.06]",
                number:
                  "group-hover:text-pink-400",
                arrow:
                  "group-hover:text-pink-300",
                line:
                  "group-hover:bg-pink-400",
              },
            }[level.accent];

            return (
              <button
                key={level.value}
                onClick={() => {
                  const selectedQuestions = prepareQuestions(
                    questions,
                    level.value
                  );

                  setDifficulty(level.value);
                  setShuffledQuestions(selectedQuestions);
                  setCurrentQuestion(0);
                  setSelectedAnswer(null);
                  setScore(0);
                  setFinished(false);
                }}
                className={`group relative min-h-[340px] overflow-hidden border border-white/10 bg-white/[0.02] p-6 text-left transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.035] sm:p-7 lg:min-h-[390px] ${accentClasses.border}`}
              >

                {/* Card glow */}

                <div
                  className={`pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full blur-[100px] transition-all duration-700 ${accentClasses.glow}`}
                />

                {/* Large background number */}

                <span
                  className={`pointer-events-none absolute -bottom-10 -right-4 select-none text-[180px] font-black leading-none tracking-[-0.12em] text-white/[0.025] transition-colors duration-500 ${accentClasses.number}`}
                >
                  {level.number}
                </span>

                <div className="relative flex h-full flex-col">

                  {/* Top */}

                  <div className="flex items-start justify-between">

                    <div>

                      <span
                        className={`text-[10px] font-black tracking-[0.4em] text-zinc-700 transition-colors duration-300 ${accentClasses.number}`}
                      >
                        {level.number}
                      </span>

                      <p className="mt-5 text-[9px] font-black uppercase tracking-[0.35em] text-zinc-600">
                        Difficulty
                      </p>

                    </div>

                    <span
                      className={`flex h-10 w-10 items-center justify-center border border-white/10 text-lg font-light text-zinc-700 transition-all duration-300 group-hover:translate-x-1 ${accentClasses.arrow}`}
                    >
                      →
                    </span>

                  </div>

                  {/* Main */}

                  <div className="mt-auto">

                    <h3 className="text-4xl font-black tracking-[-0.045em] text-white sm:text-5xl">
                      {level.label}
                    </h3>

                    <p className="mt-4 max-w-sm text-sm leading-6 text-zinc-500">
                      {level.description}
                    </p>

                  </div>

                  {/* Bottom */}

                  <div className="mt-8 border-t border-white/10 pt-5">

                    <div className="flex items-center justify-between">

                      <div>

                        <p className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-600">
                          Challenge length
                        </p>

                        <p className="mt-2 text-sm font-bold text-zinc-300">
                          20 Questions
                        </p>

                      </div>

                      <div className="text-right">

                        <p className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-600">
                          Status
                        </p>

                        <p
                          className={`mt-2 text-[9px] font-black uppercase tracking-[0.25em] text-zinc-700 transition-colors duration-300 ${accentClasses.arrow}`}
                        >
                          Ready
                        </p>

                      </div>

                    </div>

                    {/* Accent line */}

                    <div className="mt-5 h-px w-full bg-white/5">

                      <div
                        className={`h-full w-0 transition-all duration-500 group-hover:w-1/3 ${accentClasses.line}`}
                      />

                    </div>

                  </div>

                </div>

              </button>
            );
          })}

        </div>

      </div>

      {/* ===================================================== */}
      {/* FOOTER STRIP */}
      {/* ===================================================== */}

      <div className="border-t border-white/10 px-5 py-5 sm:px-8 lg:px-14">

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-[9px] font-black uppercase tracking-[0.35em] text-zinc-700">
            Choose your level. Answer 20 questions. Find your rank.
          </p>

          <p className="text-[9px] font-black uppercase tracking-[0.35em] text-zinc-800">
            GTA VAULT
          </p>

        </div>

      </div>

    </div>

  </section>
  );
  }

  /* ========================================================= */
  /* SAFETY CHECK */
  /* ========================================================= */

    if (finished) {
    const percentage =
      activeQuestions.length > 0
        ? Math.round((score / activeQuestions.length) * 100)
        : 0;

    let result;

    if (score === activeQuestions.length) {
      result = {
        label: "Los Santos Legend",
        message: "You didn't miss a single question.",
      };
    } else if (percentage >= 90) {
      result = {
        label: "Vinewood Veteran",
        message: "You know Los Santos better than most.",
      };
    } else if (percentage >= 75) {
      result = {
        label: "GTA Insider",
        message: "You clearly know your way around Los Santos.",
      };
    } else if (percentage >= 60) {
      result = {
        label: "Street Regular",
        message: "You've spent enough time in Los Santos.",
      };
    } else if (percentage >= 40) {
      result = {
        label: "Rookie",
        message: "You've got some GTA knowledge, but there's more to learn.",
      };
    } else {
      result = {
        label: "Just Visiting",
        message: "Los Santos still has plenty to teach you.",
      };
    }

    return (
      <section className="relative min-h-[calc(100vh-80px)] overflow-hidden border-y border-white/10 bg-zinc-950">

        {/* ===================================================== */}
        {/* BACKGROUND */}
        {/* ===================================================== */}

        <div className="pointer-events-none absolute inset-0">

          <div className="absolute -left-56 -top-56 h-[650px] w-[650px] rounded-full bg-pink-500/[0.055] blur-[150px]" />

          <div className="absolute -bottom-56 -right-56 h-[650px] w-[650px] rounded-full bg-cyan-400/[0.035] blur-[150px]" />

          <div
            className="absolute inset-0 opacity-[0.018]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
            }}
          />

        </div>

        <div className="relative">

          {/* ===================================================== */}
          {/* HEADER */}
          {/* ===================================================== */}

          <div className="border-b border-white/10 px-5 py-7 sm:px-8 lg:px-14">

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-4">

                <span className="h-px w-8 bg-pink-500" />

                <div>

                  <p className="text-[10px] font-black uppercase tracking-[0.45em] text-pink-400">
                    GTA VAULT / GAMES
                  </p>

                  <p className="mt-2 text-sm font-bold text-white">
                    Challenge Complete
                  </p>

                </div>

              </div>

              <div className="text-right">

                <p className="text-[8px] font-black uppercase tracking-[0.35em] text-zinc-700">
                  Difficulty
                </p>

                <p className="mt-1 text-xs font-black uppercase tracking-[0.2em] text-zinc-400">
                  {getDifficultyLabel(difficulty)}
                </p>

              </div>

            </div>

          </div>

          {/* ===================================================== */}
          {/* RESULTS */}
          {/* ===================================================== */}

          <div className="grid lg:grid-cols-[minmax(0,1fr)_320px]">

            {/* MAIN */}

            <div className="px-5 py-12 sm:px-8 sm:py-16 lg:px-14 lg:py-20">

              <div className="max-w-5xl">

                {/* Result label */}

                <div className="flex items-center gap-4">

                  <p className="text-[9px] font-black uppercase tracking-[0.4em] text-zinc-600">
                    Final result
                  </p>

                  <span className="h-px w-12 bg-white/10" />

                  <p className="text-[9px] font-black uppercase tracking-[0.3em] text-pink-400">
                    {getDifficultyLabel(difficulty)}
                  </p>

                </div>

                {/* Rank */}

                <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[0.92] tracking-[-0.065em] text-white sm:text-7xl lg:text-8xl">
                  {result.label}
                </h1>

                <p className="mt-6 max-w-xl text-sm leading-7 text-zinc-500 sm:text-base">
                  {result.message}
                </p>

                {/* SCORE */}

                <div className="mt-12 border-y border-white/10 py-10 sm:mt-16 sm:py-12">

                  <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">

                    <div>

                      <p className="text-[9px] font-black uppercase tracking-[0.4em] text-zinc-600">
                        Final score
                      </p>

                      <div className="mt-3 flex items-baseline">

                        <p className="text-7xl font-black leading-none tracking-[-0.07em] text-white sm:text-8xl">
                          {String(score).padStart(2, "0")}
                        </p>

                        <p className="ml-3 text-xl font-black text-zinc-700 sm:text-2xl">
                          / {String(activeQuestions.length).padStart(2, "0")}
                        </p>

                      </div>

                    </div>

                    <div className="sm:text-right">

                      <p className="text-[9px] font-black uppercase tracking-[0.4em] text-zinc-600">
                        Accuracy
                      </p>

                      <p className="mt-2 text-4xl font-black tracking-[-0.04em] text-pink-400 sm:text-5xl">
                        {percentage}%
                      </p>

                    </div>

                  </div>

                  {/* Completion */}

                  <div className="mt-10">

                    <div className="flex items-center justify-between">

                      <p className="text-[8px] font-black uppercase tracking-[0.35em] text-zinc-700">
                        Challenge completion
                      </p>

                      <p className="text-[8px] font-black uppercase tracking-[0.3em] text-zinc-600">
                        {score} / {activeQuestions.length} correct
                      </p>

                    </div>

                    <div className="mt-3 h-1 bg-white/[0.07]">

                      <div
                        className="h-full bg-gradient-to-r from-pink-500 to-cyan-400 transition-all duration-700"
                        style={{ width: `${percentage}%` }}
                      />

                    </div>

                  </div>

                </div>

                {/* STATS */}

                <div className="grid grid-cols-2 border-b border-white/10 sm:grid-cols-3">

                  <div className="border-r border-white/10 py-7 pr-5">

                    <p className="text-[8px] font-black uppercase tracking-[0.35em] text-zinc-700">
                      Correct
                    </p>

                    <p className="mt-2 text-2xl font-black text-white">
                      {score}
                    </p>

                  </div>

                  <div className="py-7 pl-5 sm:border-r sm:border-white/10 sm:px-5">

                    <p className="text-[8px] font-black uppercase tracking-[0.35em] text-zinc-700">
                      Questions
                    </p>

                    <p className="mt-2 text-2xl font-black text-white">
                      {activeQuestions.length}
                    </p>

                  </div>

                  <div className="col-span-2 border-t border-white/10 py-7 sm:col-span-1 sm:border-t-0 sm:pl-5">

                    <p className="text-[8px] font-black uppercase tracking-[0.35em] text-zinc-700">
                      Difficulty
                    </p>

                    <p className="mt-2 text-sm font-black uppercase tracking-[0.18em] text-pink-400">
                      {getDifficultyLabel(difficulty)}
                    </p>

                  </div>

                </div>

                {/* BUTTONS */}

                {/* BUTTONS */}

<div className="mt-10 grid gap-3 sm:grid-cols-3">

  {/* PLAY AGAIN */}

  <button
    onClick={() => {
      if (!difficulty) return;

      const restartedQuestions = prepareQuestions(
        questions,
        difficulty
      );

      setShuffledQuestions(restartedQuestions);
      setCurrentQuestion(0);
      setSelectedAnswer(null);
      setScore(0);
      setFinished(false);
    }}
    className="flex items-center justify-between bg-white px-5 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-black transition hover:-translate-y-1 hover:bg-zinc-200"
  >
    <span>Play Again</span>

    <span className="text-lg">
      →
    </span>
  </button>

  {/* CHANGE DIFFICULTY */}

  <button
    onClick={() => {
      setDifficulty(null);
      setShuffledQuestions([]);
      setCurrentQuestion(0);
      setSelectedAnswer(null);
      setScore(0);
      setFinished(false);
    }}
    className="flex items-center justify-between border border-white/10 bg-white/[0.02] px-5 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-300 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]"
  >
    <span>Change Difficulty</span>

    <span className="text-lg text-zinc-600">
      ↗
    </span>
  </button>

  {/* HOME */}

  <button
    onClick={() => {
      window.location.href = "/";
    }}
    className="flex items-center justify-between border border-white/10 bg-white/[0.02] px-5 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
  >
    <span>Home</span>

    <span className="text-lg text-zinc-700">
      ←
    </span>
  </button>

</div>

              </div>

            </div>

            {/* =================================================== */}
            {/* SIDEBAR */}
            {/* =================================================== */}

            <aside className="border-t border-white/10 bg-white/[0.012] px-5 py-8 sm:px-8 lg:border-l lg:border-t-0 lg:px-10 lg:py-12">

              <div className="sticky top-8">

                <p className="text-[9px] font-black uppercase tracking-[0.4em] text-zinc-700">
                  Challenge summary
                </p>

                <div className="mt-10">

                  <p className="text-[8px] font-black uppercase tracking-[0.35em] text-zinc-700">
                    Challenge
                  </p>

                  <p className="mt-3 text-2xl font-black tracking-[-0.03em] text-white">
                    Vault Quiz
                  </p>

                  <p className="mt-1 text-sm text-zinc-600">
                    GTA V Knowledge
                  </p>

                </div>

                <div className="mt-10 border-t border-white/10 pt-8">

                  <p className="text-[8px] font-black uppercase tracking-[0.35em] text-zinc-700">
                    Rank
                  </p>

                  <p className="mt-3 text-xl font-black leading-tight text-white">
                    {result.label}
                  </p>

                </div>

                <div className="mt-10 border-t border-white/10 pt-8">

                  <p className="text-[8px] font-black uppercase tracking-[0.35em] text-zinc-700">
                    Performance
                  </p>

                  <div className="mt-5 space-y-5">

                    <div>

                      <div className="flex items-center justify-between">

                        <span className="text-[8px] font-black uppercase tracking-[0.3em] text-zinc-600">
                          Accuracy
                        </span>

                        <span className="text-[9px] font-black text-zinc-400">
                          {percentage}%
                        </span>

                      </div>

                      <div className="mt-2 h-1 bg-white/[0.07]">

                        <div
                          className="h-full bg-pink-500"
                          style={{ width: `${percentage}%` }}
                        />

                      </div>

                    </div>

                    <div>

                      <div className="flex items-center justify-between">

                        <span className="text-[8px] font-black uppercase tracking-[0.3em] text-zinc-600">
                          Correct answers
                        </span>

                        <span className="text-[9px] font-black text-zinc-400">
                          {score}/{activeQuestions.length}
                        </span>

                      </div>

                      <div className="mt-2 h-1 bg-white/[0.07]">

                        <div
                          className="h-full bg-cyan-400"
                          style={{ width: `${percentage}%` }}
                        />

                      </div>

                    </div>

                  </div>

                </div>

                <div className="mt-10 border-t border-white/10 pt-8">

                  <p className="text-[8px] font-black uppercase tracking-[0.35em] text-zinc-700">
                    Status
                  </p>

                  <div className="mt-3 flex items-center gap-3">

                    <span className="h-1.5 w-1.5 bg-emerald-400" />

                    <p className="text-[9px] font-black uppercase tracking-[0.3em] text-emerald-400">
                      Challenge complete
                    </p>

                  </div>

                </div>

                <div className="mt-10 border-t border-white/10 pt-8">

                  <p className="text-[8px] font-black uppercase leading-5 tracking-[0.3em] text-zinc-800">
                    Results recorded.
                    <br />
                    Every question counted.
                  </p>

                </div>

              </div>

            </aside>

          </div>

        </div>

      </section>
    );
  }
  /* ========================================================= */
  /* QUESTION SAFETY CHECK */
  /* ========================================================= */

  if (!question || activeQuestions.length === 0) {
    return null;
  }

  const progress =
    ((currentQuestion + 1) / activeQuestions.length) * 100;

  const answered = selectedAnswer !== null;
  const isCorrect = selectedAnswer === question.answer;

  /* ========================================================= */
  /* ANSWER */
  /* ========================================================= */

  function handleAnswer(answer: string) {
    if (answered) return;

    setSelectedAnswer(answer);

    if (answer === question.answer) {
      setScore((current) => current + 1);
    }
  }

  /* ========================================================= */
  /* NEXT */
  /* ========================================================= */

  function handleNext() {
    if (currentQuestion === activeQuestions.length - 1) {
      setFinished(true);
      return;
    }

    setCurrentQuestion((current) => current + 1);
    setSelectedAnswer(null);
  }

  /* ========================================================= */
  /* MOBILE */
  /* ========================================================= */

    /* ========================================================= */
  /* QUESTION SCREEN */
  /* ========================================================= */

  return (
    <>
      {/* ===================================================== */}
      {/* MOBILE */}
      {/* ===================================================== */}

      <section className="relative min-h-[calc(100vh-80px)] overflow-hidden border-y border-white/10 bg-zinc-950 md:hidden">

        {/* Background atmosphere */}

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-pink-500/[0.07] blur-[110px]" />
          <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-cyan-400/[0.035] blur-[110px]" />

          <div
            className="absolute inset-0 opacity-[0.018]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
            }}
          />
        </div>

        <div className="relative">

          {/* Top bar */}

          <div className="border-b border-white/10 px-5 py-5">

            <div className="flex items-center justify-between">

             <div className="flex items-center gap-3">

  <span className="h-px w-5 bg-pink-500" />

  <p className="text-[9px] font-black uppercase tracking-[0.4em] text-pink-400">
    Vault Quiz
  </p>

</div>

<Link
  href="/games"
  className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-600 transition-colors hover:text-pink-400"
>
  Quit Quiz
</Link>

              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-600">
                {getDifficultyLabel(difficulty)}
              </p>

            </div>

          </div>

          {/* Progress */}

          <div className="border-b border-white/10 px-5 py-4">

            <div className="flex items-center justify-between">

              <p className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-600">
                Question
              </p>

              <p className="text-[10px] font-black text-zinc-500">
                <span className="text-white">
                  {String(currentQuestion + 1).padStart(2, "0")}
                </span>
                <span className="mx-1 text-zinc-800">/</span>
                {String(activeQuestions.length).padStart(2, "0")}
              </p>

            </div>

            <div className="mt-3 h-[2px] overflow-hidden bg-white/[0.07]">

              <div
                className="h-full bg-gradient-to-r from-pink-500 to-cyan-400 transition-all duration-500"
                style={{ width: `${progress}%` }}
              />

            </div>

          </div>

          {/* Question */}

          <div className="px-5 pb-7 pt-9">

            <div className="flex items-center gap-3">

              <p className="text-[9px] font-black uppercase tracking-[0.35em] text-zinc-700">
                Question {String(currentQuestion + 1).padStart(2, "0")}
              </p>

              <span className="h-px flex-1 bg-white/[0.06]" />

            </div>

            <h2 className="mt-5 text-[31px] font-black leading-[1.02] tracking-[-0.045em] text-white">
              {question.question}
            </h2>

          </div>

          {/* Answers */}

          <div className="px-5">

            <p className="mb-3 text-[8px] font-black uppercase tracking-[0.35em] text-zinc-700">
              Select your answer
            </p>

            <div className="space-y-2.5">

              {question.options.map((option, index) => {

                const isSelected = selectedAnswer === option;
                const isAnswer = option === question.answer;

                let classes =
                  "group relative flex min-h-[68px] w-full items-center gap-4 overflow-hidden border p-4 text-left transition-all duration-300";

                if (!answered) {
                  classes +=
                    " border-white/10 bg-white/[0.025] active:scale-[0.985]";
                }

                if (answered && isAnswer) {
                  classes +=
                    " border-emerald-500/40 bg-emerald-500/[0.08]";
                }

                if (answered && isSelected && !isAnswer) {
                  classes +=
                    " border-red-500/40 bg-red-500/[0.08]";
                }

                return (
                  <button
                    key={option}
                    onClick={() => handleAnswer(option)}
                    disabled={answered}
                    className={classes}
                  >

                    <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-white/10 bg-black/30 text-[10px] font-black text-zinc-500">
                      {String.fromCharCode(65 + index)}
                    </span>

                    <span className="flex-1 text-sm font-semibold leading-5 text-zinc-200">
                      {option}
                    </span>

                    {!answered && (
                      <span className="text-sm font-light text-zinc-800 transition-transform duration-300 group-active:translate-x-1">
                        →
                      </span>
                    )}

                    {answered && isAnswer && (
                      <span className="text-base font-black text-emerald-400">
                        ✓
                      </span>
                    )}

                    {answered && isSelected && !isAnswer && (
                      <span className="text-base font-black text-red-400">
                        ×
                      </span>
                    )}

                  </button>
                );
              })}

            </div>

          </div>

          {/* Feedback */}

          {answered && (
            <div className="mx-5 mt-5 border border-white/10 bg-white/[0.025] p-4">

              <div className="flex items-center gap-3">

                <span
                  className={`h-1.5 w-1.5 ${
                    isCorrect
                      ? "bg-emerald-400"
                      : "bg-red-400"
                  }`}
                />

                <p
                  className={`text-[9px] font-black uppercase tracking-[0.35em] ${
                    isCorrect
                      ? "text-emerald-400"
                      : "text-red-400"
                  }`}
                >
                  {isCorrect ? "Correct answer" : "Incorrect answer"}
                </p>

              </div>

              {!isCorrect && (
                <p className="mt-3 text-sm leading-6 text-zinc-500">
                  Correct answer:
                  <span className="ml-1 font-bold text-white">
                    {question.answer}
                  </span>
                </p>
              )}

            </div>
          )}

          {/* Next */}

          {answered && (
            <div className="px-5 pb-8 pt-4">

              <button
                onClick={handleNext}
                className="flex w-full items-center justify-between bg-white px-5 py-4 text-[10px] font-black uppercase tracking-[0.25em] text-black transition active:scale-[0.985]"
              >

                <span>
                  {currentQuestion === activeQuestions.length - 1
                    ? "See Results"
                    : "Next Question"}
                </span>

                <span className="text-lg">
                  →
                </span>

              </button>

            </div>
          )}

{/* Bottom status */}

{!answered && (
  <div className="px-5 pb-8 pt-9">

    <div className="border-t border-white/10 pt-7">

      <div className="flex items-stretch justify-between">

        {/* SCORE */}

        <div className="flex-1">

          <p className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-600">
            Current score
          </p>

          <div className="mt-2 flex items-baseline gap-2">

            <p className="text-3xl font-black tracking-[-0.04em] text-white">
              {String(score).padStart(2, "0")}
            </p>

            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-700">
              correct
            </span>

          </div>

        </div>

        {/* DIVIDER */}

        <div className="mx-5 w-px bg-white/10" />

        {/* CHALLENGE */}

        <div className="flex-1 text-right">

          <p className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-600">
            Challenge
          </p>

          <p className="mt-3 text-sm font-black uppercase tracking-[0.18em] text-zinc-300">
            GTA V
          </p>

          <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.25em] text-pink-400">
            {getDifficultyLabel(difficulty)}
          </p>

        </div>

      </div>

      {/* Bottom message */}

      <div className="mt-7 flex items-center gap-3">

        <span className="h-px flex-1 bg-white/[0.06]" />

        <p className="shrink-0 text-[8px] font-black uppercase tracking-[0.35em] text-zinc-700">
          Every question counts
        </p>

        <span className="h-px flex-1 bg-white/[0.06]" />

      </div>

    </div>

  </div>
)}

        </div>
      </section>


      {/* ===================================================== */}
      {/* DESKTOP */}
      {/* ===================================================== */}

      <section className="relative hidden min-h-[calc(100vh-80px)] overflow-hidden border-y border-white/10 bg-zinc-950 md:block">

        {/* Background atmosphere */}

        <div className="pointer-events-none absolute inset-0">

          <div className="absolute -left-56 -top-56 h-[650px] w-[650px] rounded-full bg-pink-500/[0.055] blur-[150px]" />

          <div className="absolute -bottom-56 -right-56 h-[650px] w-[650px] rounded-full bg-cyan-400/[0.035] blur-[150px]" />

          <div
            className="absolute inset-0 opacity-[0.018]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
            }}
          />

        </div>

        <div className="relative">

          {/* Header */}

          <div className="border-b border-white/10 px-10 py-7 lg:px-14">

       <div className="relative flex items-center justify-between">

  {/* LEFT — QUIZ TITLE */}

  <div className="flex items-center gap-4">

    <span className="h-px w-8 bg-pink-500" />

    <p className="text-[10px] font-black uppercase tracking-[0.45em] text-pink-400">
      Vault Quiz
    </p>

  </div>

  {/* CENTRE — QUIT */}

  <Link
  href="/games"
  className="absolute left-[45%] -translate-x-1/2 text-[9px] font-black uppercase tracking-[0.3em] text-zinc-600 transition-colors hover:text-pink-400"
>
  Quit Quiz
</Link>

              <div className="flex items-center gap-10">

                <div className="text-right">

                  <p className="text-[8px] font-black uppercase tracking-[0.35em] text-zinc-700">
                    Difficulty
                  </p>

                  <p className="mt-1 text-xs font-black uppercase tracking-[0.2em] text-zinc-400">
                    {getDifficultyLabel(difficulty)}
                  </p>

                </div>

                <div className="h-8 w-px bg-white/10" />

                <div className="text-right">

                  <p className="text-[8px] font-black uppercase tracking-[0.35em] text-zinc-700">
                    Question
                  </p>

                  <p className="mt-1 text-xs font-black text-zinc-400">
                    <span className="text-white">
                      {String(currentQuestion + 1).padStart(2, "0")}
                    </span>
                    <span className="mx-1 text-zinc-800">/</span>
                    {String(activeQuestions.length).padStart(2, "0")}
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Main layout */}

          <div className="grid min-h-[calc(100vh-150px)] grid-cols-[minmax(0,1fr)_300px]">

            {/* Main question area */}

            <div className="px-10 py-12 lg:px-14 lg:py-16">

              {/* Progress */}

              <div className="flex items-center gap-5">

                <span className="text-[9px] font-black uppercase tracking-[0.35em] text-zinc-700">
                  Progress
                </span>

                <div className="h-[2px] flex-1 bg-white/[0.07]">

                  <div
                    className="h-full bg-gradient-to-r from-pink-500 to-cyan-400 transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />

                </div>

                <span className="text-[9px] font-black text-zinc-600">
                  {Math.round(progress)}%
                </span>

              </div>

              {/* Question */}

              <div className="mt-20 max-w-5xl">

                <div className="flex items-center gap-4">

                  <span className="text-[10px] font-black uppercase tracking-[0.35em] text-pink-400">
                    Question {String(currentQuestion + 1).padStart(2, "0")}
                  </span>

                  <span className="h-px w-12 bg-white/10" />

                  <span className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-700">
                    {getDifficultyLabel(question.difficulty)}
                  </span>

                </div>

                <h2 className="mt-7 text-5xl font-black leading-[0.98] tracking-[-0.055em] text-white lg:text-6xl xl:text-7xl">
                  {question.question}
                </h2>

              </div>

              {/* Answers */}

              <div className="mt-14 max-w-5xl">

                <p className="mb-4 text-[9px] font-black uppercase tracking-[0.35em] text-zinc-700">
                  Select your answer
                </p>

                <div className="grid grid-cols-2 gap-3">

                  {question.options.map((option, index) => {

                    const isSelected = selectedAnswer === option;
                    const isAnswer = option === question.answer;

                    let classes =
                      "group relative flex min-h-[112px] items-center gap-5 overflow-hidden border p-5 text-left transition-all duration-300";

                    if (!answered) {
                      classes +=
                        " border-white/10 bg-white/[0.02] hover:-translate-y-1 hover:border-pink-500/30 hover:bg-pink-500/[0.025]";
                    }

                    if (answered && isAnswer) {
                      classes +=
                        " border-emerald-500/40 bg-emerald-500/[0.08]";
                    }

                    if (answered && isSelected && !isAnswer) {
                      classes +=
                        " border-red-500/40 bg-red-500/[0.08]";
                    }

                    return (
                      <button
                        key={option}
                        onClick={() => handleAnswer(option)}
                        disabled={answered}
                        className={classes}
                      >

                        <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-white/10 bg-black/30 text-sm font-black text-zinc-600 transition-colors duration-300 group-hover:text-pink-300">
                          {String.fromCharCode(65 + index)}
                        </span>

                        <span className="flex-1 text-sm font-semibold leading-6 text-zinc-200 lg:text-base">
                          {option}
                        </span>

                        {!answered && (
                          <span className="text-lg font-light text-zinc-800 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-zinc-500">
                            →
                          </span>
                        )}

                        {answered && isAnswer && (
                          <span className="text-lg font-black text-emerald-400">
                            ✓
                          </span>
                        )}

                        {answered && isSelected && !isAnswer && (
                          <span className="text-lg font-black text-red-400">
                            ×
                          </span>
                        )}

                      </button>
                    );
                  })}

                </div>

              </div>

              {/* Feedback */}

              {answered && (
                <div className="mt-5 max-w-5xl border border-white/10 bg-white/[0.02] p-5">

                  <div className="flex items-center gap-3">

                    <span
                      className={`h-1.5 w-1.5 ${
                        isCorrect
                          ? "bg-emerald-400"
                          : "bg-red-400"
                      }`}
                    />

                    <p
                      className={`text-[10px] font-black uppercase tracking-[0.35em] ${
                        isCorrect
                          ? "text-emerald-400"
                          : "text-red-400"
                      }`}
                    >
                      {isCorrect
                        ? "Correct answer"
                        : "Incorrect answer"}
                    </p>

                  </div>

                  {!isCorrect && (
                    <p className="mt-3 text-sm text-zinc-500">
                      The correct answer was{" "}
                      <span className="font-bold text-white">
                        {question.answer}
                      </span>
                      .
                    </p>
                  )}

                </div>
              )}

              {/* Next */}

              {answered && (
                <button
                  onClick={handleNext}
                  className="mt-5 flex w-full max-w-5xl items-center justify-between bg-white px-6 py-4 text-[10px] font-black uppercase tracking-[0.25em] text-black transition hover:-translate-y-1 hover:bg-zinc-200"
                >

                  <span>
                    {currentQuestion === activeQuestions.length - 1
                      ? "See Results"
                      : "Next Question"}
                  </span>

                  <span className="text-lg">
                    →
                  </span>

                </button>
              )}

            </div>

            {/* Sidebar */}

            <aside className="border-l border-white/10 bg-white/[0.012] px-8 py-10">

              <div className="sticky top-8">

                {/* Score */}

                <div>

                  <p className="text-[9px] font-black uppercase tracking-[0.35em] text-zinc-700">
                    Current Score
                  </p>

                  <p className="mt-3 text-6xl font-black tracking-[-0.05em] text-white">
                    {String(score).padStart(2, "0")}
                  </p>

                  <p className="mt-1 text-[9px] font-black uppercase tracking-[0.3em] text-zinc-700">
                    Correct answers
                  </p>

                </div>

                {/* Progress */}

                <div className="mt-12 border-t border-white/10 pt-8">

                  <div className="flex items-center justify-between">

                    <p className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-700">
                      Completion
                    </p>

                    <p className="text-[9px] font-black text-zinc-500">
                      {Math.round(progress)}%
                    </p>

                  </div>

                  <div className="mt-4 h-1 bg-white/[0.07]">

                    <div
                      className="h-full bg-gradient-to-r from-pink-500 to-cyan-400 transition-all duration-500"
                      style={{ width: `${progress}%` }}
                    />

                  </div>

                </div>

                {/* Challenge */}

                <div className="mt-12 border-t border-white/10 pt-8">

                  <p className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-700">
                    Challenge
                  </p>

                  <p className="mt-3 text-xl font-black text-white">
                    Vault Quiz
                  </p>

                  <p className="mt-1 text-sm text-zinc-600">
                    GTA V Knowledge
                  </p>

                </div>

                {/* Difficulty */}

                <div className="mt-12 border-t border-white/10 pt-8">

                  <p className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-700">
                    Difficulty
                  </p>

                  <p className="mt-3 text-sm font-black uppercase tracking-[0.2em] text-pink-400">
                    {getDifficultyLabel(difficulty)}
                  </p>

                </div>

                {/* Footer */}

                <div className="mt-12 border-t border-white/10 pt-8">

                  <p className="text-[8px] font-black uppercase leading-5 tracking-[0.3em] text-zinc-800">
                    Answer carefully.
                    <br />
                    Every question counts.
                  </p>

                </div>

              </div>

            </aside>

          </div>

        </div>

      </section>
       </>
  );
}
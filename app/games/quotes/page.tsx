"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { gtaQuotes, GTAQuote } from "@/lib/quotes";

const TOTAL_ROUNDS = 5;
const POINTS_PER_ROUND = 1000;
const MAX_SCORE = TOTAL_ROUNDS * POINTS_PER_ROUND;

type AnswerState = "correct" | "incorrect" | null;

function shuffle<T>(items: T[]) {
  const shuffled = [...items];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[randomIndex]] = [
      shuffled[randomIndex],
      shuffled[i],
    ];
  }

  return shuffled;
}

function getGameQuotes(): GTAQuote[] {
  return shuffle(gtaQuotes).slice(0, TOTAL_ROUNDS);
}

function getAnswers(
  quote: GTAQuote,
  allQuotes: GTAQuote[]
): string[] {
  const incorrectAnswers = shuffle(
    allQuotes
      .filter((item) => item.character !== quote.character)
      .map((item) => item.character)
      .filter(
        (character, index, array) =>
          array.indexOf(character) === index
      )
  ).slice(0, 3);

  return shuffle([
    quote.character,
    ...incorrectAnswers,
  ]);
}

export default function QuoteChallengePage() {
  const [quotes, setQuotes] = useState<GTAQuote[]>([]);
  const [answers, setAnswers] = useState<string[]>([]);
  const [round, setRound] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(
    null
  );
  const [answerState, setAnswerState] = useState<AnswerState>(null);
  const [gameOver, setGameOver] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const currentQuote = quotes[round];

  const correctAnswer = currentQuote?.character ?? null;

  const roundLabel = useMemo(() => {
    return `Round ${String(round + 1).padStart(2, "0")} / ${String(
      TOTAL_ROUNDS
    ).padStart(2, "0")}`;
  }, [round]);

  function startGame() {
    const newQuotes = getGameQuotes();

    setQuotes(newQuotes);
    setAnswers(
      newQuotes[0]
        ? getAnswers(newQuotes[0], gtaQuotes)
        : []
    );

    setRound(0);
    setScore(0);
    setSelectedAnswer(null);
    setAnswerState(null);
    setGameOver(false);
    setShowResults(false);
    setLoaded(true);
  }

  useEffect(() => {
    startGame();
  }, []);

  function makeGuess(answer: string) {
    if (
      !currentQuote ||
      selectedAnswer ||
      answerState ||
      gameOver
    ) {
      return;
    }

    setSelectedAnswer(answer);

    const correct = answer === correctAnswer;

    if (!correct) {
      setAnswerState("incorrect");

      setTimeout(() => {
        setGameOver(true);
      }, 900);

      return;
    }

    setAnswerState("correct");

    const newScore = score + POINTS_PER_ROUND;
    setScore(newScore);

    setTimeout(() => {
      if (round + 1 >= TOTAL_ROUNDS) {
        setGameOver(true);
        return;
      }

      const nextRound = round + 1;
      const nextQuote = quotes[nextRound];

      setRound(nextRound);

      setAnswers(
        nextQuote
          ? getAnswers(nextQuote, gtaQuotes)
          : []
      );

      setSelectedAnswer(null);
      setAnswerState(null);
    }, 900);
  }

  function replayGame() {
    startGame();
  }

  if (!loaded || !currentQuote) {
    return (
      <main className="min-h-screen bg-[#050507] text-white" />
    );
  }

  /* ============================================================
     RESULTS
  ============================================================ */

  if (gameOver && showResults) {
    const perfect = score === MAX_SCORE;
    const correctAnswers = score / POINTS_PER_ROUND;
    const roundsPlayed = perfect
      ? TOTAL_ROUNDS
      : correctAnswers + 1;

    return (
      <main className="relative min-h-screen overflow-hidden bg-[#050507] text-white">

        {/* ======================================================
            SHARED RESULTS BACKGROUND
        ====================================================== */}

        <div className="pointer-events-none fixed inset-0 overflow-hidden">

          <div className="absolute -left-32 top-[-180px] h-[500px] w-[500px] rounded-full bg-fuchsia-600/[0.055] blur-[120px]" />

          <div className="absolute right-[-180px] top-[25%] h-[500px] w-[500px] rounded-full bg-purple-600/[0.045] blur-[140px]" />

          <div className="absolute bottom-[-250px] left-[35%] h-[500px] w-[500px] rounded-full bg-cyan-500/[0.025] blur-[150px]" />

        </div>

        {/* ======================================================
            DESKTOP RESULTS
        ====================================================== */}

        <div className="relative z-10 hidden min-h-screen flex-col sm:flex">

          <header className="flex items-center justify-between border-b border-white/[0.08] px-8 py-6 lg:px-12">

            <Link
              href="/games"
              className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 transition hover:text-fuchsia-400"
            >
              ← Back To Games
            </Link>

            <div className="text-center">

              <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-fuchsia-400">
                Quote Challenge
              </p>

              <p className="mt-1 text-[8px] uppercase tracking-[0.3em] text-zinc-700">
                GTA Character Quotes
              </p>

            </div>

            <div className="w-[100px]" />

          </header>

          <section className="flex flex-1 flex-col px-8 py-10 lg:px-12">

            <div className="flex items-center gap-4">

              <span className="h-px w-12 bg-gradient-to-r from-fuchsia-500/60 to-purple-500/20" />

              <p className="text-[10px] font-bold uppercase tracking-[0.45em] text-fuchsia-400">
                {perfect ? "Perfect Run" : "Run Complete"}
              </p>

              <span className="h-px flex-1 bg-gradient-to-r from-purple-500/20 via-white/[0.06] to-cyan-500/20" />

            </div>

            <div className="grid flex-1 grid-cols-[1fr_1.4fr_1fr] items-center gap-12">

              <div>

                <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-zinc-600">
                  Final Result
                </p>

                <h1 className="mt-5 text-6xl font-black uppercase leading-[0.88] tracking-[-0.07em] text-white lg:text-8xl">

                  {perfect ? (
                    <>
                      Quote
                      <br />
                      Master
                      <span className="text-fuchsia-400">.</span>
                    </>
                  ) : (
                    <>
                      Game
                      <br />
                      Over
                      <span className="text-fuchsia-400">.</span>
                    </>
                  )}

                </h1>

                <p className="mt-7 max-w-sm text-[13px] leading-6 text-zinc-500">
                  {perfect
                    ? "Every quote identified correctly. Five out of five."
                    : `You correctly identified ${correctAnswers} quote${
                        correctAnswers === 1 ? "" : "s"
                      } before the run ended.`}
                </p>

              </div>

              <div className="relative flex flex-col items-center justify-center border-x border-white/[0.06] px-8 text-center">

                <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500/[0.035] blur-[90px]" />

                <div className="relative">

                  <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-zinc-600">
                    Final Score
                  </p>

                  <p className="mt-5 bg-gradient-to-r from-white via-fuchsia-100 to-cyan-100 bg-clip-text text-[8rem] font-black leading-none tracking-[-0.09em] text-transparent lg:text-[10rem]">
                    {score.toLocaleString()}
                  </p>

                  <div className="mt-5 flex items-center gap-4">

                    <span className="h-px w-10 bg-gradient-to-r from-fuchsia-500/60 to-purple-500/20" />

                    <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-fuchsia-400">
                      / {MAX_SCORE.toLocaleString()}
                    </p>

                    <span className="h-px w-10 bg-gradient-to-r from-purple-500/20 to-cyan-500/50" />

                  </div>

                </div>

              </div>

              <div className="w-full">

                <div className="border-y border-white/[0.08]">

                  <div className="flex items-center justify-between border-b border-white/[0.06] py-6">

                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-600">
                      Score
                    </p>

                    <p className="text-2xl font-black tracking-[-0.04em] text-white">
                      {score.toLocaleString()}
                    </p>

                  </div>

                  <div className="flex items-center justify-between border-b border-white/[0.06] py-6">

                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-600">
                      Correct
                    </p>

                    <p className="text-2xl font-black tracking-[-0.04em] text-white">
                      {correctAnswers}
                      <span className="text-zinc-700">
                        {" "}
                        / {TOTAL_ROUNDS}
                      </span>
                    </p>

                  </div>

                  <div className="flex items-center justify-between py-6">

                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-600">
                      Rounds Played
                    </p>

                    <p className="text-2xl font-black tracking-[-0.04em] text-white">
                      {roundsPlayed}
                    </p>

                  </div>

                </div>

              </div>

            </div>

            <div className="border-t border-white/[0.08] pt-7">

              <div className="flex items-center justify-between">

                <p className="text-[9px] font-bold uppercase tracking-[0.35em] text-zinc-700">
                  GTA Character Quotes
                </p>

                <div className="flex items-center gap-3">

                  <button
                    type="button"
                    onClick={replayGame}
                    className="border border-fuchsia-500/40 bg-fuchsia-500/10 px-10 py-4 text-[9px] font-bold uppercase tracking-[0.35em] text-fuchsia-400 transition hover:border-fuchsia-400 hover:bg-fuchsia-500/20"
                  >
                    Play Again
                  </button>

                  <Link
                    href="/games"
                    className="border border-white/[0.1] px-10 py-4 text-[9px] font-bold uppercase tracking-[0.35em] text-zinc-400 transition hover:border-fuchsia-500/30 hover:text-fuchsia-300"
                  >
                    Back To Games
                  </Link>

                  <Link
                    href="/"
                    className="border border-white/[0.1] px-10 py-4 text-[9px] font-bold uppercase tracking-[0.35em] text-zinc-400 transition hover:border-cyan-500/30 hover:text-cyan-300"
                  >
                    Home
                  </Link>

                </div>

              </div>

            </div>

          </section>

        </div>

        {/* ======================================================
            MOBILE RESULTS
        ====================================================== */}

        <div className="relative z-10 flex min-h-screen flex-col sm:hidden">

          <header className="flex items-center justify-between border-b border-white/[0.08] px-4 py-5">

            <Link
              href="/games"
              className="text-[9px] font-bold uppercase tracking-[0.25em] text-zinc-500 transition active:text-fuchsia-400"
            >
              ← Back To Games
            </Link>

            <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-fuchsia-400">
              Quote Challenge
            </p>

            <div className="w-[45px]" />

          </header>

          <section className="flex flex-1 flex-col px-4 pb-8 pt-14">

            <div className="flex items-center justify-center gap-3">

              <span className="h-px w-6 bg-fuchsia-500/50" />

              <p className="text-[8px] font-bold uppercase tracking-[0.4em] text-fuchsia-400">
                {perfect ? "Perfect Run" : "Run Complete"}
              </p>

              <span className="h-px w-6 bg-cyan-500/40" />

            </div>

            <h1 className="mt-5 text-center text-5xl font-black uppercase leading-[0.9] tracking-[-0.07em] text-white">

              {perfect ? "Quote Master." : "Game Over."}

            </h1>

            <p className="mx-auto mt-4 max-w-xs text-center text-[11px] leading-5 text-zinc-500">
              {perfect
                ? "Every quote was identified correctly."
                : `You correctly identified ${correctAnswers} quote${
                    correctAnswers === 1 ? "" : "s"
                  }.`}
            </p>

            <div className="relative mt-12 overflow-hidden border-y border-white/[0.08] py-7 text-center">

              <div className="pointer-events-none absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500/[0.04] blur-[70px]" />

              <div className="relative">

                <p className="text-[8px] font-bold uppercase tracking-[0.35em] text-zinc-600">
                  Final Score
                </p>

                <p className="mt-2 bg-gradient-to-r from-white via-fuchsia-100 to-cyan-100 bg-clip-text text-7xl font-black leading-none tracking-[-0.08em] text-transparent">
                  {score.toLocaleString()}
                </p>

                <p className="mt-3 text-[9px] font-bold uppercase tracking-[0.35em] text-fuchsia-400">
                  / {MAX_SCORE.toLocaleString()}
                </p>

              </div>

            </div>

            <div className="mt-10 border-y border-white/[0.08]">

              <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-4">

                <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-zinc-600">
                  Score
                </p>

                <p className="text-sm font-black text-white">
                  {score.toLocaleString()}
                </p>

              </div>

              <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-4">

                <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-zinc-600">
                  Correct Answers
                </p>

                <p className="text-sm font-black text-white">
                  {correctAnswers}
                  <span className="text-zinc-700">
                    {" "}
                    / {TOTAL_ROUNDS}
                  </span>
                </p>

              </div>

              <div className="flex items-center justify-between px-4 py-4">

                <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-zinc-600">
                  Rounds Played
                </p>

                <p className="text-sm font-black text-white">
                  {roundsPlayed}
                </p>

              </div>

            </div>

            <div className="mt-auto pt-10">

              <button
                type="button"
                onClick={replayGame}
                className="w-full border border-fuchsia-500/40 bg-fuchsia-500/10 px-5 py-4 text-[8px] font-bold uppercase tracking-[0.35em] text-fuchsia-400 transition active:bg-fuchsia-500/20"
              >
                Play Again
              </button>

              <div className="mt-2 grid grid-cols-2 gap-2">

                <Link
                  href="/games"
                  className="border border-white/[0.1] px-3 py-4 text-center text-[8px] font-bold uppercase tracking-[0.3em] text-zinc-400 transition active:border-fuchsia-500/30 active:bg-fuchsia-500/[0.04] active:text-fuchsia-300"
                >
                  Back To Games
                </Link>

                <Link
                  href="/"
                  className="border border-white/[0.1] px-3 py-4 text-center text-[8px] font-bold uppercase tracking-[0.3em] text-zinc-400 transition active:border-cyan-500/30 active:bg-cyan-500/[0.04] active:text-cyan-300"
                >
                  Home
                </Link>

              </div>

            </div>

          </section>

        </div>

      </main>
    );
  }

  /* ============================================================
     GAMEPLAY
  ============================================================ */

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050507] text-white">

      {/* ======================================================
          BACKGROUND COLOUR
      ====================================================== */}

      <div className="pointer-events-none fixed inset-0 overflow-hidden">

        <div className="absolute -left-32 top-[-180px] h-[500px] w-[500px] rounded-full bg-fuchsia-600/[0.055] blur-[120px]" />

        <div className="absolute right-[-180px] top-[25%] h-[500px] w-[500px] rounded-full bg-purple-600/[0.045] blur-[140px]" />

        <div className="absolute bottom-[-250px] left-[35%] h-[500px] w-[500px] rounded-full bg-cyan-500/[0.025] blur-[150px]" />

      </div>

      <div className="relative z-10 mx-auto min-h-screen max-w-7xl px-5 py-6 sm:px-8 lg:px-12">

        {/* HEADER */}

        <header className="flex items-center justify-between border-b border-white/[0.08] pb-5">

          <Link
            href="/games"
            className="group flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.3em] text-zinc-500 transition hover:text-fuchsia-400"
          >
            <span className="transition group-hover:-translate-x-1">
              ←
            </span>
           Back To Games
          </Link>

          <div className="text-center">

            <p className="text-[9px] font-bold uppercase tracking-[0.35em] text-fuchsia-400">
              Quote Challenge
            </p>

            <p className="mt-1 text-[7px] uppercase tracking-[0.3em] text-zinc-700">
              GTA Character Quotes
            </p>

          </div>

          <div className="text-right">

            <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-zinc-600">
              Score
            </p>

            <p className="mt-1 text-sm font-bold text-zinc-300">
              {score.toLocaleString()}
            </p>

          </div>

        </header>

        {/* ======================================================
            DESKTOP INTRO
        ====================================================== */}

        <section className="hidden pt-10 sm:block sm:pt-14">

          <div className="flex items-center justify-between border-b border-white/[0.06] pb-5">

            <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-zinc-600">
              {roundLabel}
            </span>

            <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-zinc-600">
              +1,000 Per Correct
            </span>

          </div>

          <div className="flex items-end justify-between pt-7">

            <div>

              <p className="text-[8px] font-bold uppercase tracking-[0.35em] text-fuchsia-400">
                Character Challenge
              </p>

              <h1 className="mt-3 text-5xl font-black uppercase leading-none tracking-[-0.06em] text-white lg:text-6xl">
                Who Said It?
              </h1>

              <p className="mt-4 max-w-xl text-xs leading-6 text-zinc-500">
                Read the quote and identify the GTA V character who said it.
              </p>

            </div>

            <div className="hidden items-center gap-3 lg:flex">

              <span className="h-2 w-2 rounded-full bg-fuchsia-400 shadow-[0_0_14px_rgba(232,121,249,0.7)]" />

              <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-zinc-700">
                5 Rounds
              </span>

            </div>

          </div>

        </section>

        {/* ======================================================
            MOBILE INTRO
        ====================================================== */}

        <section className="pt-7 sm:hidden">

          <div className="flex items-center justify-between text-[7px] font-bold uppercase tracking-[0.25em] text-zinc-600">

            <span>{roundLabel}</span>

            <span>+1,000 Correct</span>

          </div>

          <h1 className="mt-6 text-3xl font-black uppercase tracking-[-0.05em] text-white">
            Who Said It?
          </h1>

          <p className="mt-2 max-w-xs text-[10px] leading-5 text-zinc-500">
            Identify the GTA V character behind the quote.
          </p>

        </section>

        {/* ======================================================
            QUOTE
        ====================================================== */}

        <section className="mx-auto mt-10 max-w-5xl sm:mt-12">

          <div
            className={`relative overflow-hidden border bg-[#08080b]/95 px-6 py-12 shadow-2xl transition-all duration-300 sm:px-14 sm:py-20 ${
              answerState === "correct"
                ? "border-emerald-400/30 shadow-[0_0_70px_rgba(52,211,153,0.06)]"
                : answerState === "incorrect"
                ? "border-red-400/30 shadow-[0_0_70px_rgba(248,113,113,0.06)]"
                : "border-white/[0.09] shadow-[0_0_80px_rgba(168,85,247,0.045)]"
            }`}
          >

            <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-fuchsia-400 via-purple-500 to-cyan-400" />

            <div className="pointer-events-none absolute left-1/2 top-0 h-32 w-2/3 -translate-x-1/2 bg-fuchsia-500/[0.035] blur-3xl" />

            <span className="absolute left-6 top-5 font-serif text-5xl leading-none text-fuchsia-400/20 sm:left-10 sm:top-7 sm:text-7xl">
              “
            </span>

            <div className="relative text-center">

              <p className="text-[7px] font-bold uppercase tracking-[0.45em] text-fuchsia-400/70 sm:text-[8px]">
                Quote {String(round + 1).padStart(2, "0")}
              </p>

              <blockquote className="mx-auto mt-7 max-w-3xl text-2xl font-black leading-[1.15] tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
                “{currentQuote.quote}”
              </blockquote>

              {answerState && (
                <div className="mt-8">

                  <p
                    className={`text-[8px] font-black uppercase tracking-[0.35em] ${
                      answerState === "correct"
                        ? "text-emerald-400"
                        : "text-red-400"
                    }`}
                  >
                    {answerState === "correct"
                      ? "Correct"
                      : "Incorrect"}
                  </p>

                  <p className="mt-2 text-sm font-bold text-zinc-300">
                    {currentQuote.character}
                  </p>

                </div>
              )}

            </div>

          </div>

        </section>

        {/* ======================================================
            ANSWERS
        ====================================================== */}

        <section className="mx-auto mt-7 max-w-5xl">

          <div className="mb-3 flex items-center justify-between">

            <p className="text-[8px] font-bold uppercase tracking-[0.35em] text-zinc-600">
              Who said this?
            </p>

            <p className="text-[7px] font-bold uppercase tracking-[0.3em] text-zinc-800">
              Select one
            </p>

          </div>

          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">

            {answers.map((answer, index) => {

              const selected = selectedAnswer === answer;
              const correct = answer === correctAnswer;

              let stateClass =
                "border-white/[0.08] bg-[#08080b] hover:border-fuchsia-500/30 hover:bg-fuchsia-500/[0.055]";

              let numberClass = "text-zinc-700";
              let nameClass = "text-zinc-300";

              if (answerState && correct) {
                stateClass =
                  "border-emerald-400/30 bg-emerald-400/[0.08] shadow-[0_0_25px_rgba(52,211,153,0.05)]";
                numberClass = "text-emerald-400";
                nameClass = "text-white";
              } else if (
                answerState &&
                selected &&
                !correct
              ) {
                stateClass =
                  "border-red-400/30 bg-red-400/[0.08] shadow-[0_0_25px_rgba(248,113,113,0.05)]";
                numberClass = "text-red-400";
                nameClass = "text-white";
              }

              return (
                <button
                  key={answer}
                  type="button"
                  onClick={() => makeGuess(answer)}
                  disabled={Boolean(answerState)}
                  className={`group relative min-h-[100px] overflow-hidden border px-4 py-5 text-center transition-all duration-200 sm:min-h-[110px] ${stateClass}`}
                >

                  <span
                    className={`block text-[7px] font-bold tracking-[0.3em] transition sm:text-[8px] ${numberClass}`}
                  >
                    0{index + 1}
                  </span>

                  <span
                    className={`mt-3 block text-sm font-black uppercase leading-tight tracking-[-0.02em] transition sm:text-base ${nameClass}`}
                  >
                    {answer}
                  </span>

                  {!answerState && (
                    <span className="absolute bottom-3 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-fuchsia-400 to-cyan-400 transition-all duration-300 group-hover:w-1/2" />
                  )}

                  {answerState && correct && (
                    <span className="mt-2 block text-[7px] font-bold uppercase tracking-[0.25em] text-emerald-400">
                      Correct
                    </span>
                  )}

                  {answerState && selected && !correct && (
                    <span className="mt-2 block text-[7px] font-bold uppercase tracking-[0.25em] text-red-400">
                      Incorrect
                    </span>
                  )}

                </button>
              );
            })}

          </div>

          {/* VIEW RESULTS — ONLY AFTER FINAL ROUND */}

          {gameOver && !showResults && (
            <button
              type="button"
              onClick={() => setShowResults(true)}
              className="group mt-4 flex w-full items-center justify-center gap-4 border border-fuchsia-500/40 bg-fuchsia-500/[0.08] px-5 py-4 text-[9px] font-bold uppercase tracking-[0.4em] text-fuchsia-400 transition hover:border-fuchsia-400/70 hover:bg-fuchsia-500/[0.14] hover:text-white"
            >
              View Results

              <span className="transition group-hover:translate-x-1">
                →
              </span>
            </button>
          )}

        </section>

        {/* FOOTER */}

        <div className="mt-6 text-center">

          <p className="text-[7px] font-bold uppercase tracking-[0.3em] text-zinc-700">
            GTA V Character Quotes · 5 Round Challenge
          </p>

        </div>

      </div>

    </main>
  );
}
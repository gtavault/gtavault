"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  higherLowerVehicles,
  HigherLowerVehicle,
} from "@/lib/vehicles-higher-lower";

const TOTAL_ROUNDS = 10;
const MAX_SCORE = TOTAL_ROUNDS * 1000;

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

function formatPrice(price: number) {
  return `$${price.toLocaleString("en-US")}`;
}

function getGameVehicles(): HigherLowerVehicle[] {
  return shuffle(higherLowerVehicles).slice(0, TOTAL_ROUNDS + 1);
}

function preloadImage(src: string) {
  return new Promise<void>((resolve) => {
    const image = new window.Image();

    image.onload = () => resolve();
    image.onerror = () => resolve();

    image.src = src;

    if (image.complete) {
      resolve();
    }
  });
}

export default function HigherLowerPage() {
  const [vehicles, setVehicles] = useState<HigherLowerVehicle[]>([]);
  const [round, setRound] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<
    "higher" | "lower" | null
  >(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const currentVehicle = vehicles[round];
  const nextVehicle = vehicles[round + 1];

  const correctAnswer = useMemo(() => {
    if (!currentVehicle || !nextVehicle) {
      return null;
    }

    if (nextVehicle.price > currentVehicle.price) {
      return "higher";
    }

    if (nextVehicle.price < currentVehicle.price) {
      return "lower";
    }

    return "same";
  }, [currentVehicle, nextVehicle]);

  useEffect(() => {
    const gameVehicles = getGameVehicles();

    setVehicles(gameVehicles);
    setLoaded(true);

    gameVehicles.forEach((vehicle) => {
      const image = new window.Image();
      image.src = vehicle.image;
    });
  }, []);

  function makeGuess(answer: "higher" | "lower") {
    if (
      !currentVehicle ||
      !nextVehicle ||
      showAnswer ||
      gameOver
    ) {
      return;
    }

    setSelectedAnswer(answer);
    setShowAnswer(true);

    const isCorrect = answer === correctAnswer;

    if (!isCorrect) {
      setTimeout(() => {
        setGameOver(true);
      }, 900);

      return;
    }

    const newScore = score + 1000;
    setScore(newScore);

    setTimeout(async () => {
      if (round + 1 >= TOTAL_ROUNDS) {
        setGameOver(true);
        return;
      }

      const upcomingCurrent = vehicles[round + 1];
      const upcomingNext = vehicles[round + 2];

      if (upcomingCurrent) {
        await preloadImage(upcomingCurrent.image);
      }

      if (upcomingNext) {
        await preloadImage(upcomingNext.image);
      }

      setRound((currentRound) => currentRound + 1);
      setSelectedAnswer(null);
      setShowAnswer(false);
    }, 900);
  }

  function replayGame() {
    const gameVehicles = getGameVehicles();

    setVehicles(gameVehicles);
    setRound(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowAnswer(false);
    setGameOver(false);

    gameVehicles.forEach((vehicle) => {
      const image = new window.Image();
      image.src = vehicle.image;
    });
  }

  if (!loaded || !currentVehicle || !nextVehicle) {
    return (
      <main className="min-h-screen bg-[#050507] text-white" />
    );
  }

  {/* =========================================================
      RESULTS
  ========================================================= */}

  if (gameOver) {
    const perfect = score === MAX_SCORE;
    const correctAnswers = score / 1000;
    const roundsPlayed = perfect ? TOTAL_ROUNDS : correctAnswers + 1;

    return (
      <main className="min-h-screen bg-[#050507] text-white">

{/* ================= DESKTOP RESULTS ================= */}

<div className="hidden min-h-screen flex-col sm:flex">

  <header className="flex items-center justify-between border-b border-white/[0.08] px-8 py-6 lg:px-12">

    <Link
      href="/games"
      className="text-[9px] font-bold uppercase tracking-[0.3em] text-zinc-500 transition hover:text-fuchsia-400"
    >
      ← Back To Games
    </Link>

    <div className="text-center">

      <p className="text-[9px] font-bold uppercase tracking-[0.35em] text-fuchsia-400">
        Higher / Lower
      </p>

      <p className="mt-1 text-[7px] uppercase tracking-[0.3em] text-zinc-700">
        Vehicle Challenge
      </p>

    </div>

    <div className="w-[100px]" />

  </header>

  <section className="flex flex-1 flex-col px-8 py-10 lg:px-12">

    {/* TOP LABEL */}

    <div className="flex items-center gap-4">

      <span className="h-px w-12 bg-fuchsia-500/40" />

      <p className="text-[9px] font-bold uppercase tracking-[0.45em] text-fuchsia-400">
        {perfect ? "Perfect Run" : "Run Complete"}
      </p>

      <span className="h-px flex-1 bg-white/[0.06]" />

    </div>

    {/* MAIN RESULT AREA */}

    <div className="grid flex-1 grid-cols-[1fr_1.4fr_1fr] items-center gap-12">

      {/* LEFT */}

      <div>

        <p className="text-[8px] font-bold uppercase tracking-[0.35em] text-zinc-600">
          Final Result
        </p>

        <h1 className="mt-5 text-6xl font-black uppercase leading-[0.88] tracking-[-0.07em] text-white lg:text-8xl">
          {perfect ? (
            <>
              Unstoppable
              <span className="text-fuchsia-400">.</span>
            </>
          ) : (
            <>
              Game
              <br />
              Over<span className="text-fuchsia-400">.</span>
            </>
          )}
        </h1>

        <p className="mt-7 max-w-sm text-xs leading-6 text-zinc-600">
          {perfect
            ? "Every prediction was correct. Ten vehicles. Ten correct calls."
            : `Your run ended after ${correctAnswers} correct prediction${
                correctAnswers === 1 ? "" : "s"
              }. Take another shot and beat your score.`}
        </p>

      </div>

      {/* CENTRE SCORE */}

      <div className="flex flex-col items-center justify-center border-x border-white/[0.06] px-8 text-center">

        <p className="text-[8px] font-bold uppercase tracking-[0.4em] text-zinc-600">
          Final Score
        </p>

        <p className="mt-5 text-[8rem] font-black leading-none tracking-[-0.09em] text-white lg:text-[10rem]">
          {score.toLocaleString()}
        </p>

        <div className="mt-5 flex items-center gap-4">

          <span className="h-px w-10 bg-fuchsia-500/30" />

          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-fuchsia-400">
            / {MAX_SCORE.toLocaleString()}
          </p>

          <span className="h-px w-10 bg-fuchsia-500/30" />

        </div>

      </div>

      {/* RIGHT STATS */}

      <div className="w-full">

        <div className="border-y border-white/[0.08]">

          <div className="flex items-center justify-between border-b border-white/[0.06] py-6">

            <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-zinc-600">
              Score
            </p>

            <p className="text-2xl font-black tracking-[-0.04em] text-white">
              {score.toLocaleString()}
            </p>

          </div>

          <div className="flex items-center justify-between border-b border-white/[0.06] py-6">

            <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-zinc-600">
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

            <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-zinc-600">
              Rounds Played
            </p>

            <p className="text-2xl font-black tracking-[-0.04em] text-white">
              {roundsPlayed}
            </p>

          </div>

        </div>

      </div>

    </div>

    {/* ACTION BAR */}

    <div className="border-t border-white/[0.08] pt-7">

      <div className="flex items-center justify-between">

        <p className="text-[8px] font-bold uppercase tracking-[0.35em] text-zinc-700">
          GTA V / GTA Online Vehicle Prices
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
            className="border border-white/[0.1] px-10 py-4 text-[9px] font-bold uppercase tracking-[0.35em] text-zinc-400 transition hover:border-white/[0.2] hover:text-white"
          >
            Back To Games
          </Link>

          <Link
            href="/"
            className="border border-white/[0.1] px-10 py-4 text-[9px] font-bold uppercase tracking-[0.35em] text-zinc-400 transition hover:border-white/[0.2] hover:text-white"
          >
            Home
          </Link>

        </div>

      </div>

    </div>

  </section>

</div>

        {/* ================= MOBILE RESULTS ================= */}

        <div className="flex min-h-screen flex-col sm:hidden">

          <header className="flex items-center justify-between border-b border-white/[0.08] px-4 py-5">

            <Link
              href="/games"
              className="text-[8px] font-bold uppercase tracking-[0.25em] text-zinc-500"
            >
              ← Back To Games
            </Link>

            <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-fuchsia-400">
              Higher / Lower
            </p>

            <div className="w-[45px]" />

          </header>

          <section className="flex flex-1 flex-col px-4 pb-8 pt-14">

            {/* RESULT LABEL */}

            <div className="flex items-center justify-center gap-3">

              <span className="h-px w-6 bg-fuchsia-500/40" />

              <p className="text-[7px] font-bold uppercase tracking-[0.4em] text-fuchsia-400">
                {perfect ? "Perfect Run" : "Run Complete"}
              </p>

              <span className="h-px w-6 bg-fuchsia-500/40" />

            </div>

            {/* TITLE */}

            <h1 className="mt-5 text-center text-5xl font-black uppercase leading-[0.9] tracking-[-0.07em] text-white">
              {perfect ? "Unstoppable." : "Game Over."}
            </h1>

            <p className="mx-auto mt-4 max-w-xs text-center text-[10px] leading-5 text-zinc-600">
              {perfect
                ? "Every prediction was correct."
                : `Your run ended after ${correctAnswers} correct prediction${
                    correctAnswers === 1 ? "" : "s"
                  }.`}
            </p>

            {/* SCORE */}

            <div className="mt-12 text-center">

              <p className="text-[7px] font-bold uppercase tracking-[0.35em] text-zinc-600">
                Final Score
              </p>

              <p className="mt-2 text-7xl font-black leading-none tracking-[-0.08em] text-white">
                {score.toLocaleString()}
              </p>

              <p className="mt-3 text-[8px] font-bold uppercase tracking-[0.35em] text-fuchsia-400">
                / {MAX_SCORE.toLocaleString()}
              </p>

            </div>

            {/* STATS */}

            <div className="mt-10 border-y border-white/[0.08]">

              <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-4">

                <p className="text-[7px] font-bold uppercase tracking-[0.3em] text-zinc-600">
                  Score
                </p>

                <p className="text-sm font-black tracking-[-0.02em] text-white">
                  {score.toLocaleString()}
                </p>

              </div>

              <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-4">

                <p className="text-[7px] font-bold uppercase tracking-[0.3em] text-zinc-600">
                  Correct Answers
                </p>

                <p className="text-sm font-black tracking-[-0.02em] text-white">
                  {correctAnswers}
                  <span className="text-zinc-700">
                    {" "}
                    / {TOTAL_ROUNDS}
                  </span>
                </p>

              </div>

              <div className="flex items-center justify-between px-4 py-4">

                <p className="text-[7px] font-bold uppercase tracking-[0.3em] text-zinc-600">
                  Rounds Played
                </p>

                <p className="text-sm font-black tracking-[-0.02em] text-white">
                  {roundsPlayed}
                </p>

              </div>

            </div>

            {/* ACTIONS */}

            <div className="mt-auto pt-10">

              <button
                type="button"
                onClick={replayGame}
                className="w-full border border-fuchsia-500/40 bg-fuchsia-500/10 px-5 py-4 text-[8px] font-bold uppercase tracking-[0.35em] text-fuchsia-400 active:bg-fuchsia-500/20"
              >
                Play Again
              </button>

              <div className="mt-2 grid grid-cols-2 gap-2">

                <Link
                  href="/games"
                  className="border border-white/[0.1] px-3 py-4 text-center text-[7px] font-bold uppercase tracking-[0.3em] text-zinc-400 active:bg-white/[0.04]"
                >
                  Back To Games
                </Link>

                <Link
                  href="/"
                  className="border border-white/[0.1] px-3 py-4 text-center text-[7px] font-bold uppercase tracking-[0.3em] text-zinc-400 active:bg-white/[0.04]"
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

  return (
    <main className="min-h-screen bg-[#050507] text-white">

      <div className="mx-auto min-h-screen max-w-7xl px-5 py-6 sm:px-8 lg:px-12">

        {/* HEADER */}

        <header className="flex items-center justify-between border-b border-white/[0.08] pb-5">

          <Link
            href="/games"
            className="text-[9px] font-bold uppercase tracking-[0.3em] text-zinc-500 transition hover:text-fuchsia-400"
          >
            ← Back To Games
          </Link>

          <div className="text-center">
            <p className="text-[9px] font-bold uppercase tracking-[0.35em] text-fuchsia-400">
              Higher / Lower
            </p>

            <p className="mt-1 text-[7px] uppercase tracking-[0.3em] text-zinc-700">
              Vehicle Challenge
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

       {/* DESKTOP GAME HEADER */}

<section className="hidden pt-10 sm:block sm:pt-14">

  <div className="flex items-center justify-between border-b border-white/[0.06] pb-5">

    <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-zinc-600">
      Round {String(round + 1).padStart(2, "0")} /{" "}
      {String(TOTAL_ROUNDS).padStart(2, "0")}
    </span>

    <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-zinc-600">
      +1,000 Per Correct
    </span>

  </div>

  <div className="pt-7">

    <p className="text-[8px] font-bold uppercase tracking-[0.35em] text-fuchsia-400">
      Vehicle Challenge
    </p>

    <h1 className="mt-3 text-5xl font-black uppercase leading-none tracking-[-0.06em] text-white lg:text-6xl">
      Which Costs More?
    </h1>

    <p className="mt-4 max-w-xl text-xs leading-6 text-zinc-600">
      Compare the two vehicles and decide whether the second
      costs higher or lower than the first.
    </p>

  </div>

</section>

        {/* MOBILE GAME HEADER */}

        <section className="pt-7 text-center sm:hidden">

          <div className="flex items-center justify-between text-[7px] font-bold uppercase tracking-[0.25em] text-zinc-600">

            <span>
              Round {String(round + 1).padStart(2, "0")} /{" "}
              {String(TOTAL_ROUNDS).padStart(2, "0")}
            </span>

            <span>
              +1,000 Correct
            </span>

          </div>

          <h1 className="mt-6 text-3xl font-black uppercase tracking-[-0.05em] text-white">
            Which Costs More?
          </h1>

          <p className="mx-auto mt-2 max-w-xs text-[10px] leading-5 text-zinc-600">
            Decide whether the second vehicle costs more or less than the first.
          </p>

        </section>

        {/* DESKTOP VEHICLES */}

        <section className="mt-10 hidden w-full grid-cols-2 gap-0 sm:grid">

          <div className="relative h-[520px] overflow-hidden bg-black">

            <Image
              src={currentVehicle.image}
              alt={currentVehicle.name}
              fill
              className="object-cover opacity-60"
              sizes="50vw"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-black/20" />

            <div className="absolute left-5 top-5">
              <span className="border border-white/[0.12] bg-black/60 px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.3em] text-zinc-400 backdrop-blur-sm">
                Known Price
              </span>
            </div>

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent px-6 pb-7 pt-28">

              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-zinc-400">
                Vehicle 01
              </p>

              <h2 className="mt-1 text-2xl font-black uppercase leading-tight tracking-[-0.02em] text-white sm:text-3xl">
                {currentVehicle.name}
              </h2>

              <p className="mt-2 text-2xl font-black tracking-[-0.04em] text-fuchsia-400 sm:text-3xl">
                {formatPrice(currentVehicle.price)}
              </p>

            </div>

          </div>

          <div className="relative h-[520px] overflow-hidden bg-black">

            <Image
              src={nextVehicle.image}
              alt={nextVehicle.name}
              fill
              className="object-cover opacity-60"
              sizes="50vw"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-black/20" />

            <div className="absolute left-5 top-5">
              <span className="border border-fuchsia-500/20 bg-fuchsia-500/10 px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.3em] text-fuchsia-400 backdrop-blur-sm">
                Unknown Price
              </span>
            </div>

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent px-6 pb-7 pt-28">

              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-zinc-400">
                Vehicle 02
              </p>

              <h2 className="mt-1 text-2xl font-black uppercase leading-tight tracking-[-0.02em] text-white sm:text-3xl">
                {nextVehicle.name}
              </h2>

              {showAnswer ? (
                <div className="mt-2">

                  <p
                    className={`text-2xl font-black tracking-[-0.04em] sm:text-3xl ${
                      correctAnswer === selectedAnswer
                        ? "text-emerald-400"
                        : "text-red-400"
                    }`}
                  >
                    {formatPrice(nextVehicle.price)}
                  </p>

                  <p
                    className={`mt-1 text-[8px] font-bold uppercase tracking-[0.3em] ${
                      correctAnswer === selectedAnswer
                        ? "text-emerald-500"
                        : "text-red-500"
                    }`}
                  >
                    {correctAnswer === selectedAnswer
                      ? "Correct"
                      : "Incorrect"}
                  </p>

                </div>
              ) : (
                <p className="mt-2 text-2xl font-black tracking-[0.08em] text-zinc-400 sm:text-3xl">
                  $?,???,???
                </p>
              )}

            </div>

          </div>

        </section>

        {/* MOBILE VEHICLES */}

        <section className="mt-7 flex flex-col gap-3 sm:hidden">

          <div className="relative h-[270px] w-full overflow-hidden bg-black">

            <Image
              src={currentVehicle.image}
              alt={currentVehicle.name}
              fill
              className="object-cover opacity-60"
              sizes="100vw"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-black/20" />

            <div className="absolute left-3 top-3">
              <span className="border border-white/[0.12] bg-black/60 px-2 py-1 text-[6px] font-bold uppercase tracking-[0.25em] text-zinc-400 backdrop-blur-sm">
                Known Price
              </span>
            </div>

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent px-4 pb-4 pt-20">

              <p className="text-[6px] font-bold uppercase tracking-[0.25em] text-zinc-400">
                Vehicle 01
              </p>

              <h2 className="mt-1 text-xl font-black uppercase leading-tight tracking-[-0.03em] text-white">
                {currentVehicle.name}
              </h2>

              <p className="mt-1 text-xl font-black tracking-[-0.04em] text-fuchsia-400">
                {formatPrice(currentVehicle.price)}
              </p>

            </div>

          </div>

          <div className="relative h-[270px] w-full overflow-hidden bg-black">

            <Image
              src={nextVehicle.image}
              alt={nextVehicle.name}
              fill
              className="object-cover opacity-60"
              sizes="100vw"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-black/20" />

            <div className="absolute left-3 top-3">
              <span className="border border-fuchsia-500/20 bg-fuchsia-500/10 px-2 py-1 text-[6px] font-bold uppercase tracking-[0.25em] text-fuchsia-400 backdrop-blur-sm">
                Unknown Price
              </span>
            </div>

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent px-4 pb-4 pt-20">

              <p className="text-[6px] font-bold uppercase tracking-[0.25em] text-zinc-400">
                Vehicle 02
              </p>

              <h2 className="mt-1 text-xl font-black uppercase leading-tight tracking-[-0.03em] text-white">
                {nextVehicle.name}
              </h2>

              {showAnswer ? (
                <div className="mt-1">

                  <p
                    className={`text-xl font-black tracking-[-0.04em] ${
                      correctAnswer === selectedAnswer
                        ? "text-emerald-400"
                        : "text-red-400"
                    }`}
                  >
                    {formatPrice(nextVehicle.price)}
                  </p>

                  <p
                    className={`mt-0.5 text-[6px] font-bold uppercase tracking-[0.25em] ${
                      correctAnswer === selectedAnswer
                        ? "text-emerald-500"
                        : "text-red-500"
                    }`}
                  >
                    {correctAnswer === selectedAnswer
                      ? "Correct"
                      : "Incorrect"}
                  </p>

                </div>
              ) : (
                <p className="mt-1 text-xl font-black tracking-[0.08em] text-zinc-400">
                  $?,???,???
                </p>
              )}

            </div>

          </div>

        </section>

        {/* DESKTOP CONTROLS */}

        <section className="mx-auto mt-8 hidden max-w-6xl sm:block">

          <div className="grid grid-cols-2 gap-px bg-white/[0.08]">

            <button
              type="button"
              onClick={() => makeGuess("higher")}
              disabled={showAnswer}
              className="group bg-[#08080b] px-3 py-6 transition hover:bg-fuchsia-500/[0.06] disabled:cursor-default sm:px-5 sm:py-7"
            >

              <span className="block text-[7px] font-bold uppercase tracking-[0.25em] text-zinc-600 transition group-hover:text-fuchsia-400 sm:text-[8px] sm:tracking-[0.35em]">
                The second vehicle costs
              </span>

              <span className="mt-2 block text-xl font-black uppercase tracking-[-0.03em] text-white sm:text-2xl">
                Higher ↑
              </span>

            </button>

            <button
              type="button"
              onClick={() => makeGuess("lower")}
              disabled={showAnswer}
              className="group bg-[#08080b] px-3 py-6 transition hover:bg-fuchsia-500/[0.06] disabled:cursor-default sm:px-5 sm:py-7"
            >

              <span className="block text-[7px] font-bold uppercase tracking-[0.25em] text-zinc-600 transition group-hover:text-fuchsia-400 sm:text-[8px] sm:tracking-[0.35em]">
                The second vehicle costs
              </span>

              <span className="mt-2 block text-xl font-black uppercase tracking-[-0.03em] text-white sm:text-2xl">
                Lower ↓
              </span>

            </button>

          </div>

          <div className="mt-5 text-center">

            <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-zinc-700">
              GTA V / GTA Online Vehicle Prices
            </p>

          </div>

        </section>

        {/* MOBILE CONTROLS */}

        <section className="mt-5 sm:hidden">

          <div className="flex flex-col gap-2">

            <button
              type="button"
              onClick={() => makeGuess("higher")}
              disabled={showAnswer}
              className="w-full border border-white/[0.08] bg-[#08080b] px-4 py-5 text-center transition active:bg-fuchsia-500/[0.08] disabled:cursor-default"
            >

              <span className="block text-[7px] font-bold uppercase tracking-[0.25em] text-zinc-600">
                The second vehicle costs
              </span>

              <span className="mt-1.5 block text-xl font-black uppercase tracking-[-0.03em] text-white">
                Higher ↑
              </span>

            </button>

            <button
              type="button"
              onClick={() => makeGuess("lower")}
              disabled={showAnswer}
              className="w-full border border-white/[0.08] bg-[#08080b] px-4 py-5 text-center transition active:bg-fuchsia-500/[0.08] disabled:cursor-default"
            >

              <span className="block text-[7px] font-bold uppercase tracking-[0.25em] text-zinc-600">
                The second vehicle costs
              </span>

              <span className="mt-1.5 block text-xl font-black uppercase tracking-[-0.03em] text-white">
                Lower ↓
              </span>

            </button>

          </div>

          <div className="mt-4 text-center">

            <p className="text-[7px] font-bold uppercase tracking-[0.25em] text-zinc-700">
              GTA V / GTA Online Vehicle Prices
            </p>

          </div>

        </section>

      </div>
    </main>
  );
}
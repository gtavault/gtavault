"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { characters, Character } from "@/lib/characters";

const MAX_ATTEMPTS = 5;
const DAY_MS = 1000 * 60 * 60 * 24;

// First daily character challenge.
const CHARACTER_START_DATE = Date.UTC(2026, 9, 6);
const CHARACTER_START_KEY = "2026-10-06";

const blurLevels = [
  "blur-[20px]",
  "blur-[15px]",
  "blur-[10px]",
  "blur-[5px]",
  "blur-[2px]",
  "blur-0",
];

const scores = [5000, 4000, 3000, 2000, 1000];

type SavedCharacterProgress = {
  attempts: number;
  completed: boolean;
  score: number;
  isCorrect: boolean;
  feedback: string;
  selectedCharacterId: string | null;
};

type SavedCharacterData = Record<string, SavedCharacterProgress>;

function getDateKey(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function getTodayKey() {
  return getDateKey(new Date());
}

function getCharacterForDate(dateKey: string): Character {
  const [year, month, day] = dateKey.split("-").map(Number);

  const selectedUtc = Date.UTC(year, month - 1, day);

  /*
   * Keep the exact same character that the original
   * dateSeed system would have given this date.
   */
  const dateSeed = Math.floor(selectedUtc / DAY_MS);

  return characters[
    ((dateSeed % characters.length) + characters.length) %
      characters.length
  ];
}

function shiftDate(dateKey: string, days: number) {
  const [year, month, day] = dateKey.split("-").map(Number);

  const date = new Date(year, month - 1, day);
  date.setDate(date.getDate() + days);

  return getDateKey(date);
}

function formatChallengeDate(dateKey: string) {
  const [year, month, day] = dateKey.split("-").map(Number);

  const date = new Date(year, month - 1, day);

  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function CharacterGame() {
  const [selectedDate, setSelectedDate] = useState(getTodayKey);

  const [character, setCharacter] =
    useState<Character | null>(null);

  const [search, setSearch] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedCharacter, setSelectedCharacter] =
    useState<Character | null>(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const dailyCharacter =
      getCharacterForDate(selectedDate);

    setCharacter(dailyCharacter);

    let savedData: SavedCharacterData = {};

    try {
      const saved = localStorage.getItem(
        "gta-vault-character-completed"
      );

      if (saved) {
        const parsed = JSON.parse(saved);

        if (
          parsed &&
          typeof parsed === "object"
        ) {
          savedData = parsed;
        }
      }
    } catch {
      savedData = {};
    }

    const savedProgress = savedData[selectedDate];

    if (savedProgress) {
      setAttempts(savedProgress.attempts ?? 0);
      setCompleted(savedProgress.completed ?? false);
      setScore(savedProgress.score ?? 0);
      setIsCorrect(savedProgress.isCorrect ?? false);
      setFeedback(savedProgress.feedback ?? "");

      if (savedProgress.selectedCharacterId) {
        const savedCharacter = characters.find(
          (item) =>
            item.id === savedProgress.selectedCharacterId
        );

        setSelectedCharacter(
          savedCharacter ?? null
        );
      } else {
        setSelectedCharacter(null);
      }
    } else {
      setAttempts(0);
      setCompleted(false);
      setScore(0);
      setIsCorrect(false);
      setFeedback("");
      setSelectedCharacter(null);
    }

    setSearch("");
    setHydrated(true);
  }, [selectedDate]);

  useEffect(() => {
    const today = getTodayKey();

    const interval = window.setInterval(() => {
      if (getTodayKey() !== today) {
        window.location.reload();
      }
    }, 1000);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!hydrated) return;

    let savedData: SavedCharacterData = {};

    try {
      const saved = localStorage.getItem(
        "gta-vault-character-completed"
      );

      if (saved) {
        const parsed = JSON.parse(saved);

        if (
          parsed &&
          typeof parsed === "object"
        ) {
          savedData = parsed;
        }
      }
    } catch {
      savedData = {};
    }

    savedData[selectedDate] = {
      attempts,
      completed,
      score,
      isCorrect,
      feedback,
      selectedCharacterId:
        selectedCharacter?.id ?? null,
    };

    localStorage.setItem(
      "gta-vault-character-completed",
      JSON.stringify(savedData)
    );
  }, [
    hydrated,
    selectedDate,
    attempts,
    completed,
    score,
    isCorrect,
    feedback,
    selectedCharacter,
  ]);

  const filteredCharacters = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) return [];

    return characters
      .filter((item) => {
        const parts = item.name
          .toLowerCase()
          .split(/\s+/);

        return parts.some((part) =>
          part.startsWith(query)
        );
      })
      .slice(0, 8);
  }, [search]);

  const blurClass = completed
    ? "blur-0"
    : blurLevels[Math.min(attempts, MAX_ATTEMPTS)];

  const isToday = selectedDate === getTodayKey();
  const isFirstCharacterDay =
    selectedDate === CHARACTER_START_KEY;

  function goToPreviousDay() {
    if (isFirstCharacterDay) {
      return;
    }

    setSelectedDate(
      shiftDate(selectedDate, -1)
    );
  }

  function goToNextDay() {
    if (isToday) {
      return;
    }

    setSelectedDate(
      shiftDate(selectedDate, 1)
    );
  }

  function submitGuess(guess: Character) {
    if (!character || completed) return;

    const nextAttempt = attempts + 1;
    const correct =
      guess.id === character.id;

    setSelectedCharacter(guess);
    setSearch("");
    setAttempts(nextAttempt);

    if (!correct) {
      setFeedback(
        nextAttempt >= MAX_ATTEMPTS
          ? "Out of attempts"
          : `Incorrect — ${
              MAX_ATTEMPTS - nextAttempt
            } ${
              MAX_ATTEMPTS - nextAttempt === 1
                ? "attempt"
                : "attempts"
            } remaining`
      );
    } else {
      setFeedback("Correct");
    }

    if (correct) {
      const earnedScore =
        scores[nextAttempt - 1] ?? 0;

      setScore(earnedScore);
      setIsCorrect(true);
      setCompleted(true);
      return;
    }

    if (nextAttempt >= MAX_ATTEMPTS) {
      setScore(0);
      setIsCorrect(false);
      setCompleted(true);
    }
  }

  function resetGame() {
    let savedData: SavedCharacterData = {};

    try {
      const saved = localStorage.getItem(
        "gta-vault-character-completed"
      );

      if (saved) {
        const parsed = JSON.parse(saved);

        if (
          parsed &&
          typeof parsed === "object"
        ) {
          savedData = parsed;
        }
      }
    } catch {
      savedData = {};
    }

    delete savedData[selectedDate];

    localStorage.setItem(
      "gta-vault-character-completed",
      JSON.stringify(savedData)
    );

    window.location.reload();
  }

  if (
    !hydrated ||
    !character
  ) {
    return (
      <main className="min-h-screen bg-[#050507] text-white">
        <div className="flex min-h-screen items-center justify-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-zinc-600">
            Loading character...
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen w-full max-w-full overflow-x-clip bg-[#050507] text-white">

      {/* =========================================================
          DESKTOP
      ========================================================== */}

      <div className="hidden min-h-screen md:block">

        {/* Atmospheric background */}

        <div className="pointer-events-none fixed inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_35%,rgba(217,70,239,0.13),transparent_30%),radial-gradient(circle_at_25%_75%,rgba(99,102,241,0.08),transparent_28%)]" />

          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:100%_80px]" />
        </div>

        {/* Header */}

        <header className="relative z-10 border-b border-white/[0.07]">

          <div className="flex h-[76px] items-center justify-between px-10 xl:px-16">

            <Link
              href="/games"
              className="group flex items-center gap-4"
            >
              <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-fuchsia-400 transition group-hover:text-fuchsia-300">
                ← Back to Games
              </span>
            </Link>

            {/* Desktop date navigation */}

            <div className="flex items-center gap-7">

              <button
                type="button"
                onClick={goToPreviousDay}
                className="text-[8px] font-bold uppercase tracking-[0.3em] text-zinc-600 transition hover:text-fuchsia-400"
              >
                ← Previous
              </button>

              <div className="min-w-[135px] text-center">

                <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-fuchsia-400">
                  {isToday
                    ? "Today"
                    : formatChallengeDate(
                        selectedDate
                      )}
                </p>

                <p className="mt-1 text-[7px] uppercase tracking-[0.25em] text-zinc-700">
                  Daily Character
                </p>

              </div>

              <button
                type="button"
                onClick={goToNextDay}
                className="text-[8px] font-bold uppercase tracking-[0.3em] text-zinc-600 transition hover:text-fuchsia-400"
              >
                Next →
              </button>

            </div>

            <div className="flex items-center gap-8">

              <div className="text-right">

                <p className="text-[8px] font-semibold uppercase tracking-[0.35em] text-zinc-700">
                  Vault Arcade
                </p>

                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-zinc-400">
                  Daily Character
                </p>

              </div>

              <div className="h-8 w-px bg-white/[0.08]" />

            </div>

          </div>

        </header>

        {/* Desktop hero */}

        <section className="relative z-10 mx-auto flex min-h-[calc(100vh-76px)] max-w-[1500px] items-center px-10 py-12 xl:px-16">

          {/* Giant background typography */}

          <div className="pointer-events-none absolute left-[-35px] top-1/2 -translate-y-1/2 select-none">

            <p className="text-[180px] font-black uppercase leading-[0.78] tracking-[-0.09em] text-white/[0.025] xl:text-[230px]">
              Character
            </p>

          </div>

          {/* Left editorial column */}

          <div className="relative z-20 w-[42%] max-w-[570px]">

            <div className="mb-8 flex items-center gap-4">

              <span className="h-px w-12 bg-fuchsia-500" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.45em] text-fuchsia-400">
                Daily Character
              </span>

            </div>

            <h1 className="text-[76px] font-black uppercase leading-[0.86] tracking-[-0.07em] text-white xl:text-[92px]">
              Who
              <br />
              Am
              <br />
              I?
            </h1>

            <p className="mt-8 max-w-md text-sm leading-7 text-zinc-500">
              Identify this character from across the
              GTA universe. Every guess reveals more.
              Five attempts. One answer.
            </p>

            {/* Attempts */}

            <div className="mt-12 border-t border-white/[0.08] pt-6">

              <div className="flex items-end justify-between">

                <div>

                  <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-zinc-600">
                    Attempts
                  </p>

                  <p className="mt-2 text-2xl font-black tracking-tight text-white">
                    {completed
                      ? attempts
                          .toString()
                          .padStart(2, "0")
                      : `${attempts
                          .toString()
                          .padStart(2, "0")} / 05`}
                  </p>

                </div>

                {!completed && (
                  <div className="flex gap-2 pb-1">

                    {Array.from({
                      length: MAX_ATTEMPTS,
                    }).map((_, index) => (
                      <span
                        key={index}
                        className={`h-1 w-10 transition-all duration-500 ${
                          index < attempts
                            ? "bg-fuchsia-500 shadow-[0_0_12px_rgba(217,70,239,0.5)]"
                            : "bg-white/[0.08]"
                        }`}
                      />
                    ))}

                  </div>
                )}

              </div>

            </div>

            {/* Desktop Search */}

            {!completed && (
              <div className="relative mt-9">

                <div className="mb-3 flex items-center justify-between">

                  <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-zinc-500">
                    Enter Your Guess
                  </p>

                  <span className="text-[8px] font-semibold uppercase tracking-[0.25em] text-fuchsia-400/70">
                    {MAX_ATTEMPTS - attempts}{" "}
                    {MAX_ATTEMPTS - attempts === 1
                      ? "Attempt"
                      : "Attempts"}{" "}
                    Remaining
                  </span>

                </div>

                <div className="group relative flex items-center border border-white/[0.14] bg-white/[0.045] px-5 py-1 transition-all duration-300 focus-within:border-fuchsia-500/70 focus-within:bg-fuchsia-500/[0.035] focus-within:shadow-[0_0_35px_rgba(217,70,239,0.08)]">

                  <div className="mr-4 flex h-9 w-9 shrink-0 items-center justify-center border border-white/[0.08] bg-black/30">

                    <svg
                      className="h-4 w-4 text-fuchsia-400 transition-colors group-focus-within:text-fuchsia-300"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    >
                      <circle
                        cx="11"
                        cy="11"
                        r="7"
                      />
                      <path d="m20 20-4-4" />
                    </svg>

                  </div>

                  <input
                    type="text"
                    value={search}
                    onChange={(event) =>
                      setSearch(event.target.value)
                    }
                    placeholder="Search the Vault for a character..."
                    className="w-full bg-transparent py-4 text-sm font-medium text-white outline-none placeholder:text-zinc-600"
                    autoComplete="off"
                    autoCorrect="off"
                    spellCheck={false}
                  />

                  <span className="ml-4 hidden whitespace-nowrap text-[8px] font-semibold uppercase tracking-[0.25em] text-zinc-700 lg:block">
                    Type to search
                  </span>

                </div>

                {filteredCharacters.length > 0 && (
                  <div className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden border border-white/[0.1] bg-[#0b0b0f] shadow-2xl">

                    {filteredCharacters.map(
                      (item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() =>
                            submitGuess(item)
                          }
                          className="flex w-full items-center gap-4 border-b border-white/[0.05] px-4 py-3 text-left transition hover:bg-fuchsia-500/[0.06]"
                        >

                          <div className="relative h-10 w-10 shrink-0 overflow-hidden bg-zinc-900">

                            <Image
                              src={item.image}
                              alt=""
                              fill
                              className="object-cover"
                              sizes="40px"
                            />

                          </div>

                          <div>

                            <p className="text-[8px] uppercase tracking-[0.25em] text-zinc-600">
                              Character
                            </p>

                            <p className="mt-1 text-sm font-semibold text-zinc-200">
                              {item.name}
                            </p>

                          </div>

                        </button>
                      )
                    )}

                  </div>
                )}

                {search.trim() &&
                  filteredCharacters.length === 0 && (
                    <div className="absolute left-0 right-0 top-full z-50 mt-2 border border-white/[0.1] bg-[#0b0b0f] p-4">

                      <p className="text-xs text-zinc-600">
                        No characters found.
                      </p>

                    </div>
                  )}

                {feedback && (
                  <p
                    className={`mt-4 text-[9px] font-semibold uppercase tracking-[0.3em] ${
                      feedback === "Correct"
                        ? "text-emerald-400"
                        : "text-red-400"
                    }`}
                  >
                    {feedback}
                  </p>
                )}

              </div>
            )}

            {/* Desktop result */}

            {completed && (
              <div className="mt-10 border-t border-white/[0.08] pt-7">

                <p
                  className={`text-[9px] font-semibold uppercase tracking-[0.4em] ${
                    isCorrect
                      ? "text-emerald-400"
                      : "text-red-400"
                  }`}
                >
                  {isCorrect
                    ? "Identity Confirmed"
                    : "File Closed"}
                </p>

                <p className="mt-3 text-3xl font-black uppercase tracking-[-0.03em]">
                  {character.name}
                </p>

                <div className="mt-5 flex items-end gap-3">

                  <span className="text-5xl font-black tracking-[-0.05em]">
                    {score.toLocaleString()}
                  </span>

                  <span className="mb-2 text-[9px] uppercase tracking-[0.3em] text-zinc-600">
                    Points
                  </span>

                </div>

                <p className="mt-5 text-xs text-zinc-600">
                  Explore previous challenges or return tomorrow for a new character.
                </p>

                <div className="mt-5 flex items-center gap-3">

                  <Link
                    href="/games"
                    className="border border-white/[0.1] px-5 py-2.5 text-[8px] font-semibold uppercase tracking-[0.3em] text-zinc-400 transition hover:border-fuchsia-500/40 hover:text-fuchsia-400"
                  >
                    ← Back to Games
                  </Link>

                  <Link
                    href="/"
                    className="border border-fuchsia-500/40 bg-fuchsia-500/10 px-5 py-2.5 text-[8px] font-semibold uppercase tracking-[0.3em] text-fuchsia-400 transition hover:border-fuchsia-400 hover:bg-fuchsia-500/20 hover:text-fuchsia-300"
                  >
                    Home
                  </Link>

                </div>

              </div>
            )}

          </div>

          {/* Character visual */}

          <div className="relative ml-auto flex w-[55%] items-center justify-center">

            <div className="pointer-events-none absolute h-[650px] w-[650px] rounded-full bg-fuchsia-600/[0.06] blur-[130px]" />

            <div className="relative h-[680px] w-full max-w-[720px] overflow-hidden border border-white/[0.08] bg-[#09090c]">

              <div className="absolute left-5 top-5 z-20 h-5 w-5 border-l border-t border-fuchsia-400/70" />

              <div className="absolute right-5 top-5 z-20 h-5 w-5 border-r border-t border-fuchsia-400/70" />

              <div className="absolute bottom-5 left-5 z-20 h-5 w-5 border-b border-l border-fuchsia-400/70" />

              <div className="absolute bottom-5 right-5 z-20 h-5 w-5 border-b border-r border-fuchsia-400/70" />

              <Image
                src={character.image}
                alt="Mystery GTA character"
                fill
                priority
                className={`object-contain p-12 transition-[filter,transform] duration-1000 ${blurClass}`}
                sizes="720px"
              />

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.18),transparent_35%,transparent_65%,rgba(0,0,0,0.3))]" />

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(5,5,7,0.9),transparent_35%,rgba(5,5,7,0.08))]" />

              {!completed && (
                <>
                  <div className="absolute left-7 top-7 z-20">

                    <p className="text-[8px] font-semibold uppercase tracking-[0.35em] text-zinc-600">
                      Status
                    </p>

                    <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/70">
                      Identity Unknown
                    </p>

                  </div>

                  <div className="absolute bottom-7 left-7 z-20">

                    <p className="text-[8px] uppercase tracking-[0.35em] text-zinc-700">
                      GTA Vault / Character Database
                    </p>

                  </div>
                </>
              )}

              {completed && (
                <div className="absolute inset-x-0 bottom-0 z-20 p-8">

                  <p
                    className={`text-[9px] font-semibold uppercase tracking-[0.4em] ${
                      isCorrect
                        ? "text-emerald-400"
                        : "text-fuchsia-400"
                    }`}
                  >
                    {isCorrect
                      ? "Identity Confirmed"
                      : "Today's Character"}
                  </p>

                  <h2 className="mt-2 text-4xl font-black uppercase tracking-[-0.04em]">
                    {character.name}
                  </h2>

                </div>
              )}

            </div>

          </div>

        </section>

      </div>

      {/* =========================================================
          MOBILE
      ========================================================== */}

      <div className="min-h-screen w-full max-w-full overflow-x-clip md:hidden">

        {/* Mobile atmospheric background */}

        <div className="pointer-events-none absolute inset-0 overflow-hidden">

          <div className="absolute left-1/2 top-[-100px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-fuchsia-600/[0.08] blur-[110px]" />

          <div className="absolute bottom-0 right-[-100px] h-[350px] w-[350px] rounded-full bg-indigo-600/[0.06] blur-[100px]" />

        </div>

        {/* Mobile header */}

        <header className="relative z-10 border-b border-white/[0.07]">

          <div className="flex h-[64px] items-center justify-between px-5">

            <Link
              href="/games"
              className="text-[9px] font-semibold uppercase tracking-[0.3em] text-fuchsia-400"
            >
              ← Back to Games
            </Link>

            <div className="flex items-center gap-3">

              {/* Previous */}

              <button
                type="button"
                onClick={goToPreviousDay}
                className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/[0.12] bg-white/[0.03] p-0 text-xl font-medium leading-none text-zinc-300 transition active:border-fuchsia-500/40 active:bg-fuchsia-500/[0.08] active:text-fuchsia-400"
              >
                <span className="-translate-y-[2px]">
                  ←
                </span>
              </button>

              {/* Date */}

              <div className="min-w-[72px] text-center">

                <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-fuchsia-400">
                  {isToday
                    ? "Today"
                    : formatChallengeDate(
                        selectedDate
                      )}
                </p>

                <p className="mt-1 text-[7px] uppercase tracking-[0.2em] text-zinc-700">
                  Daily
                </p>

              </div>

              {/* Next */}

              <button
                type="button"
                onClick={goToNextDay}
                className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/[0.12] bg-white/[0.03] p-0 text-xl font-medium leading-none text-zinc-300 transition active:border-fuchsia-500/40 active:bg-fuchsia-500/[0.08] active:text-fuchsia-400"
              >
                <span className="-translate-y-[2px]">
                  →
                </span>
              </button>

            </div>

          </div>

        </header>

        <div className="relative z-10 w-full max-w-full px-5 pb-12 pt-8">

          {/* Mobile title */}

          <div className="mb-7">

            <div className="flex items-center gap-3">

              <span className="h-px w-8 bg-fuchsia-500" />

              <p className="text-[8px] font-semibold uppercase tracking-[0.4em] text-fuchsia-400">
                Daily Character
              </p>

            </div>

            <h1 className="mt-5 text-[48px] font-black uppercase leading-[0.88] tracking-[-0.07em]">
              Who Am
              <br />
              I?
            </h1>

            <p className="mt-4 max-w-[310px] text-xs leading-5 text-zinc-600">
              Identify this character. Five attempts.
              Less blur with every wrong guess.
            </p>

          </div>

          {/* Mobile image */}

          <div className="relative">

            <div className="pointer-events-none absolute inset-0 bg-fuchsia-500/[0.04] blur-3xl" />

            <div className="relative aspect-[4/5] overflow-hidden border border-white/[0.09] bg-[#09090c]">

              <div className="absolute left-4 top-4 z-20 h-4 w-4 border-l border-t border-fuchsia-400/70" />

              <div className="absolute right-4 top-4 z-20 h-4 w-4 border-r border-t border-fuchsia-400/70" />

              <div className="absolute bottom-4 left-4 z-20 h-4 w-4 border-b border-l border-fuchsia-400/70" />

              <div className="absolute bottom-4 right-4 z-20 h-4 w-4 border-b border-r border-fuchsia-400/70" />

              <Image
                src={character.image}
                alt="Mystery GTA character"
                fill
                priority
                className={`object-contain p-5 transition-[filter] duration-1000 ${blurClass}`}
                sizes="100vw"
              />

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(5,5,7,0.85),transparent_45%)]" />

              <div className="absolute left-8 top-5 z-20">

                <p className="mt-2 text-[8px] font-semibold uppercase tracking-[0.25em] text-white/50">
                  Identity Unknown
                </p>

              </div>

              {completed && (
                <div className="absolute inset-x-0 bottom-0 z-20 p-5">

                  <p
                    className={`text-[8px] font-semibold uppercase tracking-[0.35em] ${
                      isCorrect
                        ? "text-emerald-400"
                        : "text-fuchsia-400"
                    }`}
                  >
                    {isCorrect
                      ? "Identity Confirmed"
                      : "Today's Character"}
                  </p>

                  <h2 className="mt-1 text-2xl font-black uppercase tracking-[-0.03em]">
                    {character.name}
                  </h2>

                </div>
              )}

            </div>

          </div>

          {/* Mobile search */}

          {!completed && (
            <div className="relative mt-6">

              <p className="mb-3 text-[8px] font-semibold uppercase tracking-[0.35em] text-zinc-600">
                Identify Character
              </p>

              <div className="flex items-center border border-white/[0.1] bg-white/[0.025] px-4">

                <svg
                  className="mr-3 h-4 w-4 shrink-0 text-zinc-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                >
                  <circle
                    cx="11"
                    cy="11"
                    r="7"
                  />
                  <path d="m20 20-4-4" />
                </svg>

                <input
                  type="text"
                  value={search}
                  onChange={(event) =>
                    setSearch(event.target.value)
                  }
                  placeholder="Search the Vault..."
                  className="w-full bg-transparent py-4 text-sm text-white outline-none placeholder:text-zinc-700"
                  autoComplete="off"
                  autoCorrect="off"
                  spellCheck={false}
                />

              </div>

              {/* Mobile attempts */}

              <div className="mt-7 flex items-center justify-between border-y border-white/[0.07] py-5">

                <div>

                  <p className="text-[8px] font-semibold uppercase tracking-[0.35em] text-zinc-600">
                    Attempts
                  </p>

                  <p className="mt-1 text-xl font-black">
                    {completed
                      ? attempts
                          .toString()
                          .padStart(2, "0")
                      : `${attempts
                          .toString()
                          .padStart(2, "0")} / 05`}
                  </p>

                </div>

                {!completed && (
                  <div className="flex gap-1.5">

                    {Array.from({
                      length: MAX_ATTEMPTS,
                    }).map((_, index) => (
                      <span
                        key={index}
                        className={`h-1.5 w-7 ${
                          index < attempts
                            ? "bg-fuchsia-500"
                            : "bg-white/[0.08]"
                        }`}
                      />
                    ))}

                  </div>
                )}

              </div>

              {filteredCharacters.length > 0 && (
                <div className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden border border-white/[0.1] bg-[#0b0b0f] shadow-2xl">

                  {filteredCharacters.map(
                    (item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() =>
                          submitGuess(item)
                        }
                        className="flex w-full items-center gap-3 border-b border-white/[0.05] px-4 py-3 text-left last:border-0"
                      >

                        <div className="relative h-9 w-9 shrink-0 overflow-hidden bg-zinc-900">

                          <Image
                            src={item.image}
                            alt=""
                            fill
                            className="object-cover"
                            sizes="36px"
                          />

                        </div>

                        <span className="text-sm font-medium text-zinc-200">
                          {item.name}
                        </span>

                      </button>
                    )
                  )}

                </div>
              )}

              {search.trim() &&
                filteredCharacters.length === 0 && (
                  <div className="absolute left-0 right-0 top-full z-50 mt-2 border border-white/[0.1] bg-[#0b0b0f] p-4">

                    <p className="text-xs text-zinc-600">
                      No characters found.
                    </p>

                  </div>
                )}

              {feedback && (
                <p
                  className={`mt-4 text-center text-[8px] font-semibold uppercase tracking-[0.3em] ${
                    feedback === "Correct"
                      ? "text-emerald-400"
                      : "text-red-400"
                  }`}
                >
                  {feedback}
                </p>
              )}

            </div>
          )}

          {/* Mobile result */}

          {completed && (
            <div className="mt-6 border border-white/[0.08] bg-white/[0.02] p-6 text-center">

              <p
                className={`text-[8px] font-semibold uppercase tracking-[0.4em] ${
                  isCorrect
                    ? "text-emerald-400"
                    : "text-red-400"
                }`}
              >
                {isCorrect
                  ? "Identity Confirmed"
                  : "File Closed"}
              </p>

              <h2 className="mt-3 text-2xl font-black uppercase tracking-[-0.03em]">
                {character.name}
              </h2>

              <div className="mt-5">

                <p className="text-5xl font-black tracking-[-0.05em]">
                  {score.toLocaleString()}
                </p>

                <p className="mt-1 text-[8px] uppercase tracking-[0.3em] text-zinc-600">
                  Points
                </p>

              </div>

              <div className="mt-6 border-t border-white/[0.06] pt-5">

                <p className="text-[9px] text-zinc-600">
                  Explore previous challenges or return tomorrow for a new character.
                </p>

                <div className="mt-5 flex items-center justify-center gap-3">

                  <Link
                    href="/games"
                    className="border border-white/[0.1] px-5 py-2.5 text-[8px] font-semibold uppercase tracking-[0.3em] text-zinc-400 transition hover:border-fuchsia-500/40 hover:text-fuchsia-400"
                  >
                    ← Back to Games
                  </Link>

                  <Link
                    href="/"
                    className="border border-fuchsia-500/40 bg-fuchsia-500/10 px-5 py-2.5 text-[8px] font-semibold uppercase tracking-[0.3em] text-fuchsia-400 transition hover:border-fuchsia-400 hover:bg-fuchsia-500/20 hover:text-fuchsia-300"
                  >
                    Home
                  </Link>

                </div>

              </div>

            </div>
          )}

          {/* Mobile rules */}

          {!completed && (
            <div className="mt-10">

              <div className="mb-4 flex items-center gap-3">

                <span className="text-[8px] font-semibold uppercase tracking-[0.35em] text-zinc-600">
                  How It Works
                </span>

                <span className="h-px flex-1 bg-white/[0.06]" />

              </div>

              <div className="grid grid-cols-3 divide-x divide-white/[0.06] border-y border-white/[0.06]">

                <div className="px-3 py-4">

                  <p className="text-[8px] font-black text-fuchsia-400">
                    01
                  </p>

                  <p className="mt-2 text-[9px] leading-4 text-zinc-500">
                    Search
                    <br />
                    the Vault
                  </p>

                </div>

                <div className="px-3 py-4">

                  <p className="text-[8px] font-black text-fuchsia-400">
                    02
                  </p>

                  <p className="mt-2 text-[9px] leading-4 text-zinc-500">
                    Five
                    <br />
                    attempts
                  </p>

                </div>

                <div className="px-3 py-4">

                  <p className="text-[8px] font-black text-fuchsia-400">
                    03
                  </p>

                  <p className="mt-2 text-[9px] leading-4 text-zinc-500">
                    Less blur
                    <br />
                    each guess
                  </p>

                </div>

              </div>

            </div>
          )}

          {/* Footer */}

          <div className="mt-12 flex items-center justify-between border-t border-white/[0.06] pt-5">

            <p className="text-[7px] uppercase tracking-[0.3em] text-zinc-700">
              GTA Vault / Arcade
            </p>

            <p className="text-[7px] uppercase tracking-[0.3em] text-zinc-700">
              Character Database
            </p>

          </div>

        </div>

      </div>

    </main>
  );
}
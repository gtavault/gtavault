"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { timelines, TimelineEvent } from "@/lib/timelines";

const DAY_MS = 1000 * 60 * 60 * 24;
const TIMELINE_START_DATE = Date.UTC(2026, 9, 6);
const TIMELINE_START_KEY = "2026-10-06";

type SavedTimelineProgress = {
  scores: number[];
  completed: boolean[];
};

type SavedTimelineData = Record<string, SavedTimelineProgress>;

const positionStyles = [
  {
    text: "text-fuchsia-400",
    border: "border-fuchsia-500/40",
    bg: "bg-fuchsia-500/[0.06]",
    glow: "shadow-[0_0_30px_rgba(217,70,239,0.08)]",
  },
  {
    text: "text-violet-400",
    border: "border-violet-500/40",
    bg: "bg-violet-500/[0.06]",
    glow: "shadow-[0_0_30px_rgba(139,92,246,0.08)]",
  },
  {
    text: "text-cyan-400",
    border: "border-cyan-500/40",
    bg: "bg-cyan-500/[0.06]",
    glow: "shadow-[0_0_30px_rgba(34,211,238,0.08)]",
  },
  {
    text: "text-amber-400",
    border: "border-amber-500/40",
    bg: "bg-amber-500/[0.06]",
    glow: "shadow-[0_0_30px_rgba(251,191,36,0.08)]",
  },
];

function getDateKey(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function getTodayKey() {
  return getDateKey(new Date());
}

function getTimelineIndexesForDate(dateKey: string) {
  const [year, month, day] = dateKey.split("-").map(Number);

  const selectedUtc = Date.UTC(year, month - 1, day);

  const daysSinceStart = Math.floor(
    (selectedUtc - TIMELINE_START_DATE) / DAY_MS
  );

  const firstIndex =
    ((daysSinceStart * 2) % timelines.length + timelines.length) %
    timelines.length;

  const secondIndex = (firstIndex + 1) % timelines.length;

  return [firstIndex, secondIndex];
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

function shuffle<T>(items: T[]) {
  if (items.length <= 1) {
    return [...items];
  }

  const original = [...items];
  let shuffled = [...items];

  do {
    for (let i = shuffled.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));

      [shuffled[i], shuffled[randomIndex]] = [
        shuffled[randomIndex],
        shuffled[i],
      ];
    }
  } while (
    shuffled.every((item, index) => item === original[index])
  );

  return shuffled;
}

function getScoreStyle(score: number) {
  if (score >= 4000) {
    return {
      border: "border-emerald-500/30",
      bg: "bg-emerald-500/[0.08]",
      text: "text-emerald-400",
      glow: "shadow-[inset_0_0_40px_rgba(16,185,129,0.04)]",
    };
  }

  if (score >= 2501) {
    return {
      border: "border-amber-400/30",
      bg: "bg-amber-400/[0.07]",
      text: "text-amber-400",
      glow: "shadow-[inset_0_0_40px_rgba(251,191,36,0.04)]",
    };
  }

  if (score >= 1001) {
    return {
      border: "border-orange-500/30",
      bg: "bg-orange-500/[0.07]",
      text: "text-orange-400",
      glow: "shadow-[inset_0_0_40px_rgba(249,115,22,0.04)]",
    };
  }

  return {
    border: "border-red-500/30",
    bg: "bg-red-500/[0.07]",
    text: "text-red-400",
    glow: "shadow-[inset_0_0_40px_rgba(239,68,68,0.04)]",
  };
}

export default function TimelinePage() {
  const [selectedDate, setSelectedDate] = useState(getTodayKey);
  const [timelineIndexes, setTimelineIndexes] = useState<number[]>([]);
  const [currentTimeline, setCurrentTimeline] = useState(0);
  const [events, setEvents] = useState<TimelineEvent[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);
  const [scores, setScores] = useState<number[]>([0, 0]);
  const [completedRounds, setCompletedRounds] = useState<boolean[]>([
    false,
    false,
  ]);
  const [completed, setCompleted] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  useEffect(() => {
    const indexes = getTimelineIndexesForDate(selectedDate);

    setTimelineIndexes(indexes);

    let savedData: SavedTimelineData = {};

    try {
      const saved = localStorage.getItem("gta-timeline-completed");

      if (saved) {
        const parsed = JSON.parse(saved);

        if (parsed && typeof parsed === "object") {
          savedData = parsed;
        }
      }
    } catch {
      savedData = {};
    }

    const savedProgress = savedData[selectedDate];

    if (savedProgress) {
      setScores(savedProgress.scores);
      setCompletedRounds(savedProgress.completed);

      if (savedProgress.completed[0] && savedProgress.completed[1]) {
        setCompleted(true);
        setShowResults(true);
        setCurrentTimeline(1);
      } else if (savedProgress.completed[0]) {
        setCompleted(false);
        setShowResults(false);
        setCurrentTimeline(1);
      } else {
        setCompleted(false);
        setShowResults(false);
        setCurrentTimeline(0);
      }
    } else {
      setScores([0, 0]);
      setCompletedRounds([false, false]);
      setCompleted(false);
      setShowResults(false);
      setCurrentTimeline(0);
    }

    const startingRound =
      savedProgress?.completed[0] && !savedProgress?.completed[1]
        ? 1
        : 0;

    const timeline = timelines[indexes[startingRound]];

    if (timeline) {
      setEvents(shuffle(timeline.events));
    }

    setSubmitted(
      savedProgress?.completed[startingRound] ?? false
    );

    setCurrentScore(
      savedProgress?.scores[startingRound] ?? 0
    );

    setDraggedIndex(null);
  }, [selectedDate]);

  useEffect(() => {
    const todayKey = getTodayKey();

    const interval = window.setInterval(() => {
      if (getTodayKey() !== todayKey) {
        window.location.reload();
      }
    }, 1000);

    return () => window.clearInterval(interval);
  }, []);

  const correctEvents = useMemo(() => {
    const index = timelineIndexes[currentTimeline];

    if (index === undefined) {
      return [];
    }

    return timelines[index]?.events ?? [];
  }, [timelineIndexes, currentTimeline]);

  function moveEvent(index: number, direction: "up" | "down") {
    if (submitted) return;

    const newEvents = [...events];

    const targetIndex =
      direction === "up" ? index - 1 : index + 1;

    if (targetIndex < 0 || targetIndex >= newEvents.length) {
      return;
    }

    [newEvents[index], newEvents[targetIndex]] = [
      newEvents[targetIndex],
      newEvents[index],
    ];

    setEvents(newEvents);
  }

  function handleDragStart(index: number) {
    if (submitted) return;

    setDraggedIndex(index);
  }

  function handleDragOver(
    event: React.DragEvent<HTMLDivElement>,
    targetIndex: number
  ) {
    event.preventDefault();

    if (
      submitted ||
      draggedIndex === null ||
      draggedIndex === targetIndex
    ) {
      return;
    }

    const newEvents = [...events];

    const [draggedEvent] = newEvents.splice(
      draggedIndex,
      1
    );

    newEvents.splice(targetIndex, 0, draggedEvent);

    setEvents(newEvents);
    setDraggedIndex(targetIndex);
  }

  function handleDragEnd() {
    setDraggedIndex(null);
  }

  function submitTimeline() {
    if (submitted || events.length === 0) return;

    const correctPositions = events.filter(
      (event, index) =>
        event.id === correctEvents[index]?.id
    ).length;

    const roundScore = correctPositions * 1250;

    const newScores = [...scores];
    const newCompletedRounds = [...completedRounds];

    newScores[currentTimeline] = roundScore;
    newCompletedRounds[currentTimeline] = true;

    setCurrentScore(roundScore);
    setScores(newScores);
    setCompletedRounds(newCompletedRounds);
    setSubmitted(true);

    let savedData: SavedTimelineData = {};

    try {
      const saved = localStorage.getItem("gta-timeline-completed");

      if (saved) {
        const parsed = JSON.parse(saved);

        if (parsed && typeof parsed === "object") {
          savedData = parsed;
        }
      }
    } catch {
      savedData = {};
    }

    savedData[selectedDate] = {
      scores: newScores,
      completed: newCompletedRounds,
    };

    localStorage.setItem(
      "gta-timeline-completed",
      JSON.stringify(savedData)
    );

    if (currentTimeline === 1) {
      setCompleted(true);
      setShowResults(false);
    }
  }

  function nextTimeline() {
    const nextTimeline = 1;
    const timeline = timelines[timelineIndexes[nextTimeline]];

    if (!timeline) return;

    setCurrentTimeline(nextTimeline);
    setEvents(shuffle(timeline.events));
    setSubmitted(false);
    setCurrentScore(0);
    setDraggedIndex(null);
  }

  function goToPreviousDay() {
  if (selectedDate === TIMELINE_START_KEY) {
    return;
  }

  setSelectedDate(shiftDate(selectedDate, -1));
}

  function goToNextDay() {
    if (selectedDate === getTodayKey()) {
      return;
    }

    setSelectedDate(shiftDate(selectedDate, 1));
  }

  const totalScore = scores[0] + scores[1];



  const correctPositions = submitted
    ? events.filter(
        (event, index) =>
          event.id === correctEvents[index]?.id
      ).length
    : 0;

  if (
    timelineIndexes.length === 0 ||
    events.length === 0
  ) {
    return (
      <main className="min-h-screen bg-[#050507] text-white">
        <div className="flex min-h-screen items-center justify-center">
          <p className="text-[9px] uppercase tracking-[0.4em] text-zinc-600">
            Loading Timeline...
          </p>
        </div>
      </main>
    );
  }

  const isToday = selectedDate === getTodayKey();
const isFirstTimelineDay = selectedDate === TIMELINE_START_KEY;

  return (
    <main className="min-h-screen overflow-hidden bg-[#050507] text-white">

      {/* ========================================================= */}
      {/* DESKTOP */}
      {/* ========================================================= */}

      <div className="hidden min-h-screen lg:block">

        {/* Desktop header */}
        <header className="border-b border-white/[0.06]">
          <div className="mx-auto flex max-w-[1400px] items-center justify-between px-10 py-6">

            <Link
              href="/games"
              className="group flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.35em] text-fuchsia-400 transition hover:text-fuchsia-300"
            >
              <span className="text-base text-fuchsia-400 transition group-hover:-translate-x-1">
                ←
              </span>
              Back To Games
            </Link>

            {/* Date navigation */}
            <div className="flex items-center gap-7">

              <button
  type="button"
  disabled={isFirstTimelineDay}
  onClick={goToPreviousDay}
  className="text-[8px] font-bold uppercase tracking-[0.3em] text-zinc-600 transition hover:text-fuchsia-400 disabled:cursor-not-allowed disabled:opacity-20"
>
                ← Previous
              </button>

              <div className="min-w-[120px] text-center">
                <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-fuchsia-400">
                  {isToday
                    ? "Today"
                    : formatChallengeDate(selectedDate)}
                </p>

                <p className="mt-1 text-[7px] uppercase tracking-[0.25em] text-zinc-700">
                  Timeline {currentTimeline + 1} / 2
                </p>
              </div>

              <button
                type="button"
                disabled={isToday}
                onClick={goToNextDay}
                className="text-[8px] font-bold uppercase tracking-[0.3em] text-zinc-600 transition hover:text-fuchsia-400 disabled:cursor-not-allowed disabled:opacity-20"
              >
                Next →
              </button>

            </div>

          </div>
        </header>

        {!showResults ? (
          <section className="mx-auto max-w-[1400px] px-10 pb-20 pt-12">

            {/* Hero */}
            <div className="relative mb-9">

              <div className="absolute -left-24 top-0 h-48 w-48 rounded-full bg-fuchsia-600/[0.05] blur-3xl" />

              <div className="relative">
                <p className="text-[9px] font-bold uppercase tracking-[0.55em] text-fuchsia-400">
                  Chronology Test / 0{currentTimeline + 1}
                </p>

                <div className="mt-3 flex items-end justify-between gap-10">
                  <div>
                    <h2 className="text-6xl font-black uppercase leading-[0.82] tracking-[-0.065em] text-white">
                      Put It
                      <br />
                      <span className="text-zinc-300">
                        In Order.
                      </span>
                    </h2>
                  </div>

                  <div className="max-w-sm pb-1 text-right">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-600">
                      GTA V / Story chronology
                    </p>

                    <p className="mt-3 text-sm leading-6 text-zinc-500">
                      Drag the events into the order they
                      happened. Every position matters.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline board */}
            <div className="relative">

              <div className="absolute bottom-10 left-[29px] top-10 w-px bg-gradient-to-b from-fuchsia-500/40 via-violet-500/30 via-cyan-500/30 to-amber-500/40" />

              <div className="space-y-2.5">
                {events.map((event, index) => {
                  const style = positionStyles[index];

                  const correctIndex =
                    correctEvents.findIndex(
                      (item) => item.id === event.id
                    );

                  const isCorrectPosition =
                    submitted &&
                    correctIndex === index;

                  const isWrongPosition =
                    submitted &&
                    correctIndex !== index;

                  return (
                    <div
                      key={event.id}
                      draggable={!submitted}
                      onDragStart={() =>
                        handleDragStart(index)
                      }
                      onDragOver={(event) =>
                        handleDragOver(event, index)
                      }
                      onDragEnd={handleDragEnd}
                      className={`relative flex min-h-[100px] cursor-grab items-center gap-6 border bg-[#08080b] px-6 py-4 pl-6 transition-all duration-200 active:cursor-grabbing ${
                        draggedIndex === index
                          ? `${style.border} ${style.bg} opacity-60`
                          : submitted
                            ? isCorrectPosition
                              ? "border-emerald-500/30 bg-emerald-500/[0.04]"
                              : "border-red-500/20 bg-red-500/[0.025]"
                            : "border-white/[0.07] hover:bg-white/[0.025]"
                      }`}
                    >

                      <div className="relative z-10 shrink-0">
                        <div
                          className={`flex h-[58px] w-[58px] items-center justify-center border bg-[#050507] text-lg font-black transition ${
                            submitted
                              ? isCorrectPosition
                                ? "border-emerald-500/40 text-emerald-400"
                                : "border-red-500/30 text-red-400"
                              : `${style.border} ${style.text} ${style.glow}`
                          }`}
                        >
                          0{index + 1}
                        </div>
                      </div>

                      <div className="flex-1">
                        <p className="mb-1.5 text-[8px] font-bold uppercase tracking-[0.35em] text-zinc-700">
                          Event / Position 0{index + 1}
                        </p>

                        <p className="max-w-5xl text-base font-semibold leading-6 text-zinc-200">
                          {event.title}
                        </p>
                      </div>

                      {!submitted && (
                        <div className="flex shrink-0 items-center gap-1">
                          <button
                            type="button"
                            onClick={() =>
                              moveEvent(index, "up")
                            }
                            disabled={index === 0}
                            className="flex h-8 w-8 items-center justify-center border border-white/[0.06] text-zinc-600 transition hover:border-white/[0.15] hover:text-white disabled:opacity-20"
                          >
                            ↑
                          </button>

                          <button
                            type="button"
                            onClick={() =>
                              moveEvent(index, "down")
                            }
                            disabled={
                              index === events.length - 1
                            }
                            className="flex h-8 w-8 items-center justify-center border border-white/[0.06] text-zinc-600 transition hover:border-white/[0.15] hover:text-white disabled:opacity-20"
                          >
                            ↓
                          </button>

                          <div className="ml-3 text-zinc-700">
                            ⠿
                          </div>
                        </div>
                      )}

                      {submitted && (
                        <div
                          className={`text-lg font-black ${
                            isWrongPosition
                              ? "text-red-400"
                              : "text-emerald-400"
                          }`}
                        >
                          {isCorrectPosition ? "✓" : "×"}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Submit */}
            {!submitted && (
              <div className="mt-6 flex items-center justify-between border-t border-white/[0.06] pt-5">

                <div>
                  <p className="text-[8px] uppercase tracking-[0.35em] text-zinc-700">
                    Maximum Score
                  </p>

                  <p className="mt-1 text-sm font-bold text-zinc-500">
                    5,000
                  </p>
                </div>

                <button
                  type="button"
                  onClick={submitTimeline}
                  className="border border-fuchsia-500/40 bg-fuchsia-500/[0.08] px-12 py-4 text-[9px] font-bold uppercase tracking-[0.4em] text-fuchsia-400 transition hover:border-fuchsia-400 hover:bg-fuchsia-500/[0.16] hover:text-fuchsia-300"
                >
                  Submit Timeline →
                </button>
              </div>
            )}

            {/* Desktop result */}
            {submitted && (
              <div className="mt-9 border-t border-white/[0.07] pt-8">

                <div className="flex items-start justify-between gap-10">

                  <div>
                    <p
                      className={`text-[9px] font-bold uppercase tracking-[0.45em] ${
                        currentScore === 5000
                          ? "text-emerald-400"
                          : "text-fuchsia-400"
                      }`}
                    >
                      {currentScore === 5000
                        ? "Timeline Confirmed"
                        : "Timeline Submitted"}
                    </p>

                    <p className="mt-3 text-6xl font-black tracking-[-0.06em]">
                      {currentScore.toLocaleString()}
                    </p>

                    <p className="mt-2 text-[8px] uppercase tracking-[0.35em] text-zinc-700">
                      {correctPositions} / 4 Positions Correct
                    </p>
                  </div>

                  <div className="text-right">

                    <p className="text-[8px] uppercase tracking-[0.35em] text-zinc-700">
                      Correct Order
                    </p>

                    <div className="mt-4 grid grid-cols-2 gap-2">
                      {correctEvents.map((event, index) => (
                        <div
                          key={event.id}
                          className="border border-white/[0.06] px-5 py-3 text-left"
                        >
                          <span
                            className={`text-[8px] font-bold ${positionStyles[index].text}`}
                          >
                            0{index + 1}
                          </span>

                          <p className="mt-1 max-w-[260px] text-[10px] leading-4 text-zinc-500">
                            {event.title}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {currentTimeline === 0 ? (
                  <button
                    type="button"
                    onClick={nextTimeline}
                    className="mt-8 w-full border border-fuchsia-500/40 bg-fuchsia-500/[0.07] py-4 text-[9px] font-bold uppercase tracking-[0.4em] text-fuchsia-400 transition hover:border-fuchsia-400 hover:bg-fuchsia-500/[0.14]"
                  >
                    Continue To Timeline 02 →
                  </button>
                ) : (
                  <div className="mt-8 border-t border-white/[0.06] pt-8">

                    <div className="text-center">

                      <p className="text-[8px] font-bold uppercase tracking-[0.5em] text-fuchsia-400">
                        Timeline 02 Complete
                      </p>

                      <p className="mt-3 text-7xl font-black tracking-[-0.07em]">
                        {currentScore.toLocaleString()}
                      </p>

                      <p className="mt-2 text-[8px] uppercase tracking-[0.35em] text-zinc-400">
                        Timeline Score / 5,000
                      </p>

                    </div>

                    <button
                      type="button"
                      onClick={() => setShowResults(true)}
                      className="mt-8 w-full border border-fuchsia-500/40 bg-fuchsia-500/[0.08] py-4 text-[9px] font-bold uppercase tracking-[0.4em] text-fuchsia-400 transition hover:border-fuchsia-400 hover:bg-fuchsia-500/[0.14]"
                    >
                      View Results →
                    </button>

                  </div>
                )}

              </div>
            )}

          </section>
        ) : (
          /* Desktop completed */
          <section className="mx-auto flex min-h-[calc(100vh-85px)] w-full flex-col justify-center px-10 py-16">

            <div className="border border-white/[0.07] bg-[#08080b]">

              {/* Top */}
              <div className="flex items-center justify-between border-b border-white/[0.06] px-8 py-5">

                <p className="text-[9px] font-bold uppercase tracking-[0.45em] text-fuchsia-400">
                  Daily Challenge
                </p>

                <p className="text-[8px] uppercase tracking-[0.3em] text-zinc-700">
                  GTA V / Story Chronology
                </p>

              </div>

              {/* Main score */}
              <div className="px-8 py-12">

                <div className="flex items-end justify-between gap-10">

                  <div>

                    <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-zinc-600">
                      Challenge Complete
                    </p>

                    <h2 className="mt-3 text-7xl font-black uppercase leading-none tracking-[-0.07em] text-white">
                      {totalScore.toLocaleString()}
                    </h2>

                    <p className="mt-3 text-[10px] font-medium uppercase tracking-[0.35em] text-zinc-400">
                      Total Score / 10,000
                    </p>

                  </div>

                  <div className="text-right">

                    <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-zinc-400">
                      Performance
                    </p>

                    <p className="mt-2 text-sm font-bold text-zinc-300">
                      {scores[0] / 1250 + scores[1] / 1250} / 8
                    </p>

                    <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.3em] text-zinc-400">
                      Positions Correct
                    </p>

                  </div>

                </div>

                {/* Timeline scores */}
                <div className="mt-12 grid grid-cols-2 gap-3">

                  {[
                    {
                      label: "Timeline 01",
                      score: scores[0],
                      position: "01 / 02",
                    },
                    {
                      label: "Timeline 02",
                      score: scores[1],
                      position: "02 / 02",
                    },
                  ].map((timeline) => {

                    const style = getScoreStyle(timeline.score);

                    return (
                      <div
                        key={timeline.label}
                        className={`min-h-[150px] border px-6 py-5 transition-all duration-500 ${style.border} ${style.bg} ${style.glow}`}
                      >

                        <div className="flex items-center justify-between">

                          <p
                            className={`text-[8px] font-bold uppercase tracking-[0.35em] ${style.text}`}
                          >
                            {timeline.label}
                          </p>

                          <span className="text-[8px] text-zinc-700">
                            {timeline.position}
                          </span>

                        </div>

                        <p className="mt-4 text-3xl font-black tracking-[-0.04em] text-white">
                          {timeline.score.toLocaleString()}
                        </p>

                        <p className="mt-1 text-[8px] uppercase tracking-[0.3em] text-zinc-700">
                          / 5,000
                        </p>

                      </div>
                    );
                  })}

                </div>

                <p className="mt-7 text-[9px] leading-5 text-zinc-600">
                  Two timelines complete. Explore previous challenges or return tomorrow for two new ones.
                </p>

              </div>

              {/* Bottom */}
              <div className="flex items-center justify-between border-t border-white/[0.06] px-8 py-5">

                <p className="text-[8px] uppercase tracking-[0.35em] text-zinc-700">
                  New timelines every day
                </p>

                <div className="flex gap-3">

                  <Link
                    href="/games"
                    className="border border-white/[0.1] px-6 py-3 text-[8px] font-semibold uppercase tracking-[0.3em] text-zinc-500 transition hover:border-fuchsia-500/40 hover:text-fuchsia-400"
                  >
                    ← Back To Games
                  </Link>

                  <Link
                    href="/"
                    className="border border-fuchsia-500/40 bg-fuchsia-500/[0.08] px-6 py-3 text-[8px] font-semibold uppercase tracking-[0.3em] text-fuchsia-400 transition hover:border-fuchsia-400 hover:bg-fuchsia-500/[0.15]"
                  >
                    Home
                  </Link>

                </div>

              </div>

            </div>

          </section>
        )}

      </div>

      {/* ========================================================= */}
      {/* MOBILE */}
      {/* ========================================================= */}

      <div className="block min-h-screen lg:hidden">

        {/* Mobile header */}
        <header className="border-b border-white/[0.06]">

          <div className="flex items-center justify-between px-5 py-5">

            <Link
              href="/games"
              className="text-[8px] font-semibold uppercase tracking-[0.3em] text-fuchsia-400"
            >
              ← Back To Games
            </Link>

            <div className="flex items-center gap-3">
<button
  type="button"
  onClick={goToPreviousDay}
  className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/[0.12] bg-white/[0.03] p-0 text-xl font-medium leading-none text-zinc-300 transition active:border-fuchsia-500/40 active:bg-fuchsia-500/[0.08] active:text-fuchsia-400 disabled:cursor-not-allowed disabled:border-white/[0.12] disabled:bg-white/[0.03] disabled:text-zinc-700 disabled:opacity-40"
>
  <span className="-translate-y-[2px]">←</span>
</button>

              <div className="min-w-[70px] text-center">

                <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-fuchsia-400">
                  {isToday
                    ? "Today"
                    : formatChallengeDate(selectedDate)}
                </p>

                <p className="mt-1 text-[7px] uppercase tracking-[0.2em] text-zinc-700">
                  {currentTimeline + 1} / 2
                </p>

              </div>
<button
  type="button"
  onClick={goToNextDay}
  className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/[0.12] bg-white/[0.03] p-0 text-xl font-medium leading-none text-zinc-300 transition active:border-fuchsia-500/40 active:bg-fuchsia-500/[0.08] active:text-fuchsia-400"
>
  <span className="-translate-y-[2px]">→</span>
</button>
             

            </div>

          </div>

        </header>

        {!showResults ? (
          <section className="px-5 pb-16 pt-9">

            {/* Mobile hero */}
            <div>

              <p className="text-[8px] font-bold uppercase tracking-[0.45em] text-fuchsia-400">
                Chronology Test
              </p>

              <h2 className="mt-3 text-[48px] font-black uppercase leading-[0.84] tracking-[-0.065em]">
                Put It
                <br />
                <span className="text-zinc-300">
                  In Order.
                </span>
              </h2>

              <div className="mt-5 flex items-center justify-between border-t border-white/[0.06] pt-4">

                <p className="text-[8px] uppercase tracking-[0.3em] text-zinc-600">
                  Timeline 0{currentTimeline + 1}
                </p>

                <p className="text-[8px] uppercase tracking-[0.3em] text-zinc-600">
                  4 Events
                </p>

              </div>

            </div>

            <p className="mt-7 text-xs leading-5 text-zinc-500">
              Arrange the events from earliest to latest.
              Drag the cards or use the arrows.
            </p>

            {/* Mobile timeline */}
            <div className="relative mt-8">

              <div className="absolute bottom-8 left-[15px] top-8 w-px bg-gradient-to-b from-fuchsia-500/40 via-violet-500/30 via-cyan-500/30 to-amber-500/40" />

              <div className="space-y-3">

                {events.map((event, index) => {

                  const style = positionStyles[index];

                  const correctIndex =
                    correctEvents.findIndex(
                      (item) => item.id === event.id
                    );

                  const isCorrectPosition =
                    submitted &&
                    correctIndex === index;

                  const isWrongPosition =
                    submitted &&
                    correctIndex !== index;

                  return (
                    <div
                      key={event.id}
                      draggable={!submitted}
                      onDragStart={() =>
                        handleDragStart(index)
                      }
                      onDragOver={(event) =>
                        handleDragOver(event, index)
                      }
                      onDragEnd={handleDragEnd}
                      className={`relative ml-0 flex min-h-[112px] cursor-grab items-center gap-4 border bg-[#08080b] px-4 py-4 transition ${
                        draggedIndex === index
                          ? `${style.border} ${style.bg} opacity-60`
                          : submitted
                            ? isCorrectPosition
                              ? "border-emerald-500/30"
                              : "border-red-500/20"
                            : "border-white/[0.07]"
                      }`}
                    >

                      {/* Mobile position */}
                      <div
                        className={`relative z-10 flex h-9 w-9 shrink-0 items-center justify-center border bg-[#050507] text-[10px] font-black ${
                          submitted
                            ? isCorrectPosition
                              ? "border-emerald-500/40 text-emerald-400"
                              : "border-red-500/30 text-red-400"
                            : `${style.border} ${style.text}`
                        }`}
                      >
                        0{index + 1}
                      </div>

                      {/* Event */}
                      <div className="min-w-0 flex-1">

                        <p className="mb-1 text-[7px] font-bold uppercase tracking-[0.25em] text-zinc-700">
                          Position 0{index + 1}
                        </p>

                        <p className="text-[12px] font-semibold leading-5 text-zinc-200">
                          {event.title}
                        </p>

                      </div>

                      {!submitted && (
                        <div className="flex shrink-0 flex-col">

                          <button
                            type="button"
                            onClick={() =>
                              moveEvent(index, "up")
                            }
                            disabled={index === 0}
                            className="flex h-8 w-8 items-center justify-center text-sm text-zinc-600 disabled:opacity-15"
                          >
                            ↑
                          </button>

                          <button
                            type="button"
                            onClick={() =>
                              moveEvent(index, "down")
                            }
                            disabled={
                              index === events.length - 1
                            }
                            className="flex h-8 w-8 items-center justify-center text-sm text-zinc-600 disabled:opacity-15"
                          >
                            ↓
                          </button>

                        </div>
                      )}

                      {submitted && (
                        <span
                          className={`shrink-0 text-sm font-black ${
                            isCorrectPosition
                              ? "text-emerald-400"
                              : "text-red-400"
                          }`}
                        >
                          {isCorrectPosition ? "✓" : "×"}
                        </span>
                      )}

                    </div>
                  );
                })}

              </div>

            </div>

            {/* Mobile submit */}
            {!submitted && (
              <button
                type="button"
                onClick={submitTimeline}
                className="mt-6 w-full border border-fuchsia-500/40 bg-fuchsia-500/[0.08] py-4 text-[8px] font-bold uppercase tracking-[0.4em] text-fuchsia-400 transition active:bg-fuchsia-500/[0.15]"
              >
                Submit Timeline →
              </button>
            )}

            {/* Mobile result */}
            {submitted && (
              <div className="mt-8 border-t border-white/[0.07] pt-8">

                <div className="text-center">

                  <p
                    className={`text-[8px] font-bold uppercase tracking-[0.45em] ${
                      currentScore === 5000
                        ? "text-emerald-400"
                        : "text-fuchsia-400"
                    }`}
                  >
                    {currentScore === 5000
                      ? "Timeline Confirmed"
                      : "Timeline Submitted"}
                  </p>

                  <p className="mt-3 text-5xl font-black tracking-[-0.06em]">
                    {currentScore.toLocaleString()}
                  </p>

                  <p className="mt-1 text-[7px] uppercase tracking-[0.35em] text-zinc-700">
                    {correctPositions} / 4 Correct
                  </p>

                </div>

                <div className="mt-8">

                  <p className="text-[8px] font-bold uppercase tracking-[0.35em] text-zinc-700">
                    Correct Order
                  </p>

                  <div className="mt-3 space-y-2">

                    {correctEvents.map((event, index) => (
                      <div
                        key={event.id}
                        className="flex gap-3 border border-white/[0.06] px-3 py-3"
                      >

                        <span
                          className={`text-[8px] font-bold ${positionStyles[index].text}`}
                        >
                          0{index + 1}
                        </span>

                        <p className="text-[10px] leading-4 text-zinc-500">
                          {event.title}
                        </p>

                      </div>
                    ))}

                  </div>

                </div>

                {currentTimeline === 0 ? (
                  <button
                    type="button"
                    onClick={nextTimeline}
                    className="mt-6 w-full border border-fuchsia-500/40 bg-fuchsia-500/[0.08] py-4 text-[8px] font-bold uppercase tracking-[0.4em] text-fuchsia-400"
                  >
                    Next Timeline →
                  </button>
                ) : (
                  <>
                    <div className="mt-8 border-t border-white/[0.06] pt-8 text-center">

                      <p className="text-[8px] font-bold uppercase tracking-[0.45em] text-fuchsia-400">
                        Timeline 02 Complete
                      </p>

                      <p className="mt-3 text-5xl font-black tracking-[-0.06em]">
                        {currentScore.toLocaleString()}
                      </p>

                      <p className="mt-3 text-[10px] font-medium uppercase tracking-[0.35em] text-zinc-400">
                        Timeline Score / 5,000
                      </p>

                    </div>

                    <button
                      type="button"
                      onClick={() => setShowResults(true)}
                      className="mt-6 w-full border border-fuchsia-500/40 bg-fuchsia-500/[0.08] py-4 text-[8px] font-bold uppercase tracking-[0.4em] text-fuchsia-400 transition active:bg-fuchsia-500/[0.15]"
                    >
                      View Results →
                    </button>
                  </>
                )}

              </div>
            )}

          </section>
        ) : (
          /* Mobile completed */
          <section className="px-5 pb-10 pt-10">

            <div className="border border-white/[0.07] bg-[#08080b]">

              {/* Header */}
              <div className="border-b border-white/[0.06] px-5 py-4">

                <p className="text-[8px] font-bold uppercase tracking-[0.45em] text-fuchsia-400">
                  Daily Challenge
                </p>

                <p className="mt-1 text-[7px] uppercase tracking-[0.3em] text-zinc-700">
                  GTA V / Story Chronology
                </p>

              </div>

              {/* Score */}
              <div className="px-5 py-8">

                <p className="text-[8px] font-bold uppercase tracking-[0.4em] text-zinc-600">
                  Challenge Complete
                </p>

                <p className="mt-3 text-6xl font-black leading-none tracking-[-0.07em]">
                  {totalScore.toLocaleString()}
                </p>

                <p className="mt-3 text-[10px] font-medium uppercase tracking-[0.35em] text-zinc-400">
                  Total Score / 10,000
                </p>

                {/* Performance */}
                <div className="mt-7 flex items-center justify-between border-y border-white/[0.06] py-4">

                  <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-zinc-400">
                    Positions Correct
                  </p>

                  <p className="text-sm font-bold text-zinc-300">
                    {scores[0] / 1250 + scores[1] / 1250} / 8
                  </p>

                </div>

                {/* Timeline scores */}
                <div className="mt-5 space-y-2">

                  {[
                    {
                      label: "Timeline 01",
                      score: scores[0],
                    },
                    {
                      label: "Timeline 02",
                      score: scores[1],
                    },
                  ].map((timeline) => {

                    const style = getScoreStyle(timeline.score);

                    return (
                      <div
                        key={timeline.label}
                        className={`border px-4 py-4 transition-all duration-500 ${style.border} ${style.bg} ${style.glow}`}
                      >

                        <div className="flex items-center justify-between">

                          <span
                            className={`text-[8px] font-bold uppercase tracking-[0.3em] ${style.text}`}
                          >
                            {timeline.label}
                          </span>

                          <span className="text-sm font-black text-white">
                            {timeline.score.toLocaleString()}
                          </span>

                        </div>

                        <p className="mt-1 text-[7px] uppercase tracking-[0.25em] text-zinc-700">
                          / 5,000
                        </p>

                      </div>
                    );
                  })}

                </div>

                <p className="mt-6 text-[8px] leading-4 text-zinc-600">
                  Two timelines complete. Explore previous challenges or return tomorrow for two new ones.
                </p>

              </div>

              {/* Buttons */}
              <div className="flex gap-2 border-t border-white/[0.06] p-4">

                <Link
                  href="/games"
                  className="flex-1 border border-white/[0.1] py-3 text-center text-[7px] font-semibold uppercase tracking-[0.25em] text-zinc-500 transition hover:border-fuchsia-500/40 hover:text-fuchsia-400"
                >
                  ← Back To Games
                </Link>

                <Link
                  href="/"
                  className="flex-1 border border-fuchsia-500/40 bg-fuchsia-500/[0.08] py-3 text-center text-[7px] font-semibold uppercase tracking-[0.25em] text-fuchsia-400 transition hover:border-fuchsia-400"
                >
                  Home
                </Link>

              </div>

            </div>

          </section>
        )}

      </div>

      {/* Developer testing */}
     

    </main>
  );
}
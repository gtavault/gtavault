"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const games = [
  {
    number: "01",
    title: "GTA V Knowledge",
    image: "/games/quiz.jpg",
    category: "QUIZ",
    description:
      "10 questions. One score. Find out how well you really know Los Santos.",
    href: "/games/quiz",
    accent: "pink",
  },
  {
    number: "02",
    title: "Guess the Location",
    image: "/games/location1.jpg",
    category: "LOCATION",
    description:
      "Recognise the streets, landmarks and hidden corners of the GTA world.",
    href: "/games/location",
    accent: "cyan",
  },
  {
    number: "03",
    title: "Who Am I?",
    image: "/games/character.jpg",
    category: "CHARACTER",
    description:
      "Can you identify the characters from the smallest clues?",
    href: "/games/character",
    accent: "purple",
  },
  {
    number: "04",
    title: "GTA Timeline",
    image: "/games/timeline.jpg",
    category: "TIMELINE",
    description:
      "Put major GTA events in the correct chronological order.",
    href: "/games/timeline",
    accent: "orange",
  },
  {
  number: "05",
  title: "Higher or Lower",
  image: "/games/higher-lower.jpg",
  category: "HIGHER / LOWER",
  description:
    "Compare GTA vehicle prices and decide whether the next vehicle costs more or less.",
  href: "/games/higher-lower",
  accent: "emerald",
},
  {
    number: "06",
    title: "Quote Challenge",
    image: "/games/quotes.jpg",
    category: "QUOTES",
    description:
      "You know the quote. Now name the character who said it.",
    href: "/games/quotes",
    accent: "yellow",
  },
];

const DAY_MS = 1000 * 60 * 60 * 24;

// Game 01 starts the rotation on this date.
// 01 today → 02 tomorrow → 03 the day after, etc.
const FEATURED_START_DATE = Date.UTC(2026, 9, 5);

function getTodayKey() {
  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function getFeaturedGameIndex() {
  const today = new Date();

  const todayUtc = Date.UTC(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );

  const daysSinceStart = Math.floor(
    (todayUtc - FEATURED_START_DATE) / DAY_MS
  );

  return (
    ((daysSinceStart % games.length) + games.length) %
    games.length
  );
}

export default function GamesPage() {
  const [featuredIndex, setFeaturedIndex] = useState<number | null>(null);

  /*
   * Set today's featured game.
   */
  useEffect(() => {
    setFeaturedIndex(getFeaturedGameIndex());

    const startingDay = getTodayKey();

    /*
     * Keep checking the calendar date.
     * If the page is left open through midnight,
     * automatically move to the next featured game.
     */
    const interval = window.setInterval(() => {
      if (getTodayKey() !== startingDay) {
        window.location.reload();
      }
    }, 1000);

    return () => window.clearInterval(interval);
  }, []);

  /*
   * Prevent the server/client from rendering different
   * featured games during the initial hydration.
   */
  if (featuredIndex === null) {
    return (
      <main className="min-h-screen overflow-hidden bg-[#050507] text-white" />
    );
  }

  const featuredGame = games[featuredIndex];

  const libraryGames = games;

  return (
    <main className="min-h-screen overflow-hidden bg-[#050507] text-white">

      {/* ============================================================
          DESKTOP
          ============================================================ */}

      <div className="hidden lg:block">

        {/* Ambient atmosphere */}

        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -left-[15%] top-[5%] h-[700px] w-[700px] rounded-full bg-pink-500/[0.06] blur-[180px]" />

          <div className="absolute -right-[15%] top-[15%] h-[700px] w-[700px] rounded-full bg-cyan-400/[0.045] blur-[180px]" />

          <div className="absolute left-[35%] top-[55%] h-[600px] w-[600px] rounded-full bg-purple-500/[0.035] blur-[180px]" />
        </div>


        {/* ========================================================
            DESKTOP HERO
            ======================================================== */}

        <section className="relative overflow-hidden">

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(236,72,153,0.1),transparent_35%),radial-gradient(circle_at_10%_60%,rgba(34,211,238,0.055),transparent_32%)]" />

          <div
            className="pointer-events-none absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          <div className="relative mx-auto max-w-[1800px] px-12 pb-20 pt-10 xl:px-20">

            {/* Header */}

            <div className="flex items-center justify-between">

              <Link
                href="/"
                className="group flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.3em] text-white/40 transition hover:text-white"
              >
                <span className="text-lg transition-transform duration-300 group-hover:-translate-x-1">
                  ←
                </span>

                Back To Home
              </Link>

              <div className="flex items-center gap-3">

                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-pink-400 shadow-[0_0_12px_rgba(236,72,153,0.8)]" />

                <span className="text-[8px] font-black uppercase tracking-[0.35em] text-white/30">
                  Vault Arcade
                </span>

              </div>

            </div>


            {/* Hero content */}

            <div className="mt-20 grid grid-cols-[1fr_340px] items-end gap-20">

              <div>

                <p className="text-[9px] font-black uppercase tracking-[0.55em] text-pink-400">
                  GTA Vault / Arcade
                </p>

                <h1 className="mt-5 text-[100px] font-black leading-[0.78] tracking-[-0.085em] xl:text-[125px]">

                  PLAY
                  <br />

                  <span className="bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent">
                    THE
                  </span>
                  <br />

                  <span className="bg-gradient-to-r from-cyan-300 via-white to-pink-400 bg-clip-text text-transparent">
                    VAULT.
                  </span>

                </h1>

                <p className="mt-8 max-w-xl text-sm leading-7 text-white/45">
                  Six games. One arcade.
                  <br />
                  Test your GTA knowledge and compete for the highest scores.
                </p>

              </div>


              {/* Arcade information */}

              <div className="border-l border-white/[0.08] pl-8">

                <p className="mb-4 text-[8px] font-black uppercase tracking-[0.45em] text-pink-400">
                  The Vault Arcade
                </p>

                <div className="divide-y divide-white/[0.07]">

                  {games.map((game) => (

                    <Link
                      key={game.title}
                      href={game.href}
                      className="group flex items-center justify-between py-3.5 transition-all duration-300 first:pt-0 last:pb-0"
                    >

                      <div className="flex items-center gap-5">

                        <span className="text-[8px] font-black tracking-[0.25em] text-pink-400">
                          {game.number}
                        </span>

                        <div>

                          <p className="text-[7px] font-black uppercase tracking-[0.3em] text-white/30">
                            {game.category}
                          </p>

                          <p className="mt-1 text-sm font-black tracking-tight text-white/70 transition-colors group-hover:text-white">
                            {game.title}
                          </p>

                        </div>

                      </div>

                      <span className="text-xs text-white/15 transition-all duration-300 group-hover:translate-x-1 group-hover:text-pink-400">
                        →
                      </span>

                    </Link>

                  ))}

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ========================================================
            DESKTOP FEATURED GAME
            ======================================================== */}

        <section className="pt-10">

          <div className="mx-auto max-w-[1800px] px-12 xl:px-20">

            <div className="mb-4 flex items-end justify-between">

              <div>

                <p className="text-[8px] font-black uppercase tracking-[0.5em] text-pink-400">
                  01 / Featured
                </p>

                <h2 className="mt-3 text-4xl font-black tracking-[-0.05em]">
                  Today's game.
                </h2>

              </div>

            </div>

          </div>


          <Link
            href={featuredGame.href}
            className="group relative block h-[700px] w-full overflow-hidden border-y border-pink-500/15 bg-black"
          >

            <img
              src={featuredGame.image}
              alt={featuredGame.title}
              className="absolute inset-0 h-full w-full object-cover transition duration-[1400ms] ease-out group-hover:scale-[1.035]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-[#050507]/35 to-transparent" />

            <div className="absolute inset-0 bg-gradient-to-r from-[#050507]/75 via-[#050507]/25 to-transparent" />

            <div className="absolute right-[-100px] top-[-150px] h-[600px] w-[600px] rounded-full bg-pink-500/10 blur-[150px]" />

            <div className="relative mx-auto flex h-full max-w-[1800px] flex-col justify-between px-12 py-10 xl:px-20">

              <div>

                <span className="rounded-full bg-pink-500 px-5 py-2.5 text-[8px] font-black uppercase tracking-[0.3em] shadow-[0_0_35px_rgba(236,72,153,0.25)]">
                  Featured Game
                </span>

              </div>


              <div className="max-w-xl">

                <p className="text-[8px] font-black uppercase tracking-[0.4em] text-white/40">
                  Daily Challenge
                </p>

                <h3 className="mt-3 text-6xl font-black leading-[0.82] tracking-[-0.07em] xl:text-7xl">
                  {featuredGame.title}
                </h3>

                <p className="mt-5 max-w-lg text-sm leading-7 text-white/55">
                  {featuredGame.description}
                </p>

                <div className="mt-7 inline-flex items-center gap-4 rounded-full bg-white px-7 py-3.5 text-[9px] font-black uppercase tracking-[0.25em] text-black transition duration-300 group-hover:bg-pink-400 group-hover:shadow-[0_0_35px_rgba(236,72,153,0.3)]">
                  Play Challenge

                  <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>

                </div>

              </div>

            </div>

          </Link>

        </section>


        {/* ========================================================
            DESKTOP GAME LIBRARY
            ======================================================== */}

        <section className="pb-24 pt-14">

          {/* Library heading */}

          <div className="mx-auto max-w-[1800px] px-12 pb-7 xl:px-20">

            <p className="text-[8px] font-black uppercase tracking-[0.5em] text-pink-400">
              02 / The Arcade
            </p>

            <div className="mt-3">

              <h2 className="text-5xl font-black tracking-[-0.06em]">
                Choose your game.
              </h2>

              <p className="mt-3 text-sm text-white/35">
                Explore every game in the Vault Arcade.
              </p>

            </div>

          </div>


          {/* FIVE GAME STRIP */}

          <div className="grid w-full grid-cols-6 border-y border-white/[0.08]">

            {libraryGames.map((game) => (

              <Link
                key={game.title}
                href={game.href}
               className="group relative block h-[600px] overflow-hidden border-l border-white/[0.08] bg-[#0a0a0e] first:border-l-0"
              >

                {/* Image */}

                <img
                  src={game.image}
                  alt={game.title}
                  className={`absolute inset-0 h-full w-full object-cover transition duration-[1200ms] ease-out group-hover:scale-[1.04] ${
                    game.number === "02"
                      ? "object-[85%_center]"
                      : "object-center"
                  }`}
                />


                {/* Dark cinematic overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-[#050507]/55 to-[#050507]/10" />

                <div className="absolute inset-0 bg-gradient-to-r from-[#050507]/45 via-transparent to-transparent" />


                {/* Subtle hover glow */}

                <div className="absolute inset-0 bg-pink-500/0 transition duration-700 group-hover:bg-pink-500/[0.035]" />


                {/* Large background number */}

                <span className="absolute -right-4 -top-8 text-[170px] font-black leading-none tracking-[-0.12em] text-white/[0.045] transition duration-700 group-hover:text-pink-400/[0.08]">
                  {game.number}
                </span>


                {/* Card content */}

                <div className="relative flex h-full flex-col justify-between p-7 xl:p-9">

                  {/* Top */}

                  <div className="flex items-center justify-between">

                    <span className="text-[8px] font-black uppercase tracking-[0.3em] text-pink-400">
                      {game.number} / 06
                    </span>

                    <span className="rounded-full border border-white/10 bg-black/25 px-4 py-2 text-[7px] font-black uppercase tracking-[0.2em] text-white/60 backdrop-blur-sm transition duration-300 group-hover:border-pink-400/40 group-hover:bg-pink-500/10 group-hover:text-white">
                      Play
                    </span>

                  </div>


                  {/* Bottom */}

                  <div>

                    <p className="text-[8px] font-black uppercase tracking-[0.35em] text-white/40">
                      {game.category}
                    </p>

                    <h3 className="mt-2 text-3xl font-black leading-[0.9] tracking-[-0.05em] xl:text-4xl">
                      {game.title}
                    </h3>

                    <p className="mt-4 max-w-[240px] text-[11px] leading-5 text-white/35">
                      {game.description}
                    </p>

                    <div className="mt-6 flex items-center justify-between border-t border-white/[0.1] pt-4">

                      <span className="text-[8px] font-black uppercase tracking-[0.25em] text-white/45">
                        Play game
                      </span>

                      <span className="text-base text-pink-400 transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>

                    </div>

                  </div>

                </div>

              </Link>

            ))}

          </div>

        </section>

      </div>


      {/* ============================================================
          MOBILE
          ============================================================ */}

      <div className="lg:hidden">

        {/* Ambient atmosphere */}

        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">

          <div className="absolute -left-[70%] top-[5%] h-[500px] w-[500px] rounded-full bg-pink-500/[0.07] blur-[130px]" />

          <div className="absolute -right-[70%] top-[35%] h-[600px] w-[600px] rounded-full bg-cyan-400/[0.045] blur-[150px]" />

        </div>


        {/* MOBILE HERO */}

        <section className="relative overflow-hidden">

          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
              backgroundSize: "34px 34px",
            }}
          />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_30%,rgba(236,72,153,0.1),transparent_40%),radial-gradient(circle_at_0%_60%,rgba(34,211,238,0.06),transparent_35%)]" />

          <div className="relative px-5 pb-14 pt-7">

            {/* Header */}

            <div className="flex items-center justify-between">

              <Link
                href="/"
                className="flex items-center gap-2 text-[8px] font-black uppercase tracking-[0.3em] text-white/40"
              >
                <span className="text-base">
                  ←
                </span>
                Back To Home
              </Link>

              <div className="flex items-center gap-2">

                <span className="h-1.5 w-1.5 rounded-full bg-pink-400 shadow-[0_0_10px_rgba(236,72,153,0.8)]" />

                <span className="text-[7px] font-black uppercase tracking-[0.3em] text-white/30">
                  Arcade
                </span>

              </div>

            </div>


            {/* Title */}

            <div className="mt-16">

              <p className="text-[7px] font-black uppercase tracking-[0.45em] text-pink-400">
                GTA Vault / Arcade
              </p>

              <h1 className="mt-4 text-[62px] font-black leading-[0.78] tracking-[-0.075em]">

                PLAY
                <br />

                <span className="bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent">
                  THE
                </span>
                <br />

                <span className="bg-gradient-to-r from-cyan-300 via-white to-pink-400 bg-clip-text text-transparent">
                  VAULT.
                </span>

              </h1>

              <p className="mt-7 max-w-xs text-xs leading-6 text-white/45">
                Six games. One arcade. Test your GTA knowledge and compete
                for the highest scores.
              </p>

            </div>


            {/* CHALLENGE NAVIGATION STRIP */}

            <div className="mt-10 -mx-5 border-y border-white/[0.08] bg-[#09090d]/80 backdrop-blur-xl sm:-mx-8 lg:-mx-12">

              <div className="mx-auto max-w-[1500px]">

                <div className="flex items-center overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">

                  <div className="flex min-w-max">

                    {games.map((game, index) => {

                      const number = String(index + 1).padStart(2, "0");

                      return (
                        <Link
                          key={game.title}
                          href={game.href}
                          className="group relative flex min-w-[150px] flex-col justify-center border-r border-white/[0.08] px-6 py-5 transition-all duration-300 first:border-l hover:bg-pink-500/[0.05] sm:min-w-[175px] sm:px-8 lg:min-w-[205px] lg:py-6"
                        >

                          <div className="flex items-center justify-between gap-5">

                            <span className="text-[9px] font-black tracking-[0.25em] text-white/25 transition-colors group-hover:text-pink-400">
                              {number}
                            </span>

                            <span className="text-[11px] text-white/15 transition-all duration-300 group-hover:translate-x-1 group-hover:text-pink-400">
                              →
                            </span>

                          </div>

                          <p className="mt-3 text-[9px] font-black uppercase tracking-[0.18em] text-white/45 transition-colors group-hover:text-white">
                            {game.category}
                          </p>

                          <p className="mt-1 max-w-[140px] text-sm font-black leading-tight text-white">
                            {game.title}
                          </p>

                        </Link>
                      );

                    })}

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* MOBILE FEATURED GAME */}

        <section className="pt-0">

          <div className="mb-5 flex items-end justify-between px-5">

            <div>

              <p className="text-[7px] font-black uppercase tracking-[0.45em] text-pink-400">
                01 / Featured
              </p>

              <h2 className="mt-2 text-3xl font-black tracking-[-0.05em]">
                Today's game.
              </h2>

            </div>

            <span className="text-[7px] font-black uppercase tracking-[0.25em] text-white/25">
              Play →
            </span>

          </div>


          <Link
            href={featuredGame.href}
            className="group relative block h-[460px] w-full overflow-hidden"
          >

            <img
              src={featuredGame.image}
              alt={featuredGame.title}
              className="absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-[#050507]/45 to-transparent" />

            <div className="absolute inset-0 bg-gradient-to-r from-[#050507]/45 via-transparent to-transparent" />

            <div className="absolute left-5 top-5">

              <span className="rounded-full bg-pink-500 px-4 py-2 text-[7px] font-black uppercase tracking-[0.25em]">
                Featured Game
              </span>

            </div>

            <div className="relative flex h-full flex-col justify-end p-6">

              <p className="text-[7px] font-black uppercase tracking-[0.35em] text-white/40">
                Daily Challenge
              </p>

              <h3 className="mt-3 text-[44px] font-black leading-[0.82] tracking-[-0.065em]">
                {featuredGame.title}
              </h3>

              <p className="mt-4 max-w-xs text-xs leading-5 text-white/55">
                {featuredGame.description}
              </p>

              <div className="mt-6 inline-flex w-fit items-center gap-3 rounded-full bg-white px-5 py-3 text-[7px] font-black uppercase tracking-[0.2em] text-black transition group-hover:bg-pink-400">
                Play Challenge
                <span className="text-sm">
                  →
                </span>
              </div>

            </div>

          </Link>

        </section>


        {/* MOBILE GAME LIBRARY */}

        <section className="px-5 pb-16 pt-14">

          <div className="mb-6">

            <p className="text-[7px] font-black uppercase tracking-[0.45em] text-pink-400">
              02 / The Arcade
            </p>

            <h2 className="mt-2 text-3xl font-black tracking-[-0.05em]">
              Choose your game.
            </h2>

            <p className="mt-2 text-xs text-white/35">
              Explore every game in the Vault Arcade.
            </p>

          </div>


          <div className="space-y-4">

            {libraryGames.map((game) => (

              <Link
                key={game.title}
                href={game.href}
                className="group relative block h-[230px] overflow-hidden rounded-[22px] border border-white/[0.1] bg-[#0a0a0e]"
              >

                <img
                  src={game.image}
                  alt={game.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-[#050507]/55 to-[#050507]/10" />

                <div className="absolute inset-0 bg-gradient-to-r from-[#050507]/65 via-transparent to-transparent" />


                {/* Number */}

                <span className="absolute -right-2 -top-6 text-[130px] font-black leading-none tracking-[-0.12em] text-white/[0.05]">
                  {game.number}
                </span>


                <div className="relative flex h-full flex-col justify-between p-5">

                  <div className="flex items-center justify-between">

                    <span className="text-[8px] font-black uppercase tracking-[0.3em] text-pink-400">
                      {game.number} / 06
                    </span>

                    <span className="rounded-full border border-white/10 bg-black/25 px-3 py-1.5 text-[6px] font-black uppercase tracking-[0.2em] text-white/60 backdrop-blur-sm">
                      Play
                    </span>

                  </div>


                  <div>

                    <p className="text-[7px] font-black uppercase tracking-[0.35em] text-white/40">
                      {game.category}
                    </p>

                    <h3 className="mt-2 text-2xl font-black tracking-[-0.04em]">
                      {game.title}
                    </h3>

                    <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3">

                      <span className="text-[7px] font-black uppercase tracking-[0.25em] text-white/50">
                        Play game
                      </span>

                      <span className="text-sm text-pink-400 transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>

                    </div>

                  </div>

                </div>

              </Link>

            ))}

          </div>

        </section>

      </div>

    </main>
  );
}
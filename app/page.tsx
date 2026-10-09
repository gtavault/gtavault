"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Countdown from "@/components/Countdown";
import {
  vaultScore,
  vaultScoreColor,
} from "@/lib/vault-score";

const arcadeGames = [
  ["01", "GTA V Knowledge", "QUIZ", "/games/quiz.jpg"],
  ["02", "Guess the Location", "LOCATION", "/games/location1.jpg"],
  ["03", "Who Am I?", "CHARACTER", "/games/character.jpg"],
  ["04", "GTA Timeline", "TIMELINE", "/games/timeline.jpg"],
  ["05", "Higher or Lower", "CHALLENGE", "/games/higher-lower.jpg"],
  ["06", "Quote Challenge", "QUOTES", "/games/quotes.jpg"],
];
const featuredGames = [
  {
    number: "01",
    title: "GTA V Knowledge",
    category: "QUIZ",
    image: "/games/quiz.jpg",
    href: "/games/quiz",
    description:
      "Ten questions. One score. Find out how well you really know Los Santos.",
  },
  {
    number: "02",
    title: "Guess the Location",
    category: "LOCATION",
    image: "/games/location1.jpg",
    href: "/games/location",
    description:
      "Study the map, trust your instincts and pinpoint locations across Los Santos.",
  },
  {
    number: "03",
    title: "Who Am I?",
    category: "CHARACTER",
    image: "/games/character.jpg",
    href: "/games/character",
    description:
      "Identify the character before your attempts run out.",
  },
  {
    number: "04",
    title: "GTA Timeline",
    category: "TIMELINE",
    image: "/games/timeline.jpg",
    href: "/games/timeline",
    description:
      "Put iconic GTA V events into the correct chronological order.",
  },
  {
    number: "05",
    title: "Higher or Lower",
    category: "CHALLENGE",
    image: "/games/higher-lower.jpg",
    href: "/games/higher-lower",
    description:
      "Compare vehicles and decide which one costs more. How long can you survive?",
  },
  {
    number: "06",
    title: "Quote Challenge",
    category: "QUOTES",
    image: "/games/quotes.jpg",
    href: "/games/quotes",
    description:
      "Match the quote to the GTA character who said it.",
  },
];

const worldItems = [
  ["/vehicles", "/home/vehicles-v2.webp", "01", "Vehicles", "Supercars, boats, bikes and every confirmed vehicle."],
  ["/heists", "/home/heists.jpg", "02", "Heists & Crimes", "Robberies, police, wanted levels and criminal gameplay."],
  ["/guides", "/home/guides.jpg", "03", "Guides", "Maps, tips, gameplay systems and everything you need."],
];

export default function Home() {
  const [activeWorld, setActiveWorld] = useState(0);

  const [featuredGameIndex, setFeaturedGameIndex] = useState(0);

  const DAY_MS = 1000 * 60 * 60 * 24;
  const FEATURED_START_DATE = Date.UTC(2026, 9, 5);

  useEffect(() => {
    function updateFeaturedGame() {
      const today = new Date();

      const todayUtc = Date.UTC(
        today.getFullYear(),
        today.getMonth(),
        today.getDate()
      );

      const daysSinceStart = Math.floor(
        (todayUtc - FEATURED_START_DATE) / DAY_MS
      );

      const index =
        ((daysSinceStart % featuredGames.length) +
          featuredGames.length) %
        featuredGames.length;

      setFeaturedGameIndex(index);
    }

    updateFeaturedGame();

    const now = new Date();
    const tomorrow = new Date(now);

    tomorrow.setHours(24, 0, 0, 0);

    const timeout = window.setTimeout(() => {
      updateFeaturedGame();
      window.location.reload();
    }, tomorrow.getTime() - now.getTime());

    return () => window.clearTimeout(timeout);
  }, []);

  const featuredGame = featuredGames[featuredGameIndex];


  return (
    <main className="min-h-screen overflow-hidden bg-[#050507] text-white">

      {/* ============================================================
          DESKTOP REVOLUTION
          ============================================================ */}

      <div className="hidden lg:block">

        {/* Ambient atmosphere */}

        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">

          <div className="absolute -left-[20%] top-[5%] h-[700px] w-[700px] rounded-full bg-cyan-500/[0.06] blur-[180px] animate-pulse" />

          <div className="absolute -right-[20%] top-[20%] h-[800px] w-[800px] rounded-full bg-pink-500/[0.055] blur-[200px] animate-pulse" />

          <div className="absolute left-[35%] top-[55%] h-[600px] w-[600px] rounded-full bg-purple-500/[0.035] blur-[180px]" />

        </div>


        {/* ========================================================
            CINEMATIC OPENING
            ======================================================== */}

        <section className="relative h-[calc(100vh-80px)] min-h-[720px] max-h-[1000px]">

          {/* Background image */}

          <div className="absolute inset-0 overflow-hidden">

            <img
              src="/news/latest.jpg"
              alt=""
              className="h-full w-full scale-[1.08] object-cover opacity-35"
            />

            <div className="absolute inset-0 bg-[#050507]/65" />

            <div className="absolute inset-0 bg-gradient-to-r from-[#050507] via-[#050507]/65 to-[#050507]/20" />

            <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-[#050507]/70" />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_45%,rgba(236,72,153,0.16),transparent_35%),radial-gradient(circle_at_20%_40%,rgba(34,211,238,0.1),transparent_30%)]" />

          </div>


          {/* Film grain / scanlines */}

          <div
            className="pointer-events-none absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          <div className="pointer-events-none absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-pink-500/50 to-transparent" />

          <div className="pointer-events-none absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent" />


          {/* Hero content */}

         <div className="vault-fade-in relative mx-auto flex h-full max-w-[1800px] flex-col justify-between px-12 py-12 xl:px-20">

            {/* Top information */}

            <div className="mb-6 flex items-start justify-between">

              <div>

                <div className="flex items-center gap-4">

                  <div className="h-10 w-[2px] bg-gradient-to-b from-cyan-400 via-purple-400 to-pink-500" />

                  <div>

                    <p className="text-[10px] font-black uppercase tracking-[0.55em]">
                      GTA Vault
                    </p>

                    <p className="mt-1 text-[8px] font-black uppercase tracking-[0.35em] text-white/35">
                      The GTA VI intelligence archive
                    </p>

                  </div>

                </div>

              </div>


              <div className="text-right">

                <p className="text-[8px] font-black uppercase tracking-[0.45em] text-white/30">
                  Archive status
                </p>

                <div className="mt-2 flex items-center justify-end gap-2">

                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.9)] animate-pulse" />

                  <span className="text-[8px] font-black uppercase tracking-[0.25em] text-emerald-300/80">
                    Live
                  </span>

                </div>

              </div>

            </div>



{/* DESKTOP WEEKLY VAULT SCORE */}
<div className="absolute right-12 top-28 z-30 w-[250px] xl:right-20">
  <Link
    href="/weekly"
    className="group relative block overflow-hidden rounded-2xl border bg-[#07152c]/95 p-6 shadow-[0_0_35px_rgba(59,130,246,0.25),0_20px_70px_rgba(0,0,0,0.6)] backdrop-blur-xl transition duration-500 hover:-translate-y-1"
    style={{ borderColor: vaultScoreColor }}
  >
    <div className="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full bg-blue-500/25 blur-[65px]" />
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-cyan-400/10" />
    <div className="relative">
      <div className="flex items-center justify-between">
        <span
          className="text-[8px] font-black uppercase tracking-[0.3em]"
          style={{ color: vaultScoreColor }}
        >
          Weekly Intelligence
        </span>
        <span
          className="h-2 w-2 animate-pulse rounded-full"
          style={{
            backgroundColor: vaultScoreColor,
            boxShadow: `0 0 12px ${vaultScoreColor}`,
          }}
        />
      </div>
      <div className="mt-6">
        <p
          className="text-[10px] font-black uppercase tracking-[0.4em]"
          style={{ color: vaultScoreColor }}
        >
          Vault Score
        </p>
        <div className="mt-2 flex items-baseline gap-2">
          <span
            className="text-8xl font-black leading-none tracking-[-0.09em]"
            style={{ color: vaultScoreColor }}
          >
            {vaultScore}
          </span>
          <span
            className="text-xs font-bold"
            style={{ color: vaultScoreColor }}
          >
            /100
          </span>
        </div>
      </div>
      <div className="mt-6 h-[5px] w-full overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{
            width: `${vaultScore}%`,
            backgroundColor: vaultScoreColor,
          }}
        />
      </div>
      <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
        <span
          className="text-[8px] font-black uppercase tracking-[0.25em]"
          style={{ color: vaultScoreColor }}
        >
          This week
        </span>
        <span
          className="text-[8px] font-black uppercase tracking-[0.2em] transition duration-300 group-hover:translate-x-1"
          style={{ color: vaultScoreColor }}
        >
          View report →
        </span>
      </div>
    </div>
  </Link>
</div>

            {/* Main title */}

            <div className="relative">

              


              <h1 className="text-[110px] font-black leading-[0.78] tracking-[-0.085em] xl:text-[145px]">

                GRAND
                <br />

                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-zinc-500">
                  THEFT
                </span>

                <br />

                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-pink-500">
                  AUTO VI
                </span>

              </h1>


              <div className="mt-9 flex items-end justify-between">

                <div>

                  <p className="max-w-xl text-sm leading-7 text-white/55 xl:text-base">
                    Your central archive for the next generation of Grand Theft
                    Auto. News, characters, vehicles, story, media and more.
                  </p>

                 
<div className="mt-7 flex items-center gap-4">
  <Link
    href="/news"
    className="group rounded-full bg-white px-7 py-3 text-[9px] font-black uppercase tracking-[0.25em] text-black transition duration-300 hover:bg-pink-400 hover:shadow-[0_0_35px_rgba(236,72,153,0.3)]"
  >
    Latest News
    <span className="ml-3 inline-block transition-transform duration-300 group-hover:translate-x-1">
      →
    </span>
  </Link>

  <Link
    href="/weekly"
    className="group rounded-full border border-pink-500/40 bg-black/20 px-7 py-3 text-[9px] font-black uppercase tracking-[0.25em] text-white/80 backdrop-blur-sm transition duration-300 hover:border-pink-400 hover:bg-pink-500/10 hover:text-white"
  >
    Vault Score
    <span className="ml-3 inline-block text-pink-400 transition-transform duration-300 group-hover:translate-x-1">
      →
    </span>
  </Link>
</div>


                </div>


                {/* Release counter */}

                <div className="hidden xl:block text-right">

                  <p className="text-[8px] font-black uppercase tracking-[0.45em] text-white/30">
                    Grand Theft Auto VI
                  </p>

                  <p className="mt-2 text-[9px] font-bold text-white/50">
                    Worldwide release · 19 November 2026
                  </p>

                  <div className="mt-4 text-3xl font-black tracking-[0.04em] text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-pink-400">
                    <Countdown />
                  </div>

                </div>

              </div>

            </div>


            {/* Bottom cinematic strip */}

            <div className="flex items-center justify-between pt-6">

              <div className="flex items-center gap-10">

                <span className="text-[8px] font-black uppercase tracking-[0.35em] text-white/25">
                   Homepage
                </span>

                <span className="h-px w-20 bg-white/10" />

                <span className="text-[8px] font-black uppercase tracking-[0.35em] text-white/25">
                  Vice City · Leonida
                </span>

              </div>

              <span className="animate-bounce text-[8px] font-black uppercase tracking-[0.35em] text-white/25">
                Scroll to explore ↓
              </span>

            </div>

          </div>

        </section>


       
{/* DESKTOP VAULT SCORE — INTELLIGENCE STRIP */}
<section
  className="relative overflow-hidden border-y bg-[#080b14]/90 backdrop-blur-xl"
  style={{ borderColor: vaultScoreColor }}
>
  <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-cyan-400/[0.06]" />
  <div
    className="absolute left-0 top-0 h-px w-full opacity-70"
    style={{
      background: `linear-gradient(to right, transparent, ${vaultScoreColor}, transparent)`,
    }}
  />
  <Link
    href="/weekly"
    className="group relative mx-auto flex max-w-[1800px] items-center justify-between gap-6 px-12 py-5 transition-colors hover:bg-blue-400/[0.03] xl:px-20"
  >
    <div className="flex items-center gap-5">
      <div
        className="h-11 w-[3px] rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"
        style={{ backgroundColor: vaultScoreColor }}
      />
      <div>
        <div className="flex items-center gap-2">
          <span
            className="h-1.5 w-1.5 animate-pulse rounded-full"
            style={{
              backgroundColor: vaultScoreColor,
              boxShadow: `0 0 10px ${vaultScoreColor}`,
            }}
          />
          <p
            className="text-[7px] font-black uppercase tracking-[0.45em]"
            style={{ color: vaultScoreColor }}
          >
            Weekly Intelligence
          </p>
        </div>
        <p
          className="mt-1 text-sm font-black uppercase tracking-[0.18em]"
          style={{ color: vaultScoreColor }}
        >
          Vault Score
        </p>
      </div>
    </div>
    <div className="flex flex-1 items-center justify-center gap-5">
      <span
        className="text-[8px] font-black uppercase tracking-[0.3em]"
        style={{ color: vaultScoreColor }}
      >
        GTA Online
      </span>
      <span
        className="h-1 w-1 rounded-full"
        style={{ backgroundColor: vaultScoreColor }}
      />
      <span
        className="text-[9px] font-medium"
        style={{ color: vaultScoreColor }}
      >
        This week's analysis is live
      </span>
    </div>
    <div className="flex items-center gap-7">
      <div className="flex items-baseline gap-1">
        <span
          className="text-3xl font-black leading-none tracking-[-0.06em]"
          style={{ color: vaultScoreColor }}
        >
          {vaultScore}
        </span>
        <span
          className="text-[9px] font-bold"
          style={{ color: vaultScoreColor }}
        >
          /100
        </span>
      </div>
      <div className="h-1.5 w-[90px] overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{
            width: `${vaultScore}%`,
            backgroundColor: vaultScoreColor,
          }}
        />
      </div>
      <span
        className="text-[8px] font-black uppercase tracking-[0.25em] transition duration-300 group-hover:translate-x-1"
        style={{ color: vaultScoreColor }}
      >
        View report <span className="ml-1 inline-block">→</span>
      </span>
    </div>
  </Link>
</section>


        {/* ========================================================
            ARCADE FEATURE
            ======================================================== */}

        <section className="mx-auto max-w-[1800px] px-12 pt-24 xl:px-20">

          <div className="mb-8 flex items-end justify-between">

            <div>

              <p className="text-[8px] font-black uppercase tracking-[0.5em] text-pink-400">
                01 / Vault Arcade
              </p>

              <h2 className="mt-3 text-5xl font-black tracking-[-0.05em]">
                Play the Vault.
              </h2>

            </div>

            <Link
              href="/games"
              className="text-[8px] font-black uppercase tracking-[0.3em] text-white/30 transition hover:text-pink-400"
            >
              All games →
            </Link>

          </div>


          <div className="grid min-h-[660px] grid-cols-[1.7fr_0.8fr] overflow-hidden rounded-[38px] border border-pink-500/20 bg-black shadow-[0_35px_120px_rgba(236,72,153,0.08)]">

{/* Featured game */}

<div className="group relative overflow-hidden">

  <img
    src={featuredGame.image}
    alt={featuredGame.title}
    className="absolute inset-0 h-full w-full object-cover transition duration-[1500ms] ease-out group-hover:scale-105"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent" />

  <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-transparent to-transparent" />

  <div className="absolute left-10 top-10">

    <span className="rounded-full bg-pink-500 px-5 py-2.5 text-[8px] font-black uppercase tracking-[0.3em] shadow-[0_0_40px_rgba(236,72,153,0.35)]">
      Today's Game
    </span>

  </div>

  <div className="relative flex h-full flex-col justify-end p-12">

    <p className="text-[8px] font-black uppercase tracking-[0.4em] text-white/45">
      Daily Challenge · {featuredGame.number}
    </p>

    <h3 className="mt-4 max-w-3xl text-6xl font-black leading-[0.82] tracking-[-0.06em]">
      {featuredGame.title}
    </h3>

    <p className="mt-6 max-w-lg text-sm leading-7 text-white/60">
      {featuredGame.description}
    </p>

    <div className="mt-8 flex items-center gap-4">

      <Link
        href={featuredGame.href}
        className="relative z-20 inline-flex items-center rounded-full bg-white px-7 py-3.5 text-xs font-black uppercase tracking-wider text-black transition hover:bg-pink-400"
      >
        Start Challenge →
      </Link>

      <Link
        href="/games"
        className="relative z-20 inline-flex items-center rounded-full bg-pink-500 px-7 py-3.5 text-xs font-black uppercase tracking-wider text-white"
      >
        All Games →
      </Link>

    </div>

  </div>

</div>

            <div className="relative bg-[#09090b]">

              <div
                className="absolute inset-0 opacity-[0.035]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />

              <div className="relative p-9">

                <p className="text-[8px] font-black uppercase tracking-[0.4em] text-white/25">
                  Other Games
                </p>

                <h3 className="mt-2 text-2xl font-black">
                  The arcade is growing.
                </h3>

                <div className="mt-8">

                {arcadeGames.map(([number, title, category]) => {
  const row = (
    <div
      className="group flex items-center justify-between border-t border-white/[0.06] py-5"
    >
      <div className="flex items-center gap-5">

        <span className="text-[8px] font-black text-white/15">
          {number}
        </span>

        <div>

          <p className="text-xs font-bold text-white/45 transition group-hover:text-white">
            {title}
          </p>

          <p className="mt-1 text-[7px] font-black uppercase tracking-[0.3em] text-white/15">
            {category}
          </p>

        </div>

      </div>

      <span className="text-white/15 transition group-hover:translate-x-1 group-hover:text-pink-400">
        →
      </span>

    </div>
  );

  const hrefs: Record<string, string> = {
    "01": "/games/quiz",
    "02": "/games/location",
    "03": "/games/character",
    "04": "/games/timeline",
    "05": "/games/higher-lower",
    "06": "/games/quotes",
  };

  if (hrefs[number]) {
    return (
      <Link
        key={title}
        href={hrefs[number]}
        className="block"
      >
        {row}
      </Link>
    );
  }

  return (
    <div key={title}>
      {row}
    </div>
  );
})}

                </div>

                <Link
                  href="/games"
                  className="mt-7 inline-flex text-[8px] font-black uppercase tracking-[0.3em] text-pink-400"
                >
                  Enter Arcade →
                </Link>

              </div>

            </div>

          </div>

        </section>


        
{/* ========================================================
    NEWS — FULL-BLEED CINEMATIC
    ======================================================== */}

<section className="relative w-full overflow-hidden pt-28">


  {/* Section heading */}
  <div className="relative z-10 mx-auto flex max-w-[1800px] items-center justify-between px-12 pt-5 xl:px-20">
    <div>
      <p className="text-[8px] font-black uppercase tracking-[0.5em] text-pink-400">
        02 / Newsroom
      </p>
      <h2 className="mt-3 text-5xl font-black tracking-[-0.05em]">
        What's happening.
      </h2>
    </div>

    <Link
      href="/news"
      className="group text-[8px] font-black uppercase tracking-[0.3em] text-white/45 transition hover:text-pink-400"
    >
      Enter Newsroom
      <span className="ml-3 inline-block transition-transform group-hover:translate-x-1">
        →
      </span>
    </Link>
  </div>

  {/* Cinematic feature */}
  <Link
    href="/news"
    className="group relative mt-8 flex min-h-[680px] w-full items-end overflow-hidden lg:min-h-[760px] xl:min-h-[820px]"
  >
    <img
     src="/news/news-hero.jpg"
      alt="Latest GTA VI news"
      className="absolute inset-0 h-full w-full object-cover object-center transition duration-[1800ms] ease-out group-hover:scale-[1.035]"
    />
<div className="pointer-events-none absolute inset-x-0 top-0 h-120 bg-gradient-to-b from-[#050507]/90 via-[#050507]/40 to-transparent" />
    <div className="absolute inset-0 bg-gradient-to-r from-[#050507]/95 via-[#050507]/55 to-transparent" />
    <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-[#050507]/20 to-transparent" />
    <div className="absolute inset-0 bg-gradient-to-b from-[#050507]/20 to-transparent" />

    {/* Decorative number */}
    

    {/* Content */}
    <div className="relative z-10 mx-auto w-full max-w-[1800px] px-12 pb-20 pt-24 xl:px-20 xl:pb-28">

      <div className="flex items-center gap-3">
        <span className="h-2 w-2 animate-pulse rounded-full bg-pink-400 shadow-[0_0_15px_rgba(236,72,153,0.9)]" />
        <p className="text-[9px] font-black uppercase tracking-[0.5em] text-pink-400">
          Featured Story
        </p>
      </div>

      <h3 className="mt-8 max-w-5xl text-7xl font-black leading-[0.78] tracking-[-0.075em] xl:text-[110px]">
        LATEST
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/45">
          GTA VI
        </span>
        <br />
        NEWS
      </h3>

      <p className="mt-9 max-w-xl text-base leading-8 text-white/65 xl:text-lg">
        Breaking updates, Rockstar announcements and everything
        happening in the world of Grand Theft Auto VI.
      </p>

      <div className="mt-10 flex items-center gap-5">
        <span className="inline-flex items-center gap-4 border-b border-pink-400/70 pb-3 text-[9px] font-black uppercase tracking-[0.35em] text-white transition group-hover:border-white">
          Explore the Newsroom
          <span className="text-pink-400 transition-transform duration-300 group-hover:translate-x-2">
            →
          </span>
        </span>
      </div>

    </div>
  </Link>

</section>



       
{/* ========================================================
    STORY + MEDIA — EDITORIAL PAIR
    ======================================================== */}

<section className="mx-auto max-w-[1800px] px-12 pt-24 xl:px-20">

  <div className="mb-8 flex items-center gap-4">
    
    <p className="text-[8px] font-black uppercase tracking-[0.5em] text-pink-400">
      03 / Inside GTA VI
    </p>
  </div>

  <div className="grid grid-cols-[1.35fr_0.85fr] gap-6">

    {/* STORY — MAIN FEATURE */}

    <Link
      href="/story"
      className="group relative flex min-h-[470px] flex-col justify-end overflow-hidden rounded-[32px] border border-purple-500/20 bg-[#0b0b10]"
    >
      <img
        src="/story/home-story.jpg"
        alt="GTA VI Story"
        className="absolute inset-0 h-full w-full object-cover transition duration-[1400ms] ease-out group-hover:scale-[1.04]"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-[#050507]/45 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#050507]/50 to-transparent" />

      <div className="relative z-10 p-10 xl:p-12">
        <p className="text-[8px] font-black uppercase tracking-[0.45em] text-purple-300">
          03 / Story
        </p>

        <h3 className="mt-4 text-5xl font-black tracking-[-0.06em] xl:text-6xl">
          Jason & Lucia
        </h3>

        <p className="mt-4 max-w-md text-sm leading-7 text-white/65">
          Character profiles, theories and every official story reveal.
        </p>

        <div className="mt-7 inline-flex items-center gap-3 border-b border-purple-400/60 pb-2 text-[8px] font-black uppercase tracking-[0.3em] text-white transition group-hover:border-white">
          Explore the Story
          <span className="text-purple-300 transition-transform duration-300 group-hover:translate-x-2">
            →
          </span>
        </div>
      </div>
    </Link>

    {/* MEDIA — COMPACT ARCHIVE */}

    <Link
      href="/media"
      className="group flex min-h-[470px] flex-col overflow-hidden rounded-[32px] border border-pink-500/20 bg-[#0b0b10] transition duration-500 hover:border-pink-400/40"
    >
      <div className="relative h-[260px] shrink-0 overflow-hidden">
        <img
          src="/media/home-media.jpg"
          alt="GTA VI Media Archive"
          className="absolute inset-0 h-full w-full object-cover transition duration-[1400ms] ease-out group-hover:scale-[1.05]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b10] via-transparent to-transparent" />

       
      </div>

      <div className="flex flex-1 flex-col justify-center px-8 pb-8 pt-5 xl:px-10">
        <p className="text-[8px] font-black uppercase tracking-[0.45em] text-pink-300">
          04 / Media
        </p>

        <h3 className="mt-3 text-3xl font-black leading-[0.95] tracking-[-0.05em] xl:text-4xl">
          Screenshots
          <br />
          & Trailers
        </h3>

        <p className="mt-4 text-xs leading-6 text-white/45">
          Explore official trailers, artwork and screenshots from GTA VI.
        </p>

        <div className="mt-6 flex items-center justify-between border-t border-white/[0.08] pt-5">
          <span className="text-[8px] font-black uppercase tracking-[0.3em] text-white/65 transition group-hover:text-white">
            Open Media Archive
          </span>
          <span className="text-pink-400 transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </div>
      </div>
    </Link>

  </div>
</section>



        


{/* ========================================================
    WORLD — OVERLAPPING EDITORIAL GALLERY
    ======================================================== */}

<section className="relative w-full overflow-hidden pb-32 pt-28">

  {/* Section heading */}
  <div className="relative z-20 mx-auto mb-4 max-w-[1800px] px-12 xl:px-20">
   <p className="text-[7px] font-black uppercase tracking-[0.45em] text-pink-400">
  04 / Leonida / The Collection
</p>
    <div className="mt-3 flex items-end justify-between">
      <div>
        <h2 className="text-5xl font-black tracking-[-0.06em]">
          Explore The World.
        </h2>
        <p className="mt-3 text-sm text-white/40">
          Discover the world of Grand Theft Auto VI.
        </p>
      </div>
      <span className="mb-1 text-[8px] font-bold uppercase tracking-[0.3em] text-white/30">
        Explore the archive ↗
      </span>
    </div>
  </div>

  {/* Gallery */}
  <div className="relative mx-auto mt-12 h-[590px] max-w-[1500px] px-12">

    {worldItems.map(([href, image, number, title, description], index) => (
      <Link
        key={href}
        href={href}
        className={`group absolute overflow-hidden rounded-[5px] border border-white/[0.12] bg-[#0b0b10] shadow-[0_25px_80px_rgba(0,0,0,0.55)] transition-all duration-700 ease-out
          ${
            index === 0
              ? "left-[3%] top-[75px] z-10 h-[400px] w-[32%] hover:z-30 hover:-translate-y-2"
              : index === 1
              ? "left-1/2 top-0 z-20 h-[490px] w-[36%] -translate-x-1/2 hover:-translate-y-2"
              : "right-[3%] top-[75px] z-10 h-[400px] w-[32%] hover:z-30 hover:-translate-y-2"
          }`}
      >
        {/* Image */}
        <img
          src={image}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover transition duration-[1500ms] ease-out group-hover:scale-110"
        />

        {/* Image treatments */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-[#050507]/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-black/10 transition duration-700 group-hover:bg-transparent" />

        {/* Content */}
        <div className="relative flex h-full flex-col justify-between p-7 xl:p-9">

          <div className="flex items-center justify-between">
            <span className="text-[8px] font-black uppercase tracking-[0.3em] text-white/60">
              {String(Number(number)).padStart(2, "0")} / 03
            </span>
           
          </div>

          <div>
            <div className="mb-4 h-px w-10 bg-pink-400 transition-all duration-500 group-hover:w-20" />

            <h3 className={`font-black tracking-[-0.055em] text-white ${
              index === 1 ? "text-4xl xl:text-5xl" : "text-3xl xl:text-4xl"
            }`}>
              {title}
            </h3>

            <p className="mt-3 max-w-sm text-xs leading-6 text-white/65">
              {description}
            </p>

            <div className="mt-5 flex items-center gap-3 text-[8px] font-black uppercase tracking-[0.3em] text-white/75 transition group-hover:text-pink-400">
              Explore
              <span className="transition-transform duration-300 group-hover:translate-x-2">
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
          MOBILE — COMPLETELY DIFFERENT EXPERIENCE
          ============================================================ */}

      <div className="lg:hidden">

        {/* Mobile ambient atmosphere */}

        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">

          <div className="absolute -left-[70%] top-[5%] h-[500px] w-[500px] rounded-full bg-cyan-400/[0.06] blur-[130px]" />

          <div className="absolute -right-[70%] top-[35%] h-[650px] w-[650px] rounded-full bg-pink-500/[0.055] blur-[150px]" />

        </div>


        {/* ========================================================
            MOBILE HERO
            ======================================================== */}

        <section className="relative min-h-[560px] overflow-hidden">

          <div className="absolute inset-0">

            <img
              src="/news/latest.jpg"
              alt=""
              className="h-full w-full scale-[1.15] object-cover opacity-30"
            />

            <div className="absolute inset-0 bg-[#050507]/70" />

            <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-[#050507]/45 to-[#050507]/80" />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_45%,rgba(236,72,153,0.14),transparent_40%),radial-gradient(circle_at_10%_25%,rgba(34,211,238,0.1),transparent_35%)]" />

          </div>


          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
              backgroundSize: "34px 34px",
            }}
          />


          <div className="relative flex min-h-[660px] flex-col px-6 py-7">

            {/* Header */}

            <div className="flex items-start justify-between">

              <div className="flex items-center gap-3">

                <span className="h-8 w-[2px] bg-gradient-to-b from-cyan-400 to-pink-500" />

                <div>

                  <p className="text-[8px] font-black uppercase tracking-[0.45em]">
                    GTA Vault
                  </p>

                  <p className="mt-1 text-[6px] font-black uppercase tracking-[0.3em] text-white/30">
                    GTA VI Intelligence Archive
                  </p>

                </div>

              </div>

              <span className="text-[7px] font-black uppercase tracking-[0.3em] text-white/25">
                LIVE
              </span>

            </div>




            {/* Main title */}

<div className="mt-20">

           

              <h1 className="text-[58px] font-black leading-[0.82] tracking-[-0.07em]">

                GRAND
                <br />

                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">
                  THEFT
                </span>

                <br />

                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-pink-400">
                  AUTO VI
                </span>

              </h1>

              <p className="mt-7 max-w-xs text-xs leading-5 text-white/50">
                The independent GTA VI archive for news, story, vehicles,
                media, guides and more.
              </p>

             
<div className="mt-6 flex flex-wrap gap-3">
  <Link
    href="/news"
    className="group rounded-full bg-white px-5 py-2.5 text-[7px] font-black uppercase tracking-[0.2em] text-black transition duration-300 hover:bg-pink-400"
  >
    Latest News
    <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
      →
    </span>
  </Link>

  <Link
    href="/weekly"
    className="group rounded-full border border-pink-500/40 bg-black/20 px-5 py-2.5 text-[7px] font-black uppercase tracking-[0.2em] text-white/80 backdrop-blur-sm transition duration-300 hover:border-pink-400 hover:bg-pink-500/10 hover:text-white"
  >
    Vault Score
    <span className="ml-2 inline-block text-pink-400 transition-transform duration-300 group-hover:translate-x-1">
      →
    </span>
  </Link>
</div>


            </div>


            {/* Mobile release module */}

            <div className="mt-auto pt-5">

              <div className="flex items-end justify-between">

                <div>

                  <p className="text-[6px] font-black uppercase tracking-[0.35em] text-white/25">
                    Worldwide release
                  </p>

                  <p className="mt-1 text-[9px] font-bold text-white/45">
                    19 November 2026
                  </p>

                </div>

                <div className="text-right">

                  <p className="mb-1 text-[6px] font-black uppercase tracking-[0.35em] text-white/25">
                    Releases in
                  </p>

                  <div className="text-[19px] font-black tracking-[0.02em] text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-pink-400">
                    <Countdown />
                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>


       

{/* MOBILE VAULT SCORE — INTELLIGENCE STRIP */}
<section
  className="relative overflow-hidden border-y bg-[#080b14]/90 pt-5 backdrop-blur-xl"
  style={{ borderColor: vaultScoreColor }}
>
  <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-cyan-400/[0.06]" />
  <div
    className="absolute left-0 top-0 h-px w-full opacity-70"
    style={{
      background: `linear-gradient(to right, transparent, ${vaultScoreColor}, transparent)`,
    }}
  />
  <Link
    href="/weekly"
    className="group relative flex -translate-y-2 items-center justify-between gap-3 px-5 py-2"
  >
    <div className="flex min-w-0 items-center gap-3">
      <div
        className="h-8 w-[3px] shrink-0 rounded-full shadow-[0_0_12px_rgba(59,130,246,0.5)]"
        style={{ backgroundColor: vaultScoreColor }}
      />
      <div className="min-w-0">
        <div className="flex items-center gap-2">
          <span
            className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full"
            style={{
              backgroundColor: vaultScoreColor,
              boxShadow: `0 0 10px ${vaultScoreColor}`,
            }}
          />
          <p
            className="text-[7px] font-black uppercase tracking-[0.3em]"
            style={{ color: vaultScoreColor }}
          >
            Weekly Intelligence
          </p>
        </div>
        <p
          className="mt-1 text-xs font-black uppercase tracking-[0.12em]"
          style={{ color: vaultScoreColor }}
        >
          Vault Score
        </p>
       
      </div>
    </div>
    <div className="flex shrink-0 items-center gap-3">
      <div className="text-right">
        <p
          className="text-[7px] font-black uppercase tracking-[0.2em]"
          style={{ color: vaultScoreColor }}
        >
          Score
        </p>
        <div className="mt-1 flex items-baseline justify-end gap-1">
          <span
            className="text-2xl font-black leading-none tracking-[-0.06em]"
            style={{ color: vaultScoreColor }}
          >
            {vaultScore}
          </span>
          <span
            className="text-[8px] font-bold"
            style={{ color: vaultScoreColor }}
          >
            /100
          </span>
        </div>
      </div>
      <span
        className="text-lg transition-transform duration-300 group-hover:translate-x-1"
        style={{ color: vaultScoreColor }}
      >
        →
      </span>
    </div>
  </Link>
  <div className="relative h-[3px] w-full bg-white/[0.06]">
    <div
      className="h-full transition-all duration-500"
      style={{
        width: `${vaultScore}%`,
        backgroundColor: vaultScoreColor,
      }}
    />
  </div>
</section>

{/* MOBILE ARCADE */}

<section className="pt-14">

  {/* Heading */}
  <div className="mb-5 flex items-end justify-between px-5">
    <div>
      <p className="text-[7px] font-black uppercase tracking-[0.45em] text-pink-400">
        01 / Vault Arcade
      </p>
      <h2 className="mt-2 text-3xl font-black tracking-[-0.04em]">
        Play the Vault.
      </h2>
    </div>

    <Link
      href="/games"
      className="text-[7px] font-black uppercase tracking-[0.25em] text-white/30"
    >
      All games →
    </Link>
  </div>

  {/* Featured game — full width */}

<div className="group relative block h-[430px] w-full overflow-hidden">

  <img
    src={featuredGame.image}
    alt={featuredGame.title}
    className="absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-105"
  />

  <div className="absolute inset-0 bg-gradient-to-b from-[#050507]/80 via-transparent to-[#050507]" />

  <div className="absolute inset-0 bg-gradient-to-r from-[#050507]/40 via-transparent to-[#050507]/20" />

  <div className="absolute inset-0 bg-gradient-to-t from-[#050507]/90 via-transparent to-transparent" />

  <div className="absolute left-5 top-5">

    <span className="rounded-full bg-pink-500 px-4 py-2 text-[7px] font-black uppercase tracking-[0.25em]">
      Today's Game
    </span>

  </div>

  <div className="relative flex h-full flex-col justify-end p-6">

    <p className="text-[7px] font-black uppercase tracking-[0.35em] text-white/40">
      Daily Challenge · {featuredGame.number}
    </p>

    <h3 className="mt-3 text-[42px] font-black leading-[0.84] tracking-[-0.06em]">
      {featuredGame.title}
    </h3>

    <p className="mt-4 max-w-xs text-xs leading-5 text-white/55">
      {featuredGame.description}
    </p>

    <div className="mt-6 flex flex-wrap items-center gap-3">

      <Link
        href={featuredGame.href}
        className="inline-flex items-center rounded-full bg-white px-5 py-3 text-[7px] font-black uppercase tracking-[0.15em] text-black transition duration-300 hover:bg-pink-400"
      >
        Start Challenge →
      </Link>

      <Link
        href="/games"
        className="inline-flex items-center rounded-full border border-white/25 bg-black/30 px-5 py-3 text-[7px] font-black uppercase tracking-[0.15em] text-white/80 backdrop-blur-sm transition duration-300 hover:border-pink-400 hover:bg-pink-500/10 hover:text-white"
      >
        All Games →
      </Link>

    </div>

  </div>

</div>

  {/* Coming soon — full-width scroller */}
  <div className="pt-7">
    <div className="mb-5 flex items-end justify-between px-5">
      <div>
        <h3 className="text-xl font-black">Coming soon</h3>
        <p className="mt-1 text-[9px] text-white/40">
          More games to explore
        </p>
      </div>

      <span className="text-[7px] font-black uppercase tracking-[0.25em] text-pink-400">
        Swipe →
      </span>
    </div>

   <div className="overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
  <div className="flex w-max gap-3 px-5">
    {arcadeGames.map(([number, title, category, image]) => {
  const isPlayable = true;

  const card = (
    <div
     className="group relative flex h-[180px] w-[190px] shrink-0 flex-col justify-between overflow-hidden rounded-[18px] border border-pink-500/30 bg-[#11111a] p-4 transition duration-300 hover:-translate-y-1 hover:border-pink-400/60 hover:shadow-[0_15px_40px_rgba(236,72,153,0.15)]"
    >
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-40 transition duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b14] via-[#0b0b14]/80 to-[#0b0b14]/30" />

      <div className="relative z-10">
        <span className="text-[9px] font-black tracking-[0.2em] text-pink-400">
          {number}
        </span>

        <h4 className="mt-4 text-base font-black text-white">
          {title}
        </h4>

        <p className="mt-3 text-[8px] font-black uppercase tracking-[0.25em] text-white/55">
          {category}
        </p>
      </div>

      <span
       className="relative z-10 flex w-full items-center justify-center rounded-full border border-pink-500/50 bg-pink-500 py-2.5 text-[7px] font-black uppercase tracking-[0.2em] text-white transition group-hover:bg-pink-400"
>
  Play Game →
      </span>
    </div>
  );

  const hrefs: Record<string, string> = {
  "01": "/games/quiz",
  "02": "/games/location",
  "03": "/games/character",
  "04": "/games/timeline",
  "05": "/games/higher-lower",
  "06": "/games/quotes",
};

return (
  <Link
    key={title}
    href={hrefs[number]}
    className="block"
  >
    {card}
  </Link>
);
})}
  </div>
</div>
  </div>

</section>



       
{/* ========================================================
    MOBILE NEWS — FULL-BLEED CINEMATIC
    ======================================================== */}

<section className="relative w-full overflow-hidden pt-16">

  {/* Heading */}
  <div className="relative z-10 flex items-end justify-between px-5 pb-6">
    <div>
      <p className="text-[7px] font-black uppercase tracking-[0.45em] text-pink-400">
        02 / newsroom
      </p>
      <h2 className="mt-2 text-3xl font-black tracking-[-0.04em]">
        What's happening.
      </h2>
    </div>

    <Link
      href="/news"
      className="text-[7px] font-black uppercase tracking-[0.25em] text-white/40 transition hover:text-pink-400"
    >
      Newsroom →
    </Link>
  </div>

  {/* Full-width cinematic feature */}
  <Link
    href="/news"
    className="group relative flex min-h-[580px] w-full items-end overflow-hidden"
  >
    <img
      src="/news/news-hero.jpg"
      alt="Latest GTA VI news"
      className="absolute inset-0 h-full w-full object-cover object-center transition duration-[1200ms] group-hover:scale-105"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-[#050507]/35 to-[#050507]/15" />
    <div className="absolute inset-0 bg-gradient-to-r from-[#050507]/55 via-transparent to-transparent" />
    <div className="absolute inset-0 bg-gradient-to-b from-[#050507]/35 to-transparent" />

    {/* Decorative number */}
    

    {/* Content */}
    <div className="relative z-10 w-full px-6 pb-10 pt-24">

      <div className="flex items-center gap-2">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-pink-400" />
        <p className="text-[7px] font-black uppercase tracking-[0.4em] text-pink-400">
          Featured Story
        </p>
      </div>

      <h3 className="mt-6 text-[48px] font-black leading-[0.82] tracking-[-0.065em]">
        LATEST
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/45">
          GTA VI
        </span>
        <br />
        NEWS
      </h3>

      <p className="mt-6 max-w-sm text-xs leading-6 text-white/65">
        Breaking updates, Rockstar announcements and everything
        happening in the world of Grand Theft Auto VI.
      </p>

      <div className="mt-8 inline-flex items-center gap-4 border-b border-pink-400/70 pb-3 text-[7px] font-black uppercase tracking-[0.3em] text-white transition group-hover:border-white">
        Explore the Newsroom
        <span className="text-pink-400 transition-transform duration-300 group-hover:translate-x-2">
          →
        </span>
      </div>

    </div>
  </Link>

</section>


        


{/* ========================================================
    MOBILE STORY + MEDIA — EDITORIAL LAYOUT
    ======================================================== */}

<section className="px-5 pt-20">

  {/* SECTION LABEL */}

  <div className="mb-8">
  <p className="text-[7px] font-black uppercase tracking-[0.45em] text-pink-400">
  03 / Inside GTA VI
</p>
  </div>

  {/* STORY */}

  
<Link href="/story" className="group mb-8 block">
  <div className="relative h-[265px] overflow-hidden rounded-[22px]">
    <img
      src="/story/home-story.jpg"
      alt="GTA VI Story"
      className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-[#09080f]/95 via-[#09080f]/35 to-transparent" />

    <div className="absolute bottom-6 left-5 right-5">
      <p className="mb-3 text-[7px] font-black uppercase tracking-[0.4em] text-purple-300">
        03 / Story
      </p>

      <h3 className="text-3xl font-black tracking-[-0.05em]">
        Jason &amp; Lucia
      </h3>

      <p className="mt-2 max-w-xs text-xs leading-5 text-white/65">
        Character profiles, theories and every official story reveal.
      </p>

      <span className="mt-4 inline-flex border-b border-purple-400 pb-2 text-[8px] font-black uppercase tracking-[0.3em] text-white transition group-hover:text-purple-300">
        Explore the Story →
      </span>
    </div>
  </div>
</Link>



{/* MEDIA */}

<div className="border-t border-white/[0.12] pt-8">
  
<Link href="/media" className="group block">
  <div className="relative h-[210px] overflow-hidden rounded-[22px]">
    <img
      src="/media/home-media.jpg"
      alt="GTA VI Media Archive"
      className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-[#09080f]/95 via-[#09080f]/35 to-transparent" />

    <div className="absolute bottom-6 left-5 right-5">
      <p className="mb-3 text-[7px] font-black uppercase tracking-[0.4em] text-pink-300">
        04 / Media
      </p>

      <h3 className="text-2xl font-black leading-tight tracking-[-0.04em]">
        Official Screenshots &amp; Trailers
      </h3>

      <p className="mt-2 text-xs leading-5 text-white/65">
        Explore official trailers, artwork and screenshots from GTA VI.
      </p>

      <span className="mt-4 inline-flex border-b border-pink-400 pb-2 text-[8px] font-black uppercase tracking-[0.3em] text-white transition group-hover:text-pink-300">
        Explore the Media Archive →
      </span>
    </div>
  </div>
</Link>

</div>

</section>




{/* MOBILE WORLD */}
<section className="lg:hidden w-full pt-10 pb-12">
  <div className="px-4 mb-6">
  <p className="text-[7px] font-black uppercase tracking-[0.45em] text-pink-400">
  04 / Leonida / The Collection
</p>

  <h2 className="text-3xl font-black tracking-[-0.06em] text-white">
    Explore The World.
  </h2>

  <p className="text-sm text-white/40 mt-3">
    Discover the world of Grand Theft Auto VI.
  </p>

  
</div>

  <div className="grid grid-cols-3 w-full">
    {worldItems.map((item, index) => (
      <Link
        key={item[0]}
        href={item[0]}
        className="group relative flex flex-col justify-end h-[260px] min-w-0 overflow-hidden border-r border-white/15 last:border-r-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{
  backgroundImage: `url("${item[1]}")`,
  backgroundPosition:
    index === 0 ? "25% center" :
    index === 2 ? "75% center" :
    "center center",
}}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />

        <div className="relative z-10 p-2">
          <span className="block text-[9px] tracking-widest text-pink-400 mb-2">
            0{index + 1}
          </span>

          <h3 className="text-sm font-bold leading-tight text-white break-words">
            {item[3]}
          </h3>

          <div className="h-[2px] w-6 bg-pink-500 mt-2 mb-2 transition-all duration-300 group-hover:w-full" />

          <span className="text-[9px] leading-tight text-white/70 line-clamp-3">
            {item[4]}
          </span>
        </div>
      </Link>
    ))}
  </div>
</section>



        



      </div>


      {/* ============================================================
          PAGE ANIMATION SYSTEM
          ============================================================ */}

     

    </main>
  );
}
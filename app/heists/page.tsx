
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { heistGuides } from "@/lib/heists";

const DAY_IN_MS = 24 * 60 * 60 * 1000;
const FEATURED_START_DATE = new Date("2026-10-08T00:00:00");

function getDailyFeaturedIndex() {
  const elapsedDays = Math.floor(
    (Date.now() - FEATURED_START_DATE.getTime()) / DAY_IN_MS
  );

  return (
    ((elapsedDays % heistGuides.length) + heistGuides.length) %
    heistGuides.length
  );
}

export default function HeistsPage() {
  const [featuredIndex, setFeaturedIndex] = useState(0);

  useEffect(() => {
    const updateFeatured = () => {
      setFeaturedIndex(getDailyFeaturedIndex());
    };

    updateFeatured();

    const interval = window.setInterval(updateFeatured, 60_000);
    return () => window.clearInterval(interval);
  }, []);

  const featured = heistGuides[featuredIndex] ?? heistGuides[0];

  const otherGuides = heistGuides.filter(
    (guide) => guide.slug !== featured.slug
  );

  return (
    <main className="min-h-screen bg-[#050507] text-white">
      {/* HERO — MATCHES GUIDES */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <img
            src="/heists/heists-bg.jpg"
            alt=""
            className="h-full w-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-black/55" />

          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-[#050507]/65 to-[#050507]" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(236,72,153,0.18),transparent_38%),radial-gradient(circle_at_85%_20%,rgba(34,211,238,0.10),transparent_38%)]" />
        </div>

        <div className="relative mx-auto max-w-[1500px] px-6 pb-20 pt-10 md:px-10 md:pb-28 md:pt-14">
          <Link
            href="/"
            className="group inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-zinc-500 transition hover:text-pink-400"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>
            Back to Home
          </Link>

          <div className="mt-20 max-w-5xl md:mt-28">
            <p className="text-[11px] font-black uppercase tracking-[0.35em] text-pink-400">
              GTA Vault / Criminal Intelligence
            </p>

            <h1 className="mt-5 text-5xl font-black leading-[0.9] tracking-[-0.055em] text-white sm:text-6xl md:text-8xl lg:text-[110px]">
              HEISTS
              <br />
              <span className="text-zinc-500">& CRIMES</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8 md:text-xl md:leading-9">
              Explore heists, criminal activities, police pursuits and
              confirmed information about crime in Grand Theft Auto VI.
              Separate official details from speculation.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED GUIDE — MATCHES GUIDES */}
      <section className="mx-auto w-full max-w-[1500px] px-6 py-10 md:px-10 md:py-16">
        <Link
          href={`/heists/${featured.slug}`}
          className="group relative block overflow-hidden rounded-[1.5rem] border border-white/10 bg-black shadow-[0_30px_100px_rgba(0,0,0,0.55)] transition duration-500 hover:border-pink-500/30 md:rounded-[2rem]"
        >
          <div className="relative min-h-[460px] overflow-hidden sm:min-h-[520px] md:min-h-[650px]">
            <img
              src={featured.image}
              alt={featured.title}
              className="absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/65 to-black/10" />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(236,72,153,0.16),transparent_35%)]" />

            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-14 lg:p-16">
              <div className="max-w-4xl">
                <div className="flex flex-wrap items-center gap-3 text-[9px] font-black uppercase tracking-[0.22em] sm:text-[10px] md:text-[11px] md:tracking-[0.3em]">
                  <span className="text-pink-400">Featured Guide</span>
                  <span className="text-zinc-600">/</span>
                  <span className="text-zinc-400">{featured.category}</span>
                  <span className="text-zinc-600">/</span>
                  <span className="text-zinc-500">
                    Updated {featured.updated}
                  </span>
                </div>

                <h2 className="mt-5 max-w-4xl text-3xl font-black leading-[0.95] tracking-[-0.04em] text-white sm:text-4xl md:text-6xl lg:text-7xl">
                  {featured.title}
                </h2>

                <p className="mt-5 max-w-3xl text-sm leading-6 text-zinc-300 sm:text-base sm:leading-7 md:mt-6 md:text-xl md:leading-9">
                  {featured.excerpt}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-4 sm:mt-8">
                  {featured.readingTime && (
                    <span className="text-[10px] uppercase tracking-[0.16em] text-zinc-500 sm:text-xs sm:tracking-[0.2em]">
                      {featured.readingTime} min read
                    </span>
                  )}

                  <span className="hidden h-1 w-1 rounded-full bg-zinc-700 sm:block" />

                  <span className="hidden text-xs uppercase tracking-[0.2em] text-zinc-500 sm:inline">
                    {featured.sections ?? 0} sections
                  </span>

                  <span className="inline-flex items-center rounded-full bg-white px-5 py-3 text-[10px] font-black uppercase tracking-[0.12em] text-black transition duration-300 group-hover:translate-x-1 sm:px-6 sm:text-xs sm:tracking-[0.18em]">
                    Read Full Guide →
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* ALL GUIDES */}
      <section className="mx-auto max-w-[1500px] px-6 pb-24 md:px-10 md:pb-32">
        <div className="border-b border-white/10 pb-8">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-pink-400">
            Criminal Database
          </p>

          <div className="mt-3 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="text-3xl font-black tracking-[-0.04em] sm:text-4xl md:text-6xl">
              Explore Heists & Crimes
            </h2>

            <p className="max-w-md text-sm leading-6 text-zinc-500 md:text-right">
              Browse our guides to criminal activity, law enforcement and
              the economy of Leonida.
            </p>
          </div>
        </div>

        {/* DESKTOP */}
        <div className="mt-10 hidden gap-x-6 gap-y-12 md:grid md:grid-cols-2 lg:grid-cols-3">
          {otherGuides.map((guide) => (
            <Link
              href={`/heists/${guide.slug}`}
              key={guide.slug}
              className="group"
            >
              <article>
                <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] border border-white/10 bg-zinc-950">
                  <img
                    src={guide.image}
                    alt={guide.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  <div className="absolute left-5 top-5">
                    <span className="rounded-full border border-white/15 bg-black/60 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.22em] text-white backdrop-blur-md">
                      {guide.category}
                    </span>
                  </div>
                </div>

                <div className="pt-5">
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600">
                    Updated {guide.updated}
                    {guide.readingTime && ` / ${guide.readingTime} min`}
                  </div>

                  <h3 className="mt-3 text-2xl font-black leading-tight tracking-[-0.025em] text-white transition-colors group-hover:text-pink-300">
                    {guide.title}
                  </h3>

                  <p className="mt-3 line-clamp-3 text-sm leading-7 text-zinc-400">
                    {guide.excerpt}
                  </p>

                  <div className="mt-5 text-xs font-black uppercase tracking-[0.2em] text-pink-400">
                    Read Guide →
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* MOBILE */}
        <div className="mt-8 space-y-8 md:hidden">
          {otherGuides.map((guide) => (
            <Link
              href={`/heists/${guide.slug}`}
              key={guide.slug}
              className="group block"
            >
              <article>
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-zinc-950">
                  <img
                    src={guide.image}
                    alt={guide.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  <div className="absolute left-4 top-4">
                    <span className="rounded-full border border-white/15 bg-black/60 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.2em] text-white backdrop-blur-md">
                      {guide.category}
                    </span>
                  </div>
                </div>

                <div className="pt-4">
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600">
                    Updated {guide.updated}
                  </div>

                  <h3 className="mt-2 text-xl font-black leading-tight text-white transition-colors group-hover:text-pink-300">
                    {guide.title}
                  </h3>

                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-zinc-400">
                    {guide.excerpt}
                  </p>

                  <div className="mt-4 text-xs font-black uppercase tracking-[0.2em] text-pink-400">
                    Read Guide →
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";
import { guides } from "@/lib/guides";

function formatDate(date: string) {
  if (date.startsWith("Updated ")) {
    return date.replace("Updated ", "");
  }

  return date;
}

function getDateValue(date: string) {
  const cleanedDate = date.replace("Updated ", "");
  return new Date(cleanedDate).getTime();
}

export default function GuidesPage() {
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");

 const START_DATE = new Date("2026-10-08T00:00:00");

const today = new Date();

const daysSinceStart = Math.floor(
  (today.getTime() - START_DATE.getTime()) /
    (1000 * 60 * 60 * 24)
);

const featuredIndex =
  ((daysSinceStart % guides.length) + guides.length) % guides.length;

const featured = guides[featuredIndex];

const latest = guides
  .filter((guide) => guide.slug !== featured.slug)
  .sort((a, b) => {
    const dateA = getDateValue(a.date);
    const dateB = getDateValue(b.date);

    return sortOrder === "newest"
      ? dateB - dateA
      : dateA - dateB;
  });

  return (
    <main className="min-h-screen bg-[#050507] text-white">

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">

        <div className="absolute inset-0">

          <img
            src="/guides/guides-hero.jpg"
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
              GTA Vault / Guides
            </p>

            <h1 className="mt-5 text-6xl font-black leading-[0.9] tracking-[-0.055em] text-white md:text-8xl lg:text-[110px]">
              GTA VI
              <br />
              <span className="text-zinc-500">GUIDES</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400 md:text-xl md:leading-9">
              Detailed guides, maps, tips and confirmed information
              to help you get ready for Grand Theft Auto VI.
            </p>

          </div>

        </div>

      </section>

      {/* FEATURED GUIDE */}
      <section className="mx-auto w-full max-w-[1500px] px-6 py-10 md:px-10 md:py-16">

        <Link
          href={`/guides/${featured.slug}`}
          className="group relative block overflow-hidden rounded-[1.5rem] border border-white/10 bg-black shadow-[0_30px_100px_rgba(0,0,0,0.55)] transition duration-500 hover:border-pink-500/30 md:rounded-[2rem]"
        >

          <div className="relative min-h-[560px] overflow-hidden md:min-h-[650px]">

            <img
              src={featured.image}
              alt={featured.title}
              className="absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/65 to-black/10" />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(236,72,153,0.16),transparent_35%)]" />

            <div className="absolute bottom-0 left-0 right-0 p-7 md:p-14 lg:p-16">

              <div className="max-w-4xl">

                <div className="flex flex-wrap items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] md:text-[11px]">

                  <span className="text-pink-400">
                    Featured Guide
                  </span>

                  <span className="text-zinc-600">
                    /
                  </span>

                  <span className="text-zinc-400">
                    {featured.category}
                  </span>

                  <span className="text-zinc-600">
                    /
                  </span>

                  <span className="text-zinc-500">
                    {formatDate(featured.date)}
                  </span>

                </div>

                <h2 className="mt-5 max-w-4xl text-4xl font-black leading-[0.95] tracking-[-0.04em] text-white md:text-6xl lg:text-7xl">
                  {featured.title}
                </h2>

                <p className="mt-6 max-w-3xl text-base leading-7 text-zinc-300 md:text-xl md:leading-9">
                  {featured.excerpt}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">

                  {featured.readingTime && (
                    <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                      {featured.readingTime} min read
                    </span>
                  )}

                  <span className="h-1 w-1 rounded-full bg-zinc-700" />

                  <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                    {featured.sections ?? 0} sections
                  </span>

                  <span className="ml-0 inline-flex items-center rounded-full bg-white px-6 py-3 text-xs font-black uppercase tracking-[0.18em] text-black transition duration-300 group-hover:translate-x-1 md:ml-4">
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

        <div className="flex flex-col gap-6 border-b border-white/10 pb-8 md:flex-row md:items-end md:justify-between">

          <div>

            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-pink-400">
              Explore
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] md:text-6xl">
              All Guides
            </h2>

          </div>

          <div className="flex flex-col gap-3 md:items-end">

            <p className="max-w-md text-sm leading-6 text-zinc-500 md:text-right">
              Explore GTA VI maps, locations, tips and confirmed
              information.
            </p>

            {/* SORT */}
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] p-1">

              <button
                type="button"
                onClick={() => setSortOrder("newest")}
                className={`rounded-full px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] transition ${
                  sortOrder === "newest"
                    ? "bg-white text-black"
                    : "text-zinc-500 hover:text-white"
                }`}
              >
                Newest
              </button>

              <button
                type="button"
                onClick={() => setSortOrder("oldest")}
                className={`rounded-full px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] transition ${
                  sortOrder === "oldest"
                    ? "bg-white text-black"
                    : "text-zinc-500 hover:text-white"
                }`}
              >
                Oldest
              </button>

            </div>

          </div>

        </div>

        {/* DESKTOP */}
        <div className="mt-10 hidden gap-x-6 gap-y-12 md:grid md:grid-cols-2 lg:grid-cols-3">

          {latest.map((guide) => (
            <Link
              href={`/guides/${guide.slug}`}
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

                  <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600">

                    <span>
                      {formatDate(guide.date)}
                    </span>

                    {guide.readingTime && (
                      <>
                        <span>/</span>

                        <span>
                          {guide.readingTime} min
                        </span>
                      </>
                    )}

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

          {latest.map((guide) => (
            <Link
              href={`/guides/${guide.slug}`}
              key={guide.slug}
              className="group block"
            >

              <article>

                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10">

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
                    {formatDate(guide.date)}
                  </div>

                  <h3 className="mt-2 text-xl font-black leading-tight text-white">
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
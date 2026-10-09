"use client";

import Link from "next/link";
import { storyArticles } from "@/lib/story";

const START_DATE = new Date("2026-10-08T00:00:00");

function getDateValue(date: string) {
  const cleanedDate = date.replace("Updated ", "");
  return new Date(cleanedDate).getTime();
}

export default function StoryPage() {
  const today = new Date();

  const daysSinceStart = Math.floor(
    (today.getTime() - START_DATE.getTime()) /
      (1000 * 60 * 60 * 24)
  );

  const featuredIndex =
    ((daysSinceStart % storyArticles.length) +
      storyArticles.length) %
    storyArticles.length;

  const featured = storyArticles[featuredIndex];

  const stories = storyArticles
    .filter((story) => story.slug !== featured.slug)
    .sort((a, b) => {
      const dateA = getDateValue(a.date);
      const dateB = getDateValue(b.date);

      return dateB - dateA;
    });

  return (
    <main className="min-h-screen bg-[#050507] text-white">

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">

        <div className="absolute inset-0">

          <img
            src="/story/story-hero.jpg"
            alt=""
            className="h-full w-full object-cover object-center opacity-45"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-[#050507]/65 to-[#050507]" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(236,72,153,0.20),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(34,211,238,0.14),transparent_40%)]" />

        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 pb-20 pt-10 md:px-10 md:pb-28 md:pt-16">

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

            <p className="text-[10px] font-black uppercase tracking-[0.35em] text-pink-400 md:text-xs">
              GTA Vault • Story
            </p>

            <h1 className="mt-5 text-5xl font-black uppercase leading-[0.9] tracking-[-0.05em] md:text-7xl lg:text-8xl">
              The Story
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-zinc-300 md:text-xl md:leading-9">
              Explore everything officially revealed about Grand Theft
              Auto VI's story, protagonists and the characters shaping
              Rockstar's biggest adventure yet.
            </p>

          </div>

        </div>

      </section>

      {/* FEATURED STORY */}
      <section className="mx-auto max-w-7xl px-6 py-14 md:px-10 md:py-20">

        <div className="mb-6 flex items-end justify-between">

          <div>

            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-pink-400">
              Featured Story
            </p>

            <p className="mt-2 text-sm text-zinc-600">
              Updated every 24 hours
            </p>

          </div>

        </div>

        <Link
          href={`/story/${featured.slug}`}
          className="group block overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.025] transition-all duration-500 hover:-translate-y-1 hover:border-pink-500/40 md:rounded-[2rem]"
        >

          <div className="grid md:grid-cols-2">

            {/* IMAGE */}
            <div className="relative h-[280px] overflow-hidden md:h-[460px]">

              <img
                src={featured.image}
                alt={featured.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/30" />

              <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/50 px-3 py-2 text-[9px] font-black uppercase tracking-[0.25em] text-white backdrop-blur-md">
                Featured
              </div>

            </div>

            {/* CONTENT */}
            <div className="flex flex-col justify-center p-7 md:p-12 lg:p-14">

              <div className="flex flex-wrap items-center gap-3 text-[10px] font-black uppercase tracking-[0.28em]">

                <span className="text-pink-400">
                  {featured.category}
                </span>

                <span className="text-zinc-700">
                  /
                </span>

                <span className="text-zinc-600">
                  {featured.date}
                </span>

              </div>

              <h2 className="mt-5 text-4xl font-black leading-[0.95] tracking-[-0.04em] md:text-5xl lg:text-6xl">
                {featured.title}
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-zinc-400 md:text-lg md:leading-8">
                {featured.excerpt}
              </p>

              <div className="mt-8 flex items-center gap-3 text-sm font-black uppercase tracking-[0.18em] text-pink-400 transition-colors group-hover:text-pink-300">
                Read Story

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>

            </div>

          </div>

        </Link>

      </section>

      {/* STORY ARCHIVE */}
      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10 md:pb-28">

        <div className="mb-8">

          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-pink-400">
            Explore
          </p>

          <h2 className="mt-2 text-3xl font-black uppercase tracking-[-0.03em] md:text-4xl">
            Story Archive
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-500">
            Dive deeper into GTA VI's protagonists, supporting
            characters and the theories surrounding the story.
          </p>

        </div>

        {/* DESKTOP */}
        <div className="hidden grid-cols-2 gap-6 md:grid">

          {stories.map((story) => (
            <StoryCard
              key={story.slug}
              story={story}
            />
          ))}

        </div>

        {/* MOBILE */}
        <div className="grid gap-5 md:hidden">

          {stories.map((story) => (
            <StoryCard
              key={story.slug}
              story={story}
            />
          ))}

        </div>

      </section>

    </main>
  );
}

function StoryCard({
  story,
}: {
  story: {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    image: string;
    category: string;
  };
}) {
  return (
    <Link
      href={`/story/${story.slug}`}
      className="group overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.025] transition-all duration-500 hover:-translate-y-2 hover:border-pink-500/40 md:rounded-[2rem]"
    >

      <div className="relative h-[240px] overflow-hidden">

        <img
          src={story.image}
          alt={story.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

        <div className="absolute bottom-5 left-5">

          <p className="text-[9px] font-black uppercase tracking-[0.25em] text-pink-400">
            {story.category}
          </p>

        </div>

      </div>

      <div className="p-6 md:p-7">

        <div className="flex items-center justify-between gap-4">

          <h3 className="text-2xl font-black tracking-[-0.025em] text-white">
            {story.title}
          </h3>

          <span className="shrink-0 text-zinc-600 transition-colors group-hover:text-pink-400">
            →
          </span>

        </div>

        <p className="mt-3 text-sm leading-6 text-zinc-400">
          {story.excerpt}
        </p>

        <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">

          <span className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-600">
            {story.date}
          </span>

          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-pink-400 transition-colors group-hover:text-pink-300">
            Read Story
          </span>

        </div>

      </div>

    </Link>
  );
}
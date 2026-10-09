"use client";

import Link from "next/link";
import { use, useEffect, useRef, useState } from "react";
import ArticleMeta from "@/components/ArticleMeta";
import { storyArticles } from "@/lib/story";

function isHeading(line: string) {
  return (
    line.trim() === line.trim().toUpperCase() &&
    line.trim().length > 0 &&
    !line.trim().startsWith("•")
  );
}

function headingId(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function formatDate(date: string) {
  if (date.startsWith("Updated ")) {
    return date.replace("Updated ", "");
  }

  return date;
}

export default function StoryArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);

  const story = storyArticles.find(
    (article) => article.slug === slug
  );

  const [showGalleryImage, setShowGalleryImage] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const touchStartX = useRef(0);

  const hasGallery =
    story?.slug === "supporting-characters" &&
    story.gallery &&
    story.gallery.length > 0;

  useEffect(() => {
    if (
      story?.slug !== "supporting-characters" ||
      !story.gallery ||
      story.gallery.length <= 1
    ) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentImage(
        (prev) => (prev + 1) % story.gallery!.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [story]);

  if (!story) {
    return (
      <main className="min-h-screen bg-[#050507] px-6 py-32 text-center text-white">
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-pink-400">
          GTA Vault Story
        </p>

        <h1 className="mt-4 text-4xl font-black">
          Story Not Found
        </h1>

        <p className="mx-auto mt-4 max-w-md text-zinc-500">
          The story you're looking for doesn't exist or may have
          been moved.
        </p>

        <Link
          href="/story"
          className="mt-8 inline-flex text-sm font-bold uppercase tracking-[0.2em] text-pink-400 transition hover:text-pink-300"
        >
          ← Back to Story
        </Link>
      </main>
    );
  }

  const paragraphs = story.content
    .trim()
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter(Boolean);

  return (
    <main className="min-h-screen bg-[#050507] text-white">

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">

        <div className="absolute inset-0">

          <img
            src={story.image}
            alt=""
            className="h-full w-full object-cover object-center opacity-50"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-[#050507]/60 to-[#050507]" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(236,72,153,0.20),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(34,211,238,0.12),transparent_40%)]" />

        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 pb-20 pt-8 md:px-10 md:pb-28 md:pt-12">

          <Link
            href="/story"
            className="group inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-zinc-500 transition hover:text-pink-400"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>

            Back to Story
          </Link>

          <div className="mt-20 max-w-5xl md:mt-28">

            <div className="flex flex-wrap items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] md:text-[11px]">

              <span className="text-pink-400">
                {story.category}
              </span>

              <span className="text-zinc-600">
                /
              </span>

              <span className="text-zinc-500">
                {formatDate(story.date)}
              </span>

            </div>

            <h1 className="mt-5 text-5xl font-black leading-[0.92] tracking-[-0.05em] md:text-7xl lg:text-8xl">
              {story.title}
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-zinc-300 md:text-xl md:leading-9">
              {story.excerpt}
            </p>

            <ArticleMeta
              updated={story.updated}
              readingTime={story.readingTime}
            />

          </div>

        </div>

      </section>

      {/* ARTICLE */}
      <article className="mx-auto max-w-4xl px-6 py-14 md:px-10 md:py-20">

        {/* FEATURE IMAGE */}
        <div className="mb-14 overflow-hidden rounded-[1.5rem] border border-white/10 bg-zinc-950 shadow-[0_30px_100px_rgba(0,0,0,0.45)] md:rounded-[2rem]">

          <img
            src={story.image}
            alt={story.title}
            className="h-[260px] w-full object-cover md:h-[440px]"
          />

        </div>

        {/* STORY CONTENT */}
        <div className="space-y-12">

          {paragraphs.map((block, index) => {

            const lines = block
              .split("\n")
              .map((line) => line.trim())
              .filter(Boolean);

            const firstLine = lines[0];

            {/* HEADING SECTION */}
            if (isHeading(firstLine)) {
              return (
                <section
                  key={index}
                  className="scroll-mt-24"
                >

                  <div className="mb-5 flex items-center gap-4">

                    <div className="h-px w-10 bg-pink-500/60" />

                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-pink-400">
                      GTA Vault Story
                    </p>

                  </div>

                  <h2
                    id={headingId(firstLine)}
                    className="text-3xl font-black uppercase tracking-[-0.025em] text-white md:text-4xl"
                  >
                    {firstLine}
                  </h2>

                  <div className="mt-6">

                    {lines.slice(1).map((line, lineIndex) => (
                      <p
                        key={lineIndex}
                        className="mb-5 text-lg leading-8 text-zinc-300"
                      >
                        {line}
                      </p>
                    ))}

                  </div>

                </section>
              );
            }

            {/* BULLET LIST */}
            if (
              lines.length > 0 &&
              lines.every((line) =>
                line.startsWith("•")
              )
            ) {
              return (
                <ul
                  key={index}
                  className="space-y-4 rounded-2xl border border-white/10 bg-white/[0.025] p-6 text-lg leading-8 text-zinc-300 md:p-8"
                >

                  {lines.map((line, lineIndex) => (
                    <li
                      key={lineIndex}
                      className="flex gap-3"
                    >

                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-pink-400" />

                      <span>
                        {line.replace(/^•\s*/, "")}
                      </span>

                    </li>
                  ))}

                </ul>
              );
            }

            {/* NORMAL PARAGRAPH */}
            return (
              <div key={index}>

                {lines.map((line, lineIndex) => (
                  <p
                    key={lineIndex}
                    className="mb-5 text-lg leading-8 text-zinc-300"
                  >
                    {line}
                  </p>
                ))}

              </div>
            );
          })}

        </div>

        {/* SUPPORTING CHARACTERS GALLERY */}
        {hasGallery && story.gallery && (
          <section className="mt-20">

            <div className="mb-6">

              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-pink-400">
                Character Archive
              </p>

              <h2 className="mt-2 text-3xl font-black tracking-[-0.03em] md:text-4xl">
                Supporting Characters
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-500">
                Explore the confirmed supporting characters featured
                throughout GTA VI.
              </p>

            </div>

            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-zinc-950 md:rounded-[2rem]">

              <img
                src={story.gallery[currentImage]}
                alt={`${story.title} gallery image`}
                onClick={() => setShowGalleryImage(true)}
                className="h-[300px] w-full cursor-pointer object-cover md:h-[460px]" 

                onTouchStart={(e) => {
                  touchStartX.current =
                    e.touches[0].clientX;
                }}

                onTouchEnd={(e) => {

                  const touchEndX =
                    e.changedTouches[0].clientX;

                  const diff =
                    touchStartX.current -
                    touchEndX;

                  if (diff > 50) {
                    setCurrentImage(
                      (prev) =>
                        (prev + 1) %
                        story.gallery!.length
                    );
                  }

                  if (diff < -50) {
                    setCurrentImage(
                      (prev) =>
                        (prev -
                          1 +
                          story.gallery!.length) %
                        story.gallery!.length
                    );
                  }

                }}
              />

              <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2 rounded-full border border-white/10 bg-black/50 px-3 py-2 backdrop-blur-md">

                {story.gallery.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    aria-label={`View character ${index + 1}`}
                    onClick={() =>
                      setCurrentImage(index)
                    }
                    className={`h-2 w-2 rounded-full transition ${
                      currentImage === index
                        ? "bg-pink-400"
                        : "bg-zinc-600"
                    }`}
                  />
                ))}

              </div>

            </div>

            <p className="mt-4 text-sm leading-6 text-zinc-600">
              Tap or click the image to view it in full size.
            </p>

          </section>
        )}

        {/* BACK TO STORY */}
        <div className="mt-20 border-t border-white/10 pt-8">

          <Link
            href="/story"
            className="group inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.25em] text-zinc-500 transition hover:text-pink-400"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>

            Back to Story
          </Link>

        </div>

      </article>

      {/* SUPPORTING CHARACTERS GALLERY MODAL */}
      {hasGallery && story.gallery && showGalleryImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6 backdrop-blur-sm"
          onClick={() => setShowGalleryImage(false)}
        >

          <img
            src={story.gallery[currentImage]}
            alt={`${story.title} gallery image`}
            className="max-h-[90vh] max-w-[90vw] rounded-3xl"
            onClick={(e) =>
              e.stopPropagation()
            }
          />

        </div>
      )}

    </main>
  );
}
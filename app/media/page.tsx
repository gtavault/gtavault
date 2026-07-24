"use client";

import { useEffect, useState } from "react";

export default function MediaPage() {

  const images = [
    23, 5, 14, 2, 18, 11,
    7, 20, 1, 16, 24, 9,
    4, 21, 13, 6, 17, 3,
    22, 8, 15, 12, 19, 10
  ];

const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

const previousImage = () => {
  if (selectedIndex === null) return;
  setSelectedIndex(
    selectedIndex === 0 ? images.length - 1 : selectedIndex - 1
  );
};

const nextImage = () => {
  if (selectedIndex === null) return;
  setSelectedIndex(
    selectedIndex === images.length - 1 ? 0 : selectedIndex + 1
  );
};
useEffect(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (selectedIndex === null) return;

    if (e.key === "Escape") {
      setSelectedIndex(null);
    }

    if (e.key === "ArrowLeft") {
      previousImage();
    }

    if (e.key === "ArrowRight") {
      nextImage();
    }
  };

  window.addEventListener("keydown", handleKeyDown);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };
}, [selectedIndex]);
  return (
    <main className="bg-black text-white">
      {/* HERO */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        {/* Background */}
        <img
          src="/media/trailers.jpg"
          alt="GTA VI Media"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black" />
        {/* Content */}
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.5em] text-pink-400">
            GTA Vault
          </p>
          <h1 className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-6xl font-black uppercase tracking-wide text-transparent md:text-8xl">
            MEDIA ARCHIVE
          </h1>
          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-zinc-300">
            Explore every official trailer, screenshot, artwork and wallpaper
            released for Grand Theft Auto VI — all organised into one premium
            archive.
          </p>
          <div className="mt-16 flex justify-center">
            <a
              href="#trailers"
              className="rounded-full border border-pink-500/40 bg-pink-500/10 px-8 py-4 text-lg font-semibold transition hover:border-pink-400 hover:bg-pink-500/20"
            >
              ▼ Explore Archive
            </a>
          </div>
        </div>
      </section>
            {/* FEATURED TRAILER */}
      <section
        id="trailers"
        className="mx-auto max-w-7xl px-6 py-32"
      >
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-pink-400">
            Featured Release
          </p>
          <h2 className="mt-4 text-5xl font-black uppercase">
            Trailer 2
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            Rockstar's second official GTA VI trailer delivered the biggest look
            yet at Lucia, Jason, Leonida and the criminal world awaiting players.
          </p>
        </div>
        <div className="overflow-hidden rounded-3xl border border-pink-500/20 shadow-2xl">
          <div className="aspect-video">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/VQRLujxTm3c"
              title="Grand Theft Auto VI Trailer 2"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-4">
          <div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
              Released
            </p>
            <p className="mt-3 text-2xl font-bold">
              6 May 2025
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
              Runtime
            </p>
            <p className="mt-3 text-2xl font-bold">
              2:46
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
              Protagonists
            </p>
            <p className="mt-3 text-2xl font-bold">
              Lucia & Jason
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
              Status
            </p>
            <p className="mt-3 text-2xl font-bold text-green-400">
              Official
            </p>
          </div>
        </div>
      </section>
            {/* TRAILER ARCHIVE */}
      <section className="mx-auto max-w-7xl px-6 pb-32">
        <div className="mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-pink-400">
            Archive
          </p>
          <h2 className="mt-4 text-5xl font-black uppercase text-white">
            Official Trailer Collection
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            Every official Grand Theft Auto VI trailer released by Rockstar
            Games, presented in chronological order.
          </p>
        </div>
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Trailer 2 */}
          <div className="overflow-hidden rounded-3xl border border-pink-500/20 bg-zinc-900/30 transition duration-300 hover:-translate-y-2 hover:border-pink-500/50">
            <img
              src="/media/trailer-2.jpg"
              alt="Trailer 2"
              className="h-[260px] w-full object-cover"
            />
            <div className="p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-pink-400">
                Latest Release
              </p>
              <h3 className="mt-3 text-3xl font-black text-white">
                Trailer 2
              </h3>
              <p className="mt-4 leading-8 text-zinc-300">
                Rockstar expanded the story, revealed new supporting
                characters and showcased Leonida in far greater detail.
              </p>
              <div className="mt-8 flex items-center justify-between">
                <span className="text-zinc-500">
                  Released 6 May 2025
                </span>
                <a
  href="https://youtu.be/VQRLujxTm3c"
  target="_blank"
  rel="noopener noreferrer"
  className="font-semibold text-pink-400"
>
  Watch ↗
</a>
              </div>
            </div>
          </div>
          {/* Trailer 1 */}
          <div className="overflow-hidden rounded-3xl border border-pink-500/20 bg-zinc-900/30 transition duration-300 hover:-translate-y-2 hover:border-pink-500/50">
            <img
              src="/media/trailer-1.jpg"
              alt="Trailer 1"
              className="h-[260px] w-full object-cover"
            />
            <div className="p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-pink-400">
                First Reveal
              </p>
              <h3 className="mt-3 text-3xl font-black text-white">
                Trailer 1
              </h3>
              <p className="mt-4 leading-8 text-zinc-300">
                The world was introduced to Lucia, Jason, Vice City and the
                modern state of Leonida for the very first time.
              </p>
<div className="mt-8 flex items-center justify-between">
  <span className="text-zinc-500">
    Released 4 Dec 2023
  </span>

  <a
    href="https://youtu.be/QdBZY2fkU-0"
    target="_blank"
    rel="noopener noreferrer"
    className="font-semibold text-pink-400 hover:text-pink-300 transition"
  >
    Watch ↗
  </a>
</div>
            </div>
          </div>
        </div>
      </section>
            {/* THE VAULT WALL */}

      <section className="mx-auto max-w-[1700px] px-6 pb-32">

        <div className="mb-16 text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-pink-400">
            Official Collection
          </p>

          <h2 className="mt-4 text-5xl font-black uppercase text-white">
            The Vault Wall
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            Every image below has been officially released by Rockstar Games.
            Explore the growing GTA VI media archive.
          </p>

        </div>

        <div className="columns-1 gap-6 md:columns-2 xl:columns-3 2xl:columns-4">

      {images.map((image, index) => (
  <div
    key={image}
    onClick={() => setSelectedIndex(index)}
    className="mb-6 cursor-pointer"
  >
    <img
      src={`/media/gallery/${image}.jpg`}
      alt=""
      className="w-full rounded-2xl"
    />
  </div>
))}

           

        </div>

      </section>
            {/* LIGHTBOX */}

      {selectedIndex !== null && (
       <div
  className="fixed inset-0 z-[999] flex items-center justify-center overflow-hidden p-6"
  onClick={() => setSelectedIndex(null)}
>
  {/* Background Blur */}

<div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/95 to-black/75 backdrop-blur-md" />
          {/* Close */}

          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute right-6 top-6 text-5xl font-light text-white transition hover:text-pink-400"
          >
            ×
          </button>

          {/* Previous */}

          <button
            onClick={(e) => {
              e.stopPropagation();
              previousImage();
            }}
            className="absolute left-6 text-5xl text-white transition hover:text-pink-400"
          >
            ‹
          </button>

          {/* Next */}

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-5xl text-white transition hover:text-pink-400"
          >
            ›
          </button>

          {/* Image */}

          <img
            src={`/media/gallery/${images[selectedIndex]}.jpg`}
            alt=""
           className="relative z-10 max-h-[82vh] max-w-[82vw] rounded-3xl border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.6)]"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Counter */}

          <div className="absolute bottom-10 rounded-full border border-white/10 bg-black/60 px-6 py-3 text-white backdrop-blur">
            {selectedIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </main>
  );
}
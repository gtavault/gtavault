"use client";
import ArticleMeta from "@/components/ArticleMeta";
import { useState } from "react";
export default function Gta6MapGuidePage() {
  const [showMap, setShowMap] = useState(false);

  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
<ArticleMeta updated="26 June 2026" />
      <a
        href="/guides"
        className="mb-8 inline-flex text-sm font-medium text-pink-400 transition-colors hover:text-pink-300"
      >
        ← Back to Guides
      </a>

      <img
        src="/guides/gta-6-map-guide.jpg"
        alt="The GTA VI Map Guide"
        className="mb-10 h-[320px] w-full rounded-3xl object-cover object-top"
      />

      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-pink-400">
        Featured Guide
      </p>

      <h1 className="mb-4 text-5xl font-black text-white">
        The GTA VI Map Guide
      </h1>

      <p className="mb-8 text-zinc-400">
        Map Guide • Updated
      </p>

      <h2 className="mt-12 mb-6 text-2xl font-black uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">
        Overview
      </h2>

      <p className="mb-6 text-lg leading-relaxed text-zinc-300">
        Grand Theft Auto VI returns players to Vice City and introduces the wider state of Leonida. Rockstar Games has described Leonida as its biggest and most immersive open world to date, featuring major cities, beaches, wetlands and smaller communities spread across the state.
      </p>

      <h2 className="mt-12 mb-6 text-2xl font-black uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">
        Confirmed Locations
      </h2>

      <p className="mb-6 text-lg leading-relaxed text-zinc-300">
        Official trailers and screenshots have revealed several locations, including Vice City, Port Gellhorn, Grassrivers and Mount Kalaga National Park. Each area appears to offer its own atmosphere and activities, making Leonida the most diverse setting in Grand Theft Auto history.
      </p>

      <h2 className="mt-12 mb-6 text-2xl font-black uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">
        What We Know So Far
      </h2>

      <p className="text-lg leading-relaxed text-zinc-300">
        Rockstar continues to reveal new details through trailers and screenshots, but much of the map remains undisclosed. Every new piece of official material provides additional clues about the scale of Vice City and the wider state of Leonida.
      </p>
<h2 className="mt-12 mb-6 text-2xl font-black uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">
  Rumoured Map
</h2>
<p className="mb-3 text-sm text-zinc-400">
  Scroll inside the map to explore it, or click to view the full map.
</p>
<div className="mb-4 h-[300px] overflow-y-scroll rounded-3xl border border-pink-500/20">
  <img
    src="/guides/gta-6-map-concept.webp"
    alt="Community GTA VI map concept"
    onClick={() => setShowMap(true)}
    className="w-full cursor-pointer"
  />
</div>
<p className="text-sm text-zinc-500">
  Community-made map concept based on official GTA VI trailers and screenshots. This is not an official Rockstar Games map.
</p>
<h2 className="mt-12 mb-6 text-2xl font-black uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">
  Why The Map Remains A Mystery
</h2>

<ul className="space-y-4 text-lg leading-relaxed text-zinc-300">
  <li>
    • Rockstar Games has not released an official GTA VI map.
  </li>

  <li>
    • Community concepts are created using official trailers, screenshots and named locations.
  </li>

  <li>
    • The final layout of Vice City and the wider state of Leonida remains unknown.
  </li>
</ul>
{showMap && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
    onClick={() => setShowMap(false)}
  >
    <img
      src="/guides/gta-6-map-concept.webp"
      alt="Community GTA VI map concept"
      className="max-h-[90vh] max-w-[90vw] rounded-3xl"
      onClick={(e) => e.stopPropagation()}
    />
  </div>
)}
    </main>
  );
}
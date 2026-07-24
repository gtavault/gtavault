import ArticleMeta from "@/components/ArticleMeta";
export default function DeclasseTulipPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <ArticleMeta updated="26 June 2026" />
<a
  href="/vehicles"
  className="mb-8 inline-flex text-sm font-semibold uppercase tracking-wider text-pink-400 transition-colors hover:text-pink-300"
>
  ← Back to Vehicles
</a>
      <img
        src="/vehicles/declasse-tulip.webp"
        alt="Declasse Tulip"
        className="mb-10 h-[320px] w-full rounded-3xl object-cover"
      />

      <p className="mb-3 text-sm font-semibold tracking-[0.3em] text-pink-400 uppercase">
        Featured Vehicle
      </p>

      <h1 className="mb-4 text-5xl font-black text-white">
        Declasse Tulip
      </h1>

      <p className="mb-8 text-zinc-400">
        Muscle Car • Confirmed
      </p>
<div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

  <div className="rounded-2xl border border-pink-500/20 bg-zinc-900/30 p-5">
    <p className="mb-2 text-xs uppercase tracking-[0.3em] text-zinc-500">
      Vehicle Type
    </p>
    <p className="font-semibold text-white">
      Muscle Car
    </p>
  </div>

  <div className="rounded-2xl border border-pink-500/20 bg-zinc-900/30 p-5">
    <p className="mb-2 text-xs uppercase tracking-[0.3em] text-zinc-500">
      Status
    </p>
    <p className="font-semibold text-white">
      Confirmed
    </p>
  </div>

  <div className="rounded-2xl border border-pink-500/20 bg-zinc-900/30 p-5">
    <p className="mb-2 text-xs uppercase tracking-[0.3em] text-zinc-500">
      Manufacturer
    </p>
    <p className="font-semibold text-white">
      Declasse
    </p>
  </div>

  <div className="rounded-2xl border border-pink-500/20 bg-zinc-900/30 p-5">
    <p className="mb-2 text-xs uppercase tracking-[0.3em] text-zinc-500">
      First Seen
    </p>
    <p className="font-semibold text-white">
      Trailer 1
    </p>
  </div>

</div>
      <div className="space-y-6 text-lg leading-relaxed text-zinc-300">
<h2 className="mt-12 mb-6 text-2xl font-black uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">
  Overview
</h2>
        <p>
          The Declasse Tulip appears to return in Grand Theft Auto VI as a classic American muscle car inspired by late 1960s and early 1970s designs.
        </p>
<h2 className="mt-12 mb-6 text-2xl font-black uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">
  Official Appearances
</h2>
        <p>
          Vehicles resembling the Tulip have been spotted in official GTA VI footage and screenshots released by Rockstar Games, making it one of the most recognisable muscle cars currently associated with the game.
        </p>
<h2 className="mt-12 mb-6 text-2xl font-black uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">
  What We Know So Far
</h2>
        <p>
          While Rockstar has not yet published official performance statistics, the vehicle is expected to offer strong acceleration and traditional rear-wheel-drive handling similar to its appearance in GTA Online.
        </p>

      </div>

    </main>
  );
}
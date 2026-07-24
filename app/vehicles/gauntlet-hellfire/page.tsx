import ArticleMeta from "@/components/ArticleMeta";
export default function GauntletHellfirePage() {
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
        src="/vehicles/gauntlet-hellfire.webp"
        alt="Gauntlet Hellfire"
        className="mb-10 h-[320px] w-full rounded-3xl object-cover"
      />

      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-pink-400">
        Featured Vehicle
      </p>

      <h1 className="mb-4 text-5xl font-black text-white">
        Gauntlet Hellfire
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
            Bravado
          </p>
        </div>

        <div className="rounded-2xl border border-pink-500/20 bg-zinc-900/30 p-5">
          <p className="mb-2 text-xs uppercase tracking-[0.3em] text-zinc-500">
            First Seen
          </p>
          <p className="font-semibold text-white">
            Trailer 2
          </p>
        </div>

      </div>
      <h2 className="mt-12 mb-6 text-2xl font-black uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">
  Overview
</h2>

<p className="mb-6 text-lg leading-relaxed text-zinc-300">
  The Bravado Gauntlet Hellfire appears to return in Grand Theft Auto VI as a modern American muscle car known for its bold styling and high-performance character. Inspired by contemporary muscle vehicles, the Hellfire is one of the most visually striking cars shown in official footage.
</p>

<h2 className="mt-12 mb-6 text-2xl font-black uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">
  Official Appearances
</h2>

<p className="mb-6 text-lg leading-relaxed text-zinc-300">
  Vehicles resembling the Gauntlet Hellfire can be spotted in official GTA VI trailers and screenshots released by Rockstar Games. The car's wide stance and distinctive design make it easily recognisable among the vehicles currently seen in the game.
</p>

<h2 className="mt-12 mb-6 text-2xl font-black uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">
  What We Know So Far
</h2>

<p className="text-lg leading-relaxed text-zinc-300">
  Rockstar has not yet confirmed performance figures or gameplay details for the Gauntlet Hellfire in GTA VI. Based on previous appearances in the series, players can expect a powerful rear-wheel-drive muscle car capable of delivering impressive acceleration and a memorable driving experience.
</p>
    </main>
  );
}
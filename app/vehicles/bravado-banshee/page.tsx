import ArticleMeta from "@/components/ArticleMeta";
export default function BravadoBansheePage() {
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
        src="/vehicles/bravado-banshee.webp"
        alt="Bravado Banshee"
        className="mb-10 h-[320px] w-full rounded-3xl object-cover"
      />

      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-pink-400">
        Featured Vehicle
      </p>

      <h1 className="mb-4 text-5xl font-black text-white">
        Bravado Banshee
      </h1>

      <p className="mb-8 text-zinc-400">
        Sports Car • Confirmed
      </p>

      <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

        <div className="rounded-2xl border border-pink-500/20 bg-zinc-900/30 p-5">
          <p className="mb-2 text-xs uppercase tracking-[0.3em] text-zinc-500">
            Vehicle Type
          </p>
          <p className="font-semibold text-white">
            Sports Car
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
            Trailer 1
          </p>
        </div>

      </div>
      <h2 className="mt-12 mb-6 text-2xl font-black uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">
  Overview
</h2>

<p className="mb-6 text-lg leading-relaxed text-zinc-300">
  The Bravado Banshee is one of Grand Theft Auto's most iconic sports cars and appears to return in Grand Theft Auto VI. Inspired by high-performance American sports cars, the Banshee has become a staple of the series thanks to its aggressive styling and strong performance.
</p>

<h2 className="mt-12 mb-6 text-2xl font-black uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">
  Official Appearances
</h2>

<p className="mb-6 text-lg leading-relaxed text-zinc-300">
  Vehicles resembling the Bravado Banshee can be seen throughout official GTA VI footage and promotional screenshots released by Rockstar Games. The vehicle retains its familiar low-slung profile and continues to be one of the most recognisable sports cars shown so far.
</p>

<h2 className="mt-12 mb-6 text-2xl font-black uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">
  What We Know So Far
</h2>

<p className="text-lg leading-relaxed text-zinc-300">
  Rockstar has not yet revealed official specifications or gameplay details for the Banshee in GTA VI. However, players can expect the vehicle to remain one of the faster road cars in the game and likely serve as a popular choice for both free roaming and racing activities.
</p>
    </main>
  );
}
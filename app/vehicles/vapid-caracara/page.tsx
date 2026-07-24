import ArticleMeta from "@/components/ArticleMeta";
export default function VapidCaracaraPage() {
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
        src="/vehicles/vapid-caracara.webp"
        alt="Vapid Caracara"
        className="mb-10 h-[320px] w-full rounded-3xl object-cover"
      />

      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-pink-400">
        Featured Vehicle
      </p>

      <h1 className="mb-4 text-5xl font-black text-white">
        Vapid Caracara
      </h1>

      <p className="mb-8 text-zinc-400">
        Pickup Truck • Confirmed
      </p>

      <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

        <div className="rounded-2xl border border-pink-500/20 bg-zinc-900/30 p-5">
          <p className="mb-2 text-xs uppercase tracking-[0.3em] text-zinc-500">
            Vehicle Type
          </p>
          <p className="font-semibold text-white">
            Pickup Truck
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
            Vapid
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
  The Vapid Caracara returns in Grand Theft Auto VI as a large off-road pickup truck designed for utility and rugged driving. Its imposing size and aggressive styling make it one of the most distinctive trucks shown in official GTA VI material.
</p>

<h2 className="mt-12 mb-6 text-2xl font-black uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">
  Official Appearances
</h2>

<p className="mb-6 text-lg leading-relaxed text-zinc-300">
  The Caracara has appeared in trailers and promotional screenshots released by Rockstar Games. The vehicle is frequently seen driving around the state of Leonida and fits naturally within the game's expanded rural and off-road environments.
</p>

<h2 className="mt-12 mb-6 text-2xl font-black uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">
  What We Know So Far
</h2>

<p className="text-lg leading-relaxed text-zinc-300">
  Although Rockstar has not released official performance information, the Caracara is expected to offer strong off-road capability and plenty of utility. The vehicle is likely to appeal to players who enjoy exploration and driving away from major cities and highways.
</p>
    </main>
  );
}
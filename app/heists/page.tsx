import Link from "next/link";
export default function HeistsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <Link
        href="/"
        className="mb-8 inline-flex text-sm font-medium text-pink-400 transition-colors hover:text-pink-300"
      >
        ← Back to Home
      </Link>
      <h1 className="text-4xl font-black uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">
        HEISTS & CRIMES
      </h1>
      <p className="mt-6 max-w-2xl text-zinc-400">
        Explore robberies, police pursuits, criminal activities and everything officially revealed about crime in Grand Theft Auto VI.
      </p>
      {/* Featured */}
      <Link
        href="/heists/heist-overview"
        className="mt-16 block overflow-hidden rounded-3xl border border-pink-500/20 bg-zinc-900/30 backdrop-blur-xl transition-all duration-300 hover:border-pink-500/50 hover:-translate-y-1"
      >
        <img
          src="/heists/heist-overview.jpg"
          alt="Heist Overview"
          className="h-[280px] w-full object-cover object-[center_20%]"
        />
        <div className="p-8">
          <p className="mb-3 text-sm font-semibold tracking-[0.3em] text-pink-400">
            FEATURED GUIDE
          </p>
          <h2 className="mb-4 text-4xl font-black text-white">
            Heist Overview
          </h2>
          <p className="mb-6 max-w-3xl text-zinc-300">
            Everything officially revealed and expected about planning, robberies, execution and escape in GTA VI.
          </p>
          <p className="font-semibold text-pink-400">
            Read Guide →
          </p>
        </div>
      </Link>
      <h2 className="mt-16 mb-6 text-2xl font-black uppercase tracking-wider text-white">
        MORE GUIDES
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Link
  href="/heists/wanted-system"
  className="block overflow-hidden rounded-3xl border border-pink-500/20 bg-zinc-900/30 backdrop-blur-xl transition-all duration-300 hover:border-pink-500/50 hover:-translate-y-2 hover:scale-[1.02]"
>
  <img
    src="/heists/wanted-system.jpg"
    alt="Wanted System"
    className="h-[220px] w-full object-cover"
  />
  <div className="p-6">
    <h3 className="mb-3 text-2xl font-bold text-white">
      Wanted System
    </h3>
    <p className="text-zinc-300">
      Learn how police AI, pursuits, wanted levels and law enforcement could evolve in GTA VI.
    </p>
    <p className="mt-6 font-medium text-pink-400">
      Read Guide →
    </p>
  </div>
</Link>
        <Link
  href="/heists/crimes-and-activities"
  className="block overflow-hidden rounded-3xl border border-pink-500/20 bg-zinc-900/30 backdrop-blur-xl transition-all duration-300 hover:border-pink-500/50 hover:-translate-y-2 hover:scale-[1.02]"
>
  <img
    src="/heists/crimes-and-activities.jpg"
    alt="Crimes & Activities"
    className="h-[220px] w-full object-cover"
  />
  <div className="p-6">
    <h3 className="mb-3 text-2xl font-bold text-white">
      Crimes & Activities
    </h3>
    <p className="text-zinc-300">
      Explore robberies, criminal opportunities and illegal activities available throughout Leonida.
    </p>
    <p className="mt-6 font-medium text-pink-400">
      Read Guide →
    </p>
  </div>
</Link>
        <Link
  href="/heists/money-making"
  className="block overflow-hidden rounded-3xl border border-pink-500/20 bg-zinc-900/30 backdrop-blur-xl transition-all duration-300 hover:border-pink-500/50 hover:-translate-y-2 hover:scale-[1.02]"
>
  <img
    src="/heists/money-making.jpg"
    alt="Money Making"
    className="h-[220px] w-full object-cover"
  />
  <div className="p-6">
    <h3 className="mb-3 text-2xl font-bold text-white">
      Money Making
    </h3>
    <p className="text-zinc-300">
      Discover the best official and expected ways to earn money, build your criminal empire and grow your wealth in GTA VI.
    </p>
    <p className="mt-6 font-medium text-pink-400">
      Read Guide →
    </p>
  </div>
</Link>
      </div>
    </main>
  );
}
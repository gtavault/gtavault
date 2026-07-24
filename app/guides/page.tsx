import Link from "next/link";
export default function GuidesPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20">

      <a
        href="/"
        className="mb-8 inline-flex text-sm font-medium text-pink-400 transition-colors hover:text-pink-300"
      >
        ← Back to Home
      </a>

      <h1 className="text-4xl font-black uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">
        GUIDES
      </h1>

      <p className="mt-6 max-w-2xl text-zinc-400">
        Tips, walkthroughs and information for Grand Theft Auto VI players.
      </p>
<Link
  href="/guides/gta-6-map-guide"
  className="mt-16 block overflow-hidden rounded-3xl border border-pink-500/20 bg-zinc-900/30 backdrop-blur-xl transition-all duration-300 hover:border-pink-500/50 hover:-translate-y-1"
>
 <img
  src="/guides/gta-6-map-guide.jpg"
  alt="The GTA VI Map Guide"
  className="h-[240px] w-full object-cover object-top"
/>

  <div className="p-8">
    <p className="mb-3 text-sm font-semibold tracking-[0.3em] text-pink-400">
      FEATURED GUIDE
    </p>

    <h2 className="mb-4 text-4xl font-black text-white">
     The GTA VI Map Guide
    </h2>

    <p className="mb-6 max-w-3xl text-zinc-300">
     Explore Vice City, Leonida and every confirmed location revealed by Rockstar Games so far.
    </p>

    <p className="font-semibold text-pink-400">
      Read Guide →
    </p>
  </div>

</Link>
<h2 className="mt-16 mb-6 text-2xl font-black tracking-wider uppercase text-white">
  OTHER GUIDES
</h2>

<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
<Link
  href="/guides/vice-city-districts"
  className="block overflow-hidden rounded-3xl border border-pink-500/20 bg-zinc-900/30 backdrop-blur-xl transition-all duration-300 hover:border-pink-500/50 hover:-translate-y-2 hover:scale-[1.02]"
>
  <img
    src="/guides/vice-city-districts.jpg"
    alt="Vice City Districts"
    className="h-[220px] w-full object-cover"
  />

  <div className="p-6">
    <h3 className="mb-3 text-2xl font-bold text-white">
      Vice City Districts
    </h3>

    <p className="text-zinc-300">
      Explore the different districts and regions revealed across Vice City and Leonida.
    </p>

    <p className="mt-6 font-medium text-pink-400">
      Read Guide →
    </p>
  </div>
</Link>

<Link
href="/guides/tips-and-tricks"
  className="block overflow-hidden rounded-3xl border border-pink-500/20 bg-zinc-900/30 backdrop-blur-xl transition-all duration-300 hover:border-pink-500/50 hover:-translate-y-2 hover:scale-[1.02]"
>
  <img
    src="/guides/tips-and-tricks.jpg"
   alt="GTA VI Tips & Tricks"
    className="h-[220px] w-full object-cover"
  />

  <div className="p-6">
    <h3 className="mb-3 text-2xl font-bold text-white">
    GTA VI Tips & Tricks
    </h3>

    <p className="text-zinc-300">
     Essential tips and useful information for new and returning GTA players.
    </p>

    <p className="mt-6 font-medium text-pink-400">
      Read Guide →
    </p>
  </div>
</Link>

<Link
  href="/guides/everything-confirmed"
  className="block overflow-hidden rounded-3xl border border-pink-500/20 bg-zinc-900/30 backdrop-blur-xl transition-all duration-300 hover:border-pink-500/50 hover:-translate-y-2 hover:scale-[1.02]"
>
  <img
  src="/guides/everything-confirmed.jpg"
  alt="Everything Confirmed So Far"
    className="h-[220px] w-full object-cover"
  />

  <div className="p-6">
    <h3 className="mb-3 text-2xl font-bold text-white">
     Everything Confirmed So Far
    </h3>

    <p className="text-zinc-300">
     A complete roundup of every officially confirmed detail about Grand Theft Auto VI.
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
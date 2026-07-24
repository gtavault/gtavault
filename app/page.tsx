import Countdown from "@/components/Countdown";
import HomeVaultHero from "@/components/vaultscore/HomeVaultHero";
import Card from "@/components/Card";
export default function Home() {
  return (
   <main className="mx-auto mt-6 w-full max-w-6xl px-4 sm:mt-8 sm:px-6">
<section className="relative mb-12 overflow-hidden rounded-3xl border border-pink-500/30 bg-zinc-900/30 p-8 lg:p-10 backdrop-blur-xl shadow-[0_0_80px_rgba(236,72,153,0.25)]">

  {/* glow background */}
 <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.45),transparent_55%),radial-gradient(circle_at_bottom,rgba(236,72,153,0.6),transparent_55%),radial-gradient(circle_at_center,rgba(244,114,182,0.35),transparent_70%)]" />

  {/* content */}
 <div className="relative z-10 flex flex-col items-center justify-center text-center">
  <p className="text-zinc-300 uppercase tracking-[0.35em] text-base font-semibold mb-8">
    GTA VI RELEASES IN
  </p>

  <div className="text-3xl sm:text-5xl md:text-8xl font-black tracking-[0.08em] text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 leading-none">
  <Countdown />
</div>

  <p className="text-zinc-300 mt-10 text-base font-semibold uppercase tracking-[0.25em]">
    19 November 2026
  </p>
</div>

</section>
   <div className="mt-16 mb-16">
  <HomeVaultHero />
</div>
      <section className="mt-16 space-y-8">

  {/* Featured */}

 <a
  href="/news"
  className="group relative block h-[520px] overflow-hidden rounded-[32px] border border-pink-500/20"
>

  {/* Background */}

  <img
    src="/news/latest.jpg"
    alt="Latest GTA 6 News"
    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
  />

  {/* Overlay */}

  <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />

  {/* Content */}

  <div className="relative flex h-full max-w-2xl flex-col justify-end p-10">

    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.4em] text-pink-400">
      Featured
    </p>

    <h2 className="text-5xl font-black leading-tight text-white">
      Latest GTA VI News
    </h2>

    <p className="mt-6 text-lg leading-8 text-zinc-300">
      Breaking updates, Rockstar announcements and everything happening in the
      world of Grand Theft Auto VI.
    </p>

    <div className="mt-8 inline-flex w-fit items-center rounded-full border border-pink-500/40 bg-pink-500/10 px-6 py-3 font-semibold text-white transition group-hover:bg-pink-500/20">
      Read Latest News →
    </div>

  </div>

</a>

  {/* Story + Media */}

  <div className="grid gap-8 lg:grid-cols-2">

   <a
  href="/story"
  className="group relative block h-[420px] overflow-hidden rounded-[32px] border border-purple-500/20"
>

  <img
    src="/story/home-story.jpg"
    alt="GTA 6 Story"
    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

  <div className="relative flex h-full flex-col justify-end p-8">

    <p className="text-sm uppercase tracking-[0.35em] text-purple-300">
      Story
    </p>

    <h2 className="mt-3 text-4xl font-black text-white">
      Jason & Lucia
    </h2>

    <p className="mt-4 max-w-md text-zinc-300 leading-7">
      Dive into character profiles, theories and every official story reveal.
    </p>

  </div>

</a>

    <a
  href="/media"
  className="group relative block h-[420px] overflow-hidden rounded-[32px] border border-pink-500/20"
>

  <img
    src="/media/home-media.jpg"
    alt="Media Archive"
    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

  <div className="relative flex h-full flex-col justify-end p-8">

    <p className="text-sm uppercase tracking-[0.35em] text-pink-300">
      Media Archive
    </p>

    <h2 className="mt-3 text-4xl font-black text-white">
      Official Screenshots & Trailers
    </h2>

    <p className="mt-4 max-w-md text-zinc-300 leading-7">
      Browse Rockstar's growing collection of trailers, artwork and screenshots.
    </p>

  </div>

</a>

  </div>

  {/* Bottom Row */}

 <section className="overflow-hidden rounded-[32px] border border-pink-500/20 bg-zinc-900/20">

  <div className="px-8 pt-8 pb-6">

    <p className="text-sm uppercase tracking-[0.4em] text-pink-400">
      World of GTA VI
    </p>

    <h2 className="mt-2 text-4xl font-black text-white">
      Explore the World
    </h2>

  </div>
<div className="grid md:grid-cols-3">
 <a
  href="/vehicles"
  className="group relative h-[340px] overflow-hidden"
>
  <img
    src="/home/vehicles-v2.webp"
    alt="Vehicles"
    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
  />

  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/35 transition" />

  <div className="relative flex h-full flex-col justify-end p-8">
    <h3 className="text-3xl font-black text-white">
      Vehicles
    </h3>

    <p className="mt-3 text-zinc-300">
      Supercars, boats, bikes and every confirmed vehicle.
    </p>
  </div>
</a>

<a
  href="/heists"
  className="group relative h-[340px] overflow-hidden"
>
  <img
    src="/home/heists.jpg"
    alt="Heists"
    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
  />

  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/35 transition" />

  <div className="relative flex h-full flex-col justify-end p-8">
    <h3 className="text-3xl font-black text-white">
      Heists & Crimes
    </h3>

    <p className="mt-3 text-zinc-300">
      Robberies, police, wanted levels and criminal gameplay.
    </p>
  </div>
</a>

<a
  href="/guides"
  className="group relative h-[340px] overflow-hidden"
>
  <img
    src="/home/guides.jpg"
    alt="Guides"
    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
  />

  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/35 transition" />

  <div className="relative flex h-full flex-col justify-end p-8">
    <h3 className="text-3xl font-black text-white">
      Guides
    </h3>

    <p className="mt-3 text-zinc-300">
      Maps, tips, gameplay systems and everything you need.
    </p>
  </div>
</a>

</div>

</section>
</section>

    </main>
  );
}
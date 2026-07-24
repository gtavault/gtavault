 import Link from "next/link";
export default function VehiclesPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
<a
  href="/"
  className="mb-8 inline-flex text-sm font-medium text-pink-400 transition-colors hover:text-pink-300"
>
  ← Back to Home
</a>
      <h1 className="text-4xl font-black uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">
        VEHICLES
      </h1>

      <p className="mt-6 max-w-2xl text-zinc-400">
        Explore every officially revealed vehicle from Grand Theft Auto VI.
      </p>
<Link
  href="/vehicles/declasse-tulip"
  className="mt-16 block overflow-hidden rounded-3xl border border-pink-500/20 bg-zinc-900/30 backdrop-blur-xl transition-all duration-300 hover:border-pink-500/50 hover:-translate-y-1"
>
<img
  src="/vehicles/declasse-tulip.webp"
  alt="Declasse Tulip"
  className="h-[320px] w-full object-cover"
/>

  <div className="p-8">
    <p className="mb-3 text-sm font-semibold tracking-[0.3em] text-pink-400">
      FEATURED VEHICLE
    </p>

    <h2 className="mb-4 text-4xl font-black text-white">
      Declasse Tulip
    </h2>

    <p className="mb-6 max-w-3xl text-zinc-300">
      One of the most recognisable vehicles spotted in official GTA VI footage. The Declasse Tulip appears to return as a classic American muscle car.
    </p>

   <p className="font-semibold text-pink-400">
  View Vehicle →
</p>
  </div>
</Link>
<h2 className="mt-16 mb-6 text-2xl font-black tracking-wider uppercase text-white">
  CONFIRMED VEHICLES
</h2>

<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

<Link
  href="/vehicles/bravado-banshee"
  className="block"
>
  <article className="overflow-hidden rounded-3xl border border-pink-500/20 bg-zinc-900/30 backdrop-blur-xl transition-all duration-300 hover:border-pink-500/50 hover:-translate-y-2 hover:scale-[1.02]">
    <img
      src="/vehicles/bravado-banshee.webp"
      alt="Bravado Banshee"
      className="h-[180px] w-full object-cover"
    />

    <div className="p-6">
      <h3 className="mb-3 text-2xl font-bold text-white">
        Bravado Banshee
      </h3>

      <p className="mb-6 text-zinc-400">
        Sports Car
      </p>

      <p className="font-medium text-pink-400">
        View Vehicle →
      </p>
    </div>
  </article>
</Link>


  <Link
  href="/vehicles/vapid-caracara"
  className="block"
>
  <article className="overflow-hidden rounded-3xl border border-pink-500/20 bg-zinc-900/30 backdrop-blur-xl transition-all duration-300 hover:border-pink-500/50 hover:-translate-y-2 hover:scale-[1.02]">
    <img
      src="/vehicles/vapid-caracara.webp"
      alt="Vapid Caracara"
      className="h-[180px] w-full object-cover"
    />

    <div className="p-6">
      <h3 className="mb-3 text-2xl font-bold text-white">
        Vapid Caracara
      </h3>

      <p className="mb-6 text-zinc-400">
        Pickup Truck
      </p>

      <p className="font-medium text-pink-400">
        View Vehicle →
      </p>
    </div>
  </article>
</Link>

 <Link
  href="/vehicles/gauntlet-hellfire"
  className="block"
>
  <article className="overflow-hidden rounded-3xl border border-pink-500/20 bg-zinc-900/30 backdrop-blur-xl transition-all duration-300 hover:border-pink-500/50 hover:-translate-y-2 hover:scale-[1.02]">
    <img
      src="/vehicles/gauntlet-hellfire.webp"
      alt="Gauntlet Hellfire"
      className="h-[180px] w-full object-cover"
    />

    <div className="p-6">
      <h3 className="mb-3 text-2xl font-bold text-white">
        Gauntlet Hellfire
      </h3>

      <p className="mb-6 text-zinc-400">
        Muscle Car
      </p>

      <p className="font-medium text-pink-400">
        View Vehicle →
      </p>
    </div>
  </article>
</Link>
</div>

    </main>
  );
}
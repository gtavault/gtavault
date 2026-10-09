
"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { vehicles } from "@/lib/vehicles";

const categories = [
  "All",
  ...Array.from(new Set(vehicles.map((vehicle) => vehicle.category))),
];

const FEATURED_START_DATE = new Date("2026-10-08T00:00:00");
const DAY_IN_MS = 24 * 60 * 60 * 1000;

function getDailyFeaturedIndex() {
  const elapsedDays = Math.floor(
    (Date.now() - FEATURED_START_DATE.getTime()) / DAY_IN_MS
  );

  return (
    ((elapsedDays % vehicles.length) + vehicles.length) %
    vehicles.length
  );
}

export default function VehiclesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [featuredIndex, setFeaturedIndex] = useState(0);

  useEffect(() => {
    const updateFeatured = () => {
      setFeaturedIndex(getDailyFeaturedIndex());
    };

    updateFeatured();

    // Recheck periodically so the feature changes even if the page stays open.
    const interval = window.setInterval(updateFeatured, 60_000);

    return () => window.clearInterval(interval);
  }, []);

  const featured = vehicles[featuredIndex] ?? vehicles[0];

  const filteredVehicles = useMemo(() => {
    return vehicles.filter(
      (vehicle) =>
        vehicle.slug !== featured?.slug &&
        (activeCategory === "All" ||
          vehicle.category === activeCategory)
    );
  }, [activeCategory, featured]);

  return (
    <main className="min-h-screen bg-[#050507] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <img
            src="/vehicles/vehicles-hero.jpg"
            alt=""
            className="h-full w-full object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-[#050507]/65 to-[#050507]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(236,72,153,0.18),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(34,211,238,0.12),transparent_40%)]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 pb-20 pt-10 md:px-10 md:pb-28 md:pt-16">
          <Link
            href="/"
            className="text-xs font-bold uppercase tracking-[0.25em] text-zinc-400 transition hover:text-pink-400"
          >
            ← Back to Home
          </Link>

          <div className="mt-20 max-w-5xl md:mt-28">
            <p className="text-[10px] font-black uppercase tracking-[0.35em] text-pink-400 md:text-xs">
              GTA Vault / Vehicle Database
            </p>

            <h1 className="mt-5 text-5xl font-black uppercase leading-[0.9] tracking-[-0.05em] md:text-7xl lg:text-8xl">
              Vehicles
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-zinc-300 md:text-xl md:leading-9">
              Explore the vehicles officially revealed for Grand Theft
              Auto VI, from performance cars to motorcycles and
              watercraft. Discover what is confirmed and what remains
              unknown.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <div className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-xs text-zinc-300 backdrop-blur">
                {vehicles.length} database entries
              </div>
              <div className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-xs text-zinc-300 backdrop-blur">
                Officially confirmed
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED VEHICLE — ROTATES EVERY 24 HOURS */}
      {featured && (
        <section className="py-14 md:py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="mb-6">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-pink-400">
                Featured Vehicle
              </p>
            </div>
          </div>

          <Link
            href={`/vehicles/${featured.slug}`}
            className="group relative block h-[460px] w-full overflow-hidden border-y border-white/10 bg-zinc-950 md:h-[620px]"
          >
            <img
              src={featured.image}
              alt={featured.name}
              className="h-full w-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-black/20" />

            <div className="absolute inset-0 flex items-end">
              <div className="mx-auto w-full max-w-7xl px-6 pb-10 md:px-10 md:pb-16">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-pink-400">
                  {featured.category} / {featured.manufacturer}
                </p>

                <h2 className="mt-4 max-w-4xl text-4xl font-black uppercase leading-[0.9] tracking-[-0.04em] md:text-6xl lg:text-7xl">
                  {featured.name}
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-300 md:text-lg">
                  {featured.description}
                </p>

                <p className="mt-7 text-xs font-black uppercase tracking-[0.2em] text-pink-400">
                  Explore Vehicle →
                </p>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* VEHICLE ARCHIVE */}
      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10 md:pb-28">
        <div className="mb-8">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-pink-400">
            The Database
          </p>
          <h2 className="mt-2 text-3xl font-black uppercase tracking-[-0.03em] md:text-4xl">
            Explore Vehicles
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-500">
            Browse confirmed entries by vehicle category. More vehicles
            can be added to the database as official information emerges.
          </p>
        </div>

        {/* CATEGORY FILTERS */}
        <div className="mb-8 flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`shrink-0 rounded-full border px-4 py-2 text-[10px] font-black uppercase tracking-[0.15em] transition ${
                activeCategory === category
                  ? "border-pink-500 bg-pink-500/15 text-pink-300"
                  : "border-white/10 bg-white/[0.025] text-zinc-400 hover:border-white/25 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* VEHICLE GRID */}
        {filteredVehicles.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredVehicles.map((vehicle) => (
              <Link
                key={vehicle.slug}
                href={`/vehicles/${vehicle.slug}`}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] transition duration-300 hover:-translate-y-1 hover:border-pink-500/40"
              >
                <div className="relative h-[220px] overflow-hidden bg-zinc-900">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  <span className="absolute bottom-4 left-4 rounded-full border border-white/15 bg-black/50 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.15em] text-pink-300 backdrop-blur">
                    {vehicle.category}
                  </span>
                </div>

                <div className="p-5">
                  <p className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500">
                    {vehicle.manufacturer}
                  </p>

                  <h3 className="mt-2 text-xl font-black text-white">
                    {vehicle.name}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-zinc-400">
                    {vehicle.description}
                  </p>

                  <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                    <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-zinc-500">
                      {vehicle.status}
                    </span>
                    <span className="text-sm text-pink-400 transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-white/10 bg-white/[0.025] px-6 py-16 text-center">
            <p className="text-lg font-bold text-white">
              No vehicles in this category yet
            </p>
            <p className="mt-2 text-sm text-zinc-500">
              Choose another category to browse the database.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}

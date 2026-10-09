
"use client";

import Link from "next/link";
import { use } from "react";
import { vehicles } from "@/lib/vehicles";
import ArticleMeta from "@/components/ArticleMeta";

function headingId(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function isHeading(line: string) {
  return (
    line.trim().length > 0 &&
    line.trim() === line.trim().toUpperCase() &&
    !line.trim().startsWith("•")
  );
}

export default function VehicleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);

  const vehicle = vehicles.find((item) => item.slug === slug);

  if (!vehicle) {
    return (
      <main className="min-h-screen bg-[#050507] px-6 py-32 text-center text-white">
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-pink-400">
          GTA Vault / Vehicle Database
        </p>

        <h1 className="mt-4 text-4xl font-black">
          Vehicle Not Found
        </h1>

        <p className="mx-auto mt-4 max-w-md text-zinc-500">
          This vehicle could not be found in the GTA Vault database.
        </p>

        <Link
          href="/vehicles"
          className="mt-8 inline-flex text-sm font-bold uppercase tracking-[0.2em] text-pink-400 transition hover:text-pink-300"
        >
          ← Back to Vehicles
        </Link>
      </main>
    );
  }

  const paragraphs = vehicle.content
    .trim()
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter(Boolean);

  return (
    <main className="min-h-screen bg-[#050507] text-white">

      {/* CINEMATIC HERO */}
      <section className="relative min-h-[540px] overflow-hidden border-b border-white/10 md:min-h-[680px]">

        <div className="absolute inset-0">
          <img
            src={vehicle.image}
            alt=""
            className="h-full w-full object-cover object-center opacity-50"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/10" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-black/20" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(236,72,153,0.20),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(34,211,238,0.12),transparent_40%)]" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[540px] max-w-7xl flex-col justify-between px-6 py-8 md:min-h-[680px] md:px-10 md:py-12">

          <Link
            href="/vehicles"
            className="group inline-flex w-fit items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-zinc-400 transition hover:text-pink-400"
          >
            <span className="transition-transform group-hover:-translate-x-1">
              ←
            </span>
            Vehicle Database
          </Link>

          <div className="max-w-5xl pb-6 md:pb-10">

           
<div className="mt-5 flex flex-wrap items-center gap-2 text-[10px] font-black uppercase tracking-[0.25em] md:mt-7 md:gap-3 md:text-xs md:tracking-[0.3em]">
  <span className="text-pink-400">
    {vehicle.manufacturer}
  </span>

  <span className="text-zinc-600">/</span>

  <span className="text-zinc-400">
    {vehicle.category}
  </span>
</div>


            <h1 className="mt-6 text-4xl font-black uppercase leading-[0.98] tracking-[-0.045em] sm:text-5xl md:mt-5 md:text-7xl md:leading-[0.9] lg:text-8xl">
              {vehicle.name}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300 md:text-xl md:leading-9">
              {vehicle.description}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">

              <span className="rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.15em] text-pink-300">
                {vehicle.status}
              </span>

              <span className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-[10px] font-black uppercase tracking-[0.15em] text-zinc-300">
                {vehicle.category}
              </span>

            </div>

            <ArticleMeta
              updated={vehicle.updated}
              readingTime="3"
            />

          </div>

        </div>
      </section>

      {/* VEHICLE INFORMATION */}
      <section className="mx-auto max-w-7xl px-6 py-12 md:px-10 md:py-16">

        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">

          {/* MAIN ARTICLE */}
          <article className="min-w-0">

            <div className="mb-8">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-pink-400">
                Vehicle Intelligence
              </p>

              <h2 className="mt-2 text-3xl font-black uppercase tracking-[-0.03em] md:text-4xl">
                About This Vehicle
              </h2>
            </div>

            <div className="space-y-10">

              {paragraphs.map((block, index) => {
                const lines = block
                  .split("\n")
                  .map((line) => line.trim())
                  .filter(Boolean);

                const firstLine = lines[0];

                if (isHeading(firstLine)) {
                  return (
                    <section key={index} className="scroll-mt-24">

                      <div className="mb-4 flex items-center gap-4">
                        <div className="h-px w-10 bg-pink-500/60" />

                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-pink-400">
                          GTA Vault
                        </p>
                      </div>

                      <h2
                        id={headingId(firstLine)}
                        className="text-2xl font-black uppercase tracking-[-0.025em] md:text-3xl"
                      >
                        {firstLine}
                      </h2>

                      <div className="mt-5">
                        {lines.slice(1).map((line, lineIndex) => (
                          <p
                            key={lineIndex}
                            className="mb-4 text-base leading-8 text-zinc-300 md:text-lg"
                          >
                            {line}
                          </p>
                        ))}
                      </div>

                    </section>
                  );
                }

                if (
                  lines.length > 0 &&
                  lines.every((line) => line.startsWith("•"))
                ) {
                  return (
                    <ul
                      key={index}
                      className="space-y-4 rounded-2xl border border-white/10 bg-white/[0.025] p-6 text-base leading-7 text-zinc-300 md:p-8"
                    >
                      {lines.map((line, lineIndex) => (
                        <li key={lineIndex} className="flex gap-3">
                          <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-pink-400" />
                          <span>{line.replace(/^•\s*/, "")}</span>
                        </li>
                      ))}
                    </ul>
                  );
                }

                return (
                  <div key={index}>
                    {lines.map((line, lineIndex) => (
                      <p
                        key={lineIndex}
                        className="mb-4 text-base leading-8 text-zinc-300 md:text-lg"
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                );
              })}

            </div>

          </article>

          {/* SPECIFICATIONS PANEL */}
          <aside className="h-fit rounded-2xl border border-white/10 bg-white/[0.025] p-6 md:p-7">

            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-pink-400">
              Vehicle Profile
            </p>

            <h2 className="mt-3 text-2xl font-black">
              {vehicle.name}
            </h2>

            <div className="mt-6 divide-y divide-white/10">

              <div className="flex justify-between gap-4 py-4">
                <span className="text-sm text-zinc-500">
                  Manufacturer
                </span>
                <span className="text-right text-sm font-semibold text-white">
                  {vehicle.manufacturer}
                </span>
              </div>

              <div className="flex justify-between gap-4 py-4">
                <span className="text-sm text-zinc-500">
                  Category
                </span>
                <span className="text-right text-sm font-semibold text-white">
                  {vehicle.category}
                </span>
              </div>

              <div className="flex justify-between gap-4 py-4">
                <span className="text-sm text-zinc-500">
                  Price
                </span>
                <span className="max-w-[150px] text-right text-sm font-semibold text-white">
                  {vehicle.price || "Not revealed"}
                </span>
              </div>

              <div className="flex justify-between gap-4 py-4">
                <span className="text-sm text-zinc-500">
                  Status
                </span>
                <span className="max-w-[150px] text-right text-sm font-semibold text-pink-300">
                  {vehicle.status}
                </span>
              </div>

            </div>

            <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-4">
              <p className="text-xs leading-6 text-zinc-500">
                Performance figures, in-game prices and further
                specifications will be added when officially confirmed.
              </p>
            </div>

          </aside>

        </div>

        {/* RETURN LINK */}
        <div className="mt-16 border-t border-white/10 pt-8">
          <Link
            href="/vehicles"
            className="group inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.25em] text-zinc-500 transition hover:text-pink-400"
          >
            <span className="transition-transform group-hover:-translate-x-1">
              ←
            </span>
            Back to Vehicle Database
          </Link>
        </div>

      </section>

    </main>
  );
}

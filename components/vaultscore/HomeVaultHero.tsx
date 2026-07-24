"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import VaultScoreRing from "./VaultScoreRing";

export default function HomeVaultHero() {
  return (
   <section className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#070707] via-[#0b0b10] to-black before:absolute before:inset-0 before:rounded-[32px] border border-pink-500/35 shadow-[0_0_25px_rgba(236,72,153,0.08)] before:p-px before:bg-gradient-to-br before:from-cyan-400/30 before:via-white/10 before:to-pink-500/30 before:[mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[mask-composite:xor] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor]">
   <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_45%)]" />

<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.12),transparent_45%)]" />

<div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.25))]" />

<div className="pointer-events-none absolute inset-0 opacity-[0.035] bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:48px_48px]" />

<div className="relative z-10 mx-auto flex min-h-[80vh] max-w-7xl flex-col items-center gap-8 px-4 py-10 lg:flex-row lg:gap-20 lg:px-10 lg:py-20">

        {/* LEFT */}
        <div className="flex-1 max-w-2xl">

          <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">
            THIS WEEK
          </span>

          <h1 className="mt-8 text-5xl font-black leading-[0.9] tracking-[-0.04em] sm:text-6xl md:text-[7rem] xl:text-[8rem]">
            <span className="block text-white">VAULT</span>

            <span className="block text-white">
              SCORE
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
            Every Thursday GTA Vault analyses Rockstar's weekly GTA Online
            update and produces a premium Vault Score based on rewards,
            replayability, content and overall value.
          </p>

          <div className="mt-12 flex flex-wrap gap-5">

    <Link

  href="/report"

  className="-mt-4 rounded-full bg-white px-8 py-4 text-sm font-bold uppercase tracking-[0.25em] text-black transition hover:scale-105"

>
  View Report
  <ArrowRight className="ml-3 inline h-4 w-4" />
</Link>


          </div>

        </div>

        {/* RIGHT */}
        <div className="flex flex-1 items-center justify-center">

          <VaultScoreRing score={94} />

        </div>

      </div>

    </section>
  );
}
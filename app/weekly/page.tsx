
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Weekly Vault Score",
  description: "The latest weekly GTA VI briefing from GTA Vault.",
  openGraph: {
    title: "Weekly Vault Score | GTA Vault",
    description: "The weekly GTA VI briefing from GTA Vault.",
    images: [
      {
        url: "/weekly-hero.jpg?v=20261116",
        width: 1200,
        height: 630,
        alt: "GTA Vault Weekly Intelligence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Weekly Vault Score | GTA Vault",
    description: "The weekly GTA VI briefing from GTA Vault.",
    images: ["/weekly-hero.jpg?v=20261116"],
  },
};

export default function WeeklyPage() {
  return (
    <main className="min-h-screen bg-[#050507] text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <img
            src="/weekly-hero.jpg"
            alt=""
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-[#050507]/65 to-[#050507]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(236,72,153,0.18),transparent_38%),radial-gradient(circle_at_85%_20%,rgba(34,211,238,0.10),transparent_38%)]" />
        </div>

        <div className="relative mx-auto max-w-[1500px] px-6 pb-20 pt-10 md:px-10 md:pb-28 md:pt-14">
          <Link
            href="/"
            className="group inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-zinc-500 transition hover:text-pink-400"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>
            Back to Home
          </Link>

          <div className="mt-20 max-w-5xl md:mt-28">
            <p className="text-[11px] font-black uppercase tracking-[0.35em] text-pink-400">
              GTA Vault / GTA VI Online
            </p>

            <h1 className="mt-5 text-6xl font-black leading-[0.9] tracking-[-0.055em] text-white md:text-8xl lg:text-[110px]">
              WEEKLY
              <br />
              <span className="text-zinc-500">VAULT SCORE</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400 md:text-xl md:leading-9">
              The weekly briefing for GTA VI Online. Coming soon.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#08080c]">
        <div className="mx-auto max-w-[1500px] px-6 py-20 text-center md:px-10 md:py-32">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-pink-400">
            GTA VI Online
          </p>

          <h2 className="mt-5 text-4xl font-black uppercase tracking-tight sm:text-5xl md:text-7xl">
            COMING SOON
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/50 md:text-base">
            The Vault Score is preparing for a new generation. Once GTA VI
            Online launches, we'll bring you weekly ratings covering bonuses,
            discounts, activities and rewards.
          </p>

          <div className="mx-auto mt-10 h-px max-w-xs bg-gradient-to-r from-transparent via-pink-500/60 to-transparent" />

          <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
            Weekly intelligence · Independent ratings · GTA Vault
          </p>
        </div>
      </section>
    </main>
  );
}

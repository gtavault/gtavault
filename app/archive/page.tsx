import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ArchivePage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-zinc-300 transition hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
      </div>

      <div className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
          GTA Vault
        </p>

        <h1 className="text-5xl font-black">
          Archive
        </h1>

        <p className="max-w-3xl text-lg text-zinc-400">
          Browse every GTA Vault Weekly Report, including Vault Scores,
          strategies, discounts and money-making guides.
        </p>
      </div>
    </main>
  );
}
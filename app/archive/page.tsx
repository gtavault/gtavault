import Link from "next/link";

export const metadata = {
  title: "Archive | GTA Vault",
  description: "Explore GTA Vault's news, guides and features.",
};

export default function ArchivePage() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-5 py-12 text-white sm:px-8">
      <Link
        href="/"
        className="text-sm font-medium text-cyan-300 transition hover:text-cyan-200"
      >
        ← Back to Home
      </Link>

      <header className="mb-10 mt-8">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
          GTA Vault
        </p>
        <h1 className="text-4xl font-black tracking-tight sm:text-6xl">
          Archive
        </h1>
        <p className="mt-4 max-w-2xl leading-7 text-white/65">
          Explore GTA Vault's latest news, guides and features.
        </p>
      </header>

      <section className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 sm:p-12">
        <h2 className="text-2xl font-bold">More coming soon</h2>
        <p className="mt-3 max-w-xl leading-7 text-white/60">
          We're working on bringing more content to the GTA Vault archive.
          Check back soon for updates.
        </p>
        <Link
          href="/news"
          className="mt-6 inline-block font-semibold text-cyan-300 transition hover:text-cyan-200"
        >
          Explore latest news →
        </Link>
      </section>
    </main>
  );
}

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050507] text-white">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-fuchsia-600/[0.08] blur-[140px]" />
        <div className="absolute right-[-180px] top-[20%] h-[550px] w-[550px] rounded-full bg-purple-600/[0.07] blur-[160px]" />
        <div className="absolute bottom-[-180px] left-[35%] h-[500px] w-[500px] rounded-full bg-cyan-500/[0.04] blur-[160px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050507_75%)]" />
      </div>

      <section className="relative mx-auto max-w-5xl px-5 pb-20 pt-8 sm:px-8 sm:pt-14">
        {/* Back */}
        <Link
          href="/"
          className="group mb-12 inline-flex items-center gap-2 border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-400 transition hover:border-fuchsia-500/30 hover:bg-fuchsia-500/[0.06] hover:text-white"
        >
          <ArrowLeft className="h-3.5 w-3.5 transition group-hover:-translate-x-1" />
          Back to Home
        </Link>

        {/* Header */}
        <header className="mb-14 max-w-3xl">
          <p className="mb-4 text-[9px] font-black uppercase tracking-[0.45em] text-fuchsia-400">
            GTA Vault / About
          </p>

          <h1 className="text-4xl font-black uppercase tracking-[-0.03em] text-white sm:text-6xl">
            About GTA Vault
          </h1>

          <div className="mt-6 h-px w-32 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400" />

          <p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
            An independent hub for GTA news, guides, vehicles, games and
            everything surrounding the next generation of Grand Theft Auto.
          </p>
        </header>

        {/* About */}
        <section className="border border-white/[0.07] bg-white/[0.025] p-6 backdrop-blur-sm sm:p-8">
          <div className="mb-6 flex items-start gap-5">
            <span className="pt-1 text-[9px] font-black tracking-[0.2em] text-fuchsia-500/50">
              01
            </span>

            <div>
              <h2 className="text-lg font-black uppercase tracking-[0.02em] text-white sm:text-xl">
                The Vault
              </h2>

              <div className="mt-3 h-px w-12 bg-gradient-to-r from-fuchsia-500 to-purple-500" />
            </div>
          </div>

          <div className="ml-0 space-y-4 text-sm leading-7 text-zinc-400 sm:ml-10">
            <p>
              GTA Vault is an independent fan website dedicated to covering
              Grand Theft Auto VI and the wider Grand Theft Auto universe. Our
              goal is to bring news, detailed guides, vehicle information,
              maps, gameplay updates and useful resources together in one
              place.
            </p>

            <p>
              Whether you're following the latest Rockstar announcements,
              exploring the world of Leonida, looking for information about
              vehicles and characters, or testing your knowledge through our
              games, GTA Vault is built to give the community a clean and
              reliable place to explore.
            </p>

            <p>
              We are passionate Grand Theft Auto fans building a platform that
              combines useful information with a premium experience.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="mt-5 border border-white/[0.07] bg-white/[0.025] p-6 backdrop-blur-sm sm:p-8">
          <div className="mb-6 flex items-start gap-5">
            <span className="pt-1 text-[9px] font-black tracking-[0.2em] text-purple-500/50">
              02
            </span>

            <div>
              <h2 className="text-lg font-black uppercase tracking-[0.02em] text-white sm:text-xl">
                Our Mission
              </h2>

              <div className="mt-3 h-px w-12 bg-gradient-to-r from-purple-500 to-fuchsia-500" />
            </div>
          </div>

          <div className="ml-0 text-sm leading-7 text-zinc-400 sm:ml-10">
            <p>
              Our aim is to become a leading destination for GTA VI news,
              guides, maps, vehicles, games and community resources by
              delivering useful, trustworthy content alongside a high-quality
              user experience.
            </p>
          </div>
        </section>

        {/* Vault Score */}
        <section className="mt-5 border border-white/[0.07] bg-white/[0.025] p-6 backdrop-blur-sm sm:p-8">
          <div className="mb-6 flex items-start gap-5">
            <span className="pt-1 text-[9px] font-black tracking-[0.2em] text-cyan-400/50">
              03
            </span>

            <div>
              <h2 className="text-lg font-black uppercase tracking-[0.02em] text-white sm:text-xl">
                The Vault Score
              </h2>

              <div className="mt-3 h-px w-12 bg-gradient-to-r from-cyan-400 to-purple-500" />
            </div>
          </div>

          <div className="ml-0 space-y-4 text-sm leading-7 text-zinc-400 sm:ml-10">
            <p>
              The Vault Score is GTA Vault's exclusive weekly rating system,
              designed to help players quickly judge the quality of each
              weekly GTA update.
            </p>

            <p>
              Every week, updates are analysed across multiple categories,
              including money-making opportunities, discounts, new content,
              rewards and overall fun. These categories combine to produce a
              single Vault Score, giving players an easy way to see whether an
              update is worth jumping into.
            </p>

            <p>
              Until Grand Theft Auto VI launches, the Vault Score is used to
              review GTA Online weekly updates. Once GTA VI introduces its own
              regular content updates, the Vault Score will evolve alongside
              it.
            </p>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="mt-5 border border-fuchsia-500/[0.12] bg-fuchsia-500/[0.025] p-6 sm:p-8">
          <div className="mb-6 flex items-start gap-5">
            <span className="pt-1 text-[9px] font-black tracking-[0.2em] text-fuchsia-500/50">
              04
            </span>

            <div>
              <h2 className="text-lg font-black uppercase tracking-[0.02em] text-white sm:text-xl">
                Disclaimer
              </h2>

              <div className="mt-3 h-px w-12 bg-gradient-to-r from-fuchsia-500 to-cyan-400" />
            </div>
          </div>

          <div className="ml-0 text-sm leading-7 text-zinc-500 sm:ml-10">
            <p>
              GTA Vault is an independent fan project and is not affiliated
              with, endorsed by, or sponsored by Rockstar Games or Take-Two
              Interactive. Grand Theft Auto, GTA, Rockstar Games and all
              related names, logos, characters and trademarks are the property
              of their respective owners.
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
export default function AboutPage() {
  return (
    <main className="min-h-screen page-background text-white">
     <section className="mx-auto max-w-5xl px-6 pt-16 pb-16">
<Link
  href="/"
  className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-zinc-300 transition hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-white"
>
    <ArrowLeft className="h-4 w-4" />
    Back to Home
  </Link>
        <h1 className="mb-4 text-5xl font-bold tracking-tight">
          About GTA Vault
        </h1>

        <div className="mb-10 h-1 w-24 rounded-full bg-gradient-to-r from-pink-500 to-purple-500" />

        <div className="space-y-6 text-lg leading-8 text-gray-300">
          <p>
            GTA Vault is an independent fan website dedicated to covering
            everything Grand Theft Auto VI. Our goal is to provide players with
            accurate news, detailed guides, vehicle information, maps, gameplay
            updates and useful resources in one place.
          </p>

          <p>
            Whether you're looking for the latest Rockstar announcements,
            exploring the world of Leonida, or searching for in-depth guides,
            GTA Vault is built to help you stay informed before and after the
            launch of GTA VI.
          </p>

          <p>
            We are passionate Grand Theft Auto fans who believe in creating a
            clean, modern and reliable platform for the community.
          </p>
        </div>

        <div className="mt-16 rounded-2xl border border-pink-500/20 bg-white/5 p-8 backdrop-blur-sm">
          <h2 className="mb-4 text-2xl font-semibold text-white">
            Our Mission
          </h2>

          <p className="leading-8 text-gray-300">
            To become one of the leading destinations for GTA VI news, guides,
            maps, vehicles and community resources by delivering high-quality,
            trustworthy content with a premium user experience.
          </p>
        </div>
<div className="mt-16 rounded-2xl border border-pink-500/20 bg-white/5 p-8 backdrop-blur-sm">
  <h2 className="mb-4 text-2xl font-semibold text-white">
    The Vault Score
  </h2>

  <p className="leading-8 text-gray-300">
    The Vault Score is GTA Vault's exclusive weekly rating system, designed to
    help players quickly judge the quality of each weekly GTA update.
  </p>

  <p className="mt-4 leading-8 text-gray-300">
    Every week, updates are analysed across multiple categories including
    money-making opportunities, discounts, new content, rewards and overall
    fun. These categories combine to produce a single Vault Score, giving
    players an easy way to see whether an update is worth jumping into.
  </p>

  <p className="mt-4 leading-8 text-gray-300">
    Until Grand Theft Auto VI launches, the Vault Score is used to review GTA
    Online weekly updates. Once GTA VI introduces its own regular content
    updates, the Vault Score will evolve alongside it.
  </p>
</div>
        <div className="mt-16 rounded-2xl border border-white/10 bg-black/40 p-8">
          <h2 className="mb-4 text-2xl font-semibold text-white">
            Disclaimer
          </h2>

          <p className="leading-8 text-gray-400">
            GTA Vault is an independent fan project and is not affiliated with,
            endorsed by, or sponsored by Rockstar Games or Take-Two
            Interactive. Grand Theft Auto, GTA, Rockstar Games and all related
            names, logos and trademarks are the property of their respective
            owners.
          </p>
        </div>
      </section>
    </main>
  );
}
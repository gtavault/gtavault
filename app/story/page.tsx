import Link from "next/link";

export default function StoryPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20">

      <a
        href="/"
        className="mb-8 inline-flex text-sm font-medium text-pink-400 transition-colors hover:text-pink-300"
      >
        ← Back to Home
      </a>

      <h1 className="text-4xl font-black uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">
        STORY
      </h1>

      <p className="mt-6 max-w-2xl text-zinc-400">
        Explore everything officially revealed about Grand Theft Auto VI's story, protagonists and the characters shaping Rockstar's biggest adventure yet.
      </p>

      <Link
        href="/story/story-overview"
        className="mt-16 block overflow-hidden rounded-3xl border border-pink-500/20 bg-zinc-900/30 backdrop-blur-xl transition-all duration-300 hover:border-pink-500/50 hover:-translate-y-1"
      >
        <img
          src="/story/story-overview.jpg"
          alt="Story Overview"
          className="h-[240px] w-full object-cover object-[center_15%]"
        />

        <div className="p-8">
          <p className="mb-3 text-sm font-semibold tracking-[0.3em] text-pink-400">
            FEATURED STORY
          </p>

          <h2 className="mb-4 text-4xl font-black text-white">
            Story Overview
          </h2>

          <p className="mb-6 max-w-3xl text-zinc-300">
            Discover everything officially confirmed about GTA VI's story, protagonists and the events revealed by Rockstar Games so far.
          </p>

          <p className="font-semibold text-pink-400">
            Read Story →
          </p>
        </div>
      </Link>

      <h2 className="mt-16 mb-6 text-2xl font-black tracking-wider uppercase text-white">
        STORY PAGES
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">

        <Link
          href="/story/lucia"
          className="block overflow-hidden rounded-3xl border border-pink-500/20 bg-zinc-900/30 backdrop-blur-xl transition-all duration-300 hover:border-pink-500/50 hover:-translate-y-2 hover:scale-[1.02]"
        >
          <img
            src="/story/lucia.jpg"
            alt="Lucia"
            className="h-[220px] w-full object-cover"
          />

          <div className="p-6">
            <h3 className="mb-3 text-2xl font-bold text-white">
              Lucia
            </h3>

            <p className="text-zinc-300">
              Discover everything officially revealed about Lucia, one of GTA VI's two main protagonists.
            </p>

            <p className="mt-6 font-medium text-pink-400">
              Read Story →
            </p>
          </div>
        </Link>

        <Link
          href="/story/jason"
          className="block overflow-hidden rounded-3xl border border-pink-500/20 bg-zinc-900/30 backdrop-blur-xl transition-all duration-300 hover:border-pink-500/50 hover:-translate-y-2 hover:scale-[1.02]"
        >
          <img
            src="/story/jason.jpg"
            alt="Jason"
            className="h-[220px] w-full object-cover"
          />

          <div className="p-6">
            <h3 className="mb-3 text-2xl font-bold text-white">
              Jason
            </h3>

            <p className="text-zinc-300">
              Explore everything currently known about Jason and his role in GTA VI's story.
            </p>

            <p className="mt-6 font-medium text-pink-400">
              Read Story →
            </p>
          </div>
        </Link>

        <Link
          href="/story/supporting-characters"
          className="block overflow-hidden rounded-3xl border border-pink-500/20 bg-zinc-900/30 backdrop-blur-xl transition-all duration-300 hover:border-pink-500/50 hover:-translate-y-2 hover:scale-[1.02]"
        >
          <img
            src="/story/supporting-characters.jpg"
            alt="Supporting Characters"
            className="h-[220px] w-full object-cover"
          />

          <div className="p-6">
            <h3 className="mb-3 text-2xl font-bold text-white">
              Supporting Characters
            </h3>

            <p className="text-zinc-300">
              Meet the confirmed supporting characters revealed by Rockstar Games so far.
            </p>

            <p className="mt-6 font-medium text-pink-400">
              Read Story →
            </p>
          </div>
        </Link>

        <Link
          href="/story/story-theories"
          className="block overflow-hidden rounded-3xl border border-pink-500/20 bg-zinc-900/30 backdrop-blur-xl transition-all duration-300 hover:border-pink-500/50 hover:-translate-y-2 hover:scale-[1.02]"
        >
          <img
            src="/story/story-theories.jpg"
            alt="Story Theories"
            className="h-[220px] w-full object-cover object-[center_25%]"
          />

          <div className="p-6">
            <h3 className="mb-3 text-2xl font-bold text-white">
              Story Theories
            </h3>

            <p className="text-zinc-300">
              Explore the biggest community theories surrounding GTA VI's narrative and future events.
            </p>

            <p className="mt-6 font-medium text-pink-400">
              Read Story →
            </p>
          </div>
        </Link>

      </div>

    </main>
  );
}
import Link from "next/link";
import { newsPosts } from "@/lib/news";
export default function NewsPage() {
  return (
   <main className="mx-auto max-w-7xl px-8 py-12">
<a
  href="/"
  className="mb-8 inline-flex text-sm font-medium text-pink-400 transition-colors hover:text-pink-300"
>
  ← Back to Home
</a>
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white">

  GTA VI News

</h1>
<p className="mt-4 mb-10 max-w-xl text-lg leading-8 text-zinc-400 md:mt-5 md:mb-14 md:max-w-2xl md:text-xl md:leading-9">
  Everything officially revealed about GTA VI, in one place.
</p>
<div className="hidden md:block">
  <Link
  href="/news/everything-we-know"
  className="group relative mb-20 block overflow-hidden rounded-[32px] border border-white/10 bg-zinc-900 transition-all duration-500 hover:-translate-y-1 hover:border-pink-500/40"
>
  <div className="relative h-[540px] md:h-[520px] overflow-hidden">

    <img
      src="/news/everything-we-know.jpg"
      alt="Everything We Know About GTA VI So Far"
      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/10" />

  <div className="absolute inset-0 flex items-end">

  <div className="max-w-3xl p-10 md:p-16">

      <span className="inline-flex rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-pink-300 backdrop-blur">
        Featured Story
      </span>

      <h2 className="mt-6 max-w-2xl text-5xl font-black leading-[0.95] text-white md:text-6xl">
        Everything We Know About GTA VI So Far
      </h2>

      <p className="mt-5 max-w-3xl text-lg leading-9 text-zinc-300">
        Release date, Vice City, protagonists, gameplay, trailers and every official Rockstar announcement in one complete guide.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-zinc-400">
        <span>Updated Today</span>
        <span>•</span>
        <span>5 min read</span>
      </div>

      <div className="mt-8 inline-flex items-center rounded-full bg-white px-6 py-3 font-semibold text-black transition-transform duration-300 group-hover:translate-x-1">
        Read Full Story →
      </div>

    </div>
  </div>
</div>
</Link>
</div>
<div className="md:hidden mb-12">
  <Link
    href="/news/everything-we-know"
    className="group block"
  >
   <div className="relative overflow-hidden rounded-t-3xl border-x border-t border-white/10">

  <img
    src="/news/everything-we-know.jpg"
    alt="Everything We Know About GTA VI So Far"
    className="h-72 w-full object-cover"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

  <div className="absolute top-5 left-5">
    <span className="inline-flex rounded-full border border-pink-500/30 bg-pink-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-pink-300 backdrop-blur">
      Featured Story
    </span>
  </div>

</div>
<div className="rounded-b-3xl border-x border-b border-white/10 bg-zinc-950 px-6 py-5 -mt-px">

  <div className="flex items-center gap-3 text-sm text-zinc-400">
    <span>Updated Today</span>
    <span>•</span>
    <span>5 min read</span>
  </div>
<div className="mt-5 inline-flex items-center text-base font-semibold text-pink-400 transition-colors group-hover:text-pink-300">
    Read Full Story →
  </div>
  <h2 className="mt-4 text-3xl font-black leading-tight text-white">
    Everything We Know About GTA VI So Far
  </h2>

  

</div>

    
  </Link>
</div>
  
<h2 className="mb-6 text-2xl font-black tracking-wider uppercase text-white">

  LATEST ARTICLES

</h2>

{/* ---------- MOBILE ---------- */}

<div className="space-y-5 md:hidden">

  {newsPosts

    .filter((post) => post.slug !== "everything-we-know")

    .map((post, index) => (

      <Link

        href={`/news/${post.slug}`}

        key={post.slug}

        className="block"

      >

        

       

        

        <article className="flex gap-4 border-b border-white/10 pb-5">

  <img
    src={post.image}
    alt={post.title}
    className="h-28 w-28 rounded-2xl object-cover flex-shrink-0"
  />

  <div className="flex flex-col flex-1">

    <p className="text-xs text-zinc-500">
      {post.date}
    </p>

    <h3 className="mt-1 text-lg font-bold leading-snug text-white">
      {post.title}
    </h3>

    <p className="mt-2 line-clamp-2 text-sm text-zinc-400">
      {post.excerpt}
    </p>

    <p className="mt-3 text-sm font-medium text-pink-400">
      Read Story →
    </p>

  </div>

</article>

      </Link>

    ))}

</div>

{/* ---------- DESKTOP ---------- */}

<div className="hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">

  {newsPosts

    .filter((post) => post.slug !== "everything-we-know")

    .map((post) => (

      <Link

        href={`/news/${post.slug}`}

        key={post.slug}

      >

        <article className="group overflow-hidden rounded-3xl border border-pink-500/20 bg-zinc-900/30 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-pink-500/40">

          <img

            src={post.image}

            alt={post.title}

            className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"

          />

          <div className="flex flex-col p-6">

            <p className="text-sm text-zinc-400">

              {post.date}

            </p>

            <h3 className="mt-3 text-xl font-bold leading-tight text-white">

              {post.title}

            </h3>

            <p className="mt-3 line-clamp-3 text-zinc-300">
              {post.excerpt}
            </p>
            <p className="mt-6 font-medium text-pink-400">
              Read Story →
            </p>
          </div>
        </article>
      </Link>
    ))}
</div>

    </main>
  );
}
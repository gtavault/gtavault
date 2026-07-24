import Link from "next/link";
import { newsPosts } from "@/lib/news";
export default function NewsPage() {
  return (
    <main className="max-w-6xl mx-auto p-6">
<a
  href="/"
  className="mb-8 inline-flex text-sm font-medium text-pink-400 transition-colors hover:text-pink-300"
>
  ← Back to Home
</a>
    <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-wider uppercase
text-transparent bg-clip-text
bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">
        Latest News
      </h1>
<p className="text-zinc-300 mb-8">
  Stay up to date with GTA 6 leaks, updates, and announcements.
</p>
<Link
  href="/news/everything-we-know"
  className="mb-16 block overflow-hidden rounded-3xl border border-pink-500/20 bg-zinc-900/30 backdrop-blur-xl transition-all duration-300 hover:border-pink-500/50 hover:-translate-y-1"
>

 <img
  src="/news/everything-we-know.jpg"
  alt="Everything We Know About GTA VI So Far"
  className="h-[320px] w-full object-cover object-center"
/>

<div className="p-8">
    <p className="mb-3 text-sm font-semibold tracking-[0.3em] text-pink-400">
      FEATURED STORY
    </p>

    <h2 className="mb-4 text-4xl font-black text-white">
      Everything We Know About GTA VI So Far
    </h2>

    <p className="mb-6 max-w-3xl text-zinc-300">
      Release date, Vice City, characters, trailers and everything officially revealed about Grand Theft Auto VI so far.
    </p>

   
  </div>
</Link>
<h2 className="mb-6 text-2xl font-black tracking-wider uppercase text-white">
  LATEST ARTICLES
</h2>
     <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
  {newsPosts
  .filter((post) => post.slug !== "everything-we-know")
  .map((post) => (
   <Link
  href={`/news/${post.slug}`}
  key={post.slug}
>
  <article
className="flex h-full flex-col rounded-3xl border border-pink-500/20 bg-zinc-900/30 backdrop-blur-xl p-6 transition-all duration-300 hover:border-pink-500/30 hover:-translate-y-2 hover:scale-[1.02]"
  >
      <p className="text-sm text-zinc-400 mb-3">
        {post.date}
      </p>

     <h2 className="min-h-[64px] text-2xl font-bold text-white mb-3">
        {post.title}
      </h2>

      <p className="text-zinc-300">
        {post.excerpt}
      </p>
<p className="mt-auto pt-6 text-pink-400 font-medium">
  Read More →
</p>
   </article>
</Link>

  ))}
</div>



<div className="grid gap-6 md:grid-cols-3 mt-10">

 

 
  

</div>
    </main>
  );
}
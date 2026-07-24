import { notFound } from "next/navigation";
import { newsPosts } from "@/lib/news";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = newsPosts.find(
    (p) => p.slug === slug
  );

  if (!post) {
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto p-6">
        <a
  href="/news"
  className="inline-block mb-8 text-pink-400 hover:text-pink-300 transition"
>
  ← Back to News
</a>

      <p className="text-zinc-400 mb-4">
        {post.date}
      </p>
<p className="text-sm text-zinc-500 mb-6">
  By <span className="font-semibold text-white">GTA Vault</span> • Updated {post.updated}
</p>
      <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
        {post.title}
      </h1>
<div className="relative mb-10 overflow-hidden rounded-3xl">
  <img
    src={`/news/${post.slug}.jpg`}
    alt={post.title}
   className="h-[380px] w-full object-cover transition duration-500 hover:scale-[1.03]"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
</div>
  <div className="max-w-3xl space-y-6">
  {post.content.split("\n\n").map((paragraph, index) => {
    const isHeading =
      paragraph === paragraph.toUpperCase() &&
      paragraph.length < 40;

    if (isHeading) {
      return (
        <h2
          key={index}
          className="pt-6 text-2xl font-black tracking-wide text-pink-400"
        >
          {paragraph}
        </h2>
      );
    }

    return (
      <p
        key={index}
        className="text-lg leading-9 text-zinc-300"
      >
        {paragraph}
      </p>
    );
  })}
</div>
<div className="mt-20 border-t border-zinc-800 pt-10">
  <h2 className="text-2xl font-bold text-white mb-6">
    Related Articles
  </h2>

  <div className="grid gap-4 md:grid-cols-2">
    {newsPosts
      .filter((p) => p.slug !== post.slug)
      .map((related) => (
        <a
          key={related.slug}
          href={`/news/${related.slug}`}
          className="rounded-2xl border border-pink-500/20 bg-zinc-900/30 p-5 transition-all duration-300 hover:border-pink-500/50"
        >
          <p className="text-sm text-zinc-400 mb-2">
            {related.date}
          </p>

          <h3 className="font-bold text-white">
            {related.title}
          </h3>
        </a>
      ))}
  </div>
</div>
    </main>
  );
}
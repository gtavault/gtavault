import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { news } from "@/lib/news";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;

  const post = news.find((article) => article.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/news/${post.slug}`,
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
     url: `https://www.gtavaulthq.com/news/${post.slug}`,
      images: [
  {
    url: `https://www.gtavaulthq.com${post.image}`,
    alt: post.title,
  },
],
      publishedTime: post.date,
      modifiedTime: post.updated,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [`https://www.gtavaulthq.com${post.image}`],
    },
  };
}

function formatDate(date: string) {
  if (date.startsWith("Updated ")) {
    return date.replace("Updated ", "");
  }

  return date;
}

function isHeading(paragraph: string) {
  return (
    paragraph === paragraph.toUpperCase() &&
    paragraph.length > 0 &&
    paragraph.length < 60
  );
}

function headingId(heading: string) {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export default async function ArticlePage({
  params,
}: ArticlePageProps) {
  const { slug } = await params;

  const post = news.find((article) => article.slug === slug);

  if (!post) {
    notFound();
  }

  const paragraphs = post.content
    .split("\n\n")
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);


const relatedArticles = news
  .filter((article) => article.slug !== post.slug)
  .sort(() => Math.random() - 0.5)
  .slice(0, 4);


  const introParagraph =
    paragraphs.find((paragraph) => !isHeading(paragraph)) ?? "";

  const contentParagraphs = paragraphs.filter(
    (paragraph) => paragraph !== introParagraph
  );

  return (
    <main className="min-h-screen bg-[#050507] text-white">
            {/* ARTICLE HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        {/* HERO IMAGE */}
        <div className="absolute inset-0 z-0">
          <img
            src={post.image}
            alt=""
            className="h-full w-full object-cover object-center opacity-50"
          />

          {/* Dark cinematic overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-[#050507]/55 to-[#050507]" />

          {/* Colour glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(236,72,153,0.20),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(34,211,238,0.14),transparent_40%)]" />
        </div>

        {/* HERO CONTENT */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 pb-16 pt-8 md:px-10 md:pb-24 md:pt-12">
          <Link
            href="/news"
            className="group inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-zinc-400 transition hover:text-pink-400"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>
            GTA VI News
          </Link>

          <div className="mt-16 max-w-5xl md:mt-24">
            <div className="flex flex-wrap items-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em]">
              <span className="text-pink-400">{post.category}</span>

              <span className="text-zinc-600">/</span>

              <span className="text-zinc-400">
                {formatDate(post.date)}
              </span>
            </div>

            <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[0.94] tracking-[-0.045em] text-white md:text-7xl lg:text-[92px]">
              {post.title}
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-200 md:text-2xl md:leading-10">
              {post.excerpt}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.2em] text-zinc-400">
              {post.readingTime && (
                <span>{post.readingTime} min read</span>
              )}

              {post.updated && (
                <span>Updated {post.updated}</span>
              )}

              {post.sources && (
                <span>{post.sources} sources</span>
              )}
            </div>
          </div>
        </div>
      </section>

     {/* FEATURED MEDIA */}
<section className="mx-auto w-full px-6 md:px-10">
  <div className="relative mx-auto max-w-[1500px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-black shadow-[0_30px_100px_rgba(0,0,0,0.55)] md:rounded-[2rem]">
    {post.youtubeId ? (
      <a
        href={`https://www.youtube.com/watch?v=${post.youtubeId}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block aspect-video w-full overflow-hidden"
      >
        <img
          src={
  post.slug === "gta-6-extended-look-netflix"
    ? "/news/gta-6-extended-look-youtube.jpg"
    : post.image
}
          alt={post.title}
          className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/45 transition duration-500 group-hover:bg-black/30" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col items-center gap-5">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-black shadow-[0_0_50px_rgba(255,255,255,0.25)] transition duration-500 group-hover:scale-110 md:h-24 md:w-24">
              <span className="ml-1 text-3xl md:text-4xl">
                ▶
              </span>
            </div>

            <span className="rounded-full border border-white/20 bg-black/60 px-6 py-3 text-xs font-black uppercase tracking-[0.25em] text-white backdrop-blur-md transition duration-300 group-hover:border-pink-500/60 group-hover:text-pink-300">
              Watch on YouTube
            </span>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-white/5" />
      </a>
    ) : (
      <img
        src={post.image}
        alt={post.title}
        className="aspect-[16/8] w-full object-cover"
      />
    )}
  </div>
</section>
      {/* ARTICLE BODY */}
      <section className="w-full border-t border-white/5 px-6 py-16 md:px-10 md:py-24">
        <article className="mx-auto w-full max-w-[1500px]">
          <p className="border-l-2 border-pink-500 pl-5 text-xl font-medium leading-9 text-white md:text-2xl md:leading-10">
            {introParagraph}
          </p>

          <div className="mt-14 space-y-12">
            {contentParagraphs.map((paragraph, index) => {
              if (isHeading(paragraph)) {
                return (
                  <div
                    key={`${paragraph}-${index}`}
                    id={headingId(paragraph)}
                    className="scroll-mt-28 pt-8"
                  >
                    <div className="mb-4 h-px w-12 bg-pink-500" />

                    <h2 className="text-3xl font-black tracking-[-0.02em] text-white md:text-4xl">
                      {paragraph}
                    </h2>
                  </div>
                );
              }

              return (
                <p
                  key={index}
                  className="text-[17px] leading-8 text-zinc-300 md:text-lg md:leading-9"
                >
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* ARTICLE FOOTER */}
          <div className="mt-20 border-t border-white/10 pt-8">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600">
                  GTA Vault News
                </p>

                <p className="mt-2 text-sm text-zinc-500">
                  Independent coverage of Grand Theft Auto VI.
                </p>
              </div>

              <Link
                href="/news"
                className="rounded-full border border-pink-500/30 bg-pink-500/5 px-5 py-3 text-xs font-bold uppercase tracking-[0.2em] text-pink-400 transition hover:border-pink-500/60 hover:bg-pink-500/10"
              >
                Back to News
              </Link>
            </div>
          </div>
        </article>
      </section>

      {/* RELATED */}
      <section className="border-t border-white/10 bg-black/20">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-pink-400">
                Keep Reading
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-[-0.03em] md:text-5xl">
                More from the Vault
              </h2>
            </div>

            <Link
              href="/news"
              className="hidden text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 transition hover:text-pink-400 md:block"
            >
              View all news →
            </Link>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {relatedArticles.map((related) => (
              <Link
                key={related.slug}
                href={`/news/${related.slug}`}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 transition duration-500 hover:-translate-y-1 hover:border-pink-500/40"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={related.image}
                    alt=""
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </div>

                <div className="p-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-pink-400">
                    {related.category}
                  </p>

                  <h3 className="mt-3 text-lg font-bold leading-tight text-white">
                    {related.title}
                  </h3>

                  <p className="mt-4 text-xs uppercase tracking-[0.15em] text-zinc-600">
                    {formatDate(related.date)}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <Link
            href="/news"
            className="mt-8 block text-center text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 transition hover:text-pink-400 md:hidden"
          >
            View all news →
          </Link>
        </div>
      </section>
    </main>
  );
}
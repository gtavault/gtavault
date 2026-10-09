import Link from "next/link";
import { NewsArticle } from "@/lib/news";

interface RelatedArticlesProps {
  currentSlug: string;
  articles: NewsArticle[];
}

export default function RelatedArticles({
  currentSlug,
  articles,
}: RelatedArticlesProps) {
const relatedMap: Record<string, string[]> = {
  "everything-we-know": [
    "gta-6-pricing-revealed",
    "trailer-2-breaks-records",
  ],

  "gta-6-pricing-revealed": [
    "everything-we-know",
    "trailer-2-breaks-records",
  ],

  "gta-6-release-date-confirmed": [
    "gta-6-pricing-revealed",
    "everything-we-know",
  ],

  "trailer-2-breaks-records": [
    "vice-city-returns",
    "gta-6-release-date-confirmed",
  ],

  "vice-city-returns": [
    "trailer-2-breaks-records",
    "everything-we-know",
  ],
};

const related = (relatedMap[currentSlug] ?? [])
  .map((slug) => articles.find((article) => article.slug === slug))
  .filter((article): article is NewsArticle => Boolean(article));

  return (
    <section className="mx-auto mt-24 max-w-5xl border-t border-white/10 pt-12">

      <div className="flex items-end justify-between gap-6">

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-pink-400">
            Keep Exploring
          </p>

          <h2 className="mt-2 text-3xl font-black text-white">
            Related Articles
          </h2>
        </div>

        <Link
          href="/news"
          className="hidden text-sm font-medium text-pink-400 transition hover:text-pink-300 md:block"
        >
          View all news →
        </Link>

      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">

        {related.map((article) => (
          <Link
            key={article.slug}
            href={`/news/${article.slug}`}
            className="group rounded-2xl border border-white/10 bg-zinc-900/30 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-pink-500/40"
          >

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-pink-400">
              {article.category}
            </p>

            <h3 className="mt-3 text-xl font-bold text-white transition group-hover:text-pink-300">
              {article.title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-zinc-500">
              {article.excerpt}
            </p>

            <p className="mt-5 text-sm font-medium text-pink-400">
              Read Story →
            </p>

          </Link>
        ))}

      </div>

    </section>
  );
}
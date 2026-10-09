
import Link from "next/link";
import { notFound } from "next/navigation";
import { heistGuides } from "@/lib/heists";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return heistGuides.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const guide = heistGuides.find((item) => item.slug === slug);

  if (!guide) {
    return { title: "Guide Not Found | GTA Vault" };
  }

  return {
    title: `${guide.title} | GTA Vault`,
    description: guide.excerpt,
  };
}

export default async function HeistArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = heistGuides.find((item) => item.slug === slug);

  if (!guide) {
    notFound();
  }

  const blocks = guide.content
    .trim()
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter(Boolean);

  const isHeading = (block: string) =>
    /^[A-Z][A-Z &'?!-]*$/.test(block) && block.length < 65;

  return (
    <main className="min-h-screen bg-[#050507] text-white">
      {/* ARTICLE HEADER */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_30%,rgba(236,72,153,0.16),transparent_40%),radial-gradient(circle_at_85%_35%,rgba(34,211,238,0.10),transparent_40%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050507]/40 to-[#050507]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pb-12 pt-8 md:px-10 md:pb-16">
          <Link
            href="/heists"
            className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 transition-colors hover:text-pink-400"
          >
            ← Back to Heists & Crimes
          </Link>

          <div className="mt-14 max-w-5xl md:mt-20">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-pink-400 md:text-xs">
              GTA Vault / {guide.category}
            </p>

            <h1 className="mt-5 text-4xl font-black uppercase leading-[0.95] tracking-[-0.045em] md:text-6xl lg:text-7xl">
              {guide.title}
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-7 text-zinc-300 md:text-lg md:leading-8">
              {guide.excerpt}
            </p>

            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs text-zinc-500">
              <span>Updated {guide.updated}</span>
              {guide.readingTime && (
                <span>{guide.readingTime} min read</span>
              )}
              <span>{guide.category}</span>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE IMAGE */}
      <section className="mx-auto max-w-7xl px-6 pt-8 md:px-10 md:pt-12">
        <div className="relative h-[260px] overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 sm:h-[380px] lg:h-[520px]">
          <img
            src={guide.image}
            alt={guide.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>
      </section>

      {/* ARTICLE CONTENT */}
      <article className="mx-auto max-w-4xl px-6 py-12 md:px-10 md:py-16">
        <div className="mb-10 border-l-2 border-pink-500 pl-5">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-pink-400">
            Criminal Intelligence
          </p>
          <p className="mt-3 text-lg leading-8 text-zinc-300">
            {guide.excerpt}
          </p>
        </div>

        <div className="space-y-6">
          {blocks.map((block, index) => {
            if (isHeading(block)) {
              const isPlanning =
                block === "PLANNING THE PERFECT JOB";
              const isEscape = block === "EXECUTION & ESCAPE";

              return (
                <div key={`${block}-${index}`} className="pt-7">
                  <h2 className="border-b border-white/10 pb-4 text-2xl font-black uppercase tracking-[-0.025em] md:text-3xl">
                    {block}
                  </h2>

                  {isPlanning && guide.planningImage && (
                    <figure className="mt-7 overflow-hidden rounded-xl border border-white/10">
                      <img
                        src={guide.planningImage}
                        alt="Planning a heist"
                        className="max-h-[480px] w-full object-cover"
                      />
                      <figcaption className="bg-white/[0.03] px-4 py-3 text-xs text-zinc-500">
                        Preparation and planning
                      </figcaption>
                    </figure>
                  )}

                  {isEscape && guide.escapeImage && (
                    <figure className="mt-7 overflow-hidden rounded-xl border border-white/10">
                      <img
                        src={guide.escapeImage}
                        alt="Escaping after a heist"
                        className="max-h-[480px] w-full object-cover"
                      />
                      <figcaption className="bg-white/[0.03] px-4 py-3 text-xs text-zinc-500">
                        Execution and escape
                      </figcaption>
                    </figure>
                  )}
                </div>
              );
            }

            if (block.startsWith("•")) {
              return (
                <div
                  key={`${block}-${index}`}
                  className="flex gap-3 rounded-lg border border-white/[0.06] bg-white/[0.025] p-4"
                >
                  <span className="mt-0.5 text-pink-400">•</span>
                  <p className="text-sm leading-7 text-zinc-300">
                    {block.slice(1).trim()}
                  </p>
                </div>
              );
            }

            return (
              <p
                key={`${block}-${index}`}
                className="text-base leading-8 text-zinc-300 md:text-[17px]"
              >
                {block}
              </p>
            );
          })}
        </div>

        {/* ARTICLE FOOTER */}
        <div className="mt-14 border-t border-white/10 pt-7">
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-pink-400">
            GTA Vault Analysis
          </p>
          <p className="mt-3 text-sm leading-7 text-zinc-500">
            Information in this guide distinguishes known details from
            unconfirmed mechanics. It will be updated as further reliable
            information becomes available.
          </p>
          <p className="mt-4 text-xs text-zinc-600">
            Last updated: {guide.updated}
          </p>
        </div>

        <Link
          href="/heists"
          className="mt-10 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-pink-400 transition-colors hover:text-pink-300"
        >
          ← Explore More Guides
        </Link>
      </article>
    </main>
  );
}

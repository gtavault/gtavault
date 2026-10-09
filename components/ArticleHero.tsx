import ScrollProgress from "./ScrollProgress";
import ArticleMeta from "./ArticleMeta";
interface ArticleHeroProps {

  title: string;

  image: string;

  updated: string;

  category: string;

  subtitle?: string;

  readingTime?: string;

}

export default function ArticleHero({

  title,

  image,

  updated,

  category,

  subtitle,

  readingTime = "5 min read",

}: ArticleHeroProps) {

return (
    <>
      <ScrollProgress />

      <section className="mb-16">

      <a

        href="/news"

        className="inline-flex items-center text-sm font-medium text-pink-400 transition hover:text-pink-300"

      >

        ← Back to News

      </a>

      <div className="mt-8">

        <span className="inline-flex rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-pink-300 backdrop-blur">

          {category}

        </span>

        <h1 className="mt-6 max-w-4xl text-4xl font-black leading-[0.95] text-white sm:text-5xl md:text-7xl">

          {title}

        </h1>

        <div className="mt-6 max-w-3xl">

          {subtitle && (

            <p className="mb-6 text-base leading-7 text-zinc-300 sm:text-lg sm:leading-8 md:text-xl">

              {subtitle}

            </p>

          )}

          <ArticleMeta
  updated={updated}
  readingTime={readingTime?.replace(" min read", "") ?? "5"}
/>

        </div>

      </div>

     <div className="relative mt-10">

  <img

    src={image}

    alt={title}

    className="h-[240px] w-full rounded-t-[32px] object-cover sm:h-[320px] md:h-[700px]"

    style={{

      maskImage:

        "linear-gradient(to bottom, black 45%, rgba(0,0,0,0.85) 58%, rgba(0,0,0,0.45) 72%, transparent 100%)",

      WebkitMaskImage:

        "linear-gradient(to bottom, black 45%, rgba(0,0,0,0.85) 58%, rgba(0,0,0,0.45) 72%, transparent 100%)",

    }}

  />

</div>

         </section>
    </>
  );
}
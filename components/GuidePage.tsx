import { NewsArticle, news } from "@/lib/news";
import ArticleHero from "./ArticleHero";
import Image from "next/image";
import RelatedArticles from "./RelatedArticles";

interface GuidePageProps {
  post: NewsArticle;
}

export default function GuidePage({
  post,
}: GuidePageProps) {
  return (
    <main className="mx-auto w-full max-w-7xl overflow-x-hidden px-4 py-8 sm:px-6 sm:py-10">

      

      <ArticleHero
        title={post.title}
        image={post.image}
        updated={post.updated}
        category={post.category}
        subtitle="The complete GTA Vault guide covering every official announcement, trailer, gameplay feature, character and release update."
        readingTime={post.readingTime}
      />

      <section className="mx-auto mt-20 w-full max-w-3xl">

        <p className="text-sm font-bold uppercase tracking-[0.35em] text-pink-400">
          Introduction
        </p>

        <h2 className="mt-4 text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl">
          What is Grand Theft Auto VI?
        </h2>

        <p className="mt-8 text-base leading-8 text-zinc-300 sm:text-lg sm:leading-9 md:text-xl md:leading-10">
          Grand Theft Auto VI is Rockstar Games' next open-world blockbuster and the long-awaited successor to Grand Theft Auto V. Set in the fictional state of Leonida, it introduces a new criminal story centred around Jason and Lucia while returning players to a modern-day Vice City.
        </p>

        <p className="mt-6 text-base leading-8 text-zinc-400 sm:text-lg sm:leading-9">
          This guide brings together every major official announcement in one place, from the confirmed release date and trailers to Rockstar's latest reveals. Whenever Rockstar publishes new information, this page will be updated to reflect the latest official details.
        </p>

      </section>

      <div className="mx-auto mt-16 h-px w-full max-w-3xl bg-gradient-to-r from-transparent via-zinc-700 to-transparent sm:mt-20" />

      <section className="mx-auto mt-16 w-full max-w-3xl sm:mt-20">

        <p className="text-sm font-bold uppercase tracking-[0.35em] text-pink-400">
          The Story So Far
        </p>

        <h2 className="mt-4 text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl">
          From reveal to release
        </h2>

        <p className="mt-8 text-base leading-8 text-zinc-300 sm:text-lg sm:leading-9 md:text-xl md:leading-10">
          Rockstar Games officially revealed Grand Theft Auto VI in December 2023, ending years of speculation surrounding one of the most anticipated games ever made. Since then, every trailer and announcement has offered a clearer picture of the studio's next open-world adventure while leaving plenty of questions unanswered.
        </p>

      </section>

      <div className="mx-auto mt-16 h-px w-full max-w-3xl bg-gradient-to-r from-transparent via-zinc-700 to-transparent sm:mt-20" />

{/* GTA VI Timeline */}
<section className="mx-auto mt-10 max-w-3xl text-center">

  <p className="text-sm font-bold uppercase tracking-[0.35em] text-pink-400">
    THE STORY SO FAR
  </p>

  <h2 className="mt-2 text-3xl font-black leading-tight text-white">
    GTA VI Timeline
  </h2>

  <p className="mt-3 text-sm text-zinc-400">
    Every major announcement, trailer and release update.
  </p>

</section>
            {/* GTA VI Timeline */}

      {/* MOBILE / TABLET — KEEP CURRENT SWIPE DESIGN */}

      <section className="relative left-1/2 mt-16 w-screen -translate-x-1/2 lg:hidden sm:mt-20">

        <div className="w-full overflow-x-auto overflow-y-hidden">

          <div className="flex w-max snap-x snap-mandatory">

            {/* TRAILER 1 */}

            <article className="w-screen shrink-0 snap-center px-4 sm:px-6">

              <div className="mx-auto flex h-[680px] w-full max-w-3xl flex-col rounded-3xl border border-white/10 bg-zinc-900/40 p-5 backdrop-blur sm:h-[720px] sm:p-6">

                <p className="text-sm font-bold uppercase tracking-[0.35em] text-pink-400">

                  DECEMBER 2023

                </p>

                <h3 className="mt-3 text-2xl font-black text-white sm:text-3xl">

                  Trailer 1 is released

                </h3>

                <Image

                  src="/guides/trailer.jpg"

                  alt="Grand Theft Auto VI Trailer 1"

                  width={1600}

                  height={900}

                  className="mt-6 h-[220px] w-full rounded-3xl object-cover sm:mt-8 sm:h-[260px]"

                />

                <p className="mt-3 text-sm italic text-zinc-500">

                  Rockstar Games officially revealed Grand Theft Auto VI on 4 December 2023.

                </p>

                <p className="mt-6 flex-1 text-base leading-8 text-zinc-400 sm:mt-8 sm:text-lg sm:leading-9">

                  Rockstar Games officially unveiled Grand Theft Auto VI with its first trailer, introducing Jason and Lucia while confirming the return of Vice City in the new state of Leonida. The reveal became one of the biggest moments in gaming history and finally gave fans their first official look at the next Grand Theft Auto.

                </p>

              </div>

            </article>

            {/* TRAILER 2 */}

            <article className="w-screen shrink-0 snap-center px-4 sm:px-6">

              <div className="mx-auto flex h-[680px] w-full max-w-3xl flex-col rounded-3xl border border-white/10 bg-zinc-900/40 p-5 backdrop-blur sm:h-[720px] sm:p-6">

                <p className="text-sm font-bold uppercase tracking-[0.35em] text-pink-400">

                  MAY 2025

                </p>

                <h3 className="mt-3 text-2xl font-black text-white sm:text-3xl">

                  Trailer 2 is released

                </h3>

                <Image

                  src="/guides/trailer2.jpg"

                  alt="Grand Theft Auto VI Trailer 2"

                  width={1600}

                  height={900}

                  className="mt-6 h-[220px] w-full rounded-3xl object-cover sm:mt-8 sm:h-[260px]"

                />

                <p className="mt-3 text-sm italic text-zinc-500">

                  Rockstar released Trailer 2 on 6 May 2025, revealing new gameplay, locations and story details.

                </p>

                <p className="mt-6 flex-1 text-base leading-8 text-zinc-400 sm:mt-8 sm:text-lg sm:leading-9">

                  Rockstar's second trailer expanded the story, showcasing Jason and Lucia's relationship while revealing more of Leonida's cities, countryside and gameplay. New details on the world, characters and activities gave fans their clearest look yet at Rockstar's most ambitious open-world game.

                </p>

              </div>

            </article>

            {/* FIRST RELEASE DATE DELAY */}

            <article className="w-screen shrink-0 snap-center px-4 sm:px-6">

              <div className="mx-auto flex h-[680px] w-full max-w-3xl flex-col rounded-3xl border border-white/10 bg-zinc-900/40 p-5 backdrop-blur sm:h-[720px] sm:p-6">

                <p className="text-sm font-bold uppercase tracking-[0.35em] text-pink-400">

                  MAY 2, 2025

                </p>

                <h3 className="mt-3 text-2xl font-black text-white sm:text-3xl">

                  GTA VI is delayed

                </h3>

                <Image

                  src="/guides/release-date.jpg"

                  alt="Grand Theft Auto VI release date announcement"

                  width={1600}

                  height={900}

                  className="mt-6 h-[220px] w-full rounded-3xl object-cover sm:mt-8 sm:h-[260px]"

                />

                <p className="mt-3 text-sm italic text-zinc-500">

                  Rockstar announced that Grand Theft Auto VI would launch on 26 May 2026.

                </p>

                <p className="mt-6 flex-1 text-base leading-8 text-zinc-400 sm:mt-8 sm:text-lg sm:leading-9">

                  Rockstar confirmed that Grand Theft Auto VI had been pushed back from its previously announced release window. The delay gave Rockstar additional time to deliver the level of polish and quality expected from its next major open-world release.

                </p>

              </div>

            </article>

            {/* SECOND RELEASE DATE DELAY */}

            <article className="w-screen shrink-0 snap-center px-4 sm:px-6">

              <div className="mx-auto flex h-[680px] w-full max-w-3xl flex-col rounded-3xl border border-white/10 bg-zinc-900/40 p-5 backdrop-blur sm:h-[720px] sm:p-6">

                <p className="text-sm font-bold uppercase tracking-[0.35em] text-pink-400">

                  NOVEMBER 6, 2025

                </p>

                <h3 className="mt-3 text-2xl font-black text-white sm:text-3xl">

                  Release date moved again

                </h3>

                <Image

                  src="/guides/release-date-2026.jpg"

                  alt="Grand Theft Auto VI release date update"

                  width={1600}

                  height={900}

                  className="mt-6 h-[220px] w-full rounded-3xl object-cover sm:mt-8 sm:h-[260px]"

                />

                <p className="mt-3 text-sm italic text-zinc-500">

                  Rockstar announced that GTA VI would now launch on 19 November 2026.

                </p>

                <p className="mt-6 flex-1 text-base leading-8 text-zinc-400 sm:mt-8 sm:text-lg sm:leading-9">

                  Rockstar announced another delay to Grand Theft Auto VI, moving the release date from May to 19 November 2026. The studio said the additional time was needed to deliver the level of quality and polish expected from the game.

                </p>

              </div>

            </article>

          </div>

        </div>

      </section>

      {/* DESKTOP — FOUR CARDS IN ONE ROW */}

      <section className="mx-auto mt-20 hidden max-w-7xl lg:block">

        <div className="grid grid-cols-4 gap-5">

          {/* TRAILER 1 */}

          <article className="flex h-[620px] min-w-0 flex-col rounded-3xl border border-white/10 bg-zinc-900/40 p-5 backdrop-blur">

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-pink-400">

              DECEMBER 2023

            </p>

            <h3 className="mt-3 text-2xl font-black text-white">

              Trailer 1 is released

            </h3>

            <Image

              src="/guides/trailer.jpg"

              alt="Grand Theft Auto VI Trailer 1"

              width={1600}

              height={900}

              className="mt-6 h-[170px] w-full rounded-2xl object-cover"

            />

            <p className="mt-3 text-xs italic text-zinc-500">

              Rockstar Games officially revealed Grand Theft Auto VI on 4 December 2023.

            </p>

            <p className="mt-5 flex-1 text-sm leading-6 text-zinc-400">

              Rockstar Games officially unveiled Grand Theft Auto VI with its first trailer, introducing Jason and Lucia while confirming the return of Vice City in the new state of Leonida.

            </p>

          </article>

          {/* TRAILER 2 */}

          <article className="flex h-[620px] min-w-0 flex-col rounded-3xl border border-white/10 bg-zinc-900/40 p-5 backdrop-blur">

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-pink-400">

              MAY 2025

            </p>

            <h3 className="mt-3 text-2xl font-black text-white">

              Trailer 2 is released

            </h3>

            <Image

              src="/guides/trailer2.jpg"

              alt="Grand Theft Auto VI Trailer 2"

              width={1600}

              height={900}

              className="mt-6 h-[170px] w-full rounded-2xl object-cover"

            />

            <p className="mt-3 text-xs italic text-zinc-500">

              Rockstar released Trailer 2 on 6 May 2025, revealing new gameplay, locations and story details.

            </p>

            <p className="mt-5 flex-1 text-sm leading-6 text-zinc-400">

              Rockstar's second trailer expanded the story, showcasing Jason and Lucia's relationship while revealing more of Leonida's cities, countryside and gameplay.

            </p>

          </article>

          {/* FIRST RELEASE DATE DELAY */}

          <article className="flex h-[620px] min-w-0 flex-col rounded-3xl border border-white/10 bg-zinc-900/40 p-5 backdrop-blur">

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-pink-400">

              MAY 2, 2025

            </p>

            <h3 className="mt-3 text-2xl font-black text-white">

              GTA VI is delayed

            </h3>

            <Image

              src="/guides/release-date.jpg"

              alt="Grand Theft Auto VI release date announcement"

              width={1600}

              height={900}

              className="mt-6 h-[170px] w-full rounded-2xl object-cover"

            />

            <p className="mt-3 text-xs italic text-zinc-500">

              Rockstar announced that GTA VI would launch on 26 May 2026.

            </p>

            <p className="mt-5 flex-1 text-sm leading-6 text-zinc-400">

              Rockstar confirmed that Grand Theft Auto VI had been pushed back from its previously announced release window, giving the studio additional time to polish the game.

            </p>

          </article>

          {/* SECOND RELEASE DATE DELAY */}

          <article className="flex h-[620px] min-w-0 flex-col rounded-3xl border border-white/10 bg-zinc-900/40 p-5 backdrop-blur">

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-pink-400">

              NOVEMBER 6, 2025

            </p>

            <h3 className="mt-3 text-2xl font-black text-white">

              Release date moved again

            </h3>

            <Image

              src="/guides/release-date-2026.jpg"

              alt="Grand Theft Auto VI release date update"

              width={1600}

              height={900}

              className="mt-6 h-[170px] w-full rounded-2xl object-cover"

            />

            <p className="mt-3 text-xs italic text-zinc-500">

              Rockstar announced that GTA VI would now launch on 19 November 2026.

            </p>

            <p className="mt-5 flex-1 text-sm leading-6 text-zinc-400">

              Rockstar announced another delay to Grand Theft Auto VI, moving the release date from May to 19 November 2026.

            </p>

          </article>

        </div>

      </section>
      {/* DIVIDER */}

<div className="mx-auto mt-24 h-px w-full max-w-3xl bg-gradient-to-r from-transparent via-zinc-700 to-transparent sm:mt-32" />
      {/* GAMEPLAY FEATURE */}

      <section className="mx-auto mt-24 w-full max-w-7xl sm:mt-32">

        {/* Section heading */}

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-bold uppercase tracking-[0.35em] text-pink-400">

            GAMEPLAY

          </p>

          <h2 className="mt-3 text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl">

            Built for a world that feels alive.

          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">

            More freedom, more detail and more ways to experience Leonida.

          </p>

        </div>

        {/* Cinematic feature image */}

        <div className="relative mt-10 overflow-hidden rounded-[32px] border border-white/10 bg-zinc-900/40 shadow-[0_30px_100px_rgba(0,0,0,0.6)]">

          <Image

            src="/guides/gameplay.jpg"

            alt="Grand Theft Auto VI gameplay"

            width={1600}

            height={900}

            className="h-[280px] w-full object-cover sm:h-[400px] md:h-[560px]"

          />

          {/* Cinematic overlay */}

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

          {/* Image statement */}

          <div className="absolute bottom-0 left-0 max-w-2xl p-6 sm:p-10 md:p-14">

            <p className="text-xs font-bold uppercase tracking-[0.3em] text-pink-400">

              THE WORLD OF LEONIDA

            </p>

            <h3 className="mt-3 text-2xl font-black leading-tight text-white sm:text-3xl md:text-5xl">

              More freedom. More detail. More ways to play.

            </h3>

          </div>

        </div>

        {/* Gameplay highlights */}

        <div className="mt-6 grid gap-4 sm:grid-cols-3">

          <div className="rounded-3xl border border-white/10 bg-zinc-900/40 p-6 backdrop-blur">

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-pink-400">

              OPEN WORLD

            </p>

            <h3 className="mt-3 text-xl font-black text-white">

              Explore Leonida

            </h3>

            <p className="mt-3 text-sm leading-7 text-zinc-400">

              Travel through Vice City and the wider state of Leonida, with a world built to reward exploration.

            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-zinc-900/40 p-6 backdrop-blur">

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-pink-400">

              ACTIVITIES

            </p>

            <h3 className="mt-3 text-xl font-black text-white">

              More ways to play

            </h3>

            <p className="mt-3 text-sm leading-7 text-zinc-400">

              From criminal jobs to everyday activities, Leonida offers plenty to discover beyond the main story.

            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-zinc-900/40 p-6 backdrop-blur">

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-pink-400">

              IMMERSION

            </p>

            <h3 className="mt-3 text-xl font-black text-white">

              A living world

            </h3>

            <p className="mt-3 text-sm leading-7 text-zinc-400">

              A more detailed world, dynamic characters and expanded systems make Leonida feel more alive.

            </p>

          </div>

        </div>

      </section>

           {/* DIVIDER */}

<div className="mx-auto mt-24 h-px w-full max-w-3xl bg-gradient-to-r from-transparent via-zinc-700 to-transparent sm:mt-32" />

{/* WHY GTA VAULT */}

<section className="mx-auto mt-16 w-full max-w-5xl sm:mt-20">

        <div className="relative overflow-hidden rounded-[36px] border border-pink-500/20 bg-zinc-950/70 px-6 py-12 text-center shadow-[0_30px_100px_rgba(0,0,0,0.6)] backdrop-blur-xl sm:px-10 sm:py-16 md:px-16 md:py-20">

          {/* Background glow */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(236,72,153,0.18),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.12),transparent_50%)]" />

          <div className="relative">

            <p className="text-sm font-bold uppercase tracking-[0.35em] text-pink-400">
              GTA VAULT
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl">
              Everything GTA VI.
              <br />
              One place.
            </h2>

            

{/* Reasons */}

<div className="mx-auto mt-12 grid max-w-4xl gap-8 text-center sm:grid-cols-3">

  <div>

    <p className="text-xs font-bold uppercase tracking-[0.25em] text-pink-400">

      BUILT FOR FANS

    </p>

    <h3 className="mt-3 text-xl font-black text-white">

      Made for the wait

    </h3>

  </div>

  <div>

    <p className="text-xs font-bold uppercase tracking-[0.25em] text-pink-400">

      ALWAYS EVOLVING

    </p>

    <h3 className="mt-3 text-xl font-black text-white">

      More to discover

    </h3>

  </div>

  <div>

    <p className="text-xs font-bold uppercase tracking-[0.25em] text-pink-400">

      ONE PLACE

    </p>

    <h3 className="mt-3 text-xl font-black text-white">

      Everything together

    </h3>

  </div>

</div>
            

            


            {/* Closing statement */}
            <div className="mx-auto mt-14 max-w-2xl">

              <div className="mx-auto mb-8 h-px w-24 bg-gradient-to-r from-pink-500 to-cyan-400" />

              <p className="text-2xl font-black leading-tight text-white sm:text-3xl">
                The wait for GTA VI is long.
                <br />
                Following it shouldn't be.
              </p>

              <a
                href="/"
                className="mt-8 inline-flex items-center rounded-full border border-pink-400/40 bg-pink-500/10 px-7 py-3 text-sm font-bold uppercase tracking-[0.2em] text-pink-300 transition hover:border-pink-300 hover:bg-pink-500/20 hover:text-white"
              >
                Explore GTA Vault →
              </a>

            </div>

          </div>

        </div>

            </section>

      <RelatedArticles
        currentSlug={post.slug}
        articles={news}
      />

    </main>
  );
}
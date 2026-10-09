interface GuideStatusProps {

  updated: string;

  readingTime: string;

  sections: number;

  sources: number;

}

export default function GuideStatus({

  updated,

  readingTime,

  sections,

  sources,

}: GuideStatusProps) {

  return (

    <section className="my-16">

      <div className="rounded-[32px] border border-pink-500/20 bg-zinc-900/50 p-6 backdrop-blur-xl">

        <div className="mb-8 flex items-center gap-3">

          <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse" />

          <p className="text-sm font-bold uppercase tracking-[0.3em] text-pink-400">

            Official GTA Vault Guide

          </p>

        </div>

        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">

          <div className="rounded-2xl bg-black/20 p-5">

            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">

              Updated

            </p>

            <p className="mt-3 text-lg font-bold text-white">

              {updated}

            </p>

          </div>

          <div className="rounded-2xl bg-black/20 p-5">

            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">

              Reading Time

            </p>

            <p className="mt-3 text-lg font-bold text-white">

              {readingTime}

            </p>

          </div>

          <div className="rounded-2xl bg-black/20 p-5">

            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">

              Guide Sections

            </p>

            <p className="mt-3 text-lg font-bold text-white">

              {sections}

            </p>

          </div>

          <div className="rounded-2xl bg-black/20 p-5">

            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">

              Rockstar Sources

            </p>

            <p className="mt-3 text-lg font-bold text-white">

              {sources}

            </p>

          </div>

        </div>

      </div>

    </section>

  );

}
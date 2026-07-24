"use client";

const categories = [
  {
    title: "Money Making",
    score: 98,
    colour: "bg-emerald-400",
    reason:
      "Triple GTA$ opportunities make this one of the most profitable weeks in months.",
  },
  {
    title: "Replayability",
    score: 95,
    colour: "bg-cyan-400",
    reason:
      "Plenty of worthwhile activities without feeling repetitive.",
  },
  {
    title: "Discounts",
    score: 91,
    colour: "bg-purple-400",
    reason:
      "Several genuinely worthwhile purchases rather than filler discounts.",
  },
  {
    title: "Content",
    score: 93,
    colour: "bg-pink-400",
    reason:
      "Strong variety across businesses, races and weekly objectives.",
  },
  {
    title: "Time Investment",
    score: 90,
    colour: "bg-amber-400",
    reason:
      "Around an hour delivers the majority of this week's value.",
  },
];

export default function ScoreBreakdown() {
  return (
    <section className="space-y-10">

      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
          Vault Breakdown
        </p>

        <h2 className="mt-3 text-5xl font-black">
          Why this week scored 94.
        </h2>

        <p className="mt-4 max-w-3xl text-zinc-400 text-lg">
          Every Vault Score is calculated by analysing profitability,
          replayability, discounts, content quality and the overall value of
          Rockstar's weekly update.
        </p>
      </div>

      <div className="space-y-8">

        {categories.map((item) => (

          <div
            key={item.title}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-7"
          >

            <div className="mb-5 flex items-center justify-between">

              <h3 className="text-2xl font-bold">
                {item.title}
              </h3>

              <span className="text-3xl font-black text-white">
                {item.score}
              </span>

            </div>

            <div className="h-3 overflow-hidden rounded-full bg-white/10">

              <div
                className={`${item.colour} h-full rounded-full`}
                style={{ width: `${item.score}%` }}
              />

            </div>

            <p className="mt-5 max-w-2xl text-zinc-400">
              {item.reason}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}
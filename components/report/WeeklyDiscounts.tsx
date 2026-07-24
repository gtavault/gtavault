import {
  Car,
  Building2,
  Plane,
  BadgePercent,
} from "lucide-react";

const discounts = [
  {
    icon: Car,
    title: "Grotti Itali GTO",
    discount: "40% OFF",
    verdict: "BUY",
    colour: "emerald",
    reason:
      "One of the best sports cars in GTA Online. Excellent value at this week's price.",
  },
  {
    icon: Building2,
    title: "Agency",
    discount: "30% OFF",
    verdict: "ESSENTIAL",
    colour: "cyan",
    reason:
      "Unlocks Payphone Hits and Dr. Dre Contract, making this a fantastic long-term investment.",
  },
  {
    icon: Plane,
    title: "Mammoth Hydra",
    discount: "25% OFF",
    verdict: "ONLY IF YOU WANT IT",
    colour: "amber",
    reason:
      "Fun to own, but not nearly as useful as investing in businesses first.",
  },
];
export default function WeeklyDiscounts() {
  return (
    <section className="space-y-10">

      <div>

        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
          Weekly Discounts
        </p>

        <h2 className="mt-3 text-5xl font-black">
          What's actually worth buying.
        </h2>

        <p className="mt-4 max-w-3xl text-lg text-zinc-400">
          Not every discount is a bargain. These are the purchases that provide
          the best long-term value this week.
        </p>

      </div>

      <div className="space-y-8">

        {discounts.map((item) => {

          const Icon = item.icon;

          return (

           <div
  key={item.title}
  className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] transition-all duration-300 hover:border-cyan-400/30 hover:-translate-y-1"
>

  <div className="grid lg:grid-cols-[1.2fr_0.8fr]">

    {/* LEFT */}

    <div className="p-10">

      <div className="flex items-center gap-4">

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-400/10">

          <Icon className="h-8 w-8 text-cyan-300" />

        </div>

        <div>

          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Weekly Pick
          </p>

          <h3 className="mt-2 text-4xl font-black">
            {item.title}
          </h3>

        </div>

      </div>

      <div className="mt-8 flex flex-wrap gap-4">

        <div className="rounded-full bg-emerald-400/10 px-5 py-2 text-sm font-bold text-emerald-300">
          {item.discount}
        </div>

        <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
          {item.verdict}
        </div>

      </div>

      <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-300">
        {item.reason}
      </p>

      <div className="mt-10 rounded-2xl bg-black/25 p-6">

        <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">
          Why Buy It?
        </p>

        <ul className="mt-5 space-y-4 text-zinc-300">

          <li>✓ Excellent long-term value</li>

          <li>✓ One of the strongest discounts this week</li>

          <li>✓ Recommended by GTA Vault</li>

        </ul>

      </div>

    </div>

    {/* RIGHT */}

    <div className="flex items-center justify-center border-l border-white/10 bg-black/20 p-10">

      <div className="text-center">

        <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
          Discount
        </p>

        <h2 className="mt-4 text-7xl font-black text-white">
          {item.discount}
        </h2>

        <p className="mt-4 text-cyan-300 font-semibold">
          Ends Thursday
        </p>

      </div>

    </div>

  </div>

</div>

          );

        })}

      </div>

    </section>
  );
}
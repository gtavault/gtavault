import {
  Trophy,
  DollarSign,
  Car,
  Target,
  Flag,
  Gift,
} from "lucide-react";

const items = [
  {
    rank: 1,
    title: "Acid Lab Sales",
    category: "Money Activity",
    reward: "3× GTA$",
    score: 98,
    icon: DollarSign,
  },
  {
    rank: 2,
    title: "Auto Shop Contracts",
    category: "Money Activity",
    reward: "2× GTA$",
    score: 91,
    icon: Trophy,
  },
  {
    rank: 3,
    title: "Grotti Itali GTO",
    category: "Vehicle Discount",
    reward: "40% OFF",
    score: 89,
    icon: Car,
  },
  {
    rank: 4,
    title: "Weekly Challenge",
    category: "Challenge",
    reward: "GTA$100k",
    score: 84,
    icon: Target,
  },
  {
    rank: 5,
    title: "Time Trial",
    category: "Activity",
    reward: "GTA$100k",
    score: 76,
    icon: Flag,
  },
  {
    rank: 6,
    title: "Podium Vehicle",
    category: "Lucky Wheel",
    reward: "Free Vehicle",
    score: 72,
    icon: Gift,
  },
];

export default function WeeklyBreakdown() {
  return (
    <section className="space-y-10">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
          Complete Weekly Breakdown
        </p>

        <h2 className="mt-3 text-5xl font-black">
          Every event ranked by value.
        </h2>

        <p className="mt-4 max-w-3xl text-lg text-zinc-400">
          Everything available this week, ranked from the most worthwhile to the
          least, so you know exactly where to spend your time.
        </p>
      </div>

      <div className="space-y-4">
        {items.map((item) => {
          const Icon = item.icon;

          return (
           <div
  key={item.rank}
  className="group rounded-[28px] border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.05] md:flex md:items-center md:justify-between md:p-6"
>
  {/* Left */}
  <div className="flex items-start gap-4">
    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10 text-xl font-black text-cyan-300">
      #{item.rank}
    </div>

    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/5">
      <Icon className="h-7 w-7 text-white" />
    </div>

    <div className="min-w-0 flex-1">
      <h3 className="text-xl font-bold leading-tight">
        {item.title}
      </h3>

      <p className="mt-1 text-zinc-400">
        {item.category}
      </p>

      {/* Mobile Vault Score */}
      <div className="mt-4 md:hidden">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
          Vault Score
        </p>

        <div
          className={`flex h-11 w-24 items-center justify-center rounded-full text-lg font-black ${
            item.score >= 90
              ? "bg-emerald-400/10 text-emerald-300"
              : item.score >= 80
              ? "bg-cyan-400/10 text-cyan-300"
              : "bg-amber-400/10 text-amber-300"
          }`}
        >
          {item.score}
        </div>
      </div>
    </div>
  </div>

  {/* Desktop Vault Score */}
  <div className="hidden md:block text-right">
    <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
      Vault Score
    </p>

    <div
      className={`mt-2 flex h-12 w-24 items-center justify-center rounded-full text-lg font-black ${
        item.score >= 90
          ? "bg-emerald-400/10 text-emerald-300"
          : item.score >= 80
          ? "bg-cyan-400/10 text-cyan-300"
          : "bg-amber-400/10 text-amber-300"
      }`}
    >
      {item.score}
    </div>
  </div>
</div>
          );
        })}
      </div>
    </section>
  );
}
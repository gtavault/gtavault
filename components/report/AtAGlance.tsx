import {
  DollarSign,
  Car,
  Target,
  Clock3,
} from "lucide-react";

const items = [
  {
    title: "Best Money Maker",
    value: "Acid Lab",
    detail: "3× GTA$",
    icon: DollarSign,
  },
  {
    title: "Best Purchase",
    value: "Grotti Itali GTO",
    detail: "40% OFF",
    icon: Car,
  },
  {
    title: "Weekly Challenge",
    value: "Exclusive Tee",
    detail: "100k Bonus",
    icon: Target,
  },
  {
    title: "Time Needed",
    value: "45–60 mins",
    detail: "Complete Everything",
    icon: Clock3,
  },
];

export default function AtAGlance() {
  return (
    <section className="mt-12">

      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
          At A Glance
        </p>

        <h2 className="mt-2 text-4xl font-black">
          Everything that matters.
        </h2>
      </div>

    <div className="grid gap-6 md:grid-cols-3">

        {items.map((item, index) => {
  const Icon = item.icon;

  return (
    <div
      key={item.title}
      className={`group rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 ${
        index === 0 ? "md:col-span-3" : ""
      }`}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
            {item.title}
          </p>

          <h3 className="mt-3 text-3xl font-black">
            {item.value}
          </h3>

          <p className="mt-3 text-lg text-cyan-300">
            {item.detail}
          </p>

          {index === 0 && (
            <p className="mt-5 max-w-xl text-zinc-400">
              This is the highest-value activity of the week and should be your
              first priority before completing anything else.
            </p>
          )}
        </div>

        <div className="rounded-2xl bg-cyan-400/10 p-4">
  <Icon className="h-7 w-7 text-cyan-300" />
</div>
      </div>
    </div>
  );
})}

      </div>

    </section>
  );
}
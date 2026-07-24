import {
  ArrowUpRight,
  ArrowDownRight,
  DollarSign,
  Car,
  Flag,
  Trophy,
} from "lucide-react";

const featured = [
  {
    icon: DollarSign,
    title: "3× GTA$ on Acid Lab Sales",
    badge: "BONUS",
    description: "Highest paying activity this week.",
  },
  {
    icon: Car,
    title: "40% OFF Grotti Itali GTO",
    badge: "DISCOUNT",
    description: "One of the best purchases available this week.",
  },
];

const updates = [
  {
    type: "NEW",
    colour: "green",
    icon: Trophy,
    title: "New Podium Vehicle",
    description: "Lucky Wheel reward has changed.",
  },
  {
    type: "NEW",
    colour: "green",
    icon: Flag,
    title: "Fresh Weekly Challenge",
    description: "Complete this week's objective for bonus rewards.",
  },
  {
    type: "NEW",
    colour: "green",
    icon: Car,
    title: "Fresh Time Trial",
    description: "A new route is available.",
  },
  {
    type: "ENDED",
    colour: "red",
    icon: ArrowDownRight,
    title: "Previous Bonuses",
    description: "Last week's event has finished.",
  },
  {
    type: "ENDED",
    colour: "red",
    icon: ArrowDownRight,
    title: "Previous Discounts",
    description: "Old sale prices have expired.",
  },
];
export default function WhatsNew() {
  return (
    <section className="space-y-10">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
          This Week's Changes
        </p>

        <h2 className="mt-3 text-5xl font-black">
          Everything since Thursday's reset.
        </h2>

        <p className="mt-4 max-w-3xl text-lg text-zinc-400">
          The most important updates, bonuses and changes from this week's GTA
          Online refresh.
        </p>
      </div>

      {/* Featured Changes */}

      <div className="grid gap-6 lg:grid-cols-2">
        {featured.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-[28px] border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 to-transparent p-8"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10">
                  <Icon className="h-7 w-7 text-cyan-300" />
                </div>

                <span className="rounded-full bg-cyan-400/10 px-4 py-2 text-xs font-bold tracking-[0.2em] text-cyan-300">
                  {item.badge}
                </span>
              </div>

              <h3 className="mt-8 text-3xl font-black">
                {item.title}
              </h3>

              <p className="mt-4 text-zinc-400">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Timeline */}

      <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8">
        <h3 className="text-2xl font-bold">
          Full Changelog
        </h3>

        <div className="mt-8 space-y-5">
          {updates.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex items-start gap-5 rounded-2xl border border-white/10 bg-black/20 p-5"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                    item.colour === "green"
                      ? "bg-emerald-400/10"
                      : "bg-red-400/10"
                  }`}
                >
                  <Icon
                    className={`h-6 w-6 ${
                      item.colour === "green"
                        ? "text-emerald-300"
                        : "text-red-300"
                    }`}
                  />
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-bold tracking-[0.2em] ${
                        item.colour === "green"
                          ? "bg-emerald-400/10 text-emerald-300"
                          : "bg-red-400/10 text-red-300"
                      }`}
                    >
                      {item.type}
                    </span>

                    <h4 className="text-lg font-bold">
                      {item.title}
                    </h4>
                  </div>

                  <p className="mt-2 text-zinc-400">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
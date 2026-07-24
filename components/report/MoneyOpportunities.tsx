import {
  Trophy,
  Users,
  Clock3,
  Star,
  DollarSign,
} from "lucide-react";

const activities = [
  {
    rank: 1,
    title: "Acid Lab",
    score: 97,
    verdict: "MUST PLAY",
    payout: "$1.2M/hr",
    bonus: "3× GTA$",
    difficulty: "Easy",
    players: "Solo",
    time: "20 mins",
    colour:
      "from-emerald-500/20 to-emerald-400/5 border-emerald-400/20",
    verdictColour:
      "bg-emerald-400/10 text-emerald-300 border-emerald-400/20",
  plan: [
  {
    title: "Buy Supplies",
    detail: "Purchase supplies from the Fooligan Warehouse immediately.",
  },
  {
    title: "Build Stock",
    detail: "Leave production running while completing other activities.",
  },
  {
    title: "Sell Smart",
    detail: "Sell a full batch in a public lobby for the High Demand Bonus.",
  },
  {
    title: "Repeat",
    detail: "Restart production and repeat once the cooldown finishes.",
  },
],
  },

 {
  rank: 2,
  title: "Auto Shop Contracts",
  score: 91,
  verdict: "WORTH DOING",
  payout: "$780k/hr",
  bonus: "2× GTA$",
  difficulty: "Easy",
  players: "Solo",
  time: "25 mins",
  colour:
    "from-cyan-500/20 to-cyan-400/5 border-cyan-400/20",
  verdictColour:
    "bg-cyan-400/10 text-cyan-300 border-cyan-400/20",

  plan: [
    {
      title: "Choose the Right Contract",
      detail:
        "Refresh your Auto Shop board until the Union Depository Contract appears for the highest payout.",
    },
    {
      title: "Complete the Setup",
      detail:
        "Finish both setup missions as quickly as possible before starting the finale.",
    },
    {
      title: "Finish the Finale",
      detail:
        "Complete the Union Depository Contract and collect the boosted payout.",
    },
    {
      title: "Repeat During Cooldown",
      detail:
        "Run another contract while your Acid Lab continues producing stock in the background.",
    },
  ],
},

 {
  rank: 3,
  title: "Time Trial",
  score: 76,
  verdict: "ONLY IF YOU HAVE TIME",
  payout: "$100k",
  bonus: "Standard",
  difficulty: "Medium",
  players: "Solo",
  time: "5 mins",
  colour:
    "from-amber-500/20 to-amber-400/5 border-amber-400/20",
  verdictColour:
    "bg-amber-400/10 text-amber-300 border-amber-400/20",

  plan: [
    {
      title: "Find This Week's Trial",
      detail:
        "Open the map and travel to the current Time Trial start location.",
    },
    {
      title: "Choose the Fastest Vehicle",
      detail:
        "Use your quickest bike or sports car before starting the challenge.",
    },
    {
      title: "Beat the Target Time",
      detail:
        "Restart immediately if you make a major mistake to save time.",
    },
    {
      title: "Claim the Reward",
      detail:
        "Collect the easy GTA$100k, then move back to higher-paying activities.",
    },
  ],
},
];
export default function MoneyOpportunities() {
  return (
    <section className="space-y-10">

      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
          Money Opportunities
        </p>

        <h2 className="mt-3 text-5xl font-black">
          Where your time is best spent.
        </h2>

        <p className="mt-4 max-w-3xl text-lg text-zinc-400">
          Every activity has been ranked by profitability, efficiency and
          overall value so you know exactly what deserves your time this week.
        </p>
      </div>

      <div className="space-y-8">

        {activities.map((activity) => (
          <div
            key={activity.title}
            className={`group relative overflow-hidden rounded-[32px] border bg-gradient-to-br ${activity.colour} transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl`}
          >

            <div className="absolute right-[-100px] top-[-100px] h-72 w-72 rounded-full bg-white/5 blur-3xl" />

           <div className="relative grid gap-8 p-7 lg:grid-cols-[1.5fr_0.7fr]">

              {/* LEFT */}

              <div>

                <div className="flex items-center gap-5">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">

                    <Trophy className="h-8 w-8 text-yellow-300" />

                  </div>

                  <div>

                    <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">
                      Ranked #{activity.rank}
                    </p>

                    <h3 className="mt-2 text-3xl font-black">
                      {activity.title}
                    </h3>

                  </div>

                </div>

                <div className="mt-8 flex flex-wrap gap-4">

                  <div
                    className={`rounded-full border px-5 py-2 text-sm font-bold uppercase tracking-[0.2em] ${activity.verdictColour}`}
                  >
                    {activity.verdict}
                  </div>

                  <div className="rounded-full bg-white/10 px-5 py-2 text-sm font-semibold">
                    {activity.bonus}
                  </div>

                </div>

              <div className="mt-8">

  <p className="mb-6 text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">
    Your Plan
  </p>

  <div className="space-y-5">

    {activity.plan.map((step, index) => (

      <div
        key={step.title}
        className="flex gap-5"
      >

        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-lg font-black text-cyan-300">

          {index + 1}

        </div>

        <div>

          <h4 className="text-lg font-bold text-white">
            {step.title}
          </h4>

          <p className="mt-1 text-zinc-400">
            {step.detail}
          </p>

        </div>

      </div>

    ))}

  </div>

</div>

              </div>

              {/* RIGHT */}

              <div className="rounded-3xl border border-white/10 bg-black/25 p-6 backdrop-blur">

                <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
                  Estimated Profit
                </p>

                <h2 className="mt-3 text-5xl font-black">
                  {activity.payout}
                </h2>

                <div className="mt-8">

                  <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                    Activity Score
                  </p>

                  <div className="mt-3 inline-flex rounded-2xl bg-cyan-400/10 px-5 py-3 text-4xl font-black text-cyan-300">
                    {activity.score}
                  </div>

                </div>

                <div className="mt-10 grid grid-cols-2 gap-4">

                  <div className="rounded-2xl bg-white/5 p-4">

                    <Users className="mb-2 h-5 w-5 text-cyan-300" />

                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                      Players
                    </p>

                    <p className="mt-2 font-semibold">
                      {activity.players}
                    </p>

                  </div>

                  <div className="rounded-2xl bg-white/5 p-3">

                    <Clock3 className="mb-2 h-5 w-5 text-cyan-300" />

                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                      Time
                    </p>

                    <p className="mt-2 font-semibold">
                      {activity.time}
                    </p>

                  </div>

                  <div className="rounded-2xl bg-white/5 p-4">

                    <Star className="mb-2 h-5 w-5 text-cyan-300" />

                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                      Difficulty
                    </p>

                    <p className="mt-2 font-semibold">
                      {activity.difficulty}
                    </p>

                  </div>

                  <div className="rounded-2xl bg-white/5 p-4">

                    <DollarSign className="mb-2 h-5 w-5 text-cyan-300" />

                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                      Bonus
                    </p>

                    <p className="mt-2 font-semibold">
                      {activity.bonus}
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}
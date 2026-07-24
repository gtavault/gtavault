import {
  ShoppingCart,
  Trophy,
  Factory,
  Flag,
  DollarSign,
} from "lucide-react";

const steps = [
  {
    icon: ShoppingCart,
    title: "Buy the Grotti Itali GTO",
    description:
      "Purchase it while it's 40% off before doing anything else.",
    reward: "Save GTA$798,000",
  },
  {
    icon: Trophy,
    title: "Complete the Weekly Challenge",
    description:
      "Finish this early so every later activity counts towards your progress.",
    reward: "Exclusive Reward",
  },
  {
    icon: Factory,
    title: "Run Acid Lab",
    description:
      "This week's biggest money maker. Prioritise every bonus payout.",
    reward: "3× GTA$",
  },
  {
    icon: Flag,
    title: "Finish Bonus Activities",
    description:
      "Clean up the remaining boosted events before the week resets.",
    reward: "Extra GTA$",
  },
];

export default function Strategy() {
  return (
    <section className="space-y-10">

      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
          Your Plan
        </p>

        <h2 className="mt-3 text-5xl font-black">
          The fastest route this week.
        </h2>

        <p className="mt-4 max-w-3xl text-lg text-zinc-400">
          If you only have one hour to play, follow this order to get the
          biggest rewards before Thursday's reset.
        </p>
      </div>

      <div className="relative">

        <div className="absolute left-[31px] top-10 bottom-10 w-px bg-white/10" />

        <div className="space-y-10">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="relative flex gap-8"
              >

                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-400/10 border border-cyan-400/20">

                  <Icon className="h-8 w-8 text-cyan-300" />

                </div>

                <div className="flex-1 rounded-3xl border border-white/10 bg-white/[0.03] p-7">

                  <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
                    Step {index + 1}
                  </p>

                  <h3 className="mt-2 text-2xl font-bold">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-zinc-400">
                    {step.description}
                  </p>

                  <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-300">

                    <DollarSign className="h-4 w-4" />

                    {step.reward}

                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}
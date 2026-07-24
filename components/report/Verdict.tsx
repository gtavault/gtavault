import { ShieldCheck } from "lucide-react";

export default function Verdict() {
  return (
    <section className="rounded-[36px] border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 p-10">
      <div className="flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-400/10">
          <ShieldCheck className="h-8 w-8 text-cyan-300" />
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
            GTA Vault Verdict
          </p>

          <h2 className="mt-2 text-4xl font-black">
            A fantastic week for solo players.
          </h2>
        </div>
      </div>

      <p className="mt-8 max-w-4xl text-lg leading-8 text-zinc-300">
        This week's update is well worth playing. Acid Lab sales offer some of
        the best money-making opportunities we've seen recently, while the
        discounted vehicles and businesses provide excellent long-term value.
        If you only have a few hours to play, focus on the top-rated activities
        in this report and you'll maximise your profits before next Thursday's
        reset.
      </p>

      <div className="mt-8 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-6">
        <p className="text-lg font-bold text-emerald-300">
          Final Rating: <span className="text-white">9.2 / 10</span>
        </p>

        <p className="mt-2 text-zinc-300">
          One of the strongest weekly updates in recent months, with excellent
          earning potential and worthwhile discounts.
        </p>
      </div>
    </section>
  );
}
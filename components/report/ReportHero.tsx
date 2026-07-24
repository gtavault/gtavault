import VaultScoreRing from "../vaultscore/VaultScoreRing";

export default function ReportHero() {
  return (
    <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#070707] via-[#0b0b10] to-black">

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.12),transparent_45%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.25))]" />

    <div className="relative grid items-center gap-10 px-4 py-6 sm:px-8 sm:py-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14 lg:p-14">
        {/* LEFT */}

        <div className="text-center lg:text-left">

          <div className="mx-auto inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300 lg:mx-0">
            Weekly Vault Report
          </div>

          <h1 className="mt-6 text-4xl font-black leading-none text-white sm:text-5xl lg:text-6xl">
  <span className="block">
    17–24 July
  </span>

  <span className="block">
    GTA Online
  </span>
</h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-zinc-300 sm:text-lg sm:leading-8">
            One of the strongest weekly updates of the year thanks to
            exceptional payouts, worthwhile discounts and enough variety to
            keep almost every type of player busy.
          </p>

        </div>

        {/* RIGHT */}

        <div className="flex justify-center">
          <VaultScoreRing score={94} />
        </div>

      </div>

    </section>
  );
}
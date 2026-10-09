
import Link from "next/link";
import {
  categories,
  vaultScore,
  vaultRating,
} from "@/lib/vault-score";

const priorities = [
  {
    number: "01",
    label: "LIMITED-TIME CASH",
    title: "Complete five Payphone Hits",
    description:
      "Complete five Payphone Hits by 14 October to earn GTA$500,000 extra. The bonus is delivered within 72 hours of completion.",
    reward: "GTA$500,000 BONUS",
    href: "#bonuses",
  },
  {
    number: "02",
    label: "TRIPLE REWARDS",
    title: "Take on Halloween Survivals",
    description:
      "Ludendorff Cemetery, Cayo Perico and Alien Survivals offer 3× GTA$ and RP. Eligible GTA+ members receive 6× on the listed Halloween Survivals.",
    reward: "VIEW MULTIPLIERS",
    href: "#bonuses",
  },
  {
    number: "03",
    label: "HALLOWEEN CHALLENGE",
    title: "Win two Adversary Modes",
    description:
      "Earn GTA$100,000 and the Pink Skull Emissive Mask. This also progresses the October challenge series towards the additional GTA$2,000,000 reward.",
    reward: "CHECK CHALLENGE",
    href: "#full-update",
  },
];

const bonuses = [
  {
    label: "3× GTA$ + RP",
    title: "Halloween modes and Survivals",
    description:
      "Halloween Featured Series, including Slasher and Ramius – Slasher. Also Ludendorff Cemetery Survival, Cayo Perico Survival and Alien Survivals.",
  },
  {
    label: "3× GTA$ + RP",
    title: "Race series",
    description:
      "Hotring Races, Random Transform Races in the San Andreas Super Sport Series, and the Community Race Series.",
  },
  {
    label: "2× GTA$ + RP",
    title: "Business and contact work",
    description:
      "Bail Office Standard and Most Wanted Targets, Dispatch Work and UFO Business Battles.",
  },
  {
    label: "2× GTA$ + RP",
    title: "Jack O’ Lanterns",
    description:
      "Collect Jack O’ Lanterns for double cash and RP. Eligible GTA+ members receive 4× GTA$ and RP.",
  },
  {
    label: "2× GTA$",
    title: "Ghosts Exposed",
    description:
      "Photograph paranormal apparitions for double GTA$. Eligible GTA+ members receive 4× GTA$.",
  },
  {
    label: "GTA$500,000",
    title: "Payphone Hit bonus",
    description:
      "Complete five Payphone Hits by 14 October. The additional cash is delivered within 72 hours of completion.",
  },
];

const discounts = [
  {
    label: "40% OFF",
    title: "Agency properties",
    description:
      "Hawick Agency: GTA$1,698,000, down from GTA$2,830,000. The reported discount also applies to eligible Agency upgrades and modifications.",
  },
  {
    label: "40% OFF",
    title: "Halloween vehicles",
    description:
      "LCC Sanctus, Albany Brigham, Albany Lurcher, Albany Fränken Stange and Declasse Tornado Rat Rod.",
  },
  {
    label: "30% OFF",
    title: "Additional vehicles",
    description:
      "Emperor ETR1, Dinka Jester RR, Grotti Itali GTO, Karin Hotring Everon, Übermacht SC1, Bravado Greenwood, Annis Remus, Pegassi Tempesta and BF Club.",
  },
  {
    label: "30% OFF",
    title: "Benefactor Terrorbyte",
    description:
      "The Terrorbyte is discounted this week. It is most useful for players who actively use its business management and client-job features.",
  },
];

const showrooms = [
  {
    label: "CASINO PODIUM",
    title: "Annis Savestra",
    description:
      "The Diamond Casino Lucky Wheel prize this week. Spin the wheel for a chance to win it.",
  },
  {
    label: "LS CAR MEET PRIZE RIDE",
    title: "Declasse Walton L35",
    description:
      "Place in the Top 4 of the LS Car Meet Series for two consecutive days to unlock the Prize Ride.",
  },
  {
    label: "LUXURY AUTOS",
    title: "Rapid GT X and Sentinel XS4",
    description:
      "The Dewbauchee Rapid GT X and Übermacht Sentinel XS4 are featured in the Luxury Autos showroom.",
  },
  {
    label: "PREMIUM DELUXE MOTORSPORT",
    title: "Halloween showroom",
    description:
      "LCC Sanctus, Albany Brigham, Albany Fränken Stange, Albany Lurcher and Declasse Tornado Rat Rod.",
  },
  {
    label: "LS CAR MEET TEST RIDES",
    title: "Three cars to try",
    description:
      "Ocelot Locust, Dewbauchee Seven-70 and Declasse Vamos are available as test rides.",
  },
  {
    label: "HAO'S SPECIAL WORKS",
    title: "Maibatsu MonstroCiti",
    description:
      "This week's HSW Premium Test Ride. HSW upgrades are relevant to compatible enhanced-version vehicles.",
  },
];

const otherFeatures = [
  {
    title: "Weekly Challenge: 8–14 October",
    description:
      "Win two Adversary Modes to receive GTA$100,000 and the Pink Skull Emissive Mask.",
  },
  {
    title: "Halloween challenge series",
    description:
      "The October progression continues through 4 November. The upcoming weekly tasks include winning three races, completing all waves of a Survival, and completing 10 Survival waves without dying. Complete all five weekly challenges for an additional GTA$2,000,000. Individual challenge rewards and dates should be checked against the current in-game event.",
  },
  {
    title: "Free login reward",
    description:
      "Play GTA Online by 14 October to receive the Twilight Knife T-Shirt, inspired by classic horror films.",
  },
  {
    title: "FIB Priority File",
    description:
      "The Black Box File is this week's featured FIB Priority File.",
  },
  {
    title: "Kortz Center Heist",
    description:
      "The reported primary targets are Pumpkin, A Winding Road Home, and Winter, Nowhere in Particular.",
  },
  {
    title: "Salvage Yard Robberies",
    description:
      "The McTony Robbery: Pfister Growler (Top Tier). The Gangbanger Robbery: Albany Fränken Stange (Standard Tier). The Podium Robbery: Willard Eudora (Low Tier).",
  },
  {
    title: "Premium Race",
    description:
      "The Commute is this week's Premium Race. Check the in-game race marker for entry details and requirements.",
  },
  {
    title: "Time Trials",
    description:
      "Standard Time Trial: Terminal to Chiliad Mountain State Wilderness. HSW Time Trial: Tongva Valley.",
  },
  {
    title: "Gun Van: free items",
    description:
      "The Baseball Bat and The Shocker are listed as free this week. Check the current Gun Van stock in-game.",
  },
  {
    title: "Gun Van: discounts",
    description:
      "The Service Carbine is 30% off. GTA+ members can get 50% off the Up-n-Atomizer, Unholy Hellbringer and Widowmaker.",
  },
  {
    title: "Jack O’ Lanterns and Ghosts Exposed",
    description:
      "Jack O’ Lanterns offer 2× GTA$ and RP; Ghosts Exposed offers 2× GTA$. Check the event listing for the current activity availability.",
  },
];

const boxClass =
  "border border-white/10 bg-white/[0.02] p-5 transition-colors duration-200 hover:border-pink-500/40";

export default function WeeklyPage() {
  return (
    <main className="min-h-screen bg-[#050507] text-white">
      {/* HERO — PRESERVED */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <img
            src="/weekly-hero.jpg"
            alt=""
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-[#050507]/65 to-[#050507]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(236,72,153,0.18),transparent_38%),radial-gradient(circle_at_85%_20%,rgba(34,211,238,0.10),transparent_38%)]" />
        </div>

        <div className="relative mx-auto max-w-[1500px] px-6 pb-20 pt-10 md:px-10 md:pb-28 md:pt-14">
          <Link
            href="/"
            className="group inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-zinc-500 transition hover:text-pink-400"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>
            Back to Home
          </Link>

          <div className="mt-20 max-w-5xl md:mt-28">
            <p className="text-[11px] font-black uppercase tracking-[0.35em] text-pink-400">
              GTA Vault / GTA Online
            </p>
            <h1 className="mt-5 text-6xl font-black leading-[0.9] tracking-[-0.055em] text-white md:text-8xl lg:text-[110px]">
              WEEKLY
              <br />
              <span className="text-zinc-500">VAULT SCORE</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400 md:text-xl md:leading-9">
              The weekly briefing for GTA Online. Find the best activities,
              earning opportunities, featured vehicles, discounts and rewards
              in one place.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#08080c]">
        <div className="mx-auto max-w-[1500px] px-6 py-10 md:px-10 md:py-14">
          {/* WEEKLY VERDICT */}
          <section id="verdict" className="scroll-mt-8 pb-9">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-pink-400">
              01 / Weekly verdict · 8–14 October 2026
            </p>
            <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div className="min-w-0 flex-1">
                <h2 className="text-3xl font-black uppercase tracking-tight sm:text-4xl md:text-5xl">
                  Is this week worth playing?
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-white/55">
                  Halloween is in full swing, with triple-reward modes, a
                  limited-time cash bonus and a strong selection of returning
                  seasonal vehicles.
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-4 md:ml-8 md:mt-1">
                <p className="whitespace-nowrap text-5xl font-black tracking-tighter text-pink-400 sm:text-6xl">
                  {vaultScore}
                  <span className="ml-1 text-base font-semibold text-white/35">
                    /100
                  </span>
                </p>
                <div className="border-l border-white/15 pl-4">
                  <p className="whitespace-nowrap text-sm font-bold">
                    {vaultRating}
                  </p>
                  <p className="mt-1 whitespace-nowrap text-xs text-white/40">
                    The Vault Score
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* WEEKLY HIT LIST */}
          <section id="hit-list" className="scroll-mt-8 pt-5">
            <div className="mb-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-pink-400">
                02 / Priorities
              </p>
              <h2 className="mt-2 text-2xl font-black uppercase tracking-tight md:text-3xl">
                The Weekly Hit List
              </h2>
              <p className="mt-2 text-sm text-white/50">
                Three things worth doing before the weekly reset.
              </p>
            </div>
            <div className="grid gap-3 md:grid-cols-3">
              {priorities.map((item) => (
                <article key={item.number} className={boxClass}>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-pink-400">
                      {item.number}
                    </span>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-white/35">
                      {item.label}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/55">
                    {item.description}
                  </p>
                  <Link
                    href={item.href}
                    className="mt-5 inline-block text-[10px] font-bold uppercase tracking-widest text-pink-400 transition hover:text-cyan-300"
                  >
                    {item.reward} ↗
                  </Link>
                </article>
              ))}
            </div>
          </section>

          {/* BONUSES */}
          <section id="bonuses" className="scroll-mt-8 pt-12">
            <div className="mb-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-pink-400">
                03 / Make your money
              </p>
              <h2 className="mt-2 text-2xl font-black uppercase tracking-tight md:text-3xl">
                Bonuses & Payouts
              </h2>
              <p className="mt-2 text-sm text-white/50">
                The reported reward multipliers and limited-time cash
                opportunities.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {bonuses.map((item) => (
                <article key={item.title} className={boxClass}>
                  <p className="text-xs font-black uppercase tracking-widest text-pink-400">
                    {item.label}
                  </p>
                  <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/55">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* VEHICLES */}
          <section id="vehicles" className="scroll-mt-8 pt-12">
            <div className="mb-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-300">
                04 / What's available
              </p>
              <h2 className="mt-2 text-2xl font-black uppercase tracking-tight md:text-3xl">
                Vehicles of the Week
              </h2>
              <p className="mt-2 text-sm text-white/50">
                Podium prize, Prize Ride, showrooms and test rides.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {showrooms.map((item) => (
                <article key={item.title} className={boxClass}>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-cyan-300">
                    {item.label}
                  </p>
                  <h3 className="mt-4 text-xl font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/55">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* DISCOUNTS */}
          <section id="discounts" className="scroll-mt-8 pt-12">
            <div className="mb-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-pink-400">
                05 / Spend wisely
              </p>
              <h2 className="mt-2 text-2xl font-black uppercase tracking-tight md:text-3xl">
                Discounts & Deals
              </h2>
              <p className="mt-2 text-sm text-white/50">
                Prioritise useful purchases over buying something just because
                it's on sale.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {discounts.map((item) => (
                <article key={item.title} className={boxClass}>
                  <p className="text-xs font-black uppercase tracking-widest text-pink-400">
                    {item.label}
                  </p>
                  <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/55">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
            <p className="mt-4 text-xs leading-5 text-white/35">
              Discounted stock and prices can vary by platform, ownership,
              trade price and edition. Check the in-game listing before
              purchasing.
            </p>
          </section>

          {/* FULL WEEKLY UPDATE */}
          <section id="full-update" className="scroll-mt-8 pt-12">
            <div className="mb-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-pink-400">
                06 / The complete briefing
              </p>
              <h2 className="mt-2 text-2xl font-black uppercase tracking-tight md:text-3xl">
                The Full Weekly Update
              </h2>
              <p className="mt-2 text-sm text-white/50">
                Open a topic to see the extra rotations, challenges and
                seasonal rewards.
              </p>
            </div>
            <div className="divide-y divide-white/10 border-y border-white/10">
              {otherFeatures.map((item, index) => (
                <details key={item.title} className="group py-4">
                  <summary className="flex cursor-pointer list-none items-center gap-4">
                    <span className="text-xs font-bold text-pink-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 font-semibold">{item.title}</span>
                    <span className="text-lg text-white/40 transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="ml-8 mt-3 max-w-3xl text-sm leading-6 text-white/55">
                    {item.description}
                  </p>
                </details>
              ))}
            </div>
          </section>

          {/* STRATEGY AND VAULT SCORE */}
          <section id="strategy" className="scroll-mt-8 pt-12">
            <div className="mb-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-300">
                07 / The methodology
              </p>
              <h2 className="mt-2 text-2xl font-black uppercase tracking-tight md:text-3xl">
                Strategy & Vault Score
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-white/50">
                Every weekly update is rated across five categories with fixed
                weights. Each category combines four criteria, scored from 0
                to 25. The category scores are weighted to produce the final
                Vault Score out of 100. This is GTA Vault's editorial rating,
                not an official Rockstar score.
              </p>
            </div>

            <div className="grid gap-3 lg:grid-cols-[1fr_280px]">
              <div className="border border-white/10">
                {categories.map((category) => {
                  const categoryScore = category.criteria.reduce(
                    (sum, criterion) => sum + criterion.score,
                    0
                  );

                  return (
                    <div
                      key={category.name}
                      className="border-b border-white/10 p-4 last:border-b-0"
                    >
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h3 className="font-semibold">{category.name}</h3>
                        <span className="text-xs text-white/45">
                          Score: {categoryScore}/100 · Weight: {category.weight}%
                        </span>
                      </div>

                      <div className="mt-3 h-1 overflow-hidden bg-white/10">
                        <div
                          className="h-full bg-gradient-to-r from-pink-500 to-cyan-300"
                          style={{ width: `${categoryScore}%` }}
                        />
                      </div>

                      <p className="mt-2 text-sm leading-6 text-white/50">
                        {category.description}
                      </p>

                      <div className="mt-3 grid gap-2 sm:grid-cols-2">
                        {category.criteria.map((criterion) => (
                          <div
                            key={criterion.name}
                            className="flex items-center justify-between gap-3 text-xs"
                          >
                            <span className="text-white/45">
                              {criterion.name}
                            </span>
                            <span className="font-semibold text-white/75">
                              {criterion.score}/25
                            </span>
                          </div>
                        ))}
                      </div>

                      <p className="mt-3 text-xs leading-5 text-white/35">
                        {category.reasoning}
                      </p>
                    </div>
                  );
                })}
              </div>

              <aside className="border border-white/10 bg-white/[0.02] p-5">
                <p className="text-[10px] font-bold uppercase tracking-widest text-cyan-300">
                  This week's score
                </p>
                <p className="mt-3 text-5xl font-black tracking-tighter">
                  {vaultScore}
                  <span className="ml-1 text-sm text-white/35">/100</span>
                </p>
                <p className="mt-2 font-semibold">{vaultRating}</p>
                <p className="mt-4 text-sm leading-6 text-white/50">
                  The category scores combine into a weighted total. Review
                  the underlying criteria each week against the confirmed
                  activities, rewards and discounts before publishing.
                </p>
                <p className="mt-4 border-t border-white/10 pt-4 text-xs leading-5 text-white/35">
                  Category scores are GTA Vault editorial judgements. They
                  are not Rockstar statistics.
                </p>
              </aside>
            </div>
          </section>

          <footer className="mt-12 border-t border-white/10 pt-5 text-xs leading-5 text-white/35">
            <p>
              Weekly coverage: 8–14 October 2026. Event rotations and offers
              can change at the weekly reset. Verify final availability and
              prices in GTA Online.
            </p>
          </footer>
        </div>
      </section>
    </main>
  );
}

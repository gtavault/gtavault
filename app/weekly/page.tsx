
import Link from "next/link";
import {
  categories,
  vaultScore,
  vaultRating,
} from "@/lib/vault-score";


const priorities = [
  {
    number: "01",
    label: "GUARANTEED TARGET",
    title: "Get the Panther Statue",
    description:
      "Your first Cayo Perico Heist run during this event guarantees the Panther Statue as the primary target. Make this a priority before the weekly reset.",
    reward: "CAYO PERICO HEIST",
    href: "#bonuses",
  },
  {
    number: "02",
    label: "TRIPLE REWARDS",
    title: "Play Mansion Raid",
    description:
      "Mansion Raid pays 3× GTA$ and RP throughout the event week, making it the strongest repeatable boosted activity.",
    reward: "3× GTA$ + RP",
    href: "#bonuses",
  },
  {
    number: "03",
    label: "FREE LOGIN REWARD",
    title: "Claim The Great Circle Back",
    description:
      "Log in to GTA Online before the event ends on 11 November to receive The Great Circle Back Mansion Painting Decoration.",
    reward: "FREE MANSION DECORATION",
    href: "#full-update",
  },
];

const bonuses = [
  {
    label: "3× GTA$ + RP",
    title: "Mansion Raid",
    description:
      "Mansion Raid offers triple GTA$ and RP throughout the Heist Event Week. This is the main repeatable boosted activity.",
  },
  {
    label: "2× GTA$ + RP",
    title: "Community Series",
    description:
      "Earn double GTA$ and RP by participating in Community Series Jobs.",
  },
  {
    label: "2× FIRST-TIME BONUS",
    title: "Original Heists",
    description:
      "The Fleeca Job, Prison Break, Humane Labs Raid, Series A Funding and Pacific Standard Job receive doubled first-time completion bonuses. This is not a permanent double payout on every replay.",
  },
  {
    label: "2× FIRST-TIME BONUS",
    title: "Doomsday Heist",
    description:
      "The Doomsday Heist receives doubled first-time completion bonuses across its Acts, including the associated preparations and finales.",
  },
  {
    label: "2× FIRST-TIME BONUS",
    title: "Diamond Casino Heist",
    description:
      "Earn a doubled first-time completion bonus when completing the Diamond Casino Heist during the event.",
  },
  {
    label: "2× FIRST-TIME BONUS",
    title: "KnoWay Out",
    description:
      "The first completion of KnoWay Out during the event pays double GTA$.",
  },
];

const discounts = [
  {
    label: "40% OFF",
    title: "High-End Apartments",
    description:
      "Selected High-End Apartments, including Eclipse Towers suites, are discounted by 40%. Useful for players who still need an apartment to host the Original Heists.",
  },
  {
    label: "40% OFF",
    title: "Casino Penthouse",
    description:
      "The Diamond Casino Penthouse and its eligible upgrades and modifications are discounted by 40%.",
  },
  {
    label: "40% OFF",
    title: "Facilities",
    description:
      "Facility properties and eligible upgrades and modifications are discounted by 40%, making this a good opportunity for players planning to complete the Doomsday Heist.",
  },
  {
    label: "30% OFF",
    title: "Selected vehicles",
    description:
      "Discounted vehicles include the Benefactor Vorschlaghammer, Cheval Taipan, Dinka Blista Kanjo, Grotti Cheetah, HVY Insurgent, Invetero Coquette D5, Maibatsu Penumbra FF, Pegassi Reaper, Western Company Besra and Western Rampant Rocket.",
  },
  {
    label: "25% OFF",
    title: "Grotti Veleno GT",
    description:
      "The Grotti Veleno GT receives a 25% discount at Legendary Motorsport. This is its first advertised sale.",
  },
];

const showrooms = [
  {
    label: "CASINO PODIUM",
    title: "Överflöd Entity XXR",
    description:
      "The Entity XXR is this week's Diamond Casino podium vehicle. Spin the Lucky Wheel for a chance to win it.",
  },
  {
    label: "LS CAR MEET PRIZE RIDE",
    title: "Annis Hellion",
    description:
      "Finish in the top five of an LS Car Meet Series race for three consecutive days to unlock this week's Prize Ride.",
  },
  {
    label: "PREMIUM DELUXE MOTORSPORT",
    title: "Five featured vehicles",
    description:
      "The Blista Kanjo, Cheetah, Coquette D5, Penumbra FF and Vorschlaghammer are featured this week.",
  },
  {
    label: "LUXURY AUTOS",
    title: "Vorschlaghammer and Veleno GT",
    description:
      "The Benefactor Vorschlaghammer and Grotti Veleno GT are featured in the Luxury Autos showroom.",
  },
  {
    label: "SALVAGE YARD",
    title: "Three weekly robberies",
    description:
      "The Podium Robbery features the Annis Hellion, the Cargo Ship Robbery features the Truffade Z-Type, and the McTony Robbery features the Lampadati Cinquemila.",
  },
  {
    label: "TEST RIDES",
    title: "Weekly test vehicles",
    description:
      "The regular Test Ride vehicles are the Vapid GT750, Cheval Taipan and HVY Insurgent. The Premium Test Ride is the Pegassi Reaper, while the HSW Premium Test Ride is the Brioso R/A.",
  },
];

const otherFeatures = [
  {
    title: "Weekly Challenge",
    description:
      "Win any Adversary Mode to receive GTA$100,000.",
  },
  {
    title: "Free Mansion Decoration",
    description:
      "Log in to GTA Online between 5 and 11 November to receive The Great Circle Back Mansion Painting Decoration.",
  },
  {
    title: "Cayo Perico Heist",
    description:
      "Your first approach during the event guarantees the Panther Statue as the primary target.",
  },
  {
    title: "Kortz Center Heist",
    description:
      "The Outcome of Endeavour is guaranteed as the primary target on your first run during the event. Other possible targets include To Beat About the Bush, Hare Oneself Think and True Love.",
  },
  {
    title: "Salvage Yard Robberies",
    description:
      "The Podium Robbery features the Annis Hellion, the Cargo Ship Robbery features the Truffade Z-Type, and the McTony Robbery features the Lampadati Cinquemila.",
  },
  {
    title: "Premium Race and Time Trials",
    description:
      "The Premium Race is At the Races. The standard Time Trial is LSIA, and the HSW Time Trial runs from Del Perro Beach to Murietta Heights.",
  },
  {
    title: "Gun Van Offers",
    description:
      "The Baseball Bat and Knife are free. The Precision Rifle is discounted by 50%. Eligible GTA+ members receive 40% off the Compact EMP Launcher and 80% off Armor.",
  },
  {
    title: "First-Time Heist Bonuses",
    description:
      "The Original Heists, Doomsday Heist, Diamond Casino Heist and KnoWay Out offer doubled first-time completion bonuses. These bonuses are not repeated on every subsequent completion.",
  },
  {
    title: "Kortz Center Heist Event",
    description:
      "The event celebrates the Kortz Center Heist with a guaranteed Outcome of Endeavour painting on the first run. The painting was previously associated with the Fine Art Collector programme.",
  },
  {
    title: "GTA+ Benefits",
    description:
      "GTA+ members can claim the Grotti Itali RSX for free through 9 December. Other recurring membership benefits are separate from the general weekly event offers.",
  },
  {
    title: "Weekly Reset",
    description:
      "This rotation runs from 5 to 11 November 2026. The next weekly reset is expected on 12 November. Bonuses, discounts, vehicles and challenges may change at that time.",
  },
];

const boxClass =
  "border border-white/10 bg-white/[0.02] p-5 transition-colors duration-200 hover:border-pink-500/40";

export default function WeeklyPage() {
  return (
    <main className="min-h-screen bg-[#050507] text-white">
      {/* HERO */}
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
              01 / Weekly verdict · 5–11 November 2026
            </p>
            <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div className="min-w-0 flex-1">
                <h2 className="text-3xl font-black uppercase tracking-tight sm:text-4xl md:text-5xl">
                  Is this week worth playing?
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-white/55">
                  A major Heist Event brings doubled first-time completion bonuses, a guaranteed Panther Statue, triple rewards on Mansion Raid and 40% off key heist properties.
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
                Bonuses &amp; Payouts
              </h2>
              <p className="mt-2 text-sm text-white/50">
                This week's featured reward multipliers and limited-time cash
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
                Podium prize, Prize Ride, showrooms and featured vehicles.
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
                Discounts &amp; Deals
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
              Discounts and stock can vary by platform, ownership, trade price
              and edition. Check the in-game listing before purchasing.
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
                Open a topic to see this week's challenges, rotations and
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
                Strategy &amp; Vault Score
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
              Weekly coverage: 5–11 November 2026. Event rotations and offers
              can change at the weekly reset. Verify final availability and
              prices in GTA Online.
            </p>
          </footer>
        </div>
      </section>
    </main>
  );
}

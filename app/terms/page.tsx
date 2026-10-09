import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const sections = [
  {
    number: "01",
    title: "About GTA Vault",
    content: (
      <>
        <p>
          GTA Vault is an independent fan-made website focused on Grand Theft
          Auto V, Grand Theft Auto VI and related gaming content.
        </p>
        <p>
          GTA Vault is not affiliated with, endorsed by, sponsored by, or
          officially connected to Rockstar Games, Take-Two Interactive, or any
          of their subsidiaries or partners.
        </p>
      </>
    ),
  },
  {
    number: "02",
    title: "Intellectual Property",
    content: (
      <>
        <p>
          Grand Theft Auto, GTA, Rockstar Games and related names, logos,
          characters, locations, vehicles and other intellectual property are
          the property of their respective owners.
        </p>
       <p>
  GTA Vault does not claim ownership of third-party intellectual
  property displayed or referenced on the website. Any such material
  remains the property of its respective owner. Its inclusion on
  GTA Vault does not imply endorsement or affiliation, or that
  permission has been granted for every use.
</p>
        <p>
          The website's original design, written content, code and other
          original material created specifically for GTA Vault remain the
          property of GTA Vault unless otherwise stated.
        </p>
      </>
    ),
  },
  {
    number: "03",
    title: "Website Content",
    content: (
      <>
        <p>
          GTA Vault aims to provide accurate and useful news, guides,
          information and entertainment relating to the Grand Theft Auto
          series.
        </p>
        <p>
          However, information may become outdated, change over time, or
          contain errors. GTA Vault does not guarantee that all information
          published on the website is complete, accurate or current.
        </p>
        <p>
          News, rumours, leaks and other reported information should be
          considered in context and should not automatically be treated as
          confirmed information from Rockstar Games.
        </p>
      </>
    ),
  },
  {
    number: "04",
    title: "Games & Features",
    content: (
      <>
        <p>
          GTA Vault may provide browser-based games, quizzes, challenges,
          scores and other interactive features for entertainment purposes.
        </p>
        <p>
          Scores, rankings, daily challenges and other game-related information
          may be changed, reset or removed as the website develops.
        </p>
        <p>
          GTA Vault does not guarantee uninterrupted availability or permanent
          preservation of game progress, scores or other website data.
        </p>
      </>
    ),
  },
  {
    number: "05",
    title: "Third-Party Websites",
    content: (
      <>
        <p>
          GTA Vault may contain links to websites and services operated by
          third parties.
        </p>
        <p>
          These websites operate independently from GTA Vault. We are not
          responsible for their content, availability, security, privacy
          practices or terms.
        </p>
        <p>
          You should review the relevant policies and terms of any third-party
          website before using it.
        </p>
      </>
    ),
  },
  {
    number: "06",
    title: "Copyright & Content Reports",
    content: (
      <>
        <p>
          GTA Vault respects intellectual property rights and aims to respond
          appropriately to legitimate copyright or content concerns.
        </p>
        <p>
          If you believe material appearing on GTA Vault infringes your rights,
          you can contact us with details of the material and the issue so that
          it can be reviewed.
        </p>
      </>
    ),
  },
  {
    number: "07",
    title: "Website Availability",
    content: (
      <>
        <p>
          GTA Vault is provided on an availability basis. We may modify,
          suspend or remove parts of the website at any time.
        </p>
        <p>
          We do not guarantee that the website, individual pages, games or
          other features will always be available or operate without
          interruption.
        </p>
      </>
    ),
  },
  {
    number: "08",
    title: "Acceptable Use",
    content: (
      <>
        <p>
          You agree to use GTA Vault lawfully and responsibly.
        </p>
        <p>
          You must not knowingly attempt to disrupt the website, interfere
          with its operation, gain unauthorised access to systems or data, or
          use the website for unlawful purposes.
        </p>
      </>
    ),
  },
  {
    number: "09",
    title: "Changes To These Terms",
    content: (
      <>
        <p>
          These Terms may be updated from time to time as GTA Vault develops or
          as the website's features and services change.
        </p>
        <p>
          When changes are made, the updated version will be published on this
          page with a revised date.
        </p>
      </>
    ),
  },
  {
    number: "10",
    title: "Contact",
    content: (
      <>
        <p>
          If you have questions about these Terms, intellectual property,
          website content or other issues relating to GTA Vault, please
          contact us.
        </p>
        <p>
          Email:{" "}
          <a
            href="mailto:gtavaulthq@gmail.com"
            className="text-fuchsia-400 transition hover:text-fuchsia-300"
          >
            gtavaulthq@gmail.com
          </a>
        </p>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050507] text-white">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-fuchsia-600/[0.08] blur-[140px]" />
        <div className="absolute right-[-180px] top-[20%] h-[550px] w-[550px] rounded-full bg-purple-600/[0.07] blur-[160px]" />
        <div className="absolute bottom-[-180px] left-[35%] h-[500px] w-[500px] rounded-full bg-cyan-500/[0.04] blur-[160px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050507_75%)]" />
      </div>

      <section className="relative mx-auto max-w-5xl px-5 pb-20 pt-8 sm:px-8 sm:pt-14">
        {/* Back */}
        <Link
          href="/"
          className="group mb-12 inline-flex items-center gap-2 border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-400 transition hover:border-fuchsia-500/30 hover:bg-fuchsia-500/[0.06] hover:text-white"
        >
          <ArrowLeft className="h-3.5 w-3.5 transition group-hover:-translate-x-1" />
          Back to Home
        </Link>

        {/* Header */}
        <header className="mb-14 max-w-3xl">
          <p className="mb-4 text-[9px] font-black uppercase tracking-[0.45em] text-fuchsia-400">
            GTA Vault / Legal
          </p>

          <h1 className="text-4xl font-black uppercase tracking-[-0.03em] text-white sm:text-6xl">
            Terms of Use
          </h1>

          <div className="mt-6 h-px w-32 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400" />

          <p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
            The terms and conditions governing your use of the GTA Vault
            website, games, guides and other content.
          </p>

          <p className="mt-5 text-[9px] font-bold uppercase tracking-[0.3em] text-zinc-600">
            Last updated · October 2026
          </p>
        </header>

        {/* Important notice */}
        <div className="mb-10 border border-fuchsia-500/20 bg-gradient-to-r from-fuchsia-500/[0.07] via-purple-500/[0.04] to-transparent p-6 sm:p-8">
          <p className="mb-3 text-[9px] font-black uppercase tracking-[0.35em] text-fuchsia-400">
            Important
          </p>

          <p className="text-sm leading-7 text-zinc-300">
            GTA Vault is an independent fan website. It is not an official
            Rockstar Games website and is not affiliated with or endorsed by
            Rockstar Games or Take-Two Interactive.
          </p>
        </div>

        {/* Terms */}
        <div className="space-y-5">
          {sections.map((section) => (
            <section
              key={section.number}
              className="border border-white/[0.07] bg-white/[0.025] p-6 backdrop-blur-sm sm:p-8"
            >
              <div className="mb-6 flex items-start gap-5">
                <span className="pt-1 text-[9px] font-black tracking-[0.2em] text-fuchsia-500/50">
                  {section.number}
                </span>

                <div>
                  <h2 className="text-lg font-black uppercase tracking-[0.02em] text-white sm:text-xl">
                    {section.title}
                  </h2>

                  <div className="mt-3 h-px w-12 bg-gradient-to-r from-fuchsia-500 to-purple-500" />
                </div>
              </div>

              <div className="ml-0 space-y-4 text-sm leading-7 text-zinc-400 sm:ml-10">
                {section.content}
              </div>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
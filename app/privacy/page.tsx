import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050507] text-white">

      {/* ======================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none fixed inset-0 overflow-hidden">

        <div className="absolute -left-40 top-[-180px] h-[520px] w-[520px] rounded-full bg-fuchsia-600/[0.055] blur-[130px]" />

        <div className="absolute right-[-180px] top-[30%] h-[520px] w-[520px] rounded-full bg-purple-600/[0.045] blur-[140px]" />

        <div className="absolute bottom-[-260px] left-[35%] h-[500px] w-[500px] rounded-full bg-cyan-500/[0.025] blur-[150px]" />

      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-5 py-8 sm:px-8 lg:px-12 lg:py-12">

        {/* HEADER */}

        <header className="flex items-center justify-between border-b border-white/[0.08] pb-5">

          <Link
            href="/"
            className="group flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.3em] text-zinc-500 transition hover:text-fuchsia-400"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition group-hover:-translate-x-1" />
            Back To Home
          </Link>

          <div className="text-right">

            <p className="text-[9px] font-bold uppercase tracking-[0.35em] text-fuchsia-400">
              GTA Vault
            </p>

            <p className="mt-1 text-[7px] uppercase tracking-[0.3em] text-zinc-700">
              Privacy
            </p>

          </div>

        </header>

        {/* HERO */}

        <section className="pt-14 sm:pt-20">

          <p className="text-[8px] font-bold uppercase tracking-[0.45em] text-fuchsia-400">
            Legal / Privacy
          </p>

          <h1 className="mt-4 text-5xl font-black uppercase leading-[0.9] tracking-[-0.07em] text-white sm:text-6xl lg:text-7xl">
            Privacy
            <br />
            Policy<span className="text-fuchsia-400">.</span>
          </h1>

          <div className="mt-7 flex items-center gap-3">

            <span className="h-px w-12 bg-gradient-to-r from-fuchsia-500 to-purple-500" />

            <span className="h-px w-8 bg-cyan-400/40" />

          </div>

          <p className="mt-7 max-w-2xl text-[12px] leading-6 text-zinc-500 sm:text-[13px]">
            This Privacy Policy explains how GTA Vault handles information
            when you visit and use the website.
          </p>

          <p className="mt-3 text-[8px] font-bold uppercase tracking-[0.3em] text-zinc-700">
            Last updated: October 2026
          </p>

        </section>

        {/* CONTENT */}

        <section className="mt-14 space-y-5 sm:mt-16">

          {/* INTRO */}

          <div className="relative overflow-hidden border border-white/[0.08] bg-[#08080b]/90 p-6 sm:p-8">

            <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-fuchsia-400 via-purple-500 to-cyan-400" />

            <h2 className="text-lg font-black uppercase tracking-[-0.02em] text-white sm:text-xl">
              About This Policy
            </h2>

            <div className="mt-5 space-y-4 text-[12px] leading-6 text-zinc-500 sm:text-[13px]">

              <p>
                GTA Vault is an independent fan-made website covering
                Grand Theft Auto V and Grand Theft Auto VI, including news,
                guides, vehicles, characters, timelines and interactive
                games.
              </p>

              <p>
                We aim to collect as little personal information as possible.
                You do not need to create an account to browse GTA Vault or
                use its games.
              </p>

            </div>

          </div>

          {/* INFORMATION WE COLLECT */}

          <div className="border border-white/[0.08] bg-[#08080b]/80 p-6 sm:p-8">

            <div className="flex items-center gap-3">

              <span className="text-[8px] font-black text-fuchsia-400">
                01
              </span>

              <h2 className="text-lg font-black uppercase tracking-[-0.02em] text-white">
                Information We Collect
              </h2>

            </div>

            <div className="mt-5 space-y-4 text-[12px] leading-6 text-zinc-500 sm:text-[13px]">

              <p>
                GTA Vault does not currently require users to create accounts
                or provide personal information in order to use the website.
              </p>

              <p>
                If you contact GTA Vault by email, we may receive the
                information you choose to include in your message, such as
                your name, email address and the contents of your enquiry.
              </p>

              <p>
                Some website functionality may store information locally in
                your browser. For example, game progress or preferences may
                be stored using browser storage. This information is not
                submitted to GTA Vault as an account or personal profile.
              </p>

            </div>

          </div>

          {/* HOW INFORMATION IS USED */}

          <div className="border border-white/[0.08] bg-[#08080b]/80 p-6 sm:p-8">

            <div className="flex items-center gap-3">

              <span className="text-[8px] font-black text-purple-400">
                02
              </span>

              <h2 className="text-lg font-black uppercase tracking-[-0.02em] text-white">
                How Information Is Used
              </h2>

            </div>

            <div className="mt-5 space-y-4 text-[12px] leading-6 text-zinc-500 sm:text-[13px]">

              <p>
                Information provided through email is used to respond to
                enquiries, feedback, reports or other messages sent to
                GTA Vault.
              </p>

              <p>
                If analytics services are used, information may also be
                processed to understand how visitors use the website and to
                improve its content, performance and user experience.
              </p>

            </div>

          </div>

          {/* COOKIES */}

          <div className="border border-white/[0.08] bg-[#08080b]/80 p-6 sm:p-8">

            <div className="flex items-center gap-3">

              <span className="text-[8px] font-black text-cyan-400">
                03
              </span>

              <h2 className="text-lg font-black uppercase tracking-[-0.02em] text-white">
                Cookies & Similar Technologies
              </h2>

            </div>

            <div className="mt-5 space-y-4 text-[12px] leading-6 text-zinc-500 sm:text-[13px]">

              <p>
                GTA Vault may use cookies, local storage and similar
                technologies for website functionality, analytics and, where
                applicable, advertising.
              </p>

              <p>
                Some technologies may be necessary for the website to
                function correctly, while others may be used to understand
                website usage or support advertising services.
              </p>

              <p>
                Where consent is legally required for non-essential cookies
                or similar technologies, GTA Vault will provide an
                appropriate consent mechanism.
              </p>

            </div>

          </div>

          {/* ADVERTISING */}

          <div className="relative overflow-hidden border border-fuchsia-500/20 bg-fuchsia-500/[0.025] p-6 sm:p-8">

            <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-fuchsia-400 to-cyan-400" />

            <div className="flex items-center gap-3">

              <span className="text-[8px] font-black text-fuchsia-400">
                04
              </span>

              <h2 className="text-lg font-black uppercase tracking-[-0.02em] text-white">
                Advertising
              </h2>

            </div>

            <div className="mt-5 space-y-4 text-[12px] leading-6 text-zinc-500 sm:text-[13px]">

              <p>
                GTA Vault may display advertising from third-party advertising
                providers, including Google, in the future.
              </p>

              <p>
                If advertising services such as Google AdSense are used,
                third-party vendors may use cookies, web beacons, IP
                addresses or similar technologies to serve and measure
                advertisements.
              </p>

              <p>
                Third-party vendors, including Google, may use information
                about visits to this and other websites to provide advertising
                that may be relevant to users. Users can manage advertising
                preferences through the relevant advertising provider's
                settings.
              </p>

            </div>

          </div>

          {/* THIRD PARTY SERVICES */}

          <div className="border border-white/[0.08] bg-[#08080b]/80 p-6 sm:p-8">

            <div className="flex items-center gap-3">

              <span className="text-[8px] font-black text-zinc-400">
                05
              </span>

              <h2 className="text-lg font-black uppercase tracking-[-0.02em] text-white">
                Third-Party Services & Links
              </h2>

            </div>

            <div className="mt-5 space-y-4 text-[12px] leading-6 text-zinc-500 sm:text-[13px]">

              <p>
                GTA Vault may contain links to third-party websites and
                services. These websites operate under their own privacy
                policies and terms, and GTA Vault is not responsible for
                their privacy practices.
              </p>

              <p>
                Where third-party services are used on GTA Vault, their
                respective privacy policies may also apply to information
                processed through those services.
              </p>

            </div>

          </div>

          {/* DATA RETENTION */}

          <div className="border border-white/[0.08] bg-[#08080b]/80 p-6 sm:p-8">

            <div className="flex items-center gap-3">

              <span className="text-[8px] font-black text-zinc-400">
                06
              </span>

              <h2 className="text-lg font-black uppercase tracking-[-0.02em] text-white">
                Data Retention
              </h2>

            </div>

            <div className="mt-5 space-y-4 text-[12px] leading-6 text-zinc-500 sm:text-[13px]">

              <p>
                GTA Vault only retains personal information for as long as it
                is reasonably necessary for the purpose for which it was
                provided, unless a longer retention period is required by law.
              </p>

              <p>
                Information contained in emails may be retained for as long
                as reasonably necessary to handle the enquiry and maintain
                appropriate records.
              </p>

            </div>

          </div>

          {/* YOUR RIGHTS */}

          <div className="border border-white/[0.08] bg-[#08080b]/80 p-6 sm:p-8">

            <div className="flex items-center gap-3">

              <span className="text-[8px] font-black text-zinc-400">
                07
              </span>

              <h2 className="text-lg font-black uppercase tracking-[-0.02em] text-white">
                Your Rights
              </h2>

            </div>

            <div className="mt-5 space-y-4 text-[12px] leading-6 text-zinc-500 sm:text-[13px]">

              <p>
                Depending on the circumstances and applicable law, you may
                have rights concerning your personal information, including
                rights to access, correct, delete, restrict or object to
                certain processing of your information.
              </p>

              <p>
                If you have a privacy request or question, you can contact
                GTA Vault using the email address below.
              </p>

            </div>

          </div>

          {/* POLICY UPDATES */}

          <div className="border border-white/[0.08] bg-[#08080b]/80 p-6 sm:p-8">

            <div className="flex items-center gap-3">

              <span className="text-[8px] font-black text-zinc-400">
                08
              </span>

              <h2 className="text-lg font-black uppercase tracking-[-0.02em] text-white">
                Changes To This Policy
              </h2>

            </div>

            <p className="mt-5 text-[12px] leading-6 text-zinc-500 sm:text-[13px]">
              This Privacy Policy may be updated from time to time to reflect
              changes to GTA Vault, the services used on the website or
              applicable legal and privacy requirements. The latest version
              will be published on this page.
            </p>

          </div>

          {/* CONTACT */}

          <div className="relative overflow-hidden border border-white/[0.08] bg-black/40 p-6 sm:p-8">

            <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-fuchsia-400 via-purple-500 to-cyan-400" />

            <p className="text-[8px] font-bold uppercase tracking-[0.4em] text-fuchsia-400">
              Contact
            </p>

            <h2 className="mt-3 text-xl font-black uppercase tracking-[-0.03em] text-white">
              Privacy Questions?
            </h2>

            <p className="mt-4 text-[12px] leading-6 text-zinc-500 sm:text-[13px]">
              If you have a question about this Privacy Policy or how GTA
              Vault handles information, contact us at:
            </p>

            <a
              href="mailto:gtavaulthq@gmail.com"
              className="mt-5 inline-block text-sm font-bold text-fuchsia-400 transition hover:text-cyan-400"
            >
              gtavaulthq@gmail.com
            </a>

          </div>

        </section>

        {/* FOOTER */}

        <footer className="border-t border-white/[0.08] pb-6 pt-8">

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            <p className="text-[7px] font-bold uppercase tracking-[0.3em] text-zinc-700">
              GTA Vault · Independent Fan Website
            </p>

            <Link
              href="/"
              className="text-[8px] font-bold uppercase tracking-[0.3em] text-zinc-600 transition hover:text-fuchsia-400"
            >
              Back To GTA Vault →
            </Link>

          </div>

        </footer>

      </div>

    </main>
  );
}
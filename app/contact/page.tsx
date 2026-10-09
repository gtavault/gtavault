import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";

export default function ContactPage() {
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
            GTA Vault / Contact
          </p>

          <h1 className="text-4xl font-black uppercase tracking-[-0.03em] text-white sm:text-6xl">
            Contact GTA Vault
          </h1>

          <div className="mt-6 h-px w-32 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400" />

          <p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
            Questions, feedback, corrections or partnership enquiries? Get in
            touch with the GTA Vault team.
          </p>
        </header>

        {/* General contact */}
        <section className="border border-white/[0.07] bg-white/[0.025] p-6 backdrop-blur-sm sm:p-8">
          <div className="mb-6 flex items-start gap-5">
            <span className="pt-1 text-[9px] font-black tracking-[0.2em] text-fuchsia-500/50">
              01
            </span>

            <div>
              <h2 className="text-lg font-black uppercase tracking-[0.02em] text-white sm:text-xl">
                Get In Touch
              </h2>

              <div className="mt-3 h-px w-12 bg-gradient-to-r from-fuchsia-500 to-purple-500" />
            </div>
          </div>

          <div className="ml-0 space-y-4 text-sm leading-7 text-zinc-400 sm:ml-10">
            <p>
              Have a question, spotted an error, or want to get in touch?
              We&apos;d love to hear from you.
            </p>

            <p>
              Whether it&apos;s feedback, a correction, partnership enquiry or
              a suggestion for GTA Vault, you can contact us using the email
              address below.
            </p>
          </div>
        </section>

        {/* Email */}
        <section className="mt-5 border border-fuchsia-500/[0.15] bg-fuchsia-500/[0.025] p-6 sm:p-8">
          <div className="mb-6 flex items-start gap-5">
            <span className="pt-1 text-[9px] font-black tracking-[0.2em] text-purple-500/50">
              02
            </span>

            <div>
              <h2 className="text-lg font-black uppercase tracking-[0.02em] text-white sm:text-xl">
                Email
              </h2>

              <div className="mt-3 h-px w-12 bg-gradient-to-r from-purple-500 to-fuchsia-500" />
            </div>
          </div>

          <div className="ml-0 sm:ml-10">
            <a
              href="mailto:gtavaulthq@gmail.com"
              className="group inline-flex items-center gap-3 border border-fuchsia-500/20 bg-fuchsia-500/[0.06] px-5 py-4 text-sm font-semibold text-fuchsia-400 transition hover:border-fuchsia-400/50 hover:bg-fuchsia-500/[0.1] hover:text-white"
            >
              <Mail className="h-4 w-4" />
              <span>gtavaulthq@gmail.com</span>
            </a>

            <p className="mt-5 text-sm leading-7 text-zinc-500">
              We aim to respond to genuine enquiries as soon as possible.
            </p>
          </div>
        </section>

        {/* Socials */}
        <section className="mt-5 border border-white/[0.07] bg-white/[0.025] p-6 backdrop-blur-sm sm:p-8">
          <div className="mb-6 flex items-start gap-5">
            <span className="pt-1 text-[9px] font-black tracking-[0.2em] text-cyan-400/50">
              03
            </span>

            <div>
              <h2 className="text-lg font-black uppercase tracking-[0.02em] text-white sm:text-xl">
                Socials
              </h2>

              <div className="mt-3 h-px w-12 bg-gradient-to-r from-cyan-400 to-purple-500" />
            </div>
          </div>

          <div className="ml-0 text-sm leading-7 text-zinc-400 sm:ml-10">
            <p>
              You can also follow GTA Vault on X, Instagram, TikTok and Discord
              for the latest GTA VI news, guides and updates.
            </p>

            <p className="mt-4 text-zinc-500">
              Social links will be added here as each official GTA Vault
              channel becomes available.
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
export default function ContactPage() {
  return (
<main className="min-h-screen page-background text-white">
      <section className="mx-auto max-w-5xl px-6 pt-16 pb-16">
        <Link
  href="/"
  className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-zinc-300 transition hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-white"
>
    <ArrowLeft className="h-4 w-4" />
    Back to Home
  </Link>
        <h1 className="mb-4 text-5xl font-bold tracking-tight">
          Contact GTA Vault
        </h1>

        <div className="mb-10 h-1 w-24 rounded-full bg-gradient-to-r from-pink-500 to-purple-500" />

        <div className="space-y-6 text-lg leading-8 text-gray-300">
          <p>
            Have a question, spotted an error, or want to get in touch? We'd
            love to hear from you.
          </p>

          <p>
            Whether it's feedback, partnership enquiries or suggestions for
            GTA Vault, you can contact us using the email below.
          </p>
        </div>

        <div className="mt-16 rounded-2xl border border-pink-500/20 bg-white/5 p-8 backdrop-blur-sm">
          <h2 className="mb-6 text-2xl font-semibold">
            Email
          </h2>

          <a
            href="mailto:gtavaulthq@gmail.com"
            className="text-lg font-medium text-pink-400 transition hover:text-pink-300"
          >
            gtavaulthq@gmail.com
          </a>

          <p className="mt-6 leading-8 text-gray-400">
            We aim to respond to all genuine enquiries as soon as possible.
          </p>
        </div>

        <div className="mt-16 rounded-2xl border border-white/10 bg-black/40 p-8">
          <h2 className="mb-4 text-2xl font-semibold">
            Socials
          </h2>

          <p className="leading-8 text-gray-400">
            You can also follow GTA Vault on X, Instagram, TikTok and Discord
            for the latest GTA VI news, guides and updates.
          </p>
        </div>
      </section>
    </main>
  );
}
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
export default function PrivacyPage() {

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

          Privacy Policy

        </h1>

        <div className="mb-10 h-1 w-24 rounded-full bg-gradient-to-r from-pink-500 to-purple-500" />

        <div className="space-y-6 text-lg leading-8 text-gray-300">

          <p>

            Your privacy is important to us. This Privacy Policy explains what

            information GTA Vault collects and how it is used.

          </p>

          <p>

            By using GTA Vault, you agree to the practices described in this

            policy.

          </p>

        </div>

        <div className="mt-16 rounded-2xl border border-pink-500/20 bg-white/5 p-8 backdrop-blur-sm">

          <h2 className="mb-4 text-2xl font-semibold text-white">

            Information We Collect

          </h2>

          <p className="leading-8 text-gray-300">

            GTA Vault does not require users to create an account or submit

            personal information to browse the website. If you contact us by

            email, we will only use the information you provide to respond to

            your enquiry.

          </p>

        </div>

        <div className="mt-16 rounded-2xl border border-pink-500/20 bg-white/5 p-8 backdrop-blur-sm">

          <h2 className="mb-4 text-2xl font-semibold text-white">

            Cookies & Analytics

          </h2>

          <p className="leading-8 text-gray-300">

            GTA Vault may use cookies or analytics services to understand how

            visitors use the website and to improve the user experience. These

            services do not personally identify visitors.

          </p>

        </div>

        <div className="mt-16 rounded-2xl border border-pink-500/20 bg-white/5 p-8 backdrop-blur-sm">

          <h2 className="mb-4 text-2xl font-semibold text-white">

            Third-Party Links

          </h2>

          <p className="leading-8 text-gray-300">

            Our website may contain links to third-party websites. We are not

            responsible for the privacy practices or content of external sites.

          </p>

        </div>

        <div className="mt-16 rounded-2xl border border-white/10 bg-black/40 p-8">

          <h2 className="mb-4 text-2xl font-semibold text-white">

            Contact

          </h2>

          <p className="leading-8 text-gray-400">

            If you have any questions about this Privacy Policy, please contact

            us at{" "}

            <a

              href="mailto:gtavaulthq@gmail.com"

              className="text-pink-400 hover:text-pink-300"

            >

              gtavaulthq@gmail.com

            </a>.

          </p>

        </div>

      </section>

    </main>

  );

}
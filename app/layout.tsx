import Header from "@/components/Header";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gtavaulthq.com"),

  title: {
    default: "GTA Vault | GTA 6 News, Guides, Vehicles & More",
    template: "%s | GTA Vault",
  },

  description:
    "GTA Vault is an independent GTA 6 fan site covering the latest news, guides, vehicles, characters, story information, games and more.",

    alternates: {
  canonical: "/",
},

  keywords: [
    "GTA 6",
    "GTA VI",
    "GTA 6 news",
    "GTA 6 guides",
    "GTA 6 vehicles",
    "GTA 6 characters",
    "GTA 6 story",
    "Grand Theft Auto VI",
    "Grand Theft Auto 6",
    "GTA Vault",
  ],

  applicationName: "GTA Vault",

  authors: [
    {
      name: "GTA Vault",
    },
  ],

  creator: "GTA Vault",
  publisher: "GTA Vault",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "GTA Vault",
    title: "GTA Vault | GTA 6 News, Guides, Vehicles & More",
    description:
      "GTA Vault is an independent GTA 6 fan site covering news, guides, vehicles, characters, story information, games and more.",
  },

  twitter: {
    card: "summary_large_image",
    title: "GTA Vault | GTA 6 News, Guides, Vehicles & More",
    description:
      "Independent GTA 6 fan site covering news, guides, vehicles, characters, story information, games and more.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${geistSans.variable} ${geistMono.variable} h-full overflow-x-hidden antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[#0a0a0f] text-white">
        <div className="fixed inset-0 -z-10 bg-black" />

        <div className="fixed inset-0 -z-10 bg-black" />

        <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.35),transparent_50%),radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.35),transparent_50%),radial-gradient(circle_at_center,rgba(147,51,234,0.2),transparent_60%)] opacity-60" />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EZY21EMF83"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-EZY21EMF83');
          `}
        </Script>

        <Header />

        {children}

        <div className="h-0 bg-gradient-to-b from-transparent via-black/40 to-black" />

        <footer className="border-t border-pink-500/20 bg-black/30 backdrop-blur-xl">
          <div className="mx-auto max-w-7xl px-6 py-6">
            <div className="pt-2 text-center">
              <p className="mx-auto max-w-2xl text-sm leading-relaxed text-zinc-500">
                Unofficial fan website. Not affiliated with Rockstar Games or
                Take-Two Interactive.
              </p>

              <div className="mt-6 flex justify-center gap-6 text-xs uppercase tracking-[0.3em] text-zinc-500">
                <a
                  href="/about"
                  className="transition hover:text-pink-400"
                >
                  About
                </a>

                <a
                  href="/contact"
                  className="transition hover:text-pink-400"
                >
                  Contact
                </a>

                <a
                  href="/privacy"
                  className="transition hover:text-pink-400"
                >
                  Privacy
                </a>

                <a
                  href="/terms"
                  className="transition hover:text-pink-400"
                >
                  Terms
                </a>
              </div>

              <p className="mt-5 text-xs uppercase tracking-[0.3em] text-zinc-600">
                © 2026 GTA Vault
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
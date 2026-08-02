import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import Countdown from "@/components/Countdown";
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
  title: "GTA Vault HQ",
  description: "Latest GTA 6 news, guides, vehicles, story updates and more.",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};
 
export default function RootLayout({
  
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
     <body className="min-h-full flex flex-col bg-[#0a0a0f] text-white">
  <div className="fixed inset-0 -z-10 bg-black" />

<div className="fixed inset-0 -z-10 bg-black" />

<div className="fixed inset-0 -z-10 opacity-60 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.35),transparent_50%),radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.35),transparent_50%),radial-gradient(circle_at_center,rgba(147,51,234,0.2),transparent_60%)]" />

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

<div className="h0 bg-gradient-to-b from-transparent via-black/40 to-black" />
<footer className="border-t border-pink-500/20 bg-black/30 backdrop-blur-xl">
 <div className="mx-auto max-w-7xl px-6 py-6">



<div className="pt-2 text-center">

 <p className="mx-auto max-w-2xl text-sm leading-relaxed text-zinc-500">
  Unofficial fan website. Not affiliated with Rockstar Games or Take-Two Interactive.
</p>
<div className="mt-6 flex justify-center gap-6 text-xs uppercase tracking-[0.3em] text-zinc-500">
  <a href="/about" className="hover:text-pink-400">
    About
  </a>

  <a href="/contact" className="hover:text-pink-400">
    Contact
  </a>

  <a href="/privacy" className="hover:text-pink-400">
    Privacy
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

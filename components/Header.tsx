 "use client";
import { FaXTwitter, FaDiscord } from "react-icons/fa6";
import { SiTiktok, SiInstagram } from "react-icons/si";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
 return (
  <>
 <nav className="w-full border-b border-zinc-800 bg-zinc-950/80 backdrop-blur">
 <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
 <Link href="/" className="flex items-center">
  <img
    src="/logo.png"
    alt="GTA Vault"
    className="h-11 w-auto md:h-10"
  />
</Link>
<p className="hidden lg:block text-sm text-zinc-400 uppercase tracking-[0.2em]">
  Your home for GTA VI news and updates.
</p>

<div className="flex items-center gap-3 whitespace-nowrap">
  <a
    href="https://x.com/GTAVaultHQ"
    target="_blank"
    rel="noopener noreferrer"
    className="text-zinc-400 transition hover:text-cyan-300"
  >
    <FaXTwitter size={18} />
  </a>

  <a
  href="https://tiktok.com/@gtavaulthq"
  target="_blank"
  rel="noopener noreferrer"
  className="text-zinc-400 transition hover:text-pink-400"
>
  <SiTiktok size={18} />
</a>

<a
  href="https://instagram.com/gtavaulthq"
  target="_blank"
  rel="noopener noreferrer"
  className="text-zinc-400 transition hover:text-pink-500"
>
  <SiInstagram size={18} />
</a>

  <a
    href="https://discord.gg/v35YqG3fy"
    target="_blank"
    rel="noopener noreferrer"
    className="text-zinc-400 transition hover:text-indigo-400"
  >
    <FaDiscord size={18} />
  </a>
</div>
<button
  onClick={() => setMenuOpen(!menuOpen)}
  className="text-zinc-300"
>
  {menuOpen ? <X size={30} /> : <Menu size={30} />}
</button>
  </div>
</nav>
{menuOpen && (
  <div className="border-b border-zinc-800 bg-zinc-950 px-6 py-5">
  <div className="flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900/50 p-4 text-zinc-300">
    <Link
  href="/"
  onClick={() => setMenuOpen(false)}
  className="rounded-xl px-4 py-3 text-zinc-300 transition hover:bg-zinc-800 hover:text-white"
>
  Home
</Link>

<Link
  href="/report"
  onClick={() => setMenuOpen(false)}
  className="rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-4 py-3 transition hover:border-cyan-400 hover:bg-cyan-500/20"
>
  <span className="font-semibold text-cyan-300">
    Vault Score
  </span>
  <span className="ml-2 text-xs font-medium text-cyan-200/80">
    — Updated Every Thursday
  </span>
</Link>

   <Link
  href="/news"
  onClick={() => setMenuOpen(false)}
  className="rounded-xl px-4 py-3 text-zinc-300 transition hover:bg-zinc-800 hover:text-white"
>
  Latest News
</Link>

<Link
  href="/story"
  onClick={() => setMenuOpen(false)}
  className="rounded-xl px-4 py-3 text-zinc-300 transition hover:bg-zinc-800 hover:text-white"
>
  Story
</Link>

<Link
  href="/media"
  onClick={() => setMenuOpen(false)}
  className="rounded-xl px-4 py-3 text-zinc-300 transition hover:bg-zinc-800 hover:text-white"
>
  Media Archive
</Link>

<Link
  href="/vehicles"
  onClick={() => setMenuOpen(false)}
  className="rounded-xl px-4 py-3 text-zinc-300 transition hover:bg-zinc-800 hover:text-white"
>
  Vehicles
</Link>

<Link
  href="/heists"
  onClick={() => setMenuOpen(false)}
  className="rounded-xl px-4 py-3 text-zinc-300 transition hover:bg-zinc-800 hover:text-white"
>
  Heists & Crimes
</Link>

<Link
  href="/guides"
  onClick={() => setMenuOpen(false)}
  className="rounded-xl px-4 py-3 text-zinc-300 transition hover:bg-zinc-800 hover:text-white"
>
  Guides
</Link>
    </div>
  </div>
)}

  </>
  );
}
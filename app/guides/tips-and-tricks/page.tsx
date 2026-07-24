import ArticleMeta from "@/components/ArticleMeta";
export default function TipsAndTricksPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
<ArticleMeta updated="26 June 2026" />
      <a
        href="/guides"
        className="mb-8 inline-flex text-sm font-medium text-pink-400 transition-colors hover:text-pink-300"
      >
        ← Back to Guides
      </a>

      <h1 className="text-4xl font-black uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">
        GTA VI Tips & Tricks
      </h1>

      <p className="mt-6 max-w-2xl text-zinc-400">
        Useful advice and information to help you prepare for Grand Theft Auto VI.
      </p>
<img
  src="/guides/tips-and-tricks.jpg"
  alt="GTA VI Tips & Tricks"
  className="mt-10 mb-10 h-[380px] w-full rounded-3xl object-cover object-center"
/>

<h2 className="mt-16 mb-6 text-2xl font-black uppercase tracking-wider text-pink-400">
  GET READY FOR LAUNCH
</h2>

<ul className="space-y-4 text-lg text-zinc-300">
  <li>• Follow Rockstar Games for official GTA VI news and updates.</li>
  <li>• Avoid unverified rumours and fake gameplay leaks.</li>
  <li>• Make sure you have enough free storage on your console.</li>
  <li>• Consider pre-ordering if you plan to play on release day.</li>
</ul>
<h2 className="mt-16 mb-6 text-2xl font-black uppercase tracking-wider text-pink-400">
  WHAT TO EXPECT
</h2>

<p className="max-w-4xl text-lg leading-relaxed text-zinc-300">
  Based on official trailers and Rockstar announcements, players can expect a huge open world, improved visuals, a modern version of Vice City and a story centred around Lucia and Jason. Rockstar is also introducing the wider state of Leonida, offering a more diverse world than any previous Grand Theft Auto game.
</p>
<h2 className="mt-16 mb-6 text-2xl font-black uppercase tracking-wider text-pink-400">
  COMMUNITY ADVICE
</h2>

<ul className="space-y-4 text-lg text-zinc-300">
  <li>• Take time to explore instead of rushing through the story.</li>
  <li>• Try different vehicles and activities to experience everything Leonida has to offer.</li>
  <li>• Watch out for hidden details and Rockstar easter eggs.</li>
  <li>• Check GTA Vault regularly for new guides and updates.</li>
</ul>

    </main>
  );
}
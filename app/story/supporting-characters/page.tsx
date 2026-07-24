import Link from "next/link";
export default function SupportingCharactersPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <Link
        href="/story"
        className="mb-8 inline-flex text-sm font-medium text-pink-400 transition-colors hover:text-pink-300"
      >
        ← Back to Story
      </Link>
      <p className="mb-6 text-sm text-zinc-500">
        By <span className="font-semibold text-white">GTA Vault</span> • Updated 26 June 2026 • 6 min read
      </p>
      <h1 className="text-4xl font-black uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">
        SUPPORTING CHARACTERS
      </h1>
      <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-300">
        While Lucia and Jason take centre stage, Grand Theft Auto VI's supporting cast appears just as important in bringing Leonida to life. Rockstar Games has officially introduced a wide range of characters from music entrepreneurs and career criminals to lifelong friends and organised crime figures. Together they help create a world that feels varied, believable and full of opportunity.
      </p>
      <div className="mt-10 mb-16 overflow-hidden rounded-3xl border border-pink-500/20">
        <img
          src="/story/supporting-characters.jpg"
          alt="Supporting Characters"
          className="h-[420px] w-full object-cover object-[center_40%]"
        />
      </div>
      {/* BOOBIE IKE */}
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div className="overflow-hidden rounded-3xl border border-pink-500/20">
          <img
            src="/story/boobie-ike.jpg"
            alt="Boobie Ike"
            className="h-[420px] w-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl font-black text-white">
            BOOBIE IKE
          </h2>
          <div className="mt-6 rounded-2xl border border-pink-500/20 bg-zinc-900/30 p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-pink-400">
              Role
            </p>
            <p className="mb-4 mt-2 font-semibold text-white">
              Entrepreneur & Music Executive
            </p>
            <p className="text-xs uppercase tracking-[0.3em] text-pink-400">
              Status
            </p>
            <p className="mt-2 font-semibold text-white">
              Officially Confirmed
            </p>
          </div>
          <p className="mt-8 text-lg leading-9 text-zinc-300">
            Boobie Ike is one of Vice City's most successful businessmen, having built a growing empire that spans property, entertainment and the music industry. Rockstar Games describes him as someone who transformed his street reputation into legitimate business success while never forgetting where he came from.
          </p>
          <p className="mt-6 text-lg leading-9 text-zinc-300">
            Although he enjoys the rewards of success, Boobie remains deeply connected to Leonida's criminal underworld. His business ventures and industry connections place him in a unique position, making him one of the most influential supporting characters revealed so far.
          </p>
        </div>
      </div>
      {/* CAL HAMPTON */}
      <div className="mt-24 grid items-center gap-10 lg:grid-cols-2">
       <div className="order-2 lg:order-1">
          <div>
            <h2 className="text-3xl font-black text-white">
              CAL HAMPTON
            </h2>
            <div className="mt-6 rounded-2xl border border-pink-500/20 bg-zinc-900/30 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-pink-400">
                Role
              </p>
              <p className="mb-4 mt-2 font-semibold text-white">
                Jason's Friend
              </p>
              <p className="text-xs uppercase tracking-[0.3em] text-pink-400">
                Status
              </p>
              <p className="mt-2 font-semibold text-white">
                Officially Confirmed
              </p>
            </div>
            <p className="mt-8 text-lg leading-9 text-zinc-300">
              Cal Hampton is one of Jason's closest friends and offers a very different perspective on life in Leonida. Rockstar portrays him as someone who is comfortable staying out of the spotlight while spending much of his time monitoring radio chatter, internet conspiracies and the strange events taking place around him.
            </p>
            <p className="mt-6 text-lg leading-9 text-zinc-300">
              Although Cal may initially appear to provide comic relief, Rockstar's character descriptions suggest there is far more to him than first meets the eye. His knowledge, observations and loyalty could make him an important ally as Jason and Lucia's story unfolds.
            </p>
          </div>
        </div>
        <div className="order-1 overflow-hidden rounded-3xl border border-pink-500/20 lg:order-2">
          <img
            src="/story/cal-hampton.jpg"
            alt="Cal Hampton"
            className="h-[420px] w-full object-cover"
          />
        </div>
      </div>
            {/* DRE'QUAN PRIEST */}
      <div className="mt-24 grid items-center gap-10 lg:grid-cols-2">
        <div className="overflow-hidden rounded-3xl border border-pink-500/20">
          <img
            src="/story/drequan-priest.jpg"
            alt="Dre'Quan Priest"
            className="h-[420px] w-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl font-black text-white">
            DRE'QUAN PRIEST
          </h2>
          <div className="mt-6 rounded-2xl border border-pink-500/20 bg-zinc-900/30 p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-pink-400">
              Role
            </p>
            <p className="mb-4 mt-2 font-semibold text-white">
              Music Producer & Entrepreneur
            </p>
            <p className="text-xs uppercase tracking-[0.3em] text-pink-400">
              Status
            </p>
            <p className="mt-2 font-semibold text-white">
              Officially Confirmed
            </p>
          </div>
          <p className="mt-8 text-lg leading-9 text-zinc-300">
            Dre'Quan Priest has always dreamed of making it big in Vice City's music industry. Rockstar describes him as someone who moved away from life on the streets to pursue success through entertainment, using ambition and determination to build new opportunities for himself.
          </p>
          <p className="mt-6 text-lg leading-9 text-zinc-300">
            Working closely alongside Real Dimez, Dre'Quan hopes to establish himself as a respected music producer while navigating the unpredictable business landscape of Leonida. His ambitions could place him at the centre of one of GTA VI's most interesting side stories.
          </p>
        </div>
      </div>
      {/* REAL DIMEZ */}
      <div className="mt-24 grid items-center gap-10 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <h2 className="text-3xl font-black text-white">
            REAL DIMEZ
          </h2>
          <div className="mt-6 rounded-2xl border border-pink-500/20 bg-zinc-900/30 p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-pink-400">
              Role
            </p>
            <p className="mb-4 mt-2 font-semibold text-white">
              Music Duo
            </p>
            <p className="text-xs uppercase tracking-[0.3em] text-pink-400">
              Status
            </p>
            <p className="mt-2 font-semibold text-white">
              Officially Confirmed
            </p>
          </div>
          <p className="mt-8 text-lg leading-9 text-zinc-300">
            Real Dimez is a rising music duo looking to turn online popularity into mainstream success. Rockstar has presented the pair as energetic, ambitious and deeply connected to Vice City's modern culture, reflecting the influence of social media and internet fame throughout GTA VI.
          </p>
          <p className="mt-6 text-lg leading-9 text-zinc-300">
            Their partnership with Dre'Quan Priest suggests they will play an important role within Leonida's entertainment scene. Whether their ambitions remain focused on music or become intertwined with the criminal world remains one of the many questions surrounding GTA VI's supporting cast.
          </p>
        </div>
        <div className="order-1 overflow-hidden rounded-3xl border border-pink-500/20 lg:order-2">
          <img
            src="/story/real-dimez-v2.jpg"
            alt="Real Dimez"
            className="h-[420px] w-full object-cover"
          />
        </div>
      </div>
            {/* RAUL BAUTISTA */}
      <div className="mt-24 grid items-center gap-10 lg:grid-cols-2">
        <div className="overflow-hidden rounded-3xl border border-pink-500/20">
          <img
            src="/story/raul-bautista.jpg"
            alt="Raul Bautista"
            className="h-[420px] w-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl font-black text-white">
            RAUL BAUTISTA
          </h2>
          <div className="mt-6 rounded-2xl border border-pink-500/20 bg-zinc-900/30 p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-pink-400">
              Role
            </p>
            <p className="mb-4 mt-2 font-semibold text-white">
              Experienced Bank Robber
            </p>
            <p className="text-xs uppercase tracking-[0.3em] text-pink-400">
              Status
            </p>
            <p className="mt-2 font-semibold text-white">
              Officially Confirmed
            </p>
          </div>
          <p className="mt-8 text-lg leading-9 text-zinc-300">
            Raul Bautista is a seasoned criminal with a reputation for planning high-risk robberies. Rockstar describes him as confident, charismatic and always searching for the next lucrative score, regardless of the danger involved.
          </p>
          <p className="mt-6 text-lg leading-9 text-zinc-300">
            His experience makes him one of the most dangerous figures introduced so far. Whether he becomes a mentor, employer or threat to Lucia and Jason remains unknown, but his role suggests that major heists will play an important part in GTA VI's story.
          </p>
        </div>
      </div>
      {/* BRIAN HEDER */}
      <div className="mt-24 grid items-center gap-10 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <h2 className="text-3xl font-black text-white">
            BRIAN HEDER
          </h2>
          <div className="mt-6 rounded-2xl border border-pink-500/20 bg-zinc-900/30 p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-pink-400">
              Role
            </p>
            <p className="mb-4 mt-2 font-semibold text-white">
              Drug Smuggler
            </p>
            <p className="text-xs uppercase tracking-[0.3em] text-pink-400">
              Status
            </p>
            <p className="mt-2 font-semibold text-white">
              Officially Confirmed
            </p>
          </div>
          <p className="mt-8 text-lg leading-9 text-zinc-300">
            Brian Heder is a long-established drug smuggler operating from the Leonida Keys. Rockstar portrays him as someone who has survived decades in the criminal underworld by relying on experience, trusted connections and careful planning rather than unnecessary risk.
          </p>
          <p className="mt-6 text-lg leading-9 text-zinc-300">
            Brian's position within Leonida's underworld suggests he could become an important figure for both Lucia and Jason. His local influence and extensive criminal network may provide opportunities, information or dangerous complications as their story develops.
          </p>
        </div>
        <div className="order-1 overflow-hidden rounded-3xl border border-pink-500/20 lg:order-2">
          <img
            src="/story/brian-heder.jpg"
            alt="Brian Heder"
            className="h-[420px] w-full object-cover"
          />
        </div>
      </div>
      <h2 className="mt-24 mb-6 text-2xl font-black uppercase tracking-wider text-pink-400">
        WHAT WE STILL DON'T KNOW
      </h2>
      <p className="text-lg leading-9 text-zinc-300">
        Rockstar Games has introduced each of these characters with carefully selected details while deliberately leaving much of their stories unexplored. Their relationships with Lucia and Jason, their long-term motivations and the impact they will have on GTA VI's narrative remain unknown ahead of launch.
      </p>
      <p className="mt-6 text-lg leading-9 text-zinc-300">
        As Rockstar releases additional trailers and official information, this page will continue to grow with updated character profiles, new story connections and confirmed details about Leonida's expanding cast.
      </p>
      <div className="mt-16 rounded-3xl border border-pink-500/20 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-cyan-500/10 p-8">
        <h3 className="mb-4 text-2xl font-black text-white">
          GTA Vault Verdict
        </h3>
        <p className="leading-8 text-zinc-300">
          GTA VI's supporting cast already appears to be one of Rockstar Games' strongest. From ambitious entrepreneurs and rising music stars to veteran criminals and trusted allies, every officially revealed character brings a unique perspective to Leonida. Together they help create a world that feels believable, interconnected and full of opportunity long before players even begin their journey.
        </p>
        <p className="mt-6 text-sm text-zinc-500">
          Last updated:
          <span className="font-semibold text-white">
            {" "}26 June 2026
          </span>
        </p>
      </div>
    </main>
  );
}
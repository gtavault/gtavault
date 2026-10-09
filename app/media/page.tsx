"use client";
import { useCallback, useEffect, useState } from "react";
type GalleryImage = {
  src: string;
  name: string;
  category: "People" | "Places";
};
const peopleCollections = [
  ["Boobie_Ike", 4],
  ["Brian_Heder", 4],
  ["Cal_Hampton", 4],
  ["DreQuan_Priest", 4],
  ["Jason_and_Lucia", 13],
  ["Jason_Duval", 10],
  ["Lucia_Caminos", 10],
  ["Raul_Bautista", 4],
  ["Real_Dimez", 3],
] as const;
const placeCollections = [
  ["Ambrosia", 6],
  ["Grassrivers", 6],
  ["Leonida_Keys", 6],
  ["Mount_Kalaga_National_Park", 6],
  ["Port_Gellhorn", 6],
  ["Vice_City", 12],
] as const;
const galleryImages: GalleryImage[] = [
  ...peopleCollections.flatMap(([folder, count]) =>
    Array.from({ length: count }, (_, index) => ({
      src: `/media/gallery/people/${folder}_${String(index + 1).padStart(2, "0")}.jpg`,
      name: folder.replaceAll("_", " "),
      category: "People" as const,
    }))
  ),
  ...placeCollections.flatMap(([folder, count]) =>
    Array.from({ length: count }, (_, index) => ({
      src: `/media/gallery/places/${folder}_${String(index + 1).padStart(2, "0")}.jpg`,
      name: folder.replaceAll("_", " "),
      category: "Places" as const,
    }))
  ),
];
function shuffleImages<T>(images: T[]): T[] {
  const shuffled = [...images];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
export default function MediaPage() {
  const [mixedImages] = useState(() => shuffleImages(galleryImages));
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<
    "All" | "People" | "Places"
  >("All");
  const filteredImages = mixedImages.filter(
    (image) => activeCategory === "All" || image.category === activeCategory
  );
  const selectedImage =
    selectedIndex === null ? null : filteredImages[selectedIndex];
  const previousImage = useCallback(() => {
    setSelectedIndex((current) => {
      if (current === null || filteredImages.length === 0) return current;
      return current === 0 ? filteredImages.length - 1 : current - 1;
    });
  }, [filteredImages.length]);
  const nextImage = useCallback(() => {
    setSelectedIndex((current) => {
      if (current === null || filteredImages.length === 0) return current;
      return current === filteredImages.length - 1 ? 0 : current + 1;
    });
  }, [filteredImages.length]);
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (event.key === "Escape") setSelectedIndex(null);
      if (event.key === "ArrowLeft") previousImage();
      if (event.key === "ArrowRight") nextImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, previousImage, nextImage]);
  useEffect(() => {
    setSelectedIndex(null);
  }, [activeCategory]);
  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <img
          src="/media/trailers.jpg"
          alt="GTA VI Media"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black" />
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.5em] text-pink-400">
            GTA Vault
          </p>
          <h1 className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-6xl font-black uppercase tracking-wide text-transparent md:text-8xl">
            MEDIA ARCHIVE
          </h1>
          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-zinc-300">
            Explore every official trailer, screenshot, artwork and wallpaper
            released for Grand Theft Auto VI — all organised into one premium
            archive.
          </p>
          <div className="mt-16 flex justify-center">
            <a
              href="#trailers"
              className="rounded-full border border-pink-500/40 bg-pink-500/10 px-8 py-4 text-lg font-semibold transition hover:border-pink-400 hover:bg-pink-500/20"
            >
              ▼ Explore Archive
            </a>
          </div>
        </div>
      </section>
      {/* GTA VI EXTENDED LOOK — NETFLIX */}
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-16">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-pink-400">
            Netflix Premiere
          </p>
          <h2 className="mt-4 text-5xl font-black uppercase">
            GTA VI: An Extended Look
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            Go beyond the trailers with Rockstar&apos;s extended look at Vice
            City, Leonida, Jason and Lucia. Captured entirely from in-game
            footage on PlayStation 5.
          </p>
        </div>
        <div className="overflow-hidden rounded-3xl border border-pink-500/20 shadow-2xl">
          <div className="aspect-video">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/uphThaa97ig"
              title="Grand Theft Auto VI: An Extended Look"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-5 rounded-2xl border border-white/10 bg-zinc-900/40 p-6 sm:flex-row">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-pink-400">
              Extended Look
            </p>
            <p className="mt-2 text-xl font-bold text-white">
              GTA VI: An Extended Look
            </p>
            <p className="mt-2 text-sm text-zinc-400">
              Watch the video above or visit Rockstar&apos;s official page.
            </p>
          </div>
          <a
            href="https://www.rockstargames.com/VI/an-extended-look"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-full border border-pink-500/40 bg-pink-500/10 px-6 py-3 font-semibold text-pink-400 transition hover:border-pink-400 hover:bg-pink-500/20"
          >
            Official Release ↗
          </a>
        </div>
      </section>
      {/* FEATURED TRAILER */}
      <section id="trailers" className="mx-auto max-w-7xl px-6 py-32">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-pink-400">
            Featured Release
          </p>
          <h2 className="mt-4 text-5xl font-black uppercase">Trailer 2</h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            Rockstar&apos;s second official GTA VI trailer delivered the biggest
            look yet at Lucia, Jason, Leonida and the criminal world awaiting
            players.
          </p>
        </div>
        <div className="overflow-hidden rounded-3xl border border-pink-500/20 shadow-2xl">
          <div className="aspect-video">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/VQRLujxTm3c"
              title="Grand Theft Auto VI Trailer 2"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Released", value: "6 May 2025" },
            { label: "Runtime", value: "2:46" },
            { label: "Protagonists", value: "Lucia & Jason" },
            { label: "Status", value: "Official" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                {item.label}
              </p>
              <p
                className={`mt-3 text-2xl font-bold ${
                  item.label === "Status" ? "text-green-400" : "text-white"
                }`}
              >
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </section>
      {/* TRAILER ARCHIVE */}
      <section className="mx-auto max-w-7xl px-6 pb-32">
        <div className="mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-pink-400">
            Archive
          </p>
          <h2 className="mt-4 text-5xl font-black uppercase text-white">
            Official Trailer Collection
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            Every official Grand Theft Auto VI trailer released by Rockstar
            Games, presented in chronological order.
          </p>
        </div>
        <div className="grid gap-10 lg:grid-cols-2">
          {/* TRAILER 2 */}
          <div className="overflow-hidden rounded-3xl border border-pink-500/20 bg-zinc-900/30 transition duration-300 hover:-translate-y-2 hover:border-pink-500/50">
            <img
              src="/media/trailer-2.jpg"
              alt="Trailer 2"
              className="h-[260px] w-full object-cover"
            />
            <div className="p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-pink-400">
                Latest Release
              </p>
              <h3 className="mt-3 text-3xl font-black text-white">
                Trailer 2
              </h3>
              <p className="mt-4 leading-8 text-zinc-300">
                Rockstar expanded the story, revealed new supporting
                characters and showcased Leonida in far greater detail.
              </p>
              <div className="mt-8 flex items-center justify-between">
                <span className="text-zinc-500">Released 6 May 2025</span>
                <a
                  href="https://youtu.be/VQRLujxTm3c"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-pink-400 transition hover:text-pink-300"
                >
                  Watch ↗
                </a>
              </div>
            </div>
          </div>
          {/* TRAILER 1 */}
          <div className="overflow-hidden rounded-3xl border border-pink-500/20 bg-zinc-900/30 transition duration-300 hover:-translate-y-2 hover:border-pink-500/50">
            <img
              src="/media/trailer-1.jpg"
              alt="Trailer 1"
              className="h-[260px] w-full object-cover"
            />
            <div className="p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-pink-400">
                First Reveal
              </p>
              <h3 className="mt-3 text-3xl font-black text-white">
                Trailer 1
              </h3>
              <p className="mt-4 leading-8 text-zinc-300">
                The world was introduced to Lucia, Jason, Vice City and the
                modern state of Leonida for the very first time.
              </p>
              <div className="mt-8 flex items-center justify-between">
                <span className="text-zinc-500">Released 4 Dec 2023</span>
                <a
                  href="https://youtu.be/QdBZY2fkU-0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-pink-400 transition hover:text-pink-300"
                >
                  Watch ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* THE VAULT WALL */}
      <section className="mx-auto max-w-[1700px] px-6 pb-32">
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-pink-400">
            Official Collection
          </p>
          <h2 className="mt-4 text-5xl font-black uppercase text-white">
            The Vault Wall
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            Explore the growing GTA VI media archive, featuring characters and
            locations from across Leonida.
          </p>
        </div>
        {/* CATEGORY FILTERS */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {(["All", "People", "Places"] as const).map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-6 py-3 text-sm font-semibold transition ${
                activeCategory === category
                  ? "border-pink-400 bg-pink-500/20 text-white"
                  : "border-white/10 bg-white/[0.03] text-zinc-400 hover:border-pink-500/50 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        {/* MASONRY GALLERY — RANDOM MIX OF PEOPLE AND PLACES */}
        <div className="columns-1 gap-6 sm:columns-2 xl:columns-3 2xl:columns-4">
          {filteredImages.map((image, index) => (
            <div
              key={image.src}
              onClick={() => setSelectedIndex(index)}
              className="mb-6 cursor-pointer break-inside-avoid"
            >
              <img
                src={image.src}
                alt={`${image.name} — ${image.category}`}
                loading="lazy"
                className="w-full rounded-2xl transition duration-300 hover:brightness-110"
              />
            </div>
          ))}
        </div>
      </section>
      {/* LIGHTBOX */}
      {selectedImage && selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center overflow-hidden p-6"
          onClick={() => setSelectedIndex(null)}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/95 to-black/75 backdrop-blur-md" />
          {/* CLOSE */}
          <button
            type="button"
            aria-label="Close image"
            onClick={() => setSelectedIndex(null)}
            className="absolute right-6 top-6 z-20 text-5xl font-light text-white transition hover:text-pink-400"
          >
            ×
          </button>
          {/* PREVIOUS */}
          <button
            type="button"
            aria-label="Previous image"
            onClick={(event) => {
              event.stopPropagation();
              previousImage();
            }}
            className="absolute left-6 z-20 text-5xl text-white transition hover:text-pink-400"
          >
            ‹
          </button>
          {/* NEXT */}
          <button
            type="button"
            aria-label="Next image"
            onClick={(event) => {
              event.stopPropagation();
              nextImage();
            }}
            className="absolute right-6 top-1/2 z-20 -translate-y-1/2 text-5xl text-white transition hover:text-pink-400"
          >
            ›
          </button>
          {/* IMAGE */}
          <img
            src={selectedImage.src}
            alt={`${selectedImage.name} — ${selectedImage.category}`}
            className="relative z-10 max-h-[82vh] max-w-[82vw] rounded-3xl border border-white/10 object-contain shadow-[0_0_80px_rgba(0,0,0,0.6)]"
            onClick={(event) => event.stopPropagation()}
          />
          {/* COUNTER */}
          <div className="absolute bottom-10 z-20 rounded-full border border-white/10 bg-black/60 px-6 py-3 text-white backdrop-blur">
            {selectedIndex + 1} / {filteredImages.length}
          </div>
        </div>
      )}
    </main>
  );
}
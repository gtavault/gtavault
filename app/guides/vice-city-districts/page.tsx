"use client";
import ArticleMeta from "@/components/ArticleMeta";
import { useEffect, useRef, useState } from "react";
export default function ViceCityDistrictsPage() {
  const images = [
  "/guides/vice-city-skyline.jpg",
  "/guides/leonida-wetlands.jpg",
  "/guides/vice-beach.jpg",
  "/guides/mount-kalaga.jpg",
];

const [currentImage, setCurrentImage] = useState(0);
const [showImage, setShowImage] = useState(false);
const touchStartX = useRef(0);
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  }, 3500);

  return () => clearInterval(interval);
}, []);
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
        Vice City Districts
      </h1>

      <p className="mt-6 max-w-2xl text-zinc-400">
        Explore the different districts and regions revealed across Vice City and Leonida.
      </p>
      <img
  src="/guides/vice-city-districts.jpg"
  alt="Vice City Districts"
  className="mt-10 mb-10 h-[360px] w-full rounded-3xl object-cover object-center"
/>
<h2 className="mt-16 mb-6 text-2xl font-black uppercase tracking-wider text-pink-400">
  WHAT WE KNOW SO FAR
</h2>

<p className="max-w-4xl text-lg leading-relaxed text-zinc-300">
  Rockstar has revealed several locations across Vice City and the wider state of Leonida through trailers and screenshots. While the complete map remains unknown, official material has already shown beaches, downtown districts, suburbs and rural regions.
</p>
<h2 className="mt-16 mb-6 text-2xl font-black uppercase tracking-wider text-pink-400">
  QUICK FACTS
</h2>

<ul className="space-y-4 text-lg text-zinc-300">
  <li>• State: Leonida</li>
  <li>• Main City: Vice City</li>
  <li>• Confirmed Locations: 7+</li>
  <li>• Environments: Cities, beaches, wetlands and forests</li>
</ul>
<h2 className="mt-16 mb-6 text-2xl font-black uppercase tracking-wider text-pink-400">
  CONFIRMED DISTRICTS
</h2>

<ul className="space-y-4 text-lg text-zinc-300">
  <li>• Vice City</li>
  <li>• Ocean Beach</li>
  <li>• Vice Beach</li>
  <li>• Port Gellhorn</li>
  <li>• Grassrivers</li>
  <li>• Ambrosia</li>
  <li>• Mount Kalaga National Park</li>
</ul>
<h2 className="mt-16 mb-6 text-2xl font-black uppercase tracking-wider text-pink-400">
  EXPLORE LEONIDA
</h2>

<p className="mb-6 text-lg leading-relaxed text-zinc-300">
  <span className="font-bold text-white">Vice City</span> returns as the main urban setting of Grand Theft Auto VI and appears to feature busy streets, skyscrapers and vibrant nightlife inspired by modern-day Miami.
</p>

<p className="mb-6 text-lg leading-relaxed text-zinc-300">
  <span className="font-bold text-white">Ocean Beach and Vice Beach</span> are among the most iconic coastal areas revealed so far, featuring hotels, nightlife and large stretches of sand.
</p>

<p className="mb-6 text-lg leading-relaxed text-zinc-300">
  <span className="font-bold text-white">Port Gellhorn</span> appears to be a rougher and less glamorous location that has developed its own identity away from Vice City.
</p>

<p className="mb-6 text-lg leading-relaxed text-zinc-300">
  <span className="font-bold text-white">Grassrivers</span> is Leonida's vast wetland region and appears to be home to swamps, wildlife and remote locations.
</p>

<p className="mb-6 text-lg leading-relaxed text-zinc-300">
  <span className="font-bold text-white">Ambrosia and Mount Kalaga National Park</span> suggest that Leonida extends far beyond Vice City, offering industrial areas, forests and mountainous environments to explore.
</p>
<div className="relative mt-16 mb-12 overflow-hidden rounded-3xl border border-pink-500/20">
 <img
  src={images[currentImage]}
  alt="Leonida region"
  onClick={() => setShowImage(true)}
className="h-[370px] w-full cursor-pointer object-cover"
  onTouchStart={(e) => {
    touchStartX.current = e.touches[0].clientX;
  }}
  onTouchEnd={(e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }

    if (diff < -50) {
      setCurrentImage(
        (prev) => (prev - 1 + images.length) % images.length
      );
    }
  }}
/>

<div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
  {images.map((_, index) => (
    <button
      key={index}
      onClick={() => setCurrentImage(index)}
      className={`h-2 w-2 rounded-full transition-colors ${
        currentImage === index
          ? "bg-pink-400"
          : "bg-zinc-600"
      }`}
    />
  ))}
</div>
{showImage && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
    onClick={() => setShowImage(false)}
  >
    <img
      src={images[currentImage]}
      alt="Leonida region"
      className="max-h-[90vh] max-w-[90vw] rounded-3xl"
      onClick={(e) => e.stopPropagation()}
    />
  </div>
)}
</div>
<h2 className="mt-16 mb-6 text-2xl font-black uppercase tracking-wider text-pink-400">
  WHAT COULD STILL BE HIDDEN?
</h2>

<ul className="space-y-4 text-lg text-zinc-300">
  <li>• Additional towns and cities</li>
  <li>• More islands around Leonida</li>
  <li>• Hidden interior locations</li>
  <li>• Underground areas and secret locations</li>
</ul>
    </main>
  );
}
interface ImageBreakProps {
  image: string;
  alt: string;
  caption?: string;
}

export default function ImageBreak({
  image,
  alt,
  caption,
}: ImageBreakProps) {
  return (
    <section className="my-20">

      <div className="relative overflow-hidden rounded-[36px] border border-white/10">

        <img
          src={image}
          alt={alt}
          className="h-[260px] w-full object-cover transition-transform duration-700 hover:scale-105 md:h-[520px]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      </div>

      {caption && (
        <p className="mt-5 text-center text-sm text-zinc-500">
          {caption}
        </p>
      )}

    </section>
  );
}
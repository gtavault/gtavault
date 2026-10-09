import { LucideIcon } from "lucide-react";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({
  items,
}: TimelineProps) {
  return (
    <section className="my-24">

      <div className="space-y-10">

        {items.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="relative flex gap-6"
            >
              <div className="flex flex-col items-center">

                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-pink-500/30 bg-pink-500/10">
                  <Icon
                    size={24}
                    className="text-pink-400"
                  />
                </div>

                {index !== items.length - 1 && (
                  <div className="mt-3 h-full w-px bg-gradient-to-b from-pink-500/50 to-transparent" />
                )}

              </div>

              <div className="flex-1 rounded-3xl border border-white/10 bg-zinc-900/40 p-6 backdrop-blur">

                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-pink-400">
                  {item.year}
                </p>

                <h3 className="mt-3 text-2xl font-black text-white">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-zinc-400">
                  {item.description}
                </p>

              </div>

            </div>
          );
        })}

      </div>

    </section>
  );
}
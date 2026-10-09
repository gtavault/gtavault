import {
  Calendar,
  MapPinned,
  Users,
  Gamepad2,
  Car,
  Clapperboard,
  CircleDollarSign,
  CircleHelp,
  LucideIcon,
} from "lucide-react";

interface QuickNavItem {
  id: string;
  label: string;
  icon: LucideIcon;
}

interface QuickNavProps {
  items: QuickNavItem[];
}

export default function QuickNav({ items }: QuickNavProps) {
  return (
    <section className="my-16">

      <div className="mb-8">
        <p className="text-sm font-bold uppercase tracking-[0.35em] text-pink-400">
          Quick Navigation
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">

        {items.map((item) => {
          const Icon = item.icon;

          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="group rounded-3xl border border-white/10 bg-zinc-900/50 p-5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-pink-500/40 hover:bg-zinc-900"
            >
              <Icon
                size={30}
                className="text-pink-400 transition-transform duration-300 group-hover:scale-110"
              />

              <h3 className="mt-4 text-lg font-bold text-white">
                {item.label}
              </h3>

              <p className="mt-2 text-sm text-zinc-400">
                Jump to section
              </p>
            </a>
          );
        })}

      </div>
    </section>
  );
}

export const guideNavigation: QuickNavItem[] = [
  {
    id: "release-date",
    label: "Release Date",
    icon: Calendar,
  },
  {
    id: "map",
    label: "Map",
    icon: MapPinned,
  },
  {
    id: "characters",
    label: "Characters",
    icon: Users,
  },
  {
    id: "gameplay",
    label: "Gameplay",
    icon: Gamepad2,
  },
  {
    id: "vehicles",
    label: "Vehicles",
    icon: Car,
  },
  {
    id: "trailers",
    label: "Trailers",
    icon: Clapperboard,
  },
  {
    id: "pricing",
    label: "Pricing",
    icon: CircleDollarSign,
  },
  {
    id: "faq",
    label: "FAQ",
    icon: CircleHelp,
  },
];
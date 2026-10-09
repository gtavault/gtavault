import {
  CheckCircle2,
  AlertTriangle,
  Info,
  LucideIcon,
} from "lucide-react";

type BannerVariant =
  | "official"
  | "rumour"
  | "info";

interface InfoBannerProps {
  title: string;
  children: React.ReactNode;
  variant?: BannerVariant;
}

const styles: Record<
  BannerVariant,
  {
    icon: LucideIcon;
    border: string;
    bg: string;
    text: string;
  }
> = {
  official: {
    icon: CheckCircle2,
    border: "border-green-500/30",
    bg: "bg-green-500/10",
    text: "text-green-300",
  },
  rumour: {
    icon: AlertTriangle,
    border: "border-yellow-500/30",
    bg: "bg-yellow-500/10",
    text: "text-yellow-300",
  },
  info: {
    icon: Info,
    border: "border-cyan-500/30",
    bg: "bg-cyan-500/10",
    text: "text-cyan-300",
  },
};

export default function InfoBanner({
  title,
  children,
  variant = "info",
}: InfoBannerProps) {
  const style = styles[variant];
  const Icon = style.icon;

  return (
    <section
      className={`my-12 rounded-[30px] border ${style.border} ${style.bg} p-6 backdrop-blur`}
    >
      <div className="flex items-center gap-3">

        <Icon
          size={26}
          className={style.text}
        />

        <h3
          className={`text-xl font-bold ${style.text}`}
        >
          {title}
        </h3>

      </div>

      <div className="mt-5 leading-8 text-zinc-300">
        {children}
      </div>
    </section>
  );
}
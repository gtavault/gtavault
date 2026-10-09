import { LucideIcon } from "lucide-react";

interface FactCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  accent?: boolean;
}

export default function FactCard({
  icon: Icon,
  label,
  value,
  accent = false,
}: FactCardProps) {
  return (
    <div
      className={`group rounded-[28px] border p-6 transition-all duration-300 hover:-translate-y-1 ${
        accent
          ? "border-pink-500/30 bg-pink-500/10"
          : "border-white/10 bg-zinc-900/50"
      }`}
    >
      <Icon
        size={30}
        className="text-pink-400 transition-transform duration-300 group-hover:scale-110"
      />

      <p className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
        {label}
      </p>

      <h3 className="mt-3 text-2xl font-black text-white">
        {value}
      </h3>
    </div>
  );
}
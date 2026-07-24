"use client";

type VaultScoreProps = {
  score: number;
};

export default function VaultScore({ score }: VaultScoreProps) {
  const radius = 90;
  const stroke = 12;
  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  const progress = Math.max(0, Math.min(100, score));
  const strokeDashoffset =
    circumference - (progress / 100) * circumference;

  function getTier(score: number) {
    if (score >= 95)
      return { label: "Legendary Week", color: "#a855f7" };
    if (score >= 85)
      return { label: "Excellent Week", color: "#3b82f6" };
    if (score >= 70)
      return { label: "Great Week", color: "#22c55e" };
    if (score >= 50)
      return { label: "Good Week", color: "#eab308" };
    if (score >= 30)
      return { label: "Average Week", color: "#f97316" };

    return { label: "Poor Week", color: "#ef4444" };
  }

  const tier = getTier(score);

  return (
    <div className="flex flex-col items-center py-10">
      <div className="relative h-56 w-56">

        <svg
          className="-rotate-90"
          width="224"
          height="224"
        >
          <circle
            cx="112"
            cy="112"
            r={normalizedRadius}
            stroke="#27272a"
            strokeWidth={stroke}
            fill="none"
          />

          <circle
            cx="112"
            cy="112"
            r={normalizedRadius}
            stroke={tier.color}
            strokeWidth={stroke}
            strokeLinecap="round"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            style={{
              transition: "stroke-dashoffset 1s ease",
            }}
          />
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold">{score}</h1>
          <p className="mt-1 text-xs uppercase tracking-[0.3em] text-zinc-400">
            Vault Score
          </p>
        </div>
      </div>

      <p
        className="mt-6 text-xl font-semibold"
        style={{ color: tier.color }}
      >
        {tier.label}
      </p>
    </div>
  );
}
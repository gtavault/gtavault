"use client";

import { useEffect, useState } from "react";

interface VaultScoreRingProps {
  score: number;
}

export default function VaultScoreRing({
  score,
}: VaultScoreRingProps) {
  const [displayScore, setDisplayScore] = useState(0);

  useEffect(() => {
    let current = 0;

    const timer = setInterval(() => {
      current++;

      setDisplayScore(current);

      if (current >= score) {
        clearInterval(timer);
      }
    }, 18);

    return () => clearInterval(timer);
  }, [score]);

  const radius = 170;
  const stroke = 16;

  const circumference = 2 * Math.PI * radius;

  const progress =
    circumference -
    (score / 100) * circumference;

  let colour =
    "rgb(34 211 238)";

  if (score >= 95)
    colour = "rgb(168 85 247)";
  else if (score >= 85)
    colour = "rgb(59 130 246)";
  else if (score >= 70)
    colour = "rgb(34 197 94)";
  else if (score >= 50)
    colour = "rgb(234 179 8)";
  else if (score >= 30)
    colour = "rgb(249 115 22)";
  else
    colour = "rgb(239 68 68)";

  return (
   <div className="relative flex h-[320px] w-[320px] scale-80 items-center justify-center sm:h-[380px] sm:w-[380px] sm:scale-100 lg:h-[430px] lg:w-[430px] [animation:vaultFloat_8s_ease-in-out_infinite]">
      {/* Outer Glow */}

      <div
        className="absolute h-[390px] w-[390px] rounded-full blur-[80px]"
        style={{
          background: colour,
          opacity: 0.28,
        }}
      />

      {/* Outer Ring */}

      <div className="absolute h-[410px] w-[410px] rounded-full border border-white/10" />

      {/* Tick Marks */}

      <div className="absolute h-[400px] w-[400px] animate-[spin_60s_linear_infinite]">

        {Array.from({ length: 100 }).map((_, i) => (
          <div
            key={i}
            className="absolute left-1/2 top-1/2 h-[200px] origin-bottom"
            style={{
              transform: `translate(-50%,-100%) rotate(${i * 3.6}deg)`,
            }}
          >
            <div
              className={`mx-auto ${
                i % 5 === 0
                  ? "h-4 w-[2px]"
                  : "h-2 w-px"
              } bg-white/20`}
            />
          </div>
        ))}

      </div>

      <svg
  className="-rotate-90 absolute h-full w-full"
  viewBox="0 0 430 430"
>
        <circle
          cx="215"
          cy="215"
          r={radius}
          stroke="rgba(255,255,255,.08)"
          strokeWidth={stroke}
          fill="none"
        />

        <circle
          cx="215"
          cy="215"
          r={radius}
          stroke={colour}
          strokeWidth={stroke}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={progress}
          style={{
            transition:
              "stroke-dashoffset 1.6s ease",
            filter: `drop-shadow(0 0 20px ${colour})`,
          }}
        />
                {/* Centre Glass */}
        <circle
          cx="215"
          cy="215"
          r="138"
          fill="rgba(255,255,255,0.05)"
        />

        <circle
          cx="215"
          cy="215"
          r="138"
          stroke="rgba(255,255,255,.08)"
          strokeWidth="2"
          fill="none"
        />

      </svg>

      {/* Reflection */}
      <div className="pointer-events-none absolute top-[72px] left-[92px] h-24 w-48 rounded-full bg-white/10 blur-2xl rotate-[-18deg]" />

      {/* Inner Glow */}
      <div
        className="absolute h-[250px] w-[250px] rounded-full blur-[60px]"
        style={{
          background: colour,
          opacity: 0.12,
        }}
      />

      {/* Centre Content */}
      <div className="relative z-10 text-center">

        <p className="text-xs uppercase tracking-[0.45em] text-zinc-400">
          VAULT SCORE
        </p>

        <h2
  className="mt-3 text-6xl font-black leading-none tracking-[-0.08em] sm:text-7xl lg:text-8xl"
          style={{
            color: colour,
            textShadow: `0 0 30px ${colour}`,
          }}
        >
          {displayScore}
        </h2>

        <p className="mt-4 text-sm font-semibold uppercase tracking-[0.45em] text-white/80">
          {score >= 95
            ? "LEGENDARY"
            : score >= 85
            ? "EXCELLENT"
            : score >= 70
            ? "GREAT"
            : score >= 50
            ? "GOOD"
            : score >= 30
            ? "AVERAGE"
            : "POOR"}
        </p>

      </div>

    </div>
  );
}
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Higher or Lower — GTA Vehicle Challenge",
  description:
    "Play GTA Vault's Higher or Lower vehicle challenge. Compare GTA vehicle prices, predict whether the next vehicle costs more or less, and build the highest score you can.",
  alternates: {
    canonical: "/games/higher-lower",
  },
};

export default function HigherLowerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GTA V Quote Challenge",
  description:
    "Play GTA Vault's GTA V Quote Challenge. Identify which GTA V character said each quote, earn points for correct answers and score up to 5,000.",
  alternates: {
    canonical: "/games/quotes",
  },
};

export default function QuoteChallengeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
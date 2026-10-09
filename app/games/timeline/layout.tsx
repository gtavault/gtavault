import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GTA V Timeline Challenge",
  description:
    "Test your GTA V story knowledge in GTA Vault's daily Timeline Challenge. Put four key events in the correct chronological order and score up to 10,000 points.",
  alternates: {
    canonical: "/games/timeline",
  },
};

export default function TimelineLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
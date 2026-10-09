import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guess the Location",
  description:
    "Test your knowledge of the GTA world in GTA Vault's Guess the Location game. Identify locations, place your pin and score points based on how close you are.",
  alternates: {
    canonical: "/games/location",
  },
};

export default function LocationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
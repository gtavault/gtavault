import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GTA Games & Challenges",
  description:
    "Play GTA Vault's collection of GTA games and challenges, including quizzes, location challenges, character games, timelines, vehicle challenges and quote challenges.",
  alternates: {
    canonical: "/games",
  },
};

export default function GamesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
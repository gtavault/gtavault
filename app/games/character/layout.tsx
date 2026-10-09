import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Who Am I? — Daily GTA Character",
  description:
    "Play GTA Vault's daily GTA character challenge. Identify the mystery character using up to five guesses as the image becomes clearer.",
  alternates: {
    canonical: "/games/character",
  },
};

export default function CharacterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
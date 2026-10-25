import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Who Am I? — Daily GTA Character",
  description:
    "Play GTA Vault's daily GTA character challenge. Identify the mystery character using up to five guesses as the image becomes clearer.",
  alternates: {
    canonical: "/games/character",
  },
  openGraph: {
    title: "Who Am I? — Daily GTA Character | GTA Vault",
    description:
      "Five attempts. Every guess reveals more. Can you identify today's mystery GTA character?",
    url: "https://www.gtavaulthq.com/games/character",
    siteName: "GTA Vault",
    images: [
      {
        url: "https://www.gtavaulthq.com/games/character.jpg",
        alt: "GTA Vault Daily Character",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Who Am I? — Daily GTA Character | GTA Vault",
    description:
      "Five attempts. Every guess reveals more. Can you identify today's mystery GTA character?",
    images: ["https://www.gtavaulthq.com/games/character.jpg"],
  },
};
export default function CharacterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
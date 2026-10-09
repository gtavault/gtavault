import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Story | GTA Vault",
  description:
    "Explore GTA VI's characters, storyline, theories and the world of Leonida.",
};
export default function StoryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
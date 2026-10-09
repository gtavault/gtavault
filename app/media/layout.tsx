import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Media Archive | GTA Vault",
  description:
    "Explore the GTA VI media archive on GTA Vault, featuring official trailers, screenshots, character galleries and locations from Leonida.",
};
export default function MediaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
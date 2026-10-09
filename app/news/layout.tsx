import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "News | GTA Vault",
  description:
    "The latest GTA VI news, announcements and updates, all in one place.",
};
export default function NewsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
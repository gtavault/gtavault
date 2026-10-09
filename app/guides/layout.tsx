
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GTA VI Guides | GTA Vault",
  description:
    "Explore GTA VI guides, gameplay tips, activities, secrets and helpful information for exploring Leonida in Grand Theft Auto VI.",
};

export default function GuidesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

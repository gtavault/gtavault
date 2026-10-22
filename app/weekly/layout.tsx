
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Weekly Vault Score | GTA Vault",
  description:
    "Your GTA Online weekly briefing: bonuses, discounts, vehicles, challenges and the GTA Vault Score.",
  openGraph: {
    title: "Weekly Vault Score | GTA Vault",
    description:
      "Discover this week's GTA Online bonuses, discounts, vehicles and challenges.",
    url: "https://www.gtavaulthq.com/weekly",
    siteName: "GTA Vault",
    type: "website",
    images: [
      {
        url: "/images/gta-online-halloween-weekly.jpg",
        width: 1200,
        height: 630,
        alt: "GTA Online Halloween weekly update — GTA Vault",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Weekly Vault Score | GTA Vault",
    description:
      "Discover this week's GTA Online bonuses, discounts, vehicles and challenges.",
    images: [
      "/images/gta-online-halloween-weekly.jpg",
    ],
  },
};

export default function WeeklyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

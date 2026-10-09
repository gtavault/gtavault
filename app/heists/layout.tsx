import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Vehicles | GTA Vault",
  description:
    "Explore GTA VI vehicles, cars, bikes and other rides expected in Leonida.",
};
export default function VehiclesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
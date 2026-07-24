import VaultScore from "@/components/vaultscore/VaultScore";

export default function WeeklyPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="mb-10 text-4xl font-bold">Weekly Report</h1>

      <VaultScore score={94} />
    </main>
  );
}
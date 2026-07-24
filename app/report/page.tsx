import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ReportHero from "@/components/report/ReportHero";
import AtAGlance from "@/components/report/AtAGlance";
import ScoreBreakdown from "@/components/report/ScoreBreakdown";
import Strategy from "@/components/report/Strategy";
import MoneyOpportunities from "@/components/report/MoneyOpportunities";
import WeeklyDiscounts from "@/components/report/WeeklyDiscounts";
import WhatsNew from "@/components/report/WhatsNew";
import Verdict from "@/components/report/Verdict";
import WeeklyBreakdown from "@/components/report/WeeklyBreakdown";
export default function ReportPage() {
  return (
    <main className="min-h-screen bg-[var(--gta-bg)] text-white">
     <div className="mx-auto max-w-7xl space-y-12 px-4 py-10 sm:px-6">
       <div className="mb-8">
  <Link
    href="/"
    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-zinc-300 transition hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-white"
  >
    <ArrowLeft className="h-4 w-4" />
    Back to Home
  </Link>
</div>
        <ReportHero />
        <AtAGlance />
        <ScoreBreakdown />
        <WeeklyBreakdown />
        <Strategy />
        <MoneyOpportunities />
        <WeeklyDiscounts />
        <WhatsNew />
        <Verdict />
      </div>
    </main>
  );
}
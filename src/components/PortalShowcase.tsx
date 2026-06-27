"use client";

import { Calendar } from "lucide-react";
import { Suspense } from "react";
import CompareMarquee from "./CompareMarquee";
import { REVIEW_DATE } from "@/data/siteContent";

function PortalShowcaseContent() {
  return (
    <section className="relative w-full h-[24vh] md:h-[40vh] md:min-h-[280px] max-h-[420px] overflow-hidden bg-portal-purple-dark px-4 sm:px-6 lg:px-8 flex items-center">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-portal-purple rounded-full mix-blend-multiply filter blur-3xl opacity-50" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-portal-yellow rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-center h-full py-4">
        <div className="flex flex-col justify-center min-h-0">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="inline-flex items-center rounded-full border border-portal-yellow/30 bg-portal-purple/40 px-2.5 py-0.5 text-[10px] font-rubik font-bold uppercase tracking-wider text-portal-yellow">
              18+ · Portugal
            </span>
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px] font-nunito text-portal-white/80">
              Análise editorial
            </span>
          </div>

          <h1 className="text-xl sm:text-2xl lg:text-3xl font-rubik font-extrabold text-portal-white mb-2 leading-tight line-clamp-2">
            Compare casinos licenciados com rigor e transparência
          </h1>

          <p className="text-xs sm:text-sm text-portal-white/75 mb-2 font-nunito leading-snug line-clamp-2">
            O ReelSorte reúne bónus, prazos de levantamento e experiência móvel num
            formato consistente — para decidir com menos confusão e mais clareza.
          </p>

          <div className="flex items-center gap-1.5 text-[11px] text-portal-white/55 font-nunito">
            <Calendar className="w-3.5 h-3.5 text-portal-yellow flex-shrink-0" />
            <span>Revisto em {REVIEW_DATE}</span>
          </div>
        </div>

        <div className="hidden lg:block h-full min-h-0 py-1">
          <CompareMarquee />
        </div>
      </div>
    </section>
  );
}

export default function PortalShowcase() {
  return (
    <Suspense fallback={<div className="h-[40vh] min-h-[280px] bg-portal-purple-dark" />}>
      <PortalShowcaseContent />
    </Suspense>
  );
}

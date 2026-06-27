"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { TOP_BRAND } from "@/data/siteContent";

interface BrandCardProps {
  rankIndex?: number;
  brandName?: string;
  logoUrl?: string;
  bonusLabel?: string;
  bonusText?: string;
  reviewCount?: number;
  displayScore?: string;
  minDeposit?: string;
  ctaLink?: string;
  ctaLabel?: string;
  visitLabel?: string;
  badge?: string;
  stars?: number;
}

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(count)].map((_, i) => (
        <Star key={i} className="w-4 h-4 text-portal-yellow fill-portal-yellow" />
      ))}
    </div>
  );
}

function resolveUrl(href: string, gclid: string | null) {
  let finalUrl = href.startsWith("http") ? href : "https://www.888casino.com/";
  if (gclid) finalUrl = `${finalUrl}${gclid}`;
  return finalUrl;
}

function BrandCardContent({
  brandName = TOP_BRAND.name,
  logoUrl = TOP_BRAND.logoUrl,
  bonusLabel = TOP_BRAND.bonusLabel,
  bonusText = TOP_BRAND.bonusText,
  reviewCount = TOP_BRAND.reviewCount,
  displayScore = TOP_BRAND.displayScore,
  minDeposit = TOP_BRAND.minDeposit,
  ctaLink = TOP_BRAND.ctaUrl,
  ctaLabel = TOP_BRAND.ctaLabel,
  visitLabel = TOP_BRAND.visitLabel,
  badge = TOP_BRAND.badge,
  stars = TOP_BRAND.stars,
}: BrandCardProps) {
  const formattedReviews = reviewCount.toLocaleString("pt-PT");

  return (
    <article className="w-full rounded-2xl border border-portal-purple/60 bg-card-bg overflow-hidden shadow-[0_8px_32px_rgba(75,0,130,0.25)]">
      {/* Desktop — horizontal layout matching reviaportugal */}
      <div className="hidden lg:grid lg:grid-cols-[140px_1fr_220px_200px] lg:items-center lg:gap-6 lg:px-6 lg:py-5">
        {/* Logo column */}
        <div className="flex flex-col items-center gap-3 py-2">
          <span className="inline-flex items-center gap-1 rounded border border-portal-purple-light/50 bg-portal-purple-dark/80 px-2 py-0.5 text-[10px] font-rubik font-bold uppercase tracking-wider text-portal-yellow">
            <Star className="w-2.5 h-2.5 fill-portal-yellow text-portal-yellow" />
            {badge}
          </span>
          <div className="relative w-[120px] h-[52px]">
            <Image
              src={logoUrl}
              alt={`${brandName} — casino online licenciado Portugal`}
              fill
              className="object-contain object-center"
            />
          </div>
        </div>

        {/* Bonus column */}
        <div className="py-2 border-l border-portal-purple/30 pl-6">
          <p className="text-[11px] font-rubik font-bold uppercase tracking-widest text-portal-yellow mb-1.5">
            {bonusLabel}
          </p>
          <p className="font-nunito text-sm text-portal-white/85 leading-snug max-w-md">{bonusText}</p>
        </div>

        {/* Rating column */}
        <div className="py-2 border-l border-portal-purple/30 pl-6">
          <p className="font-nunito text-sm text-portal-white mb-2">
            Avaliação ({formattedReviews})
          </p>
          <span className="font-rubik text-[2.25rem] font-bold text-portal-yellow leading-none">
                {displayScore}
              </span>
          <StarRow count={stars} />
        </div>

        {/* Score + CTA column */}
        <div className="py-2 border-l border-portal-purple/30 pl-6 flex flex-col items-stretch justify-center gap-2 min-h-[120px]">
          <div className="flex items-center gap-3">
            <span className="brand-card-gradient-btn flex-1 text-center font-rubik font-bold text-xs uppercase tracking-wide text-portal-purple-dark py-3.5 px-3 rounded-xl transition-all group-hover:brightness-110">
              {ctaLabel}
            </span>
          </div>
          <p className="font-nunito text-[11px] text-portal-gray text-center">
            Depósito mín. — {minDeposit}
          </p>
        </div>
      </div>

      {/* Mobile — stacked layout */}
      <div className="lg:hidden p-4 space-y-4">
        <div className="flex items-start justify-between gap-3">
          <span className="inline-flex items-center gap-1 rounded border border-portal-purple-light/50 bg-portal-purple-dark/80 px-2 py-0.5 text-[10px] font-rubik font-bold uppercase tracking-wider text-portal-yellow">
            <Star className="w-2.5 h-2.5 fill-portal-yellow text-portal-yellow" />
            {badge}
          </span>
          <span className="font-rubik text-3xl font-bold text-portal-yellow">{displayScore}</span>
        </div>

        <p className="hidden md:block text-[11px] font-rubik font-bold uppercase tracking-widest text-portal-yellow">
          {bonusLabel}
        </p>

        <div className="relative w-[140px] h-[56px] mx-auto">
          <Image
            src={logoUrl}
            alt={`${brandName} — casino online licenciado Portugal`}
            fill
            className="object-contain object-center"
          />
        </div>

        <h3 className="hidden md:block font-rubik text-xl font-bold text-portal-white">{brandName}</h3>
        <p className="font-nunito text-sm text-portal-white/85 leading-relaxed">{bonusText}</p>

        <div>
        <div className="hidden md:flex flex-col  items-center gap-1">
        <p className="font-nunito text-sm text-portal-white mb-1.5">
            Avaliação ({formattedReviews})
          </p>
          <StarRow count={stars} />
        </div>
          <p className="hidden md:block font-nunito text-[11px] text-portal-gray mt-2">
            Classificação com base em revisão editorial e feedback de utilizadores.
          </p>
        </div>

        <div className="space-y-2 pt-1">
          <div className="brand-card-gradient-btn w-full text-center font-rubik font-bold text-sm uppercase tracking-wide text-portal-purple-dark py-3.5 px-6 rounded-xl transition-all">
            {ctaLabel}
          </div>
          <p className="font-nunito text-[11px] text-portal-gray text-center">
            Depósito mín. — {minDeposit}
          </p>
          <p className="hidden md:block font-nunito text-xs text-portal-yellow-light text-center underline underline-offset-2">
            {visitLabel}
          </p>
        </div>
      </div>

      {/* Footer disclaimer */}
      <div className="hidden md:block border-t border-portal-purple/40 px-4 py-2.5 lg:px-6 bg-portal-purple-dark/40">
        <p className="font-nunito text-[10px] lg:text-[11px] text-portal-gray text-center leading-relaxed">
          18+ apenas. Requisitos de aposta e T&amp;C aplicam-se. Jogue com responsabilidade.
        </p>
      </div>
    </article>
  );
}

function BrandCardWrapper(props: BrandCardProps) {
  const searchParams = useSearchParams();
  const gclid = searchParams.get("gclid");
  const finalUrl = resolveUrl(props.ctaLink ?? TOP_BRAND.ctaUrl, gclid);

  return (
    <a
      href={finalUrl}
      className="block group transition-transform hover:scale-[1.005]"
      aria-label={`Ver oferta ${props.brandName ?? TOP_BRAND.name}`}
    >
      <BrandCardContent {...props} />
    </a>
  );
}

export default function ReelSorteFunPanel(props: BrandCardProps) {
  return (
    <Suspense
      fallback={
        <div className="w-full rounded-2xl border border-portal-purple/40 bg-card-bg min-h-[180px] flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-2 border-portal-yellow border-t-transparent animate-spin" />
        </div>
      }
    >
      <BrandCardWrapper {...props} />
    </Suspense>
  );
}

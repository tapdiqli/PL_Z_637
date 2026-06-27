import { Shield, Smartphone, Sparkles } from "lucide-react";
import { COMPARE_POINTS } from "@/data/siteContent";

const iconMap = {
  shield: Shield,
  sparkles: Sparkles,
  mobile: Smartphone,
};

function CompareCard({
  label,
  desc,
  icon,
}: {
  label: string;
  desc: string;
  icon: keyof typeof iconMap;
}) {
  const Icon = iconMap[icon];

  return (
    <article className="flex items-center gap-3 rounded-lg border border-portal-purple-light/25 bg-portal-purple/30 backdrop-blur-sm px-3 py-2.5">
      <div className="w-8 h-8 rounded-md bg-portal-yellow/15 border border-portal-yellow/20 flex items-center justify-center flex-shrink-0">
        <Icon className="w-3.5 h-3.5 text-portal-yellow" aria-hidden="true" />
      </div>
      <div className="min-w-0">
        <p className="font-rubik font-bold text-portal-white text-sm leading-tight">{label}</p>
        <p className="font-nunito text-[11px] text-portal-white/55 truncate">{desc}</p>
      </div>
    </article>
  );
}

export default function CompareMarquee() {
  const loopItems = [...COMPARE_POINTS, ...COMPARE_POINTS];

  return (
    <div className="rounded-xl border border-portal-purple-light/25 bg-portal-purple/20 backdrop-blur-md p-3 h-full flex flex-col min-h-0">
      <p className="text-[10px] font-rubik font-bold uppercase tracking-widest text-portal-yellow mb-2 flex-shrink-0">
        What we compare
      </p>

      <div className="relative flex-1 min-h-0 overflow-hidden mask-fade-y">
        <div className="compare-marquee-track flex flex-col gap-2">
          {loopItems.map((item, idx) => (
            <CompareCard key={`${item.label}-${idx}`} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

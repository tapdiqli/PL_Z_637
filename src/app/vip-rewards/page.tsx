import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PageHeader } from "@/components/PageHeader";
import { VIPRewards } from "@/components/sections/VIPRewards";
import { Award, Gift, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Recompensas VIP | Avaliações Casino — ReelSorte",
  description:
    "Leia avaliações reais de jogadores VIP e descubra as recompensas exclusivas dos melhores casinos online em Portugal recomendados pelo ReelSorte.",
};

const rewardTiers = [
  { icon: Star, tier: "Platina", perks: "Cashback semanal de 10%, gestor de conta dedicado, levantamentos em 24h" },
  { icon: Award, tier: "Diamante", perks: "Cashback de 15%, mesas privadas, convites para eventos VIP globais" },
  { icon: Gift, tier: "Elite", perks: "Bónus personalizados ilimitados, limites máximos, concierge lifestyle 24/7" },
];

export default function VIPRewardsPage() {
  return (
    <PageShell>
      <PageHeader
        highlight="Recompensas VIP"
        title="— Avaliações e Recompensas"
        description="Opiniões reais de membros que encontraram os melhores casinos online em Portugal através do ReelSorte."
      />

      <section className="mb-16">
        <h2 className="font-rubik text-2xl font-bold text-portal-purple-dark mb-8">
          Níveis de <span className="text-portal-purple">Recompensa VIP</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {rewardTiers.map(({ icon: Icon, tier, perks }) => (
            <article key={tier} className="bg-portal-white border border-portal-purple-light/10 rounded-2xl p-8 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-portal-yellow/20 flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-portal-purple" />
              </div>
              <h3 className="font-rubik text-xl font-bold text-portal-purple-dark mb-3">{tier}</h3>
              <p className="text-portal-gray font-nunito text-sm leading-relaxed">{perks}</p>
            </article>
          ))}
        </div>
      </section>

      <VIPRewards />

      <div className="mt-12">
        <Link href="/" className="text-portal-purple font-rubik font-bold hover:underline text-sm">
          ← Voltar à página inicial
        </Link>
      </div>
    </PageShell>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PageHeader } from "@/components/PageHeader";
import { ExclusiveBenefits } from "@/components/sections/ExclusiveBenefits";

export const metadata: Metadata = {
  title: "Vantagens Exclusivas | Casinos VIP Online — ReelSorte",
  description:
    "Conheça as vantagens exclusivas dos casinos VIP online em Portugal: concierge 24/7, bónus personalizados, levantamentos prioritários e torneios privados.",
};

export default function ExclusiveBenefitsPage() {
  return (
    <PageShell>
      <PageHeader
        highlight="Vantagens Exclusivas"
        title="— Casinos VIP Online"
        description="Jogar num casino online premium em Portugal significa aceder a bónus personalizados, limites elevados, slots exclusivas e um serviço de apoio dedicado a jogadores exigentes."
      />

      <ExclusiveBenefits />

      <section className="mt-16 max-w-3xl space-y-6 text-portal-gray font-nunito leading-relaxed">
        <h2 className="font-rubik text-2xl font-bold text-portal-purple-dark">
          Porque Escolher um <span className="text-portal-purple">Casino VIP</span>?
        </h2>
        <p>
          Os casinos online standard oferecem bónus genéricos e filas de apoio partilhadas.
          Os nossos parceiros VIP proporcionam uma experiência completamente diferente:
          gestor de conta pessoal, limites de mesa elevados, cashback calibrado ao seu
          perfil e acesso a torneios privados de slots e poker com prémios exclusivos.
        </p>
        <h2 className="font-rubik text-2xl font-bold text-portal-purple-dark pt-4">
          Bónus e <span className="text-portal-purple">Recompensas de Fidelidade</span>
        </h2>
        <p>
          Além do bónus de boas-vindas, membros VIP acumulam pontos de fidelidade
          convertíveis em cashback, rodadas grátis em slots premium ou convites para
          eventos presenciais.
        </p>
      </section>

      <div className="mt-12">
        <Link href="/" className="text-portal-purple font-rubik font-bold hover:underline text-sm">
          ← Voltar à página inicial
        </Link>
      </div>
    </PageShell>
  );
}

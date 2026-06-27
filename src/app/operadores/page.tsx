import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PageHeader } from "@/components/PageHeader";
import { EliteCollection } from "@/components/sections/EliteCollection";

export const metadata: Metadata = {
  title: "Operadores | Casinos Online Licenciados Portugal — ReelSorte",
  description:
    "Compare operadores de casino online licenciados em Portugal. Fichas editoriais com bónus, pontuação e condições transparentes.",
};

export default function OperadoresPage() {
  return (
    <PageShell>
      <PageHeader
        highlight="Operadores"
        title="— em destaque"
        description="Ordem editorial baseada no interesse dos leitores e na actualização das fichas — não constitui classificação oficial da SRIJ."
      />

      <EliteCollection />

      <p className="font-nunito text-xs text-portal-gray mt-4 text-center">
        Não oferecemos serviços de jogo. Ofertas sujeitas a T&amp;C. 18+.
      </p>

      <section className="mt-16 max-w-3xl space-y-6 text-portal-gray font-nunito leading-relaxed">
        <h2 className="font-rubik text-2xl font-bold text-portal-purple-dark">
          Como interpretar as <span className="text-portal-purple">fichas</span>
        </h2>
        <p>
          Cada ficha resume bónus de boas-vindas, pontuação editorial, avaliações de
          leitores e condições essenciais num formato uniforme. A pontuação reflecte a
          nossa análise independente — licenciamento, transparência de termos, experiência
          móvel e qualidade do apoio ao cliente.
        </p>
        <p>
          Ao clicar num operador, será redireccionado para o site oficial do parceiro.
          O registo, depósitos e levantamentos são geridos exclusivamente pelo operador
          licenciado, não pelo ReelSorte.
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

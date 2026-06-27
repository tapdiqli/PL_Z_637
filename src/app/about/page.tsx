import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Sobre Nós | ReelSorte — Guia de Casinos Online Portugal",
  description:
    "Conheça o ReelSorte: directório independente de casinos online em Portugal. A nossa missão, metodologia de análise e compromisso com jogadores VIP.",
};

export default function AboutPage() {
  return (
    <PageShell>
      <PageHeader
        highlight="Sobre Nós"
        title="— ReelSorte"
        description="O ReelSorte é um guia independente dedicado a ajudar jogadores em Portugal a encontrar os melhores casinos online licenciados, com bónus exclusivos e total transparência."
      />

      <div className="max-w-3xl space-y-8 text-portal-gray font-nunito leading-relaxed">
        <section>
          <h2 className="font-rubik text-2xl font-bold text-portal-purple-dark mb-4">
            A Nossa <span className="text-portal-purple">Missão</span>
          </h2>
          <p>
            O ReelSorte nasceu da necessidade de um guia fiável e independente para
            jogadores portugueses que procuram casinos online de qualidade premium.
            Não operamos jogos a dinheiro real — analisamos, comparamos e recomendamos
            operadores licenciados que cumprem os mais elevados padrões de segurança,
            justiça e experiência VIP.
          </p>
        </section>

        <section>
          <h2 className="font-rubik text-2xl font-bold text-portal-purple-dark mb-4">
            Como <span className="text-portal-purple">Analisamos</span> Casinos Online
          </h2>
          <p>
            Cada casino incluído na nossa selecção elite passa por uma avaliação rigorosa
            com mais de 100 critérios: licenciamento válido, velocidade de levantamentos,
            auditoria RNG independente, qualidade de bónus, variedade de slots e jogos ao
            vivo, e qualidade do apoio VIP.
          </p>
          <p className="mt-4">
            A nossa equipa testa cada operador com contas reais durante semanas antes de
            emitir qualquer recomendação. Apenas casinos no top 1% entram na Coleção Elite.
          </p>
        </section>

        <section>
          <h2 className="font-rubik text-2xl font-bold text-portal-purple-dark mb-4">
            Independência e <span className="text-portal-purple">Transparência</span>
          </h2>
          <p>
            O ReelSorte é um serviço de informação independente. Podemos receber comissões
            de afiliados quando os utilizadores se registam através dos nossos links, mas
            isto nunca influencia as nossas classificações ou análises editoriais.
          </p>
        </section>

        <section>
          <h2 className="font-rubik text-2xl font-bold text-portal-purple-dark mb-4">
            Jogo <span className="text-portal-purple">Responsável</span>
          </h2>
          <p>
            Promovemos o jogo responsável em todas as nossas páginas. Recomendamos que todos
            os jogadores definam limites e procurem apoio em{" "}
            <Link href="https://www.jogoresponsavel.pt/" target="_blank" rel="noopener noreferrer" className="text-portal-purple hover:underline">
              JogoResponsavel.pt
            </Link>{" "}
            se necessário. Proibido a menores de 18 anos.
          </p>
        </section>
      </div>

      <div className="mt-12">
        <Link href="/" className="text-portal-purple font-rubik font-bold hover:underline text-sm">
          ← Voltar à página inicial
        </Link>
      </div>
    </PageShell>
  );
}

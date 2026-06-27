import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Termos e Condições | ReelSorte",
  description: "Termos e condições de utilização do ReelSorte — guia de casinos online em Portugal.",
};

export default function TermsPage() {
  return (
    <PageShell>
      <PageHeader
        highlight="Termos e Condições"
        title="— ReelSorte"
        description="Ao utilizar o ReelSorte, concorda com os seguintes termos de utilização do nosso serviço informativo sobre casinos online em Portugal."
      />

      <div className="max-w-3xl space-y-8 text-portal-gray font-nunito leading-relaxed">
        <section>
          <h2 className="font-rubik text-2xl font-bold text-portal-purple-dark mb-4">Natureza do Serviço</h2>
          <p>
            O ReelSorte é um directório informativo e comparativo de casinos online licenciados.
            Não operamos jogos a dinheiro real nem processamos pagamentos de jogadores.
          </p>
        </section>
        <section>
          <h2 className="font-rubik text-2xl font-bold text-portal-purple-dark mb-4">Idade Mínima</h2>
          <p>
            O acesso ao ReelSorte e aos casinos recomendados é exclusivo para maiores de 18 anos.
            É responsabilidade do utilizador cumprir a legislação aplicável em Portugal.
          </p>
        </section>
        <section>
          <h2 className="font-rubik text-2xl font-bold text-portal-purple-dark mb-4">Links de Afiliados</h2>
          <p>
            Podemos receber comissões quando se regista num casino parceiro através dos nossos links.
            Isto não afecta a independência das nossas análises editoriais.
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

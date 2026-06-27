import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PageHeader } from "@/components/PageHeader";
import { SecurityContent } from "@/components/sections/SecurityContent";
import { ResponsibleGambling } from "@/components/sections/ResponsibleGambling";

export const metadata: Metadata = {
  title: "Segurança | Casino Online Portugal — ReelSorte",
  description:
    "Saiba como o ReelSorte garante segurança nos casinos online: encriptação AES-256, licenciamento verificado, RGPD e ferramentas de jogo responsável.",
};

export default function SecurityPage() {
  return (
    <PageShell>
      <PageHeader
        highlight="Segurança"
        title="— Protecção e Jogo Responsável"
        description="A segurança é a base de cada casino online recomendado pelo ReelSorte. Analisamos encriptação, licenciamento, pagamentos e ferramentas de jogo responsável em Portugal."
      />

      <SecurityContent />

      <section className="mt-16 max-w-3xl space-y-6 text-portal-gray font-nunito leading-relaxed">
        <h2 className="font-rubik text-2xl font-bold text-portal-purple-dark">
          O Nosso Processo de <span className="text-portal-purple">Auditoria de Segurança</span>
        </h2>
        <p>
          Antes de qualquer casino online entrar no ReelSorte, passa por uma auditoria de
          segurança em três fases: verificação documental de licenças, testes técnicos de
          encriptação SSL/TLS e avaliação prática de tempos de levantamento com contas reais.
        </p>
      </section>

      <section className="mt-20">
        <ResponsibleGambling />
      </section>

      <div className="mt-12">
        <Link href="/" className="text-portal-purple font-rubik font-bold hover:underline text-sm">
          ← Voltar à página inicial
        </Link>
      </div>
    </PageShell>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { EliteCollection } from "@/components/sections/EliteCollection";

export const metadata: Metadata = {
  title: "Coleção Elite | Melhores Casinos Online Portugal — ReelSorte",
  description:
    "Descubra a nossa selecção elite de casinos online em Portugal. Bónus exclusivos, slots premium, jogos ao vivo e levantamentos rápidos verificados.",
};

export default function EliteCollectionPage() {
  return (
    <PageShell>
      <EliteCollection />
      <div className="mt-12">
        <Link href="/" className="text-portal-purple font-rubik font-bold hover:underline text-sm">
          ← Voltar à página inicial
        </Link>
      </div>
    </PageShell>
  );
}

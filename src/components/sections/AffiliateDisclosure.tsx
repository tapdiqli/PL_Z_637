import Link from "next/link";
import { FileText, HandCoins, Info, ShieldCheck } from "lucide-react";

const points = [
  {
    icon: Info,
    title: "Site informativo — não operador de jogo",
    desc: "O ReelSorte não aceita apostas, não gere contas de jogador e não processa depósitos ou levantamentos. Publicamos comparações editoriais de operadores licenciados em Portugal.",
  },
  {
    icon: HandCoins,
    title: "Divulgação de afiliados",
    desc: "Alguns links para casinos parceiros são links de afiliado. Podemos receber comissão se se registar através deles, sem custo adicional para si. Isto não altera a ordem editorial das nossas fichas.",
  },
  {
    icon: ShieldCheck,
    title: "Critérios editoriais independentes",
    desc: "As nossas avaliações baseiam-se em licenciamento, transparência de bónus, segurança e experiência do utilizador — não em acordos comerciais com operadores.",
  },
  {
    icon: FileText,
    title: "Termos sempre aplicáveis",
    desc: "Todas as promoções listadas estão sujeitas aos termos e condições do operador, incluindo requisitos de aposta, limites de idade e elegibilidade geográfica.",
  },
];

export function AffiliateDisclosure() {
  return (
    <section id="transparencia" className="scroll-mt-24" aria-labelledby="transparencia-heading">
      <header className="mb-8 max-w-2xl">
        <p className="text-xs font-rubik font-bold uppercase tracking-widest text-portal-purple mb-2">
          Transparência
        </p>
        <h2
          id="transparencia-heading"
          className="font-rubik text-3xl md:text-4xl font-extrabold text-portal-purple-dark mb-4"
        >
          Informação importante para leitores
        </h2>
        <p className="font-nunito text-portal-gray text-lg leading-relaxed">
          Acreditamos que a confiança começa com clareza. Leia como o ReelSorte funciona,
          como nos financiamos e quais as suas responsabilidades como jogador em Portugal.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {points.map(({ icon: Icon, title, desc }) => (
          <article
            key={title}
            className="bg-portal-white border border-portal-purple-light/10 rounded-2xl p-6 shadow-sm"
          >
            <div className="w-10 h-10 rounded-lg bg-portal-purple/10 flex items-center justify-center mb-4">
              <Icon className="w-5 h-5 text-portal-purple" aria-hidden="true" />
            </div>
            <h3 className="font-rubik text-lg font-bold text-portal-purple-dark mb-2">{title}</h3>
            <p className="font-nunito text-sm text-portal-gray leading-relaxed">{desc}</p>
          </article>
        ))}
      </div>

      <p className="font-nunito text-xs text-portal-gray mt-6 leading-relaxed">
        Ao utilizar este site, confirma que tem 18 anos ou mais e que compreende que o
        ReelSorte é um serviço editorial. Consulte os nossos{" "}
        <Link href="/terms" className="text-portal-purple hover:underline">
          Termos e Condições
        </Link>{" "}
        e a{" "}
        <Link href="/privacy" className="text-portal-purple hover:underline">
          Política de Privacidade
        </Link>
        .
      </p>
    </section>
  );
}

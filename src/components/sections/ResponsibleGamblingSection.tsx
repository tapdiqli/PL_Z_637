import Link from "next/link";
import { AlertTriangle, ExternalLink, HeartHandshake, Phone } from "lucide-react";
import { ResponsibleGambling } from "./ResponsibleGambling";

const helpResources = [
  {
    name: "JogoResponsavel.pt",
    href: "https://www.jogoresponsavel.pt/",
    desc: "Informação e apoio ao jogo responsável em Portugal.",
  },
  {
    name: "SICAD",
    href: "https://www.icad.pt/",
    desc: "Serviço de Intervenção nos Comportamentos Aditivos.",
  },
  {
    name: "BeGambleAware",
    href: "https://www.begambleaware.org/",
    desc: "Recursos internacionais sobre jogo problemático.",
  },
  {
    name: "GamCare",
    href: "https://www.gamcare.org.uk/",
    desc: "Apoio confidencial e aconselhamento gratuito.",
  },
];

export function ResponsibleGamblingSection() {
  return (
    <section id="responsible-gambling" className="scroll-mt-24" aria-labelledby="rg-heading">
      <header className="mb-8 max-w-2xl">
        <p className="text-xs font-rubik font-bold uppercase tracking-widest text-portal-purple mb-2">
          Jogo responsável
        </p>
        <h2
          id="rg-heading"
          className="font-rubik text-3xl md:text-4xl font-extrabold text-portal-purple-dark mb-4"
        >
          Jogue com moderação e dentro dos seus limites
        </h2>
        <p className="font-nunito text-portal-gray text-lg leading-relaxed">
          O jogo online deve ser entretenimento — nunca uma solução para problemas
          financeiros. Se sentir que perdeu o controlo, procure ajuda imediatamente.
        </p>
      </header>

      <div className="mb-8 flex items-start gap-4 rounded-2xl border border-red-200 bg-red-50 p-5 md:p-6">
        <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
        <div>
          <p className="font-rubik font-bold text-red-900 mb-1">Aviso — 18+ apenas</p>
          <p className="font-nunito text-sm text-red-800 leading-relaxed">
            Proibido a menores de 18 anos. O jogo pode causar dependência. Estabeleça
            limites de tempo e dinheiro antes de jogar e nunca tente recuperar perdas
            com apostas adicionais.
          </p>
        </div>
      </div>

      <ResponsibleGambling />

      <div className="mt-10">
        <h3 className="font-rubik text-xl font-bold text-portal-purple-dark mb-5 flex items-center gap-2">
          <HeartHandshake className="w-5 h-5 text-portal-purple" aria-hidden="true" />
          Recursos de apoio
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {helpResources.map((resource) => (
            <Link
              key={resource.name}
              href={resource.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3 bg-portal-white border border-portal-purple-light/10 rounded-xl p-4 hover:border-portal-purple-light/30 transition-colors"
            >
              <Phone className="w-4 h-4 text-portal-purple mt-1 flex-shrink-0" aria-hidden="true" />
              <div className="min-w-0">
                <p className="font-rubik font-bold text-portal-purple-dark text-sm flex items-center gap-1">
                  {resource.name}
                  <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100" />
                </p>
                <p className="font-nunito text-xs text-portal-gray mt-0.5">{resource.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

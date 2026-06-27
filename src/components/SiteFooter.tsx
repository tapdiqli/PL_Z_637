import Link from "next/link";
import Image from "next/image";
import { AlertTriangle } from "lucide-react";

const regulatorySigns = [
  {
    href: "https://www.srij.turismodeportugal.pt/",
    src: "/signs/srij.png",
    alt: "SRIJ — Serviço de Regulação e Inspeção de Jogos",
    width: 130,
    height: 108,
    className: "h-14 md:h-16 w-auto",
  },
  {
    href: "https://www.gbga.gi/",
    src: "/signs/gbga.png",
    alt: "GBGA — Gibraltar Betting and Gaming Association",
    width: 80,
    height: 30,
    className: "h-[30px] w-auto",
  },
  {
    href: "https://www.begambleaware.org/",
    src: "/signs/begambleaware.png",
    alt: "BeGambleAware.org",
    width: 142,
    height: 20,
    className: "h-5 w-auto",
  },
  {
    href: "https://www.gamcare.org.uk/",
    src: "/signs/gamcare.png",
    alt: "GamCare",
    width: 104,
    height: 30,
    className: "h-[30px] w-auto",
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-portal-purple-dark text-portal-white/70 py-16 mt-24 border-t-8 border-portal-yellow w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex mb-8">
          <div className="w-16 h-16 border-2 border-red-500 rounded-full flex items-center justify-center">
            <span className="text-red-400 font-rubik font-bold text-2xl">18+</span>
          </div>
        </div>

        <Link href="/" className="inline-block mb-6">
          <Image
            src="/logo.png"
            alt="ReelSorte"
            width={280}
            height={57}
            className="h-12 md:h-14 w-auto"
          />
        </Link>

        <p className="text-portal-white/60 text-sm max-w-3xl mb-10 leading-relaxed font-nunito">
          O ReelSorte é um directório independente de casinos online em Portugal,
          livre de qualquer controlo de operadores de jogo. Fornecemos análises e
          comparações especializadas de destinos premium de casino online. Não operamos
          serviços de jogo a dinheiro real. É responsabilidade do jogador cumprir todos
          os requisitos de idade e regulamentação antes de se registar num casino online
          e efectuar apostas. O jogo pode causar dependência. Jogue com responsabilidade.
        </p>

        <nav className="flex flex-wrap gap-x-8 gap-y-4 text-sm font-rubik font-bold uppercase tracking-wider text-portal-white/80" aria-label="Links legais">
          <Link href="/about" className="hover:text-portal-yellow transition-colors">Sobre Nós</Link>
          <Link href="/terms" className="hover:text-portal-yellow transition-colors">Termos e Condições</Link>
          <Link href="/privacy" className="hover:text-portal-yellow transition-colors">Política de Privacidade</Link>
          <Link href="/cookie-policy" className="hover:text-portal-yellow transition-colors">Política de Cookies</Link>
          <Link href="/security" className="hover:text-portal-yellow transition-colors">Segurança</Link>
          <Link href="/contact" className="hover:text-portal-yellow transition-colors">Contacto</Link>
          <Link href="/#responsible-gambling" className="hover:text-portal-yellow transition-colors">Jogo Responsável</Link>
        </nav>

        <div className="mt-10 pt-8 border-t border-portal-white/10">
          <div className="flex flex-wrap items-center gap-8 md:gap-10">
            {regulatorySigns.map((sign) => (
              <Link
                key={sign.src}
                href={sign.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center hover:opacity-90 transition-opacity"
              >
                <Image
                  src={sign.src}
                  alt={sign.alt}
                  width={sign.width}
                  height={sign.height}
                  quality={100}
                  unoptimized
                  className={`object-contain ${sign.className}`}
                />
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 p-4 bg-portal-purple rounded-xl border border-portal-white/10 max-w-lg">
          <p className="text-sm font-rubik font-bold text-portal-white flex items-center gap-2">
            <AlertTriangle size={18} className="text-portal-yellow" />
            18+ APENAS. JOGUE COM RESPONSABILIDADE.
          </p>
          <p className="text-xs mt-2 text-portal-white/60 font-nunito">
            O jogo pode causar dependência. Visite JogoResponsavel.pt se precisar de ajuda.
          </p>
        </div>

        <div className="mt-12 text-xs font-nunito opacity-40">
          &copy; {new Date().getFullYear()} ReelSorte. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}

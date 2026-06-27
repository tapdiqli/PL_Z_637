import { Star } from "lucide-react";

const reviews = [
  {
    name: "António M.",
    status: "Membro Platina desde 2022",
    quote:
      "A atenção personalizada é incomparável. O meu gestor de conta preparou uma mesa privada de baccarat numa hora. Os levantamentos rápidos fazem toda a diferença num casino online de confiança.",
    rating: 5,
  },
  {
    name: "Sofia L.",
    status: "Membro Diamante desde 2023",
    quote:
      "Já joguei em casinos premium em todo o mundo. A seleção ReelSorte oferece segurança, variedade de slots e luxo discreto que não encontrei noutro guia de casinos online em Portugal.",
    rating: 5,
  },
  {
    name: "João R.",
    status: "Membro Elite desde 2021",
    quote:
      "Os bónus personalizados mudaram a minha experiência. Em vez de promoções genéricas, recebo cashback adaptado ao meu estilo — principalmente roleta ao vivo e slots de alta volatilidade.",
    rating: 5,
  },
  {
    name: "Helena V.",
    status: "Membro Platina desde 2023",
    quote:
      "Total tranquilidade. Saber que estes casinos online foram analisados quanto à justiça dos jogos e solidez financeira permite-me focar-me apenas no entretenimento. O apoio VIP é excelente.",
    rating: 5,
  },
];

export function VIPRewards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {reviews.map((review, idx) => (
        <article
          key={idx}
          className="bg-portal-white border border-portal-purple-light/10 rounded-2xl p-8 relative overflow-hidden shadow-sm"
        >
          <div className="absolute top-0 right-0 p-6 opacity-10">
            <Star className="w-24 h-24 text-portal-yellow" aria-hidden="true" />
          </div>
          <div className="flex gap-1 mb-6" aria-label={`${review.rating} estrelas`}>
            {[...Array(review.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-portal-yellow fill-current" />
            ))}
          </div>
          <blockquote className="text-portal-gray font-nunito italic mb-8 relative z-10 leading-relaxed text-lg">
            &ldquo;{review.quote}&rdquo;
          </blockquote>
          <footer className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-portal-yellow/20 flex items-center justify-center border border-portal-yellow/30">
              <span className="font-rubik font-bold text-portal-purple">{review.name.charAt(0)}</span>
            </div>
            <div>
              <cite className="font-rubik font-bold text-portal-purple-dark not-italic">
                {review.name}
              </cite>
              <div className="text-xs text-portal-purple/80 uppercase tracking-wider font-nunito">
                {review.status}
              </div>
            </div>
          </footer>
        </article>
      ))}
    </div>
  );
}

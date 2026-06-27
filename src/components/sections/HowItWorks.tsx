export function HowItWorks() {
  return (
    <div className="bg-portal-white rounded-3xl p-8 md:p-16 border border-portal-purple-light/10 shadow-lg">
      <header className="text-left mb-16 max-w-3xl">
        <h2 className="font-rubik text-3xl md:text-4xl font-extrabold mb-4 text-portal-purple-dark">
          <span className="text-portal-purple">Como Escolher</span> o Melhor Casino Online
        </h2>
        <p className="text-portal-gray font-nunito text-lg">
          Três passos simples para começar a jogar nos melhores casinos online em
          Portugal com bónus exclusivos ReelSorte.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
        <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-transparent via-portal-yellow/40 to-transparent" />

        {[
          {
            step: "01",
            title: "Escolha e Registe-se",
            desc: "Consulte a nossa lista de casinos online licenciados. Clique para reclamar o bónus exclusivo e garantir que recebe todas as vantagens VIP associadas.",
          },
          {
            step: "02",
            title: "Verificação Rápida",
            desc: "Complete o registo seguro no casino escolhido. Os nossos parceiros priorizam a verificação KYC para que possa jogar slots e jogos ao vivo sem demoras.",
          },
          {
            step: "03",
            title: "Jogue com Bónus VIP",
            desc: "Faça o primeiro depósito e desbloqueie bónus de casino, mesas de limites elevados e o seu gestor de conta dedicado para uma experiência premium.",
          },
        ].map((item, idx) => (
          <article key={idx} className="relative z-10 flex flex-col items-start text-left">
            <div className="w-24 h-24 rounded-full bg-portal-gray-light border-2 border-portal-yellow/50 flex items-center justify-center mb-6 shadow-md">
              <span className="font-rubik text-3xl font-bold text-portal-purple">{item.step}</span>
            </div>
            <h3 className="font-rubik text-2xl font-bold text-portal-purple-dark mb-4">
              {item.title}
            </h3>
            <p className="text-portal-gray font-nunito leading-relaxed">{item.desc}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

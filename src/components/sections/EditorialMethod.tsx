const steps = [
  {
    step: "01",
    title: "Fichas uniformes",
    desc: "Cada operador segue o mesmo modelo: bónus, pontuação, estrelas e botão de acção alinhados — para comparar sem distrações.",
  },
  {
    step: "02",
    title: "Afiliação transparente",
    desc: "Links patrocinados podem gerar comissão; explicamos critérios e limites da mesma forma em todas as fichas editoriais.",
  },
  {
    step: "03",
    title: "Verificação prática",
    desc: "Registo, catálogo de jogos e apoio ao cliente são testados antes de uma marca entrar na nossa lista.",
  },
  {
    step: "04",
    title: "Ofertas actualizadas",
    desc: "As promoções mudam — actualizamos as fichas quando o operador altera termos ou métodos de pagamento.",
  },
];

export function EditorialMethod() {
  return (
    <section id="metodo" className="scroll-mt-24">
      <header className="mb-10 max-w-2xl">
        <p className="text-xs font-rubik font-bold uppercase tracking-widest text-portal-purple mb-2">
          Método
        </p>
        <h2 className="font-rubik text-3xl md:text-4xl font-extrabold text-portal-purple-dark mb-4">
          Como avaliamos cada operador
        </h2>
        <p className="font-nunito text-portal-gray text-lg leading-relaxed">
          Valorizamos a utilidade do bónus, a clareza das regras e a experiência no
          telemóvel — não slogans genéricos ou promessas vagas.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {steps.map((item) => (
          <article
            key={item.step}
            className="bg-portal-white border border-portal-purple-light/10 rounded-2xl p-6 md:p-8 shadow-sm hover:border-portal-purple-light/25 transition-colors"
          >
            <span className="inline-block font-rubik text-sm font-bold text-portal-purple bg-portal-purple/10 px-3 py-1 rounded-full mb-4">
              {item.step}
            </span>
            <h3 className="font-rubik text-xl font-bold text-portal-purple-dark mb-3">
              {item.title}
            </h3>
            <p className="font-nunito text-portal-gray leading-relaxed">{item.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

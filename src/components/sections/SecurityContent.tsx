import { Shield, Lock, FileCheck, CreditCard, AlertTriangle, Clock, HeartHandshake } from "lucide-react";
import Link from "next/link";

const securityFeatures = [
  {
    icon: Lock,
    title: "Encriptação AES-256",
    desc: "Todos os casinos recomendados utilizam encriptação de nível militar para proteger dados pessoais, credenciais e transacções financeiras.",
  },
  {
    icon: FileCheck,
    title: "Licenciamento Verificado",
    desc: "Apenas operadores com licenças válidas emitidas por autoridades reguladoras reconhecidas são incluídos na nossa selecção elite.",
  },
  {
    icon: CreditCard,
    title: "Pagamentos Seguros",
    desc: "Métodos de depósito e levantamento auditados, com verificação de solidez financeira e histórico de pagamentos pontuais.",
  },
  {
    icon: Shield,
    title: "Conformidade RGPD",
    desc: "Protecção rigorosa de dados pessoais em conformidade com o Regulamento Geral de Protecção de Dados da União Europeia.",
  },
];

export function SecurityContent() {
  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {securityFeatures.map((item, idx) => {
          const Icon = item.icon;
          return (
            <article key={idx} className="bg-portal-white border border-portal-purple-light/10 p-8 rounded-2xl shadow-sm">
              <div className="w-14 h-14 rounded-full bg-portal-yellow/20 flex items-center justify-center mb-6">
                <Icon className="w-7 h-7 text-portal-purple" aria-hidden="true" />
              </div>
              <h2 className="font-rubik text-2xl font-bold text-portal-purple-dark mb-3">{item.title}</h2>
              <p className="text-portal-gray font-nunito leading-relaxed">{item.desc}</p>
            </article>
          );
        })}
      </div>

      <div className="bg-portal-white border-l-4 border-portal-yellow rounded-r-2xl p-8 md:p-12 border border-portal-purple-light/10 shadow-sm">
        <h2 className="font-rubik text-2xl font-bold text-portal-purple-dark mb-4">
          Compromisso com o <span className="text-portal-purple">Jogo Responsável</span>
        </h2>
        <p className="text-portal-gray font-nunito leading-relaxed mb-8">
          A segurança no casino online vai além da protecção de dados. Exigimos que todos
          os parceiros disponibilizem ferramentas robustas de jogo responsável para
          proteger os jogadores em Portugal.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex gap-3">
            <Clock className="w-6 h-6 text-portal-purple flex-shrink-0" aria-hidden="true" />
            <div>
              <h3 className="font-rubik font-bold text-portal-purple-dark mb-1">Limites de Jogo</h3>
              <p className="text-sm text-portal-gray font-nunito">Limites de depósito, perdas e tempo de sessão configuráveis.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <AlertTriangle className="w-6 h-6 text-portal-purple flex-shrink-0" aria-hidden="true" />
            <div>
              <h3 className="font-rubik font-bold text-portal-purple-dark mb-1">Alertas de Realidade</h3>
              <p className="text-sm text-portal-gray font-nunito">Notificações sobre duração da sessão e posição financeira.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Shield className="w-6 h-6 text-portal-purple flex-shrink-0" aria-hidden="true" />
            <div>
              <h3 className="font-rubik font-bold text-portal-purple-dark mb-1">Autoexclusão</h3>
              <p className="text-sm text-portal-gray font-nunito">Pausa imediata e autoexclusão por períodos predefinidos.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <HeartHandshake className="w-6 h-6 text-portal-purple flex-shrink-0" aria-hidden="true" />
            <div>
              <h3 className="font-rubik font-bold text-portal-purple-dark mb-1">Apoio Profissional</h3>
              <p className="text-sm text-portal-gray font-nunito">
                Acesso a{" "}
                <Link href="https://www.jogoresponsavel.pt/" target="_blank" rel="noopener noreferrer" className="text-portal-purple hover:underline">
                  JogoResponsavel.pt
                </Link>{" "}
                e{" "}
                <Link href="https://www.icad.pt/" target="_blank" rel="noopener noreferrer" className="text-portal-purple hover:underline">
                  SICAD
                </Link>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

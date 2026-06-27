import PortalShowcase from "@/components/PortalShowcase";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { EliteCollection } from "@/components/sections/EliteCollection";
import { EditorialMethod } from "@/components/sections/EditorialMethod";
import { AffiliateDisclosure } from "@/components/sections/AffiliateDisclosure";
import { PortugalGamblingGuide } from "@/components/sections/PortugalGamblingGuide";
import { ResponsibleGamblingSection } from "@/components/sections/ResponsibleGamblingSection";
import { HomeContact } from "@/components/sections/HomeContact";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-portal-gray-light">
      <SiteHeader />
      <PortalShowcase />

      <div className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 space-y-20">
        <section id="operadores" className="scroll-mt-24" aria-labelledby="operadores-heading">
          <EliteCollection />

          <p className="font-nunito text-xs text-portal-gray mt-4 text-center">
            Não oferecemos serviços de jogo. Ofertas sujeitas a T&amp;C. 18+.
          </p>
        </section>

        <EditorialMethod />
        <AffiliateDisclosure />
        <PortugalGamblingGuide />
        <ResponsibleGamblingSection />
        <HomeContact />
      </div>

      <SiteFooter />
    </main>
  );
}

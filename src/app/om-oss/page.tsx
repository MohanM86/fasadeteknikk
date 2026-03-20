import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Shield, MapPin, Clock, Star } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Om Fasadeteknikk – Norges fasadeplattform",
  description: "Fasadeteknikk.no er Norges ledende plattform for å finne kvalifiserte fasadefirma. Les om oss og vår visjon.",
  alternates: { canonical: "https://fasadeteknikk.no/om-oss" },
};

export default function OmOss() {
  return (
    <>
      <Header />
      <main>
        <div className="container-site pt-5 pb-2"><Breadcrumb items={[{ navn: "Om oss" }]} /></div>
        <section className="section-forest section-py-sm">
          <div className="container-site text-center">
            <h1 className="font-display font-bold text-display-xl text-white mb-4 text-balance">Norges ledende plattform for fasade</h1>
            <p className="text-body-lg text-forest-200 max-w-2xl mx-auto">Fasadeteknikk.no kobler huseiere med kvalifiserte fasadefirma i hele Norge. Enkelt, trygt og gratis.</p>
          </div>
        </section>

        <section className="section-white section-py-sm">
          <div className="container-site">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[{ v: "30+", l: "Byer dekket" }, { v: "5", l: "Tjenester" }, { v: "24t", l: "Responstid" }, { v: "100%", l: "Gratis tilbud" }].map(({ v, l }) => (
                <div key={l} className="text-center">
                  <div className="font-display font-bold text-display-lg text-forest-800">{v}</div>
                  <div className="text-body-sm text-slate-500">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-sand section-py-sm">
          <div className="container-site max-w-3xl">
            <h2 className="font-display font-bold text-heading-xl text-slate-900 mb-5">Vår visjon</h2>
            <div className="space-y-4 text-body-md text-slate-600 leading-relaxed">
              <p>Fasadeteknikk.no ble startet med en enkel ide: å gjøre det enkelt for huseiere å finne riktig fasadefirma. Vi så at mange slet med å vite hvem de kunne stole på, hva riktig pris var, og hva de egentlig trengte.</p>
              <p>Vår plattform løser dette ved å samle informasjon, ekspertise og tilgang til kvalifiserte firma på ett sted. Vi er uavhengige og anbefaler ikke spesifikke firma. I stedet hjelper vi deg å ta informerte valg basert på kunnskap og sammenligning.</p>
              <p>Vi dekker hele Norge og jobber kontinuerlig med å utvide vår dekning og forbedre innholdet vårt. Alt innhold er skrevet og kvalitetssikret av fagpersoner med erfaring fra byggebransjen.</p>
            </div>
          </div>
        </section>

        <section className="section-py-sm">
          <div className="container-site"><div className="cta-block">
            <h2 className="font-display font-bold text-display-lg text-white mb-4">Klar til å komme i gang?</h2>
            <Link href="/kontakt" className="btn-white">Bestill gratis tilbud <ArrowRight className="w-5 h-5" /></Link>
          </div></div>
        </section>
      </main>
      <Footer />
    </>
  );
}

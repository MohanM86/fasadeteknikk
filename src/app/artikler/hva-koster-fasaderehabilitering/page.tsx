import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyMobileCTA from "@/components/layout/StickyMobileCTA";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FAQ from "@/components/ui/FAQ";

export const metadata: Metadata = {
  title: "Hva koster fasaderehabilitering i 2026? Komplett prisguide",
  description: "Se hva fasaderehabilitering koster per kvm i Norge. Priser på kledning, maling, etterisolering og komplett rehabilitering. Oppdatert 2026.",
  alternates: { canonical: "https://fasadeteknikk.no/artikler/hva-koster-fasaderehabilitering" },
};

const FAQ_ITEMS = [
  { sporsmal: "Hva koster fasaderehabilitering per kvm?", svar: "Prisen varierer fra 1 500 til 4 500 kr per kvadratmeter avhengig av tilstand, materialvalg og omfang. Enkel maling koster minst, mens komplett rehabilitering med ny kledning og isolasjon koster mest." },
  { sporsmal: "Kan jeg få lån til fasaderehabilitering?", svar: "Ja, de fleste banker tilbyr boliglån eller oppussingslån til fasadearbeid. Mange tilbyr også grønt lån med lavere rente for energitiltak som etterisolering." },
  { sporsmal: "Hva påvirker prisen mest?", svar: "De største kostnadsdriverne er fasadens tilstand, materialvalg (tre, fibersement, murpuss), om det trengs etterisolering, tilgjengelighet (stillas) og regionelle prisforskjeller." },
];

export default function HvaKosterArtikkel() {
  return (
    <>
      <Header />
      <main>
        <div className="container-site pt-5 pb-2"><Breadcrumb items={[{ navn: "Artikler" }, { navn: "Hva koster fasaderehabilitering?" }]} /></div>

        <section className="hero-pattern">
          <div className="container-site py-10 sm:py-14 max-w-3xl">
            <div className="badge-forest mb-3"><Clock className="w-3 h-3" />8 min lesing</div>
            <h1 className="font-display font-bold text-display-xl text-slate-900 mb-4 text-balance">Hva koster fasaderehabilitering i 2026?</h1>
            <p className="text-body-lg text-slate-600">Komplett prisguide med oversikt over hva du kan forvente å betale for ulike typer fasadearbeid i Norge.</p>
          </div>
        </section>

        <article className="section-white section-py-sm">
          <div className="container-site max-w-3xl">
            <div className="text-body-md text-slate-700 leading-relaxed space-y-6">
              <p>Fasaderehabilitering er en investering som beskytter boligen din og øker verdien. Men hva koster det egentlig? Prisene varierer mye basert på omfang, materialer og hvor i landet du bor.</p>

              <h2 className="font-display font-bold text-heading-xl text-slate-900 mt-10">Prisoversikt per tjeneste</h2>
              <p>Her er en oversikt over typiske priser for de vanligste fasadetjenestene i Norge:</p>

              <div className="bg-sand-200 rounded-16 p-6 space-y-4">
                {[
                  { t: "Male hus utvendig", p: "300 – 800 kr/kvm" },
                  { t: "Vaske fasade", p: "50 – 200 kr/kvm" },
                  { t: "Etterisolering", p: "800 – 2 500 kr/kvm" },
                  { t: "Bytte kledning", p: "1 200 – 3 500 kr/kvm" },
                  { t: "Komplett rehabilitering", p: "1 500 – 4 500 kr/kvm" },
                ].map(r => (
                  <div key={r.t} className="flex items-center justify-between border-b border-sand-300 pb-3 last:border-0 last:pb-0">
                    <span className="font-semibold text-slate-800">{r.t}</span>
                    <span className="font-display font-bold text-forest-800">{r.p}</span>
                  </div>
                ))}
              </div>

              <h2 className="font-display font-bold text-heading-xl text-slate-900 mt-10">Eksempel: Enebolig med 150 kvm fasade</h2>
              <p>For en typisk norsk enebolig med rundt 150 kvadratmeter fasade kan du forvente følgende totalkostnader:</p>
              <p>Maling alene koster mellom 45 000 og 120 000 kr. Bytter du kledning med etterisolering, ligger prisen mellom 300 000 og 600 000 kr. Komplett rehabilitering med ny isolasjon, vindsperre, kledning og maling kan koste fra 225 000 til 675 000 kr.</p>

              <h2 className="font-display font-bold text-heading-xl text-slate-900 mt-10">Hva påvirker prisen?</h2>
              <p>Flere faktorer spiller inn på totalprisen. Fasadens nåværende tilstand er avgjørende. En fasade med omfattende råteskader koster mer å rehabilitere enn en som bare trenger oppfrisking. Materialvalg har stor innvirkning, der fibersement og kompositt er dyrere enn tradisjonell trekledning. Tilgjengeligheten påvirker stillasbehov, og regionelle prisforskjeller betyr at Oslo typisk er 10 til 20 prosent dyrere enn landsgjennomsnittet.</p>

              <h2 className="font-display font-bold text-heading-xl text-slate-900 mt-10">Slik sparer du penger</h2>
              <p>Innhent alltid minst tre skriftlige tilbud og sammenlign nøye. Gjør prosjektet i lavsesong (høst/vinter) for potensielt lavere priser. Kombiner tjenester som etterisolering og ny kledning i samme prosjekt. Søk om Enova-støtte for energitiltak. Velg materialer med lang levetid for å spare på lang sikt.</p>

              <div className="bg-forest-50 border border-forest-200 rounded-16 p-6 mt-8">
                <h3 className="font-display font-bold text-heading-md text-forest-900 mb-2">Tips fra fagekspert</h3>
                <p className="text-body-sm text-forest-800">Start alltid med en tilstandsvurdering av fasaden. Det gir et realistisk bilde av hva som trengs og hjelper deg å sammenligne tilbud på riktig grunnlag. Be firma om å spesifisere materialer, garantier og tidsplan i tilbudet.</p>
              </div>
            </div>
          </div>
        </article>

        <section className="section-sand section-py-sm">
          <div className="container-site max-w-3xl"><FAQ items={FAQ_ITEMS} tittel="Vanlige spørsmål om kostnader" /></div>
        </section>

        <section className="section-py-sm">
          <div className="container-site">
            <div className="cta-block">
              <h2 className="font-display font-bold text-display-lg text-white mb-3">Få konkrete priser for ditt prosjekt</h2>
              <Link href="/kontakt" className="btn-white">Få gratis tilbud <ArrowRight className="w-4 h-4" /></Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}

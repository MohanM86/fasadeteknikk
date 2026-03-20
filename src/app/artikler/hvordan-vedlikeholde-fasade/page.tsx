import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyMobileCTA from "@/components/layout/StickyMobileCTA";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Slik vedlikeholder du fasaden – Komplett guide",
  description: "Lær hvordan du vedlikeholder husets fasade for å forlenge levetiden. Tips for tre, mur og andre materialer.",
  alternates: { canonical: "https://fasadeteknikk.no/artikler/hvordan-vedlikeholde-fasade" },
};

export default function VedlikeholdArtikkel() {
  return (
    <>
      <Header />
      <main>
        <div className="container-site pt-5 pb-2"><Breadcrumb items={[{ navn: "Artikler" }, { navn: "Vedlikeholde fasade" }]} /></div>
        <section className="hero-pattern">
          <div className="container-site py-10 sm:py-14 max-w-3xl">
            <div className="badge-forest mb-3"><Clock className="w-3 h-3" />5 min lesing</div>
            <h1 className="font-display font-bold text-display-xl text-slate-900 mb-4 text-balance">Slik vedlikeholder du fasaden</h1>
            <p className="text-body-lg text-slate-600">Regelmessig vedlikehold forlenger levetiden og sparer deg for kostbare reparasjoner. Her er en komplett årsplan.</p>
          </div>
        </section>
        <article className="section-white section-py-sm">
          <div className="container-site max-w-3xl text-body-md text-slate-700 leading-relaxed space-y-6">
            <p>En godt vedlikeholdt fasade varer vesentlig lenger enn en forsømt en. Forskjellen kan være 20 til 30 år ekstra levetid, som representerer hundretusener av kroner spart.</p>

            <h2 className="font-display font-bold text-heading-xl text-slate-900 mt-10">Årlig sjekkliste</h2>
            <p>Gjør en visuell inspeksjon av fasaden minst en gang i året, gjerne om våren etter vinteren:</p>
            {[
              "Se etter sprekker, avflassing eller skader i maling og kledning",
              "Sjekk at beslag og vindusomramming er tette",
              "Se etter tegn til fukt, mose eller algevekst",
              "Kontroller at takrenner og nedløp fungerer og leder vann bort fra fasaden",
              "Sjekk fundamentet for sprekker eller fuktmerker",
              "Trim busker og trær som vokser inntil veggen",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-sand-100 border border-sand-300 rounded-12 p-4">
                <div className="w-6 h-6 rounded-full bg-forest-600 text-white flex items-center justify-center text-caption font-bold flex-shrink-0">{i + 1}</div>
                <span className="text-body-sm text-slate-700">{item}</span>
              </div>
            ))}

            <h2 className="font-display font-bold text-heading-xl text-slate-900 mt-10">Vedlikehold etter materialtype</h2>

            <h3 className="font-display font-semibold text-heading-lg text-slate-900">Trefasade</h3>
            <p>Males hvert 8 til 12 år. Vaskes hvert 2 til 4 år for å fjerne smuss og alger. Utbedre mindre skader umiddelbart. Bruk kvalitetsmaling med god dekkevne. Sørg for at treverket er tørt før maling.</p>

            <h3 className="font-display font-semibold text-heading-lg text-slate-900">Murfasade</h3>
            <p>Inspiser for sprekker årlig. Fug ut sprekker med egnet materiale. Vask med lavtrykkspyler hvert 3 til 5 år. Impregner overflaten ved behov for å avvise vann. Påfør nytt pusslag ved synlig slitasje.</p>

            <h3 className="font-display font-semibold text-heading-lg text-slate-900">Fibersement og kompositt</h3>
            <p>Vedlikeholdsfritt hva gjelder maling, men bør vaskes hvert 2 til 3 år. Sjekk at skjøter og beslag er intakte. Bytt enkeltplater ved skade. Kontroller festepunkter for korrosjon.</p>

            <div className="bg-forest-50 border border-forest-200 rounded-16 p-6 mt-8">
              <h3 className="font-display font-bold text-heading-md text-forest-900 mb-2">Investering som lønner seg</h3>
              <p className="text-body-sm text-forest-800">En årlig inspeksjon tar en time og koster ingenting. Å oppdage et problem tidlig kan spare deg for titusener sammenlignet med å vente til skaden er omfattende. Godt vedlikehold er den billigste forsikringen du kan ha.</p>
            </div>
          </div>
        </article>
        <section className="section-py-sm">
          <div className="container-site"><div className="cta-block">
            <h2 className="font-display font-bold text-display-lg text-white mb-3">Trenger fasaden din vedlikehold?</h2>
            <Link href="/kontakt" className="btn-white">Få gratis tilbud <ArrowRight className="w-4 h-4" /></Link>
          </div></div>
        </section>
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}

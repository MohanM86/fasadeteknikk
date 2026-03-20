import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyMobileCTA from "@/components/layout/StickyMobileCTA";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Tre vs mur fasade – Fordeler og ulemper",
  description: "Sammenlign tre og murfasade. Se fordeler, ulemper, priser og vedlikeholdsbehov for begge materialene.",
  alternates: { canonical: "https://fasadeteknikk.no/artikler/tre-vs-mur-fasade" },
};

export default function TreVsMur() {
  return (
    <>
      <Header />
      <main>
        <div className="container-site pt-5 pb-2"><Breadcrumb items={[{ navn: "Artikler" }, { navn: "Tre vs mur fasade" }]} /></div>
        <section className="hero-pattern">
          <div className="container-site py-10 sm:py-14 max-w-3xl">
            <div className="badge-forest mb-3"><Clock className="w-3 h-3" />7 min lesing</div>
            <h1 className="font-display font-bold text-display-xl text-slate-900 mb-4 text-balance">Tre vs mur: Hvilken fasade er best?</h1>
            <p className="text-body-lg text-slate-600">En grundig sammenligning av de to vanligste fasadetypene i Norge, med fordeler, ulemper og prisforskjeller.</p>
          </div>
        </section>
        <article className="section-white section-py-sm">
          <div className="container-site max-w-3xl text-body-md text-slate-700 leading-relaxed space-y-6">
            <p>Norge har en lang tradisjon for trefasader, men murfasader er vanlige i byer og for nyere bygg. Begge har sine fordeler og ulemper, og valget avhenger av beliggenhet, budsjett, ønsket vedlikeholdsnivå og estetiske preferanser.</p>

            <h2 className="font-display font-bold text-heading-xl text-slate-900 mt-10">Trefasade</h2>
            <p>Trekledning er den mest brukte fasadetypen i Norge og passer godt til norsk klima og byggetradisjon. Vanlige tretyper er gran, furu og malmfuru.</p>
            <div className="bg-forest-50 border border-forest-200 rounded-16 p-5 space-y-2">
              <div className="font-display font-semibold text-forest-900">Fordeler med trefasade</div>
              <p className="text-body-sm text-forest-800">Naturlig og tradisjonelt utseende. Enkelt å reparere og bytte enkeltbord. Godt isolerende materiale. Relativt rimelig å installere. Mange fargevalg med maling. Miljøvennlig og fornybar ressurs.</p>
            </div>
            <div className="bg-ember-50 border border-ember-200 rounded-16 p-5 space-y-2">
              <div className="font-display font-semibold text-ember-900">Ulemper med trefasade</div>
              <p className="text-body-sm text-ember-800">Krever maling hvert 8 til 12 år. Utsatt for råte ved dårlig vedlikehold. Kan angripes av insekter. Brennbart materiale (men behandlet tre har god brannmotstand).</p>
            </div>

            <h2 className="font-display font-bold text-heading-xl text-slate-900 mt-10">Murfasade</h2>
            <p>Murfasader finnes i flere varianter: pusset mur, teglstein, betong og kombinasjoner. Vanlig i byer, blokkbebyggelse og nyere eneboliger.</p>
            <div className="bg-forest-50 border border-forest-200 rounded-16 p-5 space-y-2">
              <div className="font-display font-semibold text-forest-900">Fordeler med murfasade</div>
              <p className="text-body-sm text-forest-800">Lang levetid med minimalt vedlikehold. Svært god brannmotstand. Solid og solid utseende. God lydisolering. Tåler vind og salt godt.</p>
            </div>
            <div className="bg-ember-50 border border-ember-200 rounded-16 p-5 space-y-2">
              <div className="font-display font-semibold text-ember-900">Ulemper med murfasade</div>
              <p className="text-body-sm text-ember-800">Dyrere å bygge enn tre. Sprekker kan oppstå ved setninger. Rehabilitering er mer komplisert og kostbart. Dårligere isoleringsevne enn tre alene.</p>
            </div>

            <h2 className="font-display font-bold text-heading-xl text-slate-900 mt-10">Prissammenligning</h2>
            <p>Ny trekledning koster typisk 1 200 til 2 500 kr per kvadratmeter inkludert montering. Murfasade (puss på isolasjon) koster 1 800 til 4 000 kr per kvadratmeter. Teglstein er dyrere med 2 500 til 5 000 kr per kvadratmeter. Over en 50 årsperiode kan mur likevel bli billigere på grunn av lavere vedlikeholdskostnader.</p>

            <h2 className="font-display font-bold text-heading-xl text-slate-900 mt-10">Hvilken bør du velge?</h2>
            <p>Velg trefasade hvis du ønsker et tradisjonelt utseende, har et strammere budsjett, eller bor i et område der trehus er normalen. Velg murfasade hvis du vil ha minimalt vedlikehold, bor i et vindeksponert kystområde, eller ønsker et moderne uttrykk. Uansett valg, sørg for god isolasjon og riktig utførelse.</p>
          </div>
        </article>
        <section className="section-py-sm">
          <div className="container-site"><div className="cta-block">
            <h2 className="font-display font-bold text-display-lg text-white mb-3">Trenger du råd om din fasade?</h2>
            <Link href="/kontakt" className="btn-white">Få gratis tilbud <ArrowRight className="w-4 h-4" /></Link>
          </div></div>
        </section>
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}

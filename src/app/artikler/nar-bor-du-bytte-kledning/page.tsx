import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, AlertTriangle, CheckCircle } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyMobileCTA from "@/components/layout/StickyMobileCTA";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Når bør du bytte kledning? 7 tegn å se etter",
  description: "Lær å kjenne igjen tegnene på at kledningen bør byttes. Råte, fukt, avflassing – vi forklarer hva du skal se etter.",
  alternates: { canonical: "https://fasadeteknikk.no/artikler/nar-bor-du-bytte-kledning" },
};

export default function NarBytteKledning() {
  return (
    <>
      <Header />
      <main>
        <div className="container-site pt-5 pb-2"><Breadcrumb items={[{ navn: "Artikler" }, { navn: "Når bør du bytte kledning?" }]} /></div>
        <section className="hero-pattern">
          <div className="container-site py-10 sm:py-14 max-w-3xl">
            <div className="badge-forest mb-3"><Clock className="w-3 h-3" />6 min lesing</div>
            <h1 className="font-display font-bold text-display-xl text-slate-900 mb-4 text-balance">Når bør du bytte kledning på huset?</h1>
            <p className="text-body-lg text-slate-600">Lær å kjenne igjen de viktigste tegnene på at kledningen har gjort sin plikt, og hva du bør gjøre.</p>
          </div>
        </section>
        <article className="section-white section-py-sm">
          <div className="container-site max-w-3xl text-body-md text-slate-700 leading-relaxed space-y-6">
            <p>Kledningen er husets første forsvar mot vær og vind. Når den begynner å svikte, slipper fukt inn i konstruksjonen og kan forårsake alvorlige og kostbare skader. Her er de viktigste tegnene på at det er tid for å bytte.</p>

            <h2 className="font-display font-bold text-heading-xl text-slate-900 mt-10">7 tegn på at kledningen bør byttes</h2>

            {[
              { nr: "1", tittel: "Synlig råte i treverket", tekst: "Stikk en skrutrekker i kledningen. Går den lett inn, er treverket råttent og må byttes. Råte sprer seg raskt og kan nå den bærende konstruksjonen." },
              { nr: "2", tittel: "Maling flasser over store flater", tekst: "Når malingen flasser av i store flak, tyder det på at treverket ikke lenger holder malingen. Sleping og ny maling hjelper bare midlertidig." },
              { nr: "3", tittel: "Kledningsbord er bøyde eller sprukne", tekst: "Bord som har bøyd seg eller sprukket slipper inn fukt bak kledningen. Enkelte bord kan byttes, men er problemet utbredt bør hele veggen kles om." },
              { nr: "4", tittel: "Fuktproblemer innvendig", tekst: "Fuktflekker eller mugg på innvendige vegger kan skyldes utett kledning. Sjekk om problemet kommer utenfra ved å undersøke veggen bak kledningen." },
              { nr: "5", tittel: "Kledningen er over 40 år gammel", tekst: "De fleste trekledninger varer 30 til 50 år. Er kledningen fra 1970 eller 1980 tallet uten å ha blitt byttet, bør den vurderes." },
              { nr: "6", tittel: "Grønnalger som ikke lar seg vaske bort", tekst: "Algvekst som kommer tilbake raskt etter vasking tyder på at treverkets overflate er nedbrutt og ikke lenger holder behandlingen." },
              { nr: "7", tittel: "Synlig vindsperre bak kledningen", tekst: "Ser du plastfolien (vindsperren) gjennom sprekker i kledningen, er beskyttelsen kompromittert og kledningen bør byttes snarest." },
            ].map(tegn => (
              <div key={tegn.nr} className="bg-sand-100 border border-sand-300 rounded-16 p-5">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-ember-500 text-white flex items-center justify-center font-display font-bold text-body-sm flex-shrink-0">{tegn.nr}</div>
                  <div>
                    <h3 className="font-display font-semibold text-heading-sm text-slate-900 mb-1">{tegn.tittel}</h3>
                    <p className="text-body-sm text-slate-600">{tegn.tekst}</p>
                  </div>
                </div>
              </div>
            ))}

            <h2 className="font-display font-bold text-heading-xl text-slate-900 mt-10">Hva bør du gjøre?</h2>
            <p>Ser du flere av disse tegnene, bør du kontakte et fasadefirma for en befaring. En fagperson kan vurdere om hele kledningen bør byttes, eller om det holder med reparasjon av utsatte områder. Innhent alltid flere tilbud og sammenlign pris, materialer og garantier.</p>

            <div className="bg-forest-50 border border-forest-200 rounded-16 p-6">
              <h3 className="font-display font-bold text-heading-md text-forest-900 mb-2">Viktig å vite</h3>
              <p className="text-body-sm text-forest-800">Når kledningen er av, er det den perfekte anledningen til å etterisolere. Du sparer mye arbeidskostnad ved å gjøre begge deler samtidig, og boligen blir varmere og billigere å drifte.</p>
            </div>
          </div>
        </article>
        <section className="section-py-sm">
          <div className="container-site"><div className="cta-block">
            <h2 className="font-display font-bold text-display-lg text-white mb-3">Usikker på kledningens tilstand?</h2>
            <p className="text-body-md text-forest-200 mb-6">Få en fagperson til å vurdere. Gratis og uforpliktende.</p>
            <Link href="/kontakt" className="btn-white">Få gratis tilbud <ArrowRight className="w-4 h-4" /></Link>
          </div></div>
        </section>
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}

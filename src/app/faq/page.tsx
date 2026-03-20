import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyMobileCTA from "@/components/layout/StickyMobileCTA";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FAQ from "@/components/ui/FAQ";

export const metadata: Metadata = {
  title: "Vanlige spørsmål om fasade og fasadearbeid",
  description: "Svar på de vanligste spørsmålene om fasaderehabilitering, kledning, maling, priser og vedlikehold.",
  alternates: { canonical: "https://fasadeteknikk.no/faq" },
};

const FAQ_ITEMS = [
  { sporsmal: "Hva koster det å rehabilitere fasaden?", svar: "Prisen varierer fra 1 500 til 4 500 kr per kvadratmeter avhengig av tilstand, materialvalg og omfang. For en enebolig med 150 kvm fasade blir totalprisen typisk mellom 225 000 og 675 000 kr." },
  { sporsmal: "Når bør man bytte kledning?", svar: "Kledningen bør byttes når du ser synlig råte, maling som flasser over store flater, bøyde eller sprukne bord, eller fuktproblemer bak kledningen. De fleste trekledninger varer 30 til 50 år." },
  { sporsmal: "Hvor ofte bør man male huset?", svar: "Trefasader bør males hvert 8 til 12 år avhengig av eksponering. Sørvendte og vestvendte vegger slites raskere. Godt forarbeid og kvalitetsmaling gir lengst holdbarhet." },
  { sporsmal: "Kan jeg få støtte til etterisolering?", svar: "Ja, Enova gir støtte til etterisolering av boliger. Sjekk enova.no for oppdaterte satser og vilkår. Støtten kan dekke inntil 20 prosent av kostnadene." },
  { sporsmal: "Trenger jeg byggetillatelse for fasadearbeid?", svar: "Vanlig vedlikehold krever normalt ikke søknad. Endring av fasadens utseende, farge eller materialer kan kreve byggemelding til kommunen." },
  { sporsmal: "Hvilken type kledning er best?", svar: "Det avhenger av preferanser og budsjett. Trekledning er rimeligst og mest tradisjonelt. Fibersement er vedlikeholdsfritt. Kompositt gir moderne uttrykk. Teglstein har lengst levetid." },
  { sporsmal: "Kan jeg male huset selv?", svar: "Ja, men det krever riktig utstyr, stillas, og grundig forarbeid. Profesjonelle gir bedre resultat, jobber raskere og garanterer arbeidet." },
  { sporsmal: "Hva er forskjellen på puss og maling?", svar: "Puss er et tykt lag som legges på mur og gir en ny overflate. Maling er en tynnere behandling som dekker eksisterende overflate. Puss er dyrere men mer holdbart på murfasader." },
];

export default function FAQSide() {
  return (
    <>
      <Header />
      <main>
        <div className="container-site pt-5 pb-2"><Breadcrumb items={[{ navn: "FAQ" }]} /></div>
        <section className="hero-pattern">
          <div className="container-site py-10 text-center">
            <h1 className="font-display font-bold text-display-xl text-slate-900 mb-4 text-balance">Vanlige spørsmål om fasade</h1>
            <p className="text-body-lg text-slate-600 max-w-2xl mx-auto">Svar på de mest stilte spørsmålene om fasadearbeid, priser og vedlikehold.</p>
          </div>
        </section>
        <section className="section-white section-py-sm">
          <div className="container-site max-w-3xl"><FAQ items={FAQ_ITEMS} /></div>
        </section>
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}

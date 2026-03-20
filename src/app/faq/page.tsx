import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyMobileCTA from "@/components/layout/StickyMobileCTA";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FAQ from "@/components/ui/FAQ";
export const metadata: Metadata = { title: "Vanlige spørsmål om fasade og fasadearbeid", description: "Svar på de vanligste spørsmålene om fasaderehabilitering, kledning, maling, priser og vedlikehold.", alternates: { canonical: "https://fasadeteknikk.no/faq" } };
const FAQ_ITEMS = [
  { sporsmal: "Hva koster det å rehabilitere fasaden?", svar: "Prisen varierer fra 1 500 til 4 500 kr per kvadratmeter avhengig av tilstand, materialvalg og omfang." },
  { sporsmal: "Når bør man bytte kledning?", svar: "Kledningen bør byttes når du ser synlig råte, maling som flasser over store flater, eller fuktproblemer bak kledningen." },
  { sporsmal: "Hvor ofte bør man male huset?", svar: "Trefasader bør males hvert 8 til 12 år avhengig av eksponering." },
  { sporsmal: "Kan jeg få støtte til etterisolering?", svar: "Ja, Enova gir støtte til etterisolering av boliger. Sjekk enova.no for oppdaterte satser og vilkår." },
  { sporsmal: "Trenger jeg byggetillatelse for fasadearbeid?", svar: "Vanlig vedlikehold krever normalt ikke søknad. Endring av fasadens utseende eller materialer kan kreve byggemelding til kommunen." },
];
export default function FAQSide() {
  return (<><Header /><main><div className="container-site pt-5 pb-2"><Breadcrumb items={[{ navn: "FAQ" }]} /></div><section className="hero-pattern"><div className="container-site py-10 text-center"><h1 className="font-display font-extrabold text-display-xl text-neutral-900 mb-4 text-balance">Vanlige spørsmål om fasade</h1><p className="text-body-lg text-neutral-500 max-w-2xl mx-auto">Svar på de mest stilte spørsmålene om fasadearbeid, priser og vedlikehold.</p></div></section><section className="section-white section-py-sm"><div className="container-site max-w-3xl"><FAQ items={FAQ_ITEMS} /></div></section></main><Footer /><StickyMobileCTA /></>);
}

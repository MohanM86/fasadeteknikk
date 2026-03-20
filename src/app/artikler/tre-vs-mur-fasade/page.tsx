import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyMobileCTA from "@/components/layout/StickyMobileCTA";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FAQ from "@/components/ui/FAQ";

export const metadata: Metadata = {
  title: "Tre vs mur fasade – Fordeler, ulemper og priser (2026)",
  description:
    "Sammenlign trefasade og murfasade. Se fordeler, ulemper, priser, levetid og vedlikeholdskostnader for begge alternativene.",
  alternates: {
    canonical: "https://fasadeteknikk.no/artikler/tre-vs-mur-fasade",
  },
};

const FAQ_ITEMS = [
  {
    sporsmal: "Hva er billigst, tre eller mur?",
    svar: "Trekledning er billigst i innkjøp og montering, typisk 1 200 til 3 500 kr per kvm. Murfasade koster 2 500 til 6 000 kr per kvm. Men mur har lavere vedlikeholdskostnader over tid, noe som kan gjøre den rimeligere i et 50 års perspektiv.",
  },
  {
    sporsmal: "Kan jeg pusse mur over trekledning?",
    svar: "Nei, det er ikke anbefalt å pusse direkte over trekledning. Puss og tre beveger seg forskjellig ved temperaturendringer og fukt, noe som gir sprekker og skader. Du kan derimot montere fibersementplater over en trekonstruksjon og pusse disse.",
  },
  {
    sporsmal: "Hva varer lengst?",
    svar: "Murfasader varer typisk 80 til 100 år eller mer med vedlikehold. Trekledning varer 30 til 60 år avhengig av tresort og vedlikehold. Teglstein er det mest holdbare materialet og kan vare flere hundre år.",
  },
  {
    sporsmal: "Hvilken fasade er best for norsk klima?",
    svar: "Begge fungerer godt i Norge. Trekledning er mest brukt og tåler kulde godt, men krever mer vedlikehold i fuktige kyststrøk. Mur tåler regn og vind bedre, men kan få frostskader hvis fukt trenger inn og fryser.",
  },
  {
    sporsmal: "Kan jeg endre fra tre til mur eller omvendt?",
    svar: "Ja, men det er et omfattende prosjekt som kan kreve byggemelding til kommunen. Å gå fra tre til mur krever ny fundamentering for å tåle den ekstra vekten. Å gå fra mur til tre er enklere og rimeligere.",
  },
];

export default function Artikkel() {
  return (
    <>
      <Header />
      <main>
        <div className="container-site pt-5 pb-2">
          <Breadcrumb
            items={[
              { navn: "Artikler", href: "/artikler" },
              { navn: "Tre vs mur: Hvilken fasade er best?" },
            ]}
          />
        </div>

        <section className="hero-pattern">
          <div className="container-site py-10 sm:py-14 max-w-3xl">
            <div className="badge-brand mb-3">
              <Clock className="w-3 h-3" />9 min lesing
            </div>
            <h1 className="font-display font-extrabold text-display-xl text-neutral-900 mb-4 text-balance">
              Tre vs mur: Hvilken fasade er best?
            </h1>
            <p className="text-body-lg text-neutral-500">
              En grundig sammenligning av de to vanligste fasadetypene i Norge,
              med priser, levetid, vedlikeholdskostnader og anbefalinger for
              ulike boligtyper.
            </p>
            <p className="text-caption text-neutral-400 mt-3">
              Sist oppdatert: mars 2026
            </p>
          </div>
        </section>

        <article className="section-white section-py-sm">
          <div className="container-site max-w-3xl">
            <div className="text-body-md text-neutral-600 leading-relaxed space-y-6">
              <p>
                Norge har en lang tradisjon for begge fasadetypene. Trekledning
                dominerer i villastrøk og på landet, mens murfasader preger
                bysentra i Oslo, Bergen og Trondheim. Valget mellom tre og mur
                handler om mer enn estetikk, det påvirker vedlikeholdskostnad,
                energieffektivitet, levetid og boligens verdi.
              </p>

              <h2 className="font-display font-bold text-heading-xl text-neutral-900 mt-10">
                Sammenligning: Tre vs mur
              </h2>

              <div className="overflow-x-auto mt-4">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-neutral-100 border-b-2 border-neutral-200">
                      <th className="text-left px-4 py-3 text-label text-neutral-600">
                        Egenskap
                      </th>
                      <th className="text-left px-4 py-3 text-label text-neutral-600">
                        Trefasade
                      </th>
                      <th className="text-left px-4 py-3 text-label text-neutral-600">
                        Murfasade
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        e: "Pris per kvm",
                        t: "1 200 – 3 500 kr",
                        m: "2 500 – 6 000 kr",
                      },
                      { e: "Levetid", t: "30 – 60 år", m: "80 – 100+ år" },
                      {
                        e: "Vedlikeholdsintervall",
                        t: "Hvert 8 – 12 år (maling)",
                        m: "Hvert 20 – 30 år (puss/fuge)",
                      },
                      {
                        e: "Vedlikeholdskostnad",
                        t: "300 – 800 kr/kvm per gang",
                        m: "400 – 2 000 kr/kvm per gang",
                      },
                      {
                        e: "Isolasjonsevne",
                        t: "God (med etterisolering)",
                        m: "Variabel (avhenger av tykkelse)",
                      },
                      {
                        e: "Monteringstid",
                        t: "2 – 4 uker (enebolig)",
                        m: "4 – 8 uker (enebolig)",
                      },
                      {
                        e: "Miljøavtrykk",
                        t: "Lavt (fornybar ressurs)",
                        m: "Høyere (energikrevende produksjon)",
                      },
                      {
                        e: "Brannmotstand",
                        t: "Lav uten behandling",
                        m: "Høy",
                      },
                      {
                        e: "Lydisolering",
                        t: "Moderat",
                        m: "God til svært god",
                      },
                    ].map((r, i) => (
                      <tr
                        key={r.e}
                        className={`border-b border-neutral-100 ${i % 2 === 0 ? "bg-white" : "bg-neutral-50"}`}
                      >
                        <td className="px-4 py-3 font-semibold text-neutral-900">
                          {r.e}
                        </td>
                        <td className="px-4 py-3 text-neutral-700">{r.t}</td>
                        <td className="px-4 py-3 text-neutral-700">{r.m}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="font-display font-bold text-heading-xl text-neutral-900 mt-10">
                Fordeler med trefasade
              </h2>

              <p>
                Trekledning er det mest brukte fasadematerialet i Norge, og det
                har gode grunner. Det er rimelig i innkjøp og montering, lett å
                arbeide med, og gir et varmt, tradisjonelt utseende som passer
                norsk byggeskikk. Tre er et fornybart materiale med lavt
                klimaavtrykk, noe som gjør det til et godt valg for
                miljøbevisste huseiere.
              </p>
              <p>
                En annen stor fordel er fleksibiliteten. Det er enkelt å bytte
                enkeltbord, endre farge, eller tilpasse detaljer rundt vinduer
                og dører. Etterisolering bak trekledning er en rett frem jobb
                som de fleste håndverkere behersker. Trekledning egner seg
                spesielt godt for eneboliger, rekkehus og hytter i hele Norge.
              </p>

              <h2 className="font-display font-bold text-heading-xl text-neutral-900 mt-10">
                Ulemper med trefasade
              </h2>

              <p>
                Det største minuset er vedlikeholdsbehovet. Trefasader bør males
                eller beises hvert 8 til 12 år, og sørvendte vegger slites
                raskere. Uten vedlikehold kan treet absorbere fukt som fører til
                råte og sopp. Brannmotstanden er lav sammenlignet med mur, selv
                om brannhemmende maling kan bedre dette noe. I svært
                vindeksponerte kyststrøk kan trekledning slites raskt.
              </p>

              <h2 className="font-display font-bold text-heading-xl text-neutral-900 mt-10">
                Fordeler med murfasade
              </h2>

              <p>
                Murfasader har en imponerende levetid på 80 til 100 år eller
                mer. Mange murgårder i Oslo fra 1890-tallet står fremdeles med
                originalfasaden. Vedlikeholdsbehovet er vesentlig lavere enn for
                tre. Mur trenger vanligvis bare omfuging hvert 20 til 30 år, og
                ny puss eller maling hvert 15 til 25 år.
              </p>
              <p>
                Mur gir bedre brannmotstand og lydisolering enn tre. Det er
                spesielt fordelaktig i tett bybebyggelse der brannkrav og
                støydemping er viktig. Murfasader gir også bygningen et solid,
                tidløst uttrykk som mange opplever som verdiøkende.
              </p>

              <h2 className="font-display font-bold text-heading-xl text-neutral-900 mt-10">
                Ulemper med murfasade
              </h2>

              <p>
                Murfasade er vesentlig dyrere å bygge enn tre. Rehabilitering av
                mur krever spesialkompetanse, spesielt for eldre bygårder med
                stukkaturer og ornamenter. Frostskader er en risiko hvis fukt
                trenger inn i murverk og fryser, noe som kan føre til avskalling
                og sprekker. Etterisolering av eksisterende murfasader kan være
                utfordrende uten å miste arkitektoniske detaljer.
              </p>

              <h2 className="font-display font-bold text-heading-xl text-neutral-900 mt-10">
                Totalkostnad over 50 år
              </h2>

              <p>
                Selv om mur er dyrere ved oppføring, kan totalkostnaden over 50
                år være sammenlignbar med tre. En enebolig med 150 kvm fasade
                kan se slik ut over en 50 års periode:
              </p>

              <div className="space-y-4 mt-4">
                <div className="bg-neutral-100 rounded-16 p-5">
                  <div className="font-display font-semibold text-neutral-900 mb-2">
                    Trefasade (gran) over 50 år
                  </div>
                  <div className="text-body-sm text-neutral-600 space-y-1">
                    <p>Montering: ca. 280 000 kr</p>
                    <p>Maling hvert 10. år (4 ganger): ca. 300 000 kr</p>
                    <p>Kledningsbytte etter 35 år: ca. 280 000 kr</p>
                    <p className="font-display font-bold text-brand-500 text-heading-md mt-2">
                      Totalt: ca. 860 000 kr
                    </p>
                  </div>
                </div>
                <div className="bg-neutral-100 rounded-16 p-5">
                  <div className="font-display font-semibold text-neutral-900 mb-2">
                    Murfasade (tegl med puss) over 50 år
                  </div>
                  <div className="text-body-sm text-neutral-600 space-y-1">
                    <p>Montering: ca. 600 000 kr</p>
                    <p>Omfuging etter 25 år: ca. 100 000 kr</p>
                    <p>Ny puss/maling etter 20 og 40 år: ca. 200 000 kr</p>
                    <p className="font-display font-bold text-brand-500 text-heading-md mt-2">
                      Totalt: ca. 900 000 kr
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-body-sm text-neutral-400">
                Eksemplene er veiledende og basert på gjennomsnittspriser for en
                enebolig med 150 kvm fasade i 2026.
              </p>

              <h2 className="font-display font-bold text-heading-xl text-neutral-900 mt-10">
                Hvilken fasade passer for deg?
              </h2>

              <p>
                Velg trefasade hvis du har enebolig eller rekkehus, ønsker lavest
                mulig investeringskostnad, planlegger etterisolering, eller bor i
                et område med tradisjonell trebebyggelse. Velg murfasade hvis du
                verdsetter lav vedlikeholdsinnsats, har et langsiktig perspektiv,
                bygger nytt med krav til brannmotstand, eller ønsker et solid
                uttrykk som tåler tidens tann.
              </p>

              <div className="bg-brand-50 border border-brand-200 rounded-16 p-6 mt-8">
                <h3 className="font-display font-bold text-heading-md text-neutral-900 mb-2">
                  Visste du at?
                </h3>
                <p className="text-body-sm text-neutral-600">
                  Det finnes også hybridløsninger. Fibersement kombinerer
                  fordelene ved begge, med lav vedlikeholdsinnsats, god
                  brannmotstand og moderat pris. Det er et populært alternativ
                  for huseiere som vil ha et vedlikeholdsfritt uttrykk uten å gå
                  over til mur.
                </p>
              </div>

              <h2 className="font-display font-bold text-heading-xl text-neutral-900 mt-10">
                Les mer
              </h2>

              <p>
                Vurderer du å bytte fasademateriale? Se vår{" "}
                <Link
                  href="/artikler/nar-bor-du-bytte-kledning"
                  className="text-brand-500 hover:text-brand-600 font-semibold"
                >
                  guide til kledningsbytte
                </Link>{" "}
                eller les om{" "}
                <Link
                  href="/artikler/hva-koster-fasaderehabilitering"
                  className="text-brand-500 hover:text-brand-600 font-semibold"
                >
                  hva fasaderehabilitering koster
                </Link>
                .
              </p>
            </div>
          </div>
        </article>

        <section className="section-light section-py-sm">
          <div className="container-site max-w-3xl">
            <FAQ items={FAQ_ITEMS} tittel="Vanlige spørsmål om tre vs mur" />
          </div>
        </section>

        <section className="section-py-sm">
          <div className="container-site">
            <div className="cta-block text-center relative z-10">
              <h2 className="font-display font-extrabold text-display-lg text-white mb-3">
                Trenger du hjelp med fasaden?
              </h2>
              <p className="text-base text-neutral-500 mb-6">
                Få gratis tilbud fra kvalifiserte firma i ditt område.
              </p>
              <Link href="/kontakt" className="btn-primary">
                Få gratis tilbud <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}

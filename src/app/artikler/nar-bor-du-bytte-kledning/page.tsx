import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, AlertTriangle } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyMobileCTA from "@/components/layout/StickyMobileCTA";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FAQ from "@/components/ui/FAQ";

export const metadata: Metadata = {
  title: "Når bør du bytte kledning? 7 tegn å se etter (2026)",
  description:
    "Lær å kjenne igjen de viktigste tegnene på at kledningen bør byttes. Komplett guide med priser, materialtabell, levetid og tips fra fagfolk.",
  alternates: {
    canonical: "https://fasadeteknikk.no/artikler/nar-bor-du-bytte-kledning",
  },
};

const FAQ_ITEMS = [
  {
    sporsmal: "Hvor lenge varer trekledning?",
    svar: "Med godt vedlikehold varer grankledning 30 til 50 år, furukledning 40 til 60 år, og kebony eller malmfuru over 60 år. Dårlig vedlikehold kan halvere levetiden.",
  },
  {
    sporsmal: "Kan jeg bare bytte noen bord i stedet for hele kledningen?",
    svar: "Ja, hvis skadene er begrenset til enkeltområder. Men hvis mer enn 20 til 30 prosent av kledningen har skader, er det som regel mer lønnsomt å bytte alt på en gang. Du sparer stillas, rigg og får et jevnere resultat.",
  },
  {
    sporsmal: "Bør jeg etterisolere samtidig som jeg bytter kledning?",
    svar: "Absolutt. Når kledningen er av, er det minimalt med ekstraarbeid å legge inn ny isolasjon. Det koster typisk 800 til 2 500 kr ekstra per kvm, men kan redusere varmetapet med opptil 40 prosent. Enova gir støtte til etterisolering.",
  },
  {
    sporsmal: "Hva er det billigste kledningsalternativet?",
    svar: "Grankledning er rimeligst med en materialpris på 150 til 300 kr per kvm. Men furu og malmfuru har lengre levetid og lavere vedlikeholdskostnad over tid, noe som gjør dem billigere i et livsløpsperspektiv.",
  },
  {
    sporsmal: "Trenger jeg byggetillatelse for å bytte kledning?",
    svar: "Normalt ikke hvis du bytter til samme type kledning. Endrer du fasadens utseende vesentlig, for eksempel fra liggende til stående panel eller til et helt annet materiale, kan det kreve byggemelding til kommunen.",
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
              { navn: "Når bør du bytte kledning?" },
            ]}
          />
        </div>

        <section className="hero-pattern">
          <div className="container-site py-10 sm:py-14 max-w-3xl">
            <div className="badge-brand mb-3">
              <Clock className="w-3 h-3" />8 min lesing
            </div>
            <h1 className="font-display font-extrabold text-display-xl text-neutral-900 mb-4 text-balance">
              Når bør du bytte kledning på huset?
            </h1>
            <p className="text-body-lg text-neutral-500">
              Lær å kjenne igjen de viktigste tegnene på at kledningen har gjort
              sin plikt, hva det koster å bytte, og hvilke materialer som gir
              best verdi for pengene.
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
                Kledningen er husets første forsvarslinje mot vær og vind. Når den
                begynner å svikte, kan fukt trenge inn i konstruksjonen og føre
                til råte, sopp og strukturelle skader som koster langt mer å
                reparere enn selve kledningen. De fleste trekledninger i Norge
                varer mellom 30 og 50 år, men levetiden varierer enormt avhengig
                av vedlikehold, materialvalg og eksponering.
              </p>

              <h2 className="font-display font-bold text-heading-xl text-neutral-900 mt-10">
                7 tegn på at kledningen bør byttes
              </h2>

              <p>
                Ikke alle skader betyr at hele kledningen må skiftes. Men jo
                flere av disse tegnene du kjenner igjen, jo mer haster det.
              </p>

              <div className="space-y-4 mt-6">
                {[
                  {
                    nr: "1",
                    tittel: "Synlig råte i kledningsbordene",
                    tekst:
                      "Stikk med en skrutrekker i nedkant av bordene, rundt vinduer og ved grunnmuren. Hvis treet er mykt og smuldrer, har råten fått fotfeste. Enkelte råtne bord kan byttes, men hvis du finner råte på flere vegger, bør hele kledningen skiftes.",
                  },
                  {
                    nr: "2",
                    tittel: "Maling som flasser over store flater",
                    tekst:
                      "Avflassing på enkeltbord er normalt og kan fikses med vedlikeholdsmaling. Men hvis malingen løsner i store flak over hele veggen, kan det tyde på at treet ikke lenger holder på malingen. Da er ofte kledningen for slitt til å males igjen.",
                  },
                  {
                    nr: "3",
                    tittel: "Bøyde, sprukne eller vridd bord",
                    tekst:
                      "Kledningsbord som har vridd seg eller sprukket på langs slipper inn fukt bak kledningen. En eller to bord er ingen krise, men når hele vegger viser tegn til deformasjon, er det på tide å bytte.",
                  },
                  {
                    nr: "4",
                    tittel: "Fukt eller mugg bak kledningen",
                    tekst:
                      "Hvis du ser mørke flekker på innsiden av ytterveggene, kjenner mugglukt eller ser kondens på vinduene om vinteren, kan det være tegn på at fukt trenger gjennom kledningen. Dette er det mest alvorlige tegnet og bør undersøkes av fagfolk umiddelbart.",
                  },
                  {
                    nr: "5",
                    tittel: "Kledningen er over 30 år gammel uten store vedlikeholdsarbeider",
                    tekst:
                      "Har kledningen stått i 30 år eller mer uten annet enn maling, er den sannsynligvis i ferd med å nå slutten av levetiden. Spesielt gjelder dette sørvendte og vestvendte vegger som får mest vær.",
                  },
                  {
                    nr: "6",
                    tittel: "Alger og mose som kommer raskt tilbake etter vask",
                    tekst:
                      "Litt algevekst er normalt, men hvis grønnbelegget kommer tilbake få måneder etter vask, holder ikke overflatebehandlingen lenger. Det betyr at treet absorberer fukt, som akselererer nedbrytningen.",
                  },
                  {
                    nr: "7",
                    tittel: "Høye oppvarmingskostnader",
                    tekst:
                      "Gammel kledning med dårlig isolasjon bak slipper ut mye varme. Hvis strømregningen er urimelig høy sammenlignet med tilsvarende boliger, kan et kledningsbytte med etterisolering kutte oppvarmingskostnadene med 20 til 40 prosent.",
                  },
                ].map((tegn) => (
                  <div
                    key={tegn.nr}
                    className="bg-neutral-50 border border-neutral-200 rounded-16 p-5"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-500 flex items-center justify-center text-white font-display font-bold text-sm">
                        {tegn.nr}
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-heading-sm text-neutral-900 mb-1">
                          {tegn.tittel}
                        </h3>
                        <p className="text-body-sm text-neutral-600">
                          {tegn.tekst}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-brand-50 border border-brand-200 rounded-16 p-6 mt-8 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-display font-bold text-heading-md text-neutral-900 mb-1">
                    Ikke vent for lenge
                  </h3>
                  <p className="text-body-sm text-neutral-600">
                    Fuktskader som får utvikle seg kan ødelegge isolasjon,
                    vindsperre og bærekonstruksjon. Det som starter som et
                    kledningsbytte til 200 000 kr kan bli en total
                    fasaderehabilitering til 500 000 kr eller mer hvis du
                    venter.
                  </p>
                </div>
              </div>

              <h2 className="font-display font-bold text-heading-xl text-neutral-900 mt-10">
                Hva koster det å bytte kledning?
              </h2>

              <p>
                Prisen avhenger av materialvalg, husets størrelse og
                tilgjengelighet. Her er en oversikt basert på markedspriser i
                2026:
              </p>

              <div className="overflow-x-auto mt-4">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-neutral-100 border-b-2 border-neutral-200">
                      <th className="text-left px-4 py-3 text-label text-neutral-600">
                        Materiale
                      </th>
                      <th className="text-left px-4 py-3 text-label text-neutral-600">
                        Materialpris
                      </th>
                      <th className="text-left px-4 py-3 text-label text-neutral-600">
                        Totalpris inkl. arbeid
                      </th>
                      <th className="text-left px-4 py-3 text-label text-neutral-600">
                        Levetid
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        m: "Gran (ubehandlet)",
                        mp: "150 – 250 kr/kvm",
                        tp: "1 200 – 2 000 kr/kvm",
                        l: "30 – 40 år",
                      },
                      {
                        m: "Furu (grunnet)",
                        mp: "200 – 350 kr/kvm",
                        tp: "1 400 – 2 500 kr/kvm",
                        l: "40 – 50 år",
                      },
                      {
                        m: "Malmfuru / Royal",
                        mp: "350 – 500 kr/kvm",
                        tp: "1 800 – 3 000 kr/kvm",
                        l: "50 – 60+ år",
                      },
                      {
                        m: "Kebony",
                        mp: "500 – 800 kr/kvm",
                        tp: "2 200 – 3 500 kr/kvm",
                        l: "60+ år",
                      },
                      {
                        m: "Fibersement",
                        mp: "400 – 700 kr/kvm",
                        tp: "2 000 – 3 200 kr/kvm",
                        l: "50+ år",
                      },
                      {
                        m: "Kompositt",
                        mp: "500 – 900 kr/kvm",
                        tp: "2 500 – 3 500 kr/kvm",
                        l: "40 – 50 år",
                      },
                    ].map((r, i) => (
                      <tr
                        key={r.m}
                        className={`border-b border-neutral-100 ${i % 2 === 0 ? "bg-white" : "bg-neutral-50"}`}
                      >
                        <td className="px-4 py-3 font-semibold text-neutral-900">
                          {r.m}
                        </td>
                        <td className="px-4 py-3 text-neutral-700">{r.mp}</td>
                        <td className="px-4 py-3 font-display font-bold text-brand-500">
                          {r.tp}
                        </td>
                        <td className="px-4 py-3 text-neutral-500">{r.l}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="font-display font-bold text-heading-xl text-neutral-900 mt-10">
                Priseksempler for ulike hustyper
              </h2>

              <div className="space-y-4 mt-4">
                {[
                  {
                    type: "Rekkehus, 80 kvm fasade",
                    beskrivelse:
                      "Enkel fasade i ett plan med grankledning og beis. 6 vinduer og 2 dører.",
                    pris: "120 000 – 200 000 kr",
                  },
                  {
                    type: "Enebolig, 160 kvm fasade",
                    beskrivelse:
                      "Toetasjes enebolig med saltak. Malmfuru kledning som kan stå ubehandlet. 12 vinduer og 3 dører.",
                    pris: "240 000 – 450 000 kr",
                  },
                  {
                    type: "Stor enebolig, 220 kvm fasade",
                    beskrivelse:
                      "Romslig enebolig i halvannen etasje med kebony kledning og etterisolering. 16 vinduer.",
                    pris: "400 000 – 650 000 kr",
                  },
                ].map((ex) => (
                  <div
                    key={ex.type}
                    className="bg-neutral-100 rounded-16 p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
                  >
                    <div>
                      <div className="font-display font-semibold text-neutral-900">
                        {ex.type}
                      </div>
                      <div className="text-body-sm text-neutral-500">
                        {ex.beskrivelse}
                      </div>
                    </div>
                    <div className="font-display font-bold text-brand-500 whitespace-nowrap">
                      {ex.pris}
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-body-sm text-neutral-400">
                Prisene inkluderer materialer, arbeid, stillas, riving av gammel
                kledning og avfallshåndtering. Etterisolering og vindusbytte
                kommer i tillegg.
              </p>

              <h2 className="font-display font-bold text-heading-xl text-neutral-900 mt-10">
                Stående eller liggende kledning?
              </h2>

              <p>
                Valget mellom stående og liggende panel påvirker både utseende,
                pris og vedlikeholdsbehov. Liggende kledning er vanligst i
                Norge og gir et tradisjonelt uttrykk. Det er enklere å montere
                og rimeligere, og enkeltbord kan byttes uten å påvirke resten av
                veggen. Stående kledning gir et mer moderne uttrykk og leder
                vann bedre nedover, men er noe dyrere å montere og krever
                gjennomtenkt detaljering rundt vinduer.
              </p>

              <h2 className="font-display font-bold text-heading-xl text-neutral-900 mt-10">
                Beste tidspunkt for kledningsbytte
              </h2>

              <p>
                Sesongen fra april til oktober er best for å bytte kledning.
                Temperaturen bør være over 5 grader, og det bør være tørt under
                monteringen. Mange velger imidlertid å bestille i lavsesong
                (januar til mars) for å få lavere priser, ettersom det er flere
                ledige håndverkere da. Selve monteringen kan fint gjøres om
                vinteren så lenge det ikke regner eller snør aktivt under
                arbeidet.
              </p>

              <h2 className="font-display font-bold text-heading-xl text-neutral-900 mt-10">
                Slik sparer du penger
              </h2>

              <p>
                Innhent alltid minst tre skriftlige tilbud og sammenlign nøye.
                Kombiner kledningsbytte med etterisolering for å spare rigg og
                stillas. Søk om Enova-støtte for etterisolering, du kan få
                inntil 20 prosent dekket. Vurder materialer med lengre levetid
                selv om de er dyrere i innkjøp, det lønner seg over 30 til 50
                år. Bestill i lavsesong for potensielt 10 til 15 prosent lavere
                priser.
              </p>

              <div className="bg-brand-50 border border-brand-200 rounded-16 p-6 mt-8">
                <h3 className="font-display font-bold text-heading-md text-neutral-900 mb-2">
                  Tips fra fagfolk
                </h3>
                <p className="text-body-sm text-neutral-600">
                  Sjekk alltid vindsperren bak kledningen. Selv om kledningen
                  ser grei ut utenpå, kan vindsperren ha brutt sammen. En ødelagt
                  vindsperre gjør kledningen verdiløs som fuktsikring. Når du
                  bytter kledning, bør vindsperren alltid byttes samtidig.
                </p>
              </div>

              <h2 className="font-display font-bold text-heading-xl text-neutral-900 mt-10">
                Les mer
              </h2>

              <p>
                Se vår{" "}
                <Link
                  href="/artikler/hva-koster-fasaderehabilitering"
                  className="text-brand-500 hover:text-brand-600 font-semibold"
                >
                  komplette prisguide for fasaderehabilitering
                </Link>{" "}
                for en bredere oversikt over kostnader. Lurer du på forskjellen
                mellom materialer? Les{" "}
                <Link
                  href="/artikler/tre-vs-mur-fasade"
                  className="text-brand-500 hover:text-brand-600 font-semibold"
                >
                  tre vs mur: hvilken fasade er best
                </Link>
                .
              </p>
            </div>
          </div>
        </article>

        <section className="section-light section-py-sm">
          <div className="container-site max-w-3xl">
            <FAQ
              items={FAQ_ITEMS}
              tittel="Vanlige spørsmål om kledningsbytte"
            />
          </div>
        </section>

        <section className="section-py-sm">
          <div className="container-site">
            <div className="cta-block text-center relative z-10">
              <h2 className="font-display font-extrabold text-display-lg text-white mb-3">
                Trenger du ny kledning?
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

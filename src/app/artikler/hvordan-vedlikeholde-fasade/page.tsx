import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, CheckCircle } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyMobileCTA from "@/components/layout/StickyMobileCTA";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FAQ from "@/components/ui/FAQ";

export const metadata: Metadata = {
  title: "Slik vedlikeholder du fasaden – Komplett guide (2026)",
  description:
    "Lær hvordan du vedlikeholder husets fasade for å forlenge levetiden. Årsplan, kostnader, DIY-tips og når du bør kontakte fagfolk.",
  alternates: {
    canonical: "https://fasadeteknikk.no/artikler/hvordan-vedlikeholde-fasade",
  },
};

const FAQ_ITEMS = [
  {
    sporsmal: "Hvor ofte bør jeg vedlikeholde fasaden?",
    svar: "Trefasader bør males hvert 8 til 12 år. Årlig inspeksjon og vask hvert 2 til 5 år forlenger levetiden vesentlig. Murfasader trenger omfuging hvert 20 til 30 år og eventuell ny puss etter 15 til 25 år.",
  },
  {
    sporsmal: "Kan jeg vedlikeholde fasaden selv?",
    svar: "Ja, enklere vedlikehold som inspeksjon, vask og mindre malerarbeid på lavere vegger kan gjøres selv. Arbeid i høyden krever stillas og bør overlates til fagfolk. Aldri bruk høytrykkspyler på trekledning.",
  },
  {
    sporsmal: "Hva koster det å male huset utvendig?",
    svar: "Profesjonell utvendig maling koster typisk 300 til 800 kr per kvm inkludert forarbeid, maling og stillas. For en enebolig med 150 kvm fasade blir totalprisen mellom 45 000 og 120 000 kr.",
  },
  {
    sporsmal: "Når på året bør fasaden vedlikeholdes?",
    svar: "Maling bør gjøres fra april til oktober når temperaturen er over 5 grader og det er tørt. Fasadevask kan gjøres hele vårhalvåret. Inspeksjon bør gjøres hver høst etter stormsesong og hver vår etter vinteren.",
  },
  {
    sporsmal: "Hvordan vet jeg om fasaden trenger vedlikehold?",
    svar: "Se etter avflassing, misfarging, algevekst, sprekker i kledning eller fuger, løse bord, og fuktflekker. En enkel test er å presse tommelen mot kledningen. Hvis treet gir etter, har det begynt å råtne.",
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
              { navn: "Slik vedlikeholder du fasaden" },
            ]}
          />
        </div>

        <section className="hero-pattern">
          <div className="container-site py-10 sm:py-14 max-w-3xl">
            <div className="badge-brand mb-3">
              <Clock className="w-3 h-3" />7 min lesing
            </div>
            <h1 className="font-display font-extrabold text-display-xl text-neutral-900 mb-4 text-balance">
              Slik vedlikeholder du fasaden
            </h1>
            <p className="text-body-lg text-neutral-500">
              Regelmessig vedlikehold forlenger levetiden på kledningen med 10 til
              20 år og sparer deg for kostbare reparasjoner. Her er en komplett
              årsplan med alt du trenger å vite.
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
                De fleste tenker ikke på fasaden før problemene er synlige. Men
                da har skadene ofte fått utvikle seg i årevis under overflaten.
                Regelmessig vedlikehold er den billigste forsikringen mot store
                reparasjoner. Et malingsstrøk til 80 000 kr hvert tiende år er
                langt rimeligere enn et kledningsbytte til 300 000 kr fordi
                vedlikeholdet ble utsatt.
              </p>

              <h2 className="font-display font-bold text-heading-xl text-neutral-900 mt-10">
                Årsplan for fasadevedlikehold
              </h2>

              <p>
                Følg denne planen for å holde fasaden i toppstand. Tilpass
                intervallene etter klima og eksponering. Kystklima og sørvendte
                vegger trenger hyppigere tilsyn.
              </p>

              <div className="space-y-4 mt-6">
                {[
                  {
                    tid: "Hver vår (mars – april)",
                    tittel: "Inspeksjon etter vinteren",
                    oppgaver: [
                      "Gå rundt hele huset og se etter skader fra frost, storm og is",
                      "Sjekk kledning, vinduskarmer, beslag og takrenner",
                      "Se etter avflassing, sprekker, løse bord og fuktmerker",
                      "Dokumenter funn med bilder for sammenligning år til år",
                    ],
                  },
                  {
                    tid: "Vår (april – mai)",
                    tittel: "Fasadevask",
                    oppgaver: [
                      "Vask fasaden med egnet vaskemiddel og myk børste eller lavtrykkspyler",
                      "Fjern alger, mose og grønnbelegg, spesielt på nordvendte vegger",
                      "Rengjør takrenner og nedløp for løv og rusk",
                      "Aldri bruk høytrykkspyler direkte på trekledning",
                    ],
                  },
                  {
                    tid: "Sommer (mai – september)",
                    tittel: "Maling og reparasjoner",
                    oppgaver: [
                      "Utfør nødvendig maling, beis eller overflatebehandling",
                      "Bytt enkeltbord med råteskader",
                      "Reparer sprekker i fuger på murfasader",
                      "Temperaturen bør være over 10 grader og det bør være tørt i minst 24 timer etter maling",
                    ],
                  },
                  {
                    tid: "Høst (oktober – november)",
                    tittel: "Vinterforberedelser",
                    oppgaver: [
                      "Gjør en ny inspeksjonsrunde før vinteren",
                      "Sørg for at takrenner er rene og fungerer",
                      "Sjekk at beslag rundt vinduer og dører er tette",
                      "Fiks eventuelle skader før frost setter inn",
                    ],
                  },
                ].map((periode) => (
                  <div
                    key={periode.tid}
                    className="bg-neutral-50 border border-neutral-200 rounded-16 p-5"
                  >
                    <div className="badge-brand mb-2 text-xs">{periode.tid}</div>
                    <h3 className="font-display font-semibold text-heading-sm text-neutral-900 mb-3">
                      {periode.tittel}
                    </h3>
                    <div className="space-y-2">
                      {periode.oppgaver.map((oppgave, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2 text-body-sm text-neutral-600"
                        >
                          <CheckCircle className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" />
                          {oppgave}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="font-display font-bold text-heading-xl text-neutral-900 mt-10">
                Vedlikeholdskostnader per tjeneste
              </h2>

              <div className="overflow-x-auto mt-4">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-neutral-100 border-b-2 border-neutral-200">
                      <th className="text-left px-4 py-3 text-label text-neutral-600">
                        Vedlikeholdsoppgave
                      </th>
                      <th className="text-left px-4 py-3 text-label text-neutral-600">
                        Pris per kvm
                      </th>
                      <th className="text-left px-4 py-3 text-label text-neutral-600">
                        Intervall
                      </th>
                      <th className="text-left px-4 py-3 text-label text-neutral-600">
                        DIY mulig?
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        o: "Fasadevask",
                        p: "50 – 200 kr",
                        i: "Hvert 2 – 5 år",
                        d: "Ja (lav høyde)",
                      },
                      {
                        o: "Maling/beis",
                        p: "300 – 800 kr",
                        i: "Hvert 8 – 12 år",
                        d: "Delvis (stillas krevende)",
                      },
                      {
                        o: "Bytte enkeltbord",
                        p: "500 – 1 200 kr",
                        i: "Ved behov",
                        d: "Ja (enkle tilfeller)",
                      },
                      {
                        o: "Omfuging (mur)",
                        p: "400 – 1 200 kr",
                        i: "Hvert 20 – 30 år",
                        d: "Nei",
                      },
                      {
                        o: "Rens av takrenner",
                        p: "30 – 80 kr/lm",
                        i: "Årlig",
                        d: "Ja (forsiktig)",
                      },
                    ].map((r, i) => (
                      <tr
                        key={r.o}
                        className={`border-b border-neutral-100 ${i % 2 === 0 ? "bg-white" : "bg-neutral-50"}`}
                      >
                        <td className="px-4 py-3 font-semibold text-neutral-900">
                          {r.o}
                        </td>
                        <td className="px-4 py-3 font-display font-bold text-brand-500">
                          {r.p}
                        </td>
                        <td className="px-4 py-3 text-neutral-700">{r.i}</td>
                        <td className="px-4 py-3 text-neutral-500">{r.d}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="font-display font-bold text-heading-xl text-neutral-900 mt-10">
                Maling: Det viktigste vedlikeholdet for trefasader
              </h2>

              <p>
                Utvendig maling er det enkelttiltaket som har størst effekt på
                levetiden til en trefasade. Riktig utført maling beskytter
                treverket mot fukt, UV-stråler og temperatursvingninger.
                Forarbeidet er avgjørende. Skraping av løs maling, sliping,
                vasking og grunning utgjør ofte 60 til 70 prosent av
                arbeidstiden, men er det som avgjør hvor lenge malingen holder.
              </p>
              <p>
                Velg en kvalitetsmaling beregnet for utvendig bruk. Billig
                maling kan spare noen tusen kroner nå, men holder gjerne 3 til 5
                år kortere. Over tid er det dyrere fordi du må male oftere.
                Akrylbasert maling er mest brukt i dag og tørker raskere enn
                oljemaling, men oljemaling gir bedre inntrengning i treverket
                og er foretrukket av mange fagfolk for eldre hus.
              </p>

              <h2 className="font-display font-bold text-heading-xl text-neutral-900 mt-10">
                De vanligste feilene
              </h2>

              <div className="space-y-3 mt-4">
                {[
                  "Bruke høytrykkspyler på trekledning – presser vann inn i treverket og kan løsne fiber og maling",
                  "Male uten forarbeid – ny maling over gammel, flassende maling holder ikke",
                  "Ignorere takrenner – tette takrenner sender vann rett ned på fasaden og akselererer slitasje",
                  "Utsette reparasjoner – et lite hull i kledningen blir en stor fuktskade på ett år",
                  "Male i feil vær – temperaturen bør være over 10 grader, og det bør ikke regne innen 24 timer",
                ].map((feil, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 text-body-sm text-neutral-600 bg-red-50 border border-red-100 rounded-10 p-3"
                  >
                    <span className="text-red-500 font-bold flex-shrink-0">
                      ✕
                    </span>
                    {feil}
                  </div>
                ))}
              </div>

              <h2 className="font-display font-bold text-heading-xl text-neutral-900 mt-10">
                Når bør du kontakte fagfolk?
              </h2>

              <p>
                Enklere oppgaver som inspeksjon, vask av lave vegger og
                småflekking kan de fleste gjøre selv. Men noen situasjoner
                krever profesjonell hjelp: alt arbeid i høyden som krever stillas,
                vurdering av konstruksjonsskader bak kledningen, maling av hele
                huset (for et jevnt og holdbart resultat), reparasjon av
                murfasader og pussarbeid, og utbedring av fuktskader.
              </p>

              <p>
                En fagperson ser også ting du kan overse, som begynnende råte
                bak vinduskarmer, svikt i vindsperre, eller isolasjon som har
                satt seg og mistet effekten.
              </p>

              <div className="bg-brand-50 border border-brand-200 rounded-16 p-6 mt-8">
                <h3 className="font-display font-bold text-heading-md text-neutral-900 mb-2">
                  Tommelfingerregel for budsjett
                </h3>
                <p className="text-body-sm text-neutral-600">
                  Sett av 1 til 2 prosent av boligens verdi hvert år til
                  utvendig vedlikehold. For en bolig verdt 5 millioner betyr det
                  50 000 til 100 000 kr per år. Det dekker årlig inspeksjon, vask
                  hvert tredje år, og maling hvert tiende år.
                </p>
              </div>

              <h2 className="font-display font-bold text-heading-xl text-neutral-900 mt-10">
                Les mer
              </h2>

              <p>
                Er kledningen allerede skadet? Les{" "}
                <Link
                  href="/artikler/nar-bor-du-bytte-kledning"
                  className="text-brand-500 hover:text-brand-600 font-semibold"
                >
                  når du bør bytte kledning
                </Link>
                . Se også{" "}
                <Link
                  href="/priser"
                  className="text-brand-500 hover:text-brand-600 font-semibold"
                >
                  komplett prisoversikt for fasadearbeid
                </Link>{" "}
                og vår{" "}
                <Link
                  href="/tjenester/vaske-fasade"
                  className="text-brand-500 hover:text-brand-600 font-semibold"
                >
                  guide til profesjonell fasadevask
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
              tittel="Vanlige spørsmål om fasadevedlikehold"
            />
          </div>
        </section>

        <section className="section-py-sm">
          <div className="container-site">
            <div className="cta-block text-center relative z-10">
              <h2 className="font-display font-extrabold text-display-lg text-white mb-3">
                Trenger fasaden vedlikehold?
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

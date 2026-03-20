import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Personvernerklæring – Fasadeteknikk.no",
  description:
    "Les om hvordan Fasadeteknikk.no behandler personopplysninger. Informasjon om databehandling, rettigheter og kontaktinformasjon.",
  alternates: { canonical: "https://fasadeteknikk.no/personvern" },
};

export default function PersonvernSide() {
  return (
    <>
      <Header />
      <main>
        <div className="container-site pt-5 pb-2">
          <Breadcrumb items={[{ navn: "Personvern" }]} />
        </div>

        <section className="hero-pattern">
          <div className="container-site py-10 sm:py-14 max-w-3xl">
            <h1 className="font-display font-extrabold text-display-xl text-neutral-900 mb-4 text-balance">
              Personvernerklæring
            </h1>
            <p className="text-body-lg text-neutral-500">
              Sist oppdatert: mars 2026
            </p>
          </div>
        </section>

        <section className="section-white section-py-sm">
          <div className="container-site max-w-3xl">
            <div className="text-body-md text-neutral-600 leading-relaxed space-y-6">
              <h2 className="font-display font-bold text-heading-xl text-neutral-900">
                Hvem er ansvarlig?
              </h2>
              <p>
                Fasadeteknikk.no er en tjeneste levert av IT-Firma.no. IT-Firma
                er behandlingsansvarlig for personopplysninger som samles inn
                gjennom denne nettsiden.
              </p>
              <p>
                Kontaktinformasjon: <br />
                IT-Firma.no <br />
                E-post: kontakt@fasadeteknikk.no <br />
                Nettsted:{" "}
                <a
                  href="https://it-firma.no"
                  className="text-brand-500 hover:text-brand-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  it-firma.no
                </a>
              </p>

              <h2 className="font-display font-bold text-heading-xl text-neutral-900 mt-10">
                Hvilke opplysninger samler vi inn?
              </h2>
              <p>
                Når du fyller ut tilbudsskjemaet på Fasadeteknikk.no samler vi
                inn følgende opplysninger: navn, telefonnummer, postnummer, valgt
                tjeneste, og eventuell beskrivelse av prosjektet.
              </p>
              <p>
                Vi samler også inn anonymisert bruksdata gjennom Google Analytics
                for å forbedre nettsiden. Dette inkluderer informasjon om hvilke
                sider du besøker, hvor lenge du er på siden, og hvilken enhet du
                bruker. Denne informasjonen kan ikke knyttes til deg som person.
              </p>

              <h2 className="font-display font-bold text-heading-xl text-neutral-900 mt-10">
                Hvorfor samler vi inn opplysninger?
              </h2>
              <p>
                Vi behandler personopplysninger for følgende formål: å formidle
                din forespørsel til relevante fasadefirma i ditt område, å
                kontakte deg i forbindelse med tilbudet du har bedt om, og å
                forbedre tjenesten vår gjennom anonymisert statistikk.
              </p>
              <p>
                Behandlingsgrunnlaget er samtykke som du gir ved å krysse av i
                tilbudsskjemaet, i henhold til personvernforordningen (GDPR)
                artikkel 6 nr. 1 bokstav a.
              </p>

              <h2 className="font-display font-bold text-heading-xl text-neutral-900 mt-10">
                Hvem deler vi opplysninger med?
              </h2>
              <p>
                Opplysningene du oppgir i tilbudsskjemaet deles kun med
                kvalifiserte fasadefirma som er relevante for ditt prosjekt og
                ditt geografiske område. Vi selger aldri personopplysninger til
                tredjeparter for markedsføringsformål.
              </p>
              <p>
                Vi bruker følgende databehandlere: Vercel (hosting), Google
                Analytics (anonymisert statistikk).
              </p>

              <h2 className="font-display font-bold text-heading-xl text-neutral-900 mt-10">
                Hvor lenge lagrer vi opplysningene?
              </h2>
              <p>
                Personopplysninger fra tilbudsskjemaet lagres i inntil 12
                måneder etter at forespørselen er formidlet. Anonymisert
                statistikk lagres i inntil 26 måneder i henhold til Google
                Analytics standardinnstillinger.
              </p>

              <h2 className="font-display font-bold text-heading-xl text-neutral-900 mt-10">
                Dine rettigheter
              </h2>
              <p>
                Du har rett til innsyn i hvilke opplysninger vi har om deg, rett
                til å få opplysninger rettet eller slettet, rett til å trekke
                tilbake samtykke når som helst, og rett til å klage til
                Datatilsynet hvis du mener vi behandler opplysningene dine i
                strid med regelverket.
              </p>
              <p>
                For å utøve dine rettigheter, send en e-post til
                kontakt@fasadeteknikk.no. Vi svarer innen 30 dager.
              </p>

              <h2 className="font-display font-bold text-heading-xl text-neutral-900 mt-10">
                Informasjonskapsler (cookies)
              </h2>
              <p>
                Fasadeteknikk.no bruker informasjonskapsler for å sikre at
                nettsiden fungerer korrekt og for å samle anonymisert
                bruksstatistikk. Vi bruker nødvendige informasjonskapsler for
                nettsidens funksjonalitet og Google Analytics for statistikk (kan
                deaktiveres).
              </p>
              <p>
                Du kan når som helst endre innstillingene for
                informasjonskapsler i nettleseren din. Merk at deaktivering av
                nødvendige informasjonskapsler kan påvirke nettsidens
                funksjonalitet.
              </p>

              <h2 className="font-display font-bold text-heading-xl text-neutral-900 mt-10">
                Endringer i personvernerklæringen
              </h2>
              <p>
                Vi kan oppdatere denne personvernerklæringen ved behov. Vesentlige
                endringer vil bli varslet på nettsiden. Den til enhver tid
                gjeldende versjonen er tilgjengelig på denne siden.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

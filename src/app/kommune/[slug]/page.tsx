import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, MapPin, ArrowUpRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyMobileCTA from "@/components/layout/StickyMobileCTA";
import LeadForm from "@/components/forms/LeadForm";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FAQ from "@/components/ui/FAQ";
import { KOMMUNER, getKommune, getAllKommuneSlugs, getKommunerByFylke } from "@/data/geografi";
import { TJENESTER } from "@/data/tjenester";
import { formatPrisIntervall } from "@/lib/utils";

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  return getAllKommuneSlugs().map(slug => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const kommune = getKommune(params.slug);
  if (!kommune) return {};
  return {
    title: `${kommune.seoTitle} | Fasadeteknikk.no`,
    description: kommune.seoDesc,
    alternates: { canonical: `https://fasadeteknikk.no/kommune/${kommune.slug}` },
  };
}

export default function KommuneSide({ params }: Props) {
  const kommune = getKommune(params.slug);
  if (!kommune) notFound();

  const nabokommuner = getKommunerByFylke(kommune.fylkeSlug)
    .filter(k => k.slug !== kommune.slug)
    .slice(0, 8);

  const faqItems = [
    {
      sporsmal: `Hva koster fasadearbeid i ${kommune.navn}?`,
      svar: `Typiske priser i ${kommune.navn}: maling 300–800 kr/kvm, kledning 1 200–3 500 kr/kvm, etterisolering 800–2 500 kr/kvm og komplett rehabilitering 1 500–4 500 kr/kvm. Be om tilbud for eksakt pris.`,
    },
    {
      sporsmal: `Finnes det fasadefirma i ${kommune.navn}?`,
      svar: `Vi matcher deg med kvalifiserte fasadefirma som jobber i ${kommune.navn} og ${kommune.fylke}. Fyll ut skjemaet for å motta tilbud innen 24 timer.`,
    },
    {
      sporsmal: `Trenger jeg byggetillatelse i ${kommune.navn} for fasadearbeid?`,
      svar: `Vedlikehold med samme materiale krever vanligvis ikke søknad. Endring av fasadens utseende eller materialtype kan kreve byggemelding. Kontakt ${kommune.navn} kommune for avklaring.`,
    },
    {
      sporsmal: `Når er beste tid for fasadearbeid i ${kommune.navn}?`,
      svar: `Fra april til oktober er best. Temperaturen bør være over 5 grader og det bør ikke regne under arbeidet. Bestill gjerne i vintermånedene for bedre tilgjengelighet og priser.`,
    },
  ];

  return (
    <>
      <Header />
      <main>
        <div className="container-site pt-5 pb-2">
          <Breadcrumb
            items={[
              { navn: "Fylker", href: `/fylke/${kommune.fylkeSlug}` },
              { navn: kommune.fylke, href: `/fylke/${kommune.fylkeSlug}` },
              { navn: `Fasade ${kommune.navn}` },
            ]}
          />
        </div>

        <section className="hero-pattern" aria-labelledby="kommune-h">
          <div className="container-site py-10 sm:py-14">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div>
                <div className="badge-brand mb-3">
                  <MapPin className="w-3 h-3" />
                  {kommune.fylke}
                </div>
                <h1
                  id="kommune-h"
                  className="font-display font-extrabold text-display-xl text-neutral-900 mb-4 text-balance"
                >
                  Fasade i{" "}
                  <span className="text-brand-500">{kommune.navn}</span>
                </h1>
                <p className="text-body-lg text-neutral-500 mb-5">
                  {kommune.kortTekst} Finn kvalifiserte fasadefirma i {kommune.navn} for rehabilitering, kledning, maling, etterisolering og takarbeid. Gratis og uforpliktende tilbud.
                </p>
                <div className="flex flex-wrap gap-3 mb-5">
                  <div className="badge-neutral">
                    {kommune.innbyggere.toLocaleString("nb-NO")} innbyggere
                  </div>
                  <div className="badge-neutral">{kommune.fylke}</div>
                </div>
                <Link href="#tilbud" className="btn-primary">
                  Få gratis tilbud i {kommune.navn}{" "}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div id="tilbud">
                <LeadForm kilde={`kommune-${kommune.slug}`} />
              </div>
            </div>
          </div>
        </section>

        <section className="section-white section-py-sm">
          <div className="container-site">
            <h2 className="font-display font-bold text-heading-xl text-neutral-900 mb-2">
              Fasadetjenester i {kommune.navn}
            </h2>
            <p className="text-body-md text-neutral-500 mb-6">
              Vi formidler tilbud fra lokale fagfolk på alle typer fasadearbeid.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {TJENESTER.map(t => (
                <Link
                  key={t.slug}
                  href={`/tjenester/${t.slug}`}
                  className="card-flat p-4 group"
                >
                  <div className="font-display font-semibold text-sm text-neutral-900 group-hover:text-brand-500 mb-1">
                    {t.kortTittel}
                  </div>
                  <div className="text-xs text-neutral-400">
                    {formatPrisIntervall(t.prisMin, t.prisMax)} {t.prisenhet}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* SEO tekst for kommunen */}
        <section className="section-light section-py-sm">
          <div className="container-site max-w-3xl">
            <h2 className="font-display font-bold text-heading-xl text-neutral-900 mb-5">
              Fasadearbeid i {kommune.navn} – hva du bør vite
            </h2>
            <div className="text-body-md text-neutral-600 leading-relaxed space-y-4">
              <p>
                Å oppgradere fasaden i {kommune.navn} er en investering som beskytter boligen og øker verdien. Enten du trenger enkel maling, ny kledning eller komplett rehabilitering, er det viktig å velge riktig firma for jobben.
              </p>
              <p>
                I {kommune.navn}, som i resten av {kommune.fylke}, varierer prisene avhengig av tilstand, materialvalg og tilgjengelighet. Det lønner seg alltid å innhente minst tre tilbud og sammenligne disse nøye.
              </p>
              <p>
                Klimaet i {kommune.fylke} stiller spesifikke krav til materialvalg. Et lokalt firma kjenner forholdene og kan anbefale de beste løsningene for nettopp din bolig.
              </p>
              <p>
                Fasadeteknikk.no kobler deg med kvalifiserte fagfolk i {kommune.navn}-området. Alle firma vi samarbeider med er seriøse aktører med erfaring fra regionen.
              </p>
            </div>
          </div>
        </section>

        <section className="section-white section-py-sm">
          <div className="container-site max-w-3xl">
            <FAQ
              items={faqItems}
              tittel={`Vanlige spørsmål om fasade i ${kommune.navn}`}
            />
          </div>
        </section>

        {nabokommuner.length > 0 && (
          <section className="section-light section-py-sm">
            <div className="container-site">
              <h2 className="font-display font-bold text-heading-xl text-neutral-900 mb-4">
                Andre kommuner i {kommune.fylke}
              </h2>
              <div className="flex flex-wrap gap-2">
                {nabokommuner.map(k => (
                  <Link
                    key={k.slug}
                    href={`/kommune/${k.slug}`}
                    className="badge-neutral hover:bg-brand-50 hover:text-brand-500 hover:border-brand-200 transition-colors"
                  >
                    {k.navn}
                  </Link>
                ))}
                <Link
                  href={`/fylke/${kommune.fylkeSlug}`}
                  className="badge-brand"
                >
                  Se alle i {kommune.fylke}
                </Link>
              </div>
            </div>
          </section>
        )}

        <section className="section-py-sm">
          <div className="container-site">
            <div className="cta-block text-center relative z-10">
              <h2 className="font-display font-extrabold text-display-lg text-white mb-3">
                Finn fasadefirma i {kommune.navn}
              </h2>
              <p className="text-base text-neutral-500 mb-6">
                Gratis og uforpliktende tilbud fra lokale fagfolk.
              </p>
              <Link href="#tilbud" className="btn-primary">
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

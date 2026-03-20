import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, MapPin, ArrowUpRight, Building2 } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyMobileCTA from "@/components/layout/StickyMobileCTA";
import LeadForm from "@/components/forms/LeadForm";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FAQ from "@/components/ui/FAQ";
import FirmaCatalog from "@/components/ui/FirmaCatalog";
import {
  FYLKER,
  getFylke,
  getAllFylkeSlugs,
  getKommunerByFylke,
} from "@/data/geografi";
import { TJENESTER } from "@/data/tjenester";
import { getFirmaByFylke, hasFylkeFirmaData } from "@/data/firma";
import { formatPrisIntervall } from "@/lib/utils";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllFylkeSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const fylke = getFylke(params.slug);
  if (!fylke) return {};
  return {
    title: fylke.seoTitle,
    description: fylke.seoDesc,
    alternates: {
      canonical: `https://fasadeteknikk.no/fylke/${fylke.slug}`,
    },
  };
}

export default function FylkeSide({ params }: Props) {
  const fylke = getFylke(params.slug);
  if (!fylke) notFound();

  const kommuner = getKommunerByFylke(fylke.slug);
  const andreFylker = FYLKER.filter((f) => f.slug !== fylke.slug).slice(0, 8);

  const firma = getFirmaByFylke(fylke.slug);
  const harFirma = firma.length > 0;

  const faqItems = [
    {
      sporsmal: `Hva koster fasadearbeid i ${fylke.navn}?`,
      svar: `Prisene i ${fylke.navn} følger nasjonale priser. Maling koster 300–800 kr per kvm, kledning 1 200–3 500 kr per kvm, og komplett rehabilitering 1 500–4 500 kr per kvm.`,
    },
    {
      sporsmal: `Hvor mange fasadefirma finnes i ${fylke.navn}?`,
      svar: harFirma
        ? `Det er ${firma.length} registrerte firma innen fasade, maling, murer og byggearbeid i ${fylke.navn} ifølge Brønnøysundregistrene.`
        : `${fylke.navn} har et godt tilbud av kvalifiserte fasadefirma. Vi kobler deg med firma i ditt nærområde.`,
    },
    {
      sporsmal: `Trenger jeg byggetillatelse for fasadearbeid i ${fylke.navn}?`,
      svar: `Vanlig vedlikehold som maling og reparasjon krever normalt ikke søknad. Endring av fasadens utseende eller materialer kan kreve byggemelding til din kommune.`,
    },
    {
      sporsmal: `Kan jeg få Enova-støtte til etterisolering i ${fylke.navn}?`,
      svar: `Ja, Enova-støtte gjelder i hele Norge. Du kan få inntil 20% dekket for etterisolering av yttervegger. Sjekk enova.no for gjeldende satser.`,
    },
  ];

  return (
    <>
      <Header />
      <main>
        <div className="container-site pt-5 pb-2">
          <Breadcrumb
            items={[
              { navn: "Fylker", href: "/fylke" },
              { navn: `Fasade ${fylke.navn}` },
            ]}
          />
        </div>

        {/* Hero */}
        <section className="hero-pattern" aria-labelledby="fylke-h">
          <div className="container-site py-10 sm:py-14">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div>
                <div className="badge-brand mb-3">
                  <MapPin className="w-3 h-3" />
                  Fylke
                </div>
                <h1
                  id="fylke-h"
                  className="font-display font-extrabold text-display-xl text-neutral-900 mb-4 text-balance"
                >
                  Fasade i{" "}
                  <span className="text-brand-500">{fylke.navn}</span>
                </h1>
                <p className="text-body-lg text-neutral-500 mb-5">
                  {fylke.langTekst}
                </p>
                <div className="flex flex-wrap gap-3 mb-5">
                  <div className="badge-neutral">
                    {fylke.innbyggere.toLocaleString("nb-NO")} innbyggere
                  </div>
                  {kommuner.length > 0 && (
                    <div className="badge-neutral">
                      {kommuner.length} kommuner
                    </div>
                  )}
                  {harFirma && (
                    <div className="badge-brand">
                      <Building2 className="w-3 h-3" />
                      {firma.length} firma
                    </div>
                  )}
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link href="#tilbud" className="btn-primary">
                    Få gratis tilbud i {fylke.navn}{" "}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  {harFirma && (
                    <Link href="#firma" className="btn-secondary">
                      Se alle firma <Building2 className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </div>
              <div id="tilbud">
                <LeadForm kilde={`fylke-${fylke.slug}`} />
              </div>
            </div>
          </div>
        </section>

        {/* Firma catalog */}
        {harFirma && (
          <section
            id="firma"
            className="section-white section-py-sm"
            aria-labelledby="firma-h"
          >
            <div className="container-site">
              <FirmaCatalog firma={firma} kommuneNavn={fylke.navn} />
            </div>
          </section>
        )}

        {/* Kommuner */}
        {kommuner.length > 0 && (
          <section className="section-light section-py-sm">
            <div className="container-site">
              <h2 className="font-display font-bold text-heading-xl text-neutral-900 mb-5">
                Kommuner i {fylke.navn}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {kommuner.map((kommune) => (
                  <Link
                    key={kommune.slug}
                    href={`/kommune/${kommune.slug}`}
                    className="card-flat px-4 py-3 group flex items-center justify-between"
                  >
                    <div>
                      <div className="font-display font-semibold text-sm text-neutral-800 group-hover:text-brand-500 transition-colors">
                        {kommune.navn}
                      </div>
                      <div className="text-xs text-neutral-400 mt-0.5">
                        {kommune.innbyggere.toLocaleString("nb-NO")} innb.
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-neutral-300 group-hover:text-brand-500 transition-colors" />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Tjenester */}
        <section className="section-white section-py-sm">
          <div className="container-site">
            <h2 className="font-display font-bold text-heading-xl text-neutral-900 mb-5">
              Tjenester i {fylke.navn}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {TJENESTER.map((t) => (
                <Link
                  key={t.slug}
                  href={`/tjenester/${t.slug}`}
                  className="card-flat p-4 group"
                >
                  <div className="font-display font-semibold text-body-sm text-neutral-900 group-hover:text-brand-500 mb-1">
                    {t.kortTittel}
                  </div>
                  <div className="text-caption text-neutral-400">
                    {formatPrisIntervall(t.prisMin, t.prisMax)} {t.prisenhet}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-light section-py-sm">
          <div className="container-site max-w-3xl">
            <FAQ
              items={faqItems}
              tittel={`Vanlige spørsmål om fasade i ${fylke.navn}`}
            />
          </div>
        </section>

        {/* Andre fylker */}
        <section className="section-white section-py-sm">
          <div className="container-site">
            <h2 className="font-display font-bold text-heading-xl text-neutral-900 mb-4">
              Fasade i andre fylker
            </h2>
            <div className="flex flex-wrap gap-2">
              {andreFylker.map((f) => (
                <Link
                  key={f.slug}
                  href={`/fylke/${f.slug}`}
                  className="badge-neutral hover:bg-brand-50 hover:text-brand-500 hover:border-brand-200 transition-colors"
                >
                  {f.navn}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-py-sm">
          <div className="container-site">
            <div className="cta-block text-center relative z-10">
              <h2 className="font-display font-extrabold text-display-lg text-white mb-3">
                Finn fasadefirma i {fylke.navn}
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

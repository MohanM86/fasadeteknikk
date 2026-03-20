import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  ArrowUpRight,
  Building2,
  CheckCircle,
  AlertTriangle,
  ChevronRight,
} from "lucide-react";
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
import { getFylkeContent } from "@/data/fylke-content";
import type { FylkeContent } from "@/data/fylke-content";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllFylkeSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const fylke = getFylke(params.slug);
  if (!fylke) return {};
  const content = getFylkeContent(params.slug);
  return {
    title: content?.seoTitle ?? fylke.seoTitle,
    description: content?.seoDesc ?? fylke.seoDesc,
    alternates: {
      canonical: `https://fasadeteknikk.no/fylke/${fylke.slug}`,
    },
    openGraph: content
      ? {
          title: content.ogTitle,
          description: content.ogDesc,
          type: "website",
          url: `https://fasadeteknikk.no/fylke/${fylke.slug}`,
          images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: content.ogTitle }],
        }
      : undefined,
  };
}

function buildLocalBusinessSchema(fylkeNavn: string, slug: string, firmaCount: number, content: FylkeContent) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `Fasadeteknikk ${fylkeNavn}`,
    description: content.seoDesc,
    url: `https://fasadeteknikk.no/fylke/${slug}`,
    areaServed: { "@type": "City", name: fylkeNavn, containedInPlace: { "@type": "AdministrativeArea", name: fylkeNavn } },
    serviceType: content.schemaServiceTypes,
    parentOrganization: { "@type": "Organization", name: "IT-Firma.no", url: "https://it-firma.no" },
    geo: { "@type": "GeoCoordinates", latitude: content.schemaGeo.lat, longitude: content.schemaGeo.lng },
    address: { "@type": "PostalAddress", addressLocality: fylkeNavn, addressCountry: "NO" },
  };
}

function buildFAQSchemaLocal(faq: { sporsmal: string; svar: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question", name: item.sporsmal,
      acceptedAnswer: { "@type": "Answer", text: item.svar },
    })),
  };
}

export default function FylkeSide({ params }: Props) {
  const fylke = getFylke(params.slug);
  if (!fylke) notFound();

  const kommuner = getKommunerByFylke(fylke.slug);
  const andreFylker = FYLKER.filter((f) => f.slug !== fylke.slug).slice(0, 8);
  const firma = getFirmaByFylke(fylke.slug);
  const harFirma = firma.length > 0;
  const content = getFylkeContent(params.slug);

  const fallbackFaq = [
    { sporsmal: `Hva koster fasadearbeid i ${fylke.navn}?`, svar: `Prisene i ${fylke.navn} følger nasjonale priser. Maling koster 300\u2013800 kr per kvm, kledning 1 200\u20133 500 kr per kvm, og komplett rehabilitering 1 500\u20134 500 kr per kvm.` },
    { sporsmal: `Hvor mange fasadefirma finnes i ${fylke.navn}?`, svar: harFirma ? `Det er ${firma.length} registrerte firma innen fasade, maling, murer og byggearbeid i ${fylke.navn} iflg. Br\u00f8nn\u00f8ysundregistrene.` : `${fylke.navn} har et godt tilbud av kvalifiserte fasadefirma. Vi kobler deg med firma i ditt n\u00e6romr\u00e5de.` },
    { sporsmal: `Trenger jeg byggetillatelse for fasadearbeid i ${fylke.navn}?`, svar: `Vanlig vedlikehold som maling og reparasjon krever normalt ikke s\u00f8knad. Endring av fasadens utseende eller materialer kan kreve byggemelding til din kommune.` },
    { sporsmal: `Kan jeg f\u00e5 Enova-st\u00f8tte til etterisolering i ${fylke.navn}?`, svar: `Ja, Enova-st\u00f8tte gjelder i hele Norge. Sjekk enova.no for gjeldende satser og vilk\u00e5r.` },
  ];

  const faqItems = content?.faq ?? fallbackFaq;

  return (
    <>
      {content && (
        <>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildLocalBusinessSchema(fylke.navn, fylke.slug, firma.length, content)) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFAQSchemaLocal(faqItems)) }} />
        </>
      )}

      <Header />
      <main>
        <div className="container-site pt-5 pb-2">
          <Breadcrumb items={[{ navn: "Fylker", href: "/fylke" }, { navn: `Fasadeteknikk ${fylke.navn}` }]} />
        </div>

        {/* HERO */}
        <section className="hero-pattern" aria-labelledby="fylke-h">
          <div className="container-site py-10 sm:py-14">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div>
                <div className="badge-brand mb-3"><MapPin className="w-3 h-3" />Fylke</div>
                <h1 id="fylke-h" className="font-display font-extrabold text-display-xl text-neutral-900 mb-4 text-balance">
                  Fasadeteknikk i <span className="text-brand-500">{fylke.navn}</span>
                </h1>
                <p className="text-body-lg text-neutral-500 mb-5">{content?.heroIntro ?? fylke.langTekst}</p>
                <div className="flex flex-wrap gap-3 mb-5">
                  <div className="badge-neutral">{fylke.innbyggere.toLocaleString("nb-NO")} innbyggere</div>
                  {kommuner.length > 0 && <div className="badge-neutral">{kommuner.length} {kommuner.length === 1 ? "kommune" : "kommuner"}</div>}
                  {harFirma && <div className="badge-brand"><Building2 className="w-3 h-3" />{firma.length} firma</div>}
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link href="#tilbud" className="btn-primary">F&aring; gratis tilbud i {fylke.navn} <ArrowRight className="w-4 h-4" /></Link>
                  {harFirma && <Link href="#firma" className="btn-secondary">Se alle firma <Building2 className="w-4 h-4" /></Link>}
                </div>
              </div>
              <div id="tilbud"><LeadForm kilde={`fylke-${fylke.slug}`} /></div>
            </div>
          </div>
        </section>

        {/* DYPT SEO-INNHOLD */}
        {content && (
          <>
            <section className="section-white section-py-sm">
              <div className="container-site max-w-3xl">
                <h2 className="font-display font-bold text-heading-xl text-neutral-900 mb-5">{content.hvaErFasadeteknikk.overskrift}</h2>
                <div className="text-body-md text-neutral-600 leading-relaxed space-y-4">
                  {content.hvaErFasadeteknikk.avsnitt.map((a, i) => <p key={i}>{a}</p>)}
                </div>
              </div>
            </section>

            <section className="section-light section-py-sm">
              <div className="container-site max-w-3xl">
                <h2 className="font-display font-bold text-heading-xl text-neutral-900 mb-6">{content.narTrengerMan.overskrift}</h2>
                <div className="space-y-6">
                  {content.narTrengerMan.punkter.map((p, i) => (
                    <div key={i}>
                      <h3 className="font-display font-semibold text-heading-sm text-neutral-900 mb-2">{p.tittel}</h3>
                      <p className="text-body-md text-neutral-600 leading-relaxed">{p.tekst}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="section-white section-py-sm" id="priser">
              <div className="container-site max-w-4xl">
                <h2 className="font-display font-bold text-heading-xl text-neutral-900 mb-4">{content.priser.overskrift}</h2>
                <p className="text-body-md text-neutral-600 mb-6">{content.priser.intro}</p>
                <div className="overflow-x-auto mb-8">
                  <table className="w-full border-collapse">
                    <thead><tr className="bg-neutral-100 border-b-2 border-neutral-200">
                      <th className="text-left px-4 py-3 text-label text-neutral-600">Tjeneste</th>
                      <th className="text-left px-4 py-3 text-label text-neutral-600">Pris per m&sup2;</th>
                      <th className="text-left px-4 py-3 text-label text-neutral-600 hidden sm:table-cell">Totalprosjekt</th>
                      <th className="text-left px-4 py-3 text-label text-neutral-600 hidden md:table-cell">Merknad</th>
                    </tr></thead>
                    <tbody>
                      {content.priser.tabell.map((r, i) => (
                        <tr key={i} className={`border-b border-neutral-100 ${i % 2 === 0 ? "bg-white" : "bg-neutral-50"}`}>
                          <td className="px-4 py-3.5 font-semibold text-neutral-900 text-sm">{r.tjeneste}</td>
                          <td className="px-4 py-3.5 font-display font-bold text-brand-600 text-sm">{r.prisPerKvm}</td>
                          <td className="px-4 py-3.5 text-neutral-700 text-sm hidden sm:table-cell">{r.totalprosjekt}</td>
                          <td className="px-4 py-3.5 text-neutral-400 text-xs hidden md:table-cell">{r.merknad}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <h3 className="font-display font-semibold text-heading-sm text-neutral-900 mb-3">Faktorer som p&aring;virker prisen i {fylke.navn}</h3>
                <div className="text-body-md text-neutral-600 leading-relaxed space-y-3">
                  {content.priser.faktorer.map((f, i) => <p key={i}>{f}</p>)}
                </div>
              </div>
            </section>

            <section className="section-light section-py-sm">
              <div className="container-site max-w-3xl">
                <h2 className="font-display font-bold text-heading-xl text-neutral-900 mb-6">{content.fasadetyper.overskrift}</h2>
                <div className="space-y-6">
                  {content.fasadetyper.typer.map((t, i) => (
                    <div key={i}>
                      <h3 className="font-display font-semibold text-heading-sm text-neutral-900 mb-2">{t.tittel}</h3>
                      <p className="text-body-md text-neutral-600 leading-relaxed">{t.tekst}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="section-white section-py-sm">
              <div className="container-site max-w-3xl">
                <h2 className="font-display font-bold text-heading-xl text-neutral-900 mb-6">{content.vanligeProblemer.overskrift}</h2>
                <div className="space-y-5">
                  {content.vanligeProblemer.problemer.map((p, i) => (
                    <div key={i} className="flex gap-4">
                      <AlertTriangle className="w-5 h-5 text-brand-500 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-display font-semibold text-heading-sm text-neutral-900 mb-1">{p.tittel}</h3>
                        <p className="text-body-md text-neutral-600 leading-relaxed">{p.tekst}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="section-light section-py-sm">
              <div className="container-site max-w-3xl">
                <h2 className="font-display font-bold text-heading-xl text-neutral-900 mb-5">{content.velgeFirma.overskrift}</h2>
                <div className="space-y-3 mb-8">
                  {content.velgeFirma.tips.map((tip, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
                      <p className="text-body-md text-neutral-600 leading-relaxed">{tip}</p>
                    </div>
                  ))}
                </div>
                <h3 className="font-display font-semibold text-heading-sm text-neutral-900 mb-3">Vanlige feil &aring; unng&aring;</h3>
                <div className="space-y-2">
                  {content.velgeFirma.feil.map((feil, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-neutral-400 flex-shrink-0 mt-0.5 text-sm">&times;</span>
                      <p className="text-body-sm text-neutral-500">{feil}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="section-white section-py-sm">
              <div className="container-site max-w-3xl">
                <h2 className="font-display font-bold text-heading-xl text-neutral-900 mb-4">{content.firmaOversikt.overskrift}</h2>
                <p className="text-body-md text-neutral-600 mb-6">{content.firmaOversikt.intro}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {content.firmaOversikt.kategorier.map((kat, i) => (
                    <div key={i} className="card-flat p-5">
                      <div className="flex items-baseline justify-between mb-2">
                        <h3 className="font-display font-semibold text-sm text-neutral-900">{kat.kategori}</h3>
                        <span className="font-display font-bold text-brand-500 text-lg">{kat.antall}</span>
                      </div>
                      <p className="text-body-sm text-neutral-500 leading-relaxed">{kat.beskrivelse}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        {/* FIRMAKATALOG */}
        {harFirma && (
          <section id="firma" className={content ? "section-light section-py-sm" : "section-white section-py-sm"} aria-labelledby="firma-h">
            <div className="container-site"><FirmaCatalog firma={firma} kommuneNavn={fylke.navn} /></div>
          </section>
        )}

        {/* KOMMUNER */}
        {kommuner.length > 0 && (
          <section className="section-white section-py-sm">
            <div className="container-site">
              <h2 className="font-display font-bold text-heading-xl text-neutral-900 mb-5">Kommuner i {fylke.navn}</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {kommuner.map((k) => (
                  <Link key={k.slug} href={`/kommune/${k.slug}`} className="card-flat px-4 py-3 group flex items-center justify-between">
                    <div>
                      <div className="font-display font-semibold text-sm text-neutral-800 group-hover:text-brand-500 transition-colors">{k.navn}</div>
                      <div className="text-xs text-neutral-400 mt-0.5">{k.innbyggere.toLocaleString("nb-NO")} innb.</div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-neutral-300 group-hover:text-brand-500 transition-colors" />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* TJENESTER */}
        <section className={content ? "section-light section-py-sm" : "section-white section-py-sm"}>
          <div className="container-site">
            <h2 className="font-display font-bold text-heading-xl text-neutral-900 mb-5">Tjenester i {fylke.navn}</h2>
            <div className={`grid grid-cols-1 sm:grid-cols-2 ${content ? "lg:grid-cols-4" : "lg:grid-cols-3"} gap-3`}>
              {TJENESTER.map((t) => (
                <Link key={t.slug} href={`/tjenester/${t.slug}`} className="card-flat p-4 group">
                  <div className="font-display font-semibold text-sm text-neutral-900 group-hover:text-brand-500 mb-1 transition-colors">{t.kortTittel}</div>
                  <div className="text-xs text-neutral-400">{formatPrisIntervall(t.prisMin, t.prisMax)} {t.prisenhet}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-white section-py-sm">
          <div className="container-site max-w-3xl">
            <FAQ items={faqItems} tittel={`Vanlige sp\u00f8rsm\u00e5l om fasadeteknikk i ${fylke.navn}`} />
          </div>
        </section>

        {/* NABO-OMRADER */}
        {content && content.naboOmrader.length > 0 && (
          <section className="section-light section-py-sm">
            <div className="container-site">
              <h2 className="font-display font-bold text-heading-xl text-neutral-900 mb-5">Andre steder i n&aelig;rheten</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {content.naboOmrader.map((nabo) => (
                  <Link key={nabo.href} href={nabo.href} className="card-flat p-4 group">
                    <div className="font-display font-semibold text-sm text-neutral-900 group-hover:text-brand-500 transition-colors mb-1">{nabo.navn}</div>
                    <div className="text-xs text-neutral-400">{nabo.beskrivelse}</div>
                  </Link>
                ))}
              </div>
              <div className="mt-4">
                <Link href="/fylke" className="text-label text-brand-500 hover:text-brand-600 flex items-center gap-1">Se alle fylker og kommuner <ChevronRight className="w-3.5 h-3.5" /></Link>
              </div>
            </div>
          </section>
        )}

        {/* ANDRE FYLKER */}
        <section className="section-white section-py-sm">
          <div className="container-site">
            <h2 className="font-display font-bold text-heading-xl text-neutral-900 mb-4">Fasade i andre fylker</h2>
            <div className="flex flex-wrap gap-2">
              {andreFylker.map((f) => (
                <Link key={f.slug} href={`/fylke/${f.slug}`} className="badge-neutral hover:bg-brand-50 hover:text-brand-500 hover:border-brand-200 transition-colors">{f.navn}</Link>
              ))}
              <Link href="/fylke" className="badge-brand">Alle 15 fylker</Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-py-sm">
          <div className="container-site">
            <div className="cta-block text-center relative z-10">
              <h2 className="font-display font-extrabold text-display-lg text-white mb-3">Finn fasadefirma i {fylke.navn}</h2>
              <p className="text-base text-neutral-500 mb-6">Gratis og uforpliktende tilbud fra lokale fagfolk.</p>
              <Link href="#tilbud" className="btn-primary">F&aring; gratis tilbud <ArrowRight className="w-4 h-4" /></Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}

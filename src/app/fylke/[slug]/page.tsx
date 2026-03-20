import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowRight, MapPin, ArrowUpRight, Building2, CheckCircle,
  Paintbrush, Layers, Thermometer, Droplets, Wrench,
  BrickWall, TreePine, Building, Blocks, Glasses,
  Snowflake, CloudRain, Leaf, Mountain, Sparkles,
  AlertTriangle, DollarSign,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyMobileCTA from "@/components/layout/StickyMobileCTA";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FAQ from "@/components/ui/FAQ";
import FirmaCatalog from "@/components/ui/FirmaCatalog";
import SidebarNav from "@/components/ui/SidebarNav";
import AnimatedStat from "@/components/ui/AnimatedStat";
import FactBox from "@/components/ui/FactBox";
import CalloutBox from "@/components/ui/CalloutBox";
import ProblemCard from "@/components/ui/ProblemCard";
import PriceBar from "@/components/ui/PriceBar";
import MarketDonut from "@/components/ui/MarketDonut";
import ServiceCard from "@/components/ui/ServiceCard";
import MultiStepLeadForm from "@/components/forms/MultiStepLeadForm";
import {
  FYLKER, getFylke, getAllFylkeSlugs, getKommunerByFylke,
} from "@/data/geografi";
import { TJENESTER } from "@/data/tjenester";
import { getFirmaByFylke } from "@/data/firma";
import { formatPrisIntervall } from "@/lib/utils";
import { getFylkeContent } from "@/data/fylke-content";
import type { FylkeContent } from "@/data/fylke-content";

interface Props { params: { slug: string } }

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
    alternates: { canonical: `https://fasadeteknikk.no/fylke/${fylke.slug}` },
    openGraph: content ? {
      title: content.ogTitle, description: content.ogDesc, type: "website",
      url: `https://fasadeteknikk.no/fylke/${fylke.slug}`,
      images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: content.ogTitle }],
    } : undefined,
  };
}

function buildSchemas(fylkeNavn: string, slug: string, content: FylkeContent, faq: { sporsmal: string; svar: string }[]) {
  const localBiz = {
    "@context": "https://schema.org", "@type": "ProfessionalService",
    name: `Fasadeteknikk ${fylkeNavn}`, description: content.seoDesc,
    url: `https://fasadeteknikk.no/fylke/${slug}`,
    areaServed: { "@type": "City", name: fylkeNavn },
    serviceType: content.schemaServiceTypes,
    parentOrganization: { "@type": "Organization", name: "IT-Firma.no", url: "https://it-firma.no" },
    geo: { "@type": "GeoCoordinates", latitude: content.schemaGeo.lat, longitude: content.schemaGeo.lng },
  };
  const faqSchema = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question", name: item.sporsmal,
      acceptedAnswer: { "@type": "Answer", text: item.svar },
    })),
  };
  return { localBiz, faqSchema };
}

/* ===================================================================
   RICH PAGE (with content)
   =================================================================== */
function RichFylkePage({ fylke, content, firma, kommuner, andreFylker }: {
  fylke: ReturnType<typeof getFylke> & {};
  content: FylkeContent;
  firma: any[];
  kommuner: any[];
  andreFylker: any[];
}) {
  const schemas = buildSchemas(fylke.navn, fylke.slug, content, content.faq);

  const PROBLEM_ICONS = [
    <Snowflake key="0" className="w-5 h-5" />,
    <CloudRain key="1" className="w-5 h-5" />,
    <Leaf key="2" className="w-5 h-5" />,
    <Mountain key="3" className="w-5 h-5" />,
    <Sparkles key="4" className="w-5 h-5" />,
  ];
  const PROBLEM_SEVERITIES = ["kritisk", "alvorlig", "moderat", "obs", "vanlig"] as const;

  const FASADETYPE_ICONS = [
    <BrickWall key="0" className="w-5 h-5" />,
    <TreePine key="1" className="w-5 h-5" />,
    <Building key="2" className="w-5 h-5" />,
    <Blocks key="3" className="w-5 h-5" />,
    <Glasses key="4" className="w-5 h-5" />,
  ];

  const PRICE_ICONS = [
    <Paintbrush key="0" className="w-4 h-4" />,
    <Droplets key="1" className="w-4 h-4" />,
    <Layers key="2" className="w-4 h-4" />,
    <Thermometer key="3" className="w-4 h-4" />,
    <Wrench key="4" className="w-4 h-4" />,
    <BrickWall key="5" className="w-4 h-4" />,
    <Building key="6" className="w-4 h-4" />,
  ];

  const DONUT_COLORS = ["#FF6B00", "#FFB970", "#333333", "#999999", "#E5E5E5"];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.localBiz) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faqSchema) }} />
      <Header />
      <main>
        <div className="container-site pt-5 pb-2">
          <Breadcrumb items={[{ navn: "Fylker", href: "/fylke" }, { navn: `Fasadeteknikk ${fylke.navn}` }]} />
        </div>

        {/* HERO */}
        <section className="hero-pattern" id="oversikt">
          <div className="container-site py-10 sm:py-14">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div>
                <div className="badge-brand mb-3"><MapPin className="w-3 h-3" />{fylke.navn}</div>
                <h1 className="font-display font-extrabold text-display-xl text-neutral-900 mb-4 text-balance">
                  Fasadeteknikk i <span className="text-brand-500">{fylke.navn}</span>
                </h1>
                <p className="text-body-lg text-neutral-500 mb-5">{content.heroIntro}</p>
                <div className="flex flex-wrap gap-3 mb-5">
                  <div className="badge-neutral">{fylke.innbyggere.toLocaleString("nb-NO")} innbyggere</div>
                  <div className="badge-brand"><Building2 className="w-3 h-3" />{firma.length} firma</div>
                </div>
                <div className="flex flex-wrap gap-3 mb-4">
                  <Link href="#tilbud" className="btn-primary">Få gratis tilbud <ArrowRight className="w-4 h-4" /></Link>
                  <Link href="#firma" className="btn-secondary">Se alle firma <Building2 className="w-4 h-4" /></Link>
                </div>
                <div className="flex items-center gap-5 text-xs text-neutral-400">
                  <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-green-500" />Gratis tilbud</span>
                  <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-green-500" />Svar innen 24t</span>
                  <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-green-500" />Uforpliktende</span>
                </div>
              </div>
              <div id="tilbud"><MultiStepLeadForm kilde={`fylke-${fylke.slug}`} /></div>
            </div>
          </div>
        </section>

        {/* ANIMATED STATS BAR */}
        <section className="section-dark py-10">
          <div className="container-site">
            <div className="grid grid-cols-3 gap-6">
              <AnimatedStat value={firma.length} label="Lokale bedrifter" />
              <AnimatedStat value={6562} label="Totalt i Norge" />
              <AnimatedStat value={kommuner.length} suffix={kommuner.length === 1 ? "" : ""} label={kommuner.length === 1 ? "Kommune" : "Kommuner"} />
            </div>
          </div>
        </section>

        {/* MAIN CONTENT WITH SIDEBAR */}
        <div className="container-site py-10 flex gap-10">
          <SidebarNav />

          <div className="flex-1 min-w-0 space-y-16">

            {/* Hva er fasadeteknikk */}
            <section id="oversikt-innhold">
              <h2 className="font-display font-bold text-heading-xl text-neutral-900 mb-5">
                {content.hvaErFasadeteknikk.overskrift}
              </h2>
              <div className="text-body-md text-neutral-600 leading-relaxed space-y-4">
                {content.hvaErFasadeteknikk.avsnitt.slice(0, 2).map((a, i) => <p key={i}>{a}</p>)}
              </div>
              <div className="mt-5">
                <FactBox>
                  {fylke.navn} har {firma.length} registrerte firma innen fasade, maling, murer og byggearbeid ifølge Brønnøysundregistrene. Med høy konkurranse får du som forbruker gode muligheter til å sammenligne pris og kvalitet.
                </FactBox>
              </div>
              {content.hvaErFasadeteknikk.avsnitt.slice(2).map((a, i) => (
                <p key={i} className="text-body-md text-neutral-600 leading-relaxed mt-4">{a}</p>
              ))}
            </section>

            {/* Tjenester grid */}
            <section>
              <h2 className="font-display font-bold text-heading-xl text-neutral-900 mb-2">
                Fasadetjenester i {fylke.navn}
              </h2>
              <p className="text-body-sm text-neutral-500 mb-5">Klikk på en tjeneste for å se mer informasjon og bestille tilbud.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {TJENESTER.map((t) => (
                  <ServiceCard
                    key={t.slug}
                    icon={<Wrench className="w-5 h-5" />}
                    title={t.kortTittel}
                    description={t.kortBeskrivelse}
                    priceRange={formatPrisIntervall(t.prisMin, t.prisMax)}
                    priceUnit={`kr ${t.prisenhet}`}
                    href={`/tjenester/${t.slug}`}
                  />
                ))}
              </div>
            </section>

            {/* Fasadetyper */}
            <section id="fasadetyper">
              <h2 className="font-display font-bold text-heading-xl text-neutral-900 mb-6">
                {content.fasadetyper.overskrift}
              </h2>
              <div className="space-y-4">
                {content.fasadetyper.typer.map((type, i) => (
                  <div key={i} className="card p-5 flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-12 bg-neutral-100 flex items-center justify-center text-neutral-500 flex-shrink-0">
                      {FASADETYPE_ICONS[i] || <Building className="w-5 h-5" />}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-sm text-neutral-900 mb-1">{type.tittel}</h3>
                      <p className="text-body-sm text-neutral-500 leading-relaxed">{type.tekst}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Vanlige problemer */}
            <section id="problemer">
              <h2 className="font-display font-bold text-heading-xl text-neutral-900 mb-2">
                {content.vanligeProblemer.overskrift}
              </h2>
              <p className="text-body-sm text-neutral-500 mb-5">Klikk for detaljer og anbefalt løsning.</p>
              <div className="space-y-3">
                {content.vanligeProblemer.problemer.map((p, i) => (
                  <ProblemCard
                    key={i}
                    icon={PROBLEM_ICONS[i] || <AlertTriangle className="w-5 h-5" />}
                    title={p.tittel}
                    subtitle={p.tekst.split(".")[0] + "."}
                    severity={PROBLEM_SEVERITIES[i] || "vanlig"}
                    detail={p.tekst}
                    solution={`Kontakt et kvalifisert fasadefirma i ${fylke.navn} for befaring og tilbud.`}
                  />
                ))}
              </div>
              <div className="mt-5">
                <CalloutBox variant="warning" title="Ikke vent for lenge">
                  Ubehandlede fasadeproblemer forverres raskt. Fuktskader som ikke utbedres kan føre til råte, mugg og konstruksjonsskader som koster vesentlig mer å reparere.
                </CalloutBox>
              </div>
            </section>

            {/* Priser */}
            <section id="priser">
              <h2 className="font-display font-bold text-heading-xl text-neutral-900 mb-2">
                {content.priser.overskrift}
              </h2>
              <p className="text-body-md text-neutral-600 mb-5">{content.priser.intro}</p>

              <div className="bg-neutral-900 rounded-20 p-6 mb-6">
                <div className="flex items-center gap-2 mb-1">
                  <DollarSign className="w-4 h-4 text-brand-500" />
                  <h3 className="font-display font-bold text-white text-sm">Prisguide {fylke.navn} 2026</h3>
                </div>
                <p className="text-xs text-neutral-500 mb-5">Veiledende priser inkl. materialer og arbeid</p>
                <div className="bg-white rounded-14 p-4 divide-y divide-neutral-100">
                  {content.priser.tabell.map((rad, i) => {
                    const min = parseInt(rad.prisPerKvm.replace(/[^\d]/g, ""));
                    const parts = rad.prisPerKvm.split("–");
                    const max = parts[1] ? parseInt(parts[1].replace(/[^\d]/g, "")) : min * 2;
                    return (
                      <PriceBar
                        key={i}
                        icon={PRICE_ICONS[i] || <Wrench className="w-4 h-4" />}
                        title={rad.tjeneste}
                        unit="per m²"
                        min={min}
                        max={max}
                        maxScale={5000}
                        popular={i === 4 || i === 2}
                        detail={rad.merknad}
                      />
                    );
                  })}
                </div>
              </div>

              <CalloutBox variant="tip" title="Spar 5–15 % på fasadearbeid">
                Bestill i vintermånedene (januar–mars) når firma har ledig kapasitet. Prisene er ofte lavere og du sikrer oppstart tidlig i sesongen.
              </CalloutBox>
            </section>

            {/* Velge firma */}
            <section id="velge-firma">
              <h2 className="font-display font-bold text-heading-xl text-neutral-900 mb-5">
                {content.velgeFirma.overskrift}
              </h2>
              <CalloutBox variant="success" title="Sjekkliste for valg av firma" items={content.velgeFirma.tips}>
                Med {firma.length} registrerte firma i {fylke.navn} er utvalget stort. Bruk disse kriteriene for å finne riktig leverandør.
              </CalloutBox>
              <div className="mt-5">
                <CalloutBox variant="warning" title="Vanlige feil å unngå" items={content.velgeFirma.feil}>
                  Unngå disse fallgruvene når du velger fasadefirma.
                </CalloutBox>
              </div>
            </section>

            {/* Markedet */}
            <section id="markedet">
              <h2 className="font-display font-bold text-heading-xl text-neutral-900 mb-2">
                {content.firmaOversikt.overskrift}
              </h2>
              <p className="text-body-md text-neutral-600 mb-6">{content.firmaOversikt.intro}</p>

              <div className="bg-neutral-900 rounded-20 p-6">
                <h3 className="font-display font-bold text-white text-sm mb-1">{fylke.navn} fasadebransje i tall</h3>
                <p className="text-xs text-neutral-500 mb-6">Kilde: Brønnøysundregistrene</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
                  <MarketDonut
                    segments={content.firmaOversikt.kategorier.map((k, i) => ({
                      label: k.kategori.split(" ")[0],
                      value: k.antall,
                      color: DONUT_COLORS[i] || "#CCC",
                    }))}
                    total={firma.length}
                    centerLabel="Bedrifter"
                  />
                  <div className="space-y-3">
                    {content.firmaOversikt.kategorier.slice(0, 4).map((kat, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <span className="text-sm text-neutral-300">{kat.kategori}</span>
                        <div className="flex items-center gap-2">
                          <div className="w-16 h-2 bg-neutral-800 rounded-full overflow-hidden">
                            <div
                              className="h-full rounded-full"
                              style={{
                                width: `${(kat.antall / firma.length) * 100}%`,
                                backgroundColor: DONUT_COLORS[i],
                              }}
                            />
                          </div>
                          <span className="font-display font-bold text-white text-sm w-8 text-right">{kat.antall}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Firmakatalog */}
            <section id="firma">
              <FirmaCatalog firma={firma} kommuneNavn={fylke.navn} />
            </section>

            {/* FAQ */}
            <section id="faq">
              <FAQ items={content.faq} tittel={`Vanlige spørsmål om fasadeteknikk i ${fylke.navn}`} />
            </section>
          </div>
        </div>

        {/* Nabo-områder */}
        {content.naboOmrader.length > 0 && (
          <section className="section-light section-py-sm">
            <div className="container-site">
              <h2 className="font-display font-bold text-heading-xl text-neutral-900 mb-5">Andre steder i nærheten</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {content.naboOmrader.map((nabo) => (
                  <Link key={nabo.href} href={nabo.href} className="card-flat p-4 group">
                    <div className="font-display font-semibold text-sm text-neutral-900 group-hover:text-brand-500 transition-colors mb-1">{nabo.navn}</div>
                    <div className="text-xs text-neutral-400">{nabo.beskrivelse}</div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Kommuner */}
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

        {/* Andre fylker */}
        <section className="section-light section-py-sm">
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
              <Link href="#tilbud" className="btn-primary">Få gratis tilbud <ArrowRight className="w-4 h-4" /></Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}

/* ===================================================================
   GENERIC PAGE (fallback for other fylker)
   =================================================================== */
function GenericFylkePage({ fylke, firma, kommuner, andreFylker }: {
  fylke: ReturnType<typeof getFylke> & {};
  firma: any[];
  kommuner: any[];
  andreFylker: any[];
}) {
  const harFirma = firma.length > 0;
  const faqItems = [
    { sporsmal: `Hva koster fasadearbeid i ${fylke.navn}?`, svar: `Prisene i ${fylke.navn} f\u00f8lger nasjonale priser. Maling koster 300\u2013800 kr per kvm, kledning 1 200\u20133 500 kr per kvm, og komplett rehabilitering 1 500\u20134 500 kr per kvm.` },
    { sporsmal: `Hvor mange fasadefirma finnes i ${fylke.navn}?`, svar: harFirma ? `Det er ${firma.length} registrerte firma innen fasade, maling, murer og byggearbeid i ${fylke.navn} iflg. Br\u00f8nn\u00f8ysundregistrene.` : `${fylke.navn} har et godt tilbud av kvalifiserte fasadefirma.` },
    { sporsmal: `Trenger jeg byggetillatelse for fasadearbeid i ${fylke.navn}?`, svar: `Vanlig vedlikehold krever normalt ikke s\u00f8knad. Endring av fasadens utseende kan kreve byggemelding.` },
    { sporsmal: `Kan jeg f\u00e5 Enova-st\u00f8tte til etterisolering i ${fylke.navn}?`, svar: `Ja, Enova-st\u00f8tte gjelder i hele Norge. Sjekk enova.no for gjeldende satser.` },
  ];

  return (
    <>
      <Header />
      <main>
        <div className="container-site pt-5 pb-2">
          <Breadcrumb items={[{ navn: "Fylker", href: "/fylke" }, { navn: `Fasade ${fylke.navn}` }]} />
        </div>
        <section className="hero-pattern">
          <div className="container-site py-10 sm:py-14">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div>
                <div className="badge-brand mb-3"><MapPin className="w-3 h-3" />Fylke</div>
                <h1 className="font-display font-extrabold text-display-xl text-neutral-900 mb-4 text-balance">Fasade i <span className="text-brand-500">{fylke.navn}</span></h1>
                <p className="text-body-lg text-neutral-500 mb-5">{fylke.langTekst}</p>
                <div className="flex flex-wrap gap-3 mb-5">
                  <div className="badge-neutral">{fylke.innbyggere.toLocaleString("nb-NO")} innbyggere</div>
                  {kommuner.length > 0 && <div className="badge-neutral">{kommuner.length} kommuner</div>}
                  {harFirma && <div className="badge-brand"><Building2 className="w-3 h-3" />{firma.length} firma</div>}
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link href="#tilbud" className="btn-primary">Få gratis tilbud <ArrowRight className="w-4 h-4" /></Link>
                  {harFirma && <Link href="#firma" className="btn-secondary">Se alle firma <Building2 className="w-4 h-4" /></Link>}
                </div>
              </div>
              <div id="tilbud"><MultiStepLeadForm kilde={`fylke-${fylke.slug}`} /></div>
            </div>
          </div>
        </section>
        {harFirma && (<section id="firma" className="section-white section-py-sm"><div className="container-site"><FirmaCatalog firma={firma} kommuneNavn={fylke.navn} /></div></section>)}
        {kommuner.length > 0 && (<section className="section-light section-py-sm"><div className="container-site"><h2 className="font-display font-bold text-heading-xl text-neutral-900 mb-5">Kommuner i {fylke.navn}</h2><div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">{kommuner.map((k) => (<Link key={k.slug} href={`/kommune/${k.slug}`} className="card-flat px-4 py-3 group flex items-center justify-between"><div><div className="font-display font-semibold text-sm text-neutral-800 group-hover:text-brand-500 transition-colors">{k.navn}</div><div className="text-xs text-neutral-400 mt-0.5">{k.innbyggere.toLocaleString("nb-NO")} innb.</div></div><ArrowUpRight className="w-4 h-4 text-neutral-300 group-hover:text-brand-500 transition-colors" /></Link>))}</div></div></section>)}
        <section className="section-white section-py-sm"><div className="container-site"><h2 className="font-display font-bold text-heading-xl text-neutral-900 mb-5">Tjenester i {fylke.navn}</h2><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">{TJENESTER.map((t) => (<Link key={t.slug} href={`/tjenester/${t.slug}`} className="card-flat p-4 group"><div className="font-display font-semibold text-body-sm text-neutral-900 group-hover:text-brand-500 mb-1">{t.kortTittel}</div><div className="text-caption text-neutral-400">{formatPrisIntervall(t.prisMin, t.prisMax)} {t.prisenhet}</div></Link>))}</div></div></section>
        <section className="section-light section-py-sm"><div className="container-site max-w-3xl"><FAQ items={faqItems} tittel={`Vanlige spørsmål om fasade i ${fylke.navn}`} /></div></section>
        <section className="section-white section-py-sm"><div className="container-site"><h2 className="font-display font-bold text-heading-xl text-neutral-900 mb-4">Fasade i andre fylker</h2><div className="flex flex-wrap gap-2">{andreFylker.map((f) => (<Link key={f.slug} href={`/fylke/${f.slug}`} className="badge-neutral hover:bg-brand-50 hover:text-brand-500 hover:border-brand-200 transition-colors">{f.navn}</Link>))}<Link href="/fylke" className="badge-brand">Alle 15 fylker</Link></div></div></section>
        <section className="section-py-sm"><div className="container-site"><div className="cta-block text-center relative z-10"><h2 className="font-display font-extrabold text-display-lg text-white mb-3">Finn fasadefirma i {fylke.navn}</h2><p className="text-base text-neutral-500 mb-6">Gratis og uforpliktende tilbud fra lokale fagfolk.</p><Link href="#tilbud" className="btn-primary">Få gratis tilbud <ArrowRight className="w-4 h-4" /></Link></div></div></section>
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}

/* ===================================================================
   ROUTER
   =================================================================== */
export default function FylkeSide({ params }: Props) {
  const fylke = getFylke(params.slug);
  if (!fylke) notFound();

  const kommuner = getKommunerByFylke(fylke.slug);
  const andreFylker = FYLKER.filter((f) => f.slug !== fylke.slug).slice(0, 8);
  const firma = getFirmaByFylke(fylke.slug);
  const content = getFylkeContent(params.slug);

  if (content) {
    return <RichFylkePage fylke={fylke} content={content} firma={firma} kommuner={kommuner} andreFylker={andreFylker} />;
  }
  return <GenericFylkePage fylke={fylke} firma={firma} kommuner={kommuner} andreFylker={andreFylker} />;
}

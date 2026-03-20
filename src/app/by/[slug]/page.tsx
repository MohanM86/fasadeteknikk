import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin, ArrowRight, ChevronRight, Shield, Clock, Star } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyMobileCTA from "@/components/layout/StickyMobileCTA";
import LeadForm from "@/components/forms/LeadForm";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FAQ from "@/components/ui/FAQ";
import { BYER, getBy, getAllBySlugs } from "@/data/byer";
import { TJENESTER } from "@/data/tjenester";
import { formatPrisIntervall } from "@/lib/utils";

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  return getAllBySlugs().map(slug => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const by = getBy(params.slug);
  if (!by) return {};
  return { title: by.seoTitle, description: by.seoDesc, alternates: { canonical: `https://fasadeteknikk.no/by/${by.slug}` } };
}

export default function BySide({ params }: Props) {
  const by = getBy(params.slug);
  if (!by) notFound();

  const andreByer = BYER.filter(b => b.slug !== by.slug).slice(0, 8);

  const faqItems = [
    { sporsmal: `Hva koster fasadearbeid i ${by.navn}?`, svar: `Prisene i ${by.navn} følger landsgjennomsnittet. Maling koster 300 til 800 kr per kvm, kledning 1 200 til 3 500 kr per kvm, og full rehabilitering 1 500 til 4 500 kr per kvm. Innhent alltid flere tilbud for å sammenligne.` },
    { sporsmal: `Hvor finner jeg fasadefirma i ${by.navn}?`, svar: `Gjennom Fasadeteknikk.no kan du enkelt få tilbud fra kvalifiserte fasadefirma i ${by.navn}. Fyll ut skjemaet, og vi matcher deg med firma som dekker ditt område.` },
    { sporsmal: `Trenger jeg byggetillatelse for fasadearbeid i ${by.navn}?`, svar: `Vanlig vedlikehold som maling og reparasjon krever normalt ikke søknad. Endring av fasadens utseende eller materialer kan kreve byggemelding til ${by.navn} kommune. Sjekk med kommunens byggesaksavdeling.` },
    { sporsmal: `Når er beste tid for fasadearbeid i ${by.navn}?`, svar: `Sesongen fra april til oktober er best for fasadearbeid. Temperaturen bør være over 5 grader, og det bør være tørt under arbeidet. Book tidlig for å sikre plass hos de beste firmaene.` },
  ];

  return (
    <>
      <Header />
      <main>
        <div className="container-site pt-5 pb-2"><Breadcrumb items={[{ navn: "Byer", href: "/by/oslo" }, { navn: `Fasade ${by.navn}` }]} /></div>

        <section className="hero-pattern" aria-labelledby="by-h">
          <div className="container-site py-10 sm:py-14">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div>
                <div className="badge-forest mb-3"><MapPin className="w-3 h-3" />{by.fylke}</div>
                <h1 id="by-h" className="font-display font-bold text-display-xl text-slate-900 mb-4 text-balance">Fasade i <span className="text-gradient-forest">{by.navn}</span></h1>
                <p className="text-body-lg text-slate-600 mb-5">{by.langTekst}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {[{ i: Shield, t: "Kvalifiserte firma" }, { i: Clock, t: "Svar innen 24t" }, { i: Star, t: "Gratis tilbud" }].map(({ i: Icon, t }) => (
                    <div key={t} className="flex items-center gap-1.5 badge-sand text-body-sm"><Icon className="w-3.5 h-3.5" />{t}</div>
                  ))}
                </div>
                <Link href="#tilbud" className="btn-primary">Få gratis tilbud i {by.navn} <ArrowRight className="w-4 h-4" /></Link>
              </div>
              <div id="tilbud"><LeadForm kilde={`by-${by.slug}`} /></div>
            </div>
          </div>
        </section>

        <section className="section-sand section-py-sm">
          <div className="container-site">
            <h2 className="font-display font-bold text-heading-xl text-slate-900 mb-5">Tjenester i {by.navn}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {TJENESTER.map(t => (
                <Link key={t.slug} href={`/tjenester/${t.slug}`} className="card-flat p-4 hover:border-forest-300 hover:bg-forest-50 transition-all group">
                  <div className="font-display font-semibold text-body-sm text-slate-900 group-hover:text-forest-700 mb-1">{t.kortTittel}</div>
                  <div className="text-caption text-slate-500">{formatPrisIntervall(t.prisMin, t.prisMax)} {t.prisenhet}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section-white section-py-sm">
          <div className="container-site max-w-3xl">
            <FAQ items={faqItems} tittel={`Vanlige spørsmål om fasade i ${by.navn}`} />
          </div>
        </section>

        <section className="section-sand section-py-sm">
          <div className="container-site">
            <h2 className="font-display font-bold text-heading-xl text-slate-900 mb-4">Fasade i andre byer</h2>
            <div className="flex flex-wrap gap-2">
              {andreByer.map(b => (
                <Link key={b.slug} href={`/by/${b.slug}`} className="badge-sand hover:bg-forest-50 hover:text-forest-700 hover:border-forest-200 transition-colors">
                  {b.navn}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section-py-sm">
          <div className="container-site">
            <div className="cta-block">
              <h2 className="font-display font-bold text-display-lg text-white mb-3">Finn fasadefirma i {by.navn}</h2>
              <p className="text-body-md text-forest-200 mb-6">Gratis og uforpliktende tilbud fra lokale fagfolk.</p>
              <Link href="#tilbud" className="btn-white">Få gratis tilbud <ArrowRight className="w-4 h-4" /></Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}

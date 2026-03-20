import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle, ChevronRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyMobileCTA from "@/components/layout/StickyMobileCTA";
import LeadForm from "@/components/forms/LeadForm";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FAQ from "@/components/ui/FAQ";
import { TJENESTER, getTjeneste } from "@/data/tjenester";
import { formatPrisIntervall, buildServiceSchema } from "@/lib/utils";
interface Props { params: { slug: string } }
export async function generateStaticParams() { return TJENESTER.map(t => ({ slug: t.slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const t = getTjeneste(params.slug); if (!t) return {};
  return { title: t.seoTitle, description: t.seoDesc, alternates: { canonical: `https://fasadeteknikk.no/tjenester/${t.slug}` } };
}
export default function TjenesteSide({ params }: Props) {
  const tjeneste = getTjeneste(params.slug); if (!tjeneste) notFound();
  const schema = buildServiceSchema({ navn: tjeneste.tittel, slug: tjeneste.slug, beskrivelse: tjeneste.kortBeskrivelse, prisMin: tjeneste.prisMin, prisMax: tjeneste.prisMax });
  const andreTjenester = TJENESTER.filter(t => t.slug !== tjeneste.slug).slice(0, 3);
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><Header /><main>
    <div className="container-site pt-5 pb-2"><Breadcrumb items={[{ navn: "Tjenester", href: "/tjenester/fasaderehabilitering" }, { navn: tjeneste.tittel }]} /></div>
    <section className="hero-pattern" aria-labelledby="tjeneste-h"><div className="container-site py-10 sm:py-14"><div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
      <div><div className="badge-brand mb-3">Tjeneste</div><h1 id="tjeneste-h" className="font-display font-extrabold text-display-xl text-neutral-900 mb-4 text-balance">{tjeneste.tittel}</h1><p className="text-body-lg text-neutral-500 mb-5">{tjeneste.intro}</p><div className="card-flat p-5 mb-6 inline-block"><div className="text-label text-neutral-400 mb-0.5">Typisk prisintervall</div><div className="font-display font-bold text-heading-lg text-brand-500">{formatPrisIntervall(tjeneste.prisMin, tjeneste.prisMax)}</div><div className="text-caption text-neutral-400">{tjeneste.prisenhet} – veiledende</div></div><Link href="#tilbud" className="btn-primary">Få gratis tilbud <ArrowRight className="w-4 h-4" /></Link></div>
      <div id="tilbud"><LeadForm kilde={`tjeneste-${tjeneste.slug}`} defaultTjeneste={tjeneste.id} /></div>
    </div></div></section>
    <section className="section-white section-py-sm"><div className="container-site max-w-3xl"><h2 className="font-display font-bold text-heading-xl text-neutral-900 mb-5">Fordeler med {tjeneste.kortTittel.toLowerCase()}</h2><ul className="space-y-3">{tjeneste.fordeler.map(f => (<li key={f} className="flex items-start gap-3 text-body-md text-neutral-600"><CheckCircle className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />{f}</li>))}</ul></div></section>
    <section className="section-light section-py-sm"><div className="container-site max-w-3xl"><FAQ items={tjeneste.faq} tittel={`Vanlige spørsmål om ${tjeneste.kortTittel.toLowerCase()}`} /></div></section>
    <section className="section-white section-py-sm"><div className="container-site"><h2 className="font-display font-bold text-heading-xl text-neutral-900 mb-5">Andre tjenester</h2><div className="grid grid-cols-1 sm:grid-cols-3 gap-4">{andreTjenester.map(t => (<Link key={t.slug} href={`/tjenester/${t.slug}`} className="card p-5 group"><h3 className="font-display font-semibold text-heading-sm text-neutral-900 group-hover:text-brand-500 transition-colors mb-2">{t.kortTittel}</h3><p className="text-body-sm text-neutral-400 clamp-2 mb-2">{t.kortBeskrivelse}</p><span className="text-label text-brand-500 flex items-center gap-0.5">Les mer <ChevronRight className="w-3.5 h-3.5" /></span></Link>))}</div></div></section>
    <section className="section-py-sm"><div className="container-site"><div className="cta-block text-center relative z-10"><h2 className="font-display font-extrabold text-display-lg text-white mb-3">Bestill gratis tilbud</h2><Link href="#tilbud" className="btn-primary">Få gratis tilbud <ArrowRight className="w-4 h-4" /></Link></div></div></section>
  </main><Footer /><StickyMobileCTA /></>);
}

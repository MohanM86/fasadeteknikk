import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyMobileCTA from "@/components/layout/StickyMobileCTA";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { TJENESTER } from "@/data/tjenester";

export const metadata: Metadata = { title: "Fasade priser 2026 – Hva koster fasadearbeid?", description: "Komplett prisoversikt for fasadearbeid i Norge.", alternates: { canonical: "https://fasadeteknikk.no/priser" } };

export default function PriserSide() {
  return (
    <><Header /><main>
      <div className="container-site pt-5 pb-2"><Breadcrumb items={[{ navn: "Priser" }]} /></div>
      <section className="hero-pattern"><div className="container-site py-10 sm:py-14 text-center"><div className="badge-brand mb-3">Oppdatert 2026</div><h1 className="font-display font-extrabold text-display-xl text-neutral-900 mb-4 text-balance">Hva koster fasadearbeid i Norge?</h1><p className="text-body-lg text-neutral-500 max-w-2xl mx-auto">Fullstendig og oppdatert prisoversikt for de vanligste fasadetjenestene.</p></div></section>
      <section className="section-white section-py-sm"><div className="container-site max-w-3xl"><div className="overflow-x-auto"><table className="w-full border-collapse"><thead><tr className="bg-neutral-100 border-b-2 border-neutral-200"><th className="text-left px-4 py-3 text-label text-neutral-600">Tjeneste</th><th className="text-left px-4 py-3 text-label text-neutral-600">Pris fra</th><th className="text-left px-4 py-3 text-label text-neutral-600">Pris til</th><th className="text-left px-4 py-3 text-label text-neutral-600">Enhet</th><th className="px-4 py-3"></th></tr></thead><tbody>{TJENESTER.map((t, i) => (<tr key={t.slug} className={`border-b border-neutral-100 ${i % 2 === 0 ? "bg-white" : "bg-neutral-50"}`}><td className="px-4 py-3.5 font-semibold text-neutral-900">{t.kortTittel}</td><td className="px-4 py-3.5 font-display font-bold text-neutral-800">{t.prisMin.toLocaleString("nb-NO")} kr</td><td className="px-4 py-3.5 font-display font-bold text-neutral-800">{t.prisMax.toLocaleString("nb-NO")} kr</td><td className="px-4 py-3.5 text-body-sm text-neutral-400">{t.prisenhet}</td><td className="px-4 py-3.5"><Link href={`/tjenester/${t.slug}`} className="text-label text-brand-500 hover:text-brand-600 flex items-center gap-1">Les mer <ChevronRight className="w-3.5 h-3.5" /></Link></td></tr>))}</tbody></table></div>
      <div className="mt-10 space-y-6 text-body-md text-neutral-600 leading-relaxed"><h2 className="font-display font-bold text-heading-xl text-neutral-900">Hva påvirker prisen?</h2><p>Prisen på fasadearbeid avhenger av flere faktorer. Fasadens nåværende tilstand er den viktigste, etterfulgt av materialvalg, boligens størrelse og beliggenhet, tilgjengelighet for stillas, og om det trengs tilleggstjenester som etterisolering.</p><p>Byer som Oslo og Bergen har generelt 10 til 20 prosent høyere priser enn landsgjennomsnittet.</p></div></div></section>
      <section className="section-py-sm"><div className="container-site"><div className="cta-block text-center relative z-10"><h2 className="font-display font-extrabold text-display-lg text-white mb-3">Få konkrete priser for ditt prosjekt</h2><Link href="/kontakt" className="btn-primary">Få gratis tilbud <ArrowRight className="w-4 h-4" /></Link></div></div></section>
    </main><Footer /><StickyMobileCTA /></>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle, Clock } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyMobileCTA from "@/components/layout/StickyMobileCTA";
import LeadForm from "@/components/forms/LeadForm";
import FAQ from "@/components/ui/FAQ";
import ServiceRows from "@/components/ui/ServiceRows";
import { POPULAERE_BYER } from "@/data/byer";
import { FYLKER } from "@/data/geografi";

export const metadata: Metadata = { title: "Fasadeteknikk – Alt om fasade, kledning og rehabilitering i Norge", description: "Norges ledende plattform for fasade og fasadearbeid. Finn kvalifiserte firma for fasade, tak, kledning, maling og etterisolering. Gratis tilbud.", alternates: { canonical: "https://fasadeteknikk.no" } };

const FAQ_ITEMS = [
  { sporsmal: "Hva koster fasaderehabilitering i Norge?", svar: "Prisen varierer fra 1 500 til 4 500 kr per kvadratmeter avhengig av tilstand, materialer og omfang." },
  { sporsmal: "Når bør jeg bytte kledning på huset?", svar: "Kledningen bør byttes når du ser synlig råte, maling som flasser over store flater, eller fuktproblemer bak kledningen." },
  { sporsmal: "Kan jeg få Enova støtte til etterisolering?", svar: "Ja, Enova gir støtte til energitiltak. Sjekk enova.no for oppdaterte satser." },
  { sporsmal: "Trenger jeg byggetillatelse for fasadearbeid?", svar: "Vanlig vedlikehold krever normalt ikke søknad. Endring av utseende kan kreve byggemelding." },
];

export default function HomePage() {
  return (<>
    <Header /><main>
      <section className="relative overflow-hidden hero-pattern" aria-labelledby="hero-h">
        <div className="container-site py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <div className="badge-brand mb-5"><div className="w-1.5 h-1.5 rounded-full bg-brand-500" />Norges fasadeplattform</div>
              <h1 id="hero-h" className="font-display font-extrabold text-display-2xl text-neutral-900 mb-5 text-balance">Alt innen<br /><span className="text-brand-500">fasade</span> i<br />Norge<span className="text-brand-500">.</span></h1>
              <p className="text-body-lg text-neutral-500 mb-8 max-w-lg">Finn riktig fasadefirma i ditt område. Sammenlign tilbud fra kvalifiserte fagfolk – helt gratis.</p>
              <div className="flex flex-wrap gap-3 mb-8"><Link href="#tilbud" className="btn-primary">Få gratis tilbud <ArrowRight className="w-4 h-4" /></Link><Link href="/priser" className="btn-secondary">Se priser</Link></div>
              <div className="flex flex-wrap gap-5">{["Gratis tilbud", "Kvalifiserte firma", "Svar innen 24t"].map(p => (<div key={p} className="flex items-center gap-2 text-sm text-neutral-500 font-medium"><CheckCircle className="w-4 h-4 text-brand-500 flex-shrink-0" />{p}</div>))}</div>
            </div>
            <div id="tilbud"><LeadForm kilde="forside-hero" /></div>
          </div>
        </div>
      </section>

      <section className="section-dark"><div className="container-site py-8"><div className="grid grid-cols-2 sm:grid-cols-4 gap-6">{[{ v: "356+", l: "Kommuner dekket" }, { v: "15", l: "Fylker" }, { v: "24t", l: "Responstid" }, { v: "100%", l: "Gratis" }].map(({ v, l }) => (<div key={l} className="text-center"><div className="font-display font-extrabold text-4xl text-brand-500 tracking-tight">{v}</div><div className="text-xs text-neutral-500 mt-1">{l}</div></div>))}</div></div></section>

      <section className="section-light section-py" aria-labelledby="tjenester-h">
        <div className="container-site"><div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-4 mb-12"><div><div className="section-label">Tjenester</div><h2 id="tjenester-h" className="font-display font-extrabold text-display-xl text-neutral-900 text-balance">Hva trenger du<br />hjelp med<span className="text-brand-500">?</span></h2></div></div><ServiceRows /></div>
      </section>

      <section className="section-light section-py-sm" aria-labelledby="byer-h">
        <div className="container-site">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-4 mb-8"><div><div className="section-label">Dekning</div><h2 id="byer-h" className="font-display font-extrabold text-display-lg text-neutral-900">Finn firma lokalt<span className="text-brand-500">.</span></h2></div><Link href="/fylke" className="flex items-center gap-2 text-sm font-semibold text-brand-500 hover:text-brand-600 transition-colors">Se alle fylker og kommuner <ArrowRight className="w-4 h-4" /></Link></div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-6">{POPULAERE_BYER.map(by => (<Link key={by.slug} href={`/by/${by.slug}`} className="card-flat px-5 py-4 flex items-center justify-between group"><div><div className="font-display font-semibold text-base text-neutral-800 group-hover:text-brand-500 transition-colors">{by.navn}</div><div className="text-xs text-neutral-400 mt-0.5">{by.innbyggere.toLocaleString("nb-NO")} innb.</div></div><ArrowUpRight className="w-4 h-4 text-neutral-300 group-hover:text-brand-500 transition-colors" /></Link>))}</div>
          <div className="border-t border-neutral-200 pt-5"><p className="text-body-sm text-neutral-400 mb-3">Eller velg fylke:</p><div className="flex flex-wrap gap-2">{FYLKER.slice(0, 10).map(f => (<Link key={f.slug} href={`/fylke/${f.slug}`} className="badge-neutral hover:bg-brand-50 hover:text-brand-500 hover:border-brand-200 transition-colors">{f.navn}</Link>))}<Link href="/fylke" className="badge-brand">Se alle fylker →</Link></div></div>
        </div>
      </section>

      <section className="section-white section-py-sm" aria-labelledby="artikler-h">
        <div className="container-site"><div className="text-center mb-8"><div className="section-label">Artikler</div><h2 id="artikler-h" className="font-display font-extrabold text-display-lg text-neutral-900">Lær mer om fasade<span className="text-brand-500">.</span></h2></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">{[{ slug: "hva-koster-fasaderehabilitering", tittel: "Hva koster fasaderehabilitering?", lesetid: 8 }, { slug: "nar-bor-du-bytte-kledning", tittel: "Når bør du bytte kledning?", lesetid: 8 }, { slug: "tre-vs-mur-fasade", tittel: "Tre vs mur: Fordeler og ulemper", lesetid: 9 }, { slug: "hvordan-vedlikeholde-fasade", tittel: "Slik vedlikeholder du fasaden", lesetid: 7 }].map(a => (<Link key={a.slug} href={`/artikler/${a.slug}`} className="card p-6 group"><h3 className="font-display font-semibold text-heading-sm text-neutral-900 group-hover:text-brand-500 transition-colors mb-2">{a.tittel}</h3><div className="flex items-center gap-2 text-xs text-neutral-400"><Clock className="w-3 h-3" />{a.lesetid} min lesing</div></Link>))}</div>
        </div>
      </section>

      <section className="section-light section-py-sm"><div className="container-site max-w-3xl"><h2 className="font-display font-extrabold text-display-lg text-neutral-900 mb-8 text-center">Vanlige spørsmål</h2><FAQ items={FAQ_ITEMS} /></div></section>

      <section className="section-py-sm"><div className="container-site"><div className="cta-block flex flex-col lg:flex-row items-center justify-between gap-8"><div className="relative z-10"><h2 className="font-display font-extrabold text-display-lg text-white mb-3 text-balance">Klar for å oppgradere fasaden<span className="text-brand-500">?</span></h2><p className="text-base text-neutral-500 max-w-md">Få gratis og uforpliktende tilbud fra kvalifiserte fasadefirma i ditt område.</p></div><Link href="#tilbud" className="btn-primary relative z-10 whitespace-nowrap">Få gratis tilbud <ArrowRight className="w-4 h-4" /></Link></div></div></section>
    </main><Footer /><StickyMobileCTA />
  </>);
}

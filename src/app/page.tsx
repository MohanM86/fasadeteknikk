import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight, CheckCircle, Shield, Clock, Star, MapPin, Paintbrush, Hammer, Thermometer, Droplets, Home } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyMobileCTA from "@/components/layout/StickyMobileCTA";
import LeadForm from "@/components/forms/LeadForm";
import FAQ from "@/components/ui/FAQ";
import { TJENESTER } from "@/data/tjenester";
import { POPULAERE_BYER } from "@/data/byer";
import { formatPrisIntervall } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Fasadeteknikk – Alt om fasade, kledning og rehabilitering i Norge",
  description: "Norges ledende plattform for fasade og fasadearbeid. Finn kvalifiserte firma for rehabilitering, kledning, maling og etterisolering. Gratis tilbud.",
  alternates: { canonical: "https://fasadeteknikk.no" },
};

const TJENESTE_IKONER: Record<string, React.ElementType> = {
  fasaderehabilitering: Hammer,
  "bytte-kledning": Home,
  "male-hus": Paintbrush,
  etterisolering: Thermometer,
  "vaske-fasade": Droplets,
};

const TRUST = [
  { ikon: Shield, tittel: "Kun kvalifiserte firma", tekst: "Godkjente og erfarne fagfolk" },
  { ikon: Clock, tittel: "Svar innen 24 timer", tekst: "Rask kontakt med lokalt firma" },
  { ikon: Star, tittel: "Helt gratis tilbud", tekst: "Uforpliktende prisestimat" },
];

const PROSESS = [
  { nr: "1", tittel: "Beskriv prosjektet", tekst: "Fyll ut skjemaet med hva du trenger hjelp med og hvor du bor." },
  { nr: "2", tittel: "Vi finner firma", tekst: "Vi matcher deg med kvalifiserte fasadefirma i ditt nærområde." },
  { nr: "3", tittel: "Motta tilbud", tekst: "Sammenlign tilbud og velg det beste for ditt prosjekt." },
];

const FAQ_ITEMS = [
  { sporsmal: "Hva koster fasaderehabilitering i Norge?", svar: "Prisen varierer fra 1 500 til 4 500 kr per kvadratmeter avhengig av tilstand, materialer og omfang. For en gjennomsnittlig enebolig med 150 kvm fasade kan totalprisen bli mellom 225 000 og 675 000 kr." },
  { sporsmal: "Når bør jeg bytte kledning på huset?", svar: "Kledningen bør byttes når du ser synlig råte, maling som flasser over store flater, kledningsbord som er bøyde eller sprukne, eller fuktproblemer bak kledningen. De fleste trekledninger varer 30 til 50 år med godt vedlikehold." },
  { sporsmal: "Hvor ofte bør man male huset utvendig?", svar: "Trefasader bør males hvert 8 til 12 år. Sørvendte og vestvendte vegger slites raskere og trenger kanskje maling oftere. Godt forarbeid og kvalitetsmaling gir lengst holdbarhet." },
  { sporsmal: "Kan jeg få Enova støtte til etterisolering?", svar: "Ja, Enova gir støtte til energitiltak i boliger, inkludert etterisolering av yttervegger. Sjekk enova.no for oppdaterte satser. Støtten kan dekke inntil 20 prosent av kostnadene." },
  { sporsmal: "Trenger jeg byggetillatelse for fasadearbeid?", svar: "Vanlig vedlikehold krever normalt ikke søknad. Endring av fasadens utseende, farge eller materiale kan kreve byggemelding. Kontakt kommunen din for å avklare." },
];

const ARTIKLER = [
  { slug: "hva-koster-fasaderehabilitering", tittel: "Hva koster fasaderehabilitering?", lesetid: 8 },
  { slug: "nar-bor-du-bytte-kledning", tittel: "Når bør du bytte kledning?", lesetid: 6 },
  { slug: "tre-vs-mur-fasade", tittel: "Tre vs mur: Fordeler og ulemper", lesetid: 7 },
  { slug: "hvordan-vedlikeholde-fasade", tittel: "Slik vedlikeholder du fasaden", lesetid: 5 },
];

export default function HomePage() {
  return (
    <>
      <Header />
      <main>

        {/* ═══ HERO ═══ */}
        <section className="relative overflow-hidden hero-pattern" aria-labelledby="hero-h">
          <div className="container-site py-10 sm:py-16 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              <div>
                <div className="badge-forest mb-4">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6"/></svg>
                  Norges ledende fasadeplattform
                </div>
                <h1 id="hero-h" className="font-display font-bold text-display-2xl text-slate-900 mb-4 text-balance">
                  Alt innen <span className="text-gradient-forest">fasade</span> i Norge
                </h1>
                <p className="text-body-lg text-slate-600 mb-6 max-w-lg">
                  Finn riktig fasadefirma i ditt område, eller lær hva du trenger å vite før du starter prosjektet.
                </p>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-6">
                  {["Gratis tilbud", "Kun kvalifiserte firma", "Hele Norge", "Svar innen 24t"].map(p => (
                    <div key={p} className="flex items-center gap-1.5 text-body-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-forest-600 flex-shrink-0" />{p}
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link href="#tilbud" className="btn-primary">Få gratis tilbud <ArrowRight className="w-4 h-4" /></Link>
                  <Link href="/priser" className="btn-secondary">Se priser</Link>
                </div>
              </div>
              <div id="tilbud">
                <LeadForm kilde="forside-hero" />
              </div>
            </div>
          </div>
        </section>

        {/* ═══ TRUST BAR ═══ */}
        <section className="bg-forest-900">
          <div className="container-site py-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4">
              {TRUST.map(({ ikon: Icon, tittel, tekst }) => (
                <div key={tittel} className="flex items-center gap-3 justify-center sm:justify-start">
                  <div className="w-10 h-10 rounded-12 bg-forest-700 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-forest-200" />
                  </div>
                  <div>
                    <div className="text-body-sm font-semibold text-white">{tittel}</div>
                    <div className="text-caption text-forest-300">{tekst}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ HVA ER FASADETEKNIKK ═══ */}
        <section className="section-white section-py-sm">
          <div className="container-site">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h2 className="font-display font-bold text-display-lg text-slate-900 mb-4">Hva er fasadeteknikk?</h2>
              <p className="text-body-lg text-slate-600">Fasadeteknikk omfatter alt arbeid knyttet til en bygnings ytterside. Det inkluderer rehabilitering av skadet fasade, utskifting av kledning, utvendig maling, etterisolering og rengjøring. Riktig utført fasadearbeid beskytter boligen mot vær og vind, reduserer energiforbruket og øker eiendommens verdi.</p>
            </div>
          </div>
        </section>

        {/* ═══ TJENESTER ═══ */}
        <section className="section-sand section-py-sm" aria-labelledby="tjenester-h">
          <div className="container-site">
            <div className="text-center mb-8">
              <h2 id="tjenester-h" className="font-display font-bold text-display-lg text-slate-900 mb-2">Våre tjenester</h2>
              <p className="text-body-md text-slate-500">Alt du trenger for en perfekt fasade</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {TJENESTER.map(t => {
                const Icon = TJENESTE_IKONER[t.id] || Hammer;
                return (
                  <Link key={t.slug} href={`/tjenester/${t.slug}`} className="card p-6 group">
                    <div className="w-11 h-11 rounded-12 bg-forest-50 flex items-center justify-center mb-3 group-hover:bg-forest-100 transition-colors">
                      <Icon className="w-5 h-5 text-forest-700" />
                    </div>
                    <h3 className="font-display font-semibold text-heading-sm text-slate-900 group-hover:text-forest-700 transition-colors mb-2">{t.kortTittel}</h3>
                    <p className="text-body-sm text-slate-500 clamp-2 mb-3">{t.kortBeskrivelse}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-body-sm font-semibold text-slate-700">{formatPrisIntervall(t.prisMin, t.prisMax)}</span>
                      <span className="text-label text-forest-600 flex items-center gap-0.5">Les mer <ChevronRight className="w-3.5 h-3.5" /></span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ═══ SLIK FUNGERER DET ═══ */}
        <section className="section-forest section-py-sm" aria-labelledby="prosess-h">
          <div className="container-site">
            <h2 id="prosess-h" className="font-display font-bold text-display-lg text-white mb-8 text-center">Slik fungerer det</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {PROSESS.map(s => (
                <div key={s.nr} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-ember-500 text-white flex items-center justify-center font-display font-bold text-heading-lg mx-auto mb-4">{s.nr}</div>
                  <h3 className="font-display font-semibold text-heading-sm text-white mb-2">{s.tittel}</h3>
                  <p className="text-body-sm text-forest-200">{s.tekst}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="#tilbud" className="btn-primary">Kom i gang – gratis <ArrowRight className="w-4 h-4" /></Link>
            </div>
          </div>
        </section>

        {/* ═══ POPULÆRE BYER ═══ */}
        <section className="section-white section-py-sm" aria-labelledby="byer-h">
          <div className="container-site">
            <div className="text-center mb-8">
              <h2 id="byer-h" className="font-display font-bold text-display-lg text-slate-900 mb-2">Finn fasadefirma lokalt</h2>
              <p className="text-body-md text-slate-500">Vi dekker hele Norge</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {POPULAERE_BYER.map(by => (
                <Link key={by.slug} href={`/by/${by.slug}`} className="card-flat px-4 py-3 hover:border-forest-300 hover:bg-forest-50 transition-all group text-center">
                  <div className="font-display font-semibold text-body-sm text-slate-800 group-hover:text-forest-700">{by.navn}</div>
                  <div className="text-caption text-slate-400 mt-0.5">{by.innbyggere.toLocaleString("nb-NO")} innb.</div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-6">
              <Link href="/by/oslo" className="btn-secondary text-body-sm"><MapPin className="w-4 h-4" />Se alle byer</Link>
            </div>
          </div>
        </section>

        {/* ═══ ARTIKLER ═══ */}
        <section className="section-sand section-py-sm" aria-labelledby="artikler-h">
          <div className="container-site">
            <div className="text-center mb-8">
              <h2 id="artikler-h" className="font-display font-bold text-display-lg text-slate-900 mb-2">Lær mer om fasade</h2>
              <p className="text-body-md text-slate-500">Guider og artikler fra fageksperter</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ARTIKLER.map(a => (
                <Link key={a.slug} href={`/artikler/${a.slug}`} className="card p-6 group">
                  <h3 className="font-display font-semibold text-heading-sm text-slate-900 group-hover:text-forest-700 transition-colors mb-2">{a.tittel}</h3>
                  <div className="flex items-center gap-2 text-caption text-slate-400">
                    <Clock className="w-3 h-3" />{a.lesetid} min lesing
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ FAQ ═══ */}
        <section className="section-white section-py-sm">
          <div className="container-site max-w-3xl">
            <h2 className="font-display font-bold text-display-lg text-slate-900 mb-6 text-center">Vanlige spørsmål</h2>
            <FAQ items={FAQ_ITEMS} />
          </div>
        </section>

        {/* ═══ CTA ═══ */}
        <section className="section-py-sm">
          <div className="container-site">
            <div className="cta-block">
              <h2 className="font-display font-bold text-display-lg text-white mb-3 text-balance">Klar for å oppgradere fasaden?</h2>
              <p className="text-body-md text-forest-200 mb-6 max-w-md mx-auto">Få gratis og uforpliktende tilbud fra kvalifiserte fasadefirma i ditt område.</p>
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

import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ArrowRight, ArrowUpRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyMobileCTA from "@/components/layout/StickyMobileCTA";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Artikler om fasade, kledning og vedlikehold",
  description:
    "Les våre guider og artikler om fasaderehabilitering, kledning, maling, priser og vedlikehold. Faglig innhold skrevet for norske huseiere.",
  alternates: { canonical: "https://fasadeteknikk.no/artikler" },
};

const ARTIKLER = [
  {
    slug: "hva-koster-fasaderehabilitering",
    tittel: "Hva koster fasaderehabilitering i 2026?",
    beskrivelse:
      "Komplett prisguide med oversikt over hva du kan forvente å betale for ulike typer fasadearbeid i Norge. Priser per kvm for maling, kledning, etterisolering og rehabilitering.",
    lesetid: 8,
    kategori: "Priser",
  },
  {
    slug: "nar-bor-du-bytte-kledning",
    tittel: "Når bør du bytte kledning på huset?",
    beskrivelse:
      "Lær å kjenne igjen de 7 viktigste tegnene på at kledningen bør byttes. Komplett guide med materialtabell, priseksempler og tips fra fagfolk.",
    lesetid: 8,
    kategori: "Guide",
  },
  {
    slug: "tre-vs-mur-fasade",
    tittel: "Tre vs mur: Hvilken fasade er best?",
    beskrivelse:
      "En grundig sammenligning av de to vanligste fasadetypene i Norge. Se fordeler, ulemper, priser, levetid og totalkostnad over 50 år.",
    lesetid: 9,
    kategori: "Sammenligning",
  },
  {
    slug: "hvordan-vedlikeholde-fasade",
    tittel: "Slik vedlikeholder du fasaden",
    beskrivelse:
      "Komplett årsplan for fasadevedlikehold. Lær hva du kan gjøre selv, hva det koster, og når du bør kontakte fagfolk.",
    lesetid: 7,
    kategori: "Vedlikehold",
  },
];

export default function ArtiklerSide() {
  return (
    <>
      <Header />
      <main>
        <div className="container-site pt-5 pb-2">
          <Breadcrumb items={[{ navn: "Artikler" }]} />
        </div>

        <section className="hero-pattern">
          <div className="container-site py-10 sm:py-14 text-center">
            <div className="section-label">Artikler</div>
            <h1 className="font-display font-extrabold text-display-xl text-neutral-900 mb-4 text-balance">
              Guider og artikler om fasade
            </h1>
            <p className="text-body-lg text-neutral-500 max-w-2xl mx-auto">
              Alt du trenger å vite om fasaderehabilitering, kledning, maling og
              vedlikehold. Skrevet for norske huseiere.
            </p>
          </div>
        </section>

        <section className="section-white section-py-sm">
          <div className="container-site max-w-4xl">
            <div className="space-y-4">
              {ARTIKLER.map((a) => (
                <Link
                  key={a.slug}
                  href={`/artikler/${a.slug}`}
                  className="card p-6 sm:p-8 group block"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="badge-brand mb-3 text-xs">
                        {a.kategori}
                      </div>
                      <h2 className="font-display font-bold text-heading-lg text-neutral-900 group-hover:text-brand-500 transition-colors mb-2">
                        {a.tittel}
                      </h2>
                      <p className="text-body-sm text-neutral-500 leading-relaxed mb-3">
                        {a.beskrivelse}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-neutral-400">
                        <Clock className="w-3 h-3" />
                        {a.lesetid} min lesing
                      </div>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-neutral-300 group-hover:text-brand-500 transition-colors flex-shrink-0 mt-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section-py-sm">
          <div className="container-site">
            <div className="cta-block text-center relative z-10">
              <h2 className="font-display font-extrabold text-display-lg text-white mb-3">
                Klar for å komme i gang?
              </h2>
              <p className="text-base text-neutral-500 mb-6">
                Få gratis og uforpliktende tilbud fra kvalifiserte fasadefirma.
              </p>
              <Link href="/kontakt" className="btn-primary">
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

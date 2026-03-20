import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyMobileCTA from "@/components/layout/StickyMobileCTA";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Tre vs mur fasade – Fordeler og ulemper",
  description: "Sammenlign tre og murfasade. Se fordeler, ulemper og priser.",
  alternates: { canonical: "https://fasadeteknikk.no/artikler/tre-vs-mur-fasade" },
};

export default function Artikkel() {
  return (
    <>
      <Header />
      <main>
        <div className="container-site pt-5 pb-2"><Breadcrumb items={[{ navn: "Artikler" }, { navn: "Tre vs mur: Hvilken fasade er best?" }]} /></div>
        <section className="hero-pattern">
          <div className="container-site py-10 sm:py-14 max-w-3xl">
            <div className="badge-brand mb-3"><Clock className="w-3 h-3" />6 min lesing</div>
            <h1 className="font-display font-extrabold text-display-xl text-neutral-900 mb-4 text-balance">Tre vs mur: Hvilken fasade er best?</h1>
            <p className="text-body-lg text-neutral-500">En grundig sammenligning av de to vanligste fasadetypene i Norge.</p>
          </div>
        </section>
        <article className="section-white section-py-sm">
          <div className="container-site max-w-3xl text-body-md text-neutral-600 leading-relaxed space-y-6">
            <p>En grundig sammenligning av de to vanligste fasadetypene i Norge. Her er en komplett guide med alt du trenger å vite.</p>
            <div className="bg-brand-50 border border-brand-200 rounded-16 p-6 mt-8">
              <h3 className="font-display font-bold text-heading-md text-neutral-900 mb-2">Viktig å vite</h3>
              <p className="text-body-sm text-neutral-600">Kontakt alltid en fagperson for en vurdering av din fasade. Det gir det beste grunnlaget for å ta riktig beslutning.</p>
            </div>
          </div>
        </article>
        <section className="section-py-sm">
          <div className="container-site"><div className="cta-block text-center relative z-10">
            <h2 className="font-display font-extrabold text-display-lg text-white mb-3">Trenger du hjelp med fasaden?</h2>
            <Link href="/kontakt" className="btn-primary">Få gratis tilbud <ArrowRight className="w-4 h-4" /></Link>
          </div></div>
        </section>
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}

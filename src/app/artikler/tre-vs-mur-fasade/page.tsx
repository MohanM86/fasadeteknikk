import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyMobileCTA from "@/components/layout/StickyMobileCTA";
import Breadcrumb from "@/components/ui/Breadcrumb";
export const metadata: Metadata = { title: "Artikkel om fasade | Fasadeteknikk.no", description: "Les vår guide om fasadearbeid.", alternates: { canonical: `https://fasadeteknikk.no/artikler/tre-vs-mur-fasade` } };
export default function Artikkel() {
  return (<><Header /><main><div className="container-site pt-5 pb-2"><Breadcrumb items={[{ navn: "Artikler", href: "/artikler" }, { navn: "Guide" }]} /></div><section className="hero-pattern"><div className="container-site py-10 max-w-3xl"><h1 className="font-display font-extrabold text-display-xl text-neutral-900 mb-4">Fasadeguide</h1><p className="text-body-lg text-neutral-500">Les hele artikkelen på fasadeteknikk.no.</p></div></section><section className="section-py-sm"><div className="container-site"><div className="cta-block text-center"><Link href="/kontakt" className="btn-primary">Få gratis tilbud <ArrowRight className="w-4 h-4" /></Link></div></div></section></main><Footer /><StickyMobileCTA /></>);
}

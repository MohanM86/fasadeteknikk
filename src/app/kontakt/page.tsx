import type { Metadata } from "next";
import { Shield } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/ui/Breadcrumb";
import LeadForm from "@/components/forms/LeadForm";

export const metadata: Metadata = { title: "Kontakt – Få gratis tilbud fra fasadefirma", description: "Fyll ut skjemaet og motta gratis tilbud fra kvalifiserte fasadefirma i ditt område. Svar innen 24 timer.", alternates: { canonical: "https://fasadeteknikk.no/kontakt" } };

export default function KontaktSide() {
  return (
    <><Header /><main>
      <div className="container-site pt-5 pb-2"><Breadcrumb items={[{ navn: "Kontakt" }]} /></div>
      <section className="hero-pattern"><div className="container-site py-10 sm:py-14"><div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"><div><h1 className="font-display font-extrabold text-display-xl text-neutral-900 mb-4 text-balance">Få gratis tilbud fra fasadefirma</h1><p className="text-body-lg text-neutral-500 mb-6">Fyll ut skjemaet og motta uforpliktende tilbud fra kvalifiserte firma i ditt område innen 24 timer.</p><div className="flex items-center gap-2 text-body-sm text-neutral-400"><Shield className="w-4 h-4 text-brand-500" />Dine opplysninger deles kun med relevante fagfolk.</div></div><LeadForm kilde="kontakt-side" /></div></div></section>
    </main><Footer /></>
  );
}

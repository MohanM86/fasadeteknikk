import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)); }
export function formatPris(kr: number): string {
  return new Intl.NumberFormat("nb-NO",{style:"currency",currency:"NOK",minimumFractionDigits:0,maximumFractionDigits:0}).format(kr);
}
export function formatPrisIntervall(min: number, max: number): string {
  return `${min.toLocaleString("nb-NO")} – ${max.toLocaleString("nb-NO")} kr`;
}
export function buildFAQSchema(faq: { sporsmal: string; svar: string }[]) {
  return { "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: faq.map(item => ({ "@type": "Question", name: item.sporsmal,
      acceptedAnswer: { "@type": "Answer", text: item.svar } })) };
}
export function buildBreadcrumbSchema(items: { navn: string; href?: string }[]) {
  return { "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({ "@type": "ListItem", position: idx+1, name: item.navn,
      ...(item.href ? { item: `https://fasadeteknikk.no${item.href}` } : {}) })) };
}
export function buildOrgSchema() {
  return { "@context": "https://schema.org", "@type": "ProfessionalService",
    name: "Fasadeteknikk", url: "https://fasadeteknikk.no",
    description: "Norges ledende plattform for fasade og fasadearbeid.",
    areaServed: { "@type": "Country", name: "Norway" },
    serviceType: ["Fasaderehabilitering","Kledning","Maling","Etterisolering","Fasadevask","Taktekking","Takreparasjon","Takrenner"],
    parentOrganization: { "@type": "Organization", name: "IT-Firma.no", url: "https://it-firma.no" },
    "@id": "https://fasadeteknikk.no/#organization" };
}
export function buildServiceSchema(t: { navn: string; slug: string; beskrivelse: string; prisMin: number; prisMax: number }) {
  return { "@context": "https://schema.org", "@type": "Service",
    name: t.navn, url: `https://fasadeteknikk.no/tjenester/${t.slug}`,
    description: t.beskrivelse,
    provider: { "@type": "ProfessionalService", name: "Fasadeteknikk", url: "https://fasadeteknikk.no" },
    offers: { "@type": "AggregateOffer", lowPrice: t.prisMin, highPrice: t.prisMax, priceCurrency: "NOK" },
    areaServed: { "@type": "Country", name: "Norway" } };
}

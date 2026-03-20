import Link from "next/link";
import { ArrowRight } from "lucide-react";

const TJENESTE_LINKS = [
  { label: "Fasaderehabilitering", href: "/tjenester/fasaderehabilitering" },
  { label: "Bytte kledning", href: "/tjenester/bytte-kledning" },
  { label: "Male hus utvendig", href: "/tjenester/male-hus-utvendig" },
  { label: "Etterisolering", href: "/tjenester/etterisolering" },
  { label: "Vaske fasade", href: "/tjenester/vaske-fasade" },
  { label: "Legge nytt tak", href: "/tjenester/legge-nytt-tak" },
  { label: "Takreparasjon", href: "/tjenester/takreparasjon" },
  { label: "Takrenner og beslag", href: "/tjenester/takrenner-og-beslag" },
];
const GEO_LINKS = [
  { label: "Alle fylker", href: "/fylke" },
  { label: "Oslo", href: "/by/oslo" },
  { label: "Bergen", href: "/by/bergen" },
  { label: "Trondheim", href: "/by/trondheim" },
  { label: "Stavanger", href: "/by/stavanger" },
  { label: "Kristiansand", href: "/by/kristiansand" },
  { label: "Trøndelag", href: "/fylke/trøndelag" },
  { label: "Vestland", href: "/fylke/vestland" },
];
const INFO_LINKS = [
  { label: "Om oss", href: "/om-oss" }, { label: "Priser", href: "/priser" },
  { label: "Artikler", href: "/artikler" }, { label: "FAQ", href: "/faq" },
  { label: "Kontakt", href: "/kontakt" }, { label: "Personvern", href: "/personvern" },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white">
      <div className="container-site py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-8 bg-neutral-800 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6"/></svg>
              </div>
              <span className="font-display font-bold text-base text-white tracking-tight">Fasadeteknikk</span>
            </Link>
            <p className="text-sm text-neutral-500 leading-relaxed max-w-[260px]">Norges ledende plattform for fasade og fasadearbeid. Vi kobler deg med kvalifiserte firma i hele landet.</p>
          </div>
          <div>
            <h3 className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-5">Tjenester</h3>
            <ul className="space-y-3">{TJENESTE_LINKS.map(l => (<li key={l.href}><Link href={l.href} className="text-sm text-neutral-500 hover:text-white transition-colors">{l.label}</Link></li>))}</ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-5">Finn firma</h3>
            <ul className="space-y-3">{GEO_LINKS.map(l => (<li key={l.href}><Link href={l.href} className="text-sm text-neutral-500 hover:text-white transition-colors">{l.label}</Link></li>))}</ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-5">Informasjon</h3>
            <ul className="space-y-3">{INFO_LINKS.map(l => (<li key={l.href}><Link href={l.href} className="text-sm text-neutral-500 hover:text-white transition-colors">{l.label}</Link></li>))}</ul>
            <Link href="/kontakt" className="btn-primary inline-flex text-sm px-5 py-2.5 mt-6">Få gratis tilbud <ArrowRight className="w-3.5 h-3.5" /></Link>
          </div>
        </div>
      </div>
      <div className="border-t border-neutral-800/50">
        <div className="container-site py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-neutral-600">&copy; {new Date().getFullYear()} Fasadeteknikk.no – En tjeneste fra <a href="https://it-firma.no" className="text-neutral-500 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">IT-Firma.no</a></p>
          <div className="flex items-center gap-4">
            <Link href="/personvern" className="text-xs text-neutral-600 hover:text-neutral-400 transition-colors">Personvern</Link>
            <span className="text-xs text-neutral-700">Dekker alle norske fylker og kommuner</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";

const TJENESTE_LINKS = [
  { label: "Fasaderehabilitering", href: "/tjenester/fasaderehabilitering" },
  { label: "Bytte kledning", href: "/tjenester/bytte-kledning" },
  { label: "Male hus utvendig", href: "/tjenester/male-hus-utvendig" },
  { label: "Etterisolering", href: "/tjenester/etterisolering" },
  { label: "Vaske fasade", href: "/tjenester/vaske-fasade" },
];

const BY_LINKS = [
  { label: "Oslo", href: "/by/oslo" },
  { label: "Bergen", href: "/by/bergen" },
  { label: "Trondheim", href: "/by/trondheim" },
  { label: "Stavanger", href: "/by/stavanger" },
  { label: "Kristiansand", href: "/by/kristiansand" },
  { label: "Drammen", href: "/by/drammen" },
];

const INFO_LINKS = [
  { label: "Om oss", href: "/om-oss" },
  { label: "Priser", href: "/priser" },
  { label: "FAQ", href: "/faq" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Footer() {
  return (
    <footer className="bg-forest-900 text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="container-site py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-10 bg-forest-700 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6"/></svg>
              </div>
              <span className="font-display font-bold text-heading-md text-white">Fasadeteknikk</span>
            </Link>
            <p className="text-body-sm text-forest-200 leading-relaxed max-w-[260px]">
              Norges ledende plattform for fasade og fasadearbeid. Vi kobler deg med kvalifiserte firma i hele landet.
            </p>
          </div>
          <div>
            <h3 className="font-display font-semibold text-heading-sm text-white mb-4">Tjenester</h3>
            <ul className="space-y-2.5">
              {TJENESTE_LINKS.map((l) => (<li key={l.href}><Link href={l.href} className="text-body-sm text-forest-300 hover:text-white transition-colors">{l.label}</Link></li>))}
            </ul>
          </div>
          <div>
            <h3 className="font-display font-semibold text-heading-sm text-white mb-4">Populære byer</h3>
            <ul className="space-y-2.5">
              {BY_LINKS.map((l) => (<li key={l.href}><Link href={l.href} className="text-body-sm text-forest-300 hover:text-white transition-colors">{l.label}</Link></li>))}
            </ul>
          </div>
          <div>
            <h3 className="font-display font-semibold text-heading-sm text-white mb-4">Informasjon</h3>
            <ul className="space-y-2.5">
              {INFO_LINKS.map((l) => (<li key={l.href}><Link href={l.href} className="text-body-sm text-forest-300 hover:text-white transition-colors">{l.label}</Link></li>))}
            </ul>
            <Link href="/kontakt" className="btn-primary inline-flex text-[0.875rem] px-5 py-2.5 mt-6">Få gratis tilbud</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-forest-800">
        <div className="container-site py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-caption text-forest-400">&copy; {new Date().getFullYear()} Fasadeteknikk.no. Alle rettigheter forbeholdt.</p>
          <p className="text-caption text-forest-500">Kun kvalifiserte og seriøse fagfolk</p>
        </div>
      </div>
    </footer>
  );
}

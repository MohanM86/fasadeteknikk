"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "Tjenester", href: "/tjenester/fasaderehabilitering", children: [
    { label: "Fasaderehabilitering", href: "/tjenester/fasaderehabilitering" },
    { label: "Bytte kledning", href: "/tjenester/bytte-kledning" },
    { label: "Male hus utvendig", href: "/tjenester/male-hus-utvendig" },
    { label: "Etterisolering", href: "/tjenester/etterisolering" },
    { label: "Vaske fasade", href: "/tjenester/vaske-fasade" },
  ]},
  { label: "Priser", href: "/priser" },
  { label: "Finn firma", href: "/by/oslo" },
  { label: "Artikler", href: "/artikler/hva-koster-fasaderehabilitering" },
  { label: "Om oss", href: "/om-oss" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <>
      <header className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/95 backdrop-blur-md border-b border-sand-300/50 shadow-card-sm" : "bg-transparent"
      )}>
        <div className="container-site">
          <div className="flex items-center justify-between h-16 lg:h-[72px]">
            <Link href="/" className="flex items-center gap-2.5 group" aria-label="Fasadeteknikk – til forsiden">
              <div className="w-9 h-9 rounded-10 bg-forest-900 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6"/></svg>
              </div>
              <span className="font-display font-bold text-heading-md text-forest-900 hidden sm:block">Fasadeteknikk</span>
            </Link>

            <nav className="hidden lg:flex items-center gap-1" aria-label="Hovednavigasjon">
              {NAV.map((item) => (
                <div key={item.label} className="relative" onMouseEnter={() => item.children && setDropdown(item.label)} onMouseLeave={() => setDropdown(null)}>
                  <Link href={item.href} className="flex items-center gap-1 px-3.5 py-2 rounded-8 text-body-sm font-medium text-slate-700 hover:text-forest-700 hover:bg-forest-50 transition-colors">
                    {item.label}
                    {item.children && <ChevronDown className={cn("w-3.5 h-3.5 transition-transform", dropdown === item.label && "rotate-180")} />}
                  </Link>
                  {item.children && (
                    <div className={cn(
                      "absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white rounded-16 border border-sand-300/60 shadow-card-lg py-2 z-50 transition-all duration-200 origin-top",
                      dropdown === item.label ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
                    )}>
                      {item.children.map((child) => (
                        <Link key={child.href} href={child.href} className="flex items-center px-4 py-2.5 text-body-sm text-slate-700 hover:bg-forest-50 hover:text-forest-700 transition-colors rounded-8 mx-1">{child.label}</Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <Link href="/kontakt" className="btn-primary text-[0.875rem] px-5 py-2.5">Få gratis tilbud</Link>
            </div>

            <button onClick={() => setMobileOpen(v => !v)} className="lg:hidden p-2 rounded-8 hover:bg-sand-200 transition-colors" aria-label={mobileOpen ? "Lukk meny" : "Åpne meny"}>
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div className={cn("fixed inset-0 z-40 lg:hidden transition-all duration-300", mobileOpen ? "pointer-events-auto" : "pointer-events-none")}>
        <div className={cn("absolute inset-0 bg-forest-950/50 backdrop-blur-sm transition-opacity", mobileOpen ? "opacity-100" : "opacity-0")} onClick={() => setMobileOpen(false)} />
        <div className={cn("absolute top-0 right-0 bottom-0 w-80 max-w-[calc(100vw-3rem)] bg-white shadow-card-lg transition-transform duration-300 overflow-y-auto", mobileOpen ? "translate-x-0" : "translate-x-full")}>
          <div className="flex items-center justify-between px-5 py-4 border-b border-sand-200">
            <span className="font-display font-bold text-heading-sm text-forest-900">Meny</span>
            <button onClick={() => setMobileOpen(false)} className="p-2 rounded-8 hover:bg-sand-100"><X className="w-4 h-4" /></button>
          </div>
          <nav className="px-4 py-4 space-y-1">
            {NAV.map((item) => (
              <div key={item.label}>
                <Link href={item.href} className="flex items-center px-3 py-3 rounded-10 text-body-md font-medium text-slate-800 hover:bg-forest-50 hover:text-forest-700 transition-colors" onClick={() => setMobileOpen(false)}>{item.label}</Link>
                {item.children && (
                  <div className="ml-4 mt-1 space-y-1 mb-2">
                    {item.children.map((child) => (
                      <Link key={child.href} href={child.href} className="block px-3 py-2 rounded-8 text-body-sm text-slate-600 hover:bg-forest-50 hover:text-forest-700" onClick={() => setMobileOpen(false)}>{child.label}</Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <div className="px-4 py-4 border-t border-sand-200">
            <Link href="/kontakt" className="btn-primary w-full justify-center" onClick={() => setMobileOpen(false)}>Få gratis tilbud</Link>
          </div>
        </div>
      </div>

      <div className="h-16 lg:h-[72px]" aria-hidden />
    </>
  );
}

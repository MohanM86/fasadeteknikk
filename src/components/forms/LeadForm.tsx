"use client";

import { useState } from "react";
import { CheckCircle, ChevronRight, Loader2, AlertCircle, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

const TJENESTE_OPTIONS = [
  { value: "fasaderehabilitering", label: "Fasaderehabilitering" },
  { value: "bytte-kledning", label: "Bytte kledning" },
  { value: "male-hus", label: "Male hus utvendig" },
  { value: "etterisolering", label: "Etterisolering" },
  { value: "vaske-fasade", label: "Vaske fasade" },
  { value: "annet", label: "Annet" },
];

interface LeadFormProps {
  kilde?: string;
  className?: string;
  defaultTjeneste?: string;
}

export default function LeadForm({ kilde, className, defaultTjeneste }: LeadFormProps) {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    navn: "", telefon: "", postnummer: "", tjeneste: defaultTjeneste || "", beskrivelse: "", samtykke: false,
  });

  function update(patch: Partial<typeof form>) { setForm(prev => ({ ...prev, ...patch })); }

  const canSubmit = form.navn && form.telefon && form.postnummer && form.tjeneste && form.samtykke;

  async function handleSubmit() {
    if (!canSubmit) return;
    setLoading(true); setError(null);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, kilde }),
      });
      if (!res.ok) throw new Error("Feil");
      setSubmitted(true);
    } catch { setError("Noe gikk galt. Prøv igjen eller ring oss."); }
    finally { setLoading(false); }
  }

  if (submitted) {
    return (
      <div className={cn("form-surface p-8 text-center animate-fade-in", className)}>
        <div className="w-16 h-16 rounded-full bg-success-50 border-2 border-success-500 flex items-center justify-center mx-auto mb-5">
          <CheckCircle className="w-8 h-8 text-success-600" />
        </div>
        <h3 className="font-display font-bold text-heading-lg text-slate-900 mb-2">Forespørsel mottatt!</h3>
        <p className="text-body-md text-slate-600 max-w-sm mx-auto">Vi kobler deg med kvalifiserte fasadefirma i ditt område. Forvent svar innen 24 timer.</p>
      </div>
    );
  }

  return (
    <div className={cn("form-surface p-6 sm:p-8", className)}>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-12 bg-forest-900 flex items-center justify-center">
          <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6"/></svg>
        </div>
        <div>
          <h3 className="font-display font-bold text-heading-md text-slate-900">Få gratis tilbud</h3>
          <p className="text-caption text-slate-500">Uforpliktende, innen 24 timer</p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="label label-required" htmlFor="lead-tjeneste">Hva trenger du?</label>
          <select id="lead-tjeneste" className="select" value={form.tjeneste} onChange={e => update({ tjeneste: e.target.value })}>
            <option value="" disabled>Velg tjeneste</option>
            {TJENESTE_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
        </div>
        <div>
          <label className="label label-required" htmlFor="lead-navn">Fullt navn</label>
          <input id="lead-navn" type="text" className="input" placeholder="Ola Nordmann" value={form.navn} onChange={e => update({ navn: e.target.value })} autoComplete="name" />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="label label-required" htmlFor="lead-telefon">Telefon</label>
            <input id="lead-telefon" type="tel" className="input" placeholder="900 00 000" value={form.telefon} onChange={e => update({ telefon: e.target.value })} autoComplete="tel" />
          </div>
          <div>
            <label className="label label-required" htmlFor="lead-postnr">Postnummer</label>
            <input id="lead-postnr" type="text" className="input" placeholder="0150" value={form.postnummer} onChange={e => update({ postnummer: e.target.value })} maxLength={4} autoComplete="postal-code" />
          </div>
        </div>
        <div>
          <label className="label" htmlFor="lead-beskrivelse">Beskrivelse (valgfritt)</label>
          <textarea id="lead-beskrivelse" className="input resize-none" rows={3} placeholder="Fortell kort om prosjektet..." value={form.beskrivelse} onChange={e => update({ beskrivelse: e.target.value })} />
        </div>

        <label className="flex items-start gap-3 cursor-pointer group">
          <div className="relative flex-shrink-0 mt-0.5">
            <input type="checkbox" className="sr-only peer" checked={form.samtykke} onChange={e => update({ samtykke: e.target.checked })} />
            <div className={cn("w-5 h-5 rounded-6 border-2 flex items-center justify-center transition-all", form.samtykke ? "bg-forest-900 border-forest-900" : "border-slate-300 group-hover:border-forest-600")}>
              {form.samtykke && <CheckCircle className="w-3 h-3 text-white" />}
            </div>
          </div>
          <span className="text-body-sm text-slate-600">Jeg samtykker til at mine opplysninger behandles for å formidle tilbud fra fasadefirma.</span>
        </label>

        {error && (
          <div className="flex items-center gap-2 p-3 bg-error-50 border border-error-500/20 rounded-10 text-body-sm text-error-600">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />{error}
          </div>
        )}

        <button type="button" onClick={handleSubmit} disabled={!canSubmit || loading}
          className={cn("btn-primary w-full justify-center", (!canSubmit || loading) && "opacity-50 cursor-not-allowed shadow-none")}>
          {loading ? <><Loader2 className="w-4 h-4 animate-spin" />Sender...</> : <>Send forespørsel <ChevronRight className="w-4 h-4" /></>}
        </button>

        <div className="flex items-center justify-center gap-2 text-caption text-slate-400">
          <Shield className="w-3.5 h-3.5" />
          <span>Trygt og uforpliktende. Ingen skjulte kostnader.</span>
        </div>
      </div>
    </div>
  );
}

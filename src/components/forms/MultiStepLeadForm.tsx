"use client";
import { useState } from "react";
import { ArrowRight, ArrowLeft, CheckCircle, Loader2, Shield, Clock, Star, Calendar, Zap, Timer } from "lucide-react";
import { cn } from "@/lib/utils";

const TJENESTER = [
  "Fasaderehabilitering",
  "Bytte kledning",
  "Male hus utvendig",
  "Etterisolering",
  "Vaske fasade",
  "Murfugerehabilitering",
  "Pussreparasjon",
  "Legge nytt tak",
  "Takreparasjon",
  "Takrenner og beslag",
  "Annet",
];

const URGENCY = [
  { id: "akutt", label: "Akutt", desc: "Trenger hjelp i dag / snarest", icon: <Zap className="w-4 h-4" /> },
  { id: "innen-uken", label: "Innen uken", desc: "Innen 3–7 dager", icon: <Timer className="w-4 h-4" /> },
  { id: "planlagt", label: "Planlagt", desc: "Kan vente 1–2 uker eller mer", icon: <Calendar className="w-4 h-4" /> },
];

interface MultiStepLeadFormProps {
  kilde?: string;
}

export default function MultiStepLeadForm({ kilde }: MultiStepLeadFormProps) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    tjeneste: "",
    hastegrad: "planlagt",
    navn: "",
    telefon: "",
    postnummer: "",
    beskrivelse: "",
    samtykke: false,
  });

  function update(patch: Partial<typeof form>) {
    setForm((prev) => ({ ...prev, ...patch }));
  }

  const canStep2 = form.tjeneste && form.hastegrad;
  const canStep3 = form.navn && form.telefon && form.postnummer;
  const canSubmit = canStep2 && canStep3 && form.samtykke;

  async function handleSubmit() {
    if (!canSubmit) return;
    setLoading(true);
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, kilde }),
      });
      setSubmitted(true);
    } catch {
      /* noop */
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="form-surface p-8 text-center animate-fade-in">
        <div className="w-16 h-16 rounded-full bg-green-50 border-2 border-green-500 flex items-center justify-center mx-auto mb-5">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="font-display font-bold text-heading-lg text-neutral-900 mb-2">
          Forespørsel mottatt!
        </h3>
        <p className="text-body-md text-neutral-500 max-w-sm mx-auto">
          Vi kobler deg med kvalifiserte fasadefirma i ditt område. Forvent svar innen 24 timer.
        </p>
      </div>
    );
  }

  return (
    <div className="form-surface p-6 sm:p-8">
      {/* Step indicator */}
      <div className="flex items-center gap-3 mb-7">
        {[
          { n: 1, label: "Oppdrag" },
          { n: 2, label: "Kontakt" },
          { n: 3, label: "Detaljer" },
        ].map((s, i) => (
          <div key={s.n} className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => s.n < step && setStep(s.n)}
              className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all",
                step === s.n
                  ? "bg-brand-500 text-white shadow-cta"
                  : step > s.n
                  ? "bg-green-500 text-white"
                  : "bg-neutral-100 text-neutral-400"
              )}
            >
              {step > s.n ? <CheckCircle className="w-4 h-4" /> : s.n}
            </button>
            <span
              className={cn(
                "text-sm font-medium hidden sm:block",
                step === s.n ? "text-neutral-900" : "text-neutral-400"
              )}
            >
              {s.label}
            </span>
            {i < 2 && (
              <div
                className={cn(
                  "h-px flex-1 min-w-[20px]",
                  step > s.n ? "bg-green-300" : "bg-neutral-200"
                )}
              />
            )}
          </div>
        ))}
      </div>

      {/* Step 1: Oppdrag */}
      {step === 1 && (
        <div className="space-y-5 animate-fade-in">
          <div>
            <label className="label label-required">Hva trenger du hjelp med?</label>
            <select
              className="select"
              value={form.tjeneste}
              onChange={(e) => update({ tjeneste: e.target.value })}
            >
              <option value="" disabled>
                Velg type oppdrag...
              </option>
              {TJENESTER.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="label label-required">Hvor raskt trenger du hjelp?</label>
            <div className="grid grid-cols-3 gap-2">
              {URGENCY.map((u) => (
                <button
                  key={u.id}
                  type="button"
                  onClick={() => update({ hastegrad: u.id })}
                  className={cn(
                    "p-3 rounded-12 border-2 text-left transition-all",
                    form.hastegrad === u.id
                      ? "border-brand-500 bg-brand-50/50"
                      : "border-neutral-200 hover:border-neutral-300"
                  )}
                >
                  <div
                    className={cn(
                      "font-display font-bold text-sm mb-0.5",
                      form.hastegrad === u.id ? "text-brand-600" : "text-neutral-900"
                    )}
                  >
                    {u.label}
                  </div>
                  <div className="text-[11px] text-neutral-400 leading-tight">{u.desc}</div>
                </button>
              ))}
            </div>
          </div>
          <button
            type="button"
            onClick={() => canStep2 && setStep(2)}
            disabled={!canStep2}
            className={cn(
              "btn-primary w-full justify-center",
              !canStep2 && "opacity-50 cursor-not-allowed shadow-none"
            )}
          >
            Neste steg <ArrowRight className="w-4 h-4" />
          </button>
          <div className="flex items-center justify-center gap-2 text-xs text-neutral-400">
            <Shield className="w-3.5 h-3.5" />
            Dine opplysninger er trygge og deles kun med kvalifiserte firma.
          </div>
        </div>
      )}

      {/* Step 2: Kontakt */}
      {step === 2 && (
        <div className="space-y-4 animate-fade-in">
          <div>
            <label className="label label-required">Fullt navn</label>
            <input
              type="text"
              className="input"
              placeholder="Ola Nordmann"
              value={form.navn}
              onChange={(e) => update({ navn: e.target.value })}
              autoComplete="name"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="label label-required">Telefon</label>
              <input
                type="tel"
                className="input"
                placeholder="900 00 000"
                value={form.telefon}
                onChange={(e) => update({ telefon: e.target.value })}
                autoComplete="tel"
              />
            </div>
            <div>
              <label className="label label-required">Postnummer</label>
              <input
                type="text"
                className="input"
                placeholder="0150"
                value={form.postnummer}
                onChange={(e) => update({ postnummer: e.target.value })}
                maxLength={4}
                autoComplete="postal-code"
              />
            </div>
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="btn-secondary flex-1 justify-center"
            >
              <ArrowLeft className="w-4 h-4" /> Tilbake
            </button>
            <button
              type="button"
              onClick={() => canStep3 && setStep(3)}
              disabled={!canStep3}
              className={cn(
                "btn-primary flex-1 justify-center",
                !canStep3 && "opacity-50 cursor-not-allowed shadow-none"
              )}
            >
              Neste steg <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Detaljer */}
      {step === 3 && (
        <div className="space-y-4 animate-fade-in">
          <div>
            <label className="label">Beskrivelse (valgfritt)</label>
            <textarea
              className="input resize-none"
              rows={3}
              placeholder="Fortell kort om prosjektet..."
              value={form.beskrivelse}
              onChange={(e) => update({ beskrivelse: e.target.value })}
            />
          </div>
          <label className="flex items-start gap-3 cursor-pointer group">
            <div className="relative flex-shrink-0 mt-0.5">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={form.samtykke}
                onChange={(e) => update({ samtykke: e.target.checked })}
              />
              <div
                className={cn(
                  "w-5 h-5 rounded-6 border-2 flex items-center justify-center transition-all",
                  form.samtykke
                    ? "bg-brand-500 border-brand-500"
                    : "border-neutral-300 group-hover:border-brand-400"
                )}
              >
                {form.samtykke && <CheckCircle className="w-3 h-3 text-white" />}
              </div>
            </div>
            <span className="text-body-sm text-neutral-500">
              Jeg samtykker til at mine opplysninger behandles for å formidle tilbud fra fasadefirma.
              Se <a href="/personvern" className="text-brand-500 hover:text-brand-600 underline">personvernerklæring</a>.
            </span>
          </label>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="btn-secondary flex-1 justify-center"
            >
              <ArrowLeft className="w-4 h-4" /> Tilbake
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              disabled={!canSubmit || loading}
              className={cn(
                "btn-primary flex-1 justify-center",
                (!canSubmit || loading) && "opacity-50 cursor-not-allowed shadow-none"
              )}
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" /> Sender...
                </>
              ) : (
                <>
                  Send forespørsel <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
          <div className="flex items-center justify-center gap-4 text-xs text-neutral-400">
            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> Svar innen 24t</span>
            <span className="flex items-center gap-1"><Star className="w-3 h-3" /> Gratis tilbud</span>
            <span className="flex items-center gap-1"><Shield className="w-3 h-3" /> Uforpliktende</span>
          </div>
        </div>
      )}
    </div>
  );
}

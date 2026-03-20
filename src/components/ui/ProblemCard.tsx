"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type Severity = "kritisk" | "alvorlig" | "moderat" | "obs" | "vanlig";

const SEVERITY_STYLES: Record<Severity, { bg: string; text: string; label: string; dot: string; cardBg: string }> = {
  kritisk: { bg: "bg-red-100", text: "text-red-600", label: "KRITISK", dot: "bg-red-500", cardBg: "bg-red-50/40" },
  alvorlig: { bg: "bg-orange-100", text: "text-orange-600", label: "ALVORLIG", dot: "bg-orange-500", cardBg: "bg-orange-50/40" },
  moderat: { bg: "bg-yellow-100", text: "text-yellow-700", label: "MODERAT", dot: "bg-yellow-500", cardBg: "bg-yellow-50/30" },
  obs: { bg: "bg-amber-100", text: "text-amber-600", label: "OBS", dot: "bg-amber-500", cardBg: "bg-amber-50/30" },
  vanlig: { bg: "bg-blue-100", text: "text-blue-600", label: "VANLIG", dot: "bg-blue-500", cardBg: "bg-blue-50/30" },
};

interface ProblemCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  severity: Severity;
  detail: string;
  solution?: string;
}

export default function ProblemCard({ icon, title, subtitle, severity, detail, solution }: ProblemCardProps) {
  const [open, setOpen] = useState(false);
  const s = SEVERITY_STYLES[severity];

  return (
    <div
      className={cn(
        "border rounded-16 overflow-hidden transition-all duration-300",
        open ? `${s.cardBg} border-neutral-200 shadow-card` : "bg-white border-neutral-200 hover:border-neutral-300"
      )}
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-4 p-5 text-left"
      >
        <div className={cn("w-10 h-10 rounded-12 flex items-center justify-center flex-shrink-0", s.bg)}>
          <span className={s.text}>{icon}</span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2.5 mb-0.5">
            <h3 className="font-display font-bold text-sm text-neutral-900">{title}</h3>
            <span className={cn("text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full", s.bg, s.text)}>
              {s.label}
            </span>
          </div>
          <p className="text-xs text-neutral-400">{subtitle}</p>
        </div>
        <ChevronDown
          className={cn(
            "w-5 h-5 text-neutral-300 transition-transform duration-300 flex-shrink-0",
            open && "rotate-180 text-neutral-500"
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-5 pb-5 pt-0">
          <div className="pl-14 space-y-3">
            <p className="text-body-sm text-neutral-600 leading-relaxed">{detail}</p>
            {solution && (
              <div className="bg-white/70 rounded-10 p-3 border border-neutral-200">
                <div className="text-[10px] font-bold uppercase tracking-wider text-green-600 mb-1">Anbefalt tiltak</div>
                <p className="text-body-sm text-neutral-600">{solution}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

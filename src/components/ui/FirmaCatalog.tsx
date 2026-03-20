"use client";
import { useState, useMemo } from "react";
import {
  Search,
  SlidersHorizontal,
  Building2,
  MapPin,
  Calendar,
  ShieldCheck,
  Briefcase,
  ChevronDown,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { Firma } from "@/types";

const KATEGORI_CONFIG: Record<
  string,
  { label: string; color: string; bg: string; border: string }
> = {
  "Maling og overflate": {
    label: "Maling og overflate",
    color: "text-amber-700",
    bg: "bg-amber-50",
    border: "border-amber-200",
  },
  "Murer og fasade": {
    label: "Murer og fasade",
    color: "text-rose-700",
    bg: "bg-rose-50",
    border: "border-rose-200",
  },
  "Spesialisert fasadearbeid": {
    label: "Spesialisert fasadearbeid",
    color: "text-blue-700",
    bg: "bg-blue-50",
    border: "border-blue-200",
  },
  "Grunnarbeid og isolering": {
    label: "Grunnarbeid og isolering",
    color: "text-emerald-700",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
  },
  "Annet byggearbeid": {
    label: "Annet byggearbeid",
    color: "text-neutral-600",
    bg: "bg-neutral-50",
    border: "border-neutral-200",
  },
};

const ORGFORM_LABELS: Record<string, string> = {
  AS: "Aksjeselskap",
  ENK: "Enkeltpersonforetak",
  NUF: "Norskregistrert utenlandsk foretak",
};

interface FirmaCatalogProps {
  firma: Firma[];
  kommuneNavn: string;
}

export default function FirmaCatalog({
  firma,
  kommuneNavn,
}: FirmaCatalogProps) {
  const [search, setSearch] = useState("");
  const [activeKategorier, setActiveKategorier] = useState<Set<string>>(
    new Set()
  );
  const [activeOrgform, setActiveOrgform] = useState<Set<string>>(new Set());
  const [showMvaOnly, setShowMvaOnly] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [visibleCount, setVisibleCount] = useState(20);

  // Compute available categories from data
  const kategorier = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const f of firma) {
      counts[f.kategori] = (counts[f.kategori] || 0) + 1;
    }
    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .map(([k, c]) => ({ kategori: k, count: c }));
  }, [firma]);

  const orgforms = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const f of firma) {
      counts[f.orgform] = (counts[f.orgform] || 0) + 1;
    }
    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .map(([k, c]) => ({ orgform: k, count: c }));
  }, [firma]);

  // Filter firms
  const filtered = useMemo(() => {
    let result = firma;

    if (search.trim()) {
      const q = search.toLowerCase().trim();
      result = result.filter(
        (f) =>
          f.navn.toLowerCase().includes(q) ||
          f.adresse.toLowerCase().includes(q) ||
          f.postnummer.includes(q) ||
          f.aktivitet.toLowerCase().includes(q) ||
          f.orgnr.includes(q)
      );
    }

    if (activeKategorier.size > 0) {
      result = result.filter((f) => activeKategorier.has(f.kategori));
    }

    if (activeOrgform.size > 0) {
      result = result.filter((f) => activeOrgform.has(f.orgform));
    }

    if (showMvaOnly) {
      result = result.filter((f) => f.mva);
    }

    return result;
  }, [firma, search, activeKategorier, activeOrgform, showMvaOnly]);

  const visibleFirma = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  function toggleKategori(k: string) {
    setActiveKategorier((prev) => {
      const next = new Set(prev);
      if (next.has(k)) next.delete(k);
      else next.add(k);
      return next;
    });
    setVisibleCount(20);
  }

  function toggleOrgform(k: string) {
    setActiveOrgform((prev) => {
      const next = new Set(prev);
      if (next.has(k)) next.delete(k);
      else next.add(k);
      return next;
    });
    setVisibleCount(20);
  }

  function clearFilters() {
    setSearch("");
    setActiveKategorier(new Set());
    setActiveOrgform(new Set());
    setShowMvaOnly(false);
    setVisibleCount(20);
  }

  const hasActiveFilters =
    search.trim() ||
    activeKategorier.size > 0 ||
    activeOrgform.size > 0 ||
    showMvaOnly;

  return (
    <div>
      {/* Header + stats */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
        <div>
          <h2 className="font-display font-bold text-heading-xl text-neutral-900">
            Fasadefirma i {kommuneNavn}
          </h2>
          <p className="text-body-sm text-neutral-500 mt-1">
            {firma.length} registrerte firma fra Brønnøysundregistrene
          </p>
        </div>
        <div className="flex items-center gap-2 text-caption text-neutral-400">
          <Building2 className="w-3.5 h-3.5" />
          Kilde: Enhetsregisteret
        </div>
      </div>

      {/* Search bar */}
      <div className="relative mb-4">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-neutral-400 pointer-events-none" />
        <input
          type="text"
          placeholder="Søk etter firma, adresse, postnummer..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setVisibleCount(20);
          }}
          className="input pl-11 pr-4"
        />
        {search && (
          <button
            onClick={() => setSearch("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-neutral-100 transition-colors"
          >
            <X className="w-4 h-4 text-neutral-400" />
          </button>
        )}
      </div>

      {/* Category filter chips */}
      <div className="flex flex-wrap gap-2 mb-4">
        {kategorier.map(({ kategori, count }) => {
          const config = KATEGORI_CONFIG[kategori] || KATEGORI_CONFIG["Annet byggearbeid"];
          const isActive = activeKategorier.has(kategori);
          return (
            <button
              key={kategori}
              onClick={() => toggleKategori(kategori)}
              className={cn(
                "inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold border transition-all duration-200",
                isActive
                  ? "bg-brand-500 text-white border-brand-500 shadow-sm"
                  : `${config.bg} ${config.color} ${config.border} hover:shadow-sm`
              )}
            >
              {config.label}
              <span
                className={cn(
                  "inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full text-[10px] font-bold",
                  isActive
                    ? "bg-white/20 text-white"
                    : "bg-white/80 text-neutral-500"
                )}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Advanced filters toggle */}
      <div className="flex items-center gap-3 mb-5">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className={cn(
            "flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-semibold border transition-all",
            showFilters
              ? "bg-neutral-900 text-white border-neutral-900"
              : "bg-white text-neutral-600 border-neutral-200 hover:border-neutral-300"
          )}
        >
          <SlidersHorizontal className="w-3.5 h-3.5" />
          Flere filtre
          <ChevronDown
            className={cn(
              "w-3 h-3 transition-transform",
              showFilters && "rotate-180"
            )}
          />
        </button>

        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-semibold text-brand-500 hover:bg-brand-50 transition-colors"
          >
            <X className="w-3 h-3" />
            Nullstill
          </button>
        )}

        <div className="ml-auto text-caption text-neutral-400">
          Viser {Math.min(visibleCount, filtered.length)} av {filtered.length}{" "}
          firma
        </div>
      </div>

      {/* Advanced filters panel */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          showFilters ? "max-h-[200px] opacity-100 mb-6" : "max-h-0 opacity-0"
        )}
      >
        <div className="bg-neutral-50 rounded-16 border border-neutral-200 p-5 space-y-4">
          <div>
            <div className="text-label text-neutral-500 mb-2">
              Selskapsform
            </div>
            <div className="flex flex-wrap gap-2">
              {orgforms.map(({ orgform, count }) => {
                const isActive = activeOrgform.has(orgform);
                return (
                  <button
                    key={orgform}
                    onClick={() => toggleOrgform(orgform)}
                    className={cn(
                      "px-3 py-1.5 rounded-full text-xs font-medium border transition-all",
                      isActive
                        ? "bg-neutral-900 text-white border-neutral-900"
                        : "bg-white text-neutral-600 border-neutral-200 hover:border-neutral-400"
                    )}
                  >
                    {ORGFORM_LABELS[orgform] || orgform} ({count})
                  </button>
                );
              })}
            </div>
          </div>
          <div>
            <label className="flex items-center gap-3 cursor-pointer group">
              <div className="relative flex-shrink-0">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={showMvaOnly}
                  onChange={() => {
                    setShowMvaOnly(!showMvaOnly);
                    setVisibleCount(20);
                  }}
                />
                <div
                  className={cn(
                    "w-5 h-5 rounded-6 border-2 flex items-center justify-center transition-all",
                    showMvaOnly
                      ? "bg-brand-500 border-brand-500"
                      : "border-neutral-300 group-hover:border-brand-400"
                  )}
                >
                  {showMvaOnly && (
                    <ShieldCheck className="w-3 h-3 text-white" />
                  )}
                </div>
              </div>
              <span className="text-body-sm text-neutral-600">
                Kun MVA-registrerte firma
              </span>
            </label>
          </div>
        </div>
      </div>

      {/* Results */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 bg-neutral-50 rounded-16 border border-neutral-200">
          <Search className="w-10 h-10 text-neutral-300 mx-auto mb-4" />
          <h3 className="font-display font-bold text-heading-md text-neutral-700 mb-2">
            Ingen firma funnet
          </h3>
          <p className="text-body-sm text-neutral-400 mb-4">
            Prøv å endre søkeord eller fjerne filtre.
          </p>
          <button
            onClick={clearFilters}
            className="text-sm font-semibold text-brand-500 hover:text-brand-600"
          >
            Nullstill alle filtre
          </button>
        </div>
      ) : (
        <>
          <div className="space-y-3">
            {visibleFirma.map((f) => {
              const config =
                KATEGORI_CONFIG[f.kategori] ||
                KATEGORI_CONFIG["Annet byggearbeid"];
              return (
                <div
                  key={f.orgnr}
                  className="bg-white border border-neutral-200 rounded-16 p-5 sm:p-6 hover:border-brand-300 hover:shadow-sm transition-all duration-200 group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      {/* Firma name + badges */}
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h3 className="font-display font-bold text-heading-sm text-neutral-900 group-hover:text-brand-600 transition-colors">
                          {f.navn}
                        </h3>
                        {f.mva && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-bold uppercase tracking-wider">
                            <ShieldCheck className="w-2.5 h-2.5" />
                            MVA
                          </span>
                        )}
                      </div>

                      {/* Category badge */}
                      <div
                        className={cn(
                          "inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold border mb-3",
                          config.bg,
                          config.color,
                          config.border
                        )}
                      >
                        <Briefcase className="w-3 h-3" />
                        {f.naceBeskrivelse}
                      </div>

                      {/* Activity description */}
                      {f.aktivitet && (
                        <p className="text-body-sm text-neutral-500 leading-relaxed mb-3 clamp-2">
                          {f.aktivitet}
                        </p>
                      )}

                      {/* Meta row */}
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-caption text-neutral-400">
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3 h-3" />
                          {f.adresse}, {f.postnummer} {f.poststed}
                        </span>
                        {f.stiftet && (
                          <span className="flex items-center gap-1.5">
                            <Calendar className="w-3 h-3" />
                            Stiftet {f.stiftet}
                          </span>
                        )}
                        <span className="flex items-center gap-1.5">
                          <Building2 className="w-3 h-3" />
                          {ORGFORM_LABELS[f.orgform] || f.orgform}
                        </span>
                      </div>
                    </div>

                    {/* Org number on right */}
                    <div className="flex-shrink-0 text-right">
                      <div className="text-[10px] font-semibold text-neutral-400 uppercase tracking-wider mb-0.5">
                        Org.nr
                      </div>
                      <div className="font-mono text-sm text-neutral-600 tracking-wide">
                        {f.orgnr.replace(
                          /(\d{3})(\d{3})(\d{3})/,
                          "$1 $2 $3"
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Load more button */}
          {hasMore && (
            <div className="text-center mt-8">
              <button
                onClick={() => setVisibleCount((prev) => prev + 20)}
                className="btn-secondary"
              >
                Vis flere firma ({filtered.length - visibleCount} gjenstår)
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          )}
        </>
      )}

      {/* Source attribution */}
      <div className="mt-8 pt-5 border-t border-neutral-200 text-center">
        <p className="text-caption text-neutral-400">
          Firmadata hentet fra Brønnøysundregistrene (Enhetsregisteret).
          Oppdateres jevnlig.
        </p>
      </div>
    </div>
  );
}

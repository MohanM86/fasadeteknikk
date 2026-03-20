/**
 * Firma data loader.
 *
 * Each kommune with firma data has a corresponding file in src/data/firma/
 * named by kommune slug (e.g. firma/oslo.ts).
 *
 * To add firma for a new kommune:
 * 1. Export from Brønnøysund with relevant NACE codes
 * 2. Upload the .gz file – Claude generates the .ts file
 * 3. Add the import to FIRMA_MAP below
 *
 * For fylker with a single kommune (like Oslo), the fylke slug
 * maps directly. For multi-kommune fylker, all kommune data is
 * merged when querying by fylke.
 */

import type { Firma } from "@/types";
import { getKommunerByFylke } from "@/data/geografi";

// === Kommune firma imports – add new ones here ===
import FIRMA_OSLO from "@/data/firma/oslo";

// Kommune slug → firma array
const FIRMA_MAP: Record<string, Firma[]> = {
  oslo: FIRMA_OSLO,
  // Add more as you upload data:
  // bergen: FIRMA_BERGEN,
  // trondheim: FIRMA_TRONDHEIM,
  // stavanger: FIRMA_STAVANGER,
  // baerum: FIRMA_BAERUM,
  // etc.
};

/** Get firma for a specific kommune */
export function getFirmaByKommune(slug: string): Firma[] {
  return FIRMA_MAP[slug] || [];
}

/** Check if a kommune has firma data */
export function hasFirmaData(slug: string): boolean {
  return slug in FIRMA_MAP && FIRMA_MAP[slug].length > 0;
}

/** Get firma count for a kommune */
export function getFirmaCount(slug: string): number {
  return (FIRMA_MAP[slug] || []).length;
}

/** Get all kommune slugs that have firma data */
export function getKommunerWithFirma(): string[] {
  return Object.keys(FIRMA_MAP).filter((k) => FIRMA_MAP[k].length > 0);
}

/**
 * Get all firma for a fylke by merging all kommune data within that fylke.
 * This handles both single-kommune fylker (Oslo) and multi-kommune ones.
 */
export function getFirmaByFylke(fylkeSlug: string): Firma[] {
  const kommuner = getKommunerByFylke(fylkeSlug);
  const allFirma: Firma[] = [];

  for (const kommune of kommuner) {
    const firma = FIRMA_MAP[kommune.slug];
    if (firma) {
      allFirma.push(...firma);
    }
  }

  // Sort alphabetically
  allFirma.sort((a, b) => a.navn.localeCompare(b.navn, "nb"));
  return allFirma;
}

/** Check if any kommune in a fylke has firma data */
export function hasFylkeFirmaData(fylkeSlug: string): boolean {
  return getFirmaByFylke(fylkeSlug).length > 0;
}

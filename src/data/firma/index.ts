/**
 * Firma data loader.
 *
 * Each kommune with firma data has a corresponding file in src/data/firma/
 * named by kommune slug (e.g. firma/oslo.ts).
 *
 * To add firma for a new kommune:
 * 1. Export from Brønnøysund with relevant NACE codes
 * 2. Run the transform script to generate the .ts file
 * 3. Add the import to the FIRMA_MAP below
 */

import type { Firma } from "@/types";

// Lazy imports – add new kommune firma files here
import FIRMA_OSLO from "@/data/firma/oslo";

const FIRMA_MAP: Record<string, Firma[]> = {
  oslo: FIRMA_OSLO,
  // Add more as you upload data:
  // bergen: FIRMA_BERGEN,
  // trondheim: FIRMA_TRONDHEIM,
  // stavanger: FIRMA_STAVANGER,
};

export function getFirmaByKommune(slug: string): Firma[] {
  return FIRMA_MAP[slug] || [];
}

export function hasFirmaData(slug: string): boolean {
  return slug in FIRMA_MAP;
}

export function getFirmaCount(slug: string): number {
  return (FIRMA_MAP[slug] || []).length;
}

/** Get all kommune slugs that have firma data */
export function getKommunerWithFirma(): string[] {
  return Object.keys(FIRMA_MAP);
}

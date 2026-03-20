import type { MetadataRoute } from "next";
import { BYER } from "@/data/byer";
import { TJENESTER } from "@/data/tjenester";

const BASE = "https://fasadeteknikk.no";
const ARTIKKEL_SLUGS = ["hva-koster-fasaderehabilitering", "nar-bor-du-bytte-kledning", "tre-vs-mur-fasade", "hvordan-vedlikeholde-fasade"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: "daily", priority: 1.0 },
    { url: `${BASE}/priser`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/kontakt`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/faq`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/om-oss`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
  ];
  const tjenesterPages: MetadataRoute.Sitemap = TJENESTER.map(t => ({ url: `${BASE}/tjenester/${t.slug}`, lastModified: now, changeFrequency: "monthly", priority: 0.9 }));
  const byPages: MetadataRoute.Sitemap = BYER.map(b => ({ url: `${BASE}/by/${b.slug}`, lastModified: now, changeFrequency: "monthly", priority: 0.8 }));
  const artikkelPages: MetadataRoute.Sitemap = ARTIKKEL_SLUGS.map(slug => ({ url: `${BASE}/artikler/${slug}`, lastModified: now, changeFrequency: "weekly", priority: 0.8 }));
  return [...staticPages, ...tjenesterPages, ...byPages, ...artikkelPages];
}

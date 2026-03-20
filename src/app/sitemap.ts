import type { MetadataRoute } from "next";
import { BYER } from "@/data/byer";
import { TJENESTER } from "@/data/tjenester";
import { FYLKER, KOMMUNER } from "@/data/geografi";

const BASE = "https://fasadeteknikk.no";
const ARTIKKEL_SLUGS = ["hva-koster-fasaderehabilitering", "nar-bor-du-bytte-kledning", "tre-vs-mur-fasade", "hvordan-vedlikeholde-fasade"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: "daily", priority: 1.0 },
    { url: `${BASE}/priser`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/kontakt`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/faq`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/artikler`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/om-oss`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/personvern`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/fylke`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];
  const tjenesterPages: MetadataRoute.Sitemap = TJENESTER.map(t => ({ url: `${BASE}/tjenester/${t.slug}`, lastModified: now, changeFrequency: "monthly", priority: 0.9 }));
  const byPages: MetadataRoute.Sitemap = BYER.map(b => ({ url: `${BASE}/by/${b.slug}`, lastModified: now, changeFrequency: "monthly", priority: 0.8 }));
  const fylkePages: MetadataRoute.Sitemap = FYLKER.map(f => ({ url: `${BASE}/fylke/${f.slug}`, lastModified: now, changeFrequency: "monthly", priority: 0.8 }));
  const kommunePages: MetadataRoute.Sitemap = KOMMUNER.map(k => ({ url: `${BASE}/kommune/${k.slug}`, lastModified: now, changeFrequency: "monthly", priority: 0.7 }));
  const artikkelPages: MetadataRoute.Sitemap = ARTIKKEL_SLUGS.map(slug => ({ url: `${BASE}/artikler/${slug}`, lastModified: now, changeFrequency: "weekly", priority: 0.8 }));
  return [...staticPages, ...tjenesterPages, ...byPages, ...fylkePages, ...kommunePages, ...artikkelPages];
}

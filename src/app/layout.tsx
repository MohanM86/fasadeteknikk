import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import { buildOrgSchema } from "@/lib/utils";

export const metadata: Metadata = {
  metadataBase: new URL("https://fasadeteknikk.no"),
  title: { default: "Fasadeteknikk – Alt om fasade i Norge", template: "%s | Fasadeteknikk.no" },
  description: "Norges ledende plattform for fasade og fasadearbeid. Finn kvalifiserte firma for fasade, tak, kledning, maling og etterisolering. Gratis tilbud.",
  keywords: ["fasade","fasadeteknikk","fasaderehabilitering","bytte kledning","male hus utvendig","etterisolering fasade","vaske fasade","kledning hus","fasade pris","fasadefirma","legge nytt tak","takreparasjon","takrenner","taktekking pris","takfirma","fasade kommune","fasade fylke"],
  authors: [{ name: "Fasadeteknikk", url: "https://fasadeteknikk.no" }],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "website", locale: "nb_NO", url: "https://fasadeteknikk.no", siteName: "Fasadeteknikk", title: "Fasadeteknikk – Alt om fasade i Norge", description: "Norges ledende plattform for fasade, tak og fasadearbeid. Gratis tilbud fra kvalifiserte firma.", images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "Fasadeteknikk" }] },
  icons: { icon: [{ url: "/favicon.ico", sizes: "any" }, { url: "/icon.svg", type: "image/svg+xml" }], apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }] },
  manifest: "/manifest.webmanifest",
  alternates: { canonical: "https://fasadeteknikk.no" },
};

export const viewport: Viewport = {
  width: "device-width", initialScale: 1,
  themeColor: [{ media: "(prefers-color-scheme: light)", color: "#FAFAFA" }, { media: "(prefers-color-scheme: dark)", color: "#1A1A1A" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgSchema = buildOrgSchema();
  return (
    <html lang="nb">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      </head>
      <body className="min-h-screen bg-neutral-50 font-sans antialiased">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] btn-primary">Hopp til innhold</a>
        <div id="main-content">{children}</div>
      </body>
    </html>
  );
}

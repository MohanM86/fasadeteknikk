export interface By {
  navn: string; slug: string; fylke: string; innbyggere: number;
  kortTekst: string; langTekst: string; seoTitle: string; seoDesc: string;
}
export interface Tjeneste {
  id: string; slug: string; tittel: string; kortTittel: string;
  kortBeskrivelse: string; prisMin: number; prisMax: number; prisenhet: string;
  intro: string; fordeler: string[]; faq: FAQItem[]; seoTitle: string; seoDesc: string;
}
export interface FAQItem { sporsmal: string; svar: string; }
export interface BreadcrumbItem { navn: string; href?: string; }
export interface LeadFormData {
  navn: string; telefon: string; postnummer: string;
  tjeneste: string; beskrivelse?: string; samtykke: boolean;
}
export interface Firma {
  navn: string;
  orgnr: string;
  orgform: string;
  nace: string;
  naceBeskrivelse: string;
  kategori: string;
  adresse: string;
  postnummer: string;
  poststed: string;
  stiftet: string;
  mva: boolean;
  aktivitet: string;
}

import type { FAQItem } from "@/types";

/* ===================================================================
   DYPT SEO-INNHOLD PER FYLKE
   Brukes av fylke/[slug]/page.tsx for å injisere rikt, lokaltilpasset
   innhold som rangerer i Google og besvarer AI-søk.
   Andre fylker uten innhold faller tilbake til generisk mal.
   =================================================================== */

export interface FylkePristabell {
  tjeneste: string;
  prisPerKvm: string;
  totalprosjekt: string;
  merknad: string;
}

export interface FylkeFirmaKategori {
  kategori: string;
  antall: number;
  beskrivelse: string;
}

export interface FylkeContent {
  /* Meta */
  seoTitle: string;
  seoDesc: string;
  ogTitle: string;
  ogDesc: string;

  /* Hero */
  heroIntro: string;

  /* H2 seksjoner */
  hvaErFasadeteknikk: {
    overskrift: string;
    avsnitt: string[];
  };
  narTrengerMan: {
    overskrift: string;
    punkter: { tittel: string; tekst: string }[];
  };
  priser: {
    overskrift: string;
    intro: string;
    tabell: FylkePristabell[];
    faktorer: string[];
  };
  fasadetyper: {
    overskrift: string;
    typer: { tittel: string; tekst: string }[];
  };
  vanligeProblemer: {
    overskrift: string;
    problemer: { tittel: string; tekst: string }[];
  };
  velgeFirma: {
    overskrift: string;
    tips: string[];
    feil: string[];
  };
  firmaOversikt: {
    overskrift: string;
    intro: string;
    kategorier: FylkeFirmaKategori[];
  };

  /* FAQ – minimum 10 */
  faq: FAQItem[];

  /* Intern linking */
  naboOmrader: { navn: string; href: string; beskrivelse: string }[];

  /* Schema extras */
  schemaServiceTypes: string[];
  schemaGeo: { lat: string; lng: string };
}

/* ===================================================================
   OSLO
   =================================================================== */
const OSLO_CONTENT: FylkeContent = {
  seoTitle: "Fasadeteknikk Oslo – 357 firma, priser og guide 2026",
  seoDesc:
    "Alt om fasadeteknikk i Oslo. 357 registrerte firma, priser fra 300 kr/m², tips til valg av firma og lokale forhold. Gratis tilbud.",
  ogTitle: "Fasadeteknikk Oslo – 357 firma, priser og guide 2026",
  ogDesc:
    "Finn kvalifiserte fasadefirma i Oslo. Prisoversikt, lokale tips og gratis tilbud fra 357 registrerte firma.",

  heroIntro:
    "Oslo er Norges desidert største marked for fasadeteknikk, med 357 registrerte firma innen maling, mur, fasaderehabilitering og spesialisert byggearbeid. Hovedstaden har en unik bygningssammensetning – fra 1800-tallets murgårder i sentrum til drabantbyenes betongblokker og moderne glassfasader i Bjørvika. Priser for fasadearbeid i Oslo ligger typisk mellom 300 og 4 500 kr per kvadratmeter, avhengig av type arbeid og fasadens tilstand. Beste sesong er april til oktober, men firmaer bør kontaktes allerede i vintermånedene for å sikre plass.",

  hvaErFasadeteknikk: {
    overskrift: "Hva er fasadeteknikk i Oslo?",
    avsnitt: [
      "Fasadeteknikk i Oslo dekker alle typer arbeid på bygningens ytterflater: utvendig maling, rehabilitering av mur og puss, utskifting av kledning, etterisolering, fasadevask og montering av beslag og takrenner.",
      "Oslo skiller seg fra resten av Norge på flere punkter. For det første er andelen murfasader vesentlig høyere enn i andre norske byer. Murgårdene langs Karl Johan, på Frogner, Majorstuen, St. Hanshaugen og Grünerløkka utgjør en stor del av den eldre bygningsmassen og krever spesialisert murerarbeid – ikke trekledningskompetanse. For det andre er tilgjengelighet en konstant utfordring. Trange bakgårder, bymiljørestriksjoner, parkeringsforhold for stillaser og naboavklaringer gjør at fasadearbeid i Oslo ofte krever mer logistikkplanlegging enn i mindre tettsteder.",
      "I tillegg har Oslo et aktivt vernemiljø. Plan- og bygningsetaten har strenge retningslinjer for fasadeendringer i verneområder som Kvadraturen, Kampen og deler av Grünerløkka. Her kan fargevalg, materialtype og detaljutforming være regulert gjennom hensynssoner i kommuneplanen.",
    ],
  },

  narTrengerMan: {
    overskrift: "Når trenger man fasadearbeid i Oslo?",
    punkter: [
      {
        tittel: "Synlig forvitring og sprekker",
        tekst:
          "Murfasader i indre Oslo utvikler over tid forvitrede fuger der kalkmørtelen smuler opp. Pussede fasader får nettverkssprekker (krakelering) som slipper fukt inn bak overflaten. Begge deler krever profesjonell utbedring – ikke bare overflatisk fylling.",
      },
      {
        tittel: "Fuktproblemer og mugg",
        tekst:
          "Oslos klima med kalde vintre og varm sommerluft gir store temperatursvingninger. Kondens bak kledning er et vanlig problem, spesielt på nordvendte fasader i drabantbyene. Fuktmerker innvendig, mugglukt eller flassende maling er varselsignaler.",
      },
      {
        tittel: "Aldring av maling og overflate",
        tekst:
          "Trefasader i Oslo bør males hvert 8–12 år. Sørvendte fasader slites raskere av UV-stråling. Når malingen flasser, kalkerer eller kriter (gir hvitt belegg på fingrene), er det på tide.",
      },
      {
        tittel: "Energikrav og komfort",
        tekst:
          "Mange eldre boliger i Oslo har utilstrekkelig isolasjon. Etterisolering av fasade reduserer varmetapet med opptil 40 % og gir bedre inneklima. Med Oslos strømpriser er tilbakebetalingstiden ofte under 10 år.",
      },
      {
        tittel: "Verdiøkning ved salg",
        tekst:
          "En nyrehabilitert fasade øker boligens verdi med 10–20 % ifølge bransjeestimater. I Oslos boligmarked, der kvadratmeterprisen er landets høyeste, kan det utgjøre betydelige beløp.",
      },
    ],
  },

  priser: {
    overskrift: "Hva koster fasadeteknikk i Oslo?",
    intro:
      "Prisene i Oslo ligger typisk 10–20 % over landsgjennomsnittet. Dette skyldes høyere arbeidskostnader, dyrere logistikk (parkering, stillasplassering, tilgjengelighet) og strengere krav fra kommune og byantikvaar.",
    tabell: [
      {
        tjeneste: "Male hus utvendig",
        prisPerKvm: "350–900 kr",
        totalprosjekt: "55 000–140 000 kr",
        merknad: "Inkl. forarbeid og to strøk",
      },
      {
        tjeneste: "Vaske fasade",
        prisPerKvm: "60–220 kr",
        totalprosjekt: "8 000–30 000 kr",
        merknad: "Alge-/mosefjerning ekstra",
      },
      {
        tjeneste: "Bytte kledning",
        prisPerKvm: "1 300–3 800 kr",
        totalprosjekt: "200 000–550 000 kr",
        merknad: "Inkl. vindsperre og isolasjon",
      },
      {
        tjeneste: "Etterisolering",
        prisPerKvm: "900–2 800 kr",
        totalprosjekt: "140 000–400 000 kr",
        merknad: "Enova-støtte kan redusere 15–30 %",
      },
      {
        tjeneste: "Komplett rehabilitering",
        prisPerKvm: "1 800–5 000 kr",
        totalprosjekt: "280 000–750 000 kr",
        merknad: "Alt-i-ett med ny overflate",
      },
      {
        tjeneste: "Murfugerehabilitering",
        prisPerKvm: "800–2 200 kr",
        totalprosjekt: "120 000–300 000 kr",
        merknad: "Vanlig for murgårder",
      },
      {
        tjeneste: "Pussreparasjon",
        prisPerKvm: "600–1 500 kr",
        totalprosjekt: "80 000–200 000 kr",
        merknad: "Lokale reparasjoner rimeligere",
      },
    ],
    faktorer: [
      "Tilgjengelighet er den største kostnadsdriveren. Stillasleie i trange bakgårder med begrenset adkomst kan koste 30–50 % mer enn ved fri fasade. Parkeringsavgifter for anleggskjøretøy i sentrum kommer i tillegg.",
      "Fasadens tilstand avgjør omfanget – en murgård med gjennomgående fugeforvitring koster vesentlig mer å rehabilitere enn én med lokale skader.",
      "Materialvalg spiller også inn: fibersementplater koster mer enn trekledning, men krever minimalt vedlikehold.",
      "Sesong og kapasitet påvirker prisbildet. Å bestille i januar–mars gir ofte 5–15 % lavere pris enn i høysesong.",
    ],
  },

  fasadetyper: {
    overskrift: "Vanlige fasadetyper i Oslo",
    typer: [
      {
        tittel: "Mur og tegl (1880–1930)",
        tekst:
          "Murgårdene preger indre Oslo: Frogner, Majorstuen, St. Hanshaugen, Grünerløkka, Kampen og Tøyen. Disse bygningene har bærende murvegger i tegl, ofte med pussede og malte fasader. Rehabilitering krever spesialisert murerarbeid: omfuging, pussreparasjon og kalkmaling.",
      },
      {
        tittel: "Trekledning (1920–1960)",
        tekst:
          "Villastrøkene på Nordstrand, Lambertseter, Grefsen, Kjelsås og Ullern har utstrakt trefasadebebyggelse. Liggende panel er vanligst, men stående panel forekommer også. Vedlikehold med maling og utskifting av råteskadet bord er standard.",
      },
      {
        tittel: "Betong og elementbygg (1960–1985)",
        tekst:
          "Drabantbyene – Grorud, Stovner, Romsås, Ammerud, Tveita, Lambertseter – har store mengder betongelementbygg. Disse har ofte originalfasade fra byggeåret og står foran omfattende rehabilitering med etterisolering og ny kledning.",
      },
      {
        tittel: "Puss og fasadeplater (1950–2000)",
        tekst:
          "Blokker og rekkehus i hele byen har pussede betong- eller lecafasader. Pussen sprekker over tid, og mange har fått montert fasadeplater utenpå som alternativ til ny puss.",
      },
      {
        tittel: "Moderne glass, stål og kompositt (2000–i dag)",
        tekst:
          "Bjørvika, Barcode, Sørenga, Løren og Hasle har moderne fasadekledning i glass, aluminium og kompositt. Disse krever spesialisert vedlikehold med vindusvask på høyde, fugefornyelse og overflatebehandling.",
      },
    ],
  },

  vanligeProblemer: {
    overskrift: "Vanlige fasadeproblemer i Oslo",
    problemer: [
      {
        tittel: "Frostsprengning i mur",
        tekst:
          "Oslo har gjennomsnittlig 100 frostdøgn i året. Vann som trenger inn i fuger og sprekker fryser, utvider seg og sprenger løs materiale. Murgårdene i indre by er mest utsatte, spesielt fasader som mangler takutstikk og har defekte takrenner.",
      },
      {
        tittel: "Kondens bak kledning",
        tekst:
          "Store temperaturforskjeller mellom inne og ute – spesielt på kalde vinterdager – gir kondensproblemer bak utilstrekkelig ventilert kledning. Problemet er utbredt i eldre trehus uten dampsperre.",
      },
      {
        tittel: "Alger og mose",
        tekst:
          "Nordvendte fasader, og spesielt de som ligger i skygge av trær, utvikler alge- og mosebekledning. Fuktigheten fra Oslofjorden bidrar. Problemet er mest synlig på pussede og malte fasader i lys farge.",
      },
      {
        tittel: "Setningsskader",
        tekst:
          "Oslos grunnforhold varierer fra fjell til leire. Områder med marin leire (store deler av Groruddalen, Nordstrand, deler av indre øst) kan oppleve setninger som gir diagonale sprekker i murfasader. Slike skader krever konstruktiv vurdering før overflatebehandling.",
      },
      {
        tittel: "Saltskader",
        tekst:
          "Veisalt om vinteren spruter opp på sokkelfasader langs trafikkerte gater. Saltet trekker fukt og skaper utblomstringer og avflassing på mur og puss.",
      },
    ],
  },

  velgeFirma: {
    overskrift: "Hvordan velge riktig fasadefirma i Oslo",
    tips: [
      "Sjekk at firmaet er registrert i Brønnøysundregistrene med relevant NACE-kode (43.340 for maler og glass, 43.910 for murerarbeid, 43.990 for spesialisert fasadearbeid). Bekreft at firmaet er aktivt, MVA-registrert og ikke under konkursbehandling.",
      "For større fasadeprosjekter bør firmaet ha sentral godkjenning fra Direktoratet for byggkvalitet (DiBK). Godkjenningen viser at firmaet har dokumentert kompetanse innen sin tiltaksklasse.",
      "Be om referanser fra lignende prosjekter i Oslo. Et firma som har erfaring med murgårdsrehabilitering på Frogner håndterer utfordringene annerledes enn et firma som primært jobber med trekledning.",
      "Innhent alltid minst tre tilbud. Prisvariasjonen mellom firma i Oslo kan være 30–50 % for samme prosjekt. Sammenlign ikke bare totalpris, men også materialspesifikasjoner, garantivilkår og fremdriftsplan.",
      "Firmaet skal ha ansvarsforsikring som dekker skader på din eiendom under arbeidet. Be om skriftlig bekreftelse fra forsikringsselskapet.",
    ],
    feil: [
      "Å velge utelukkende på laveste pris – billigste tilbud betyr ofte at forarbeid kuttes.",
      "Å ikke avklare stillasbehov og kostnader i tilbudet.",
      "Å ikke sjekke om fargevalget krever godkjenning fra Plan- og bygningsetaten i verneområder.",
      "Å betale hele beløpet på forskudd – betal heller 10 % ved oppstart, 60 % underveis og 30 % ved ferdigstillelse.",
    ],
  },

  firmaOversikt: {
    overskrift: "Fasadeteknikk firmaer i Oslo",
    intro:
      "Oslo har Norges tetteste konsentrasjon av fasadefirma med 357 registrerte bedrifter fordelt på fem kategorier:",
    kategorier: [
      {
        kategori: "Maling og overflatebehandling",
        antall: 217,
        beskrivelse:
          "Den klart største kategorien. Dekker utvendig maling av trefasader, murfasader og betong. Mange håndterer også innvendig maling og våtrom.",
      },
      {
        kategori: "Spesialisert fasadearbeid",
        antall: 55,
        beskrivelse:
          "Firma som spesialiserer seg på fasaderehabilitering, kledningsmontering, pussarbeid og fasadeplater. Tar ofte større prosjekter for borettslag og sameier.",
      },
      {
        kategori: "Grunnarbeid og isolering",
        antall: 47,
        beskrivelse:
          "Dekker etterisolering, grunnmursarbeider og drenering knyttet til fasade. Viktig kategori for energioppgradering av eldre boligmasse.",
      },
      {
        kategori: "Murer og fasade",
        antall: 31,
        beskrivelse:
          "Spesialiserte murerverksteder som håndterer fuging, teglrehabilitering, puss og naturstein. Kritisk kompetanse for Oslos murgårder.",
      },
      {
        kategori: "Annet byggearbeid",
        antall: 7,
        beskrivelse:
          "Tverrfaglige firma som tilbyr fasadearbeid som del av et bredere tjenestespekter.",
      },
    ],
  },

  faq: [
    {
      sporsmal: "Hva koster fasadeteknikk i Oslo?",
      svar: "Typiske priser i Oslo: maling 350–900 kr/m², kledning 1 300–3 800 kr/m², etterisolering 900–2 800 kr/m², komplett rehabilitering 1 800–5 000 kr/m². Prisene ligger 10–20 % over landsgjennomsnittet på grunn av høyere arbeidskostnader og dyrere logistikk.",
    },
    {
      sporsmal: "Hvor mange fasadefirma finnes i Oslo?",
      svar: "Det er 357 registrerte firma i Oslo ifølge Brønnøysundregistrene: 217 innen maling, 55 innen spesialisert fasadearbeid, 47 innen grunnarbeid og isolering, 31 innen murer og fasade, og 7 innen annet byggearbeid.",
    },
    {
      sporsmal: "Trenger jeg byggetillatelse for fasadearbeid i Oslo?",
      svar: "Vedlikehold i samme farge og materiale er søknadsfritt. Endring av farge, materiale eller utseende kan kreve byggemelding. I hensynssoner (verneområder som Frogner, Kampen, Grünerløkka, Kvadraturen) kreves alltid avklaring med Plan- og bygningsetaten.",
    },
    {
      sporsmal: "Når er beste tid for fasadearbeid i Oslo?",
      svar: "Sesongen strekker seg fra april til oktober. Temperaturen bør være over 5 °C og det bør være tørt. Bestill gjerne i januar–mars for bedre tilgjengelighet og 5–15 % lavere priser.",
    },
    {
      sporsmal: "Kan jeg få Enova-støtte til etterisolering i Oslo?",
      svar: "Ja. Enova gir støtte til etterisolering av yttervegger gjennom ordningen for energitiltak i bolig. I tillegg tilbyr Oslo kommune i perioder egne tilskuddsordninger for energioppgradering. Sjekk enova.no for gjeldende satser.",
    },
    {
      sporsmal: "Hva er de vanligste fasadetypene i Oslo?",
      svar: "Murgårder fra 1880–1930 i indre by, trekledning fra 1920–1960 i villastrøkene, betongelementbygg fra 1960–1985 i drabantbyene, og moderne glass- og stålfasader i Bjørvika og nyere utbyggingsområder.",
    },
    {
      sporsmal: "Hvor lang tid tar fasaderehabilitering i Oslo?",
      svar: "Maling av enebolig tar 1–2 uker. Bytte kledning 2–4 uker. Komplett rehabilitering 4–8 uker. For borettslag og sameier tar prosjekter gjerne 2–6 måneder inkludert planlegging og styrebehandling.",
    },
    {
      sporsmal: "Hvilke bydeler i Oslo har mest behov for fasadearbeid?",
      svar: "Indre by (Grünerløkka, Frogner, St. Hanshaugen, Gamle Oslo) har flest prosjekter knyttet til rehabilitering av eldre murgårder. Drabantbyene (Grorud, Stovner, Søndre Nordstrand) har stor etterspørsel etter etterisolering og kledningsutskifting.",
    },
    {
      sporsmal: "Hva bør jeg sjekke før jeg velger fasadefirma i Oslo?",
      svar: "Sjekk at firmaet er registrert i Brønnøysundregistrene, har sentral godkjenning hos DiBK, er MVA-registrert, kan vise referanser fra lignende prosjekter i Oslo, og tilbyr skriftlig garanti. Innhent alltid minst tre tilbud.",
    },
    {
      sporsmal: "Gjelder det spesielle regler i verneområder i Oslo?",
      svar: "Ja. I hensynssoner etter plan- og bygningsloven – blant annet deler av Frogner, Kampen, Grünerløkka og Kvadraturen – regulerer kommunen fargevalg, materialtype og detaljutforming. Byantikvaren gir uttalelser i slike saker.",
    },
    {
      sporsmal: "Hva er vanlige fasadeproblemer i Oslo?",
      svar: "Oslos innlandsklima gir utfordringer med frostsprengning i mur (100 frostdøgn i året), kondens bak kledning fra temperatursvingninger, alge- og mosegjenvekst på nordvendte fasader, setningsskader på marin leire, og saltskader langs trafikkerte gater.",
    },
  ],

  naboOmrader: [
    { navn: "Bærum", href: "/kommune/baerum", beskrivelse: "94 registrerte firma" },
    { navn: "Lillestrøm", href: "/kommune/lillestrom", beskrivelse: "94 registrerte firma" },
    { navn: "Nordre Follo", href: "/kommune/nordre-follo", beskrivelse: "Ski og Oppegård" },
    { navn: "Lørenskog", href: "/kommune/lorenskog", beskrivelse: "Lokale fasadefirma" },
    { navn: "Rælingen", href: "/kommune/ralingen", beskrivelse: "Fasadearbeid i Rælingen" },
    { navn: "Nittedal", href: "/kommune/nittedal", beskrivelse: "Firma i Nittedal" },
    { navn: "Nesodden", href: "/kommune/nesodden", beskrivelse: "Fasadefirma på Nesodden" },
    { navn: "Asker", href: "/kommune/asker", beskrivelse: "Fasadearbeid i Asker" },
  ],

  schemaServiceTypes: [
    "Fasaderehabilitering",
    "Kledning",
    "Maling utvendig",
    "Etterisolering",
    "Fasadevask",
    "Murfasade rehabilitering",
    "Pussarbeid",
    "Betongrehabilitering",
    "Murfugerehabilitering",
  ],
  schemaGeo: { lat: "59.9139", lng: "10.7522" },
};

/* ===================================================================
   REGISTRY – legg til flere fylker her etter hvert
   =================================================================== */
const FYLKE_CONTENT: Record<string, FylkeContent> = {
  oslo: OSLO_CONTENT,
};

export function getFylkeContent(slug: string): FylkeContent | null {
  return FYLKE_CONTENT[slug] ?? null;
}

export function hasFylkeContent(slug: string): boolean {
  return slug in FYLKE_CONTENT;
}

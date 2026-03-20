import type { Tjeneste } from "@/types";

export const TJENESTER: Tjeneste[] = [
  {
    id: "fasaderehabilitering", slug: "fasaderehabilitering", tittel: "Fasaderehabilitering", kortTittel: "Rehabilitering",
    kortBeskrivelse: "Komplett rehabilitering av fasaden, fra utbedring av skader til full oppgradering med moderne materialer.",
    prisMin: 1500, prisMax: 4500, prisenhet: "per kvm",
    intro: "Fasaderehabilitering innebærer en grundig gjennomgang og utbedring av bygningens yttervegger. Det kan dreie seg om alt fra reparasjon av sprekker i mur og puss til full utskifting av kledning med ny vindsperre og isolasjon.",
    fordeler: ["Øker boligens verdi med 10–20 prosent", "Bedre energieffektivitet og lavere strømregning", "Beskytter mot fukt, råte og frostskader", "Gir boligen et moderne og friskt utseende", "Forebygger kostbare skader i fremtiden"],
    faq: [
      { sporsmal: "Hva koster fasaderehabilitering?", svar: "Prisen varierer fra 1 500 til 4 500 kr per kvadratmeter avhengig av tilstand, materialvalg og tilgjengelighet. For en gjennomsnittlig enebolig på 150 kvm fasade ligger totalprisen mellom 225 000 og 675 000 kr." },
      { sporsmal: "Hvor lang tid tar en fasaderehabilitering?", svar: "En typisk enebolig tar mellom 2 og 6 uker avhengig av omfanget. Blokker og større bygg kan ta flere måneder." },
      { sporsmal: "Trenger jeg byggetillatelse?", svar: "Vanlig vedlikehold og rehabilitering med samme type kledning krever normalt ikke søknad. Endring av fasadens utseende eller materialer kan kreve byggemelding til kommunen." },
      { sporsmal: "Når på året bør man rehabilitere fasaden?", svar: "Sesongen fra april til oktober er best. Temperaturen bør være over 5 grader, og det bør ikke regne under arbeidet." },
    ],
    seoTitle: "Fasaderehabilitering – Pris og tilbud 2026", seoDesc: "Hva koster fasaderehabilitering? Se priser, finn kvalifiserte firma og bestill gratis tilbud. Komplett guide.",
  },
  {
    id: "bytte-kledning", slug: "bytte-kledning", tittel: "Bytte kledning på hus", kortTittel: "Bytte kledning",
    kortBeskrivelse: "Utskifting av gammel kledning til ny, med ny vindsperre og eventuell etterisolering.",
    prisMin: 1200, prisMax: 3500, prisenhet: "per kvm",
    intro: "Å bytte kledning er et av de mest effektive tiltakene for å fornye husets utseende og beskytte det mot vær og vind. Gammel, skadet kledning slipper inn fukt som kan føre til råte, mugg og strukturelle skader.",
    fordeler: ["Nytt, moderne utseende på boligen", "Beskytter mot fukt, vind og temperatursvingninger", "Mulighet for etterisolering samtidig", "Øker markedsverdien på eiendommen", "Reduserer vedlikeholdsbehovet fremover"],
    faq: [
      { sporsmal: "Hva koster det å bytte kledning?", svar: "Typisk pris ligger mellom 1 200 og 3 500 kr per kvadratmeter inkludert materialer og arbeid. For en standard enebolig koster det ofte mellom 180 000 og 500 000 kr totalt." },
      { sporsmal: "Hvilken type kledning er best?", svar: "Trekledning er mest brukt i Norge og gir et tradisjonelt utseende. Fibersement er vedlikeholdsfritt. Kompositt gir moderne uttrykk." },
      { sporsmal: "Bør jeg etterisolere samtidig?", svar: "Ja, det er absolutt anbefalt. Når kledningen er av, er det minimalt med ekstra arbeid å legge inn ny isolasjon." },
    ],
    seoTitle: "Bytte kledning på hus – Pris og guide 2026", seoDesc: "Hva koster det å bytte kledning? Se priser på trekledning, fibersement og kompositt. Gratis tilbud fra lokale firma.",
  },
  {
    id: "male-hus", slug: "male-hus-utvendig", tittel: "Male hus utvendig", kortTittel: "Maling utvendig",
    kortBeskrivelse: "Profesjonell utvendig maling av fasade, med riktig forarbeid og kvalitetsmaling som varer.",
    prisMin: 300, prisMax: 800, prisenhet: "per kvm",
    intro: "Utvendig maling er det viktigste vedlikeholdstiltaket for trefasader. Riktig utført maling beskytter treverket mot fukt, UV-stråler og temperatursvingninger, og forlenger levetiden med mange år.",
    fordeler: ["Beskytter treverket mot fukt og sopp", "Gir huset et friskt og innbydende utseende", "Billigste måten å fornye fasaden på", "Forebygger råte og kostbar utskifting", "Øker eiendommens verdi ved salg"],
    faq: [
      { sporsmal: "Hva koster det å male huset utvendig?", svar: "Typisk pris er 300 til 800 kr per kvadratmeter. For en vanlig enebolig ligger totalprisen mellom 45 000 og 120 000 kr inkludert stillas, forarbeid og to strøk maling." },
      { sporsmal: "Hvor ofte bør man male huset?", svar: "Trefasader bør males hvert 8 til 12 år avhengig av eksponering. Sørvendte og vestvendte vegger slites raskere enn nordvendte." },
      { sporsmal: "Kan jeg male huset selv?", svar: "Ja, men det krever riktig utstyr (stillas), forarbeid (skraping, vasking, grunning) og egnede malingsprodukter. Profesjonelle gir bedre resultat og garanterer arbeidet." },
    ],
    seoTitle: "Male hus utvendig – Pris og tips 2026", seoDesc: "Hva koster det å male huset? Se priser, finn lokale malerfirma og bestill gratis tilbud. Komplett guide.",
  },
  {
    id: "etterisolering", slug: "etterisolering", tittel: "Etterisolering av fasade", kortTittel: "Etterisolering",
    kortBeskrivelse: "Øk energieffektiviteten og reduser strømregningen med etterisolering av yttervegger.",
    prisMin: 800, prisMax: 2500, prisenhet: "per kvm",
    intro: "Etterisolering av fasaden er et av de mest lønnsomme energitiltakene du kan gjøre. Mange norske boliger fra 1960 til 1990 tallet har kun 10 cm isolasjon, langt under dagens standard på 20 til 25 cm.",
    fordeler: ["Reduserer varmetapet med opptil 40 prosent", "Lavere strømregning, typisk 10 000 til 25 000 kr per år", "Bedre inneklima og jevnere temperatur", "Kan gi støtte fra Enova (inntil 20 prosent)", "Øker boligens energimerking og verdi"],
    faq: [
      { sporsmal: "Hva koster etterisolering av fasade?", svar: "Prisen ligger mellom 800 og 2 500 kr per kvadratmeter avhengig av tykkelse og metode. For en enebolig med 150 kvm fasade kan totalprisen bli 120 000 til 375 000 kr." },
      { sporsmal: "Kan jeg få støtte fra Enova?", svar: "Ja, Enova gir støtte til etterisolering av boliger. Sjekk enova.no for oppdaterte satser og vilkår. Støtten kan dekke inntil 20 prosent av kostnadene." },
      { sporsmal: "Bør jeg etterisolere innenfra eller utenfra?", svar: "Utvendig etterisolering er nesten alltid å foretrekke. Det unngår kuldebroer, bevarer innvendig areal og beskytter hele konstruksjonen." },
    ],
    seoTitle: "Etterisolering av fasade – Pris og guide 2026", seoDesc: "Hva koster etterisolering? Se priser, Enova-støtte og bestill tilbud. Spar opptil 40% på oppvarming.",
  },
  {
    id: "vaske-fasade", slug: "vaske-fasade", tittel: "Vaske og rengjøre fasade", kortTittel: "Fasadevask",
    kortBeskrivelse: "Profesjonell rengjøring av fasaden fjerner alger, mose, smuss og forurensning.",
    prisMin: 50, prisMax: 200, prisenhet: "per kvm",
    intro: "Over tid samler fasaden alger, mose, smuss og forurensning som bryter ned materialet. Regelmessig vask forlenger levetiden til kledning og maling, og gjør at boligen ser velholdt ut.",
    fordeler: ["Fjerner alger, mose og grønnbelegg", "Forlenger levetiden til maling og kledning", "Forbereder fasaden for maling eller beis", "Gir boligen et rent og velholdt utseende", "Forebygger fukt og råteskader"],
    faq: [
      { sporsmal: "Hva koster fasadevask?", svar: "Prisen varierer fra 50 til 200 kr per kvadratmeter avhengig av metode og tilgjengelighet. For en vanlig enebolig ligger prisen mellom 8 000 og 30 000 kr." },
      { sporsmal: "Kan jeg bruke høytrykkspyler på fasaden?", svar: "Det anbefales ikke på trefasader da det kan presse vann inn i treverket og skade overflaten. Bruk lavtrykkspyler eller myk børste med riktig vaskemiddel." },
      { sporsmal: "Hvor ofte bør fasaden vaskes?", svar: "Hvert 2 til 5 år avhengig av beliggenhet. Boliger nær skog og vann trenger hyppigere vask enn boliger i tørrere områder." },
    ],
    seoTitle: "Vaske fasade – Pris og metoder 2026", seoDesc: "Hva koster fasadevask? Se priser, metoder og bestill gratis tilbud. Fjern alger og mose profesjonelt.",
  },
  {
    id: "legge-nytt-tak", slug: "legge-nytt-tak", tittel: "Legge nytt tak", kortTittel: "Nytt tak",
    kortBeskrivelse: "Komplett takskifte med ny taktekking, undertak, isolasjon og beslag. Beskytter boligen i 30–50 år.",
    prisMin: 1500, prisMax: 4000, prisenhet: "per kvm",
    intro: "Å legge nytt tak er en av de viktigste investeringene du gjør i boligen. Et godt tak beskytter hele konstruksjonen mot fukt, vind og temperatursvingninger. Enten du velger takstein, takpapp, stålplater eller skifer, er riktig utførelse avgjørende for levetiden.",
    fordeler: [
      "Beskytter hele boligen mot fukt og lekkasjer",
      "Nytt tak varer 30 til 50 år med riktige materialer",
      "Mulighet for etterisolering av taket samtidig",
      "Øker boligens verdi og energimerking",
      "Reduserer risiko for kostbare vannskader",
      "Moderne takløsninger gir bedre ventilasjon",
    ],
    faq: [
      { sporsmal: "Hva koster det å legge nytt tak?", svar: "Prisen varierer fra 1 500 til 4 000 kr per kvadratmeter avhengig av materialvalg og takkonstruksjon. For en vanlig enebolig med 120 kvm tak ligger totalprisen mellom 180 000 og 480 000 kr inkludert materialer og arbeid." },
      { sporsmal: "Hvilken type taktekking er best?", svar: "Betongtakstein er mest brukt og rimeligst. Stålplater er lette og lekre. Skifer er dyrest men varer lengst (over 100 år). Takpapp brukes mest på flate tak og tilbygg." },
      { sporsmal: "Hvor lang tid tar et takskifte?", svar: "En typisk enebolig tar 1 til 3 uker avhengig av kompleksitet, værforhold og om det skal etterisoleres samtidig." },
      { sporsmal: "Bør jeg etterisolere taket samtidig?", svar: "Ja, det er absolutt anbefalt. Opp til 25 prosent av varmetapet i en bolig går gjennom taket. Når taket er av, er det minimalt med ekstra arbeid å oppgradere isolasjonen." },
    ],
    seoTitle: "Legge nytt tak – Pris og guide 2026", seoDesc: "Hva koster det å legge nytt tak? Se priser på takstein, ståltak og skifer. Få gratis tilbud fra lokale takfirma.",
  },
  {
    id: "takreparasjon", slug: "takreparasjon", tittel: "Takreparasjon", kortTittel: "Takreparasjon",
    kortBeskrivelse: "Reparasjon av taklekkasjer, ødelagte takstein, slitt takpapp og andre skader på taket.",
    prisMin: 500, prisMax: 2500, prisenhet: "per kvm",
    intro: "Takreparasjon er ofte nødvendig når det oppstår lekkasjer, takstein har forskjøvet seg, beslag er rustet eller takpapp er slitt. Rask reparasjon forhindrer at små problemer utvikler seg til store og kostbare vannskader i konstruksjonen.",
    fordeler: [
      "Stopper lekkasjer og forhindrer vannskader",
      "Vesentlig rimeligere enn komplett takskifte",
      "Forlenger levetiden til eksisterende tak",
      "Rask utførelse, ofte 1 til 3 dager",
      "Forebygger mugg og råte i takkonstruksjonen",
      "Beskytter isolasjon og innvendig himling",
    ],
    faq: [
      { sporsmal: "Hva koster takreparasjon?", svar: "Prisen varierer fra 500 til 2 500 kr per kvadratmeter avhengig av skadens omfang. Enkel reparasjon av noen takstein kan koste 5 000 til 15 000 kr, mens større reparasjoner kan koste 50 000 til 150 000 kr." },
      { sporsmal: "Hvordan vet jeg om taket trenger reparasjon?", svar: "Vanlige tegn er fuktflekker i taket innvendig, takstein som har forskjøvet seg, synlige sprekker i takpapp, rust på beslag, mose og algevekst, og is som danner seg langs takrenna om vinteren." },
      { sporsmal: "Kan jeg reparere taket selv?", svar: "Små reparasjoner som å legge tilbake en forskjøvet takstein kan gjøres selv, men for lekkasjer og større skader bør du alltid bruke fagfolk. Arbeid på tak innebærer fallrisiko og krever sikkerhetsutstyr." },
      { sporsmal: "Når bør jeg heller legge nytt tak?", svar: "Hvis taket er over 30 år gammelt, har gjentatte lekkasjer, eller mer enn 20 prosent av takflaten trenger reparasjon, er det ofte mer lønnsomt å legge nytt tak." },
    ],
    seoTitle: "Takreparasjon – Pris og tilbud 2026", seoDesc: "Hva koster takreparasjon? Se priser, finn lokale takfirma og bestill gratis tilbud. Stopp lekkasjer raskt.",
  },
  {
    id: "takrenner-beslag", slug: "takrenner-og-beslag", tittel: "Takrenner og beslag", kortTittel: "Takrenner",
    kortBeskrivelse: "Montering og utskifting av takrenner, nedløp og beslag. Leder vannet trygt bort fra fasade og grunnmur.",
    prisMin: 300, prisMax: 1200, prisenhet: "per løpemeter",
    intro: "Takrenner og beslag er en kritisk del av boligens vannavledning. Når takrennene fungerer som de skal, ledes regnvann og smeltevann trygt bort fra fasade, grunnmur og fundament. Defekte eller manglende takrenner er en av de vanligste årsakene til fuktskader på norske boliger.",
    fordeler: [
      "Beskytter fasade og grunnmur mot vannskader",
      "Forhindrer frostsprengning i grunnmur",
      "Moderne aluminium takrenner varer 30+ år",
      "Forbedrer boligens utseende og helhetsinntrykk",
      "Kan kombineres med løvfang for minimalt vedlikehold",
      "Viktig for å opprettholde garantier på fasadearbeid",
    ],
    faq: [
      { sporsmal: "Hva koster nye takrenner?", svar: "Prisen varierer fra 300 til 1 200 kr per løpemeter avhengig av materiale og tilgjengelighet. For en vanlig enebolig med 40 til 60 løpemeter takrenne ligger totalprisen mellom 15 000 og 60 000 kr inkludert montering." },
      { sporsmal: "Hvilken type takrenne er best?", svar: "Aluminium er mest populært og gir best balanse mellom pris, holdbarhet og utseende. Kobber er eksklusivt og varer lengst. Plast er rimeligst men har kortest levetid. Stål med coating er et godt alternativ." },
      { sporsmal: "Hvor ofte bør takrenner rengjøres?", svar: "Takrenner bør rengjøres minst en gang i året, gjerne om høsten etter løvfallet. Boliger nær trær kan trenge rengjøring 2 til 3 ganger i året. Løvfang kan redusere behovet vesentlig." },
      { sporsmal: "Kan jeg montere takrenner selv?", svar: "Det er mulig med riktig utstyr, men anbefales ikke. Feil monterte takrenner gir dårlig avrenning og kan føre til vannskader. Profesjonell montering sikrer riktig fall og tette skjøter." },
    ],
    seoTitle: "Takrenner og beslag – Pris og guide 2026", seoDesc: "Hva koster nye takrenner? Se priser på aluminium, kobber og stål. Få gratis tilbud fra lokale fagfolk.",
  },
];

export function getTjeneste(slug: string): Tjeneste | undefined {
  return TJENESTER.find((t) => t.slug === slug);
}

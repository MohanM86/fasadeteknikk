/**
 * Firma data loader – alle kommuner i Norge.
 * 346 kommuner med firmadata fra Brønnøysundregistrene.
 */

import type { Firma } from "@/types";
import { getKommunerByFylke } from "@/data/geografi";

// === Oslo (1 kommuner) ===
import FIRMA_OSLO from "@/data/firma/oslo";

// === Akershus (20 kommuner) ===
import FIRMA_ASKER from "@/data/firma/asker";
import FIRMA_AS_AKERSHUS from "@/data/firma/as-akershus";
import FIRMA_AURSKOG_HOLAND from "@/data/firma/aurskog-holand";
import FIRMA_BAERUM from "@/data/firma/baerum";
import FIRMA_ENEBAKK from "@/data/firma/enebakk";
import FIRMA_FROGN from "@/data/firma/frogn";
import FIRMA_GJERDRUM from "@/data/firma/gjerdrum";
import FIRMA_HURDAL from "@/data/firma/hurdal";
import FIRMA_JEVNAKER from "@/data/firma/jevnaker";
import FIRMA_LILLESTROM from "@/data/firma/lillestrom";
import FIRMA_LORENSKOG from "@/data/firma/lorenskog";
import FIRMA_LUNNER from "@/data/firma/lunner";
import FIRMA_NANNESTAD from "@/data/firma/nannestad";
import FIRMA_NESODDEN from "@/data/firma/nesodden";
import FIRMA_NES_AKERSHUS from "@/data/firma/nes-akershus";
import FIRMA_NITTEDAL from "@/data/firma/nittedal";
import FIRMA_NORDRE_FOLLO from "@/data/firma/nordre-follo";
import FIRMA_RALINGEN from "@/data/firma/ralingen";
import FIRMA_ULLENSAKER from "@/data/firma/ullensaker";
import FIRMA_VESTBY from "@/data/firma/vestby";

// === Østfold (11 kommuner) ===
import FIRMA_FREDRIKSTAD from "@/data/firma/fredrikstad";
import FIRMA_HALDEN from "@/data/firma/halden";
import FIRMA_HVALER from "@/data/firma/hvaler";
import FIRMA_INDRE_OSTFOLD from "@/data/firma/indre-ostfold";
import FIRMA_MARKER from "@/data/firma/marker";
import FIRMA_MOSS from "@/data/firma/moss";
import FIRMA_RADE from "@/data/firma/rade";
import FIRMA_RAKKESTAD from "@/data/firma/rakkestad";
import FIRMA_SARPSBORG from "@/data/firma/sarpsborg";
import FIRMA_SKIPTVET from "@/data/firma/skiptvet";
import FIRMA_VALER_OSTFOLD from "@/data/firma/valer-ostfold";

// === Buskerud (17 kommuner) ===
import FIRMA_AL from "@/data/firma/al";
import FIRMA_DRAMMEN from "@/data/firma/drammen";
import FIRMA_FLA from "@/data/firma/fla";
import FIRMA_FLESBERG from "@/data/firma/flesberg";
import FIRMA_GOL from "@/data/firma/gol";
import FIRMA_HEMSEDAL from "@/data/firma/hemsedal";
import FIRMA_HOL from "@/data/firma/hol";
import FIRMA_KONGSBERG from "@/data/firma/kongsberg";
import FIRMA_KRODSHERAD from "@/data/firma/krodsherad";
import FIRMA_LIER from "@/data/firma/lier";
import FIRMA_MODUM from "@/data/firma/modum";
import FIRMA_NESBYEN from "@/data/firma/nesbyen";
import FIRMA_NORE_OG_UVDAL from "@/data/firma/nore-og-uvdal";
import FIRMA_OVRE_EIKER from "@/data/firma/ovre-eiker";
import FIRMA_RINGERIKE from "@/data/firma/ringerike";
import FIRMA_ROLLAG from "@/data/firma/rollag";
import FIRMA_SIGDAL from "@/data/firma/sigdal";

// === Vestfold (6 kommuner) ===
import FIRMA_FAERDER from "@/data/firma/faerder";
import FIRMA_HOLMESTRAND from "@/data/firma/holmestrand";
import FIRMA_HORTEN from "@/data/firma/horten";
import FIRMA_LARVIK from "@/data/firma/larvik";
import FIRMA_SANDEFJORD from "@/data/firma/sandefjord";
import FIRMA_TONSBERG from "@/data/firma/tonsberg";

// === Telemark (17 kommuner) ===
import FIRMA_BAMBLE from "@/data/firma/bamble";
import FIRMA_DRANGEDAL from "@/data/firma/drangedal";
import FIRMA_FYRESDAL from "@/data/firma/fyresdal";
import FIRMA_HJARTDAL from "@/data/firma/hjartdal";
import FIRMA_KRAGERO from "@/data/firma/kragero";
import FIRMA_KVITESEID from "@/data/firma/kviteseid";
import FIRMA_MIDT_TELEMARK from "@/data/firma/midt-telemark";
import FIRMA_NISSEDAL from "@/data/firma/nissedal";
import FIRMA_NOME from "@/data/firma/nome";
import FIRMA_NOTODDEN from "@/data/firma/notodden";
import FIRMA_PORSGRUNN from "@/data/firma/porsgrunn";
import FIRMA_SELJORD from "@/data/firma/seljord";
import FIRMA_SILJAN from "@/data/firma/siljan";
import FIRMA_SKIEN from "@/data/firma/skien";
import FIRMA_TINN from "@/data/firma/tinn";
import FIRMA_TOKKE from "@/data/firma/tokke";
import FIRMA_VINJE from "@/data/firma/vinje";

// === Innlandet (46 kommuner) ===
import FIRMA_ALVDAL from "@/data/firma/alvdal";
import FIRMA_AMOT from "@/data/firma/amot";
import FIRMA_ASNES from "@/data/firma/asnes";
import FIRMA_DOVRE from "@/data/firma/dovre";
import FIRMA_EIDSKOG from "@/data/firma/eidskog";
import FIRMA_ELVERUM from "@/data/firma/elverum";
import FIRMA_ENGERDAL from "@/data/firma/engerdal";
import FIRMA_ETNEDAL from "@/data/firma/etnedal";
import FIRMA_FOLLDAL from "@/data/firma/folldal";
import FIRMA_GAUSDAL from "@/data/firma/gausdal";
import FIRMA_GJOVIK from "@/data/firma/gjovik";
import FIRMA_GRAN from "@/data/firma/gran";
import FIRMA_GRUE from "@/data/firma/grue";
import FIRMA_HAMAR from "@/data/firma/hamar";
import FIRMA_KONGSVINGER from "@/data/firma/kongsvinger";
import FIRMA_LESJA from "@/data/firma/lesja";
import FIRMA_LILLEHAMMER from "@/data/firma/lillehammer";
import FIRMA_LOM from "@/data/firma/lom";
import FIRMA_LOTEN from "@/data/firma/loten";
import FIRMA_NORDRE_LAND from "@/data/firma/nordre-land";
import FIRMA_NORD_AURDAL from "@/data/firma/nord-aurdal";
import FIRMA_NORD_FRON from "@/data/firma/nord-fron";
import FIRMA_NORD_ODAL from "@/data/firma/nord-odal";
import FIRMA_OSTRE_TOTEN from "@/data/firma/ostre-toten";
import FIRMA_OS_INNLANDET from "@/data/firma/os-innlandet";
import FIRMA_OYER from "@/data/firma/oyer";
import FIRMA_OYSTRE_SLIDRE from "@/data/firma/oystre-slidre";
import FIRMA_RENDALEN from "@/data/firma/rendalen";
import FIRMA_RINGEBU from "@/data/firma/ringebu";
import FIRMA_RINGSAKER from "@/data/firma/ringsaker";
import FIRMA_SEL from "@/data/firma/sel";
import FIRMA_SKJAK from "@/data/firma/skjak";
import FIRMA_SONDRE_LAND from "@/data/firma/sondre-land";
import FIRMA_SOR_AURDAL from "@/data/firma/sor-aurdal";
import FIRMA_SOR_FRON from "@/data/firma/sor-fron";
import FIRMA_SOR_ODAL from "@/data/firma/sor-odal";
import FIRMA_STANGE from "@/data/firma/stange";
import FIRMA_STOR_ELVDAL from "@/data/firma/stor-elvdal";
import FIRMA_TOLGA from "@/data/firma/tolga";
import FIRMA_TRYSIL from "@/data/firma/trysil";
import FIRMA_TYNSET from "@/data/firma/tynset";
import FIRMA_VAGA from "@/data/firma/vaga";
import FIRMA_VALER_INNLANDET from "@/data/firma/valer-innlandet";
import FIRMA_VANG from "@/data/firma/vang";
import FIRMA_VESTRE_SLIDRE from "@/data/firma/vestre-slidre";
import FIRMA_VESTRE_TOTEN from "@/data/firma/vestre-toten";

// === Agder (25 kommuner) ===
import FIRMA_AMLI from "@/data/firma/amli";
import FIRMA_ARENDAL from "@/data/firma/arendal";
import FIRMA_ASERAL from "@/data/firma/aseral";
import FIRMA_BIRKENES from "@/data/firma/birkenes";
import FIRMA_BYGLAND from "@/data/firma/bygland";
import FIRMA_BYKLE from "@/data/firma/bykle";
import FIRMA_EVJE_OG_HORNNES from "@/data/firma/evje-og-hornnes";
import FIRMA_FARSUND from "@/data/firma/farsund";
import FIRMA_FLEKKEFJORD from "@/data/firma/flekkefjord";
import FIRMA_FROLAND from "@/data/firma/froland";
import FIRMA_GJERSTAD from "@/data/firma/gjerstad";
import FIRMA_GRIMSTAD from "@/data/firma/grimstad";
import FIRMA_HAEGEBOSTAD from "@/data/firma/haegebostad";
import FIRMA_IVELAND from "@/data/firma/iveland";
import FIRMA_KRISTIANSAND from "@/data/firma/kristiansand";
import FIRMA_KVINESDAL from "@/data/firma/kvinesdal";
import FIRMA_LILLESAND from "@/data/firma/lillesand";
import FIRMA_LINDESNES from "@/data/firma/lindesnes";
import FIRMA_LYNGDAL from "@/data/firma/lyngdal";
import FIRMA_RISOR from "@/data/firma/risor";
import FIRMA_SIRDAL from "@/data/firma/sirdal";
import FIRMA_TVEDESTRAND from "@/data/firma/tvedestrand";
import FIRMA_VALLE from "@/data/firma/valle";
import FIRMA_VEGAARSHEI from "@/data/firma/vegaarshei";
import FIRMA_VENNESLA from "@/data/firma/vennesla";

// === Rogaland (21 kommuner) ===
import FIRMA_BJERKREIM from "@/data/firma/bjerkreim";
import FIRMA_EIGERSUND from "@/data/firma/eigersund";
import FIRMA_GJESDAL from "@/data/firma/gjesdal";
import FIRMA_HA from "@/data/firma/ha";
import FIRMA_HAUGESUND from "@/data/firma/haugesund";
import FIRMA_HJELMELAND from "@/data/firma/hjelmeland";
import FIRMA_KARMOY from "@/data/firma/karmoy";
import FIRMA_KLEPP from "@/data/firma/klepp";
import FIRMA_KVITSOY from "@/data/firma/kvitsoy";
import FIRMA_LUND_ROGALAND from "@/data/firma/lund-rogaland";
import FIRMA_RANDABERG from "@/data/firma/randaberg";
import FIRMA_SANDNES from "@/data/firma/sandnes";
import FIRMA_SAUDA from "@/data/firma/sauda";
import FIRMA_SOKNDAL from "@/data/firma/sokndal";
import FIRMA_SOLA from "@/data/firma/sola";
import FIRMA_STAVANGER from "@/data/firma/stavanger";
import FIRMA_STRAND from "@/data/firma/strand";
import FIRMA_SULDAL from "@/data/firma/suldal";
import FIRMA_TIME from "@/data/firma/time";
import FIRMA_TYSVAER from "@/data/firma/tysvaer";
import FIRMA_VINDAFJORD from "@/data/firma/vindafjord";

// === Vestland (43 kommuner) ===
import FIRMA_ALVER from "@/data/firma/alver";
import FIRMA_ARDAL from "@/data/firma/ardal";
import FIRMA_ASKOY from "@/data/firma/askoy";
import FIRMA_ASKVOLL from "@/data/firma/askvoll";
import FIRMA_AURLAND from "@/data/firma/aurland";
import FIRMA_AUSTEVOLL from "@/data/firma/austevoll";
import FIRMA_AUSTRHEIM from "@/data/firma/austrheim";
import FIRMA_BERGEN from "@/data/firma/bergen";
import FIRMA_BJORNAFJORDEN from "@/data/firma/bjornafjorden";
import FIRMA_BOMLO from "@/data/firma/bomlo";
import FIRMA_BREMANGER from "@/data/firma/bremanger";
import FIRMA_EIDFJORD from "@/data/firma/eidfjord";
import FIRMA_ETNE from "@/data/firma/etne";
import FIRMA_FEDJE from "@/data/firma/fedje";
import FIRMA_FITJAR from "@/data/firma/fitjar";
import FIRMA_FJALER from "@/data/firma/fjaler";
import FIRMA_GLOPPEN from "@/data/firma/gloppen";
import FIRMA_GULEN from "@/data/firma/gulen";
import FIRMA_HOYANGER from "@/data/firma/hoyanger";
import FIRMA_HYLLESTAD from "@/data/firma/hyllestad";
import FIRMA_KINN from "@/data/firma/kinn";
import FIRMA_KVAM from "@/data/firma/kvam";
import FIRMA_KVINNHERAD from "@/data/firma/kvinnherad";
import FIRMA_LAERDAL from "@/data/firma/laerdal";
import FIRMA_LUSTER from "@/data/firma/luster";
import FIRMA_MASFJORDEN from "@/data/firma/masfjorden";
import FIRMA_MODALEN from "@/data/firma/modalen";
import FIRMA_OSTEROY from "@/data/firma/osteroy";
import FIRMA_OYGARDEN from "@/data/firma/oygarden";
import FIRMA_SAMNANGER from "@/data/firma/samnanger";
import FIRMA_SOGNDAL from "@/data/firma/sogndal";
import FIRMA_SOLUND from "@/data/firma/solund";
import FIRMA_STAD from "@/data/firma/stad";
import FIRMA_STORD from "@/data/firma/stord";
import FIRMA_STRYN from "@/data/firma/stryn";
import FIRMA_SUNNFJORD from "@/data/firma/sunnfjord";
import FIRMA_SVEIO from "@/data/firma/sveio";
import FIRMA_TYSNES from "@/data/firma/tysnes";
import FIRMA_ULLENSVANG from "@/data/firma/ullensvang";
import FIRMA_ULVIK from "@/data/firma/ulvik";
import FIRMA_VAKSDAL from "@/data/firma/vaksdal";
import FIRMA_VIK from "@/data/firma/vik";
import FIRMA_VOSS from "@/data/firma/voss";

// === Møre og Romsdal (26 kommuner) ===
import FIRMA_AUKRA from "@/data/firma/aukra";
import FIRMA_AURE from "@/data/firma/aure";
import FIRMA_AVEROY from "@/data/firma/averoy";
import FIRMA_FJORD from "@/data/firma/fjord";
import FIRMA_GISKE from "@/data/firma/giske";
import FIRMA_GJEMNES from "@/data/firma/gjemnes";
import FIRMA_HARAM from "@/data/firma/haram";
import FIRMA_HAREID from "@/data/firma/hareid";
import FIRMA_HEROY_MR from "@/data/firma/heroy-mr";
import FIRMA_HUSTADVIKA from "@/data/firma/hustadvika";
import FIRMA_KRISTIANSUND_MR from "@/data/firma/kristiansund-mr";
import FIRMA_MOLDE from "@/data/firma/molde";
import FIRMA_ORSTA from "@/data/firma/orsta";
import FIRMA_RAUMA from "@/data/firma/rauma";
import FIRMA_SANDE_MR from "@/data/firma/sande-mr";
import FIRMA_SMOLA from "@/data/firma/smola";
import FIRMA_STRANDA from "@/data/firma/stranda";
import FIRMA_SULA from "@/data/firma/sula";
import FIRMA_SUNNDAL from "@/data/firma/sunndal";
import FIRMA_SURNADAL from "@/data/firma/surnadal";
import FIRMA_SYKKYLVEN from "@/data/firma/sykkylven";
import FIRMA_TINGVOLL from "@/data/firma/tingvoll";
import FIRMA_ULSTEIN from "@/data/firma/ulstein";
import FIRMA_VANYLVEN from "@/data/firma/vanylven";
import FIRMA_VESTNES from "@/data/firma/vestnes";
import FIRMA_VOLDA from "@/data/firma/volda";

// === Trøndelag (35 kommuner) ===
import FIRMA_AFJORD from "@/data/firma/afjord";
import FIRMA_FLATANGER from "@/data/firma/flatanger";
import FIRMA_FROSTA from "@/data/firma/frosta";
import FIRMA_FROYA from "@/data/firma/froya";
import FIRMA_GRONG from "@/data/firma/grong";
import FIRMA_HEIM from "@/data/firma/heim";
import FIRMA_HITRA from "@/data/firma/hitra";
import FIRMA_HOYLANDET from "@/data/firma/hoylandet";
import FIRMA_INDEROY from "@/data/firma/inderoy";
import FIRMA_INDRE_FOSEN from "@/data/firma/indre-fosen";
import FIRMA_LEKA from "@/data/firma/leka";
import FIRMA_LEVANGER from "@/data/firma/levanger";
import FIRMA_LIERNE from "@/data/firma/lierne";
import FIRMA_MALVIK from "@/data/firma/malvik";
import FIRMA_MERAKER from "@/data/firma/meraker";
import FIRMA_MIDTRE_GAULDAL from "@/data/firma/midtre-gauldal";
import FIRMA_NAMSOS from "@/data/firma/namsos";
import FIRMA_NAMSSKOGAN from "@/data/firma/namsskogan";
import FIRMA_NAROYSUND from "@/data/firma/naroysund";
import FIRMA_OPPDAL from "@/data/firma/oppdal";
import FIRMA_ORKLAND from "@/data/firma/orkland";
import FIRMA_ORLAND from "@/data/firma/orland";
import FIRMA_OSEN from "@/data/firma/osen";
import FIRMA_OVERHALLA from "@/data/firma/overhalla";
import FIRMA_RENNEBU from "@/data/firma/rennebu";
import FIRMA_RINDAL from "@/data/firma/rindal";
import FIRMA_ROYRVIK from "@/data/firma/royrvik";
import FIRMA_SELBU from "@/data/firma/selbu";
import FIRMA_SKAUN from "@/data/firma/skaun";
import FIRMA_SNASA from "@/data/firma/snasa";
import FIRMA_STEINKJER from "@/data/firma/steinkjer";
import FIRMA_STJORDAL from "@/data/firma/stjordal";
import FIRMA_TRONDHEIM from "@/data/firma/trondheim";
import FIRMA_TYDAL from "@/data/firma/tydal";
import FIRMA_VERDAL from "@/data/firma/verdal";

// === Nordland (39 kommuner) ===
import FIRMA_ALSTAHAUG from "@/data/firma/alstahaug";
import FIRMA_ANDOY from "@/data/firma/andoy";
import FIRMA_BEIARN from "@/data/firma/beiarn";
import FIRMA_BINDAL from "@/data/firma/bindal";
import FIRMA_BODO from "@/data/firma/bodo";
import FIRMA_BO_NORDLAND from "@/data/firma/bo-nordland";
import FIRMA_BRONNOY from "@/data/firma/bronnoy";
import FIRMA_DONNA from "@/data/firma/donna";
import FIRMA_EVENES from "@/data/firma/evenes";
import FIRMA_FAUSKE from "@/data/firma/fauske";
import FIRMA_FLAKSTAD from "@/data/firma/flakstad";
import FIRMA_GILDESKAL from "@/data/firma/gildeskal";
import FIRMA_GRANE from "@/data/firma/grane";
import FIRMA_HADSEL from "@/data/firma/hadsel";
import FIRMA_HAMAROY from "@/data/firma/hamaroy";
import FIRMA_HATTFJELLDAL from "@/data/firma/hattfjelldal";
import FIRMA_HEMNES from "@/data/firma/hemnes";
import FIRMA_HEROY_NORDLAND from "@/data/firma/heroy-nordland";
import FIRMA_LEIRFJORD from "@/data/firma/leirfjord";
import FIRMA_LODINGEN from "@/data/firma/lodingen";
import FIRMA_LUROY from "@/data/firma/luroy";
import FIRMA_MELOY from "@/data/firma/meloy";
import FIRMA_MOSKENES from "@/data/firma/moskenes";
import FIRMA_NARVIK from "@/data/firma/narvik";
import FIRMA_NESNA from "@/data/firma/nesna";
import FIRMA_OKSNES from "@/data/firma/oksnes";
import FIRMA_RANA from "@/data/firma/rana";
import FIRMA_RODOY from "@/data/firma/rodoy";
import FIRMA_SALTDAL from "@/data/firma/saltdal";
import FIRMA_SOMNA from "@/data/firma/somna";
import FIRMA_SORFOLD from "@/data/firma/sorfold";
import FIRMA_SORTLAND from "@/data/firma/sortland";
import FIRMA_STEIGEN from "@/data/firma/steigen";
import FIRMA_TRANA from "@/data/firma/trana";
import FIRMA_VAGAN from "@/data/firma/vagan";
import FIRMA_VEFSN from "@/data/firma/vefsn";
import FIRMA_VEGA from "@/data/firma/vega";
import FIRMA_VESTVAGOY from "@/data/firma/vestvagoy";
import FIRMA_VEVELSTAD from "@/data/firma/vevelstad";

// === Troms (21 kommuner) ===
import FIRMA_BALSFJORD from "@/data/firma/balsfjord";
import FIRMA_BARDU from "@/data/firma/bardu";
import FIRMA_DYROY from "@/data/firma/dyroy";
import FIRMA_GRATANGEN from "@/data/firma/gratangen";
import FIRMA_HARSTAD from "@/data/firma/harstad";
import FIRMA_IBESTAD from "@/data/firma/ibestad";
import FIRMA_KAFJORD from "@/data/firma/kafjord";
import FIRMA_KARLSOY from "@/data/firma/karlsoy";
import FIRMA_KVAEFJORD from "@/data/firma/kvaefjord";
import FIRMA_KVAENANGEN from "@/data/firma/kvaenangen";
import FIRMA_LAVANGEN from "@/data/firma/lavangen";
import FIRMA_LYNGEN from "@/data/firma/lyngen";
import FIRMA_MALSELV from "@/data/firma/malselv";
import FIRMA_NORDREISA from "@/data/firma/nordreisa";
import FIRMA_SALANGEN from "@/data/firma/salangen";
import FIRMA_SENJA from "@/data/firma/senja";
import FIRMA_SKJERVOY from "@/data/firma/skjervoy";
import FIRMA_SORREISA from "@/data/firma/sorreisa";
import FIRMA_STORFJORD from "@/data/firma/storfjord";
import FIRMA_TJELDSUND from "@/data/firma/tjeldsund";
import FIRMA_TROMSO from "@/data/firma/tromso";

// === Finnmark (18 kommuner) ===
import FIRMA_ALTA from "@/data/firma/alta";
import FIRMA_BATSFJORD from "@/data/firma/batsfjord";
import FIRMA_BERLEVAG from "@/data/firma/berlevag";
import FIRMA_GAMVIK from "@/data/firma/gamvik";
import FIRMA_HAMMERFEST from "@/data/firma/hammerfest";
import FIRMA_HASVIK from "@/data/firma/hasvik";
import FIRMA_KARASJOK from "@/data/firma/karasjok";
import FIRMA_KAUTOKEINO from "@/data/firma/kautokeino";
import FIRMA_LEBESBY from "@/data/firma/lebesby";
import FIRMA_LOPPA from "@/data/firma/loppa";
import FIRMA_MASOY from "@/data/firma/masoy";
import FIRMA_NESSEBY from "@/data/firma/nesseby";
import FIRMA_NORDKAPP from "@/data/firma/nordkapp";
import FIRMA_PORSANGER from "@/data/firma/porsanger";
import FIRMA_SOR_VARANGER from "@/data/firma/sor-varanger";
import FIRMA_TANA from "@/data/firma/tana";
import FIRMA_VADSO from "@/data/firma/vadso";
import FIRMA_VARDO from "@/data/firma/vardo";

const FIRMA_MAP: Record<string, Firma[]> = {
  // Oslo
  "oslo": FIRMA_OSLO,
  // Akershus
  "as-akershus": FIRMA_AS_AKERSHUS,
  "asker": FIRMA_ASKER,
  "aurskog-holand": FIRMA_AURSKOG_HOLAND,
  "baerum": FIRMA_BAERUM,
  "enebakk": FIRMA_ENEBAKK,
  "frogn": FIRMA_FROGN,
  "gjerdrum": FIRMA_GJERDRUM,
  "hurdal": FIRMA_HURDAL,
  "jevnaker": FIRMA_JEVNAKER,
  "lillestrom": FIRMA_LILLESTROM,
  "lorenskog": FIRMA_LORENSKOG,
  "lunner": FIRMA_LUNNER,
  "nannestad": FIRMA_NANNESTAD,
  "nes-akershus": FIRMA_NES_AKERSHUS,
  "nesodden": FIRMA_NESODDEN,
  "nittedal": FIRMA_NITTEDAL,
  "nordre-follo": FIRMA_NORDRE_FOLLO,
  "ralingen": FIRMA_RALINGEN,
  "ullensaker": FIRMA_ULLENSAKER,
  "vestby": FIRMA_VESTBY,
  // Østfold
  "fredrikstad": FIRMA_FREDRIKSTAD,
  "halden": FIRMA_HALDEN,
  "hvaler": FIRMA_HVALER,
  "indre-ostfold": FIRMA_INDRE_OSTFOLD,
  "marker": FIRMA_MARKER,
  "moss": FIRMA_MOSS,
  "rade": FIRMA_RADE,
  "rakkestad": FIRMA_RAKKESTAD,
  "sarpsborg": FIRMA_SARPSBORG,
  "skiptvet": FIRMA_SKIPTVET,
  "valer-ostfold": FIRMA_VALER_OSTFOLD,
  // Buskerud
  "al": FIRMA_AL,
  "drammen": FIRMA_DRAMMEN,
  "fla": FIRMA_FLA,
  "flesberg": FIRMA_FLESBERG,
  "gol": FIRMA_GOL,
  "hemsedal": FIRMA_HEMSEDAL,
  "hol": FIRMA_HOL,
  "kongsberg": FIRMA_KONGSBERG,
  "krodsherad": FIRMA_KRODSHERAD,
  "lier": FIRMA_LIER,
  "modum": FIRMA_MODUM,
  "nesbyen": FIRMA_NESBYEN,
  "nore-og-uvdal": FIRMA_NORE_OG_UVDAL,
  "ovre-eiker": FIRMA_OVRE_EIKER,
  "ringerike": FIRMA_RINGERIKE,
  "rollag": FIRMA_ROLLAG,
  "sigdal": FIRMA_SIGDAL,
  // Vestfold
  "faerder": FIRMA_FAERDER,
  "holmestrand": FIRMA_HOLMESTRAND,
  "horten": FIRMA_HORTEN,
  "larvik": FIRMA_LARVIK,
  "sandefjord": FIRMA_SANDEFJORD,
  "tonsberg": FIRMA_TONSBERG,
  // Telemark
  "bamble": FIRMA_BAMBLE,
  "drangedal": FIRMA_DRANGEDAL,
  "fyresdal": FIRMA_FYRESDAL,
  "hjartdal": FIRMA_HJARTDAL,
  "kragero": FIRMA_KRAGERO,
  "kviteseid": FIRMA_KVITESEID,
  "midt-telemark": FIRMA_MIDT_TELEMARK,
  "nissedal": FIRMA_NISSEDAL,
  "nome": FIRMA_NOME,
  "notodden": FIRMA_NOTODDEN,
  "porsgrunn": FIRMA_PORSGRUNN,
  "seljord": FIRMA_SELJORD,
  "siljan": FIRMA_SILJAN,
  "skien": FIRMA_SKIEN,
  "tinn": FIRMA_TINN,
  "tokke": FIRMA_TOKKE,
  "vinje": FIRMA_VINJE,
  // Innlandet
  "alvdal": FIRMA_ALVDAL,
  "amot": FIRMA_AMOT,
  "asnes": FIRMA_ASNES,
  "dovre": FIRMA_DOVRE,
  "eidskog": FIRMA_EIDSKOG,
  "elverum": FIRMA_ELVERUM,
  "engerdal": FIRMA_ENGERDAL,
  "etnedal": FIRMA_ETNEDAL,
  "folldal": FIRMA_FOLLDAL,
  "gausdal": FIRMA_GAUSDAL,
  "gjovik": FIRMA_GJOVIK,
  "gran": FIRMA_GRAN,
  "grue": FIRMA_GRUE,
  "hamar": FIRMA_HAMAR,
  "kongsvinger": FIRMA_KONGSVINGER,
  "lesja": FIRMA_LESJA,
  "lillehammer": FIRMA_LILLEHAMMER,
  "lom": FIRMA_LOM,
  "loten": FIRMA_LOTEN,
  "nord-aurdal": FIRMA_NORD_AURDAL,
  "nord-fron": FIRMA_NORD_FRON,
  "nord-odal": FIRMA_NORD_ODAL,
  "nordre-land": FIRMA_NORDRE_LAND,
  "os-innlandet": FIRMA_OS_INNLANDET,
  "ostre-toten": FIRMA_OSTRE_TOTEN,
  "oyer": FIRMA_OYER,
  "oystre-slidre": FIRMA_OYSTRE_SLIDRE,
  "rendalen": FIRMA_RENDALEN,
  "ringebu": FIRMA_RINGEBU,
  "ringsaker": FIRMA_RINGSAKER,
  "sel": FIRMA_SEL,
  "skjak": FIRMA_SKJAK,
  "sondre-land": FIRMA_SONDRE_LAND,
  "sor-aurdal": FIRMA_SOR_AURDAL,
  "sor-fron": FIRMA_SOR_FRON,
  "sor-odal": FIRMA_SOR_ODAL,
  "stange": FIRMA_STANGE,
  "stor-elvdal": FIRMA_STOR_ELVDAL,
  "tolga": FIRMA_TOLGA,
  "trysil": FIRMA_TRYSIL,
  "tynset": FIRMA_TYNSET,
  "vaga": FIRMA_VAGA,
  "valer-innlandet": FIRMA_VALER_INNLANDET,
  "vang": FIRMA_VANG,
  "vestre-slidre": FIRMA_VESTRE_SLIDRE,
  "vestre-toten": FIRMA_VESTRE_TOTEN,
  // Agder
  "amli": FIRMA_AMLI,
  "arendal": FIRMA_ARENDAL,
  "aseral": FIRMA_ASERAL,
  "birkenes": FIRMA_BIRKENES,
  "bygland": FIRMA_BYGLAND,
  "bykle": FIRMA_BYKLE,
  "evje-og-hornnes": FIRMA_EVJE_OG_HORNNES,
  "farsund": FIRMA_FARSUND,
  "flekkefjord": FIRMA_FLEKKEFJORD,
  "froland": FIRMA_FROLAND,
  "gjerstad": FIRMA_GJERSTAD,
  "grimstad": FIRMA_GRIMSTAD,
  "haegebostad": FIRMA_HAEGEBOSTAD,
  "iveland": FIRMA_IVELAND,
  "kristiansand": FIRMA_KRISTIANSAND,
  "kvinesdal": FIRMA_KVINESDAL,
  "lillesand": FIRMA_LILLESAND,
  "lindesnes": FIRMA_LINDESNES,
  "lyngdal": FIRMA_LYNGDAL,
  "risor": FIRMA_RISOR,
  "sirdal": FIRMA_SIRDAL,
  "tvedestrand": FIRMA_TVEDESTRAND,
  "valle": FIRMA_VALLE,
  "vegaarshei": FIRMA_VEGAARSHEI,
  "vennesla": FIRMA_VENNESLA,
  // Rogaland
  "bjerkreim": FIRMA_BJERKREIM,
  "eigersund": FIRMA_EIGERSUND,
  "gjesdal": FIRMA_GJESDAL,
  "ha": FIRMA_HA,
  "haugesund": FIRMA_HAUGESUND,
  "hjelmeland": FIRMA_HJELMELAND,
  "karmoy": FIRMA_KARMOY,
  "klepp": FIRMA_KLEPP,
  "kvitsoy": FIRMA_KVITSOY,
  "lund-rogaland": FIRMA_LUND_ROGALAND,
  "randaberg": FIRMA_RANDABERG,
  "sandnes": FIRMA_SANDNES,
  "sauda": FIRMA_SAUDA,
  "sokndal": FIRMA_SOKNDAL,
  "sola": FIRMA_SOLA,
  "stavanger": FIRMA_STAVANGER,
  "strand": FIRMA_STRAND,
  "suldal": FIRMA_SULDAL,
  "time": FIRMA_TIME,
  "tysvaer": FIRMA_TYSVAER,
  "vindafjord": FIRMA_VINDAFJORD,
  // Vestland
  "alver": FIRMA_ALVER,
  "ardal": FIRMA_ARDAL,
  "askoy": FIRMA_ASKOY,
  "askvoll": FIRMA_ASKVOLL,
  "aurland": FIRMA_AURLAND,
  "austevoll": FIRMA_AUSTEVOLL,
  "austrheim": FIRMA_AUSTRHEIM,
  "bergen": FIRMA_BERGEN,
  "bjornafjorden": FIRMA_BJORNAFJORDEN,
  "bomlo": FIRMA_BOMLO,
  "bremanger": FIRMA_BREMANGER,
  "eidfjord": FIRMA_EIDFJORD,
  "etne": FIRMA_ETNE,
  "fedje": FIRMA_FEDJE,
  "fitjar": FIRMA_FITJAR,
  "fjaler": FIRMA_FJALER,
  "gloppen": FIRMA_GLOPPEN,
  "gulen": FIRMA_GULEN,
  "hoyanger": FIRMA_HOYANGER,
  "hyllestad": FIRMA_HYLLESTAD,
  "kinn": FIRMA_KINN,
  "kvam": FIRMA_KVAM,
  "kvinnherad": FIRMA_KVINNHERAD,
  "laerdal": FIRMA_LAERDAL,
  "luster": FIRMA_LUSTER,
  "masfjorden": FIRMA_MASFJORDEN,
  "modalen": FIRMA_MODALEN,
  "osteroy": FIRMA_OSTEROY,
  "oygarden": FIRMA_OYGARDEN,
  "samnanger": FIRMA_SAMNANGER,
  "sogndal": FIRMA_SOGNDAL,
  "solund": FIRMA_SOLUND,
  "stad": FIRMA_STAD,
  "stord": FIRMA_STORD,
  "stryn": FIRMA_STRYN,
  "sunnfjord": FIRMA_SUNNFJORD,
  "sveio": FIRMA_SVEIO,
  "tysnes": FIRMA_TYSNES,
  "ullensvang": FIRMA_ULLENSVANG,
  "ulvik": FIRMA_ULVIK,
  "vaksdal": FIRMA_VAKSDAL,
  "vik": FIRMA_VIK,
  "voss": FIRMA_VOSS,
  // Møre og Romsdal
  "aukra": FIRMA_AUKRA,
  "aure": FIRMA_AURE,
  "averoy": FIRMA_AVEROY,
  "fjord": FIRMA_FJORD,
  "giske": FIRMA_GISKE,
  "gjemnes": FIRMA_GJEMNES,
  "haram": FIRMA_HARAM,
  "hareid": FIRMA_HAREID,
  "heroy-mr": FIRMA_HEROY_MR,
  "hustadvika": FIRMA_HUSTADVIKA,
  "kristiansund-mr": FIRMA_KRISTIANSUND_MR,
  "molde": FIRMA_MOLDE,
  "orsta": FIRMA_ORSTA,
  "rauma": FIRMA_RAUMA,
  "sande-mr": FIRMA_SANDE_MR,
  "smola": FIRMA_SMOLA,
  "stranda": FIRMA_STRANDA,
  "sula": FIRMA_SULA,
  "sunndal": FIRMA_SUNNDAL,
  "surnadal": FIRMA_SURNADAL,
  "sykkylven": FIRMA_SYKKYLVEN,
  "tingvoll": FIRMA_TINGVOLL,
  "ulstein": FIRMA_ULSTEIN,
  "vanylven": FIRMA_VANYLVEN,
  "vestnes": FIRMA_VESTNES,
  "volda": FIRMA_VOLDA,
  // Trøndelag
  "afjord": FIRMA_AFJORD,
  "flatanger": FIRMA_FLATANGER,
  "frosta": FIRMA_FROSTA,
  "froya": FIRMA_FROYA,
  "grong": FIRMA_GRONG,
  "heim": FIRMA_HEIM,
  "hitra": FIRMA_HITRA,
  "hoylandet": FIRMA_HOYLANDET,
  "inderoy": FIRMA_INDEROY,
  "indre-fosen": FIRMA_INDRE_FOSEN,
  "leka": FIRMA_LEKA,
  "levanger": FIRMA_LEVANGER,
  "lierne": FIRMA_LIERNE,
  "malvik": FIRMA_MALVIK,
  "meraker": FIRMA_MERAKER,
  "midtre-gauldal": FIRMA_MIDTRE_GAULDAL,
  "namsos": FIRMA_NAMSOS,
  "namsskogan": FIRMA_NAMSSKOGAN,
  "naroysund": FIRMA_NAROYSUND,
  "oppdal": FIRMA_OPPDAL,
  "orkland": FIRMA_ORKLAND,
  "orland": FIRMA_ORLAND,
  "osen": FIRMA_OSEN,
  "overhalla": FIRMA_OVERHALLA,
  "rennebu": FIRMA_RENNEBU,
  "rindal": FIRMA_RINDAL,
  "royrvik": FIRMA_ROYRVIK,
  "selbu": FIRMA_SELBU,
  "skaun": FIRMA_SKAUN,
  "snasa": FIRMA_SNASA,
  "steinkjer": FIRMA_STEINKJER,
  "stjordal": FIRMA_STJORDAL,
  "trondheim": FIRMA_TRONDHEIM,
  "tydal": FIRMA_TYDAL,
  "verdal": FIRMA_VERDAL,
  // Nordland
  "alstahaug": FIRMA_ALSTAHAUG,
  "andoy": FIRMA_ANDOY,
  "beiarn": FIRMA_BEIARN,
  "bindal": FIRMA_BINDAL,
  "bo-nordland": FIRMA_BO_NORDLAND,
  "bodo": FIRMA_BODO,
  "bronnoy": FIRMA_BRONNOY,
  "donna": FIRMA_DONNA,
  "evenes": FIRMA_EVENES,
  "fauske": FIRMA_FAUSKE,
  "flakstad": FIRMA_FLAKSTAD,
  "gildeskal": FIRMA_GILDESKAL,
  "grane": FIRMA_GRANE,
  "hadsel": FIRMA_HADSEL,
  "hamaroy": FIRMA_HAMAROY,
  "hattfjelldal": FIRMA_HATTFJELLDAL,
  "hemnes": FIRMA_HEMNES,
  "heroy-nordland": FIRMA_HEROY_NORDLAND,
  "leirfjord": FIRMA_LEIRFJORD,
  "lodingen": FIRMA_LODINGEN,
  "luroy": FIRMA_LUROY,
  "meloy": FIRMA_MELOY,
  "moskenes": FIRMA_MOSKENES,
  "narvik": FIRMA_NARVIK,
  "nesna": FIRMA_NESNA,
  "oksnes": FIRMA_OKSNES,
  "rana": FIRMA_RANA,
  "rodoy": FIRMA_RODOY,
  "saltdal": FIRMA_SALTDAL,
  "somna": FIRMA_SOMNA,
  "sorfold": FIRMA_SORFOLD,
  "sortland": FIRMA_SORTLAND,
  "steigen": FIRMA_STEIGEN,
  "trana": FIRMA_TRANA,
  "vagan": FIRMA_VAGAN,
  "vefsn": FIRMA_VEFSN,
  "vega": FIRMA_VEGA,
  "vestvagoy": FIRMA_VESTVAGOY,
  "vevelstad": FIRMA_VEVELSTAD,
  // Troms
  "balsfjord": FIRMA_BALSFJORD,
  "bardu": FIRMA_BARDU,
  "dyroy": FIRMA_DYROY,
  "gratangen": FIRMA_GRATANGEN,
  "harstad": FIRMA_HARSTAD,
  "ibestad": FIRMA_IBESTAD,
  "kafjord": FIRMA_KAFJORD,
  "karlsoy": FIRMA_KARLSOY,
  "kvaefjord": FIRMA_KVAEFJORD,
  "kvaenangen": FIRMA_KVAENANGEN,
  "lavangen": FIRMA_LAVANGEN,
  "lyngen": FIRMA_LYNGEN,
  "malselv": FIRMA_MALSELV,
  "nordreisa": FIRMA_NORDREISA,
  "salangen": FIRMA_SALANGEN,
  "senja": FIRMA_SENJA,
  "skjervoy": FIRMA_SKJERVOY,
  "sorreisa": FIRMA_SORREISA,
  "storfjord": FIRMA_STORFJORD,
  "tjeldsund": FIRMA_TJELDSUND,
  "tromso": FIRMA_TROMSO,
  // Finnmark
  "alta": FIRMA_ALTA,
  "batsfjord": FIRMA_BATSFJORD,
  "berlevag": FIRMA_BERLEVAG,
  "gamvik": FIRMA_GAMVIK,
  "hammerfest": FIRMA_HAMMERFEST,
  "hasvik": FIRMA_HASVIK,
  "karasjok": FIRMA_KARASJOK,
  "kautokeino": FIRMA_KAUTOKEINO,
  "lebesby": FIRMA_LEBESBY,
  "loppa": FIRMA_LOPPA,
  "masoy": FIRMA_MASOY,
  "nesseby": FIRMA_NESSEBY,
  "nordkapp": FIRMA_NORDKAPP,
  "porsanger": FIRMA_PORSANGER,
  "sor-varanger": FIRMA_SOR_VARANGER,
  "tana": FIRMA_TANA,
  "vadso": FIRMA_VADSO,
  "vardo": FIRMA_VARDO,
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

  allFirma.sort((a, b) => a.navn.localeCompare(b.navn, "nb"));
  return allFirma;
}

/** Check if any kommune in a fylke has firma data */
export function hasFylkeFirmaData(fylkeSlug: string): boolean {
  return getFirmaByFylke(fylkeSlug).length > 0;
}

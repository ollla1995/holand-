import fs from 'fs';

const content = fs.readFileSync('./src/data/dutchData.ts', 'utf-8');
const lines = content.split('\n');

// Find the start of the injected verbs.
// They start with `id: 100,` and `infinitive: "aandoen",`
const injectedStart = lines.findIndex(l => l.includes('infinitive: "aandoen"'));

if (injectedStart !== -1) {
  // Find the `{` before injectedStart
  let startRemove = injectedStart;
  while (startRemove > 0 && !lines[startRemove].includes('{')) {
    startRemove--;
  }

  // The last bracket is at the end of the file
  const lastBracket = lines.lastIndexOf('];');

  // Remove the comma before startRemove if it exists
  if (startRemove > 0 && lines[startRemove - 1].trim() === ',') {
    startRemove--;
  } else if (startRemove > 0 && lines[startRemove - 1].endsWith(',')) {
    lines[startRemove - 1] = lines[startRemove - 1].replace(/,$/, '');
  }

  const cleanedLines = [
    ...lines.slice(0, startRemove),
    ...lines.slice(lastBracket)
  ];

  // Now insert into verbs
  const verbsStart = cleanedLines.findIndex(l => l.includes('export const verbs: VerbExercise[] = ['));
  let verbsEnd = -1;
  for (let i = verbsStart; i < cleanedLines.length; i++) {
    if (cleanedLines[i].trim() === '];') {
      verbsEnd = i;
      break;
    }
  }

  const irregularVerbsData = [
  ["aandoen", "надевать", "heb aangedaan", "deed aan", "deden aan", "doe aan", "doet aan", "doen aan"],
  ["aankomen", "прибывать", "ben aangekomen", "kwam aan", "kwamen aan", "kom aan", "komt aan", "komen aan"],
  ["aannemen", "принимать", "heb aangenomen", "nam aan", "namen aan", "neem aan", "neemt aan", "nemen aan"],
  ["aanspreken", "обращаться", "heb aangesproken", "sprak aan", "spraken aan", "spreek aan", "spreekt aan", "spreken aan"],
  ["aantrekken", "надевать/привлекать", "heb aangetrokken", "trok aan", "trokken aan", "trek aan", "trekt aan", "trekken aan"],
  ["aanvragen", "запрашивать", "heb aangevraagd", "vroeg aan", "vroegen aan", "vraag aan", "vraagt aan", "vragen aan"],
  ["aanwijzen", "указывать", "heb aangewezen", "wees aan", "wezen aan", "wijs aan", "wijst aan", "wijzen aan"],
  ["afhangen", "зависеть", "heb afgehangen", "hing af", "hingen af", "hang af", "hangt af", "hangen af"],
  ["afkomen", "отделываться/спускаться", "ben afgekomen", "kwam af", "kwamen af", "kom af", "komt af", "komen af"],
  ["aflopen", "заканчиваться", "is afgelopen", "liep af", "liepen af", "loop af", "loopt af", "lopen af"],
  ["afnemen", "уменьшаться", "heb/is afgenomen", "nam af", "namen af", "neem af", "neemt af", "nemen af"],
  ["afsluiten", "закрывать/завершать", "heb afgesloten", "sloot af", "sloten af", "sluit af", "sluit af", "sluiten af"],
  ["afspreken", "договариваться", "heb afgesproken", "sprak af", "spraken af", "spreek af", "spreekt af", "spreken af"],
  ["aftrekken", "вычитать", "heb afgetrokken", "trok af", "trokken af", "trek af", "trekt af", "trekken af"],
  ["afvallen", "худеть", "ben afgevallen", "viel af", "vielen af", "val af", "valt af", "vallen af"],
  ["zich afvragen", "задаваться вопросом", "heb me afgevraagd", "vroeg me af", "vroegen zich af", "vraag me af", "vraagt zich af", "vragen zich af"],
  ["afwassen", "мыть посуду", "heb afgewassen", "waste af", "wasten af", "was af", "wast af", "wassen af"],
  ["afwijzen", "отклонять", "heb afgewezen", "wees af", "wezen af", "wijs af", "wijst af", "wijzen af"],
  ["bakken", "печь", "heb gebakken", "bakte", "bakten", "bak", "bakt", "bakken"],
  ["bannen", "изгонять", "heb gebannen", "bande", "banden", "ban", "bant", "bannen"],
  ["barsten", "трескаться", "is gebarsten", "barstte", "barstten", "barst", "barst", "barsten"],
  ["bedenken", "придумывать", "heb bedacht", "bedacht", "bedachten", "bedenk", "bedenkt", "bedenken"],
  ["bederven", "портить", "heb/is bedorven", "bedierf", "bedierven", "bederf", "bederft", "bederven"],
  ["bedriegen", "обманывать", "heb bedrogen", "bedroog", "bedrogen", "bedrieg", "bedriegt", "bedriegen"],
  ["beginnen", "начинать", "ben begonnen", "begon", "begonnen", "begin", "begint", "beginnen"],
  ["begrijpen", "понимать", "heb begrepen", "begreep", "begrepen", "begrijp", "begrijpt", "begrijpen"],
  ["behangen", "клеить обои", "heb behangen", "behing", "behingen", "behang", "behangt", "behangen"],
  ["behouden", "сохранять", "heb behouden", "behield", "behielden", "behoud", "behoudt", "behouden"],
  ["bekijken", "рассматривать", "heb bekeken", "bekeek", "bekeken", "bekijk", "bekijkt", "bekijken"],
  ["beschrijven", "описывать", "heb beschreven", "beschreef", "beschreven", "beschrijf", "beschrijft", "beschrijven"],
  ["besluiten", "решать", "heb besloten", "besloot", "besloten", "besluit", "besluit", "besluiten"],
  ["bespreken", "обсуждать", "heb besproken", "besprak", "bespraken", "bespreek", "bespreekt", "bespreken"],
  ["bestaan", "существовать", "heb bestaan", "bestond", "bestonden", "besta", "bestaat", "bestaan"],
  ["betreffen", "касаться", "heb betroffen", "betrof", "betroffen", "betref", "betreft", "betreffen"],
  ["bevelen", "приказывать", "heb bevolen", "beval", "bevalen", "beveel", "beveelt", "bevelen"],
  ["bewegen", "двигаться", "heb bewogen", "bewoog", "bewogen", "beweeg", "beweegt", "bewegen"],
  ["bewijzen", "доказывать", "heb bewezen", "bewees", "bewezen", "bewijs", "bewijst", "bewijzen"],
  ["bidden", "молиться", "heb gebeden", "bad", "baden", "bid", "bidt", "bidden"],
  ["bieden", "предлагать", "heb geboden", "bood", "boden", "bied", "biedt", "bieden"],
  ["bijten", "кусать", "heb gebeten", "beet", "beten", "bijt", "bijt", "bijten"],
  ["binden", "связывать", "heb gebonden", "bond", "bonden", "bind", "bindt", "binden"],
  ["blazen", "дуть", "heb geblazen", "blies", "bliezen", "blaas", "blaast", "blazen"],
  ["blijken", "оказываться", "is gebleken", "bleek", "bleken", "blijk", "blijkt", "blijken"],
  ["blijven", "оставаться", "ben gebleven", "bleef", "bleven", "blijf", "blijft", "blijven"],
  ["blinken", "блестеть", "heb geblonken", "blonk", "blonken", "blink", "blinkt", "blinken"],
  ["braden", "жарить", "heb gebraden", "braadde", "braadden", "braad", "braadt", "braden"],
  ["breken", "ломать", "heb/is gebroken", "brak", "braken", "breek", "breekt", "breken"],
  ["brengen", "приносить", "heb gebracht", "bracht", "brachten", "breng", "brengt", "brengen"],
  ["brouwen", "варить (пиво)", "heb gebrouwen", "brouwde", "brouwden", "brouw", "brouwt", "brouwen"],
  ["buigen", "гнуть", "heb gebogen", "boog", "bogen", "buig", "buigt", "buigen"],
  ["denken", "думать", "heb gedacht", "dacht", "dachten", "denk", "denkt", "denken"],
  ["doen", "делать", "heb gedaan", "deed", "deden", "doe", "doet", "doen"],
  ["dragen", "носить", "heb gedragen", "droeg", "droegen", "draag", "draagt", "dragen"],
  ["drijven", "плавать/гнать", "heb/is gedreven", "dreef", "dreven", "drijf", "drijft", "drijven"],
  ["dringen", "проникать/толкаться", "heb/is gedrongen", "drong", "drongen", "dring", "dringt", "dringen"],
  ["drinken", "пить", "heb gedronken", "dronk", "dronken", "drink", "drinkt", "drinken"],
  ["druipen", "капать", "heb/is gedropen", "droop", "dropen", "druip", "druipt", "druipen"],
  ["duiken", "нырять", "heb/is gedoken", "dook", "doken", "duik", "duikt", "duiken"],
  ["dwingen", "принуждать", "heb gedwongen", "dwong", "dwongen", "dwing", "dwingt", "dwingen"],
  ["eten", "есть", "heb gegeten", "at", "aten", "eet", "eet", "eten"],
  ["fluiten", "свистеть", "heb gefloten", "floot", "floten", "fluit", "fluit", "fluiten"],
  ["gaan", "идти", "ben gegaan", "ging", "gingen", "ga", "gaat", "gaan"],
  ["gelden", "действовать/иметь силу", "heb gegolden", "gold", "golden", "geld", "geldt", "gelden"],
  ["genezen", "лечить", "heb/is genezen", "genas", "genazen", "genees", "geneest", "genezen"],
  ["genieten", "наслаждаться", "heb genoten", "genoot", "genoten", "geniet", "geniet", "genieten"],
  ["geven", "давать", "heb gegeven", "gaf", "gaven", "geef", "geeft", "geven"],
  ["gieten", "лить", "heb gegoten", "goot", "goten", "giet", "giet", "gieten"],
  ["glijden", "скользить", "heb/is gegleden", "gleed", "gleden", "glijd", "glijdt", "glijden"],
  ["glimmen", "блестеть", "heb geglommen", "glom", "glommen", "glim", "glimt", "glimmen"],
  ["graven", "копать", "heb gegraven", "groef", "groeven", "graaf", "graaft", "graven"],
  ["grijpen", "хватать", "heb gegrepen", "greep", "grepen", "grijp", "grijpt", "grijpen"],
  ["hangen", "висеть", "heb gehangen", "hing", "hingen", "hang", "hangt", "hangen"],
  ["hebben", "иметь", "heb gehad", "had", "hadden", "heb", "heeft", "hebben"],
  ["heffen", "поднимать", "heb geheven", "hief", "hieven", "hef", "heft", "heffen"],
  ["helpen", "помогать", "heb geholpen", "hielp", "hielpen", "help", "helpt", "helpen"],
  ["heten", "называться", "heb geheten", "heette", "heetten", "heet", "heet", "heten"],
  ["houden", "держать/любить", "heb gehouden", "hield", "hielden", "houd", "houdt", "houden"],
  ["houwen", "рубить", "heb gehouwen", "hieuw", "hieuwen", "houw", "houwt", "houwen"],
  ["jagen", "охотиться", "heb gejaagd", "joeg", "joegen", "jaag", "jaagt", "jagen"],
  ["kiezen", "выбирать", "heb gekozen", "koos", "kozen", "kies", "kiest", "kiezen"],
  ["kijken", "смотреть", "heb gekeken", "keek", "keken", "kijk", "kijkt", "kijken"],
  ["klimmen", "лезть", "heb/is geklommen", "klom", "klommen", "klim", "klimt", "klimmen"],
  ["klinken", "звучать", "heb geklonken", "klonk", "klonken", "klink", "klinkt", "klinken"],
  ["kluiven", "грызть", "heb gekloven", "kloof", "kloven", "kluif", "kluift", "kluiven"],
  ["knijpen", "щипать", "heb geknepen", "kneep", "knepen", "knijp", "knijpt", "knijpen"],
  ["kopen", "покупать", "heb gekocht", "kocht", "kochten", "koop", "koopt", "kopen"],
  ["krijgen", "получать", "heb gekregen", "kreeg", "kregen", "krijg", "krijgt", "krijgen"],
  ["krimpen", "садиться (о ткани)", "is gekrompen", "kromp", "krompen", "krimp", "krimpt", "krimpen"],
  ["kruipen", "ползать", "heb/is gekropen", "kroop", "kropen", "kruip", "kruipt", "kruipen"],
  ["kunnen", "мочь", "heb gekund", "kon", "konden", "kan", "kan", "kunnen"],
  ["lachen", "смеяться", "heb gelachen", "lachte", "lachten", "lach", "lacht", "lachen"],
  ["laden", "грузить", "heb geladen", "laadde", "laadden", "laad", "laadt", "laden"],
  ["laten", "позволять/оставлять", "heb gelaten", "liet", "lieten", "laat", "laat", "laten"],
  ["lezen", "читать", "heb gelezen", "las", "lazen", "lees", "leest", "lezen"],
  ["liegen", "лгать", "heb gelogen", "loog", "logen", "lieg", "liegt", "liegen"],
  ["liggen", "лежать", "heb gelegen", "lag", "lagen", "lig", "ligt", "liggen"],
  ["lijden", "страдать", "heb geleden", "leed", "leden", "lijd", "lijdt", "lijden"],
  ["lijken", "казаться", "heb geleken", "leek", "leken", "lijk", "lijkt", "lijken"],
  ["lopen", "идти/бежать", "heb/is gelopen", "liep", "liepen", "loop", "loopt", "lopen"],
  ["meten", "измерять", "heb gemeten", "mat", "maten", "meet", "meet", "meten"],
  ["mijden", "избегать", "heb gemeden", "meed", "meden", "mijd", "mijdt", "mijden"],
  ["moeten", "быть должным", "heb gemoeten", "moest", "moesten", "moet", "moet", "moeten"],
  ["mogen", "иметь разрешение", "heb gemogen", "mocht", "mochten", "mag", "mag", "mogen"],
  ["nemen", "брать", "heb genomen", "nam", "namen", "neem", "neemt", "nemen"],
  ["ontvangen", "получать", "heb ontvangen", "ontving", "ontvingen", "ontvang", "ontvangt", "ontvangen"],
  ["prijzen", "хвалить", "heb geprezen", "prees", "prezen", "prijs", "prijst", "prijzen"],
  ["raden", "советовать/угадывать", "heb geraden", "raadde", "raadden", "raad", "raadt", "raden"],
  ["rijden", "ехать", "heb/is gereden", "reed", "reden", "rijd", "rijdt", "rijden"],
  ["roepen", "звать", "heb geroepen", "riep", "riepen", "roep", "roept", "roepen"],
  ["ruiken", "нюхать", "heb geroken", "rook", "roken", "ruik", "ruikt", "ruiken"],
  ["scheiden", "разделять", "heb/is gescheiden", "scheidde", "scheidden", "scheid", "scheidt", "scheiden"],
  ["schelden", "ругать", "heb gescholden", "schold", "scholden", "scheld", "scheldt", "schelden"],
  ["schenden", "нарушать", "heb geschonden", "schond", "schonden", "schend", "schendt", "schenden"],
  ["schenken", "дарить/наливать", "heb geschonken", "schonk", "schonken", "schenk", "schenkt", "schenken"],
  ["scheppen", "создавать", "heb geschapen", "schiep", "schiepen", "schep", "schept", "scheppen"],
  ["scheren", "брить", "heb geschoren", "schoor", "schoren", "scheer", "scheert", "scheren"],
  ["schieten", "стрелять", "heb geschoten", "schoot", "schoten", "schiet", "schiet", "schieten"],
  ["schijnen", "светить/казаться", "heb geschenen", "scheen", "schenen", "schijn", "schijnt", "schijnen"],
  ["schrijven", "писать", "heb geschreven", "schreef", "schreven", "schrijf", "schrijft", "schrijven"],
  ["schrikken", "пугаться", "is geschrokken", "schrok", "schrokken", "schrik", "schrikt", "schrikken"],
  ["schuiven", "двигать", "heb/is geschoven", "schoof", "schoven", "schuif", "schuift", "schuiven"],
  ["slaan", "бить", "heb geslagen", "sloeg", "sloegen", "sla", "slaat", "slaan"],
  ["slapen", "спать", "heb geslapen", "sliep", "sliepen", "slaap", "slaapt", "slapen"],
  ["slijpen", "точить", "heb geslepen", "sleep", "slepen", "slijp", "slijpt", "slijpen"],
  ["slijten", "изнашиваться", "is gesleten", "sleet", "sleten", "slijt", "slijt", "slijten"],
  ["sluipen", "красться", "is geslopen", "sloop", "slopen", "sluip", "sluipt", "sluipen"],
  ["sluiten", "закрывать", "heb gesloten", "sloot", "sloten", "sluit", "sluit", "sluiten"],
  ["smelten", "таять", "heb/is gesmolten", "smolt", "smolten", "smelt", "smelt", "smelten"],
  ["smijten", "швырять", "heb gesmeten", "smeet", "smeten", "smijt", "smijt", "smijten"],
  ["snijden", "резать", "heb gesneden", "sneed", "sneden", "snijd", "snijdt", "snijden"],
  ["snuiten", "сморкаться", "heb gesnoten", "snoot", "snoten", "snuit", "snuit", "snuiten"],
  ["snuiven", "нюхать/сопеть", "heb gesnoven", "snoof", "snoven", "snuif", "snuift", "snuiven"],
  ["spannen", "натягивать", "heb gespannen", "spande", "spanden", "span", "spant", "spannen"],
  ["spijten", "сожалеть", "heeft gespeten", "speet", "speten", "spijt", "spijt", "spijten"],
  ["spreken", "говорить", "heb gesproken", "sprak", "spraken", "spreek", "spreekt", "spreken"],
  ["springen", "прыгать", "heb/is gesprongen", "sprong", "sprongen", "spring", "springt", "springen"],
  ["spuiten", "брызгать", "heb/is gespoten", "spoot", "spoten", "spuit", "spuit", "spuiten"],
  ["staan", "стоять", "heb gestaan", "stond", "stonden", "sta", "staat", "staan"],
  ["steken", "колоть/совать", "heb gestoken", "stak", "staken", "steek", "steekt", "steken"],
  ["stelen", "красть", "heb gestolen", "stal", "stalen", "steel", "steelt", "stelen"],
  ["sterven", "умирать", "is gestorven", "stierf", "stierven", "sterf", "sterft", "sterven"],
  ["stijgen", "подниматься", "is gestegen", "steeg", "stegen", "stijg", "stijgt", "stijgen"],
  ["stinken", "вонять", "heb gestonken", "stonk", "stonken", "stink", "stinkt", "stinken"],
  ["stoten", "толкать", "heb gestoten", "stootte", "stootten", "stoot", "stoot", "stoten"],
  ["strijden", "бороться", "heb gestreden", "streed", "streden", "strijd", "strijdt", "strijden"],
  ["strijken", "гладить", "heb gestreken", "streek", "streken", "strijk", "strijkt", "strijken"],
  ["treden", "ступать", "heb/is getreden", "trad", "traden", "treed", "treedt", "treden"],
  ["treffen", "попадать", "heb getroffen", "trof", "troffen", "tref", "treft", "treffen"],
  ["trekken", "тянуть", "heb/is getrokken", "trok", "trokken", "trek", "trekt", "trekken"],
  ["vallen", "падать", "is gevallen", "viel", "vielen", "val", "valt", "vallen"],
  ["vangen", "ловить", "heb gevangen", "ving", "vingen", "vang", "vangt", "vangen"],
  ["varen", "плыть", "heb/is gevaren", "voer", "voeren", "vaar", "vaart", "varen"],
  ["vechten", "драться", "heb gevochten", "vocht", "vochten", "vecht", "vecht", "vechten"],
  ["verbieden", "запрещать", "heb verboden", "verbood", "verboden", "verbied", "verbiedt", "verbieden"],
  ["verdwijnen", "исчезать", "is verdwenen", "verdween", "verdwenen", "verdwijn", "verdwijnt", "verdwijnen"],
  ["vergelijken", "сравнивать", "heb vergeleken", "vergeleek", "vergeleken", "vergelijk", "vergelijkt", "vergelijken"],
  ["vergeten", "забывать", "heb/is vergeten", "vergat", "vergaten", "vergeet", "vergeet", "vergeten"],
  ["verliezen", "терять", "heb/is verloren", "verloor", "verloren", "verlies", "verliest", "verliezen"],
  ["vermijden", "избегать", "heb vermeden", "vermeed", "vermeden", "vermijd", "vermijdt", "vermijden"],
  ["verstaan", "понимать (на слух)", "heb verstaan", "verstond", "verstonden", "versta", "verstaat", "verstaan"],
  ["vertrekken", "отправляться", "is vertrokken", "vertrok", "vertrokken", "vertrek", "vertrekt", "vertrekken"],
  ["vervangen", "заменять", "heb vervangen", "verving", "vervingen", "vervang", "vervangt", "vervangen"],
  ["vinden", "находить", "heb gevonden", "vond", "vonden", "vind", "vindt", "vinden"],
  ["vliegen", "летать", "heb/is gevlogen", "vloog", "vlogen", "vlieg", "vliegt", "vliegen"],
  ["vragen", "спрашивать", "heb gevraagd", "vroeg", "vroegen", "vraag", "vraagt", "vragen"],
  ["vriezen", "мерзнуть", "heeft gevroren", "vroor", "vroren", "vries", "vriest", "vriezen"],
  ["wassen", "мыть", "heb gewassen", "waste", "wasten", "was", "wast", "wassen"],
  ["wegen", "весить", "heb gewogen", "woog", "wogen", "weeg", "weegt", "wegen"],
  ["werpen", "бросать", "heb geworpen", "wierp", "wierpen", "werp", "werpt", "werpen"],
  ["weten", "знать", "heb geweten", "wist", "wisten", "weet", "weet", "weten"],
  ["wezen", "быть (устар.)", "ben geweest", "was", "waren", "ben", "is", "zijn"],
  ["wijzen", "указывать", "heb gewezen", "wees", "wezen", "wijs", "wijst", "wijzen"],
  ["willen", "хотеть", "heb gewild", "wilde", "wilden", "wil", "wil", "willen"],
  ["winnen", "выигрывать", "heb gewonnen", "won", "wonnen", "win", "wint", "winnen"],
  ["worden", "становиться", "ben geworden", "werd", "werden", "word", "wordt", "worden"],
  ["wrijven", "тереть", "heb gewreven", "wreef", "wreven", "wrijf", "wrijft", "wrijven"],
  ["zeggen", "сказать", "heb gezegd", "zei", "zeiden", "zeg", "zegt", "zeggen"],
  ["zenden", "посылать", "heb gezonden", "zond", "zonden", "zend", "zendt", "zenden"],
  ["zien", "видеть", "heb gezien", "zag", "zagen", "zie", "ziet", "zien"],
  ["zingen", "петь", "heb gezongen", "zong", "zongen", "zing", "zingt", "zingen"],
  ["zinken", "тонуть", "is gezonken", "zonk", "zonken", "zink", "zinkt", "zinken"],
  ["zitten", "сидеть", "heb gezeten", "zat", "zaten", "zit", "zit", "zitten"],
  ["zoeken", "искать", "heb gezocht", "zocht", "zochten", "zoek", "zoekt", "zoeken"],
  ["zuigen", "сосать", "heb gezogen", "zoog", "zogen", "zuig", "zuigt", "zuigen"],
  ["zuipen", "бухать", "heb gezopen", "zoop", "zopen", "zuip", "zuipt", "zuipen"],
  ["zullen", "буду (вспом.)", "-", "zou", "zouden", "zal", "zal", "zullen"],
  ["zwelgen", "упиваться", "heb gezwolgen", "zwolg", "zwolgen", "zwelg", "zwelgt", "zwelgen"],
  ["zwellen", "опухать", "is gezwollen", "zwol", "zwollen", "zwel", "zwelt", "zwellen"],
  ["zwemmen", "плавать", "heb/is gezwommen", "zwom", "zwommen", "zwem", "zwemt", "zwemmen"],
  ["zweren", "клясться", "heb gezworen", "zwoer", "zwoeren", "zweer", "zweert", "zweren"],
  ["zwerven", "бродить", "heb gezworven", "zwierf", "zwierven", "zwerf", "zwerft", "zwerven"],
  ["zwijgen", "молчать", "heb gezwegen", "zweeg", "zwegen", "zwijg", "zwijgt", "zwijgen"]
  ];

  let nextId = 100;
  const newVerbs = irregularVerbsData.map(v => {
    const [inf, trans, vtt, ik_ovt, wij_ovt, ik_ott, hij_ott, wij_ott] = v;
    
    let aux = 'hebben';
    if (vtt.startsWith('is ')) aux = 'zijn';
    if (vtt.startsWith('heb/is ') || vtt.startsWith('heeft/is ')) aux = 'both';

    let type = 'irregular';
    const separablePrefixes = ['aan', 'af', 'op', 'in', 'uit', 'mee', 'toe', 'terug', 'samen', 'over', 'voor'];
    let isSeparable = false;
    for (const p of separablePrefixes) {
      if (inf.startsWith(p) && inf !== p) {
        if (ik_ott.endsWith(' ' + p)) {
          isSeparable = true;
          break;
        }
      }
    }
    if (isSeparable) type = 'separable_irregular';
    if (inf.includes('zich')) type = 'reflexive_irregular';
    if (isSeparable && inf.includes('zich')) type = 'reflexive_separable_irregular';

    return {
      id: nextId++,
      infinitive: inf,
      translation: trans,
      type: type,
      ketchup: false,
      auxiliary: aux,
      forms: {
        ik_ott: ik_ott,
        hij_ott: hij_ott,
        wij_ott: wij_ott,
        ik_ovt: ik_ovt,
        wij_ovt: wij_ovt,
        vtt: vtt,
        ik_continuous: `ben aan het ${inf.replace('zich ', '')}`,
        hij_continuous: `is aan het ${inf.replace('zich ', '')}`,
        ik_future: `ga ${inf.replace('zich ', '')}`,
        hij_future: `gaat ${inf.replace('zich ', '')}`
      }
    };
  });

  const existingVerbsMatch = cleanedLines.join('\n').match(/infinitive: "([^"]+)"/g);
  const existingInfinitives = existingVerbsMatch ? existingVerbsMatch.map(s => s.replace('infinitive: "', '').replace('"', '')) : [];

  const filteredNewVerbs = newVerbs.filter(v => !existingInfinitives.includes(v.infinitive));

  let newVerbsStr = filteredNewVerbs.map(v => JSON.stringify(v, null, 2).replace(/"([^"]+)":/g, '$1:')).join(',\n  ');
  if (newVerbsStr) {
    newVerbsStr = ',\n  ' + newVerbsStr;
  }

  const finalLines = [
    ...cleanedLines.slice(0, verbsEnd),
    newVerbsStr,
    ...cleanedLines.slice(verbsEnd)
  ];

  fs.writeFileSync('./src/data/dutchData.ts', finalLines.join('\n'));
  console.log(`Fixed file and added ${filteredNewVerbs.length} new verbs.`);
} else {
  console.log("Could not find injected start.");
}

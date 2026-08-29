export type CountryCode = "USA" | "GER" | "SUI" | "AUT" | "CAN" | "FRA";

export type MedalPlace = "gold" | "silver" | "bronze";

export type PodiumFinish = {
  place: MedalPlace;
  country: CountryCode;
  team?: string;
  players?: string[];
};

export type PodiumEvent = {
  id: string;
  label: string;
  shortLabel: string;
  kind: "individual" | "squad";
  podium: PodiumFinish[];
};

export type ChampionSquad = {
  label: string;
  teams: { team: string; players: string[] }[];
};

export type Edition = {
  year: 2022 | 2024;
  edition: string;
  dates: string;
  location: string;
  venue: string;
  country: string;
  flag: string;
  image: string;
  imageAlt: string;
  imageCredit: string;
  imageCreditUrl: string;
  dek: string;
  story: string;
  events: PodiumEvent[];
  championSquads: ChampionSquad[];
  sources: { label: string; url: string }[];
};

export const countries: Record<
  CountryCode,
  { name: string; shortName: string; flag: string }
> = {
  USA: { name: "United States", shortName: "USA", flag: "🇺🇸" },
  GER: { name: "Germany", shortName: "Germany", flag: "🇩🇪" },
  SUI: { name: "Switzerland", shortName: "Switzerland", flag: "🇨🇭" },
  AUT: { name: "Austria", shortName: "Austria", flag: "🇦🇹" },
  CAN: { name: "Canada", shortName: "Canada", flag: "🇨🇦" },
  FRA: { name: "France", shortName: "France", flag: "🇫🇷" },
};

const p = (
  place: MedalPlace,
  country: CountryCode,
  team?: string,
  players?: string[],
): PodiumFinish => ({ place, country, team, players });

export const editions: Edition[] = [
  {
    year: 2022,
    edition: "The first Worlds",
    dates: "September 8–11, 2022",
    location: "Houthalen-Helchteren, Belgium",
    venue: "Park Molenheide",
    country: "Belgium",
    flag: "🇧🇪",
    image: "/images/worlds-2022-huddle.webp",
    imageAlt:
      "Mixed teams embrace beside a roundnet set after a match at the 2022 World Championship",
    imageCredit: "Corentin Bureau / International Roundnet Federation",
    imageCreditUrl:
      "https://www.roundnetfederation.org/roundnet-world-championship-2024",
    dek: "Five events. Five American golds. The sport’s first official World Championship set the benchmark in Belgium.",
    story:
      "The inaugural edition brought the international roundnet community together after the originally planned 2020 championship was postponed. The United States won all three individual divisions and both national squad titles, while Switzerland, Austria, Canada, and Germany reached the podium.",
    events: [
      {
        id: "mens-individual",
        label: "Men’s individual",
        shortLabel: "Men",
        kind: "individual",
        podium: [
          p("gold", "USA", "Assistive Touch", ["Buddy Hammon", "Clark Marshall"]),
          p("silver", "USA", "Cole/Hinkle", ["Matthew Cole", "Fredric Hinkle"]),
          p("bronze", "USA", "Hamilton/Picone", ["Thomas Hamilton", "Will Picone"]),
        ],
      },
      {
        id: "womens-individual",
        label: "Women’s individual",
        shortLabel: "Women",
        kind: "individual",
        podium: [
          p("gold", "USA", "Graham/Rogers", ["Becca Graham", "Alli Rogers"]),
          p("silver", "USA", "Foster/Hui", ["Allie Foster", "Karah Hui"]),
          p("bronze", "SUI", "Walczak/Kunzelmann", [
            "Levke Walczak",
            "Laura Kunzelmann",
          ]),
        ],
      },
      {
        id: "mixed-individual",
        label: "Mixed individual",
        shortLabel: "Mixed",
        kind: "individual",
        podium: [
          p("gold", "USA", "Gross/Hui", ["Ryan Gross", "Karah Hui"]),
          p("silver", "SUI", "Felix/Kunzelmann", ["Ramon Felix", "Laura Kunzelmann"]),
          p("bronze", "AUT", "Dziruni/Leybourne", ["Nelson Dziruni", "Megan Leybourne"]),
        ],
      },
      {
        id: "mens-squad",
        label: "Men’s national squad",
        shortLabel: "Men’s squad",
        kind: "squad",
        podium: [p("gold", "USA"), p("silver", "CAN"), p("bronze", "GER")],
      },
      {
        id: "womens-squad",
        label: "Women’s national squad",
        shortLabel: "Women’s squad",
        kind: "squad",
        podium: [p("gold", "USA"), p("silver", "GER"), p("bronze", "AUT")],
      },
    ],
    championSquads: [
      {
        label: "USA men’s championship squad",
        teams: [
          { team: "Assistive Touch", players: ["Buddy Hammon", "Clark Marshall"] },
          { team: "Cole/Hinkle", players: ["Matthew Cole", "Fredric Hinkle"] },
          { team: "Hamilton/Picone", players: ["Thomas Hamilton", "Will Picone"] },
          { team: "Abrams/Gross", players: ["Dan Abrams", "Ryan Gross"] },
          { team: "Finocchi/Model", players: ["Gabe Finocchi", "Max Model"] },
        ],
      },
      {
        label: "USA women’s championship squad",
        teams: [
          { team: "Graham/Rogers", players: ["Becca Graham", "Alli Rogers"] },
          { team: "Foster/Hui", players: ["Allie Foster", "Karah Hui"] },
          { team: "Patel/Pierson", players: ["Shachi Patel", "Katie Pierson"] },
        ],
      },
    ],
    sources: [
      {
        label: "2022 results and rosters",
        url: "https://spikewiki.com/wiki/2022_Roundnet_World_Championship",
      },
      {
        label: "IRF history of Worlds",
        url: "https://www.roundnetfederation.org/asdffdsgffg",
      },
    ],
  },
  {
    year: 2024,
    edition: "Europe breaks through",
    dates: "August 29–September 1, 2024",
    location: "Guildford, England",
    venue: "Surrey Sports Park",
    country: "Great Britain",
    flag: "🇬🇧",
    image: "/images/worlds-2024-champions.webp",
    imageAlt:
      "Laura Kunzelmann of Switzerland is congratulated after competition at the 2024 World Championship",
    imageCredit: "International Roundnet Federation / Worlds photographers",
    imageCreditUrl: "https://www.roundnetfederation.org/worlds2026/about",
    dek: "Europe took all three individual crowns. The United States kept both squad titles. Worlds had a new balance of power.",
    story:
      "The second edition moved to Guildford and changed the shape of the record book. Germany, Austria, and Switzerland won the men’s, women’s, and mixed individual titles. The United States remained perfect in squad competition, winning both national titles for the second straight edition.",
    events: [
      {
        id: "mens-individual",
        label: "Men’s individual",
        shortLabel: "Men",
        kind: "individual",
        podium: [
          p("gold", "GER", "Eisenträger/Siemer", ["Lukas Eisenträger", "Paul Siemer"]),
          p("silver", "CAN", "Insystem", ["Blake Bosak", "Etienne Cote"]),
          p("bronze", "USA", "Bondi/Finocchi", ["Joe Bondi", "Gabe Finocchi"]),
        ],
      },
      {
        id: "womens-individual",
        label: "Women’s individual",
        shortLabel: "Women",
        kind: "individual",
        podium: [
          p("gold", "AUT", "Tiramisu", ["Megan Leybourne", "Daniela Kadlec"]),
          p("silver", "GER", "Stadler/Stadler", ["Franzi Stadler", "Julia Stadler"]),
          p("bronze", "FRA", "Alt/Paysan", ["Natacha Alt", "Inès Paysan"]),
        ],
      },
      {
        id: "mixed-individual",
        label: "Mixed individual",
        shortLabel: "Mixed",
        kind: "individual",
        podium: [
          p("gold", "SUI", "Kunzelmann/Felix", ["Laura Kunzelmann", "Ramon Felix"]),
          p("silver", "USA", "Pierson/Rose", ["Katie Pierson", "Kieran Rose"]),
          p("bronze", "CAN", "Vallée/Prince", ["Laurence Vallée", "Maxime Prince"]),
        ],
      },
      {
        id: "mens-squad",
        label: "Men’s national squad",
        shortLabel: "Men’s squad",
        kind: "squad",
        podium: [p("gold", "USA"), p("silver", "CAN"), p("bronze", "GER")],
      },
      {
        id: "womens-squad",
        label: "Women’s national squad",
        shortLabel: "Women’s squad",
        kind: "squad",
        podium: [p("gold", "USA"), p("silver", "GER"), p("bronze", "AUT")],
      },
    ],
    championSquads: [
      {
        label: "USA men’s championship squad",
        teams: [
          { team: "Rogue", players: ["Thomas Hamilton", "Ryan Marino"] },
          { team: "Bondi/Finocchi", players: ["Joe Bondi", "Gabe Finocchi"] },
          { team: "Cole/Klapwijk", players: ["Matthew Cole", "Grant Klapwijk"] },
          { team: "Picone/Nelson", players: ["Will Picone", "Connor Nelson"] },
          { team: "Gross/Rose", players: ["Ryan Gross", "Kieran Rose"] },
        ],
      },
      {
        label: "USA women’s championship squad",
        teams: [
          { team: "Hui/O. Jenki", players: ["Karah Hui", "Olivia Jenki"] },
          { team: "Washburn/A. Jenki", players: ["Lou Washburn", "Ali Jenki"] },
          { team: "Morgan/Wu-Fleming", players: ["Kalin Morgan", "Kayla Wu-Fleming"] },
          { team: "Pierson/Phan", players: ["Katie Pierson", "Katheleen Phan"] },
          { team: "Timan/Allen", players: ["Julia Timan", "Sarah Allen"] },
        ],
      },
    ],
    sources: [
      {
        label: "2024 results and rosters",
        url: "https://spikewiki.com/wiki/2024_Roundnet_World_Championship",
      },
      {
        label: "IRF 2024 event archive",
        url: "https://www.roundnetfederation.org/roundnet-world-championship-2024",
      },
      {
        label: "IRF 2024 competition format",
        url: "https://www.roundnetfederation.org/roundnet-world-championship-2024/format",
      },
    ],
  },
];

export const medalTable = [
  { country: "USA" as const, gold: 7, silver: 3, bronze: 2 },
  { country: "GER" as const, gold: 1, silver: 3, bronze: 2 },
  { country: "SUI" as const, gold: 1, silver: 1, bronze: 1 },
  { country: "AUT" as const, gold: 1, silver: 0, bronze: 3 },
  { country: "CAN" as const, gold: 0, silver: 3, bronze: 1 },
  { country: "FRA" as const, gold: 0, silver: 0, bronze: 1 },
];

export const reigningIndividualChampions = editions[1].events
  .filter((event) => event.kind === "individual")
  .map((event) => ({ event: event.shortLabel, ...event.podium[0] }));

export const archiveSources = [
  {
    label: "International Roundnet Federation — About Worlds",
    url: "https://www.roundnetfederation.org/asdffdsgffg",
  },
  {
    label: "Spike Wiki — complete Worlds podium archive",
    url: "https://spikewiki.com/wiki/Roundnet_World_Championships",
  },
  {
    label: "Everything Roundnet — medal count before France 2026",
    url: "https://www.instagram.com/p/DcmL__Yln7g/",
  },
  {
    label: "ROUNDNETWORK — World Championship documentary",
    url: "https://www.youtube.com/watch?v=eEI1QaPPWNc",
  },
  {
    label: "IRF — Worlds 2026",
    url: "https://www.roundnetfederation.org/worlds2026/about",
  },
];

export const medalLabels: Record<MedalPlace, { rank: string; label: string }> = {
  gold: { rank: "01", label: "Gold" },
  silver: { rank: "02", label: "Silver" },
  bronze: { rank: "03", label: "Bronze" },
};

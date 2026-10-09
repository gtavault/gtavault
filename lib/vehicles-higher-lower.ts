export type HigherLowerVehicle = {
  id: string;
  name: string;
  price: number;
  image: string;
};

export const higherLowerVehicles: HigherLowerVehicle[] = [
  // ─────────────────────────────────────────────
  // SUPERS
  // ─────────────────────────────────────────────

  {
    id: "adder",
    name: "Truffade Adder",
    price: 1000000,
    image: "/games/vehicles/adder.webp",
  },
  {
    id: "zentorno",
    name: "Pegassi Zentorno",
    price: 725000,
    image: "/games/vehicles/zentorno.webp",
  },
  {
    id: "t20",
    name: "Progen T20",
    price: 2200000,
    image: "/games/vehicles/t20.webp",
  },
  {
    id: "osiris",
    name: "Pegassi Osiris",
    price: 1950000,
    image: "/games/vehicles/osiris.webp",
  },
  {
    id: "entity-xf",
    name: "Overflod Entity XF",
    price: 795000,
    image: "/games/vehicles/entity-xf.webp",
  },
  {
    id: "turismo-r",
    name: "Grotti Turismo R",
    price: 500000,
    image: "/games/vehicles/turismo-r.webp",
  },
  {
    id: "infernus",
    name: "Pegassi Infernus",
    price: 440000,
    image: "/games/vehicles/infernus.webp",
  },
  {
    id: "vacca",
    name: "Pegassi Vacca",
    price: 240000,
    image: "/games/vehicles/vacca.webp",
  },
  {
    id: "bullet",
    name: "Vapid Bullet",
    price: 155000,
    image: "/games/vehicles/bullet.webp",
  },
  {
    id: "cheetah",
    name: "Grotti Cheetah",
    price: 650000,
    image: "/games/vehicles/cheetah.webp",
  },
  {
    id: "reaper",
    name: "Pegassi Reaper",
    price: 1595000,
    image: "/games/vehicles/reaper.webp",
  },
  {
    id: "fmj",
    name: "Vapid FMJ",
    price: 1750000,
    image: "/games/vehicles/fmj.webp",
  },
  {
    id: "nero",
    name: "Truffade Nero",
    price: 1440000,
    image: "/games/vehicles/nero.webp",
  },
  {
    id: "tempesta",
    name: "Pegassi Tempesta",
    price: 1329000,
    image: "/games/vehicles/tempesta.webp",
  },
  {
    id: "comet-sr",
    name: "Pfister Comet SR",
    price: 1145000,
    image: "/games/vehicles/comet-sr.webp",
  },
  {
    id: "ignus",
    name: "Pegassi Ignus",
    price: 2765000,
    image: "/games/vehicles/ignus.webp",
  },
  {
    id: "furia",
    name: "Grotti Furia",
    price: 2740000,
    image: "/games/vehicles/furia.webp",
  },
  {
    id: "italirsx",
    name: "Grotti Itali RSX",
    price: 3465000,
    image: "/games/vehicles/italirsx.webp",
  },
  {
    id: "torero-xo",
    name: "Pegassi Torero XO",
    price: 2890000,
    image: "/games/vehicles/torero-xo.webp",
  },
  {
    id: "champion",
    name: "Dewbauchee Champion",
    price: 3750000,
    image: "/games/vehicles/champion.webp",
  },
  {
    id: "paragon-s",
    name: "Enus Paragon S",
    price: 2010000,
    image: "/games/vehicles/paragon-s.webp",
  },
  {
    id: "horus",
    name: "Pegassi Horus",
    price: 2810000,
    image: "/games/vehicles/horus.png",
  },
  {
    id: "veleno-gt",
    name: "Grotti Veleno GT",
    price: 3090000,
    image: "/games/vehicles/veleno-gt.webp",
  },
  {
    id: "cartuccia-gt",
    name: "Grotti Cartuccia GT",
    price: 2395000,
    image: "/games/vehicles/cartuccia-gt.jpg",
  },
  

  // ─────────────────────────────────────────────
  // SPORTS
  // ─────────────────────────────────────────────

  {
    id: "jester",
    name: "Dinka Jester",
    price: 240000,
    image: "/games/vehicles/jester.webp",
  },
  {
    id: "massacro",
    name: "Dewbauchee Massacro",
    price: 275000,
    image: "/games/vehicles/massacro.webp",
  },
  {
    id: "feltzer",
    name: "Benefactor Feltzer",
    price: 145000,
    image: "/games/vehicles/feltzer.webp",
  },
  {
    id: "coquette",
    name: "Invetero Coquette",
    price: 138000,
    image: "/games/vehicles/coquette.webp",
  },
  {
    id: "banshee",
    name: "Bravado Banshee",
    price: 105000,
    image: "/games/vehicles/banshee.webp",
  },
  {
    id: "carbonizzare",
    name: "Grotti Carbonizzare",
    price: 195000,
    image: "/games/vehicles/carbonizzare.webp",
  },
  {
    id: "comet",
    name: "Pfister Comet",
    price: 100000,
    image: "/games/vehicles/comet.webp",
  },
  {
    id: "comet-s2",
    name: "Pfister Comet S2",
    price: 1878000,
    image: "/games/vehicles/comet-s2.webp",
  },
  {
    id: "comet-s2-cabrio",
    name: "Pfister Comet S2 Cabrio",
    price: 1797000,
    image: "/games/vehicles/comet-s2-cabrio.webp",
  },
  {
    id: "italia-gto",
    name: "Grotti Itali GTO",
    price: 1796000,
    image: "/games/vehicles/italia-gto.webp",
  },
  {
    id: "italia-gto-stinger",
    name: "Grotti Itali GTO Stinger TT",
    price: 2290000,
    image: "/games/vehicles/italia-gto-stinger.webp",
  },
  {
    id: "pariah",
    name: "Ocelot Pariah",
    price: 1420000,
    image: "/games/vehicles/pariah.webp",
  },
  {
    id: "jugular",
    name: "Ocelot Jugular",
    price: 1225000,
    image: "/games/vehicles/jugular.webp",
  },
  {
    id: "sultan-rs",
    name: "Karin Sultan RS",
    price: 795000,
    image: "/games/vehicles/sultan-rs.webp",
  },
  {
    id: "elegy-rh8",
    name: "Annis Elegy RH8",
    price: 95000,
    image: "/games/vehicles/elegy-rh8.webp",
  },
  {
    id: "elegy-retro",
    name: "Annis Elegy Retro Custom",
    price: 904000,
    image: "/games/vehicles/elegy-retro.webp",
  },
  {
    id: "alpha",
    name: "Albany Alpha",
    price: 150000,
    image: "/games/vehicles/alpha.webp",
  },
  {
    id: "schlagen",
    name: "Benefactor Schlagen GT",
    price: 1300000,
    image: "/games/vehicles/schlagen.webp",
  },
  {
    id: "locust",
    name: "Ocelot Locust",
    price: 1625000,
    image: "/games/vehicles/locust.webp",
  },
  {
    id: "sugoi",
    name: "Dinka Sugoi",
    price: 1190000,
    image: "/games/vehicles/sugoi.webp",
  },

  // ─────────────────────────────────────────────
  // MUSCLE
  // ─────────────────────────────────────────────

  {
    id: "dominator",
    name: "Vapid Dominator",
    price: 35000,
    image: "/games/vehicles/dominator.webp",
  },
  {
    id: "dominator-gt",
    name: "Vapid Dominator GT",
    price: 1840000,
    image: "/games/vehicles/dominator-gt.webp",
  },
  {
    id: "dominator-asp",
    name: "Vapid Dominator ASP",
    price: 1225000,
    image: "/games/vehicles/dominator-asp.webp",
  },
  {
    id: "gauntlet",
    name: "Bravado Gauntlet",
    price: 32000,
    image: "/games/vehicles/gauntlet.webp",
  },
 
  {
    id: "vigero",
    name: "Declasse Vigero",
    price: 21000,
    image: "/games/vehicles/vigero.webp",
  },
  {
    id: "vigero-zx",
    name: "Declasse Vigero ZX",
    price: 1920000,
    image: "/games/vehicles/vigero-zx.webp",
  },
  {
    id: "ruiner",
    name: "Imponte Ruiner",
    price: 10000,
    image: "/games/vehicles/ruiner.webp",
  },
  {
    id: "buffalo-stx",
    name: "Bravado Buffalo STX",
    price: 2150000,
    image: "/games/vehicles/buffalo-stx.webp",
  },

  // ─────────────────────────────────────────────
  // SEDANS / SUVS
  // ─────────────────────────────────────────────

  {
    id: "schafter-v12",
    name: "Benefactor Schafter V12",
    price: 116000,
    image: "/games/vehicles/schafter-v12.webp",
  },
  {
    id: "tailgater-s",
    name: "Obey Tailgater S",
    price: 1380000,
    image: "/games/vehicles/tailgater-s.webp",
  },
  {
    id: "cognoscenti",
    name: "Enus Cognoscenti",
    price: 254000,
    image: "/games/vehicles/cognoscenti.webp",
  },
  {
    id: "super-diamond",
    name: "Enus Super Diamond",
    price: 250000,
    image: "/games/vehicles/super-diamond.webp",
  },
  {
    id: "baller-st",
    name: "Gallivanter Baller ST",
    price: 890000,
    image: "/games/vehicles/baller-st.webp",
  },
  {
    id: "jubilee",
    name: "Enus Jubilee",
    price: 1650000,
    image: "/games/vehicles/jubilee.webp",
  },
  {
    id: "rebla-gts",
    name: "Übermacht Rebla GTS",
    price: 1175000,
    image: "/games/vehicles/rebla-gts.webp",
  },
  {
    id: "toros",
    name: "Pegassi Toros",
    price: 498000,
    image: "/games/vehicles/toros.webp",
  },
  {
    id: "iwagen",
    name: "Obey I-Wagen",
    price: 1720000,
    image: "/games/vehicles/iwagen.webp",
  },
 

  // ─────────────────────────────────────────────
  // MOTORCYCLES
  // ─────────────────────────────────────────────

  {
    id: "bati-801",
    name: "Pegassi Bati 801",
    price: 15000,
    image: "/games/vehicles/bati-801.webp",
  },
  {
    id: "hakuchou",
    name: "Shitzu Hakuchou",
    price: 82000,
    image: "/games/vehicles/hakuchou.webp",
  },
  {
    id: "shotaro",
    name: "Nagasaki Shotaro",
    price: 2225000,
    image: "/games/vehicles/shotaro.webp",
  },
  {
    id: "deathbike",
    name: "Western Apocalypse Deathbike",
    price: 1377200,
    image: "/games/vehicles/deathbike.webp",
  },
  {
    id: "sanctus",
    name: "LCC Sanctus",
    price: 1995000,
    image: "/games/vehicles/sanctus.webp",
  },

  // ─────────────────────────────────────────────
  // WEAPONIZED / SPECIAL VEHICLES
  // ─────────────────────────────────────────────

  {
    id: "oppressor",
    name: "Pegassi Oppressor",
    price: 3875000,
    image: "/games/vehicles/oppressor.webp",
  },
  {
    id: "oppressor-mk2",
    name: "Pegassi Oppressor Mk II",
    price: 8000000,
    image: "/games/vehicles/oppressor-mk2.webp",
  },
  {
    id: "deluxo",
    name: "Imponte Deluxo",
    price: 5290000,
    image: "/games/vehicles/deluxo.webp",
  },
  {
    id: "scramjet",
    name: "Declasse Scramjet",
    price: 4628000,
    image: "/games/vehicles/scramjet.webp",
  },
  {
    id: "ruiner-2000",
    name: "Imponte Ruiner 2000",
    price: 5250000,
    image: "/games/vehicles/ruiner-2000.webp",
  },
  {
    id: "vigilante",
    name: "Grotti Vigilante",
    price: 3750000,
    image: "/games/vehicles/vigilante.webp",
  },
  {
    id: "stromberg",
    name: "Ocelot Stromberg",
    price: 3185000,
    image: "/games/vehicles/stromberg.webp",
  },
  {
    id: "toreador",
    name: "Pegassi Toreador",
    price: 3760000,
    image: "/games/vehicles/toreador.webp",
  },
  {
    id: "nightshark",
    name: "HVY Nightshark",
    price: 1377500,
    image: "/games/vehicles/nightshark.webp",
  },
  {
    id: "insurgent-pickup",
    name: "HVY Insurgent Pick-Up",
    price: 1698000,
    image: "/games/vehicles/insurgent-pickup.webp",
  },
  {
    id: "technical-aqua",
    name: "Nagasaki Technical Aqua",
    price: 1450000,
    image: "/games/vehicles/technical-aqua.webp",
  },
  {
    id: "khanjali",
    name: "TM-02 Khanjali",
    price: 3480000,
    image: "/games/vehicles/khanjali.webp",
  },
  {
    id: "rc-tank",
    name: "Invade and Persuade RC Tank",
    price: 2275000,
    image: "/games/vehicles/rc-tank.webp",
  },
  {
    id: "rc-bandito",
    name: "RC Bandito",
    price: 1590000,
    image: "/games/vehicles/rc-bandito.webp",
  },

  // ─────────────────────────────────────────────
  // AIRCRAFT
  // ─────────────────────────────────────────────

  {
    id: "hydra",
    name: "Mammoth Hydra",
    price: 3990000,
    image: "/games/vehicles/hydra.webp",
  },
  {
    id: "lazer",
    name: "P-996 Lazer",
    price: 6500000,
    image: "/games/vehicles/lazer.webp",
  },
  {
    id: "pyro",
    name: "Buckingham Pyro",
    price: 4455500,
    image: "/games/vehicles/pyro.webp",
  },
  {
    id: "akula",
    name: "Akula",
    price: 4500000,
    image: "/games/vehicles/akula.webp",
  },
  {
    id: "buzzard",
    name: "Nagasaki Buzzard",
    price: 1750000,
    image: "/games/vehicles/buzzard.webp",
  },
  {
    id: "hunter",
    name: "FH-1 Hunter",
    price: 4200000,
    image: "/games/vehicles/hunter.webp",
  },
  {
    id: "savage",
    name: "Savage",
    price: 1950000,
    image: "/games/vehicles/savage.webp",
  },
  {
    id: "avenger",
    name: "Mammoth Avenger",
    price: 3750000,
    image: "/games/vehicles/avenger.webp",
  },
  {
    id: "thruster",
    name: "Mammoth Thruster",
    price: 2500000,
    image: "/games/vehicles/thruster.webp",
  },
  {
    id: "titan-250d",
    name: "Eberhard Titan 250 D",
    price: 4870000,
    image: "/games/vehicles/titan-250d.webp",
  },
];
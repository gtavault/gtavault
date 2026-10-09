
export interface HeistGuide {
  slug: string;
  title: string;
  date: string;
  updated: string;
  excerpt: string;
  image: string;
  planningImage?: string;
escapeImage?: string;
  category: string;
  featured?: boolean;
  readingTime?: string;
  sections?: number;
  content: string;
}

export const heistGuides: HeistGuide[] = [
  
{
  slug: "heist-overview",
  title: "Heist Overview",
  date: "26 June 2026",
  updated: "8 October 2026",
  excerpt:
    "Explore what is officially known about heists, robberies, preparation and escape in Grand Theft Auto VI.",
  image: "/heists/heist-overview.jpg",
  planningImage: "/heists/heist-planning.jpg",
escapeImage: "/heists/heist-escape.jpg",
  category: "Heists",
  featured: true,
  readingTime: "7",
  sections: 6,
  content: `
OVERVIEW

Heists have become one of Rockstar Games' defining gameplay experiences, combining preparation, high-pressure action and storytelling. Although the full heist systems in Grand Theft Auto VI have not been explained, Jason and Lucia's criminal activities are an important part of the story.

THE EVOLUTION OF HEISTS

Grand Theft Auto V introduced large-scale heists with crew selection, equipment and different approaches. Whether GTA VI will use the same systems or expand them remains unknown.

Official footage shows Jason and Lucia involved in criminal situations together. Their partnership is central to the story, but the precise mechanics of working together during missions have not been fully detailed.

PLANNING THE PERFECT JOB

Preparation can be important in criminal operations, but Rockstar has not confirmed the complete planning system for GTA VI. Crew selection, equipment choices, getaway vehicles and escape routes should not be treated as confirmed mechanics unless supported by official information.

EXECUTION & ESCAPE

Official footage has shown criminal situations and pursuits involving the protagonists. The exact structure of heist missions, the range of possible approaches and the mechanics for escaping law enforcement remain unknown.

WHAT ROCKSTAR HAS CONFIRMED

• Jason and Lucia are the two playable protagonists.

• Crime is central to the game's story.

• Official footage has shown the protagonists involved in criminal activity.

• Their relationship and partnership are important themes.

WHAT WE STILL DON'T KNOW

Rockstar has not published a complete list of heist missions or explained whether players can recruit crews, choose multiple approaches or conduct repeatable robberies throughout free roam.

The frequency of major heists, the available preparation systems and the consequences of different approaches also remain unconfirmed.

GTA VAULT ANALYSIS

GTA VI has the opportunity to build on the series' established approach to criminal missions while developing Jason and Lucia's story. However, the full heist system remains to be revealed. This guide will distinguish confirmed information from informed speculation as new official details become available.
`,
},

  {
    slug: "wanted-system",
    title: "Wanted System",
    date: "8 October 2026",
    updated: "8 October 2026",
    excerpt:
      "Examine what official GTA VI footage reveals about police responses, pursuits and law enforcement.",
    image: "/heists/wanted-system.jpg",
    category: "Law Enforcement",
    readingTime: "5",
    sections: 4,
    content: `
OVERVIEW

Law enforcement has always been central to Grand Theft Auto. Criminal activity can bring police attention, creating pursuits and dangerous confrontations.

GTA VI footage has shown police and armed confrontations, but Rockstar has not published a complete explanation of the game's wanted system.

WHAT IS CONFIRMED?

• Official footage has shown law-enforcement activity.

• Police appear in the world of Leonida.

• The complete wanted-level mechanics have not been officially detailed.

POLICE PURSUITS

Previous Grand Theft Auto games have used wanted levels, vehicle pursuits and attempts to evade law enforcement. GTA VI may develop these ideas, but the exact detection, pursuit and escape mechanics remain unconfirmed.

WHAT REMAINS UNKNOWN?

• The number and behaviour of wanted levels.

• How police search for hidden players.

• Whether disguises or other evasion mechanics are available.

• How the system changes between different regions.

We will add verified details as Rockstar releases them.
`,
  },
  {
    slug: "crimes-and-activities",
    title: "Crimes & Activities",
    date: "8 October 2026",
    updated: "8 October 2026",
    excerpt:
      "Explore criminal activity shown in GTA VI footage and distinguish confirmed details from speculation.",
    image: "/heists/crimes-and-activities.jpg",
    category: "Criminal Activities",
    readingTime: "5",
    sections: 4,
    content: `
OVERVIEW

Crime is central to Grand Theft Auto VI's story. Jason and Lucia are connected to Leonida's criminal world, and official footage has shown them involved in dangerous situations.

The complete range of activities available to players has not yet been fully documented.

ACTIVITIES SHOWN

• Official footage has shown robberies and criminal situations.

• Jason and Lucia are closely connected to the criminal world.

• Law-enforcement encounters feature in the material released so far.

ACTIVITIES THAT REMAIN UNKNOWN

Rockstar has not confirmed every side activity, optional crime or repeatable criminal opportunity. Specific mission names and mechanics should not be treated as confirmed without reliable official evidence.

EXPLORING LEONIDA

The wider state of Leonida includes urban, coastal and rural environments. How criminal activities differ between these locations remains to be fully revealed.

This guide will expand as more official information becomes available.
`,
  },
  {
    slug: "money-making",
    title: "Money Making",
    date: "8 October 2026",
    updated: "8 October 2026",
    excerpt:
      "Explore what is known about money, criminal opportunities and the economy in GTA VI.",
    image: "/heists/money-making.jpg",
    category: "Money & Economy",
    readingTime: "4",
    sections: 4,
    content: `
OVERVIEW

Money has been an important part of Grand Theft Auto, helping players purchase vehicles, properties, weapons and other items in previous games.

GTA VI's complete economy and money-making systems have not yet been officially explained.

WHAT IS KNOWN?

• Jason and Lucia are involved in criminal activity.

• Robberies have appeared in official footage.

• The complete rewards and financial systems have not been revealed.

POTENTIAL MONEY-MAKING METHODS

Earlier Grand Theft Auto games have included story missions, robberies, side activities and other ways to earn money. These provide context for the series, but they do not confirm which methods will return in GTA VI.

PRICES AND THE ECONOMY

Rockstar has not published a complete in-game price list or explained the full economy. Specific vehicle prices, property costs and mission payouts should therefore be treated as unknown unless officially confirmed.

GTA Vault will update this guide when reliable details emerge.
`,
  },
];

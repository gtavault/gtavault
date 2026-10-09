export interface Guide {
  slug: string;
  title: string;
  date: string;
  updated: string;
  excerpt: string;
  image: string;
  category: string;
  featured?: boolean;
  readingTime?: string;
  sections?: number;

  content: string;

  // Optional interactive media
  mapImage?: string;
  mapCaption?: string;
  gallery?: string[];
}

export const guides: Guide[] = [
  {
    slug: "gta-6-map-guide",
    title: "The GTA VI Map Guide",
    date: "26 June 2026",
    updated: "26 June 2026",
    excerpt:
      "Explore Vice City, Leonida and every confirmed location revealed by Rockstar Games so far.",
    image: "/guides/gta-6-map-guide.jpg",
    category: "Map",
    featured: true,
    readingTime: "6",
    sections: 5,

    mapImage: "/guides/gta-6-map-concept.webp",
    mapCaption:
      "Community-made map concept based on official GTA VI trailers and screenshots. This is not an official Rockstar Games map.",

    content: `
OVERVIEW

Grand Theft Auto VI returns players to Vice City and introduces the wider state of Leonida. Rockstar Games has described Leonida as its biggest and most immersive open world to date, featuring major cities, beaches, wetlands and smaller communities spread across the state.

CONFIRMED LOCATIONS

Official trailers and screenshots have revealed several locations, including Vice City, Port Gellhorn, Grassrivers and Mount Kalaga National Park. Each area appears to offer its own atmosphere and activities, making Leonida the most diverse setting in Grand Theft Auto history.

WHAT WE KNOW SO FAR

Rockstar continues to reveal new details through trailers and screenshots, but much of the map remains undisclosed. Every new piece of official material provides additional clues about the scale of Vice City and the wider state of Leonida.

RUMOURED MAP

Scroll inside the map to explore it, or click to view the full map.

WHY THE MAP REMAINS A MYSTERY

• Rockstar Games has not released an official GTA VI map.

• Community concepts are created using official trailers, screenshots and named locations.

• The final layout of Vice City and the wider state of Leonida remains unknown.
`,
  },

  {
    slug: "vice-city-districts",
    title: "Vice City Districts",
    date: "26 June 2026",
    updated: "26 June 2026",
    excerpt:
      "Explore the different districts and regions revealed across Vice City and Leonida.",
    image: "/guides/vice-city-districts.jpg",
    category: "World",
    readingTime: "5",
    sections: 6,

    gallery: [
      "/guides/vice-city-skyline.jpg",
      "/guides/leonida-wetlands.jpg",
      "/guides/vice-beach.jpg",
      "/guides/mount-kalaga.jpg",
    ],

    content: `
WHAT WE KNOW SO FAR

Rockstar has revealed several locations across Vice City and the wider state of Leonida through trailers and screenshots. While the complete map remains unknown, official material has already shown beaches, downtown districts, suburbs and rural regions.

QUICK FACTS

• State: Leonida

• Main City: Vice City

• Confirmed Locations: 7+

• Environments: Cities, beaches, wetlands and forests

CONFIRMED DISTRICTS

• Vice City

• Ocean Beach

• Vice Beach

• Port Gellhorn

• Grassrivers

• Ambrosia

• Mount Kalaga National Park

EXPLORE LEONIDA

Vice City returns as the main urban setting of Grand Theft Auto VI and appears to feature busy streets, skyscrapers and vibrant nightlife inspired by modern-day Miami.

Ocean Beach and Vice Beach are among the most iconic coastal areas revealed so far, featuring hotels, nightlife and large stretches of sand.

Port Gellhorn appears to be a rougher and less glamorous location that has developed its own identity away from Vice City.

Grassrivers is Leonida's vast wetland region and appears to be home to swamps, wildlife and remote locations.

Ambrosia and Mount Kalaga National Park suggest that Leonida extends far beyond Vice City, offering industrial areas, forests and mountainous environments to explore.

WHAT COULD STILL BE HIDDEN?

• Additional towns and cities

• More islands around Leonida

• Hidden interior locations

• Underground areas and secret locations
`,
  },

  {
    slug: "tips-and-tricks",
    title: "GTA VI Tips & Tricks",
    date: "26 June 2026",
    updated: "26 June 2026",
    excerpt:
      "Useful advice and information to help you prepare for Grand Theft Auto VI.",
    image: "/guides/tips-and-tricks.jpg",
    category: "Tips",
    readingTime: "4",
    sections: 3,

    content: `
GET READY FOR LAUNCH

• Follow Rockstar Games for official GTA VI news and updates.

• Avoid unverified rumours and fake gameplay leaks.

• Make sure you have enough free storage on your console.

• Consider pre-ordering if you plan to play on release day.

WHAT TO EXPECT

Based on official trailers and Rockstar announcements, players can expect a huge open world, improved visuals, a modern version of Vice City and a story centred around Lucia and Jason. Rockstar is also introducing the wider state of Leonida, offering a more diverse world than any previous Grand Theft Auto game.

COMMUNITY ADVICE

• Take time to explore instead of rushing through the story.

• Try different vehicles and activities to experience everything Leonida has to offer.

• Watch out for hidden details and Rockstar easter eggs.

• Check GTA Vault regularly for new guides and updates.
`,
  },

  {
    slug: "everything-confirmed",
    title: "Everything Confirmed So Far",
    date: "26 June 2026",
    updated: "26 June 2026",
    excerpt:
      "Every officially confirmed detail about Grand Theft Auto VI in one place.",
    image: "/guides/everything-confirmed.jpg",
    category: "Official",
    readingTime: "5",
    sections: 6,

    content: `
PRICING

• Standard Edition: £69.99 / $79.99

• Ultimate Edition: £89.99 / $99.99

• Prices may vary slightly between retailers and regions.

PRE-ORDERS

• Pre-orders are now available.

• Digital pre-orders are available on PlayStation 5 and Xbox Series X|S.

• Physical editions can be pre-ordered from selected retailers.

RELEASE

• Release date: 19 November 2026

• Launching on PlayStation 5 and Xbox Series X|S

• PC release has not yet been officially confirmed.

SETTING

• The game is set in the fictional state of Leonida.

• Vice City returns as the main city.

• Rockstar has revealed beaches, wetlands, highways and rural areas.

• Leonida is the biggest and most immersive GTA world Rockstar has created.

MAIN CHARACTERS

• Lucia is one of the two playable protagonists.

• Jason joins Lucia as the second main character.

• Their story focuses on crime, trust and survival.

GAMEPLAY

• Dynamic open-world exploration.

• Improved visuals powered by Rockstar's latest technology.

• A wide variety of vehicles including cars, boats and aircraft.

• Expanded environmental detail and wildlife.

TRAILERS & SCREENSHOTS

• Rockstar has released multiple official trailers.

• Hundreds of official screenshots have revealed new locations and characters.

• Every trailer has provided new confirmed details about Leonida.
`,
  },
    {
    slug: "gta-6-characters-guide",
    title: "GTA VI Characters Guide",
    date: "8 October 2026",
    updated: "8 October 2026",
    excerpt:
      "Everything officially revealed so far about Jason, Lucia and the wider cast of Grand Theft Auto VI.",
    image: "/guides/gta-6-characters.jpg",
    category: "Characters",
    readingTime: "7",
    sections: 8,
    content: `
JASON DUVAL

Jason Duval is one of the two central protagonists of Grand Theft Auto VI. He lives in the Florida Keys and has become involved with local criminals while trying to build a better life.

Jason is presented as more experienced and streetwise than Lucia, but his relationship with her becomes central to the game's story.

LUCIA CAMERON

Lucia is the second playable protagonist and one of the most important characters in GTA VI.

Rockstar has shown Lucia returning to Vice City after serving time in prison. Her determination to improve her situation brings her together with Jason, and the pair quickly become involved in a dangerous criminal world.

JASON AND LUCIA

Jason and Lucia are at the heart of GTA VI's story.

Their relationship appears to be based on trust, ambition and survival. Official footage has shown the pair working together during robberies, travelling across Leonida and attempting to stay ahead of the authorities and rival criminals.

THEIR CRIMINAL PARTNERSHIP

Jason and Lucia become involved in increasingly dangerous criminal activities across Leonida.

Their partnership allows the game to explore both major robberies and smaller criminal operations, while their personal relationship remains an important part of the narrative.

BOBBY "DREW" DAUGHERTY

Bobby is a character connected to the wider criminal and social world of Leonida. His presence in official footage helps demonstrate the range of personalities surrounding Jason and Lucia.

RAUL BAUTISTA

Raul is an experienced bank robber who appears to operate alongside other criminals in Leonida.

His experience and confidence make him one of the more notable members of the game's criminal cast.

BRIAN HEDER

Brian is an older criminal figure connected to Jason's life in the Florida Keys.

His criminal activities and relationships help establish the environment Jason is living in before the events of the main story fully develop.

WHO ELSE WILL APPEAR?

Rockstar has revealed a growing number of characters through trailers, screenshots and official artwork, but the complete cast has not yet been revealed.

More characters are expected to be introduced as Rockstar continues its marketing campaign and as players discover Leonida for themselves after launch.

WHAT WE KNOW

• Jason and Lucia are the two playable protagonists.

• Their relationship is central to the story.

• Both characters are deeply connected to Leonida's criminal world.

• Rockstar has revealed several supporting characters.

• The full cast has not yet been officially revealed.

• More character details may be revealed before launch.
`,
  },
    {
    slug: "gta-6-gameplay-guide",
    title: "GTA VI Gameplay Guide",
    date: "8 October 2026",
    updated: "8 October 2026",
    excerpt:
      "Everything officially revealed so far about GTA VI gameplay, exploration, combat, missions and life in Leonida.",
    image: "/guides/gta-6-gameplay.jpg",
    category: "Gameplay",
    readingTime: "8",
    sections: 9,
    content: `
OVERVIEW

Grand Theft Auto VI is built around an open-world experience set across the fictional state of Leonida.

Official trailers and gameplay footage have revealed a mixture of exploration, combat, driving, robberies, character interactions and everyday activities. Rockstar has also placed a much greater emphasis on making the world feel alive around the player.

EXPLORING LEONIDA

Leonida is designed to offer far more than the streets of Vice City.

Players can travel through urban neighbourhoods, beaches, wetlands, rural communities and other environments across the state.

The wider world is filled with pedestrians, wildlife, businesses, vehicles and activities that help make exploration an important part of the experience.

JASON AND LUCIA

Jason and Lucia are the two playable protagonists.

The game allows players to experience the world through both characters, with their relationship playing a major role in the story.

Official footage has shown the pair travelling together, carrying out criminal activities and interacting with the people around them.

COMBAT

Combat returns with a range of weapons and improved animations.

Official footage has shown shootouts, close-quarters encounters, vehicle pursuits and characters using the environment during dangerous situations.

Rockstar has not yet revealed the complete weapon or combat system, so some details remain unknown.

ROBBERIES AND CRIMINAL ACTIVITIES

Crime is at the centre of GTA VI's gameplay.

Jason and Lucia become involved in robberies and other criminal operations throughout Leonida. Official footage has shown the pair planning and carrying out crimes while attempting to escape from law enforcement.

The game appears to place greater emphasis on the relationship between preparation, action and the consequences of criminal activity.

A LIVING OPEN WORLD

One of the biggest gameplay improvements shown so far is the level of activity throughout Leonida.

Pedestrians react to events around them, businesses operate, wildlife occupies different environments and law enforcement responds to crimes.

This creates a world that continues to feel active even when the player is not following a main story mission.

ACTIVITIES OUTSIDE MISSIONS

GTA VI is not just about completing story missions.

Official footage has shown characters taking part in everyday activities and spending time away from major criminal operations.

Sports, nightlife, fishing, boating, swimming and other activities are among the experiences Rockstar has shown or teased through official material.

TRAVELLING AND THE ENVIRONMENT

The scale and variety of Leonida means travelling is an important part of gameplay.

Players can move between dense city streets, beaches, wetlands and rural areas while discovering different parts of the state.

The environment itself appears to play a larger role than in previous Grand Theft Auto games, with weather, wildlife and changing situations helping make the world feel dynamic.

WHAT HAS BEEN CONFIRMED?

• Jason and Lucia are the two playable protagonists.

• GTA VI takes place across the state of Leonida.

• Vice City returns as the main urban setting.

• Combat and gunplay have been shown in official footage.

• Robberies and criminal activities are central to the story.

• Players can explore a wide variety of environments.

• Rockstar has shown numerous activities outside traditional missions.

• The complete gameplay systems have not yet been fully revealed.

WHAT TO EXPECT

Rockstar has deliberately kept many gameplay details secret ahead of launch.

As more official footage and information becomes available, this guide will be updated with confirmed gameplay mechanics, activities and systems.

For now, GTA VI appears to combine the traditional freedom of Grand Theft Auto with a more detailed, reactive and immersive open world.
`,
  },
    {
    slug: "gta-6-wildlife-animals-guide",
    title: "GTA VI Wildlife & Animals Guide",
    date: "8 October 2026",
    updated: "8 October 2026",
    excerpt:
      "Explore the wildlife, pets and diverse ecosystems revealed across the world of Grand Theft Auto VI.",
    image: "/guides/gta-6-wildlife.jpg",
    category: "Wildlife",
    readingTime: "6",
    sections: 8,
    content: `
OVERVIEW

Leonida is home to a huge variety of environments, from the busy streets of Vice City to wetlands, beaches, forests and rural areas.

Animals are an important part of making these environments feel alive. Rockstar has shown wildlife and domestic animals throughout official GTA VI footage, adding another layer of detail to the open world.

WILDLIFE ACROSS LEONIDA

The different environments of Leonida support different types of wildlife.

Wetlands and rural regions provide natural habitats away from the heavily populated areas of Vice City, while coastal areas introduce another distinct ecosystem.

The variety of environments means players can expect wildlife to behave differently depending on where they explore.

WETLANDS AND SWAMPS

Leonida's wetlands are among the most distinctive environments revealed so far.

These areas feature waterways, vegetation and wildlife that would not normally be found in the centre of Vice City.

The wetlands also help demonstrate how far the world extends beyond the main city.

COASTAL WILDLIFE

Leonida's coastline provides another major ecosystem.

Beaches, islands and surrounding waters create opportunities for marine life and birds to appear naturally throughout the world.

The coastal environment is an important part of making Vice City and the wider state feel like a living location rather than a simple backdrop.

PETS AND DOMESTIC ANIMALS

Animals are not limited to wilderness areas.

Official footage has shown domestic animals and pets appearing around populated areas, helping make neighbourhoods and businesses feel more believable.

These smaller details contribute to the sense that Leonida continues to exist around the player.

ANIMALS AND IMMERSION

Wildlife plays an important role in environmental storytelling.

Animals can make quiet rural areas feel different from the crowded streets of Vice City, while also adding movement and unpredictability to the world.

Rockstar's attention to these details helps create the impression that Leonida is an ecosystem rather than simply a collection of missions and locations.

WHAT HAS BEEN REVEALED?

• Wildlife appears across Leonida.

• Wetlands contain their own natural ecosystem.

• Coastal areas feature marine and bird life.

• Domestic animals and pets appear in populated areas.

• Different environments contain different types of wildlife.

• Rockstar has shown animals in official GTA VI footage.

• The complete animal roster has not been officially revealed.

WHAT REMAINS UNKNOWN?

Rockstar has not published a complete list of every animal that will appear in GTA VI.

It is also unclear how many species will have unique behaviours or interactions with the player.

More information may be revealed before launch, while some wildlife may only be discovered naturally after the game releases.

WHY WILDLIFE MATTERS

The wildlife of Leonida is more than visual decoration.

Animals help distinguish the state's different environments and make exploration feel less predictable. Combined with pedestrians, vehicles, weather and other environmental details, they contribute to Rockstar's goal of creating a more reactive open world.

As more official information becomes available, GTA Vault will update this guide with confirmed species and new details.
`,
  },
    {
    slug: "gta-6-weapons-guide",
    title: "GTA VI Weapons Guide",
    date: "8 October 2026",
    updated: "8 October 2026",
    excerpt:
      "Everything officially revealed so far about weapons, combat and law enforcement in Grand Theft Auto VI.",
    image: "/guides/gta-6-weapons.jpg",
    category: "Weapons",
    readingTime: "7",
    sections: 8,
    content: `
OVERVIEW

Weapons are a major part of the Grand Theft Auto experience, and GTA VI looks set to build on the combat systems seen in previous games.

Official trailers and gameplay footage have already shown a variety of firearms and close-quarters encounters, although Rockstar has not yet revealed the complete weapon roster.

PISTOLS AND HANDGUNS

Handguns have appeared throughout official GTA VI footage.

They are likely to remain useful for everyday encounters, vehicle pursuits and situations where carrying a larger weapon would not be practical.

The full selection of pistols available at launch has not yet been confirmed.

RIFLES AND LARGER FIREARMS

Official footage has also shown characters using larger firearms during criminal operations and confrontations.

These weapons appear to play an important role during robberies, shootouts and encounters with law enforcement.

Rockstar has yet to publish a complete list of assault rifles, carbines or other long guns.

CLOSE-QUARTERS COMBAT

Not every confrontation in GTA VI involves firearms.

Official footage has shown physical fights and close-range encounters, suggesting that hand-to-hand combat will continue to be an important part of gameplay.

Improved character animations and movement should make these encounters feel more dynamic than in previous games.

WEAPONS AND ROBBERIES

Criminal activities are central to GTA VI's story, meaning weapons are closely connected to the game's robberies and other operations.

Jason and Lucia have been shown using firearms during dangerous situations, while their criminal activities can attract the attention of law enforcement.

The exact planning and weapon-selection systems for robberies have not yet been fully revealed.

LAW ENFORCEMENT

Weapons also play an important role when dealing with police.

Official footage has shown armed confrontations and police responses to criminal activity across Leonida.

The game's law-enforcement systems appear to be more reactive and detailed, although Rockstar has not yet explained every change to the wanted system.

WEAPON HANDLING AND CUSTOMISATION

GTA VI appears to place greater emphasis on realistic character movement and weapon handling.

However, Rockstar has not yet confirmed the full extent of weapon customisation.

It remains unclear exactly which weapons can be modified, how many attachments will be available and how deeply players will be able to customise their loadouts.

WHAT HAS BEEN CONFIRMED?

• Multiple firearms have appeared in official GTA VI footage.

• Pistols and larger firearms are confirmed.

• Close-quarters combat is part of the game.

• Weapons are used during criminal activities and robberies.

• Armed law-enforcement encounters have been shown.

• The complete weapon roster has not been officially revealed.

• The full weapon customisation system remains unconfirmed.

WHAT REMAINS UNKNOWN?

Rockstar has not published a complete official weapons list.

The total number of weapons, available attachments, customisation options and any new weapon mechanics remain unknown.

As Rockstar reveals more information, GTA Vault will update this guide with confirmed weapons and gameplay details.
`,
  },
];
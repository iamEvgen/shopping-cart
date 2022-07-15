const initPosters = [
  {
    id: 0,
    name: 'Cyberpunk 2077',
    description:
      'Cyberpunk 2077 is an open-world, action-adventure RPG set in the megalopolis of Night City, where you play as a cyberpunk mercenary wrapped up in a do-or-die fight for survival. Improved and featuring all-new free additional content, customize your character and playstyle as you take on jobs, build a reputation, and unlock upgrades. The relationships you forge and the choices you make will shape the story and the world around you. Legends are made here. What will yours be?',
    url: 'posters/cyberpunk.jpg',
    price: '19,99',
    inCart: false,
    quantity: 0,
  },
  {
    id: 1,
    name: 'Witcher 3',
    description:
      "The game takes place in a fictional fantasy world based on Slavic mythology. Players control Geralt of Rivia, a monster slayer for hire known as a Witcher, and search for his adopted daughter, who is on the run from the otherworldly Wild Hunt. Players battle the game's many dangers with weapons and magic, interact with non-player characters, and complete quests to acquire experience points and gold, which are used to increase Geralt's abilities and purchase equipment. The game's story has three possible endings, determined by the player's choices at key points in the narrative.",
    url: 'posters/witcher.jpg',
    price: '24,99',
    inCart: false,
    quantity: 0,
  },
  {
    id: 2,
    name: 'Red Dead Redemption 2',
    description:
      "Red Dead Redemption 2[a] is a 2018 action-adventure game developed and published by Rockstar Games. The game is the third entry in the Red Dead series and a prequel to the 2010 game Red Dead Redemption. The story is set in 1899 and follows the exploits of outlaw Arthur Morgan, a member of the Van der Linde gang, in a fictionalized representation of the Western, Midwestern, and Southern United States. Arthur must deal with the decline of the Wild West whilst attempting to survive against government forces, rival gangs, and other adversaries. The game's epilogue follows fellow gang member John Marston, the protagonist of Red Dead Redemption.",
    url: 'posters/rdr.jpg',
    price: '19,99',
    inCart: false,
    quantity: 0,
  },
  {
    id: 3,
    name: 'The Last of Us',
    description:
      'The Last of Us is a 2013 action-adventure game developed by Naughty Dog and published by Sony Computer Entertainment. Players control Joel, a smuggler tasked with escorting a teenage girl, Ellie, across a post-apocalyptic United States. The Last of Us is played from a third-person perspective. Players use firearms and improvised weapons, and can use stealth to defend against hostile humans and cannibalistic creatures infected by a mutated fungus in the genus Cordyceps. In the online multiplayer mode, up to eight players engage in cooperative and competitive gameplay.',
    url: 'posters/lastOfUs.jpg',
    price: '19,99',
    inCart: false,
    quantity: 0,
  },
  {
    id: 4,
    name: 'Fallout',
    url: 'posters/fallout.jpg',
    description:
      "Fallout: A Post Nuclear Role Playing Game is a role-playing video game developed and published by Interplay Productions. In a mid-22nd century post-apocalyptic and retro-futuristic world, decades after a global nuclear war, Fallout's protagonist, the Vault Dweller, inhabits an underground nuclear shelter called Vault 13. After customizing their character, the player must scour the surrounding wasteland for a computer chip that can fix the Vault's failed water supply system. Gameplay revolves around exploring the wasteland and interacting with other survivors, some of whom give the player missions. The game's combat is turn-based; the player can perform actions on each turn until their action points are depleted.",
    price: '19,99',
    inCart: false,
    quantity: 0,
  },
  {
    id: 5,
    name: 'Metro 2033',
    description:
      "Metro 2033 is a 2010 first-person shooter video game developed by 4A Games and published by THQ. The story is based on Dmitry Glukhovsky's novel of the same name, where survivors of a nuclear war have taken refuge in the Metro tunnels of Moscow. Players control Artyom, a man who must save his home station from the dangers lurking within the Metro. In the game, players encounter human and mutant enemies, who can be killed with a variety of firearms. Players must also wear a gas mask to explore areas covered in fallout radiation, both underground and on the surface.",
    url: 'posters/metro.jpg',
    price: '14,99',
    inCart: false,
    quantity: 0,
  },
  {
    id: 6,
    name: 'GTA 5',
    description:
      "Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the seventh main entry in the Grand Theft Auto series, following 2008's Grand Theft Auto IV, and the fifteenth instalment overall. Set within the fictional state of San Andreas, based on Southern California, the single-player story follows three protagonists—retired bank robber Michael De Santa, street gangster Franklin Clinton, and drug dealer and gunrunner Trevor Philips—and their attempts to commit heists while under pressure from a corrupt government agency and powerful criminals. The open world design lets players freely roam San Andreas' open countryside and the fictional city of Los Santos, based on Los Angeles.",
    url: 'posters/gta.jpg',
    price: '24,99',
    inCart: false,
    quantity: 0,
  },
  {
    id: 7,
    name: 'God of War',
    description:
      "God of War[b] is an action-adventure game developed by Santa Monica Studio and published by Sony Interactive Entertainment (SIE). It was released in April 2018 for the PlayStation 4, with a Microsoft Windows version released in January 2022. The game is the eighth installment in the God of War series, the eighth chronologically, and the sequel to 2010's God of War III.",
    url: 'posters/godOfWar.jpg',
    price: '14,99',
    inCart: false,
    quantity: 0,
  },
  {
    id: 8,
    name: 'Divinity 2: Original Sin',
    description:
      "Divinity: Original Sin II is a role-playing video game developed and published by Larian Studios. The sequel to 2014's Divinity: Original Sin, it was released for Microsoft Windows in September 2017, for PlayStation 4 and Xbox One in August 2018, for macOS in January 2019, Nintendo Switch in September 2019, and iPadOS in May 2021. The game was a critical and commercial success, with it selling over a million copies in two months and being cited as one of the best role-playing games of all time, with praise given to its combat complexity and interactivity.",
    url: 'posters/divinity.jpg',
    price: '14,99',
    inCart: false,
    quantity: 0,
  },
  {
    id: 9,
    name: 'Diablo 3',
    description:
      'Diablo III is a hack-and-slash action role-playing game developed and published by Blizzard Entertainment as the third installment in the Diablo franchise. It was released for Microsoft Windows and OS X in May 2012, PlayStation 3 and Xbox 360 in September 2013, PlayStation 4 and Xbox One in August 2014, and Nintendo Switch in November 2018. Set 20 years after the events of Diablo II, players choose to play as one of seven character classes – Barbarian, Crusader, Demon Hunter, Monk, Necromancer, Witch Doctor, or Wizard – and are tasked with defeating the Lord of Terror, Diablo, as in previous games in the series.',
    url: 'posters/diablo.jpg',
    price: '19,99',
    inCart: false,
    quantity: 0,
  },
];

export default initPosters;

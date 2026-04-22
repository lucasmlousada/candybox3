// CANDY BOX 3 - Fixed: New Game Reset, Stable Layout, Structured Log

const MONSTERS = [
    { id: 1, name: 'Sugar Goblin', hp: 15, attack: 2, reward: 10, tier: 1, emoji: '👹', ascii: '  \\O_\n   |\n  / \\' },
    { id: 2, name: 'Caramel Slime', hp: 12, attack: 2, reward: 8, tier: 1, emoji: '💧', ascii: '  ~°~\n  (~)~\n   ~' },
    { id: 3, name: 'Chocolate Bat', hp: 16, attack: 3, reward: 12, tier: 1, emoji: '🦇', ascii: '  \\||\n   ||\n  /||\\' },
    { id: 19, name: 'Mint Drop', hp: 14, attack: 2, reward: 9, tier: 1, emoji: '🟢', ascii: '  (o)\n  /d\n   l' },
    { id: 20, name: 'Candy Ant', hp: 13, attack: 2, reward: 8, tier: 1, emoji: '🐜', ascii: '  /W\\\n ( )\n  U' },
    { id: 4, name: 'Lollipop Knight', hp: 30, attack: 4, reward: 25, tier: 2, emoji: '⚔️', ascii: '  |O|\n  /||\\\n  / \\' },
    { id: 5, name: 'Neural Nougat', hp: 35, attack: 4, reward: 30, tier: 2, emoji: '🧠', ascii: '  [==]\n [====]\n [==]' },
    { id: 6, name: 'Candy Crab', hp: 32, attack: 5, reward: 28, tier: 2, emoji: '🦀', ascii: '  <(o)>\n  <(0)>\n   / \\' },
    { id: 21, name: 'Taffy Troll', hp: 38, attack: 5, reward: 32, tier: 2, emoji: '👺', ascii: '  /^V^\\\n  MMEM\n  |||||' },
    { id: 22, name: 'Gumball Goblin', hp: 33, attack: 4, reward: 27, tier: 2, emoji: '👹', ascii: '  <O_O>\n  (ooo)\n   ^^^' },
    { id: 23, name: 'Lemon Imp', hp: 28, attack: 6, reward: 24, tier: 2, emoji: '🍋', ascii: '  (^_^)\n  /| |\\\n   | |' },
    { id: 24, name: 'Butterscotch Beast', hp: 40, attack: 5, reward: 35, tier: 2, emoji: '🐻', ascii: '  |**|\n |***|\n |*_*|' },
    { id: 7, name: 'Meme Wraith', hp: 45, attack: 6, reward: 50, tier: 3, emoji: '👻', ascii: '  ****\n *    *\n ****' },
    { id: 8, name: 'Gummy Guardian', hp: 50, attack: 7, reward: 55, tier: 3, emoji: '🛡️', ascii: '  |==|\n |==|\n |==|' },
    { id: 9, name: 'Fudge Fiend', hp: 48, attack: 7, reward: 52, tier: 3, emoji: '😈', ascii: '  [#_#]\n (#_#)\n [# #]' },
    { id: 25, name: 'Rock Candy Roller', hp: 55, attack: 6, reward: 58, tier: 3, emoji: '🪨', ascii: '  OOOO\n OOOO\n OOOO' },
    { id: 26, name: 'Jelly Jester', hp: 42, attack: 8, reward: 48, tier: 3, emoji: '🤡', ascii: '  \\(^_^)/\n  |    |\n  /    \\' },
    { id: 27, name: 'Marshmallow Mimic', hp: 46, attack: 7, reward: 51, tier: 3, emoji: '⚪', ascii: '  (OoO)\n <(ooo)>\n  (OoO)' },
    { id: 28, name: 'Sugar Spider', hp: 49, attack: 8, reward: 54, tier: 3, emoji: '🕷️', ascii: '  /\\ /\\ /\\\n  XX-XX-XX\n  \\/ \\/ \\/' },
    { id: 10, name: 'Cotton Candy Centaur', hp: 70, attack: 8, reward: 85, tier: 4, emoji: '🌸', ascii: '  |O_O|\n /|   |\\\n / |   |' },
    { id: 11, name: 'Lemon Drop Drake', hp: 75, attack: 8, reward: 90, tier: 4, emoji: '🐉', ascii: '  ~~^~~\n ~(o_o)~\n ~~~~~~~' },
    { id: 12, name: 'Sugar Siren', hp: 72, attack: 9, reward: 87, tier: 4, emoji: '🧜', ascii: '  /^^\\\n / OO \\\n |    |' },
    { id: 29, name: 'Caramel Cyclops', hp: 78, attack: 9, reward: 92, tier: 4, emoji: '👁️', ascii: '  [ O ]\n  |   |\n  |___|' },
    { id: 30, name: 'Peppermint Phantom', hp: 74, attack: 10, reward: 88, tier: 4, emoji: '🌀', ascii: '  (~O~)\n  (#_#)\n  (~_~)' },
    { id: 31, name: 'Candy Colossus', hp: 85, attack: 8, reward: 95, tier: 4, emoji: '🤖', ascii: '  [===]\n [===]\n [===]' },
    { id: 32, name: 'Honeycomb Hornet', hp: 68, attack: 11, reward: 82, tier: 4, emoji: '🐝', ascii: '  (o~o)\n  /\\W/\\\n   | |' },
    { id: 13, name: 'Licorice Lich', hp: 95, attack: 10, reward: 130, tier: 5, emoji: '☠️', ascii: '  [!!]\n  !!!\n [!!]' },
    { id: 14, name: 'Candy Kraken', hp: 105, attack: 11, reward: 145, tier: 5, emoji: '🐙', ascii: '  ~^^^^~\n  ^^^^^^\n ~^^^^^^~' },
    { id: 15, name: 'GPT-3.5 Ghost', hp: 100, attack: 10, reward: 140, tier: 5, emoji: '👾', ascii: '  (~)~\n  (~)~\n  (~)~' },
    { id: 33, name: 'Toffee Titan', hp: 110, attack: 11, reward: 150, tier: 5, emoji: '🗿', ascii: '  |+++|\n |+++|\n |+++|' },
    { id: 34, name: 'Candy Chimera', hp: 98, attack: 12, reward: 135, tier: 5, emoji: '🦁', ascii: '  /VVV\\\n (ooo)\n  |||' },
    { id: 35, name: 'Fondant Phoenix', hp: 102, attack: 10, reward: 142, tier: 5, emoji: '🔥', ascii: '  /\\ /\\\n (oo)\n  \\\\/' },
    { id: 36, name: 'Nougat Nemesis', hp: 108, attack: 13, reward: 148, tier: 5, emoji: '⚡', ascii: '  [***]\n [***]\n [***]' },
    { id: 16, name: 'Sentient Sweetness', hp: 140, attack: 12, reward: 200, tier: 6, emoji: '✨', ascii: '  (@@@)\n (@@@)\n (@@@)' },
    { id: 17, name: 'Caramel Colossus', hp: 150, attack: 13, reward: 220, tier: 6, emoji: '💪', ascii: '  |===|\n |===|\n |===|' },
    { id: 18, name: 'The Candy King', hp: 160, attack: 14, reward: 250, tier: 6, emoji: '👑', ascii: '  /^^^|\n |   |\n |___|' },
    { id: 37, name: 'Licorice Leviathan', hp: 165, attack: 15, reward: 260, tier: 6, emoji: '🌊', ascii: '  [###]\n [###]\n [###]' },
    { id: 38, name: 'Sugar Sultan', hp: 155, attack: 14, reward: 240, tier: 6, emoji: '🧞', ascii: '  /\\**/\\\n  ****\n  ****' },
    { id: 39, name: 'The Lollipop Lord', hp: 170, attack: 16, reward: 280, tier: 6, emoji: '⭐', ascii: '  |*_*|\n |***|\n |***|' },
    { id: 40, name: 'Candy Constellation', hp: 180, attack: 15, reward: 300, tier: 6, emoji: '💫', ascii: '  ***\n ****\n *****' },
    { id: 41, name: 'Syrup Serpent', hp: 188, attack: 16, reward: 315, tier: 7, emoji: '🐍', ascii: '  /^\\/^\n / oo \\\n \\_==_/' },
    { id: 42, name: 'Bubblegum Berserker', hp: 195, attack: 17, reward: 325, tier: 7, emoji: '😡', ascii: '  \\@@/\n /(())\\\n  /  \\' },
    { id: 43, name: 'Praline Parasite', hp: 190, attack: 18, reward: 320, tier: 7, emoji: '🪲', ascii: '  /MM\\\n (oooo)\n  \\/\\/' },
    { id: 44, name: 'Nougat Nautilus', hp: 205, attack: 16, reward: 330, tier: 7, emoji: '🐚', ascii: '  @@@@\n @@()@@\n  @@@' },
    { id: 45, name: 'Candy Cannoneer', hp: 210, attack: 17, reward: 340, tier: 7, emoji: '💣', ascii: ' [====]\n  ||||\n  /  \\' },
    { id: 46, name: 'Wafer Warlock', hp: 198, attack: 19, reward: 335, tier: 7, emoji: '🧙', ascii: '  /##\\\n  |<>|\n  /  \\' },
    { id: 47, name: 'Jelly Juggernaut', hp: 220, attack: 16, reward: 350, tier: 7, emoji: '🟣', ascii: ' (####)\n |####|\n |____|' },
    { id: 48, name: 'Marzipan Marauder', hp: 214, attack: 18, reward: 345, tier: 7, emoji: '🏴', ascii: '  /VV\\\n (====)\n  /  \\' },
    { id: 49, name: 'Peppermint Paladin', hp: 228, attack: 18, reward: 365, tier: 8, emoji: '🛡️', ascii: '  [##]\n /||||\\\n  /  \\' },
    { id: 50, name: 'Rock Candy Rhino', hp: 235, attack: 19, reward: 380, tier: 8, emoji: '🦏', ascii: '  /^^\\\n (____)\n  /  \\' },
    { id: 51, name: 'Frosting Fury', hp: 230, attack: 20, reward: 375, tier: 8, emoji: '❄️', ascii: '  *==*\n *====*\n  *==*' },
    { id: 52, name: 'Buttermint Basilisk', hp: 242, attack: 19, reward: 390, tier: 8, emoji: '🦎', ascii: '  /==\\\\\n ( o  )\n  \\==/' },
    { id: 53, name: 'Truffle Tempest', hp: 238, attack: 21, reward: 385, tier: 8, emoji: '🌪️', ascii: '  ////\n (====)\n  \\\\//' },
    { id: 54, name: 'Cupcake Crusader', hp: 246, attack: 20, reward: 400, tier: 8, emoji: '🧁', ascii: '  {##}\n [====]\n  /  \\' },
    { id: 55, name: 'Molasses Minotaur', hp: 255, attack: 20, reward: 410, tier: 8, emoji: '🐂', ascii: '  /MM\\\n (||||)\n  /  \\' },
    { id: 56, name: 'Toffee Templar', hp: 250, attack: 22, reward: 405, tier: 8, emoji: '✝️', ascii: '  [##]\n /_||_\\\n  /  \\' },
    { id: 57, name: 'Celestial Candyfin', hp: 265, attack: 22, reward: 430, tier: 9, emoji: '🐟', ascii: '  /\\~~\n < oo>\n  \\/__' },
    { id: 58, name: 'Obsidian Oreo', hp: 272, attack: 23, reward: 440, tier: 9, emoji: '⚫', ascii: '  @@@@\n @ __ @\n  @@@@' },
    { id: 59, name: 'Star Syrup Djinn', hp: 268, attack: 24, reward: 435, tier: 9, emoji: '🧞', ascii: '  /\\**/\\\n ( **** )\n   ||||' },
    { id: 60, name: 'Glazed Gargoyle', hp: 280, attack: 22, reward: 450, tier: 9, emoji: '🗿', ascii: '  [@@]\n <||||>\n  /  \\' },
    { id: 61, name: 'Candied Chimney', hp: 276, attack: 25, reward: 445, tier: 9, emoji: '🏭', ascii: '  ||||\n [====]\n [====]' },
    { id: 62, name: 'Mallow Meteor', hp: 285, attack: 24, reward: 460, tier: 9, emoji: '☄️', ascii: "  .--.\n (====)\n  '--" },
    { id: 63, name: 'Cosmic Cracker', hp: 290, attack: 23, reward: 470, tier: 9, emoji: '🌌', ascii: '  [**]\n [****]\n  [**]' },
    { id: 64, name: 'Sour Starreaver', hp: 282, attack: 26, reward: 465, tier: 9, emoji: '⭐', ascii: '  \\**/\n <====>\n  /  \\' },
    { id: 65, name: 'Lollipop Leviathan', hp: 305, attack: 26, reward: 500, tier: 10, emoji: '🐋', ascii: '  /VVV\\\n (=====)\n  \\___/' },
    { id: 66, name: 'Nebula Nougat', hp: 298, attack: 27, reward: 490, tier: 10, emoji: '🌠', ascii: '  .::.\n (::==::)\n  \'::\'' },
    { id: 67, name: 'Caramel Cataclysm', hp: 315, attack: 25, reward: 515, tier: 10, emoji: '🌋', ascii: '  /~~\\\n (====)\n /____\\' },
    { id: 68, name: 'Fudge Overmind', hp: 308, attack: 28, reward: 505, tier: 10, emoji: '🧠', ascii: '  [####]\n [######]\n  [####]' },
    { id: 69, name: 'Taffy Tyrant', hp: 320, attack: 27, reward: 520, tier: 10, emoji: '👑', ascii: '  /^^\\\n [====]\n  ||||' },
    { id: 70, name: 'Prism Puff Dragon', hp: 325, attack: 28, reward: 530, tier: 10, emoji: '🐲', ascii: '  /\\__/\\\\\n ( o  o )\n  \\_==_/' },
    { id: 71, name: 'Chocolate Comet King', hp: 332, attack: 29, reward: 540, tier: 10, emoji: '☄️', ascii: '  .--.\n (====)\n /_||_\\' },
    { id: 72, name: 'Licorice Eclipse', hp: 340, attack: 27, reward: 550, tier: 10, emoji: '🌑', ascii: '  @@@@@\n @@   @@\n  @@@@@' },
    { id: 73, name: 'Gummy Galaxy Hydra', hp: 348, attack: 30, reward: 565, tier: 10, emoji: '🐉', ascii: '  /V\\/V\\\n ( oooo )\n  ||||||' },
    { id: 74, name: 'Astral Affogato', hp: 336, attack: 31, reward: 555, tier: 10, emoji: '☕', ascii: '  {==}\n [====]\n  ||||' },
    { id: 75, name: 'Candybox Revenant', hp: 355, attack: 29, reward: 575, tier: 10, emoji: '👻', ascii: '  .--.\n ( oo )\n (____)' },
    { id: 76, name: 'Sweet Singularity', hp: 362, attack: 31, reward: 590, tier: 10, emoji: '🌀', ascii: '  .**.\n **==**\n  \'**\'' },
    { id: 77, name: 'Omega Marsh Warden', hp: 370, attack: 30, reward: 600, tier: 10, emoji: '🛡️', ascii: ' [====]\n<======>\n  /  \\' },
    { id: 78, name: 'Void Bonbon', hp: 366, attack: 32, reward: 595, tier: 10, emoji: '⚫', ascii: '  (####)\n <######>\n  (####)' },
    { id: 79, name: 'Candy Crown Devourer', hp: 378, attack: 33, reward: 615, tier: 10, emoji: '👑', ascii: '  /\\**/\\\n [======]\n  \\____/' },
    { id: 80, name: 'The Final Sweet', hp: 390, attack: 34, reward: 640, tier: 10, emoji: '✨', ascii: '  <****>\n <******>\n  <****>' }
];

const WEAPON_DEFS = [
    { id: 'toffeeTwig', name: 'Toffee Twig', candyCost: 75, attackBonus: 3, attackBonusPerUpgrade: 2, candyDropBonus: 0.08, candyDropBonusPerUpgrade: 0.04, description: 'A crude branch that shakes extra candy loose.', requires: { eaten: 25 } },
    { id: 'caramelSaber', name: 'Caramel Saber', candyCost: 350, attackBonus: 8, attackBonusPerUpgrade: 3, critChance: 0.1, critChancePerUpgrade: 0.04, critMultiplier: 2, description: 'Sticky edge, clean finish, sharper with every polish.', requires: { tier: 2 } },
    { id: 'pixelPike', name: 'Pixel Pike', candyCost: 1200, attackBonus: 14, attackBonusPerUpgrade: 4, openerBonus: 6, openerBonusPerUpgrade: 3, description: 'Retro reach weapon with a vicious first thrust.', requires: { tier: 3 } },
    { id: 'voidLadle', name: 'Void Ladle', candyCost: 2800, chocolateCost: 3, attackBonus: 21, attackBonusPerUpgrade: 5, skillDamageBonus: 0.2, skillDamageBonusPerUpgrade: 0.08, description: 'Cursed cutlery that fattens spell damage.', requires: { forest: true } },
    { id: 'omegaFork', name: 'Omega Fork', candyCost: 6500, chocolateCost: 8, attackBonus: 30, attackBonusPerUpgrade: 6, echoChance: 0.25, echoChancePerUpgrade: 0.05, echoFactor: 0.5, echoFactorPerUpgrade: 0.1, description: 'Space-lich silverware that repeats impossible blows.', requires: { colosseum: true } }
];

const ARMOR_DEFS = [
    { id: 'wrapperVest', name: 'Wrapper Vest', candyCost: 120, hpBonus: 30, hpBonusPerUpgrade: 20, damageReduction: 1, damageReductionPerUpgrade: 1, description: 'Foil and paper that somehow harden into defense.', requires: { eaten: 50 } },
    { id: 'marshmallowMail', name: 'Marshmallow Mail', candyCost: 600, hpBonus: 85, hpBonusPerUpgrade: 25, regenBonus: 0.4, regenBonusPerUpgrade: 0.25, description: 'Soft outside, stubborn inside, fast to recover in.', requires: { tier: 2 } },
    { id: 'licoricePlate', name: 'Licorice Plate', candyCost: 1800, hpBonus: 150, hpBonusPerUpgrade: 40, candyDropBonus: 0.1, candyDropBonusPerUpgrade: 0.05, description: 'Heavy black slabs that make monsters spill more candy.', requires: { tier: 4 } },
    { id: 'astralTaffyCloak', name: 'Astral Taffy Cloak', candyCost: 4200, chocolateCost: 5, hpBonus: 240, hpBonusPerUpgrade: 60, skillDamageBonus: 0.15, skillDamageBonusPerUpgrade: 0.08, description: 'A drifting veil that deepens every combat art.', requires: { forest: true } },
    { id: 'candyShellOmega', name: 'Candy Shell Ω', candyCost: 9000, chocolateCost: 12, hpBonus: 360, hpBonusPerUpgrade: 80, healOnKill: 0.05, healOnKillPerUpgrade: 0.03, description: 'Arena plating that restores you after each kill.', requires: { colosseum: true } }
];

const SKILL_DEFS = [
    { id: 'sugarRush', name: 'Sugar Rush', candyCost: 250, description: 'Passive: +15% attack above 70% HP.', requires: { eaten: 150 } },
    { id: 'parryField', name: 'Parry Field', candyCost: 700, description: 'Passive: 20% chance to halve incoming hits.', requires: { tier: 3 } },
    { id: 'stasisHex', name: 'Stasis Hex', candyCost: 900, active: true, useCost: 130, description: 'Active: freeze the next enemy attack.', requires: { spells: true } },
    { id: 'astralEcho', name: 'Astral Echo', candyCost: 1500, chocolateCost: 2, description: 'Passive: first hit each fight deals +75% damage.', requires: { forest: true } },
    { id: 'novaPulse', name: 'Nova Pulse', candyCost: 2800, chocolateCost: 3, active: true, useCost: 260, description: 'Active: unleash a max-HP-scaled blast.', requires: { spells: true, tier: 5 } },
    { id: 'secondWind', name: 'Second Wind', candyCost: 5000, chocolateCost: 6, description: 'Passive: survive one lethal hit per fight.', requires: { colosseum: true } }
];

const VILLAGERS = [
    { id: 'elderMint', name: 'Elder Mint', emoji: '🧓', house: 'Town Hall' },
    { id: 'smithPop', name: 'Smith Pop', emoji: '🧑‍🏭', house: 'Forge' },
    { id: 'scoutGum', name: 'Scout Gum', emoji: '🧑‍🌾', house: 'Lookout' },
    { id: 'sageFizz', name: 'Sage Fizz', emoji: '🧙', house: 'Library' }
];

const ARTIFACT_DEFS = [
    { id: 'factoryCog', name: 'Factory Cog', emoji: '⚙️', page: 'main', top: '10%', left: '14%', description: '+10.5 candy/sec', bonus: { candyRate: 10.5 } },
    { id: 'sugarLens', name: 'Sugar Lens', emoji: '🔍', page: 'main', top: '68%', left: '82%', description: '+20 attack', bonus: { attack: 20 } },
    { id: 'mapPin', name: 'Map Pin', emoji: '📍', page: 'map', top: '22%', left: '77%', description: '+200 max HP', bonus: { maxHp: 20 } },
    { id: 'blankStamp', name: 'Blank Stamp', emoji: '🪪', page: 'map', top: '74%', left: '11%', description: '+1.2 regen', bonus: { regen: 1.2 } },
    { id: 'cocoaSeed', name: 'Cocoa Seed', emoji: '🌰', page: 'forest', top: '29%', left: '17%', description: '+5 chocolate/hour', bonus: { chocolateRate: 5 } },
    { id: 'sapCharm', name: 'Sap Charm', emoji: '🧿', page: 'forest', top: '58%', left: '71%', description: '+20% candy from monsters', bonus: { candyDrop: 0.20 } },
    { id: 'mayorSeal', name: 'Mayor Seal', emoji: '📜', page: 'village-townhall', top: '18%', left: '59%', description: '+0.05 lollipops/sec', bonus: { lollipopRate: 0.05 } },
    { id: 'questBell', name: 'Quest Bell', emoji: '🔔', page: 'village-townhall', top: '66%', left: '23%', description: '+150 max HP', bonus: { maxHp: 150 } },
    { id: 'forgeSpark', name: 'Forge Spark', emoji: '✨', page: 'village-forge', top: '24%', left: '28%', description: '+30 attack', bonus: { attack: 30 } },
    { id: 'anvilRune', name: 'Anvil Rune', emoji: '🪓', page: 'village-forge', top: '60%', left: '76%', description: '+10% skill damage', bonus: { skillDamage: 0.10 } },
    { id: 'marketToken', name: 'Market Token', emoji: '🪙', page: 'village-market', top: '19%', left: '64%', description: '+0.8 regen', bonus: { regen: 0.8 } },
    { id: 'satinPatch', name: 'Satin Patch', emoji: '🧵', page: 'village-market', top: '71%', left: '38%', description: '-5 damage taken', bonus: { damageReduction: 5 } },
    { id: 'libraryDust', name: 'Library Dust', emoji: '📚', page: 'village-library', top: '25%', left: '71%', description: '+6% skill damage', bonus: { skillDamage: 0.06 } },
    { id: 'inkDrop', name: 'Ink Drop', emoji: '🖋️', page: 'village-library', top: '70%', left: '19%', description: '+5.3 candy/sec', bonus: { candyRate: 5.3 } },
    { id: 'spyglassShard', name: 'Spyglass Shard', emoji: '🔭', page: 'village-lookout', top: '17%', left: '52%', description: '+15% candy from monsters', bonus: { candyDrop: 0.15 } },
    { id: 'windPennant', name: 'Wind Pennant', emoji: '🎏', page: 'village-lookout', top: '73%', left: '82%', description: '+0.05 lollipops/sec', bonus: { lollipopRate: 0.05 } },
    { id: 'villagePebble', name: 'Village Pebble', emoji: '🪨', page: 'village-square', top: '83%', left: '51%', description: '+100 max HP', bonus: { maxHp: 100 } },
    { id: 'hiddenRibbon', name: 'Hidden Ribbon', emoji: '🎀', page: 'village-square', top: '34%', left: '8%', description: '+1.1 regen', bonus: { regen: 1.1 } },
    { id: 'arenaEye', name: 'Arena Eye', emoji: '👁️', page: 'colosseum', top: '22%', left: '49%', description: '+10 attack', bonus: { attack: 10 } },
    { id: 'glassRelic', name: 'Glass Relic', emoji: '🏺', page: 'colosseum', top: '86%', left: '9%', description: '+1.5 chocolate/hour', bonus: { chocolateRate: 1.5 } }
];

function getCandyCostPerHp(maxHp) {
    const cost = Math.floor(8 + (maxHp * 0.18) + (Math.pow(maxHp, 1.2) / 25));

    console.log("[getCandyCostPerHp] maxHp:", maxHp, "-> cost:", cost);
    return cost;
}

function getUpgradeCost(key, level) {
    const baseCosts = { candy: 10, attack: 15, regen: 20 };
    const base = baseCosts[key] || 10;
    return Math.floor(base * Math.pow(1.65, level) * (1 + level * 0.45));
}

function getDefaultGameState() {
    return {
        candies: 0,
        candyRate: 1,
        hp: 10,
        maxHp: 10,
        regenRate: 0.5,
        attack: 5,
        inCombat: false,
        enemy: null,
        unlockedMonsters: [],
        maxUnlockedTier: 1,
        totalCandiesEaten: 0,
        upgradesPurchased: { 'candy': 0, 'regen': 0, 'attack': 0 },
        spellsUnlocked: false,
        ownedWeapons: [],
        equippedWeapon: null,
        ownedArmors: [],
        equippedArmor: null,
        equipmentUpgrades: {},
        learnedSkills: [],
        lollipops: 0,
        sweetVillageUnlocked: false,
        villagePlace: 'square',
        activeVillageQuest: null,
        artifactsFound: {},
        museumUnlocked: false,
        combatFlags: {
            openerUsed: false,
            astralEchoReady: false,
            enemyStaggered: false,
            secondWindUsed: false
        },
        // Chocolate Forest system
        view: "main", // "main" | "map" | "forest"
        chocolate: 0,
        chocolateRate: 0,
        chocolateTrees: 0,
        chocolateTreePositions: [], // state-driven tree positions
        forestUnlocked: false,
        // Candy Colosseum system
        colosseumUnlocked: false,
        inColosseum: false,
        colosseumSpeed: 1,
        colosseumUnlockedSpeeds: [1],
        colosseumSurvivalTime: 0,
        // Colosseum run control
        colosseumRunning: false,
        colosseumCurrentTime: 0,
        colosseumBestTime: 0,
        colosseumTimeBySpeed: { 1: 0 },
        // Colosseum buffs
        colosseumBuffs: {},
        pendingBuffChoice: null,  // Array of 3 choices when milestone reached
        colosseumSessionPaid: false,  // Whether chocolate was paid for current session
        laboratoryUnlocked: false,
        darkModeEnabled: false,
        timeWarpEnabled: false,
        timeWarpUnlocked: false,
        darkModeCandies: 0,
        villagerQuestCounts: {}
    };
}

// Colosseum buff milestones
const COLOSSEUM_BUFFS = [
    { time: 10, id: "candyBoost", label: "Sugar Rush", effect: "candyRate" },
    { time: 20, id: "attackBoost", label: "Fury", effect: "attack" },
    { time: 30, id: "regenBoost", label: "Regeneration", effect: "regenRate" },
    { time: 45, id: "hpBoost", label: "Fortitude", effect: "maxHp" },
    { time: 60, id: "megaBoost", label: "Candy Overload", effect: "all" }
];

let DARK_ENERGY_REQUIRED = 1000000;

// Available buff pool for choices
const BUFF_POOL = [
    { id: "candyBoost", label: "Sugar Rush", effect: "candyRate" },
    { id: "attackBoost", label: "Fury", effect: "attack" },
    { id: "regenBoost", label: "Regeneration", effect: "regenRate" },
    { id: "hpBoost", label: "Fortitude", effect: "maxHp" }
];

// Secret buffs with unlock conditions
const SECRET_BUFFS = [
    {
        id: "immortalCandy",
        label: "Immortal Sugar",
        unlock: (state) => state.colosseumBestTime >= 60 && state.candies === 0,
        effect: "regenRate"
    },
    {
        id: "crystallineScale",
        label: "Crystalline Scale",
        unlock: (state) => state.inColosseum && state.hp >= state.maxHp && state.colosseumSurvivalTime >= 45,
        effect: "maxHp"
    }
];

function applyColosseumBuffs(state) {
    // Buffs only apply when actively fighting in colosseum
    if (!state.colosseumRunning) {
        return {
            candyMultiplier: 1,
            attackMultiplier: 1,
            regenMultiplier: 1,
            hpMultiplier: 1
        };
    }

    let candyMultiplier = 1;
    let attackMultiplier = 1;
    let regenMultiplier = 1;
    let hpMultiplier = 1;

    // Apply each buff based on level
    const buffs = state.colosseumBuffs || {};
    for (const [id, data] of Object.entries(buffs)) {
        const lvl = data?.level || 0;
        if (lvl === 0) continue;

        switch (id) {
            case "candyBoost":
                candyMultiplier += lvl * 0.15;
                break;
            case "attackBoost":
                attackMultiplier += lvl * 0.15;
                break;
            case "regenBoost":
                regenMultiplier += lvl * 0.15;
                break;
            case "hpBoost":
                hpMultiplier += lvl * 0.15;
                break;
            case "immortalCandy":
                regenMultiplier += lvl * 0.2;
                break;
            case "crystallineScale":
                hpMultiplier += lvl * 0.2;
                break;
        }
    }

    return {
        candyMultiplier,
        attackMultiplier,
        regenMultiplier,
        hpMultiplier
    };
}

// Migrate old boolean buff format to new level-based format
function migrateBuffsToLevels(colosseumBuffs) {
    const migrated = {};
    for (const key in colosseumBuffs) {
        if (colosseumBuffs[key] === true) {
            migrated[key] = { level: 1 };
        } else if (colosseumBuffs[key]?.level) {
            migrated[key] = colosseumBuffs[key]; // already migrated
        }
    }
    return migrated;
}

// Generate 3 random buff choices for milestone
function generateBuffChoices(state) {
    const available = BUFF_POOL.filter(buff => !state.colosseumBuffs[buff.id]);
    const shuffled = [...available].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.min(3, shuffled.length));
}

class CandyBox3 {
    constructor() {
        this.state = getDefaultGameState();
        this.lastUpdate = Date.now();
        this.monsters = MONSTERS;
        this.colosseumInterval = null; // Track colosseum combat interval
        this.uiInterval = null;
    }

    updateDarkEnergyBar() {
        const value = Math.floor(this.state.darkModeCandies);
        const max = DARK_ENERGY_REQUIRED;

        const percent = Math.min(100, (value / max) * 100);

        const fill = document.getElementById("dark-energy-fill");
        const text = document.getElementById("dark-energy-text");
        
        if (fill) fill.style.width = percent + "%";
        if (text) text.textContent = `${value.toLocaleString()} / ${max.toLocaleString()}`;
    }

    addDarkEnergy(amount) {
        this.state.darkModeCandies += amount;
        this.updateDarkEnergyBar();
    }

    updateCandyBar() {
        const countEl = document.getElementById("candy-count");
        const rateEl = document.getElementById("candy-rate");
        
        if (countEl) countEl.textContent = Math.floor(this.state.candies);
        if (rateEl) rateEl.textContent = this.state.candyRate.toFixed(1);
    }

    updateHpBar() {
        const barEl = document.getElementById("hp-bar");
        const currentEl = document.getElementById("hp-current");
        const maxEl = document.getElementById("hp-max");
        
        const maxHp = this.getEffectiveMaxHp();
        const percent = Math.min(100, Math.max(0, (this.state.hp / maxHp) * 100));
        const filled = Math.ceil(percent / 10);
        const bar = "[" + "█".repeat(filled) + "░".repeat(10 - filled) + "]";
        
        if (barEl) barEl.textContent = bar;
        if (currentEl) currentEl.textContent = Math.floor(this.state.hp);
        if (maxEl) maxEl.textContent = Math.floor(maxHp);
    }

    addCandies(amount) {
        this.state.candies += amount;
        this.updateCandyBar();
    }

    getWeaponDef(id = this.state.equippedWeapon) {
        return WEAPON_DEFS.find(def => def.id === id) || null;
    }

    ensureStateShape() {
        const defaults = getDefaultGameState();
        this.state.ownedWeapons = Array.isArray(this.state.ownedWeapons) ? this.state.ownedWeapons : [];
        this.state.equippedWeapon = this.state.equippedWeapon || null;
        this.state.ownedArmors = Array.isArray(this.state.ownedArmors) ? this.state.ownedArmors : [];
        this.state.equippedArmor = this.state.equippedArmor || null;
        this.state.equipmentUpgrades = this.state.equipmentUpgrades || {};
        this.state.learnedSkills = Array.isArray(this.state.learnedSkills) ? this.state.learnedSkills : [];
        this.state.lollipops = this.state.lollipops || 0;
        this.state.sweetVillageUnlocked = this.state.sweetVillageUnlocked || false;
        this.state.villagePlace = this.state.villagePlace || 'square';
        this.state.activeVillageQuest = this.state.activeVillageQuest || null;
        this.state.artifactsFound = this.state.artifactsFound || {};
        this.state.museumUnlocked = this.state.museumUnlocked || Object.keys(this.state.artifactsFound).length > 0;
        this.state.colosseumTimeBySpeed = this.state.colosseumTimeBySpeed || { 1: 0 };
        this.state.combatFlags = { ...defaults.combatFlags, ...(this.state.combatFlags || {}) };
        this.state.timeWarpUnlocked = this.state.timeWarpUnlocked || false;
        this.state.darkModeCandies = this.state.darkModeCandies || 0;
    }

    getArmorDef(id = this.state.equippedArmor) {
        return ARMOR_DEFS.find(def => def.id === id) || null;
    }

    getEquipmentUpgradeLevel(id) {
        return this.state.equipmentUpgrades[id] || 0;
    }

    getSkillUpgradeLevel(id) {
        return this.getEquipmentUpgradeLevel(id);
    }

    getScaledValue(def, key) {
        const base = def?.[key] || 0;
        const step = def?.[`${key}PerUpgrade`] || 0;
        return base + (step * this.getEquipmentUpgradeLevel(def.id));
    }

    getItemBonusSummary(def) {
        const parts = [];
        if (def.attackBonus) parts.push(`+${this.getScaledValue(def, 'attackBonus')} atk`);
        if (def.hpBonus) parts.push(`+${this.getScaledValue(def, 'hpBonus')} HP`);
        if (def.damageReduction) parts.push(`-${this.getScaledValue(def, 'damageReduction')} dmg`);
        if (def.regenBonus) parts.push(`+${this.getScaledValue(def, 'regenBonus').toFixed(1)} regen`);
        if (def.candyDropBonus) parts.push(`+${Math.floor(this.getScaledValue(def, 'candyDropBonus') * 100)}% candy`);
        if (def.skillDamageBonus) parts.push(`+${Math.floor(this.getScaledValue(def, 'skillDamageBonus') * 100)}% skill dmg`);
        if (def.critChance) parts.push(`${Math.floor(this.getScaledValue(def, 'critChance') * 100)}% crit`);
        if (def.openerBonus) parts.push(`+${this.getScaledValue(def, 'openerBonus')} opener`);
        if (def.echoChance) parts.push(`${Math.floor(this.getScaledValue(def, 'echoChance') * 100)}% echo`);
        if (def.healOnKill) parts.push(`heal ${Math.floor(this.getScaledValue(def, 'healOnKill') * 100)}% on kill`);
        return parts.join(', ');
    }

    hasSkill(id) {
        return this.state.learnedSkills.includes(id);
    }

    getSkillUpgradeCost(id) {
        return this.getSkillUpgradeLevel(id) + 1;
    }

    getSkillPassiveMultiplier(id) {
        return 1 + (this.getSkillUpgradeLevel(id) * 0.2);
    }

    getArtifactBonusTotal(key) {
        return ARTIFACT_DEFS.reduce((sum, artifact) => {
            if (!this.state.artifactsFound[artifact.id]) return sum;
            return sum + (artifact.bonus?.[key] || 0);
        }, 0);
    }

    meetsRequirements(def) {
        const req = def.requires || {};
        if (req.eaten && this.state.totalCandiesEaten < req.eaten) return false;
        if (req.tier && this.state.maxUnlockedTier < req.tier) return false;
        if (req.forest && !this.state.forestUnlocked) return false;
        if (req.colosseum && !this.state.colosseumUnlocked) return false;
        if (req.spells && !this.state.spellsUnlocked) return false;
        return true;
    }

    getRequirementText(def) {
        const req = def.requires || {};
        const parts = [];
        if (req.eaten) parts.push(`eat ${req.eaten} candy`);
        if (req.tier) parts.push(`reach tier ${req.tier}`);
        if (req.forest) parts.push('unlock the forest');
        if (req.colosseum) parts.push('unlock the colosseum');
        if (req.spells) parts.push('unlock spells');
        return parts.length ? `Locked: ${parts.join(', ')}` : '';
    }

    getCostLabel(def) {
        const parts = [`${def.candyCost}🍬`];
        if (def.chocolateCost) parts.push(`${def.chocolateCost}🍫`);
        return parts.join(' ');
    }

    canAfford(def) {
        return this.state.candies >= def.candyCost &&
            (!def.chocolateCost || this.state.chocolate >= def.chocolateCost);
    }

    spendCost(def) {
        this.state.candies -= def.candyCost;
        if (def.chocolateCost) this.state.chocolate -= def.chocolateCost;
    }

    getEffectiveMaxHp() {
        const armor = this.getArmorDef();
        return this.state.maxHp + (armor ? this.getScaledValue(armor, 'hpBonus') : 0) + this.getArtifactBonusTotal('maxHp');
    }

    getEffectiveAttack() {
        const weapon = this.getWeaponDef();
        let attack = this.state.attack + (weapon ? this.getScaledValue(weapon, 'attackBonus') : 0) + this.getArtifactBonusTotal('attack');
        if (this.hasSkill('sugarRush') && this.state.hp / this.getEffectiveMaxHp() >= 0.7) {
            attack *= 1.15 + (this.getSkillUpgradeLevel('sugarRush') * 0.05);
        }
        return Math.floor(attack);
    }

    getEffectiveRegen() {
        const weapon = this.getWeaponDef();
        const armor = this.getArmorDef();
        return this.state.regenRate +
            (weapon ? this.getScaledValue(weapon, 'regenBonus') : 0) +
            (armor ? this.getScaledValue(armor, 'regenBonus') : 0) +
            this.getArtifactBonusTotal('regen');
    }

    getDamageReduction() {
        const armor = this.getArmorDef();
        return (armor ? this.getScaledValue(armor, 'damageReduction') : 0) + this.getArtifactBonusTotal('damageReduction');
    }

    getSkillDamageMultiplier() {
        const weapon = this.getWeaponDef();
        const armor = this.getArmorDef();
        return 1 +
            (weapon ? this.getScaledValue(weapon, 'skillDamageBonus') : 0) +
            (armor ? this.getScaledValue(armor, 'skillDamageBonus') : 0) +
            this.getArtifactBonusTotal('skillDamage');
    }

    getCandyDropMultiplier() {
        const weapon = this.getWeaponDef();
        const armor = this.getArmorDef();
        return 1 +
            (weapon ? this.getScaledValue(weapon, 'candyDropBonus') : 0) +
            (armor ? this.getScaledValue(armor, 'candyDropBonus') : 0) +
            this.getArtifactBonusTotal('candyDrop');
    }

    getHealOnKillRatio() {
        const armor = this.getArmorDef();
        return armor ? this.getScaledValue(armor, 'healOnKill') : 0;
    }

    getColosseumTickMs(speed = this.state.colosseumSpeed) {
        return Math.max(5, 500 / speed);
    }

    getColosseumRewardMultiplier(speed = this.state.colosseumSpeed) {
        return speed === 1 ? 0.5 : speed - 1;
    }

    getCurrentArtifactPage() {
        if (this.state.view === 'village') return `village-${this.state.villagePlace}`;
        return this.state.view;
    }

    renderArtifactHotspots(pageKey) {
        return ARTIFACT_DEFS.filter(artifact => artifact.page === pageKey && !this.state.artifactsFound[artifact.id]).map(artifact => `
            <button
                data-action="find-artifact"
                data-artifact-id="${artifact.id}"
                style="position:absolute; top:${artifact.top}; left:${artifact.left}; width:18px; height:18px; opacity:0; cursor:pointer;"
                aria-label="hidden artifact"
            ></button>
        `).join('');
    }

    findArtifact(id) {
        const artifact = ARTIFACT_DEFS.find(item => item.id === id);
        if (!artifact || this.state.artifactsFound[id]) return;
        this.state.artifactsFound[id] = true;
        if (!this.state.museumUnlocked) {
            this.state.museumUnlocked = true;
            this.addLog('🏛️ The Museum appears on the world map.');
        }
        this.addLog(`Relic found: ${artifact.name} (${artifact.description})`);
        if (artifact.id === 'libraryDust' && !this.hasSkill('parryField')) {
            this.state.learnedSkills.push('parryField');
            this.addLog('The relic teaches Parry Field.');
        }
        this.buildSpells();
        this.updateUI();
        this.updateView();
        this.doSave();
    }

    clampHp() {
        const maxHp = this.getEffectiveMaxHp();
        if (this.state.hp > maxHp) this.state.hp = maxHp;
        if (this.state.hp < 0) this.state.hp = 0;
    }

    resetCombatFlags() {
        this.state.combatFlags = this.state.combatFlags || {};
        this.state.combatFlags.openerUsed = false;
        this.state.combatFlags.astralEchoReady = this.hasSkill('astralEcho');
        this.state.combatFlags.enemyStaggered = false;
        this.state.combatFlags.secondWindUsed = false;
    }

    calculatePlayerDamage(multiplier = 1) {
        const weapon = this.getWeaponDef();
        let damage = this.getEffectiveAttack();

        if (weapon?.openerBonus && !this.state.combatFlags.openerUsed) {
            damage += this.getScaledValue(weapon, 'openerBonus');
            this.state.combatFlags.openerUsed = true;
            this.addLog(`${weapon.name} lands an opening strike.`);
        }

        if (this.state.combatFlags.astralEchoReady) {
            damage = Math.floor(damage * (1.75 + (this.getSkillUpgradeLevel('astralEcho') * 0.25)));
            this.state.combatFlags.astralEchoReady = false;
            this.addLog('Astral Echo amplifies the first blow.');
        }

        if (weapon?.echoChance && Math.random() < this.getScaledValue(weapon, 'echoChance')) {
            damage += Math.floor(damage * this.getScaledValue(weapon, 'echoFactor'));
            this.addLog(`${weapon.name} echoes through the target.`);
        }

        if (weapon?.critChance && Math.random() < this.getScaledValue(weapon, 'critChance')) {
            damage = Math.floor(damage * (weapon.critMultiplier || 2));
            this.addLog('Critical hit.');
        }

        return Math.max(1, Math.floor(damage * multiplier) + (Math.random() < 0.5 ? 1 : 0));
    }

    takeEnemyHit(baseDamage, sourceName, onDefeat) {
        if (this.state.combatFlags.enemyStaggered) {
            this.state.combatFlags.enemyStaggered = false;
            this.addLog(`${sourceName} is frozen in place.`);
            return;
        }

        let damage = baseDamage;
        if (this.hasSkill('parryField') && Math.random() < (0.2 + this.getSkillUpgradeLevel('parryField') * 0.05)) {
            damage = Math.max(1, Math.floor(damage / 2));
            this.addLog('Parry Field softens the hit.');
        }

        damage = Math.max(1, damage - this.getDamageReduction());
        this.state.hp -= damage;
        this.addLog(`${sourceName} hits ${damage}`);

        if (this.state.hp <= 0 && this.hasSkill('secondWind') && !this.state.combatFlags.secondWindUsed) {
            this.state.combatFlags.secondWindUsed = true;
            this.state.hp = Math.max(1, Math.floor(this.getEffectiveMaxHp() * (0.25 + this.getSkillUpgradeLevel('secondWind') * 0.1)));
            this.addLog('Second Wind pulls you back from defeat.');
            return;
        }

        if (this.state.hp <= 0) {
            onDefeat();
        }
    }

    checkColosseumUnlock() {
        if (this.state.colosseumUnlocked) return; // Already unlocked
        const totalMonsterLevels = this.state.unlockedMonsters.reduce((sum, monster) => sum + (monster.level || 0), 0);
        if (totalMonsterLevels >= 200) {
            this.state.colosseumUnlocked = true;
            this.addLog('🏟️ The Candy Colosseum is now open...');
            this.updateUI();
        }
    }

    checkSweetVillageUnlock() {
        if (this.state.sweetVillageUnlocked) return;
        const upgradesReady = Object.values(this.state.upgradesPurchased).every(level => level >= 10);
        if (upgradesReady) {
            this.state.sweetVillageUnlocked = true;
            this.addLog('🏘️ Sweet Village opens beyond the factory roads.');
            this.updateUI();
            this.updateView();
        }
    }

    checkSecretBuffs() {
        SECRET_BUFFS.forEach(buff => {
            if (!this.state.colosseumBuffs[buff.id] && buff.unlock(this.state)) {
                this.state.colosseumBuffs[buff.id] = { level: 1 };
                this.addLog(`🔒 Secret unlocked: ${buff.label}!`);
            }
        });
    }

    buildUI() {
        const main = document.getElementById('main');
        if (!main) return;
        main.innerHTML = `
            <div id="status-panel" class="panel">
                <div class="stat-row"><span class="stat-label">Candies:</span><span id="candy-count">0</span></div>
                <div class="stat-row"><span class="stat-label">Total Eaten:</span><span id="total-eaten">0</span></div>
                <div class="stat-row"><span class="stat-label">Candy/sec:</span><span id="candy-rate">1.0</span></div>
                <div class="stat-row"><span class="stat-label">Chocolate:</span><span id="chocolate-count">0</span><span> (+</span><span id="chocolate-rate">0</span><span>/hr)</span></div>
                <div class="stat-row"><span class="stat-label">Lollipops:</span><span id="lollipop-count">0</span></div>
                <div class="stat-row"><span class="stat-label">Attack:</span><span id="attack-value">5</span></div>
                <div class="stat-row"><span class="stat-label">HP:</span><span id="hp-bar">[██████████]</span><span id="hp-current">10</span><span>/</span><span id="hp-max">10</span></div>
                <div class="stat-row"><span class="stat-label">Active Quest:</span><span id="active-quest-display">none</span></div>
            </div>
            <div id="mainView">
                <div id="actions-panel" class="panel" style="position:relative;"><div id="action-buttons"></div><div id="quick-actions"><button class="action-btn" data-action="eat">🍬 Eat Candy</button><button class="action-btn" data-action="go-map">🗺️ Map</button></div>${this.renderArtifactHotspots('main')}</div>
                <div id="combat-display" class="panel" style="display:none;"><div id="enemy-ascii" style="white-space: pre-wrap; font-size: 12px;"></div><div id="enemy-name" style="font-weight: bold; margin-top: 5px;"></div><div id="enemy-hp" style="margin-bottom: 10px;"></div></div>
                <div id="spells-panel" class="panel" style="display:none;"><h3>Combat Arts</h3><div id="spells-list"></div></div>
                <div id="monster-select-panel" class="panel" style="display:none;"><div style="margin-bottom: 10px;"><strong>Face Known Monster:</strong></div><select id="monster-select"><option value="">-- Select Monster --</option></select><button class="action-btn" data-action="fight-selected" style="margin-left: 5px;">Fight</button></div>
                <div id="upgrades-panel" class="panel"><h3>Upgrades</h3><div id="upgrades-list"></div></div>
                <div id="inventory-panel" class="panel"><h3>Inventory</h3><div id="inventory-items">(empty)</div></div>
                <div id="settings-panel" class="panel"><h3>Options</h3><button class="settings-btn" data-action="export-save">Export Save</button><button class="settings-btn" data-action="import-save">Import Save</button><button class="settings-btn" data-action="new-game">New Game</button><div id="dark-mode-section" style="margin-top:10px;"></div></div>
            </div>
            <div id="mapView" style="display:none;"></div>
            <div id="forestView" style="display:none; position: relative; min-height: 400px;"></div>
            <div id="villageView" style="display:none;"></div>
            <div id="museumView" style="display:none;"></div>
            <div id="colosseumView" style="display:none; position: relative; min-height: 500px;"></div>
            <div id="arsenal-panel" class="panel" style="display:none;"><h3>Arsenal</h3><div id="arsenal-list"></div></div>
            <div id="academy-panel" class="panel" style="display:none;"><h3>Skills</h3><div id="academy-list"></div></div>
            <div id="log-panel" class="panel" style="display:none; max-height: 200px; overflow-y: auto;"><h3>Log</h3><div id="game-log"></div></div>
        `;
        this.buildUpgrades();
        this.buildArsenal();
        this.buildAcademy();
        this.buildSpells();
    }

    buildUpgrades() {
        const container = document.getElementById('upgrades-list');
        if (!container) return;
        container.innerHTML = '';
        const defs = [
            { key: 'candy', display: 'Sugar Engine', baseCost: 10 },
            { key: 'attack', display: 'Sweet Strength', baseCost: 15 },
            { key: 'regen', display: 'Candy Metabolism', baseCost: 20 }
        ];
        for (let def of defs) {
            const div = document.createElement('div');
            div.className = 'upgrade-item';
            const span1 = document.createElement('span');
            span1.className = 'upgrade-name';
            span1.textContent = def.display;
            const span2 = document.createElement('span');
            span2.className = 'upgrade-cost';
            span2.id = `upgrade-cost-${def.key}`;
            const btn = document.createElement('button');
            btn.className = 'upgrade-btn';
            btn.id = `buy-${def.key}`;
            btn.textContent = 'BUY';
            btn.dataset.action = 'buy-upgrade';
            btn.dataset.upgradeKey = def.key;
            div.appendChild(span1);
            div.appendChild(span2);
            div.appendChild(btn);
            container.appendChild(div);
        }
    }

    buildSpells() {
        this.ensureStateShape();
        const container = document.getElementById('spells-list');
        if (!container) return;
        container.innerHTML = '';
        const spells = [
            { key: 'fire', name: 'Fire Candy', cost: 50, effect: '30-50 dmg' },
            { key: 'heal', name: 'Sugar Heal', cost: 100, effect: '+50 HP' },
            { key: 'storm', name: 'Candy Storm', cost: 300, effect: '80-120 dmg' }
        ];
        const activeSkills = SKILL_DEFS
            .filter(def => def.active && this.hasSkill(def.id))
            .map(def => {
                const level = this.getSkillUpgradeLevel(def.id);
                return { key: def.id, name: `${def.name} +${level}`, cost: def.useCost, effect: def.description.replace('Active: ', ''), isSkill: true };
            });
        for (let spell of [...spells, ...activeSkills]) {
            const div = document.createElement('div');
            div.className = 'upgrade-item';
            const name = document.createElement('span');
            name.className = 'upgrade-name';
            name.textContent = spell.name;
            const info = document.createElement('span');
            info.className = 'upgrade-cost';
            info.textContent = ` ${spell.effect} (${spell.cost})`;
            const btn = document.createElement('button');
            btn.className = 'upgrade-btn';
            btn.textContent = 'CAST';
            btn.dataset.action = spell.isSkill ? 'use-skill' : 'cast-spell';
            btn.dataset.spellKey = spell.key;
            btn.dataset.skillId = spell.key;
            btn.id = `spell-${spell.key}`;
            div.appendChild(name);
            div.appendChild(info);
            div.appendChild(btn);
            container.appendChild(div);
        }
    }

    buildArsenal() {
        const container = document.getElementById('arsenal-list');
        if (!container) return;

        const parts = ['<div class="inventory-item"><strong>Weapons</strong></div>'];
        for (const def of WEAPON_DEFS) {
            parts.push(`
                <div class="upgrade-item">
                    <span class="upgrade-name">${def.name}</span>
                    <span class="upgrade-cost" id="weapon-info-${def.id}"></span>
                    <button class="upgrade-btn" id="weapon-btn-${def.id}" data-action="buy-weapon" data-weapon-id="${def.id}">BUY</button>
                    <button class="upgrade-btn" id="weapon-up-btn-${def.id}" data-action="upgrade-gear" data-gear-id="${def.id}" style="margin-left: 4px;">UP+</button>
                </div>
            `);
        }
        parts.push('<div class="inventory-item" style="margin-top: 8px;"><strong>Armor</strong></div>');
        for (const def of ARMOR_DEFS) {
            parts.push(`
                <div class="upgrade-item">
                    <span class="upgrade-name">${def.name}</span>
                    <span class="upgrade-cost" id="armor-info-${def.id}"></span>
                    <button class="upgrade-btn" id="armor-btn-${def.id}" data-action="buy-armor" data-armor-id="${def.id}">BUY</button>
                    <button class="upgrade-btn" id="armor-up-btn-${def.id}" data-action="upgrade-gear" data-gear-id="${def.id}" style="margin-left: 4px;">UP+</button>
                </div>
            `);
        }
        container.innerHTML = parts.join('');
    }

    buildAcademy() {
        const container = document.getElementById('academy-list');
        if (!container) return;
        container.innerHTML = SKILL_DEFS.map(def => `
            <div class="upgrade-item">
                <span class="upgrade-name">${def.name}</span>
                <span class="upgrade-cost" id="skill-info-${def.id}"></span>
                <button class="upgrade-btn" id="skill-btn-${def.id}" data-action="learn-skill" data-skill-id="${def.id}">LEARN</button>
            </div>
        `).join('');
    }

    updateLoadoutUI() {
        for (const def of WEAPON_DEFS) {
            const info = document.getElementById(`weapon-info-${def.id}`);
            const btn = document.getElementById(`weapon-btn-${def.id}`);
            const upBtn = document.getElementById(`weapon-up-btn-${def.id}`);
            if (!info || !btn || !upBtn) continue;

            const owns = this.state.ownedWeapons.includes(def.id);
            const equipped = this.state.equippedWeapon === def.id;
            const unlocked = this.meetsRequirements(def);
            const level = this.getEquipmentUpgradeLevel(def.id);
            info.textContent = unlocked
                ? ` [${level}] ${this.getItemBonusSummary(def)} | ${this.getCostLabel(def)} | ${def.description}`
                : ` ${this.getRequirementText(def)}`;

            if (!unlocked) {
                btn.disabled = true;
                btn.textContent = 'LOCKED';
                btn.dataset.action = '';
            } else if (!owns) {
                btn.disabled = !this.canAfford(def);
                btn.textContent = 'BUY';
                btn.dataset.action = 'buy-weapon';
            } else if (equipped) {
                btn.disabled = true;
                btn.textContent = 'EQUIPPED';
                btn.dataset.action = '';
            } else {
                btn.disabled = false;
                btn.textContent = 'EQUIP';
                btn.dataset.action = 'equip-weapon';
            }

            const upCost = level + 1;
            upBtn.disabled = !owns || this.state.lollipops < upCost;
            upBtn.textContent = `UP+ ${upCost}🍭`;
        }

        for (const def of ARMOR_DEFS) {
            const info = document.getElementById(`armor-info-${def.id}`);
            const btn = document.getElementById(`armor-btn-${def.id}`);
            const upBtn = document.getElementById(`armor-up-btn-${def.id}`);
            if (!info || !btn || !upBtn) continue;

            const owns = this.state.ownedArmors.includes(def.id);
            const equipped = this.state.equippedArmor === def.id;
            const unlocked = this.meetsRequirements(def);
            const level = this.getEquipmentUpgradeLevel(def.id);
            info.textContent = unlocked
                ? ` [${level}] ${this.getItemBonusSummary(def)} | ${this.getCostLabel(def)} | ${def.description}`
                : ` ${this.getRequirementText(def)}`;

            if (!unlocked) {
                btn.disabled = true;
                btn.textContent = 'LOCKED';
                btn.dataset.action = '';
            } else if (!owns) {
                btn.disabled = !this.canAfford(def);
                btn.textContent = 'BUY';
                btn.dataset.action = 'buy-armor';
            } else if (equipped) {
                btn.disabled = true;
                btn.textContent = 'EQUIPPED';
                btn.dataset.action = '';
            } else {
                btn.disabled = false;
                btn.textContent = 'EQUIP';
                btn.dataset.action = 'equip-armor';
            }

            const upCost = level + 1;
            upBtn.disabled = !owns || this.state.lollipops < upCost;
            upBtn.textContent = `UP+ ${upCost}🍭`;
        }
    }

    updateAcademyUI() {
        for (const def of SKILL_DEFS) {
            const info = document.getElementById(`skill-info-${def.id}`);
            const btn = document.getElementById(`skill-btn-${def.id}`);
            if (!info || !btn) continue;

            const learned = this.hasSkill(def.id);
            const unlocked = this.meetsRequirements(def);
            const costText = `${this.getCostLabel(def)}${def.active ? ` | use: ${def.useCost}🍬` : ''} | upgrade ${this.getSkillUpgradeCost(def.id)}🍭`;
            info.textContent = unlocked
                ? ` [+${this.getSkillUpgradeLevel(def.id)}] ${def.description} | ${costText}`
                : ` ${this.getRequirementText(def)}`;

            if (!unlocked) {
                btn.disabled = true;
                btn.textContent = 'LOCKED';
                btn.dataset.action = '';
            } else if (learned) {
                btn.disabled = true;
                btn.textContent = 'LEARNED';
                btn.dataset.action = '';
            } else {
                btn.disabled = !this.canAfford(def);
                btn.textContent = 'LEARN';
                btn.dataset.action = 'learn-skill';
            }
        }
    }

    buildMapUI() {
        const map = document.getElementById('mapView');
        if (!map) return;
        const _scrollY = window.scrollY;

        const forestLink = this.state.forestUnlocked
            ? '<span data-action="go-forest" class="clickable">Chocolate Forest</span>'
            : '<span class="locked">??? (locked)</span>';
        const villageLink = this.state.sweetVillageUnlocked
            ? '<span data-action="go-village" class="clickable">Sweet Village</span>'
            : '<span class="locked">Quiet road (locked)</span>';
        const colosseumLink = this.state.colosseumUnlocked
            ? '<span data-action="go-colosseum" class="clickable">Candy Colosseum</span>'
            : '<span class="locked">Arena gate (locked)</span>';
        const museumLink = this.state.museumUnlocked
            ? '<span data-action="go-museum" class="clickable">Museum</span>'
            : '<span class="locked">Museum (locked)</span>';

        map.innerHTML = `
            <div class="panel" style="position:relative;">
                <h2>🗺️ World Map</h2>
                <pre id="asciiMap" style="font-family: monospace; margin: 20px 0; text-align: center; max-width: 100%; overflow-x: auto;">
        ┌──────────────────────┐      ┌──────────────────────┐
        │                      │      │                      │
        │  <span data-action="go-main" class="clickable">🏭 Candy Factory</span>  │──────│   ${colosseumLink}   │
        │                      │      │                      │
        └───────────┬──────────┘      └──────────────────────┘
                    │
        ┌───────────▼──────────┐      ┌──────────────────────┐
        │                      │      │                      │
        │  ${forestLink}  │──────│   ${villageLink}   │
        │                      │      │                      │
        └──────────────────────┘      └──────────────────────┘

                 ┌──────────────────────┐
                 │    ${museumLink}    │
                 └──────────────────────┘
                </pre>
                <div style="text-align: center; margin: 20px 0;">
                    <button class="action-btn" data-action="go-main">Return to Factory</button>
                </div>
                ${this.renderArtifactHotspots('map')}
            </div>
        `;
        requestAnimationFrame(() => window.scrollTo(0, _scrollY));
    }

    buildMuseumUI() {
        this.state.museumRendered = false;
        if (this.state.museumRendered) return;
        const museum = document.getElementById('museumView');
        if (!museum) return;
        const cells = ARTIFACT_DEFS.map((artifact, index) => {
            const found = this.state.artifactsFound[artifact.id];
            return `<div style="border:1px solid #000; padding:10px; min-height:60px; text-align:center;">
                <div style="font-size:24px;">${found ? artifact.emoji : '?'}</div>
                <div style="font-size:11px;">${index + 1}. ${found ? artifact.name : 'Unknown'}</div>
            </div>`;
        }).join('');
        const foundList = ARTIFACT_DEFS.filter(artifact => this.state.artifactsFound[artifact.id])
            .map(artifact => `<div class="inventory-item">${artifact.emoji} ${artifact.name}: ${artifact.description}</div>`).join('') || '(none found)';
        museum.innerHTML = `
            <div class="panel" style="position:relative;">
                <h2>🏛️ Museum</h2>
                <div style="display:grid; grid-template-columns:repeat(5, 1fr); gap:8px; margin:15px 0;">${cells}</div>
                <div style="margin:15px 0;"><strong>Collected Relics</strong></div>
                <div>${foundList}</div>
                <div style="margin-top:20px;"><button class="action-btn" data-action="go-map">🗺️ Back to Map</button></div>
            </div>
        `;
        this.state.museumRendered = true;
    }

    buildVillageUI() {
        const village = document.getElementById('villageView');
        if (!village) return;
        const _scrollY = window.scrollY;

        const place = this.state.villagePlace || 'square';
        const square = `
            <div class="panel" style="position:relative;">
                <h2>🏘️ Sweet Village</h2>
                <div style="white-space: pre-wrap; font-family: monospace; margin: 20px 0; font-size: 12px;">
    [Town Hall]   [Forge]   [Lookout]
       🏛️           🔥         🔭
                                                                                                            [Laboratory]
          [Library]      [Market]                                                                                🔬 
             📚             🛒
                </div>
                <div style="margin: 15px 0;"><strong>Lollipops:</strong> ${this.state.lollipops}</div>
                <div style="margin-top: 10px;">
                    <button class="action-btn" data-action="village-place" data-place="townhall">🏛️ Town Hall</button>
                    ${this.isBuildingUnlocked('forge') ? '<button class="action-btn" data-action="village-place" data-place="forge">🔥 Forge</button>' : '<button class="action-btn" disabled style="opacity:0.4;cursor:not-allowed;">🔥 Forge (locked)</button>'}
                    ${this.isBuildingUnlocked('lookout') ? '<button class="action-btn" data-action="village-place" data-place="lookout">🔭 Lookout</button>' : '<button class="action-btn" disabled style="opacity:0.4;cursor:not-allowed;">🔭 Lookout (locked)</button>'}
                    ${this.isBuildingUnlocked('library') ? '<button class="action-btn" data-action="village-place" data-place="library">📚 Library</button>' : '<button class="action-btn" disabled style="opacity:0.4;cursor:not-allowed;">📚 Library (locked)</button>'}
                    ${this.isBuildingUnlocked('market') ? '<button class="action-btn" data-action="village-place" data-place="market">🛒 Market</button>' : '<button class="action-btn" disabled style="opacity:0.4;cursor:not-allowed;">🛒 Market (locked)</button>'}
                    ${this.state.laboratoryUnlocked ? '<button class="action-btn" data-action="village-place" data-place="laboratory">🔬 Laboratory</button>' : ''}
                </div>
                <div style="margin-top: 20px;">
                    <button class="action-btn" data-action="go-map">🗺️ Back to Map</button>
                </div>
                ${this.renderArtifactHotspots('village-square')}
            </div>
        `;
        const townHall = `
            <div class="panel" style="position:relative;">
                <h2>🏛️ Town Hall</h2>
                <pre style="font-family: monospace; margin: 15px 0;"> 
                                                 ....                                               
                                                  ..                                                
                                                 .%                                                 
                                                .%+-                                                
                                                *++%.                                               
                                               **+++*.                                              
                                              **+++++*.                                             
                                             :--------=                                             
                                               ::::::..                                             
                                              .:%...:..                                             
                                               :#+.%:..                                             
                                             ..--:---.:                                             
                                              ::::::::.                                             
                               +++++++++++++++:::.#.::****++++++++++++                              
                            .++#:::+++++++++++-.::::-.***+++++++++:::+++.                           
                          .+++++...+++++++++=%:::.:*:::.*+++++++++.*:+++++.                         
                        .+++++++++++++++++.-::::::-::::::+.+++++++++++++++++..                      
                        +................:%:::::::::::::::--................-.                      
                        +::+::::%::::+::::#.%::-.::-.#::=.::-::-::::*::::+::-                       
                        +*:=+:::.:::=+:-::%.#:::.:#*.-::*.::--::.:::%::::+::-                       
             :     .:   +*:=*:::.:::+*:-::%.#::-.:#*.-::*.::--::.:::%::::+::-.        .             
                  .     +*%%%::%.#::%%%=::%.#:::.:#*.-::*.::--##.::##%::#=#:- .      .              
           .     .      +:..::*.:.+:....::%.%.%#:*.+=.%=#.::-....:=...::...%-.    .   ...           
           ..     ..  : ::::::::::::::::::.................:-::::::::::::::::. ..   ....+           
       ....:. .   .   . +%###..###..###%.:#...%.*:::.. ...:::####.=###..###.:..   .   ........      
          .-         .-+++##%..*.*..#%*:.:%*..%::::::....:::::##...#@#..#:#.#-- ..  ....     .      
       :.. -.     = .----+:=*:::.:::=*:=::%+*.%:::=:+: :#:::--::.:::%::::-::----. ..  .      .      
        ..:-  .  %=  ---@::::.-.::-.:::--*##-+%-+++++:.%-=:=--:::.=:::..:::%----...-. .    ..       
       . ..%.    .... ..*::::*%%%%%%::::::#=-.%:++++=:..%=:::::::*%%#%%-::::-.... =#.  #..... :*    
         ..#. .  ..% .==*::::+:::::#:::==:%-#:::::::::::+.::=#:::%:::::%::::-==.  .#%..#+..: =*=*.  
                              .            ..                    .                        .-***. .  
                </pre>
            <div style="margin: 15px 0;">
                    ${VILLAGERS.filter(v => !this.isVillagerMoved(v.id)).map(v => `<button class="action-btn" data-action="talk-villager" data-villager-id="${v.id}" style="margin-right:8px; margin-bottom:8px;">${v.emoji} ${v.name}</button>`).join('')}
                    ${!this.state.laboratoryUnlocked && this.state.candies >= 500000 ? `<button class="action-btn" data-action="hire-sweet-scientist" style="margin-right:8px; margin-bottom:8px;">🧑‍🔬 Sweet Scientist</button>` : ''}
                </div>
                <div style="margin-top: 15px;"><button class="action-btn" data-action="village-place" data-place="square">⬅️ Village Square</button></div>
                ${this.renderArtifactHotspots('village-townhall')}
            </div>
        `;
        const forge = `
            <div class="panel" style="position:relative;">
                <h2>🔥 Forge</h2>
                <pre style="font-family: monospace; margin: 15px 0;">
                                                                ..........                          
                                                                -####-==...                         
                                                         .......:----##==..........                 
                                                        ..:----------==:.:##*..%%%..                
                                                       ..---------===..    ...%%%-.                 
                                                     ...-----======-..     ..%%%:.                  
                                                     ..###########*...+*=..  .....                  
                                                     .-##########==.:******#:.                      
                                                     ..-::::======+*********##...                   
                                                      .::::::====#%%%******###:..                   
                                                      ..:::::-==****%%%%%%%%%#.                     
                                                      ..::::::*****-==+--***=#.                     
                                                        .:::::************####..                    
                                                        ..::::***********####==:..                  
                                                         ..::-***********#####=---.                 
                                                          ..:===#****########=-----.                
                                                           .:==#=+########=#-::-----..              
                                                          ..==#===========#:::::----.               
                                                          ..=########%*==*:::::::---..              
                                                          ..############-::::::::---.               
                                                           .###############:::::---.                
                                         +###%#-....      ..######*------=+###----:.                
                             .......    .#########*.      ..####----------==###--..                 
                             ...=...    .###%#####:.      .:#+-----------===*#+==.                  
                                        .####%%%%#.   ....:-----------======#*===.                  
                                       .:###%%#%##.....:----------======*##====#*..                 
                   ..--:.....          .##########...*#--------=+############=====.                 
                    ..++++++++=:........#########*. ...------=+##%####%#####===----.                
                     ........-++++----.:::##+###%...=++....+################===-----..              
                .::::::::::::::::::::-+=============+-:--:.=################+==-----:..             
                 .:**********************************####..-#################==------..             
             ....   .-**********-***************#######.. ..#################==--=**..              
           ..-+=-.    ...:*************########+#####:.   ..##################*******..             
           ..+--..       ..#%%#%###################+.     ..##################*******..             
       ... ..##-.          .%%%%#################:.       ..###################*******.             
       .*+*-=*#...          ....:%%%%#+%###%#%#...        ..###################*******..            
       ....-*#=#++.             ......=%%%%.....           .###################********.            
          .+-=.....                  .#%%%%.               .=###################*******:..          
         ..++=.#-*..             .....%####%....            .###################********..          
        ..-++.*---+=+:+++++++++++##############++++++++-.   .##############%#***********:.          
        .:-=+*-------+*#*******************************#..  ..+********:......*****++****..         
       ..-=-#------==--==#******************************..   .:********..    ..:**++++++*..         
       .--*+------=-------+-#***************************..   ..+++****..       ..*++++++++.         
      ..-=-+-----=-----------*=#************************+.    .++++**=.          ..+++++++..        
      .--*#-----=------------*-#*************************...  .++++**.             .:++++++.        
     ..---=----=------------=*#**************************.    .=++++..              ..+++++.        
     .+=*-*---=-----------*=#****************************..   ..++++.                 ..++++..      
     -++==*-------------*-##*****************************-.   ..+++..                  ...++..      
     :++++-----------=+=##********************************.   ..++..                     ..++..     
     .++:.**++++**=-*##***********************************......++.                       ..++..... 
     .:...*#####*-..**************************************..-+++++.                        ..++++.. 
                "I sell and upgrade Weapons."</pre>
                <div>${this.renderVillageWeaponShop()}</div>
                ${this.isVillagerMoved('smithPop') ? `<div style="margin: 10px 0;"><button class="action-btn" data-action="talk-villager" data-villager-id="smithPop" style="margin-right:8px;">🧑‍🏭 Smith Pop — Get Quest</button></div>` : ''}
                <div style="margin-top: 15px;"><button class="action-btn" data-action="village-place" data-place="square">⬅️ Village Square</button></div>
                ${this.renderArtifactHotspots('village-forge')}
            </div>
        `;
        const market = `
            <div class="panel" style="position:relative;">
                <h2>🛒 Market</h2>
                <pre style="font-family: monospace; margin: 15px 0;">  _______
 [ Market ]
   \\^_^/
   /|_|\\   "I sell and upgrade Armors."</pre>
                <div>${this.renderVillageArmorShop()}</div>
                ${this.isVillagerMoved('elderMint') ? `<div style="margin: 10px 0;"><button class="action-btn" data-action="talk-villager" data-villager-id="elderMint" style="margin-right:8px;">🧓 Elder Mint — Get Quest</button></div>` : ''}
                <div style="margin-top: 15px;"><button class="action-btn" data-action="village-place" data-place="square">⬅️ Village Square</button></div>
                ${this.renderArtifactHotspots('village-market')}
            </div>
        `;
        const library = `
            <div class="panel" style="position:relative;">
                <h2>📚 Library</h2>
                <pre style="font-family: monospace; margin: 15px 0;">  ________
 [Library]
   /@_@\\
   /|_|\\   "I sell and upgrade Skills."</pre>
                <div>${this.renderVillageSkillShop()}</div>
                ${this.isVillagerMoved('sageFizz') ? `<div style="margin: 10px 0;"><button class="action-btn" data-action="talk-villager" data-villager-id="sageFizz" style="margin-right:8px;">🧙 Sage Fizz — Get Quest</button></div>` : ''}
                <div style="margin-top: 15px;"><button class="action-btn" data-action="village-place" data-place="square">⬅️ Village Square</button></div>
                ${this.renderArtifactHotspots('village-library')}
            </div>
        `;
        const lookout = `
            <div class="panel" style="position:relative;">
                <h2>🔭 Lookout</h2>
                <pre style="font-family: monospace; margin: 15px 0;">    /\\
   /  \\
  [____]
   \\o_o/  "I keep the log."</pre>
                <div id="lookout-log-mount"></div>
                ${this.isVillagerMoved('scoutGum') ? `<div style="margin: 10px 0;"><button class="action-btn" data-action="talk-villager" data-villager-id="scoutGum" style="margin-right:8px;">🧑‍🌾 Scout Gum — Get Quest</button></div>` : ''}
                <div style="margin-top: 15px;"><button class="action-btn" data-action="village-place" data-place="square">⬅️ Village Square</button></div>
                ${this.renderArtifactHotspots('village-lookout')}
            </div>
        `;

        const laboratory = `
            <div class="panel" style="position:relative;">
                <h2>🔬 Laboratory</h2>
                <pre style="font-family: monospace; margin: 15px 0;"> 
****************+++++=============-----------------------------==============++++++++***********####
**++++++**++*+++-+++============-----------------------------------============+++++++***+****=#####
++++++++++++++++++++========--=-----------:-------:-------------------=========+=+++++++*********###
++++++++++++++++++==========---------:-:---===+++++**-::---------------=========+=+++++++********###
+++++===================:--------------:-====::::::+*+*::::::--:----------========+++++++++*=******#
++++===================------------:-:::--=::::::::::****::::::::----------=======+++++++:++*+*****#
+++=========-----====-----------*+++=::-=-..:::.::...:-***===+=+:::----------=======+++++++++******#
++=======---------------------===+++*****:........:-::--***..:=+++=:------:---========++=++++**+***#
++=======-----------------------::::+++*****+...::::.....*##...::***:-----------======++++++++******
+=======----------:::::----:-:--:::...:=+++***#=:.........*#*:::::**:::-:.---:---======-+++++++*****
+=======--------::::::.::::::::::::........+++***#.........###.:::##-:--:------=======+++++-++******
+========---------:::::::::::::::::...........++*****......###=:::##+----=-:--======++++=+++********
+++++=======---------:::::::::::::::............+++**-+#:::####:-##%=========--=++++=+++**********##
**++++++++======-=--------::::::............ .. ...=+****.::###-##%%=++++++++++***********##########
*******+*++++++======-------:::::..............  ....++***#:###+%%%++++++++++*****###########%%%%%%%
####****+*+++++=======--+==-:.................    .....:++***#####:=+##===+++*+****#######%%%%%%%%%%
####*+**++++++=======----***++++++.:++........+=.....:...++****#####%%%--====++++*****######%%%%%%*%
##*****+++++-=======------+**###***************************##########::----=====+++++*****######%%%%
*+****+++++=========-------::::##-.#######%###%#######%%%%%%%%#%%%::::::------=====+++++*****#######
***++++++++===-====-:---.-::::==-.......:...............+%%%%%%%%%%#::----------=====++=+++******###
***++++++++=====-=-----:::..:.===.:....::.........:..:####%:@@@:%%@%------------======++++++*******#
*+++++++========--=---:-:::.:.==.......:::..........###%#=-%%%#::%%@---=:=-===-=======++++++++**+***
*+++++=+=+=======----:-::...::===:......:::.....:.######::-##%+***#==================++++++++++*****
*+++++++=========--------::::::==::...:..:--..***###.:::::###--=-========+=+=+++++++++++++++********
*++++=++========-=-:-----:::::.:=+++:..++*******#......::+##--========+=+++++++++++++++++***********
+++++++==+-========------:-:-:::::-+++*+*****=-.......::**#----==:==+=+++++++++**+++**************##
++++++++=+======-=----------:-::::::::::::::::=====:+++**::-----=====++++++++*****************######
+++++++++++=========------------:::::::::::::::::==+++::::::-----====+++++***********##*############
*++++++++++++=========---------:--:::-::::::::::::::::::::::-----======+++*********#################
*.**+++++++++++=======-------------:::::::::::::::::::::::--------:======+*******#######%%%%%%%%%%%%
                </pre>
                <div style="margin: 15px 0;">
                    <p>🧑‍🔬 <strong>Sweet Scientist</strong> says:</p>
                    ${(() => {
                        if (this.state.timeWarpUnlocked) {
                            return `<p style="margin: 10px 0; font-style: italic;">"Eureka!"</p>`;
                        } else if (this.state.darkModeCandies >= 1000000) {
                            return `<p style="margin: 10px 0; font-style: italic;">"We have enough Dark Energy, I need candies to finish my latest invention"</p>`;
                        } else {
                            return `<p style="margin: 10px 0; font-style: italic;">"We need more Dark Energy..."</p>`;
                        }
                    })()}
                    
                    ${this.state.darkModeEnabled ? `
                    <div style="margin: 10px 0;">
                        <div style="height: 20px; border: 1px solid #ccc; width: 100%; background: #222;">
                            <div id="dark-energy-fill" style="height: 100%; background: #800080; width: 0%"></div>
                        </div>
                        <div id="dark-energy-text" style="font-size: 12px; margin-top: 4px;">0 / 1,000,000 Dark Energy</div>
                    </div>
                    ` : ''}
                    
                    <div style="margin: 10px 0;">
                    ${this.state.darkModeEnabled
                        ? `<button class="action-btn" data-action="lab-light-mode">☀️ Stop this madness</button>`
                        : `<button class="action-btn" data-action="lab-dark-mode">🌙 Harvest power of the sun</button>`
                    }
                    </div>
                    
                    ${(this.state.darkModeCandies >= 1000000 && !this.state.timeWarpUnlocked) ? `
                    <div style="margin: 10px 0;">
                        <button class="action-btn" data-action="help-scientist">Help the Scientist</button>
                    </div>
                    ` : ''}
                    
                    ${this.state.timeWarpUnlocked ? `
                    <div style="margin-top:8px;">
                    ${this.state.timeWarpEnabled
                        ? `<button class="action-btn" data-action="toggle-time-warp">🕰️ Return to Present</button>`
                        : `<button class="action-btn" data-action="toggle-time-warp">⏳ Time Warp</button>`
                    }
                    </div>
                    ` : ''}
                </div>
                <div style="margin-top: 15px;"><button class="action-btn" data-action="village-place" data-place="square">⬅️ Village Square</button></div>
            </div>
        `;

        village.innerHTML = ({
            square,
            townhall: townHall,
            forge,
            market,
            library,
            lookout,
            laboratory
        })[place] || square;

        const logPanel = document.getElementById('log-panel');
        if (logPanel) {
            logPanel.style.display = place === 'lookout' ? 'block' : 'none';
        }
        requestAnimationFrame(() => window.scrollTo(0, _scrollY));
    }

    renderVillageWeaponShop() {
        return WEAPON_DEFS.map(def => {
            const owns = this.state.ownedWeapons.includes(def.id);
            const equipped = this.state.equippedWeapon === def.id;
            const unlocked = this.meetsRequirements(def);
            const level = this.getEquipmentUpgradeLevel(def.id);
            const upCost = level + 1;
            const action = !unlocked ? '' : !owns ? 'buy-weapon' : equipped ? '' : 'equip-weapon';
            const label = !unlocked ? 'LOCKED' : !owns ? 'BUY' : equipped ? 'EQUIPPED' : 'EQUIP';
            const disabled = (!unlocked) || (!owns && !this.canAfford(def)) || equipped;
            return `<div class="upgrade-item">
                <span class="upgrade-name">${def.name}</span>
                <span class="upgrade-cost"> [${level}] ${this.getItemBonusSummary(def)} | ${unlocked ? this.getCostLabel(def) : this.getRequirementText(def)}</span>
                <button class="upgrade-btn" ${disabled ? 'disabled' : ''} data-action="${action}" data-weapon-id="${def.id}">${label}</button>
                <button class="upgrade-btn" ${(owns && this.state.lollipops >= upCost) ? '' : 'disabled'} data-action="upgrade-gear" data-gear-id="${def.id}">UP+ ${upCost}🍭</button>
            </div>`;
        }).join('');
    }

    renderVillageArmorShop() {
        return ARMOR_DEFS.map(def => {
            const owns = this.state.ownedArmors.includes(def.id);
            const equipped = this.state.equippedArmor === def.id;
            const unlocked = this.meetsRequirements(def);
            const level = this.getEquipmentUpgradeLevel(def.id);
            const upCost = level + 1;
            const action = !unlocked ? '' : !owns ? 'buy-armor' : equipped ? '' : 'equip-armor';
            const label = !unlocked ? 'LOCKED' : !owns ? 'BUY' : equipped ? 'EQUIPPED' : 'EQUIP';
            const disabled = (!unlocked) || (!owns && !this.canAfford(def)) || equipped;
            return `<div class="upgrade-item">
                <span class="upgrade-name">${def.name}</span>
                <span class="upgrade-cost"> [${level}] ${this.getItemBonusSummary(def)} | ${unlocked ? this.getCostLabel(def) : this.getRequirementText(def)}</span>
                <button class="upgrade-btn" ${disabled ? 'disabled' : ''} data-action="${action}" data-armor-id="${def.id}">${label}</button>
                <button class="upgrade-btn" ${(owns && this.state.lollipops >= upCost) ? '' : 'disabled'} data-action="upgrade-gear" data-gear-id="${def.id}">UP+ ${upCost}🍭</button>
            </div>`;
        }).join('');
    }

    renderVillageSkillShop() {
        return SKILL_DEFS.map(def => {
            const learned = this.hasSkill(def.id);
            const unlocked = this.meetsRequirements(def);
            const level = this.getSkillUpgradeLevel(def.id);
            const upCost = level + 1;
            const costText = `${this.getCostLabel(def)}${def.active ? ` | use: ${def.useCost}🍬` : ''}`;
            return `<div class="upgrade-item">
                <span class="upgrade-name">${def.name}</span>
                <span class="upgrade-cost"> [${level}] ${def.description} | ${unlocked ? costText : this.getRequirementText(def)}</span>
                <button class="upgrade-btn" ${(!unlocked || learned || !this.canAfford(def)) ? 'disabled' : ''} data-action="learn-skill" data-skill-id="${def.id}">${learned ? 'LEARNED' : 'LEARN'}</button>
                <button class="upgrade-btn" ${(learned && this.state.lollipops >= upCost) ? '' : 'disabled'} data-action="upgrade-skill" data-skill-id="${def.id}">UP+ ${upCost}🍭</button>
            </div>`;
        }).join('');
    }

    refreshCurrentBuildingUI() {
        if (this.state.view !== 'village') return;
        this.buildVillageUI();
    }

    isVillagerMoved(villagerId) {
        return (this.state.villagerQuestCounts?.[villagerId] || 0) >= 3;
    }

    isBuildingUnlocked(place) {
        if (place === 'laboratory') return !!this.state.laboratoryUnlocked;
        const buildingMap = {
            forge:   'smithPop',
            lookout: 'scoutGum',
            library: 'sageFizz',
            market:  'elderMint'
        };
        const vid = buildingMap[place];
        if (!vid) return true; // townhall and square always unlocked
        return this.isVillagerMoved(vid);
    }

    assignVillageQuest(villagerId) {
        const villager = VILLAGERS.find(v => v.id === villagerId);
        if (!villager) return;

        // Only use monsters the player has already unlocked/encountered
        const pool = this.state.unlockedMonsters;
        
        // If no monsters are unlocked, do not generate a quest
        if (pool.length === 0) {
            this.addLog(`${villager.name} has no quests available right now.`);
            return;
        }
        
        const target = pool[Math.floor(Math.random() * pool.length)];
        // Use the monster's actual current level from game state
        const targetLevel = target.level || 1;

        this.state.activeVillageQuest = {
            villagerId,
            villagerName: villager.name,
            targetMonsterId: target.id,
            targetMonsterName: target.name,
            targetLevel
        };

        this.addLog(`${villager.name} asks for ${target.name} at Lv ${targetLevel}.`);
        this.updateUI();
        this.updateView();
        this.doSave();
    }

    maybeCompleteVillageQuest(enemy) {
        const quest = this.state.activeVillageQuest;
        if (!quest || !enemy) return;
        if (enemy.id !== quest.targetMonsterId || enemy.level !== quest.targetLevel) return;

        this.state.lollipops += 1;
        this.addLog(`🍭 Quest complete for ${quest.villagerName}. You gain 1 lollipop.`);

        // Track quest count per villager
        const vid = quest.villagerId;
        this.state.villagerQuestCounts = this.state.villagerQuestCounts || {};
        this.state.villagerQuestCounts[vid] = (this.state.villagerQuestCounts[vid] || 0) + 1;

        // Check if villager just moved (exactly hit 3)
        if (this.state.villagerQuestCounts[vid] === 3) {
            const moveMap = {
                elderMint:  { place: 'market',  label: 'Market 🛒' },
                smithPop:   { place: 'forge',   label: 'Forge 🔥' },
                scoutGum:   { place: 'lookout', label: 'Lookout 🔭' },
                sageFizz:   { place: 'library', label: 'Library 📚' }
            };
            const dest = moveMap[vid];
            if (dest) {
                const villager = VILLAGERS.find(v => v.id === vid);
                this.addLog(`${villager ? villager.emoji + ' ' + villager.name : vid} has moved to the ${dest.label}!`);
            }
        }

        this.state.activeVillageQuest = null;
    }

    applyMonsterRewards(baseReward, context = 'field') {
        let multiplier = this.getCandyDropMultiplier();
        if (context === 'colosseum') {
            multiplier *= this.getColosseumRewardMultiplier();
        }

        const reward = Math.max(1, Math.floor(baseReward * multiplier));
        this.state.candies += reward;
        if (this.state.darkModeEnabled) {
            this.addDarkEnergy(reward);
        }

        const healRatio = this.getHealOnKillRatio();
        if (healRatio > 0) {
            const heal = Math.max(1, Math.floor(this.getEffectiveMaxHp() * healRatio));
            this.state.hp = Math.min(this.getEffectiveMaxHp(), this.state.hp + heal);
            this.addLog(`Sweet armor restores ${heal} HP.`);
        }

        return reward;
    }

    buildForestUI() {
        const forest = document.getElementById('forestView');
        if (!forest) return;
        forest.innerHTML = `
            <div class="panel" style="position:relative;">
                <h2>🌲 Chocolate Bars Forest</h2>
                <div style="white-space: pre-wrap; font-family: monospace; margin: 20px 0; font-size: 12px;">
    ╔════════════════════════════════════════╗
    ║  A once-thriving land of chocolate     ║
    ║  bar trees... now barren and silent.   ║
    ║                                        ║
    ║  Plant trees to restore prosperity.    ║
    ║  Each tree yields chocolate per hour.  ║
    ╚════════════════════════════════════════╝
                </div>
                <div id="forest-content" style="position: relative; height: 300px; border: 1px solid #666; background: #222; margin: 20px 0; overflow: hidden;">
                    <div style="position: absolute; top: 50%; left: 10%; font-size: 20px;">🌳</div>
                    <div style="position: absolute; top: 30%; right: 15%; font-size: 20px;">🌳</div>
                </div>
                <div style="margin: 20px 0;">
                    <p>Trees Planted: <strong id="forest-trees">0</strong></p>
                    <p>Chocolate/Hour: <strong id="forest-rate">0</strong></p>
                    <p>Cost for next tree: <strong id="forest-cost">1000</strong> candies</p>
                </div>
                <div style="margin: 20px 0;">
                    <button class="action-btn" data-action="plant-tree">🌱 Plant Tree</button>
                    <button class="action-btn" data-action="go-map" style="margin-left: 10px;">🗺️ Back to Map</button>
                </div>
                ${this.renderArtifactHotspots('forest')}
            </div>
        `;
    }

    updateView() {
        const mainView = document.getElementById('mainView');
        const mapView = document.getElementById('mapView');
        const forestView = document.getElementById('forestView');
        const villageView = document.getElementById('villageView');
        const museumView = document.getElementById('museumView');
        const colosseumView = document.getElementById('colosseumView');
        const logPanel = document.getElementById('log-panel');

        // Show/hide views based on current view
        mainView.style.display = this.state.view === 'main' ? 'block' : 'none';
        mapView.style.display = this.state.view === 'map' ? 'block' : 'none';
        forestView.style.display = this.state.view === 'forest' ? 'block' : 'none';
        villageView.style.display = this.state.view === 'village' ? 'block' : 'none';
        museumView.style.display = this.state.view === 'museum' ? 'block' : 'none';
        colosseumView.style.display = this.state.view === 'colosseum' ? 'block' : 'none';
        if (logPanel && this.state.view !== 'village') logPanel.style.display = 'none';

        // Build map, forest, or colosseum UI when entering those views
        if (this.state.view === 'map') {
            this.buildMapUI();
        } else if (this.state.view === 'forest') {
            this.buildForestUI();
            this.updateForestDisplay();
            this.renderForest(); // Render trees from state
        } else if (this.state.view === 'village') {
            this.buildVillageUI();
        } else if (this.state.view === 'museum') {
            this.buildMuseumUI();
        } else if (this.state.view === 'colosseum') {
            this.buildColosseumUI();
            this.updateColosseumSpeedOptions();
        }
    }

    updateForestDisplay() {
        const treesEl = document.getElementById('forest-trees');
        const rateEl = document.getElementById('forest-rate');
        const costEl = document.getElementById('forest-cost');

        if (treesEl) treesEl.textContent = this.state.chocolateTrees;
        if (rateEl) rateEl.textContent = this.state.chocolateRate;
        if (costEl) costEl.textContent = Math.floor(1000 * (this.state.chocolateTrees + 1));
    }

    plantTree() {
        const cost = Math.floor(1000 * (this.state.chocolateTrees + 1));
        if (this.state.candies < cost) {
            this.addLog('Not enough candies to plant a tree');
            return;
        }

        this.state.candies -= cost;
        this.state.chocolateTrees += 1;
        this.state.chocolateRate += 1;
        this.addLog(`Planted a chocolate tree! (+1 chocolate/hour)`);

        // Store tree position (state-driven, not DOM)
        this.state.chocolateTreePositions.push({
            x: Math.random(),
            y: Math.random()
        });

        this.updateForestDisplay();
        this.renderForest(); // Re-render forest with new tree
        this.updateUI();
        this.doSave();
    }

    renderForest() {
        const forestView = document.getElementById('forestView');
        if (!forestView) return;

        // Clear old trees (keep other content)
        forestView.querySelectorAll('.forest-tree').forEach(el => el.remove());

        // Render trees from state
        this.state.chocolateTreePositions.forEach(pos => {
            const el = document.createElement('div');
            el.className = 'forest-tree';
            el.textContent = '🍫';
            el.style.position = 'absolute';
            el.style.left = (pos.x * 85) + '%';
            el.style.top = (pos.y * 70) + '%';
            el.style.fontSize = '24px';
            forestView.appendChild(el);
        });
    }

    buildColosseumUI() {
        const view = document.getElementById('colosseumView');
        if (!view) return;
        view.innerHTML = `
            <div class="panel">
                <h2>🏟️ Candy Colosseum</h2>
                <p style="text-align: center; margin: 10px 0;">Survive continuous waves of monsters!</p>
                <div style="text-align: center; margin: 20px 0;">
                    <div style="font-size: 32px; margin: 10px 0;" id="colosseum-enemy-emoji">👾</div>
                    <div style="font-weight: bold; margin: 10px 0;" id="colosseum-enemy-name">Arena Champion</div>
                    <div style="margin: 10px 0;" id="colosseum-enemy-hp">HP: [██████████] 100/100</div>
                </div>
                <div style="text-align: center; margin: 20px 0;">
                    <div>Player HP: <strong id="colosseum-player-hp">100/100</strong></div>
                    <div>Survival Time: <strong id="colosseum-time">0.0s</strong></div>
                    <div>Best Time: <strong id="colosseum-best-time">0.0s</strong></div>
                    <div>Chocolate: <strong id="colosseum-chocolate">0</strong></div>
                </div>
                <div style="text-align: center; margin: 20px 0;">
                    <label>Speed: </label>
                    <select id="colosseumSpeedSelect" style="padding: 5px; margin: 0 10px;">
                        <option value="1">x1</option>
                    </select>
                </div>
                <div style="text-align: center; margin: 20px 0;">
                    <button class="action-btn" data-action="start-colosseum">▶️ Start</button>
                    <button class="action-btn" data-action="stop-colosseum" style="margin-left: 5px;">⏹️ Stop</button>
                </div>
                <div id="buffChoices" style="margin: 20px 0; padding: 15px; border: 2px solid #ffd700; display: none; border-radius: 5px;">
                    <strong style="display: block; margin-bottom: 10px;">⭐ Reward Unlocked - Choose One:</strong>
                    <div id="buffChoiceButtons"></div>
                </div>
                <div id="colosseum-buffs-display" style="margin: 20px 0; border: 1px solid #ccc; padding: 10px;">
                    <strong>Active Buffs:</strong>
                    <div id="colosseum-buffs-list" style="margin-top: 8px; font-size: 12px;">
                        (none active)
                    </div>
                </div>
                <div style="text-align: center; margin: 20px 0;">
                    <button class="action-btn" data-action="go-map">🗺️ Exit Colosseum</button>
                </div>
                ${this.renderArtifactHotspots('colosseum')}
            </div>
        `;
        this.updateColosseumUI();
    }

    startColosseum() {
        this.state.inColosseum = true;
        this.state.colosseumSurvivalTime = 0;
        this.buildColosseumUI();
        this.spawnColosseumMonster();

        // Setup speed change listener
        const speedSelect = document.getElementById('colosseumSpeedSelect');
        if (speedSelect) {
            speedSelect.onchange = (e) => {
                const newSpeed = parseInt(e.target.value);
                this.state.colosseumSpeed = newSpeed;
                // Restart combat loop with new speed if running
                if (this.state.colosseumRunning) {
                    if (this.colosseumInterval) clearInterval(this.colosseumInterval);
                    const tickRate = this.getColosseumTickMs(this.state.colosseumSpeed);
                    this.colosseumInterval = setInterval(() => this.colosseumTick(), tickRate);
                }
                this.addLog('Speed changed to x' + newSpeed);
            };
        }

        this.addLog('🏟️ Entered the Colosseum. Click Start to begin!');
    }

    spawnColosseumMonster() {
        const unlocked = [...this.state.unlockedMonsters];
        if (unlocked.length === 0) return;
        unlocked.sort((a, b) => {
            if ((a.level || 0) !== (b.level || 0)) return (a.level || 0) - (b.level || 0);
            const aBase = this.monsters.find(m => m.id === a.id);
            const bBase = this.monsters.find(m => m.id === b.id);
            const aScore = (aBase?.attack || 0) + (aBase?.hp || 0);
            const bScore = (bBase?.attack || 0) + (bBase?.hp || 0);
            if (aScore !== bScore) return aScore - bScore;
            return a.id - b.id;
        });

        const unl = unlocked[0];
        const baseM = this.monsters.find(m => m.id === unl.id);
        if (!baseM) return;

        const m = { ...baseM };
        m.level = unl.level;
        m.hp = Math.floor(baseM.hp * (1 + 0.2 * (unl.level - 1)));
        m.attack = Math.floor(baseM.attack * (1 + 0.15 * (unl.level - 1)));
        m.reward = Math.floor(baseM.reward * (1 + 0.25 * (unl.level - 1)));

        this.state.enemy = {
            id: m.id,
            name: m.name,
            emoji: m.emoji || '👾',
            hp: m.hp,
            maxHp: m.hp,
            attack: m.attack,
            reward: m.reward,
            ascii: m.ascii,
            level: m.level
        };
        this.resetCombatFlags();
    }

    colosseumTick() {
        if (!this.state.colosseumRunning || !this.state.inColosseum) return;

        const tickSeconds = this.getColosseumTickMs(this.state.colosseumSpeed) / 1000;
        this.state.colosseumSurvivalTime += tickSeconds;
        this.state.colosseumTimeBySpeed[this.state.colosseumSpeed] = (this.state.colosseumTimeBySpeed[this.state.colosseumSpeed] || 0) + tickSeconds;
        this.maybeUnlockNextColosseumSpeed();

        // Apply colosseum buffs to player attack
        const buffs = applyColosseumBuffs(this.state);
        const dmg = Math.max(1, Math.floor(this.calculatePlayerDamage(buffs.attackMultiplier)));
        this.state.enemy.hp -= dmg;

        if (this.state.enemy.hp <= 0) {
            this.winColosseumCombat();
        } else {
            // Enemy counter-attack (reduced by speed)
            const enemyDmg = Math.max(1, Math.floor((this.state.enemy.attack + (Math.random() < 0.5 ? 1 : 0)) / this.state.colosseumSpeed));
            this.takeEnemyHit(enemyDmg, this.state.enemy.name, () => this.loseColosseum());
        }

        this.updateColosseumUI();
    }

    maybeUnlockNextColosseumSpeed() {
        for (let speed = 1; speed < 100; speed++) {
            const next = speed + 1;
            if (this.state.colosseumUnlockedSpeeds.includes(next)) continue;
            const required = 10;
            const spent = this.state.colosseumTimeBySpeed[speed] || 0;
            if (spent >= required) {
                this.state.colosseumUnlockedSpeeds.push(next);
                this.addLog(`⚡ Speed x${next} unlocked after ${required}s at x${speed}.`);
            }
        }
        this.updateColosseumSpeedOptions();
    }

    winColosseumCombat() {
        const defeatedEnemy = { ...this.state.enemy };
        const r = this.applyMonsterRewards(defeatedEnemy.reward, 'colosseum');
        this.maybeCompleteVillageQuest(defeatedEnemy);

        // Level up monster
        const ex = this.state.unlockedMonsters.find(m => m.id === defeatedEnemy.id);
        if (ex) {
            ex.level += 1;
        }
        this.addLog(`Arena victory: +${r} candies at x${this.state.colosseumSpeed}.`);

        // Spawn next monster after delay
        setTimeout(() => {
            if (this.state.inColosseum) {
                this.spawnColosseumMonster();
                this.updateColosseumUI();
            }
        }, 250);
    }

    loseColosseum() {
        this.state.inColosseum = false;
        if (this.colosseumInterval) clearInterval(this.colosseumInterval);
        this.state.hp = this.getEffectiveMaxHp();
        // Death penalty: lose all candies
        this.state.candies = 0;
        this.addLog(`💀 Fell in the Colosseum after ${this.state.colosseumSurvivalTime.toFixed(1)}s - Lost all candies!`);

        // Reset combat state
        this.state.colosseumRunning = false;
        this.state.colosseumCurrentTime = 0;

        // Allow next run to require payment again
        this.state.colosseumSessionPaid = false;

        this.checkSecretBuffs();
        this.state.view = 'main';
        this.updateView();
        this.updateUI();
        this.doSave();
    }

stopColosseumCombat() {
    if (this.state.colosseumRunning) {
        this.state.colosseumRunning = false;
        if (this.colosseumInterval) clearInterval(this.colosseumInterval);
        this.addLog(`⏹️ Stopped at ${this.state.colosseumCurrentTime.toFixed(1)}s`);
        this.state.colosseumCurrentTime = 0;
        this.state.colosseumSurvivalTime = 0;
        this.updateColosseumUI();
    }
}

    updateColosseumUI() {
        if (!this.state.inColosseum || !this.state.enemy) return;

        const NameEl = document.getElementById('colosseum-enemy-name');
        const emojiEl = document.getElementById('colosseum-enemy-emoji');
        const hpEl = document.getElementById('colosseum-enemy-hp');
        const playerHpEl = document.getElementById('colosseum-player-hp');
        const timeEl = document.getElementById('colosseum-time');
        const bestTimeEl = document.getElementById('colosseum-best-time');
        const chocolateEl = document.getElementById('colosseum-chocolate');
        const buffsListEl = document.getElementById('colosseum-buffs-list');
        const choicesDiv = document.getElementById('buffChoices');
        const buttonsDiv = document.getElementById('buffChoiceButtons');

        if (NameEl) NameEl.textContent = this.state.enemy.name + ' (Lv' + this.state.enemy.level + ')';
        if (emojiEl) emojiEl.textContent = this.state.enemy.emoji;
        if (hpEl) {
            const p = Math.max(0, Math.floor((this.state.enemy.hp / this.state.enemy.maxHp) * 10));
            hpEl.innerHTML = `HP: [${`█`.repeat(p)}${`░`.repeat(10 - p)}] ${Math.max(0, Math.floor(this.state.enemy.hp))}/${this.state.enemy.maxHp}`;
        }
        if (playerHpEl) playerHpEl.textContent = Math.floor(this.state.hp) + '/' + this.getEffectiveMaxHp();
        if (timeEl) timeEl.textContent = this.state.colosseumSurvivalTime.toFixed(1) + 's';
        if (bestTimeEl) bestTimeEl.textContent = this.state.colosseumBestTime.toFixed(1) + 's';
        if (chocolateEl) chocolateEl.textContent = Math.floor(this.state.chocolate);

        // Update buff choice buttons
        if (this.state.pendingBuffChoice && buttonsDiv && choicesDiv) {
            choicesDiv.style.display = 'block';
            buttonsDiv.innerHTML = '';
            this.state.pendingBuffChoice.forEach(buff => {
                const btn = document.createElement('button');
                btn.className = 'action-btn';
                btn.dataset.action = 'choose-buff';
                btn.dataset.id = buff.id;
                btn.style.display = 'block';
                btn.style.marginBottom = '8px';
                btn.style.width = '100%';
                btn.textContent = `${buff.label} (Effect: ${buff.effect})`;
                buttonsDiv.appendChild(btn);
            });
        } else if (choicesDiv) {
            choicesDiv.style.display = 'none';
        }

        // Update buff display
        if (buffsListEl) {
            let buffHtml = '';
            let activeCount = 0;
            const allBuffs = [...COLOSSEUM_BUFFS, ...BUFF_POOL, ...SECRET_BUFFS];

            for (const [id, data] of Object.entries(this.state.colosseumBuffs)) {
                const buffDef = allBuffs.find(b => b.id === id);
                if (buffDef && data?.level) {
                    const romanNumerals = ['I', 'II', 'III', 'IV', 'V'];
                    const roman = romanNumerals[Math.min(data.level - 1, 4)];
                    buffHtml += `<div>⭐ ${buffDef.label} ${roman}</div>`;
                    activeCount++;
                }
            }
            buffsListEl.innerHTML = activeCount > 0 ? buffHtml : '(none active)';
        }

        // Lock Exit button while a Colosseum run is active
        const exitBtn = document.querySelector('#colosseumView [data-action="go-main"]');
        if (exitBtn) {
            const running = !!this.state.colosseumRunning;
            exitBtn.disabled = running;
            exitBtn.style.opacity = running ? '0.4' : '';
            exitBtn.style.cursor = running ? 'not-allowed' : '';
        }
    }

    updateColosseumSpeedOptions() {
        const select = document.getElementById('colosseumSpeedSelect');
        if (!select) return;

        select.innerHTML = '';
        const unlocked = [...this.state.colosseumUnlockedSpeeds].sort((a, b) => a - b);
        for (let speed of unlocked) {
            const opt = document.createElement('option');
            opt.value = speed;
            opt.textContent = 'x' + speed;
            select.appendChild(opt);
        }
        select.value = this.state.colosseumSpeed;
    }

    rebuildMonsterDropdown() {
        const select = document.getElementById('monster-select');
        if (!select) return;
        while (select.options.length > 1) select.remove(1);
        const sorted = [...this.state.unlockedMonsters].sort((a, b) => a.id - b.id);
        for (let m of sorted) {
            const opt = document.createElement('option');
            opt.value = m.id;
            opt.textContent = `#${m.id} ${m.name} (Lv ${m.level})`;
            select.appendChild(opt);
        }
    }

    addLog(text) {
        const container = document.getElementById('game-log');
        if (!container) return;
        const entry = document.createElement('div');
        entry.className = 'log-entry';
        entry.textContent = `[${new Date().toLocaleTimeString()}] ${text}`;
        container.appendChild(entry);
        while (container.children.length > 20) {
            container.removeChild(container.firstChild);
        }
        container.parentElement.scrollTop = container.parentElement.scrollHeight;
    }

    tick() {
        this.ensureStateShape();
        const now = Date.now();
        const deltaTime = (now - this.lastUpdate) / 1000;
        this.lastUpdate = now;

        // Apply colosseum buffs for stat multipliers
        const buffs = applyColosseumBuffs(this.state);

        // Candy generation with buff multiplier
        const candyGained = (this.state.candyRate + this.getArtifactBonusTotal('candyRate')) * buffs.candyMultiplier * deltaTime;
        this.state.candies += candyGained;
        if (this.state.darkModeEnabled) {
            this.addDarkEnergy(candyGained);
        }
        this.state.chocolate += (this.state.chocolateRate + this.getArtifactBonusTotal('chocolateRate')) * (deltaTime / 3600); // per hour
        this.state.lollipops += this.getArtifactBonusTotal('lollipopRate') * deltaTime;

        // HP regen paused during field combat or active Colosseum run
        if (!this.state.inCombat && !this.state.colosseumRunning) {
            this.state.hp += this.getEffectiveRegen() * buffs.regenMultiplier * deltaTime;
            if (this.state.hp > this.getEffectiveMaxHp()) {
                this.state.hp = this.getEffectiveMaxHp();
            }
        }

        // Track colosseum time only when running
        if (this.state.colosseumRunning) {
            this.state.colosseumCurrentTime += deltaTime;
        }
    }

    updateUI() {
        this.ensureStateShape();
        this.clampHp();
        const u = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
        u('candy-count', Math.floor(this.state.candies));
        u('total-eaten', Math.floor(this.state.totalCandiesEaten));
        u('candy-rate', (this.state.candyRate + this.getArtifactBonusTotal('candyRate')).toFixed(1));
        u('chocolate-count', Math.floor(this.state.chocolate));
        u('chocolate-rate', (this.state.chocolateRate + this.getArtifactBonusTotal('chocolateRate')).toFixed(1));
        u('lollipop-count', Math.floor(this.state.lollipops));
        u('attack-value', this.getEffectiveAttack());
        u('hp-current', Math.floor(this.state.hp));
        u('hp-max', this.getEffectiveMaxHp());
        const percent = Math.max(0, Math.floor((this.state.hp / this.getEffectiveMaxHp()) * 10));
        document.getElementById('hp-bar').textContent = '[' + '█'.repeat(percent) + '░'.repeat(10 - percent) + ']';

        console.log("[updateUI] HP Display:", {
            hp: Math.floor(this.state.hp),
            maxHp: this.getEffectiveMaxHp(),
            hpPercent: percent
        });

        if (this.state.inCombat && this.state.enemy) {
            const d = document.getElementById('combat-display');
            if (d) d.style.display = 'block';
            const a = document.getElementById('enemy-ascii');
            if (a) a.textContent = this.state.enemy.ascii;
            const n = document.getElementById('enemy-name');
            if (n) n.textContent = `${this.state.enemy.emoji} ${this.state.enemy.name} (Lv${this.state.enemy.level})`;
            const h = document.getElementById('enemy-hp');
            if (h) {
                const p = Math.max(0, Math.floor((this.state.enemy.hp / this.state.enemy.maxHp) * 10));
                h.textContent = `HP: [${`█`.repeat(p)}${`░`.repeat(10 - p)}] ${this.state.enemy.hp}/${this.state.enemy.maxHp}`;
            }
        } else {
        const d = document.getElementById('combat-display');
        if (d) d.style.display = 'none';
        }

        const c = document.getElementById('action-buttons');
        if (c) {
            if (this.state.inCombat && this.state.enemy) {
                if (!c.querySelector('[data-action="attack"]')) {
                    c.innerHTML = '<button class="action-btn" data-action="attack">⚔️ Attack</button>';
                }
            } else if (this.state.hp <= 0) {
                c.innerHTML = '<div style="color: red;">Dead - Recovering...</div>';
            } else {
                const buttons = '<button class="action-btn" data-action="explore">🔍 Explore</button>';
                if (!c.querySelector('[data-action="explore"]')) {
                    c.innerHTML = buttons;
                }
            }
        }

        const m = document.getElementById('monster-select-panel');
        if (m) {
            m.style.display = (!this.state.inCombat && this.state.hp > 0 && this.state.unlockedMonsters.length > 0) ? 'block' : 'none';
        }

            const inFight = !!(this.state.inCombat && this.state.enemy);

        // Disable Eat Candy and Map buttons during combat
        const eatBtn = document.querySelector('[data-action="eat"]');
        const mapBtn = document.querySelector('[data-action="go-map"]');
        if (eatBtn) {
            eatBtn.disabled = inFight;
            eatBtn.style.opacity = inFight ? '0.4' : '';
            eatBtn.style.cursor = inFight ? 'not-allowed' : '';
        }
        if (mapBtn) {
            mapBtn.disabled = inFight;
            mapBtn.style.opacity = inFight ? '0.4' : '';
            mapBtn.style.cursor = inFight ? 'not-allowed' : '';
        }

        const defs = [
            { key: 'candy', baseCost: 10 },
            { key: 'attack', baseCost: 15 },
            { key: 'regen', baseCost: 20 }
        ];
        for (let d of defs) {
            const btn = document.getElementById(`buy-${d.key}`);
            const cost = document.getElementById(`upgrade-cost-${d.key}`);
            if (btn && cost) {
                const lv = this.state.upgradesPurchased[d.key];
                const c = getUpgradeCost(d.key, lv);
                cost.textContent = ` (Lv ${lv} → ${lv + 1}) - ${c}`;
                btn.disabled = inFight || this.state.candies < c;
            }
        }

        const sp = document.getElementById('spells-panel');
        if (sp) {
            const hasCombatArts = this.state.spellsUnlocked || SKILL_DEFS.some(def => def.active && this.hasSkill(def.id));
            sp.style.display = (hasCombatArts && this.state.inCombat) ? 'block' : 'none';
        }

        const inv = document.getElementById('inventory-items');
        if (inv) {
            const upgs = {
              'candy': { name: 'Sugar Engine', emoji: '⚙️' },
                'attack': { name: 'Sweet Strength', emoji: '⚔️' },
                'regen': { name: 'Candy Metabolism', emoji: '❤️' }
            };
            let h = '';
            for (let k in upgs) {
                const lv = this.state.upgradesPurchased[k];
                if (lv > 0) h += `<div class="inventory-item">${upgs[k].emoji} ${upgs[k].name} +${lv}</div>`;
            }
            if (this.state.spellsUnlocked) h += `<div class="inventory-item">✨ Spells Unlocked</div>`;
            if (this.state.activeVillageQuest) h += `<div class="inventory-item">📜 ${this.state.activeVillageQuest.targetMonsterName} Lv${this.state.activeVillageQuest.targetLevel}</div>`;
            if (this.getWeaponDef()) h += `<div class="inventory-item">🗡️ ${this.getWeaponDef().name} +${this.getEquipmentUpgradeLevel(this.getWeaponDef().id)}</div>`;
            if (this.getArmorDef()) h += `<div class="inventory-item">🛡️ ${this.getArmorDef().name} +${this.getEquipmentUpgradeLevel(this.getArmorDef().id)}</div>`;
            for (const skillId of this.state.learnedSkills) {
                const skill = SKILL_DEFS.find(def => def.id === skillId);
                if (skill) h += `<div class="inventory-item">✦ ${skill.name} +${this.getSkillUpgradeLevel(skill.id)}</div>`;
            }
            const foundArtifacts = Object.keys(this.state.artifactsFound).length;
            if (foundArtifacts > 0) h += `<div class="inventory-item">🏛️ Artifacts Found ${foundArtifacts}/20</div>`;

            // Show active colosseum buffs
            const allBuffs = [...COLOSSEUM_BUFFS, ...BUFF_POOL, ...SECRET_BUFFS];
            const romanNumerals = ['I', 'II', 'III', 'IV', 'V'];

            for (const [id, data] of Object.entries(this.state.colosseumBuffs)) {
                const buffDef = allBuffs.find(b => b.id === id);
                if (buffDef && data?.level) {
                    const roman = romanNumerals[Math.min(data.level - 1, 4)];
                    h += `<div class="inventory-item">⭐ ${buffDef.label} ${roman}</div>`;
                }
            }

            inv.innerHTML = h || '(empty)';
        }

        const hiddenArsenal = document.getElementById('arsenal-panel');
        const hiddenAcademy = document.getElementById('academy-panel');
        if (hiddenArsenal) hiddenArsenal.style.display = 'none';
        if (hiddenAcademy) hiddenAcademy.style.display = 'none';

        // Always show active quest in status panel
        const questEl = document.getElementById('active-quest-display');
        if (questEl) {
            const q = this.state.activeVillageQuest;
            questEl.textContent = q ? `${q.targetMonsterName} Lv${q.targetLevel} for ${q.villagerName}` : 'none';
        }
    }

    eatCandy() {
        console.log("[eatCandy] TRIGGERED - Initial state:", {
            candies: this.state.candies,
            maxHp: this.state.maxHp,
            hp: this.state.hp
        });

        if (this.state.candies <= 0) {
            this.addLog('No candy to eat!');
            console.log("[eatCandy] Not enough candies");
            return;
        }

        let maxHpGained = 0;

        // Convert candies into MAX HP (primary progression)
        console.log("[eatCandy] Starting conversion loop...");
        while (this.state.candies > 0) {
            const cost = getCandyCostPerHp(this.state.maxHp);
            console.log("[eatCandy] Loop - candies:", this.state.candies, "cost:", cost, "maxHp:", this.state.maxHp);

            if (this.state.candies < cost) {
                console.log("[eatCandy] Not enough candies for next level");
                break;
            }

            this.state.candies -= cost;
            this.state.totalCandiesEaten += cost;
            this.state.maxHp += 1;
            maxHpGained += 1;

            console.log("[eatCandy] Converted 1 level - new maxHp:", this.state.maxHp, "candies left:", this.state.candies);
        }

        console.log("[eatCandy] Loop complete - gained:", maxHpGained, "final state:", {
            candiesLeft: this.state.candies,
            gainedMaxHp: maxHpGained,
            newMaxHp: this.state.maxHp
        });

        if (maxHpGained > 0) {
            // Small heal effect - restore some current HP too
            this.state.hp = Math.min(this.state.hp + maxHpGained, this.getEffectiveMaxHp());
            this.addLog(`You converted candies into +${maxHpGained} max HP`);

            // Spell unlock threshold based on maxHp
            if (this.state.maxHp >= 500 && !this.state.spellsUnlocked) {
                this.state.spellsUnlocked = true;
                this.buildSpells();
                this.addLog('Spells unlocked!');
            }
        } else {
            this.addLog('Not enough candies to gain max HP');
        }

        console.log("[eatCandy] Calling updateUI() and doSave()...");
        this.updateUI();
        this.doSave();
        console.log("[eatCandy] Complete - Final maxHp:", this.state.maxHp);
    }

    explore() {
        if (this.state.inCombat || this.state.hp <= 0) return;
        const roll = Math.random() * 100;
        if (roll < 50) {
        const g = 1 + Math.floor(Math.random() * 5);
        this.state.candies += g;
        if (this.state.darkModeEnabled) {
            this.addDarkEnergy(g);
        }
        this.addLog(`Found ${g} candies`);
        } else if (roll < 85) {
            this.spawnRandomMonster();
            this.updateUI();
            this.doSave();
            return;
        } else if (roll < 95) {
        const g = 100 + Math.floor(Math.random() * 101);
        this.state.candies += g;
        if (this.state.darkModeEnabled) {
            this.addDarkEnergy(g);
        }
        this.addLog(`Lucky! Found ${g}`);
        } else {
        const g = 1000 + Math.floor(Math.random() * 1001);
        this.state.candies += g;
        if (this.state.darkModeEnabled) {
            this.addDarkEnergy(g);
        }
        this.addLog(`JACKPOT! Found ${g}`);
        }
        this.updateUI();
        this.doSave();
    }

    spawnRandomMonster() {
        const tiers = Array.from({length: this.state.maxUnlockedTier}, (_, i) => i + 1);
        const tier = tiers[Math.floor(Math.random() * tiers.length)];
        const inTier = this.monsters.filter(m => m.tier === tier);
        const baseM = inTier[Math.floor(Math.random() * inTier.length)];
        const unl = this.state.unlockedMonsters.find(m => m.id === baseM.id);
        const m = { ...baseM };
        if (unl) {
            m.level = unl.level;
            m.hp = Math.floor(baseM.hp * (1 + 0.2 * (unl.level - 1)));
            m.attack = Math.floor(baseM.attack * (1 + 0.15 * (unl.level - 1)));
            m.reward = Math.floor(baseM.reward * (1 + 0.25 * (unl.level - 1)));
        } else {
            m.level = 1;
        }
        this.startCombat(m);
    }

    startCombat(m) {
        this.state.enemy = {
            id: m.id,
            name: m.name,
            emoji: m.emoji || '👾',
            hp: m.hp,
            maxHp: m.hp,
            attack: m.attack,
            reward: m.reward,
            ascii: m.ascii,
            level: m.level || 1
        };
        this.state.inCombat = true;
        this.resetCombatFlags();
        this.addLog(`${m.emoji || '👾'} ${m.name} (Lv${m.level || 1}) appears!`);
    }

    fightSelectedMonster() {
        const sel = document.getElementById('monster-select');
        if (!sel || !sel.value) return;
        const id = parseInt(sel.value);
        const baseM = this.monsters.find(m => m.id === id);
        if (!baseM) return;
        const unl = this.state.unlockedMonsters.find(m => m.id === id);
        const m = { ...baseM };
        if (unl) {
            m.level = unl.level;
            m.hp = Math.floor(baseM.hp * (1 + 0.2 * (unl.level - 1)));
            m.attack = Math.floor(baseM.attack * (1 + 0.15 * (unl.level - 1)));
            m.reward = Math.floor(baseM.reward * (1 + 0.25 * (unl.level - 1)));
        }
        this.startCombat(m);
        this.updateUI();
    }

    playerAttack() {
        if (!this.state.inCombat || !this.state.enemy) return;
        const dmg = this.calculatePlayerDamage();
        this.state.enemy.hp -= dmg;
        this.addLog(`Attack! ${dmg} dmg`);
        if (this.state.enemy.hp <= 0) {
            this.winCombat();
        } else {
            setTimeout(() => this.enemyAttack(), 600);
        }
        this.updateUI();
    }

    castSpell(key) {
        if (!this.state.inCombat || !this.state.enemy) return;
        const spells = {
            'fire': { cost: 50, effect: () => { const d = 30 + Math.floor(Math.random() * 21); this.state.enemy.hp -= d; this.addLog(`Fire! ${d} dmg`); }},
            'heal': { cost: 100, effect: () => { this.state.hp = Math.min(this.state.hp + 50, this.getEffectiveMaxHp()); this.addLog(`Heal +50`); }},
            'storm': { cost: 300, effect: () => { const d = 80 + Math.floor(Math.random() * 41); this.state.enemy.hp -= d; this.addLog(`Storm! ${d} dmg`); }}
        };
        const s = spells[key];
        if (!s || this.state.candies < s.cost) return;
        this.state.candies -= s.cost;
        const beforeHp = this.state.enemy.hp;
        s.effect();
        if (this.state.enemy.hp < beforeHp) {
            const extra = Math.floor((beforeHp - this.state.enemy.hp) * (this.getSkillDamageMultiplier() - 1));
            if (extra > 0) {
                this.state.enemy.hp -= extra;
                this.addLog(`Gear amplifies the spell for +${extra} dmg`);
            }
        }
        if (this.state.enemy.hp <= 0) {
            this.winCombat();
        } else {
            setTimeout(() => this.enemyAttack(), 600);
        }
        this.updateUI();
        this.doSave();
    }

    useSkill(key) {
        if (!this.state.inCombat || !this.state.enemy || !this.hasSkill(key)) return;
        const skill = SKILL_DEFS.find(def => def.id === key && def.active);
        if (!skill || this.state.candies < skill.useCost) return;

        this.state.candies -= skill.useCost;
        const skillMultiplier = this.getSkillDamageMultiplier();

        if (key === 'stasisHex') {
            this.state.combatFlags.enemyStaggered = true;
            this.addLog('Stasis Hex locks the enemy in place.');
        } else if (key === 'novaPulse') {
            const damage = Math.floor((45 + this.getEffectiveMaxHp() * 0.35) * skillMultiplier * (1 + this.getSkillUpgradeLevel('novaPulse') * 0.2));
            this.state.enemy.hp -= damage;
            this.addLog(`Nova Pulse! ${damage} dmg`);
        }

        if (this.state.enemy.hp <= 0) {
            this.winCombat();
        } else {
            setTimeout(() => this.enemyAttack(), 600);
        }

        this.updateUI();
        this.doSave();
    }

    enemyAttack() {
        if (!this.state.inCombat || !this.state.enemy) return;
        const dmg = this.state.enemy.attack + (Math.random() < 0.5 ? 1 : 0);
        this.takeEnemyHit(dmg, this.state.enemy.name, () => this.loseCombat());
        this.updateUI();
    }

    winCombat() {
        const defeatedEnemy = { ...this.state.enemy };
        const r = this.applyMonsterRewards(defeatedEnemy.reward, 'field');
        this.maybeCompleteVillageQuest(defeatedEnemy);
        const ex = this.state.unlockedMonsters.find(m => m.id === defeatedEnemy.id);
        if (ex) {
            ex.level += 1;
        } else {
            this.state.unlockedMonsters.push({
                id: defeatedEnemy.id,
                name: defeatedEnemy.name,
                level: 1
            });
        }
        this.rebuildMonsterDropdown();
        const wins = this.state.unlockedMonsters.filter(m => {
            const mon = this.monsters.find(x => x.id === m.id);
            return mon && mon.tier <= this.state.maxUnlockedTier;
        }).length;
        if (wins >= 2 && this.state.maxUnlockedTier < 10) {
            this.state.maxUnlockedTier += 1;
            this.addLog(`Tier ${this.state.maxUnlockedTier} unlocked`);
        }
        this.addLog(`Defeated ${defeatedEnemy.name} (Lv${defeatedEnemy.level}) +${r} candies`);

        // Unlock forest if enemy level >= 10
        if (defeatedEnemy.level >= 10 && !this.state.forestUnlocked) {
            this.state.forestUnlocked = true;
            this.addLog('You discovered the Chocolate Bars Forest...');
            this.updateUI(); // IMMEDIATE UPDATE
            this.updateView(); // UPDATE NAVIGATION
        }

        // Check colosseum unlock
        this.checkColosseumUnlock();

        this.state.inCombat = false;
        this.state.enemy = null;
        this.doSave();
    }

    loseCombat() {
        this.addLog(`Defeated and lost all candies`);
        this.state.candies = 0;
        this.state.inCombat = false;
        this.state.enemy = null;
        this.doSave();
    }

    buyUpgrade(key) {
        const lv = this.state.upgradesPurchased[key] || 0;
        const cost = getUpgradeCost(key, lv);
        if (this.state.candies < cost) {
            this.addLog('Not enough candies');
            return;
        }
        this.state.candies -= cost;
        this.state.upgradesPurchased[key] = lv + 1;
        const fns = {
            'candy': () => this.state.candyRate += 1,
            'attack': () => this.state.attack += 2,
            'regen': () => this.state.regenRate += 0.5
        };
        if (fns[key]) fns[key]();
        const names = { 'candy': 'Sugar Engine', 'attack': 'Sweet Strength', 'regen': 'Candy Metabolism' };
        this.addLog(`Bought ${names[key]} (Lv${lv + 1})`);
        this.checkSweetVillageUnlock();
        this.updateUI();
        this.doSave();
    }

    upgradeGear(id) {
        const owns = this.state.ownedWeapons.includes(id) || this.state.ownedArmors.includes(id);
        const cost = this.getEquipmentUpgradeLevel(id) + 1;
        if (!owns || this.state.lollipops < cost) {
            this.addLog('You need enough lollipops and owned gear to upgrade it.');
            return;
        }
        const gear = this.getWeaponDef(id) || this.getArmorDef(id);
        this.state.lollipops -= cost;
        this.state.equipmentUpgrades[id] = (this.state.equipmentUpgrades[id] || 0) + 1;
        this.addLog(`🍭 ${gear ? gear.name : id} upgraded to +${this.state.equipmentUpgrades[id]}.`);
        this.updateUI();
        this.doSave();
    }

    upgradeSkill(id) {
        if (!this.hasSkill(id)) {
            this.addLog('Learn the skill before upgrading it.');
            return;
        }
        const cost = this.getSkillUpgradeCost(id);
        if (this.state.lollipops < cost) {
            this.addLog('Not enough lollipops to upgrade that skill.');
            return;
        }
        const skill = SKILL_DEFS.find(def => def.id === id);
        this.state.lollipops -= cost;
        this.state.equipmentUpgrades[id] = this.getSkillUpgradeLevel(id) + 1;
        this.buildSpells();
        this.addLog(`🍭 ${skill ? skill.name : id} improved to +${this.getSkillUpgradeLevel(id)}.`);
        this.updateUI();
        this.doSave();
    }

    buyWeapon(id) {
        const def = WEAPON_DEFS.find(item => item.id === id);
        if (!def || !this.meetsRequirements(def) || !this.canAfford(def)) {
            this.addLog('You cannot forge that weapon yet.');
            return;
        }
        this.spendCost(def);
        this.state.ownedWeapons.push(def.id);
        this.state.equippedWeapon = def.id;
        this.addLog(`Forged ${def.name}.`);
        this.updateUI();
        this.doSave();
    }

    equipWeapon(id) {
        if (!this.state.ownedWeapons.includes(id)) return;
        const weapon = this.getWeaponDef(id);
        if (!weapon) return;
        this.state.equippedWeapon = id;
        this.addLog(`Equipped ${weapon.name}.`);
        this.updateUI();
        this.doSave();
    }

    buyArmor(id) {
        const def = ARMOR_DEFS.find(item => item.id === id);
        if (!def || !this.meetsRequirements(def) || !this.canAfford(def)) {
            this.addLog('You cannot wear that armor yet.');
            return;
        }
        this.spendCost(def);
        this.state.ownedArmors.push(def.id);
        this.state.equippedArmor = def.id;
        this.clampHp();
        this.addLog(`Forged ${def.name}.`);
        this.updateUI();
        this.doSave();
    }

    equipArmor(id) {
        if (!this.state.ownedArmors.includes(id)) return;
        const armor = this.getArmorDef(id);
        if (!armor) return;
        this.state.equippedArmor = id;
        this.clampHp();
        this.addLog(`Equipped ${armor.name}.`);
        this.updateUI();
        this.doSave();
    }

    learnSkill(id) {
        const def = SKILL_DEFS.find(item => item.id === id);
        if (!def || this.hasSkill(id) || !this.meetsRequirements(def) || !this.canAfford(def)) {
            this.addLog('You cannot learn that skill yet.');
            return;
        }
        this.spendCost(def);
        this.state.learnedSkills.push(def.id);
        if (def.active) this.buildSpells();
        this.addLog(`Learned ${def.name}.`);
        this.updateUI();
        this.doSave();
    }

    doSave() {
        try {
            const enc = btoa(JSON.stringify(this.state));
            document.cookie = `candybox3=${enc}; max-age=31536000; path=/`;
            console.log("[doSave] State saved - maxHp:", this.state.maxHp, "candies:", this.state.candies);
        } catch (e) {
            console.error("[doSave] Error:", e);
        }
    }

    loadFromHash() {
        if (location.hash) {
            try {
                return JSON.parse(atob(location.hash.slice(1)));
            } catch (e) {
                return null;
            }
        }
        return null;
    }

    loadFromCookie() {
        const m = document.cookie.match(/candybox3=([^;]+)/);
        if (m) {
            try {
                return JSON.parse(atob(m[1]));
            } catch (e) {
                return null;
            }
        }
        return null;
    }
}

let game;
let isNewGame = false;

function doNewGame() {
    // Set flag FIRST to block any load logic
    isNewGame = true;

    // 1. CLEAR ALL SAVED DATA
    localStorage.clear();
    document.cookie = 'candybox3=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    history.replaceState(null, '', location.pathname);

    // 2. RESET GAME STATE CLEANLY
    game = new CandyBox3();
    game.buildUI();

    // 3. FORCE UI RESET - Clear all dynamic elements
    const monsterSelect = document.getElementById('monster-select');
    if (monsterSelect) {
        while (monsterSelect.options.length > 1) {
            monsterSelect.remove(1);
        }
    }

    const inventory = document.getElementById('inventory-items');
    if (inventory) {
        inventory.innerHTML = '(empty)';
    }

    const logBox = document.getElementById('game-log');
    if (logBox) {
        logBox.innerHTML = '';
    }

    game.rebuildMonsterDropdown();

    // 4. UPDATE UI IMMEDIATELY
    game.updateUI();
    game.addLog('New game started');
    game.updateView(); // Reset to main view

    // 5. SAVE NEW CLEAN STATE
    game.doSave();
}

document.addEventListener('DOMContentLoaded', () => {
    game = new CandyBox3();

    // 2. BLOCK LOAD LOGIC if New Game flag is set
    if (!isNewGame) {
        const hs = game.loadFromHash();
        const cs = game.loadFromCookie();
        if (hs) {
            game.state = hs;
        } else if (cs) {
            game.state = cs;
        }
    }

    // Backward compatibility: safely extend state with missing colosseum fields
    game.state.colosseumUnlocked = game.state.colosseumUnlocked || false;
    game.state.inColosseum = game.state.inColosseum || false;
    game.state.colosseumSpeed = game.state.colosseumSpeed || 1;
    game.state.colosseumUnlockedSpeeds = game.state.colosseumUnlockedSpeeds || [1];
    game.state.colosseumSurvivalTime = game.state.colosseumSurvivalTime || 0;
    game.state.colosseumRunning = game.state.colosseumRunning || false;
    game.state.colosseumCurrentTime = game.state.colosseumCurrentTime || 0;
    game.state.colosseumBestTime = game.state.colosseumBestTime || 0;
    game.state.colosseumTimeBySpeed = game.state.colosseumTimeBySpeed || { 1: 0 };
    game.state.colosseumBuffs = game.state.colosseumBuffs || {};
    game.state.pendingBuffChoice = game.state.pendingBuffChoice || null;
    game.state.colosseumSessionPaid = game.state.colosseumSessionPaid || false;
    game.state.ownedWeapons = game.state.ownedWeapons || [];
    game.state.equippedWeapon = game.state.equippedWeapon || null;
    game.state.ownedArmors = game.state.ownedArmors || [];
    game.state.equippedArmor = game.state.equippedArmor || null;
    game.state.equipmentUpgrades = game.state.equipmentUpgrades || {};
    game.state.learnedSkills = game.state.learnedSkills || [];
    game.state.lollipops = game.state.lollipops || 0;
    game.state.sweetVillageUnlocked = game.state.sweetVillageUnlocked || false;
    game.state.villagePlace = game.state.villagePlace || 'square';
    game.state.activeVillageQuest = game.state.activeVillageQuest || null;
    game.state.artifactsFound = game.state.artifactsFound || {};
    game.state.museumUnlocked = game.state.museumUnlocked || Object.keys(game.state.artifactsFound).length > 0;
    game.state.combatFlags = game.state.combatFlags || getDefaultGameState().combatFlags;
    game.state.laboratoryUnlocked = game.state.laboratoryUnlocked || game.state.darkModeUnlocked || false;
    game.state.darkModeEnabled = game.state.darkModeEnabled || false;
    game.state.timeWarpEnabled = game.state.timeWarpEnabled || false;

    if (game.state.darkModeEnabled) {
        document.body.classList.add('dark-mode');
    }
    if (game.state.timeWarpEnabled) {
        document.body.classList.add('time-warp');
    }
    game.state.villagerQuestCounts = game.state.villagerQuestCounts || {};

    // Migrate old buff format to new level-based format
    if (game.state.colosseumBuffs && Object.keys(game.state.colosseumBuffs).length > 0) {
        game.state.colosseumBuffs = migrateBuffsToLevels(game.state.colosseumBuffs);
    }

    game.buildUI();
    game.rebuildMonsterDropdown();
    if (game.state.spellsUnlocked) {
        game.buildSpells();
    }
    game.updateUI();
    game.updateView(); // Initialize view (main or forest)
    game.checkColosseumUnlock(); // Check if colosseum should be unlocked
    game.checkSweetVillageUnlock();

    // Stable UI update interval - only update changing values without full re-render
    setInterval(() => {
        game.tick();
        game.updateCandyBar();
        game.updateHpBar();
        
        if (game.state.darkModeEnabled) {
            game.updateDarkEnergyBar();
        }
        
        // Only run full updateUI() when necessary (state changes that need UI layout changes)
        // Dynamic values are updated directly via targeted functions for performance
    }, 100);

    setInterval(() => {
        game.doSave();
    }, 1000);

    document.body.addEventListener('click', (e) => {
        const act = e.target.dataset.action;
        if (!act) return;
        console.log("[Click Handler] Action triggered:", act);
        switch(act) {
            case 'eat':
                console.log("[Click Handler] EAT action - calling game.eatCandy()");
                game.eatCandy();
                break;
            case 'explore': game.explore(); break;
            case 'attack': game.playerAttack(); break;
            case 'fight-selected': game.fightSelectedMonster(); break;
            case 'buy-upgrade': game.buyUpgrade(e.target.dataset.upgradeKey); break;
            case 'cast-spell': game.castSpell(e.target.dataset.spellKey); break;
            case 'use-skill': game.useSkill(e.target.dataset.skillId); break;
            case 'export-save':
                const en = btoa(JSON.stringify(game.state));
                location.hash = en;
                game.addLog('Save in URL');
                break;
            case 'import-save':
                const tx = prompt('Paste save:');
                if (tx) {
                    try {
                        const de = JSON.parse(atob(tx));
                        game.state = de;
                        game.ensureStateShape();
                        game.buildSpells();
                        game.checkSweetVillageUnlock();
                        game.checkColosseumUnlock();
                        game.rebuildMonsterDropdown();
                        game.updateUI();
                        game.updateView();
                        game.addLog('Loaded save');
                    } catch (e) {
                        alert('Bad save');
                    }
                }
                break;
            case 'new-game':
                if (confirm('New game?')) {
                    doNewGame();
                }
                break;
            case 'go-forest':
                game.state.view = 'forest';
                game.updateView();
                break;
            case 'go-map':
                game.state.view = 'map';
                game.state.villagePlace = 'square';
                game.updateView();
                break;
            case 'go-main':
                game.state.view = 'main';
                game.state.villagePlace = 'square';
                game.updateView();
                break;
            case 'go-village':
                game.state.view = 'village';
                game.state.villagePlace = 'square';
                game.updateView();
                break;
            case 'go-museum':
                game.state.view = 'museum';
                game.updateView();
                break;
            case 'village-place': {
                const place = e.target.dataset.place;
                if (!game.isBuildingUnlocked(place)) return;
                game.state.villagePlace = place;
                // NO full page reload when opening Forge/Library/Market
                // Page will only reload when you actually click BUY/EQUIP/UP+ button
                game.buildVillageUI();
                break;
            }
            case 'go-colosseum':
                game.state.view = 'colosseum';
                game.state.colosseumRunning = false;
                game.state.pendingBuffChoice = null;

                // Clear any lingering interval
                if (game.colosseumInterval) {
                    clearInterval(game.colosseumInterval);
                    game.colosseumInterval = null;
                }

                game.startColosseum();
                game.updateView();
                break;
            case 'start-colosseum':
                if (game.state.colosseumRunning) return;  // Already running

                // Only charge if not already paid for this session
                if (!game.state.colosseumSessionPaid) {
                    if (game.state.chocolate < 1) {
                        game.addLog('You need at least 1 🍫 to start the Colosseum.');
                        return;
                    }

                    game.state.chocolate -= 1;
                game.state.colosseumSessionPaid = true;
                game.addLog('🍫 You enter the arena...');
            }

            // Capture whatever speed the player has selected in the dropdown right now
            const selectedSpeed = parseInt(document.getElementById('colosseumSpeedSelect')?.value || '1');
            if (!isNaN(selectedSpeed) && selectedSpeed >= 1) {
                game.state.colosseumSpeed = selectedSpeed;
            }

            game.state.colosseumRunning = true;
            game.state.colosseumCurrentTime = 0;

                // Start combat loop
                if (game.colosseumInterval) clearInterval(game.colosseumInterval);
                const tickRate = game.getColosseumTickMs(game.state.colosseumSpeed);
                game.colosseumInterval = setInterval(() => game.colosseumTick(), tickRate);

                game.addLog('⚔️ Combat started!');
                game.updateColosseumUI();
                break;
            case 'stop-colosseum':
                game.stopColosseumCombat();

                if (game.state.colosseumCurrentTime > game.state.colosseumBestTime) {
                    game.state.colosseumBestTime = game.state.colosseumCurrentTime;

                    // Check if we hit a milestone
                    const milestone = COLOSSEUM_BUFFS.find(m =>
                        m.time === Math.floor(game.state.colosseumBestTime) &&
                        game.state.colosseumBestTime >= m.time
                    );

                    if (milestone && !game.state.pendingBuffChoice) {
                        game.state.pendingBuffChoice = generateBuffChoices(game.state);
                        game.addLog('✨ Choose your reward at ' + milestone.time + 's!');
                        game.updateColosseumUI();
                        game.checkSecretBuffs();
                        game.doSave();
                        return; // Don't continue below, wait for choice
                    }

                    game.addLog('🏆 New record! ' + game.state.colosseumBestTime.toFixed(1) + 's');
                }

                game.state.colosseumCurrentTime = 0;
                game.state.colosseumRunning = false;

                // Reset session flag to allow next run to require payment again
                game.state.colosseumSessionPaid = false;

                game.checkSecretBuffs();
                game.updateColosseumUI();
                game.doSave();
                break;
            case 'choose-buff':
                const buffId = e.target.dataset.id;
                if (game.state.colosseumBuffs[buffId]) {
                    game.state.colosseumBuffs[buffId].level += 1;
                    game.addLog(`✨ ${buffId} upgraded to level ${game.state.colosseumBuffs[buffId].level}!`);
                } else {
                    game.state.colosseumBuffs[buffId] = { level: 1 };
                    game.addLog(`✨ ${buffId} unlocked!`);
                }
                game.state.pendingBuffChoice = null;
                game.updateColosseumUI();
                game.doSave();
                break;
            case 'plant-tree':
                game.plantTree();
                break;
            case 'buy-weapon':
                game.buyWeapon(e.target.dataset.weaponId);
                game.refreshCurrentBuildingUI();
                break;
            case 'equip-weapon':
                game.equipWeapon(e.target.dataset.weaponId);
                game.refreshCurrentBuildingUI();
                break;
            case 'buy-armor':
                game.buyArmor(e.target.dataset.armorId);
                game.refreshCurrentBuildingUI();
                break;
            case 'equip-armor':
                game.equipArmor(e.target.dataset.armorId);
                game.refreshCurrentBuildingUI();
                break;
            case 'learn-skill':
                game.learnSkill(e.target.dataset.skillId);
                game.refreshCurrentBuildingUI();
                break;
            case 'upgrade-skill':
                game.upgradeSkill(e.target.dataset.skillId);
                game.refreshCurrentBuildingUI();
                break;
            case 'upgrade-gear':
                game.upgradeGear(e.target.dataset.gearId);
                game.refreshCurrentBuildingUI();
                break;
            case 'talk-villager':
                game.assignVillageQuest(e.target.dataset.villagerId);
                break;
            case 'hire-sweet-scientist':
                if (!game.state.laboratoryUnlocked && game.state.candies >= 500000) {
                    game.state.candies -= 500000;
                    game.state.laboratoryUnlocked = true;
                    game.state.darkModeEnabled = true;
                    document.body.classList.add('dark-mode');
                    game.state.view = 'village';
                    game.state.villagePlace = 'laboratory';
                    game.addLog('🧑‍🔬 Sweet Scientist has built the Laboratory! Dark Mode activated.');
                    game.updateView();
                    game.updateUI();
                    game.doSave();
                }
                break;
            case 'lab-light-mode':
                if (game.state.laboratoryUnlocked) {
                    game.state.darkModeEnabled = false;
                    document.body.classList.remove('dark-mode');
                    game.state.villagePlace = 'laboratory';
                    game.buildVillageUI();
                    game.doSave();
                }
                break;
            case 'lab-dark-mode':
                if (game.state.laboratoryUnlocked) {
                    game.state.darkModeEnabled = true;
                    document.body.classList.add('dark-mode');
                    game.state.villagePlace = 'laboratory';
                    game.buildVillageUI();
                    game.doSave();
                }
                break;
            case 'toggle-time-warp':
                if (game.state.laboratoryUnlocked) {
                    game.state.timeWarpEnabled = !game.state.timeWarpEnabled;
                    if (game.state.timeWarpEnabled) {
                        document.body.classList.add('time-warp');
                        game.addLog('⏳ Time Warp activated! Welcome to the internet, circa 2002.');
                    } else {
                        document.body.classList.remove('time-warp');
                        game.addLog('🕰️ Returned to the present.');
                    }
                    game.state.villagePlace = 'laboratory';
                    game.buildVillageUI();
                    game.doSave();
                }
                break;
            case 'help-scientist':
                if (game.state.darkModeCandies >= DARK_ENERGY_REQUIRED && !game.state.timeWarpUnlocked) {
                    if (game.state.candies >= 1000000) {
                        game.state.candies -= 1000000;
                        game.state.timeWarpUnlocked = true;
                        // Increase Dark Energy cap to 10 million after Time Warp unlock
                        DARK_ENERGY_REQUIRED = 10000000;
                        game.state.villagePlace = 'laboratory';
                        game.buildVillageUI();
                        game.updateDarkEnergyBar();
                        game.addLog('🧑‍🔬 Eureka! Time Warp is now available!');
                        game.addLog('⚠️ Dark Energy capacity increased to 10,000,000!');
                        game.updateUI();
                        game.doSave();
                    } else {
                        const messages = [
                            "Where are all the candies? We need more candies!",
                            "Stop wasting my candies, I need those candies to finish my project",
                            "That won't do, we need more candies"
                        ];
                        game.addLog(`🧑‍🔬 "${messages[Math.floor(Math.random() * messages.length)]}"`);
                    }
                }
                break;
            case 'find-artifact':
                game.findArtifact(e.target.dataset.artifactId);
                break;
        }
    });
});

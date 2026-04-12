// CANDY BOX 3 - Fixed: Persistence, Monster Leveling, HP Conversion

const MONSTERS = [
    // TIER 1
    { id: 1, name: 'Sugar Goblin', hp: 15, attack: 2, reward: 10, tier: 1, ascii: '  \\O_\n   |\n  / \\' },
    { id: 2, name: 'Caramel Slime', hp: 12, attack: 2, reward: 8, tier: 1, ascii: '  ~°~\n  (~)~\n   ~' },
    { id: 3, name: 'Chocolate Bat', hp: 16, attack: 3, reward: 12, tier: 1, ascii: '  \\||\n   ||\n  /||\\' },
    { id: 19, name: 'Mint Drop', hp: 14, attack: 2, reward: 9, tier: 1, ascii: '  (o)\n  /d\n   l' },
    { id: 20, name: 'Candy Ant', hp: 13, attack: 2, reward: 8, tier: 1, ascii: '  /W\\\n ( )\n  U' },
    // TIER 2
    { id: 4, name: 'Lollipop Knight', hp: 30, attack: 4, reward: 25, tier: 2, ascii: '  |O|\n  /||\\\n  / \\' },
    { id: 5, name: 'Neural Nougat', hp: 35, attack: 4, reward: 30, tier: 2, ascii: '  [==]\n [====]\n [==]' },
    { id: 6, name: 'Candy Crab', hp: 32, attack: 5, reward: 28, tier: 2, ascii: '  <(o)>\n  <(0)>\n   / \\' },
    { id: 21, name: 'Taffy Troll', hp: 38, attack: 5, reward: 32, tier: 2, ascii: '  /^V^\\\n  MMEM\n  |||||' },
    { id: 22, name: 'Gumball Goblin', hp: 33, attack: 4, reward: 27, tier: 2, ascii: '  <O_O>\n  (ooo)\n   ^^^' },
    { id: 23, name: 'Lemon Imp', hp: 28, attack: 6, reward: 24, tier: 2, ascii: '  (^_^)\n  /| |\\\n   | |' },
    { id: 24, name: 'Butterscotch Beast', hp: 40, attack: 5, reward: 35, tier: 2, ascii: '  |**|\n |***|\n |*_*|' },
    // TIER 3
    { id: 7, name: 'Meme Wraith', hp: 45, attack: 6, reward: 50, tier: 3, ascii: '  ****\n *    *\n ****' },
    { id: 8, name: 'Gummy Guardian', hp: 50, attack: 7, reward: 55, tier: 3, ascii: '  |==|\n |==|\n |==|' },
    { id: 9, name: 'Fudge Fiend', hp: 48, attack: 7, reward: 52, tier: 3, ascii: '  [#_#]\n (#_#)\n [# #]' },
    { id: 25, name: 'Rock Candy Roller', hp: 55, attack: 6, reward: 58, tier: 3, ascii: '  OOOO\n OOOO\n OOOO' },
    { id: 26, name: 'Jelly Jester', hp: 42, attack: 8, reward: 48, tier: 3, ascii: '  \\(^_^)/\n  |    |\n  /    \\' },
    { id: 27, name: 'Marshmallow Mimic', hp: 46, attack: 7, reward: 51, tier: 3, ascii: '  (OoO)\n <(ooo)>\n  (OoO)' },
    { id: 28, name: 'Sugar Spider', hp: 49, attack: 8, reward: 54, tier: 3, ascii: '  /\\ /\\ /\\\n  XX-XX-XX\n  \\/ \\/ \\/' },
    // TIER 4
    { id: 10, name: 'Cotton Candy Centaur', hp: 70, attack: 8, reward: 85, tier: 4, ascii: '  |O_O|\n /|   |\\\n / |   |' },
    { id: 11, name: 'Lemon Drop Drake', hp: 75, attack: 8, reward: 90, tier: 4, ascii: '  ~~^~~\n ~(o_o)~\n ~~~~~~~' },
    { id: 12, name: 'Sugar Siren', hp: 72, attack: 9, reward: 87, tier: 4, ascii: '  /^^\\\n / OO \\\n |    |' },
    { id: 29, name: 'Caramel Cyclops', hp: 78, attack: 9, reward: 92, tier: 4, ascii: '  [ O ]\n  |   |\n  |___|' },
    { id: 30, name: 'Peppermint Phantom', hp: 74, attack: 10, reward: 88, tier: 4, ascii: '  (~O~)\n  (#_#)\n  (~_~)' },
    { id: 31, name: 'Candy Colossus', hp: 85, attack: 8, reward: 95, tier: 4, ascii: '  [===]\n [===]\n [===]' },
    { id: 32, name: 'Honeycomb Hornet', hp: 68, attack: 11, reward: 82, tier: 4, ascii: '  (o~o)\n  /\\W/\\\n   | |' },
    // TIER 5
    { id: 13, name: 'Licorice Lich', hp: 95, attack: 10, reward: 130, tier: 5, ascii: '  [!!]\n  !!!\n [!!]' },
    { id: 14, name: 'Candy Kraken', hp: 105, attack: 11, reward: 145, tier: 5, ascii: '  ~^^^^~\n  ^^^^^^\n ~^^^^^^~' },
    { id: 15, name: 'GPT-3.5 Ghost', hp: 100, attack: 10, reward: 140, tier: 5, ascii: '  (~)~\n  (~)~\n  (~)~' },
    { id: 33, name: 'Toffee Titan', hp: 110, attack: 11, reward: 150, tier: 5, ascii: '  |+++|\n |+++|\n |+++|' },
    { id: 34, name: 'Candy Chimera', hp: 98, attack: 12, reward: 135, tier: 5, ascii: '  /VVV\\\n (ooo)\n  |||' },
    { id: 35, name: 'Fondant Phoenix', hp: 102, attack: 10, reward: 142, tier: 5, ascii: '  /\\ /\\\n (oo)\n  \\\\/' },
    { id: 36, name: 'Nougat Nemesis', hp: 108, attack: 13, reward: 148, tier: 5, ascii: '  [***]\n [***]\n [***]' },
    // TIER 6
    { id: 16, name: 'Sentient Sweetness', hp: 140, attack: 12, reward: 200, tier: 6, ascii: '  (@@@)\n (@@@)\n (@@@)' },
    { id: 17, name: 'Caramel Colossus', hp: 150, attack: 13, reward: 220, tier: 6, ascii: '  |===|\n |===|\n |===|' },
    { id: 18, name: 'The Candy King', hp: 160, attack: 14, reward: 250, tier: 6, ascii: '  /^^^|\n |   |\n |___|' },
    { id: 37, name: 'Licorice Leviathan', hp: 165, attack: 15, reward: 260, tier: 6, ascii: '  [###]\n [###]\n [###]' },
    { id: 38, name: 'Sugar Sultan', hp: 155, attack: 14, reward: 240, tier: 6, ascii: '  /\\**/\\\n  ****\n  ****' },
    { id: 39, name: 'The Lollipop Lord', hp: 170, attack: 16, reward: 280, tier: 6, ascii: '  |*_*|\n |***|\n |***|' },
    { id: 40, name: 'Candy Constellation', hp: 180, attack: 15, reward: 300, tier: 6, ascii: '  ***\n ****\n *****' }
];

function getCandyCostPerHp(hp) {
    if (hp <= 100) return 10;
    if (hp <= 200) return 20;
    if (hp <= 300) return 30;
    if (hp <= 400) return 50;
    return 100;
}

class CandyBox3 {
    constructor() {
        this.state = {
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
            spellsUnlocked: false
        };
        this.lastUpdate = Date.now();
        this.monsters = MONSTERS;
    }

    buildUI() {
        const main = document.getElementById('main');
        if (!main) return;

        main.innerHTML = `
            <div id="status-panel" class="panel">
                <div class="stat-row"><span class="stat-label">Candies:</span><span id="candy-count" class="stat-value">0</span></div>
                <div class="stat-row"><span class="stat-label">Total Eaten:</span><span id="total-eaten" class="stat-value">0</span></div>
                <div class="stat-row"><span class="stat-label">Candy/sec:</span><span id="candy-rate" class="stat-value">1.0</span></div>
                <div class="stat-row"><span class="stat-label">Attack:</span><span id="attack-value" class="stat-value">5</span></div>
                <div class="stat-row"><span class="stat-label">HP:</span><span id="hp-bar" class="stat-value">[██████████]</span><span id="hp-current" class="stat-value">10</span><span>/</span><span id="hp-max" class="stat-value">10</span></div>
            </div>
            <div id="scene-panel" class="panel"><div id="scene-content"></div></div>
            <div id="combat-display" class="panel" style="display:none;"><div id="enemy-ascii" style="white-space: pre-wrap; font-size: 12px;"></div><div id="enemy-name" style="font-weight: bold; margin-top: 5px;"></div><div id="enemy-hp" style="margin-bottom: 10px;"></div></div>
            <div id="log-panel" class="panel"><div id="game-log"></div></div>
            <div id="actions-panel" class="panel"><div id="action-buttons"></div><div id="quick-actions"><button class="action-btn" data-action="eat">🍬 Eat Candy</button></div></div>
            <div id="spells-panel" class="panel" style="display:none;"><h3>Spells</h3><div id="spells-list"></div></div>
            <div id="monster-select-panel" class="panel" style="display:none;"><div style="margin-bottom: 10px;"><strong>Face Known Monster:</strong></div><select id="monster-select" data-action="none"><option value="">-- Select Monster --</option></select><button class="action-btn" data-action="fight-selected" style="margin-left: 5px;">Fight</button></div>
            <div id="upgrades-panel" class="panel"><h3>Upgrades</h3><div id="upgrades-list"></div></div>
            <div id="inventory-panel" class="panel"><h3>Inventory</h3><div id="inventory-items">(empty)</div></div>
            <div id="settings-panel" class="panel"><h3>Options</h3><button class="settings-btn" data-action="export-save">Export Save</button><button class="settings-btn" data-action="import-save">Import Save</button><button class="settings-btn" data-action="new-game">New Game</button></div>
        `;
        this.buildUpgrades();
    }

    buildUpgrades() {
        const container = document.getElementById('upgrades-list');
        if (!container) return;
        container.innerHTML = '';
        const upgradeDefs = [
            { key: 'candy', display: 'Sugar Engine', baseCost: 10 },
            { key: 'attack', display: 'Candy Sword', baseCost: 15 },
            { key: 'regen', display: 'Candy Metabolism', baseCost: 20 }
        ];
        for (let def of upgradeDefs) {
            const div = document.createElement('div');
            div.className = 'upgrade-item';
            const name = document.createElement('span');
            name.className = 'upgrade-name';
            name.textContent = def.display;
            const cost = document.createElement('span');
            cost.className = 'upgrade-cost';
            cost.id = `upgrade-cost-${def.key}`;
            const btn = document.createElement('button');
            btn.className = 'upgrade-btn';
            btn.id = `buy-${def.key}`;
            btn.textContent = 'BUY';
            btn.dataset.action = 'buy-upgrade';
            btn.dataset.upgradeKey = def.key;
            div.appendChild(name);
            div.appendChild(cost);
            div.appendChild(btn);
            container.appendChild(div);
        }
    }

    buildSpells() {
        const container = document.getElementById('spells-list');
        if (!container) return;
        container.innerHTML = '';
        const spellDefs = [
            { key: 'fire', name: 'Fire Candy', cost: 50, effect: '30-50 dmg' },
            { key: 'heal', name: 'Sugar Heal', cost: 100, effect: '+50 HP' },
            { key: 'storm', name: 'Candy Storm', cost: 300, effect: '80-120 dmg' }
        ];
        for (let spell of spellDefs) {
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
            btn.dataset.action = 'cast-spell';
            btn.dataset.spellKey = spell.key;
            btn.id = `spell-${spell.key}`;
            div.appendChild(name);
            div.appendChild(info);
            div.appendChild(btn);
            container.appendChild(div);
        }
    }

    rebuildMonsterDropdown() {
        const select = document.getElementById('monster-select');
        if (!select) return;
        
        // Clear all options except the first
        while (select.options.length > 1) {
            select.remove(1);
        }
        
        // Add all unlocked monsters with levels
        for (let monster of this.state.unlockedMonsters) {
            const option = document.createElement('option');
            option.value = monster.id;
            option.textContent = `${monster.name} (Lv ${monster.level})`;
            select.appendChild(option);
        }
    }

    tick() {
        const now = Date.now();
        const deltaTime = (now - this.lastUpdate) / 1000;
        this.lastUpdate = now;

        this.state.candies += this.state.candyRate * deltaTime;
        this.state.hp += this.state.regenRate * deltaTime;
        if (this.state.hp > this.state.maxHp) {
            this.state.hp = this.state.maxHp;
        }
    }

    updateUI() {
        const update = (id, val) => {
            const el = document.getElementById(id);
            if (el) el.textContent = val;
        };
        
        update('candy-count', Math.floor(this.state.candies));
        update('total-eaten', Math.floor(this.state.totalCandiesEaten));
        update('candy-rate', this.state.candyRate.toFixed(1));
        update('attack-value', this.state.attack);
        update('hp-current', Math.floor(this.state.hp));
        update('hp-max', this.state.maxHp);

        const hpBar = document.getElementById('hp-bar');
        if (hpBar) {
            const percent = Math.max(0, Math.floor((this.state.hp / this.state.maxHp) * 10));
            hpBar.textContent = '[' + '█'.repeat(percent) + '░'.repeat(10 - percent) + ']';
        }

        if (this.state.inCombat && this.state.enemy) {
            const container = document.getElementById('combat-display');
            if (container) container.style.display = 'block';
            const ascii = document.getElementById('enemy-ascii');
            if (ascii) ascii.textContent = this.state.enemy.ascii;
            const name = document.getElementById('enemy-name');
            if (name) name.textContent = `${this.state.enemy.name} (Lv${this.state.enemy.level})`;
            const hp = document.getElementById('enemy-hp');
            if (hp) {
                const percent = Math.max(0, Math.floor((this.state.enemy.hp / this.state.enemy.maxHp) * 10));
                hp.textContent = `HP: [${`█`.repeat(percent)}${`░`.repeat(10 - percent)}] ${this.state.enemy.hp}/${this.state.enemy.maxHp}`;
            }
        } else {
            const container = document.getElementById('combat-display');
            if (container) container.style.display = 'none';
        }

        const container = document.getElementById('action-buttons');
        if (container) {
            if (this.state.inCombat && this.state.enemy) {
                if (!container.querySelector('[data-action="attack"]')) {
                    container.innerHTML = '<button class="action-btn" data-action="attack">⚔️ Attack</button>';
                }
            } else if (this.state.hp <= 0) {
                container.innerHTML = '<div style="color: red;">Dead - Recovering...</div>';
            } else {
                if (!container.querySelector('[data-action="explore"]')) {
                    container.innerHTML = '<button class="action-btn" data-action="explore">🔍 Explore</button>';
                }
            }
        }

        const monsterPanel = document.getElementById('monster-select-panel');
        if (monsterPanel) {
            monsterPanel.style.display = (!this.state.inCombat && this.state.hp > 0 && this.state.unlockedMonsters.length > 0) ? 'block' : 'none';
        }

        const upgradeDefs = [
            { key: 'candy', baseCost: 10 },
            { key: 'attack', baseCost: 15 },
            { key: 'regen', baseCost: 20 }
        ];
        for (let def of upgradeDefs) {
            const btn = document.getElementById(`buy-${def.key}`);
            const costSpan = document.getElementById(`upgrade-cost-${def.key}`);
            if (btn && costSpan) {
                const level = this.state.upgradesPurchased[def.key];
                const cost = Math.floor(def.baseCost * (level + 1) * 1.5);
                costSpan.textContent = ` (Lv ${level} → ${level + 1}) - ${cost}`;
                btn.disabled = this.state.candies < cost;
            }
        }

        const spellPanel = document.getElementById('spells-panel');
        if (spellPanel) {
            spellPanel.style.display = (this.state.spellsUnlocked && this.state.inCombat) ? 'block' : 'none';
        }

        const container2 = document.getElementById('inventory-items');
        if (container2) {
            const upgradeDefs2 = { 'candy': 'Sugar Engine', 'attack': 'Candy Sword', 'regen': 'Candy Metabolism' };
            let html = '';
            for (let key of Object.keys(upgradeDefs2)) {
                const level = this.state.upgradesPurchased[key];
                if (level > 0) {
                    html += `<div class="inventory-item">✓ ${upgradeDefs2[key]} Lv${level}</div>`;
                }
            }
            if (this.state.spellsUnlocked) {
                html += `<div class="inventory-item">✓ Spells Unlocked</div>`;
            }
            container2.innerHTML = html || '(empty)';
        }
    }

    addLogEntry(msg) {
        const container = document.getElementById('game-log');
        if (!container) return;
        const entry = document.createElement('div');
        entry.className = 'log-entry';
        entry.textContent = msg;
        container.appendChild(entry);
        while (container.children.length > 15) {
            container.removeChild(container.firstChild);
        }
    }

    eatCandy() {
        if (this.state.candies <= 0) {
            this.addLogEntry('No candy to eat!');
            return;
        }

        let hpGained = 0;
        while (this.state.candies > 0 && this.state.hp < this.state.maxHp) {
            const costPerHp = getCandyCostPerHp(Math.floor(this.state.hp));
            if (this.state.candies >= costPerHp) {
                this.state.candies -= costPerHp;
                this.state.totalCandiesEaten += costPerHp;
                this.state.hp += 1;
                hpGained += 1;
            } else {
                break;
            }
        }

        if (hpGained > 0) {
            this.addLogEntry(`Ate ${hpGained} HP worth!`);
        }

        if (this.state.hp >= 500 && !this.state.spellsUnlocked) {
            this.state.spellsUnlocked = true;
            this.buildSpells();
            this.addLogEntry('✨ Spells unlocked!');
        }

        this.updateUI();
        this.doSave();
    }

    explore() {
        if (this.state.inCombat || this.state.hp <= 0) return;

        const roll = Math.random() * 100;
        if (roll < 50) {
            const gain = 1 + Math.floor(Math.random() * 5);
            this.state.candies += gain;
            this.addLogEntry(`Found ${gain} candies!`);
        } else if (roll < 85) {
            this.spawnRandomMonster();
            this.updateUI();
            this.doSave();
            return;
        } else if (roll < 95) {
            const gain = 100 + Math.floor(Math.random() * 101);
            this.state.candies += gain;
            this.addLogEntry(`Lucky! Found ${gain}!`);
        } else {
            const gain = 1000 + Math.floor(Math.random() * 1001);
            this.state.candies += gain;
            this.addLogEntry(`JACKPOT! Found ${gain}!!!`);
        }
        this.updateUI();
        this.doSave();
    }

    spawnRandomMonster() {
        const availableTiers = Array.from({length: this.state.maxUnlockedTier}, (_, i) => i + 1);
        const tierToSpawn = availableTiers[Math.floor(Math.random() * availableTiers.length)];
        const monstersInTier = this.monsters.filter(m => m.tier === tierToSpawn);
        const baseMonster = monstersInTier[Math.floor(Math.random() * monstersInTier.length)];

        const unlocked = this.state.unlockedMonsters.find(m => m.id === baseMonster.id);
        const monster = { ...baseMonster };
        if (unlocked) {
            monster.level = unlocked.level;
            monster.hp = Math.floor(baseMonster.hp * (1 + 0.2 * (unlocked.level - 1)));
            monster.attack = Math.floor(baseMonster.attack * (1 + 0.15 * (unlocked.level - 1)));
            monster.reward = Math.floor(baseMonster.reward * (1 + 0.25 * (unlocked.level - 1)));
        } else {
            monster.level = 1;
        }

        this.startCombat(monster);
    }

    startCombat(monster) {
        this.state.enemy = {
            id: monster.id,
            name: monster.name,
            hp: monster.hp,
            maxHp: monster.hp,
            attack: monster.attack,
            reward: monster.reward,
            ascii: monster.ascii,
            level: monster.level || 1
        };
        this.state.inCombat = true;
        this.addLogEntry(`${monster.name} (Lv${monster.level || 1}) appears!`);
    }

    fightSelectedMonster() {
        const dropdown = document.getElementById('monster-select');
        if (!dropdown || !dropdown.value) return;

        const monsterId = parseInt(dropdown.value);
        const baseMonster = this.monsters.find(m => m.id === monsterId);
        if (!baseMonster) return;

        const unlocked = this.state.unlockedMonsters.find(m => m.id === monsterId);
        const monster = { ...baseMonster };
        if (unlocked) {
            monster.level = unlocked.level;
            monster.hp = Math.floor(baseMonster.hp * (1 + 0.2 * (unlocked.level - 1)));
            monster.attack = Math.floor(baseMonster.attack * (1 + 0.15 * (unlocked.level - 1)));
            monster.reward = Math.floor(baseMonster.reward * (1 + 0.25 * (unlocked.level - 1)));
        } else {
            monster.level = 1;
        }

        this.startCombat(monster);
        this.updateUI();
    }

    playerAttack() {
        if (!this.state.inCombat || !this.state.enemy) return;
        const damage = this.state.attack + (Math.random() < 0.5 ? 1 : 0);
        this.state.enemy.hp -= damage;
        this.addLogEntry(`Attack! ${damage} dmg.`);
        if (this.state.enemy.hp <= 0) {
            this.winCombat();
        } else {
            setTimeout(() => this.enemyAttack(), 600);
        }
        this.updateUI();
    }

    castSpell(spellKey) {
        if (!this.state.inCombat || !this.state.enemy) return;
        const spells = {
            'fire': { cost: 50, effect: () => { const dmg = 30 + Math.floor(Math.random() * 21); this.state.enemy.hp -= dmg; this.addLogEntry(`Fire! ${dmg} dmg!`); }},
            'heal': { cost: 100, effect: () => { const heal = 50; this.state.hp = Math.min(this.state.hp + heal, this.state.maxHp); this.addLogEntry(`Heal +${heal}!`); }},
            'storm': { cost: 300, effect: () => { const dmg = 80 + Math.floor(Math.random() * 41); this.state.enemy.hp -= dmg; this.addLogEntry(`Storm! ${dmg} dmg!`); }}
        };
        const spell = spells[spellKey];
        if (!spell || this.state.candies < spell.cost) return;
        this.state.candies -= spell.cost;
        spell.effect();
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
        const damage = this.state.enemy.attack + (Math.random() < 0.5 ? 1 : 0);
        this.state.hp -= damage;
        this.addLogEntry(`${this.state.enemy.name} hits ${damage}!`);
        if (this.state.hp <= 0) {
            this.loseCombat();
        }
        this.updateUI();
    }

    winCombat() {
        const reward = this.state.enemy.reward;
        this.state.candies += reward;

        const existing = this.state.unlockedMonsters.find(m => m.id === this.state.enemy.id);
        if (existing) {
            existing.level += 1;
        } else {
            this.state.unlockedMonsters.push({
                id: this.state.enemy.id,
                name: this.state.enemy.name,
                level: 1
            });
        }

        this.rebuildMonsterDropdown();

        const winsInCurrentTier = this.state.unlockedMonsters.filter(m => {
            const monster = this.monsters.find(x => x.id === m.id);
            return monster && monster.tier <= this.state.maxUnlockedTier;
        }).length;

        if (winsInCurrentTier >= 2 && this.state.maxUnlockedTier < 6) {
            this.state.maxUnlockedTier += 1;
            this.addLogEntry(`Tier ${this.state.maxUnlockedTier} unlocked!`);
        }

        this.addLogEntry(`Victory! +${reward}!`);
        this.state.inCombat = false;
        this.state.enemy = null;
        this.doSave();
    }

    loseCombat() {
        this.state.candies = 0;
        this.state.inCombat = false;
        this.state.enemy = null;
        this.addLogEntry('Defeated. Lost all candies.');
        this.doSave();
    }

    buyUpgrade(upgradeKey) {
        const level = this.state.upgradesPurchased[upgradeKey] || 0;
        const baseCosts = { 'candy': 10, 'attack': 15, 'regen': 20 };
        const baseCost = baseCosts[upgradeKey];
        const cost = Math.floor(baseCost * (level + 1) * 1.5);

        if (this.state.candies < cost) {
            this.addLogEntry('Not enough candies!');
            return;
        }

        this.state.candies -= cost;
        this.state.upgradesPurchased[upgradeKey] = level + 1;

        const upgradeFns = {
            'candy': () => this.state.candyRate += 1,
            'attack': () => this.state.attack += 2,
            'regen': () => this.state.regenRate += 0.5
        };

        if (upgradeFns[upgradeKey]) {
            upgradeFns[upgradeKey]();
        }

        this.addLogEntry(`Upgraded!`);
        this.updateUI();
        this.doSave();
    }

    doSave() {
        try {
            const encoded = btoa(JSON.stringify(this.state));
            document.cookie = `candybox3=${encoded}; max-age=31536000; path=/`;
        } catch (e) {
            console.error('Save failed', e);
        }
    }

    loadFromHash() {
        if (location.hash) {
            try {
                const decoded = JSON.parse(atob(location.hash.slice(1)));
                return decoded;
            } catch (e) {
                return null;
            }
        }
        return null;
    }

    loadFromCookie() {
        const match = document.cookie.match(/candybox3=([^;]+)/);
        if (match) {
            try {
                const decoded = JSON.parse(atob(match[1]));
                return decoded;
            } catch (e) {
                return null;
            }
        }
        return null;
    }
}

let game;

document.addEventListener('DOMContentLoaded', () => {
    game = new CandyBox3();

    const hashState = game.loadFromHash();
    const cookieState = game.loadFromCookie();
    
    if (hashState) {
        game.state = hashState;
    } else if (cookieState) {
        game.state = cookieState;
    }

    game.buildUI();
    game.rebuildMonsterDropdown();
    
    if (game.state.spellsUnlocked) {
        game.buildSpells();
    }

    setInterval(() => {
        game.tick();
        game.updateUI();
    }, 100);

    setInterval(() => {
        game.doSave();
    }, 1000);

    document.body.addEventListener('click', (e) => {
        const action = e.target.dataset.action;
        if (!action) return;

        switch(action) {
            case 'eat':
                game.eatCandy();
                break;
            case 'explore':
                game.explore();
                break;
            case 'attack':
                game.playerAttack();
                break;
            case 'fight-selected':
                game.fightSelectedMonster();
                break;
            case 'buy-upgrade':
                game.buyUpgrade(e.target.dataset.upgradeKey);
                break;
            case 'cast-spell':
                game.castSpell(e.target.dataset.spellKey);
                break;
            case 'export-save':
                const encoded = btoa(JSON.stringify(game.state));
                location.hash = encoded;
                alert('Save in URL hash! Share the link.');
                break;
            case 'import-save':
                const text = prompt('Paste save:');
                if (text) {
                    try {
                        const decoded = JSON.parse(atob(text));
                        game.state = decoded;
                        game.rebuildMonsterDropdown();
                        game.updateUI();
                        game.addLogEntry('Loaded!');
                    } catch (e) {
                        alert('Bad save');
                    }
                }
                break;
            case 'new-game':
                if (confirm('New game?')) {
                    location.reload();
                }
                break;
        }
    });

    game.updateUI();
});

// CANDY BOX 3 - Deterministic Progression + Immediate UI Updates

const MONSTERS = [
    // TIER 1
    { id: 1, name: 'Sugar Goblin', hp: 15, attack: 2, reward: 10, tier: 1, ascii: '  \\O_\n   |\n  / \\' },
    { id: 2, name: 'Caramel Slime', hp: 12, attack: 2, reward: 8, tier: 1, ascii: '  ~°~\n  (~)~\n   ~' },
    { id: 3, name: 'Chocolate Bat', hp: 16, attack: 3, reward: 12, tier: 1, ascii: '  \\||\n   ||\n  /||\\' },
    
    // TIER 2
    { id: 4, name: 'Lollipop Knight', hp: 30, attack: 4, reward: 25, tier: 2, ascii: '  |O|\n  /||\\\n  / \\' },
    { id: 5, name: 'Neural Nougat', hp: 35, attack: 4, reward: 30, tier: 2, ascii: '  [==]\n [====]\n [==]' },
    { id: 6, name: 'Candy Crab', hp: 32, attack: 5, reward: 28, tier: 2, ascii: '  <(o)>\n  <(0)>\n   / \\' },
    
    // TIER 3
    { id: 7, name: 'Meme Wraith', hp: 45, attack: 6, reward: 50, tier: 3, ascii: '  ****\n *    *\n ****' },
    { id: 8, name: 'Gummy Guardian', hp: 50, attack: 7, reward: 55, tier: 3, ascii: '  |==|\n |==|\n |==|' },
    { id: 9, name: 'Fudge Fiend', hp: 48, attack: 7, reward: 52, tier: 3, ascii: '  [#_#]\n (#_#)\n [# #]' },
    
    // TIER 4
    { id: 10, name: 'Cotton Candy Centaur', hp: 70, attack: 8, reward: 85, tier: 4, ascii: '  |O_O|\n /|   |\\\n / |   |' },
    { id: 11, name: 'Lemon Drop Drake', hp: 75, attack: 8, reward: 90, tier: 4, ascii: '  ~~^~~\n ~(o_o)~\n ~~~~~~~' },
    { id: 12, name: 'Sugar Siren', hp: 72, attack: 9, reward: 87, tier: 4, ascii: '  /^^\\\n / OO \\\n |    |' },
    
    // TIER 5
    { id: 13, name: 'Licorice Lich', hp: 95, attack: 10, reward: 130, tier: 5, ascii: '  [!!]\n  !!!\n [!!]' },
    { id: 14, name: 'Candy Kraken', hp: 105, attack: 11, reward: 145, tier: 5, ascii: '  ~^^^^~\n  ^^^^^^\n ~^^^^^^~' },
    { id: 15, name: 'GPT-3.5 Ghost', hp: 100, attack: 10, reward: 140, tier: 5, ascii: '  (~)~\n  (~)~\n  (~)~' },
    
    // TIER 6
    { id: 16, name: 'Sentient Sweetness', hp: 140, attack: 12, reward: 200, tier: 6, ascii: '  (@@@)\n (@@@)\n (@@@)' },
    { id: 17, name: 'Caramel Colossus', hp: 150, attack: 13, reward: 220, tier: 6, ascii: '  |===|\n |===|\n |===|' },
    { id: 18, name: 'The Candy King', hp: 160, attack: 14, reward: 250, tier: 6, ascii: '  /^^^|\n |   |\n |___|' }
];

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
            upgradesPurchased: {
                'candy': 0,
                'regen': 0,
                'attack': 0
            }
        };
        this.lastUpdate = Date.now();
        this.monsters = MONSTERS;
    }

    // Build static UI once
    buildUI() {
        const main = document.getElementById('main');
        if (!main) return;

        main.innerHTML = `
            <div id="status-panel" class="panel">
                <div class="stat-row">
                    <span class="stat-label">Candies:</span>
                    <span id="candy-count" class="stat-value">0</span>
                </div>
                <div class="stat-row">
                    <span class="stat-label">Total Eaten:</span>
                    <span id="total-eaten" class="stat-value">0</span>
                </div>
                <div class="stat-row">
                    <span class="stat-label">Candy/sec:</span>
                    <span id="candy-rate" class="stat-value">1.0</span>
                </div>
                <div class="stat-row">
                    <span class="stat-label">Attack:</span>
                    <span id="attack-value" class="stat-value">5</span>
                </div>
                <div class="stat-row">
                    <span class="stat-label">HP:</span>
                    <span id="hp-bar" class="stat-value">[██████████]</span>
                    <span id="hp-current" class="stat-value">10</span>
                    <span>/</span>
                    <span id="hp-max" class="stat-value">10</span>
                </div>
            </div>

            <div id="scene-panel" class="panel">
                <div id="scene-content"></div>
            </div>

            <div id="combat-display" class="panel" style="display:none;">
                <div id="enemy-ascii" style="white-space: pre-wrap; font-size: 12px;"></div>
                <div id="enemy-name" style="font-weight: bold; margin-top: 5px;"></div>
                <div id="enemy-hp" style="margin-bottom: 10px;"></div>
            </div>

            <div id="log-panel" class="panel">
                <div id="game-log"></div>
            </div>

            <div id="actions-panel" class="panel">
                <div id="action-buttons"></div>
                <div id="quick-actions">
                    <button class="action-btn" data-action="eat">🍬 Eat Candy</button>
                </div>
            </div>

            <div id="monster-select-panel" class="panel" style="display:none;">
                <div style="margin-bottom: 10px;"><strong>Face Known Monster:</strong></div>
                <select id="monster-select" data-action="none">
                    <option value="">-- Select Monster --</option>
                </select>
                <button class="action-btn" data-action="fight-selected" style="margin-left: 5px;">Fight</button>
            </div>

            <div id="upgrades-panel" class="panel">
                <h3>Upgrades</h3>
                <div id="upgrades-list"></div>
            </div>

            <div id="inventory-panel" class="panel">
                <h3>Inventory</h3>
                <div id="inventory-items">(empty)</div>
            </div>

            <div id="settings-panel" class="panel">
                <h3>Options</h3>
                <button class="settings-btn" data-action="export-save">Export Save</button>
                <button class="settings-btn" data-action="new-game">New Game</button>
            </div>
        `;

        this.buildUpgrades();
    }

    buildUpgrades() {
        const container = document.getElementById('upgrades-list');
        if (!container) return;

        const upgradeDefs = [
            { key: 'candy', display: 'Sugar Engine', stat: 'candyRate', perLevel: 1, baseCost: 10 },
            { key: 'attack', display: 'Candy Sword', stat: 'attack', perLevel: 2, baseCost: 15 },
            { key: 'regen', display: 'Candy Metabolism', stat: 'regenRate', perLevel: 0.5, baseCost: 20 }
        ];

        container.innerHTML = '';
        for (let def of upgradeDefs) {
            const div = document.createElement('div');
            div.className = 'upgrade-item';
            div.id = `upgrade-${def.key}`;

            const name = document.createElement('span');
            name.className = 'upgrade-name';
            name.textContent = def.display;
            div.appendChild(name);

            const cost = document.createElement('span');
            cost.className = 'upgrade-cost';
            cost.id = `upgrade-cost-${def.key}`;
            cost.textContent = ` (Lv 0 → 1) - ${def.baseCost}`;
            div.appendChild(cost);

            const btn = document.createElement('button');
            btn.className = 'upgrade-btn';
            btn.id = `buy-${def.key}`;
            btn.textContent = `BUY`;
            btn.dataset.action = 'buy-upgrade';
            btn.dataset.upgradeKey = def.key;
            div.appendChild(btn);

            container.appendChild(div);
        }
    }

    // Game tick: 100ms
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

    // Update UI: selective, no full rebuilds
    updateUI() {
        this.updateStatus();
        this.updateCombatDisplay();
        this.updateActionButtons();
        this.updateUpgradeCosts();
    }

    updateStatus() {
        const candyEl = document.getElementById('candy-count');
        if (candyEl) candyEl.textContent = Math.floor(this.state.candies);

        const eatenEl = document.getElementById('total-eaten');
        if (eatenEl) eatenEl.textContent = Math.floor(this.state.totalCandiesEaten);

        const rateEl = document.getElementById('candy-rate');
        if (rateEl) rateEl.textContent = this.state.candyRate.toFixed(1);

        const atkEl = document.getElementById('attack-value');
        if (atkEl) atkEl.textContent = this.state.attack;

        const hpEl = document.getElementById('hp-current');
        if (hpEl) hpEl.textContent = Math.floor(this.state.hp);

        const maxHpEl = document.getElementById('hp-max');
        if (maxHpEl) maxHpEl.textContent = this.state.maxHp;

        const hpBar = document.getElementById('hp-bar');
        if (hpBar) {
            const percent = Math.max(0, Math.floor((this.state.hp / this.state.maxHp) * 10));
            hpBar.textContent = '[' + '█'.repeat(percent) + '░'.repeat(10 - percent) + ']';
        }
    }

    updateCombatDisplay() {
        const container = document.getElementById('combat-display');
        if (!container) return;

        if (this.state.inCombat && this.state.enemy) {
            container.style.display = 'block';
            
            const ascii = document.getElementById('enemy-ascii');
            if (ascii) ascii.textContent = this.state.enemy.ascii;

            const name = document.getElementById('enemy-name');
            if (name) name.textContent = this.state.enemy.name;

            const hp = document.getElementById('enemy-hp');
            if (hp) {
                const percent = Math.max(0, Math.floor((this.state.enemy.hp / this.state.enemy.maxHp) * 10));
                hp.textContent = `HP: [${`█`.repeat(percent)}${`░`.repeat(10 - percent)}] ${this.state.enemy.hp}/${this.state.enemy.maxHp}`;
            }
        } else {
            container.style.display = 'none';
        }
    }

    updateActionButtons() {
        const container = document.getElementById('action-buttons');
        if (!container) return;

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

        const monsterPanel = document.getElementById('monster-select-panel');
        if (monsterPanel) {
            if (!this.state.inCombat && this.state.hp > 0 && this.state.unlockedMonsters.length > 0) {
                monsterPanel.style.display = 'block';
            } else {
                monsterPanel.style.display = 'none';
            }
        }
    }

    updateUpgradeCosts() {
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
                const newLevel = level + 1;
                const cost = Math.floor(def.baseCost * (level + 1) * 1.5);
                
                costSpan.textContent = ` (Lv ${level} → ${newLevel}) - ${cost}`;
                btn.disabled = this.state.candies < cost;
            }
        }
    }

    // IMMEDIATE UI UPDATES
    updateInventoryUI() {
        const container = document.getElementById('inventory-items');
        if (!container) return;

        const upgradeDefs = {
            'candy': 'Sugar Engine',
            'attack': 'Candy Sword',
            'regen': 'Candy Metabolism'
        };

        let html = '';
        for (let key of Object.keys(upgradeDefs)) {
            const level = this.state.upgradesPurchased[key];
            if (level > 0) {
                html += `<div class="inventory-item">✓ ${upgradeDefs[key]} Lv${level}</div>`;
            }
        }

        container.innerHTML = html || '(empty)';
    }

    updateUpgradeButtons() {
        this.updateUpgradeCosts();
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

    addMonsterToDropdown(monster) {
        const select = document.getElementById('monster-select');
        if (!select) return;

        if (!select.querySelector(`[value="${monster.id}"]`)) {
            const option = document.createElement('option');
            option.value = monster.id;
            option.textContent = monster.name;
            select.appendChild(option);
        }
    }

    // ACTION HANDLERS
    eatCandy() {
        if (this.state.candies <= 0) {
            this.addLogEntry('No candy to eat!');
            return;
        }
        const amount = Math.floor(this.state.candies);
        this.state.totalCandiesEaten += amount;
        this.state.maxHp = Math.floor(Math.sqrt(this.state.totalCandiesEaten) * 10);
        this.state.hp = Math.min(this.state.hp + amount, this.state.maxHp);
        this.state.candies = 0;
        this.addLogEntry(`Ate ${amount} candy. +${amount} HP`);
        
        // IMMEDIATE UI updates
        this.updateStatus();
        this.updateInventoryUI();
    }

    explore() {
        if (this.state.inCombat || this.state.hp <= 0) return;

        const roll = Math.random() * 100;

        if (roll < 50) {
            // Small candies: 1-5
            const gain = 1 + Math.floor(Math.random() * 5);
            this.state.candies += gain;
            this.addLogEntry(`Found ${gain} candies!`);
        } else if (roll < 85) {
            // Monster encounter: 35%
            this.spawnRandomMonster();
            this.updateUI();
            return;
        } else if (roll < 95) {
            // High candies: 100-200
            const gain = 100 + Math.floor(Math.random() * 101);
            this.state.candies += gain;
            this.addLogEntry(`Lucky! Found ${gain} candies!`);
        } else {
            // Huge candies: 1000-2000
            const gain = 1000 + Math.floor(Math.random() * 1001);
            this.state.candies += gain;
            this.addLogEntry(`JACKPOT! Found ${gain} candies!!!`);
        }

        this.updateUI();
    }

    spawnRandomMonster() {
        const availableTiers = [];
        for (let t = 1; t <= this.state.maxUnlockedTier; t++) {
            availableTiers.push(t);
        }

        const tierToSpawn = availableTiers[Math.floor(Math.random() * availableTiers.length)];
        const monstersInTier = this.monsters.filter(m => m.tier === tierToSpawn);
        const monster = monstersInTier[Math.floor(Math.random() * monstersInTier.length)];

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
            tier: monster.tier
        };
        this.state.inCombat = true;
        this.addLogEntry(`${monster.name} appears!`);
    }

    fightSelectedMonster() {
        const dropdown = document.getElementById('monster-select');
        if (!dropdown || !dropdown.value) return;

        const monsterId = parseInt(dropdown.value);
        const monster = this.monsters.find(m => m.id === monsterId);
        if (!monster) return;

        this.startCombat(monster);
    }

    playerAttack() {
        if (!this.state.inCombat || !this.state.enemy) return;

        const damage = this.state.attack + (Math.random() < 0.5 ? 1 : 0);
        this.state.enemy.hp -= damage;
        this.addLogEntry(`Attack! ${damage} damage to ${this.state.enemy.name}.`);

        if (this.state.enemy.hp <= 0) {
            this.winCombat();
        } else {
            setTimeout(() => this.enemyAttack(), 600);
        }
        this.updateUI();
    }

    enemyAttack() {
        if (!this.state.inCombat || !this.state.enemy) return;

        const damage = this.state.enemy.attack + (Math.random() < 0.5 ? 1 : 0);
        this.state.hp -= damage;
        this.addLogEntry(`${this.state.enemy.name} attacks! ${damage} damage.`);

        if (this.state.hp <= 0) {
            this.loseCombat();
        }
        this.updateUI();
    }

    winCombat() {
        const reward = this.state.enemy.reward;
        this.state.candies += reward;

        if (!this.state.unlockedMonsters.find(m => m.id === this.state.enemy.id)) {
            const monster = this.monsters.find(m => m.id === this.state.enemy.id);
            this.state.unlockedMonsters.push(monster);
            this.addMonsterToDropdown(monster);
        }

        // Progression: unlock next tier after 2-3 wins
        const winsInCurrentTier = this.state.unlockedMonsters.filter(m => m.tier === this.state.enemy.tier).length;
        if (winsInCurrentTier >= 2 && this.state.maxUnlockedTier < 6) {
            this.state.maxUnlockedTier += 1;
            this.addLogEntry(`Tier ${this.state.maxUnlockedTier} unlocked!`);
        }

        this.addLogEntry(`Victory! +${reward} candies.`);
        this.state.inCombat = false;
        this.state.enemy = null;
    }

    loseCombat() {
        this.state.candies = 0;
        this.state.inCombat = false;
        this.state.enemy = null;
        this.addLogEntry('Defeated. Lost all candies.');
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

        const upgradeDefs = {
            'candy': { name: 'Sugar Engine', fn: () => this.state.candyRate += 1 },
            'attack': { name: 'Candy Sword', fn: () => this.state.attack += 2 },
            'regen': { name: 'Candy Metabolism', fn: () => this.state.regenRate += 0.5 }
        };

        const def = upgradeDefs[upgradeKey];
        if (def) {
            def.fn();
            this.addLogEntry(`Upgraded ${def.name} to Lv${this.state.upgradesPurchased[upgradeKey]}!`);
        }

        // IMMEDIATE UI updates
        this.updateInventoryUI();
        this.updateUpgradeButtons();
        this.updateStatus();
    }
}

let game;

document.addEventListener('DOMContentLoaded', () => {
    game = new CandyBox3();
    game.buildUI();

    // Game loop: 100ms
    setInterval(() => {
        game.tick();
        game.updateUI();
    }, 100);

    // Event delegation
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
                game.updateUI();
                break;
            case 'buy-upgrade':
                const upgradeKey = e.target.dataset.upgradeKey;
                game.buyUpgrade(upgradeKey);
                break;
            case 'export-save':
                alert('Save:\n' + JSON.stringify(game.state));
                break;
            case 'new-game':
                if (confirm('New game?')) location.reload();
                break;
        }
    });

    game.updateUI();
});

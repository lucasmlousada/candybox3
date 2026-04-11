// CANDY BOX 3 - Static UI + Partial Updates Architecture

const MONSTERS = [
    { name: 'Sugar Goblin', hp: 20, attack: 2, reward: 15, ascii: '  \\O_\n   |\n  / \\' },
    { name: 'Caramel Slime', hp: 15, attack: 3, reward: 12, ascii: '  ~°~\n  (~)~\n   ~' },
    { name: 'Chocolate Bat', hp: 18, attack: 5, reward: 20, ascii: '  \\||\n   ||\n  /||\\' },
    { name: 'Lollipop Knight', hp: 35, attack: 4, reward: 30, ascii: '  |O|\n  /||\\\n  / \\' },
    { name: 'Neural Nougat', hp: 40, attack: 3, reward: 35, ascii: '  [==]\n [====]\n [==]' },
    { name: 'GPT-3.5 Ghost', hp: 50, attack: 6, reward: 60, ascii: '  (~)~\n  (~)~\n  (~)~' },
    { name: 'Candy Crab', hp: 40, attack: 5, reward: 50, ascii: '  <(o)>\n  <(0)>\n   / \\' },
    { name: 'Meme Wraith', hp: 45, attack: 7, reward: 70, ascii: '  ****\n *    *\n ****' },
    { name: 'Jelly Jester', hp: 30, attack: 4, reward: 40, ascii: '  /||\\\n  \\||\n   ||' },
    { name: 'Gummy Guardian', hp: 65, attack: 7, reward: 95, ascii: '  |==|\n |==|\n |==|' },
    { name: 'Marshmallow Mimic', hp: 25, attack: 6, reward: 35, ascii: '  (oo)\n <(uu)>\n  (oo)' },
    { name: 'Fudge Fiend', hp: 55, attack: 8, reward: 90, ascii: '  [#_#]\n (#_#)\n [# #]' },
    { name: 'Cotton Candy Centaur', hp: 70, attack: 6, reward: 100, ascii: '  |O_O|\n /|   |\\\n / |   |' },
    { name: 'Lemon Drop Drake', hp: 75, attack: 8, reward: 110, ascii: '  ~~^~~\n ~(o_o)~\n ~~~~~~~' },
    { name: 'Sugar Siren', hp: 50, attack: 9, reward: 85, ascii: '  /^^\\\n / OO \\\n |    |' },
    { name: 'Licorice Lich', hp: 80, attack: 9, reward: 120, ascii: '  [!!]\n  !!!\n [!!]' },
    { name: 'Candy Kraken', hp: 100, attack: 8, reward: 150, ascii: '  ~^^^^~\n  ^^^^^^\n ~^^^^^^~' },
    { name: 'Peppermint Paladin', hp: 60, attack: 5, reward: 80, ascii: '  |\\O/|\n | X |\n |/ \\|' },
    { name: 'Sentient Sweetness', hp: 120, attack: 10, reward: 200, ascii: '  (@@@)\n (@@@)\n (@@@)' },
    { name: 'The Candy King', hp: 150, attack: 12, reward: 300, ascii: '  /^^^|\n |   |\n |___|' },
    { name: 'Caramel Colossus', hp: 140, attack: 11, reward: 250, ascii: '  |===|\n |===|\n |===|' }
];

class CandyBox3 {
    constructor() {
        this.state = {
            candies: 0,
            candyRate: 1,
            hp: 50,
            maxHp: 100,
            regenRate: 1,
            attack: 5,
            inCombat: false,
            enemy: null,
            unlockedMonsters: [],
            upgrades: {
                candy: { level: 0, baseCost: 10 },
                hp: { level: 0, baseCost: 20 },
                attack: { level: 0, baseCost: 15 }
            }
        };
        this.lastUpdate = Date.now();
        this.monsters = MONSTERS;
    }

    // BUILD STATIC UI ONCE
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
                    <span id="hp-current" class="stat-value">50</span>
                    <span>/</span>
                    <span id="hp-max" class="stat-value">100</span>
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
            { key: 'candy', display: 'Sugar Engine', stat: 'candyRate', perLevel: 1 },
            { key: 'hp', display: 'Candy Heart', stat: 'maxHp', perLevel: 10 },
            { key: 'attack', display: 'Candy Sword', stat: 'attack', perLevel: 2 }
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

    // GAME TICK: 100ms - update state only
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

    // UPDATE UI: selective, non-destructive
    updateUI() {
        this.updateStatus();
        this.updateCombatDisplay();
        this.updateActionButtons();
        this.updateUpgradeCosts();
    }

    updateStatus() {
        const candyEl = document.getElementById('candy-count');
        if (candyEl) candyEl.textContent = Math.floor(this.state.candies);

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

        // Update monster select visibility
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
        for (let key in this.state.upgrades) {
            const btn = document.getElementById(`buy-${key}`);
            const costSpan = document.getElementById(`upgrade-cost-${key}`);
            
            if (btn && costSpan) {
                const up = this.state.upgrades[key];
                const newLevel = up.level + 1;
                const cost = Math.floor(up.baseCost * (up.level + 1) * 1.5);
                
                costSpan.textContent = ` (Lv ${up.level} → ${newLevel}) - ${cost}`;
                btn.disabled = this.state.candies < cost;
            }
        }
    }

    // ADD LOG ENTRY (not batch update)
    addLogEntry(msg) {
        const container = document.getElementById('game-log');
        if (!container) return;

        const entry = document.createElement('div');
        entry.className = 'log-entry';
        entry.textContent = msg;
        container.appendChild(entry);

        // Keep only last 15
        while (container.children.length > 15) {
            container.removeChild(container.firstChild);
        }
    }

    // ADD MONSTER TO DROPDOWN (when unlocked)
    addMonsterToDropdown(monster) {
        const select = document.getElementById('monster-select');
        if (!select) return;

        if (!select.querySelector(`[value="${monster.name}"]`)) {
            const option = document.createElement('option');
            option.value = monster.name;
            option.textContent = monster.name;
            select.appendChild(option);
        }
    }

    // ADD INVENTORY ITEM (when upgraded)
    addInventoryItem(name, level) {
        const container = document.getElementById('inventory-items');
        if (!container) return;

        if (container.textContent === '(empty)') {
            container.innerHTML = '';
        }

        const item = document.createElement('div');
        item.className = 'inventory-item';
        item.textContent = `✓ ${name} Lv${level}`;
        container.appendChild(item);
    }

    // ACTION HANDLERS
    eatCandy() {
        if (this.state.candies <= 0) {
            this.addLogEntry('No candy to eat!');
            return;
        }
        const amount = Math.floor(this.state.candies);
        this.state.hp = Math.min(this.state.hp + amount, this.state.maxHp);
        this.state.candies = 0;
        this.addLogEntry(`Ate ${amount} candy. +${amount} HP`);
        this.updateUI();
    }

    explore() {
        if (this.state.inCombat || this.state.hp <= 0) return;

        const roll = Math.random();
        if (roll < 0.4) {
            const gain = 10 + Math.floor(Math.random() * 25);
            this.state.candies += gain;
            this.addLogEntry(`Found ${gain} candies!`);
        } else {
            this.spawnRandomMonster();
        }
        this.updateUI();
    }

    spawnRandomMonster() {
        const unlockedNames = this.state.unlockedMonsters.map(m => m.name);
        const available = this.monsters.filter(m => !unlockedNames.includes(m.name));

        let monster;
        if (available.length > 0) {
            monster = available[Math.floor(Math.random() * available.length)];
        } else {
            monster = this.monsters[Math.floor(Math.random() * this.monsters.length)];
        }

        this.startCombat(monster);
    }

    startCombat(monster) {
        this.state.enemy = {
            name: monster.name,
            hp: monster.hp,
            maxHp: monster.hp,
            attack: monster.attack,
            reward: monster.reward,
            ascii: monster.ascii
        };
        this.state.inCombat = true;
        this.addLogEntry(`${monster.name} appears!`);
        this.updateUI();
    }

    fightSelectedMonster() {
        const dropdown = document.getElementById('monster-select');
        if (!dropdown || !dropdown.value) return;

        const monsterName = dropdown.value;
        const monster = this.monsters.find(m => m.name === monsterName);
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

        if (!this.state.unlockedMonsters.find(m => m.name === this.state.enemy.name)) {
            const original = this.monsters.find(m => m.name === this.state.enemy.name);
            const newMonster = {
                name: this.state.enemy.name,
                hp: original.hp,
                attack: original.attack,
                reward: original.reward
            };
            this.state.unlockedMonsters.push(newMonster);
            this.addMonsterToDropdown(newMonster);
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
        const up = this.state.upgrades[upgradeKey];
        if (!up) return;

        const cost = Math.floor(up.baseCost * (up.level + 1) * 1.5);

        if (this.state.candies < cost) {
            this.addLogEntry('Not enough candies!');
            return;
        }

        this.state.candies -= cost;
        up.level += 1;

        const upgradeDefs = {
            'candy': { name: 'Sugar Engine', fn: () => this.state.candyRate += 1 },
            'hp': { name: 'Candy Heart', fn: () => this.state.maxHp += 10 },
            'attack': { name: 'Candy Sword', fn: () => this.state.attack += 2 }
        };

        const def = upgradeDefs[upgradeKey];
        if (def) {
            def.fn();
            this.addInventoryItem(def.name, up.level);
            this.addLogEntry(`Upgraded ${def.name} to Lv${up.level}!`);
        }

        this.updateUI();
    }
}

let game;

document.addEventListener('DOMContentLoaded', () => {
    game = new CandyBox3();

    // BUILD STATIC UI ONCE
    game.buildUI();

    // GAME LOOP: 100ms - logic only
    setInterval(() => {
        game.tick();
        game.updateUI();
    }, 100);

    // EVENT DELEGATION (single listener)
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

// CANDY BOX 3 - Refactored with Upgrades, Monsters, and Dropdown

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
        this.gameLog = [];
        this.monsters = MONSTERS;
    }

    // Core game loop
    tick() {
        const now = Date.now();
        const deltaTime = (now - this.lastUpdate) / 1000;
        this.lastUpdate = now;

        // Candy generation
        this.state.candies += this.state.candyRate * deltaTime;

        // HP regeneration
        this.state.hp += this.state.regenRate * deltaTime;
        if (this.state.hp > this.state.maxHp) {
            this.state.hp = this.state.maxHp;
        }
    }

    // Full render
    render() {
        this.renderStatus();
        this.renderScene();
        this.renderActions();
        this.renderUpgrades();
        this.renderMonsterSelect();
        this.renderInventory();
        this.renderLog();
    }

    renderStatus() {
        const candyEl = document.getElementById('candy-count');
        if (candyEl) candyEl.textContent = Math.floor(this.state.candies);

        const hpEl = document.getElementById('hp-current');
        if (hpEl) hpEl.textContent = Math.floor(this.state.hp);

        const maxHpEl = document.getElementById('hp-max');
        if (maxHpEl) maxHpEl.textContent = this.state.maxHp;

        const hpBar = document.getElementById('hp-bar');
        if (hpBar) {
            const percent = Math.max(0, Math.floor((this.state.hp / this.state.maxHp) * 10));
            hpBar.textContent = '[' + '█'.repeat(percent) + '░'.repeat(10 - percent) + ']';
        }

        const rateEl = document.getElementById('candy-rate');
        if (rateEl) rateEl.textContent = this.state.candyRate.toFixed(1);

        const atkEl = document.getElementById('attack-value');
        if (atkEl) atkEl.textContent = this.state.attack;
    }

    renderScene() {
        const scene = document.getElementById('scene-content');
        if (!scene) return;

        if (this.state.inCombat && this.state.enemy) {
            const percent = Math.max(0, Math.floor((this.state.enemy.hp / this.state.enemy.maxHp) * 10));
            scene.textContent = `
${this.state.enemy.ascii}

${this.state.enemy.name}
HP: [${`█`.repeat(percent)}${`░`.repeat(10 - percent)}] ${this.state.enemy.hp}/${this.state.enemy.maxHp}

Your HP: ${Math.floor(this.state.hp)}/${this.state.maxHp}
            `.trim();
        } else if (this.state.hp <= 0) {
            scene.textContent = 'YOU ARE DEAD\n\nWait for HP to recover...';
        } else {
            scene.textContent = `Welcome to Candy Box 3

Candies spawn over time.
Eat candy to heal.
Explore to find monsters.
Defeat them to grow stronger.`;
        }
    }

    renderActions() {
        const container = document.getElementById('action-buttons');
        if (!container) return;

        container.innerHTML = '';

        if (this.state.inCombat && this.state.enemy) {
            container.innerHTML = `
                <button class="action-btn" data-action="attack">⚔️ Attack</button>
            `;
        } else if (this.state.hp > 0) {
            let html = `<button class="action-btn" data-action="explore">🔍 Explore</button>`;
            container.innerHTML = html;
        }
    }

    renderMonsterSelect() {
        const container = document.getElementById('monster-select-panel');
        if (!container) return;

        if (this.state.inCombat || this.state.hp <= 0) {
            container.innerHTML = '';
            return;
        }

        let html = '<div style="margin-bottom: 10px;"><strong>Face Known Monster:</strong></div>';
        html += '<select id="monster-dropdown" data-action="none">';
        html += '<option value="">-- Select Monster --</option>';

        for (let monster of this.state.unlockedMonsters) {
            html += `<option value="${monster.name}">${monster.name}</option>`;
        }

        html += '</select>';
        html += ' <button class="action-btn" data-action="fight-selected" style="margin-left: 5px;">Fight</button>';

        container.innerHTML = html;
    }

    renderUpgrades() {
        const container = document.getElementById('upgrades-list');
        if (!container) return;

        const upgradeDefs = [
            { key: 'candy', display: 'Sugar Engine', stat: 'candyRate', perLevel: 1 },
            { key: 'hp', display: 'Candy Heart', stat: 'maxHp', perLevel: 10 },
            { key: 'attack', display: 'Candy Sword', stat: 'attack', perLevel: 2 }
        ];

        let html = '';
        for (let def of upgradeDefs) {
            const up = this.state.upgrades[def.key];
            const newLevel = up.level + 1;
            const cost = Math.floor(up.baseCost * (up.level + 1) * 1.5);
            const disabled = this.state.candies < cost ? 'disabled' : '';

            html += `
                <div class="upgrade-item">
                    <span class="upgrade-name">${def.display}</span>
                    <span class="upgrade-cost"> (Lv ${up.level} → ${newLevel}) - ${cost} candy</span>
                    <button class="upgrade-btn" data-action="buy-upgrade" data-upgrade-key="${def.key}" ${disabled}>BUY</button>
                </div>
            `;
        }

        container.innerHTML = html;
    }

    renderInventory() {
        const container = document.getElementById('inventory-items');
        if (!container) return;

        const upgradeDefs = {
            'candy': 'Sugar Engine',
            'hp': 'Candy Heart',
            'attack': 'Candy Sword'
        };

        let html = '';
        for (let key in this.state.upgrades) {
            const up = this.state.upgrades[key];
            if (up.level > 0) {
                html += `<div class="inventory-item">✓ ${upgradeDefs[key]} Lv${up.level}</div>`;
            }
        }

        if (html === '') {
            html = '(empty)';
        }

        container.innerHTML = html;
    }

    renderLog() {
        const container = document.getElementById('game-log');
        if (!container) return;

        let html = '';
        for (let msg of this.gameLog.slice(-8)) {
            html += `<div class="log-entry">${msg}</div>`;
        }
        container.innerHTML = html;
    }

    // Actions
    eatCandy() {
        if (this.state.candies <= 0) {
            this.addLog('No candy to eat!');
            return;
        }
        const amount = Math.floor(this.state.candies);
        this.state.hp = Math.min(this.state.hp + amount, this.state.maxHp);
        this.state.candies = 0;
        this.addLog(`Ate ${amount} candy. +${amount} HP`);
    }

    explore() {
        if (this.state.inCombat || this.state.hp <= 0) return;

        const roll = Math.random();
        if (roll < 0.4) {
            const gain = 10 + Math.floor(Math.random() * 25);
            this.state.candies += gain;
            this.addLog(`Found ${gain} candies!`);
        } else {
            this.spawnRandomMonster();
        }
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
        this.addLog(`${monster.name} appears!`);
    }

    fightSelectedMonster() {
        const dropdown = document.getElementById('monster-dropdown');
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
        this.addLog(`Attack! ${damage} damage to ${this.state.enemy.name}.`);

        if (this.state.enemy.hp <= 0) {
            this.winCombat();
        } else {
            setTimeout(() => this.enemyAttack(), 600);
        }
    }

    enemyAttack() {
        if (!this.state.inCombat || !this.state.enemy) return;

        const damage = this.state.enemy.attack + (Math.random() < 0.5 ? 1 : 0);
        this.state.hp -= damage;
        this.addLog(`${this.state.enemy.name} attacks! ${damage} damage.`);

        if (this.state.hp <= 0) {
            this.loseCombat();
        }
    }

    winCombat() {
        const reward = this.state.enemy.reward;
        this.state.candies += reward;

        if (!this.state.unlockedMonsters.find(m => m.name === this.state.enemy.name)) {
            const original = this.monsters.find(m => m.name === this.state.enemy.name);
            this.state.unlockedMonsters.push({
                name: this.state.enemy.name,
                hp: original.hp,
                attack: original.attack,
                reward: original.reward
            });
        }

        this.addLog(`Victory! +${reward} candies.`);
        this.state.inCombat = false;
        this.state.enemy = null;
    }

    loseCombat() {
        this.state.candies = 0;
        this.state.inCombat = false;
        this.state.enemy = null;
        this.addLog('Defeated. Lost all candies.');
    }

    buyUpgrade(upgradeKey) {
        const up = this.state.upgrades[upgradeKey];
        if (!up) return;

        const cost = Math.floor(up.baseCost * (up.level + 1) * 1.5);

        if (this.state.candies < cost) {
            this.addLog('Not enough candies!');
            return;
        }

        this.state.candies -= cost;
        up.level += 1;

        // Apply effect
        if (upgradeKey === 'candy') {
            this.state.candyRate += 1;
        } else if (upgradeKey === 'hp') {
            this.state.maxHp += 10;
        } else if (upgradeKey === 'attack') {
            this.state.attack += 2;
        }

        this.addLog(`Upgraded successfully!`);
    }

    addLog(msg) {
        this.gameLog.push(msg);
        if (this.gameLog.length > 15) this.gameLog.shift();
    }
}

let game;

document.addEventListener('DOMContentLoaded', () => {
    game = new CandyBox3();

    // Game loop: 100ms tick
    setInterval(() => {
        game.tick();
        game.render();
    }, 100);

    // SINGLE EVENT DELEGATION LISTENER
    const container = document.getElementById('main');
    if (container) {
        container.addEventListener('click', (e) => {
            const action = e.target.dataset.action;
            if (!action) return;

            switch(action) {
                case 'eat':
                    game.eatCandy();
                    game.render();
                    break;
                case 'explore':
                    game.explore();
                    game.render();
                    break;
                case 'attack':
                    game.playerAttack();
                    game.render();
                    break;
                case 'fight-selected':
                    game.fightSelectedMonster();
                    game.render();
                    break;
                case 'buy-upgrade':
                    const upgradeKey = e.target.dataset.upgradeKey;
                    game.buyUpgrade(upgradeKey);
                    game.render();
                    break;
                case 'export-save':
                    alert('Save:\n' + JSON.stringify(game.state));
                    break;
                case 'new-game':
                    if (confirm('New game?')) location.reload();
                    break;
            }
        });
    }

    game.render();
});

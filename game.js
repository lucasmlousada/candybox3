// CANDY BOX 3 - Minimal Working Engine (EVENT DELEGATION FIX)

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
            unlockedEnemies: [],
            upgrades: []
        };
        this.lastUpdate = Date.now();
        this.gameLog = [];
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
    }

    renderScene() {
        const scene = document.getElementById('scene-content');
        if (!scene) return;

        if (this.state.inCombat && this.state.enemy) {
            const percent = Math.max(0, Math.floor((this.state.enemy.hp / 20) * 10));
            scene.textContent = `
IN COMBAT

Enemy: ${this.state.enemy.name}
HP: [${`█`.repeat(percent)}${`░`.repeat(10 - percent)}] ${this.state.enemy.hp}/20

Your HP: ${Math.floor(this.state.hp)}/${this.state.maxHp}
            `.trim();
        } else if (this.state.hp <= 0) {
            scene.textContent = 'YOU ARE DEAD\n\nWait for HP to recover...';
        } else {
            scene.textContent = `Welcome to Candy Box 3

Candies spawn over time.
Eat candy to heal.
Explore to find enemies.
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

            if (this.state.unlockedEnemies.length > 0) {
                html += `<div style="margin-top: 10px; font-weight: bold;">Known Enemies:</div>`;
                for (let enemy of this.state.unlockedEnemies) {
                    html += `<button class="action-btn" data-action="fight-enemy" data-enemy-name="${enemy.name}">Fight ${enemy.name}</button>`;
                }
            }

            container.innerHTML = html;
        }
    }

    renderUpgrades() {
        const container = document.getElementById('upgrades-list');
        if (!container) return;

        const upgrades = [
            { id: 'candy_prod', name: 'Sugar Engine', cost: 20, effect: '+1 candies/sec' },
            { id: 'max_hp', name: 'Iron Body', cost: 50, effect: '+10 max HP' }
        ];

        let html = '';
        for (let up of upgrades) {
            const disabled = this.state.candies < up.cost ? 'disabled' : '';
            html += `
                <div class="upgrade-item">
                    <span class="upgrade-name">${up.name}</span>
                    <span class="upgrade-cost"> ${up.effect} (${up.cost} candy)</span>
                    <button class="upgrade-btn" data-action="buy-upgrade" data-upgrade-id="${up.id}" ${disabled}>BUY</button>
                </div>
            `;
        }

        container.innerHTML = html;
    }

    renderInventory() {
        const container = document.getElementById('inventory-items');
        if (!container) return;

        if (this.state.upgrades.length === 0) {
            container.textContent = '(empty)';
        } else {
            let html = '';
            for (let item of this.state.upgrades) {
                html += `<div class="inventory-item">✓ ${item}</div>`;
            }
            container.innerHTML = html;
        }
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
        if (roll < 0.5) {
            const gain = 10 + Math.floor(Math.random() * 20);
            this.state.candies += gain;
            this.addLog(`Found ${gain} candies!`);
        } else {
            this.spawnNewEnemy();
        }
    }

    spawnNewEnemy() {
        this.state.enemy = { name: 'Sugar Goblin', hp: 20, attack: 2, reward: 15 };
        this.state.inCombat = true;
        this.addLog('A Sugar Goblin appears!');
    }

    fightKnownEnemy(enemyName) {
        const enemy = this.state.unlockedEnemies.find(e => e.name === enemyName);
        if (!enemy) return;
        this.state.enemy = { ...enemy };
        this.state.inCombat = true;
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

        if (!this.state.unlockedEnemies.find(e => e.name === this.state.enemy.name)) {
            this.state.unlockedEnemies.push({
                name: this.state.enemy.name,
                hp: this.state.enemy.hp,
                attack: this.state.enemy.attack,
                reward: this.state.enemy.reward
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

    buyUpgrade(upgradeId) {
        const upgrades = {
            'candy_prod': { cost: 20, name: 'Sugar Engine', fn: () => this.state.candyRate += 1 },
            'max_hp': { cost: 50, name: 'Iron Body', fn: () => this.state.maxHp += 10 }
        };

        const up = upgrades[upgradeId];
        if (!up) return;

        if (this.state.candies < up.cost) {
            this.addLog('Not enough candies!');
            return;
        }

        this.state.candies -= up.cost;
        up.fn();
        this.state.upgrades.push(up.name);
        this.addLog(`Bought ${up.name}!`);
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
                case 'fight-enemy':
                    const enemyName = e.target.dataset.enemyName;
                    game.fightKnownEnemy(enemyName);
                    game.render();
                    break;
                case 'buy-upgrade':
                    const upgradeId = e.target.dataset.upgradeId;
                    game.buyUpgrade(upgradeId);
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

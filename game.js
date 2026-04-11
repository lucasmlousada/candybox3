// CANDY BOX 3 - Minimal Working Engine

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
            const btn = document.createElement('button');
            btn.className = 'action-btn';
            btn.textContent = '⚔️ Attack';
            btn.onclick = () => {
                this.playerAttack();
                this.render();
            };
            container.appendChild(btn);
        } else if (this.state.hp > 0) {
            const exploreBtn = document.createElement('button');
            exploreBtn.className = 'action-btn';
            exploreBtn.textContent = '🔍 Explore';
            exploreBtn.onclick = () => {
                this.explore();
                this.render();
            };
            container.appendChild(exploreBtn);

            if (this.state.unlockedEnemies.length > 0) {
                const label = document.createElement('div');
                label.style.marginTop = '10px';
                label.textContent = 'Known Enemies:';
                label.style.fontWeight = 'bold';
                container.appendChild(label);

                for (let enemy of this.state.unlockedEnemies) {
                    const btn = document.createElement('button');
                    btn.className = 'action-btn';
                    btn.textContent = `Fight ${enemy.name}`;
                    btn.onclick = () => {
                        this.fightKnownEnemy(enemy);
                        this.render();
                    };
                    container.appendChild(btn);
                }
            }
        }
    }

    renderUpgrades() {
        const container = document.getElementById('upgrades-list');
        if (!container) return;

        container.innerHTML = '';

        const upgrades = [
            { id: 'candy_prod', name: 'Sugar Engine', cost: 20, effect: '+1 candies/sec' },
            { id: 'max_hp', name: 'Iron Body', cost: 50, effect: '+10 max HP' }
        ];

        for (let up of upgrades) {
            const div = document.createElement('div');
            div.className = 'upgrade-item';

            const name = document.createElement('span');
            name.className = 'upgrade-name';
            name.textContent = up.name;
            div.appendChild(name);

            const info = document.createElement('span');
            info.className = 'upgrade-cost';
            info.textContent = ` ${up.effect} (${up.cost} candy)`;
            div.appendChild(info);

            const btn = document.createElement('button');
            btn.className = 'upgrade-btn';
            btn.textContent = 'BUY';
            btn.disabled = this.state.candies < up.cost;
            btn.onclick = () => {
                this.buyUpgrade(up.id, up.cost, up.name);
                this.render();
            };
            div.appendChild(btn);

            container.appendChild(div);
        }
    }

    renderInventory() {
        const container = document.getElementById('inventory-items');
        if (!container) return;

        container.innerHTML = '';
        if (this.state.upgrades.length === 0) {
            container.textContent = '(empty)';
        } else {
            for (let item of this.state.upgrades) {
                const div = document.createElement('div');
                div.className = 'inventory-item';
                div.textContent = '✓ ' + item;
                container.appendChild(div);
            }
        }
    }

    renderLog() {
        const container = document.getElementById('game-log');
        if (!container) return;

        container.innerHTML = '';
        for (let msg of this.gameLog.slice(-8)) {
            const div = document.createElement('div');
            div.className = 'log-entry';
            div.textContent = msg;
            container.appendChild(div);
        }
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

    fightKnownEnemy(enemy) {
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

    buyUpgrade(id, cost, name) {
        if (this.state.candies < cost) return;

        this.state.candies -= cost;

        if (id === 'candy_prod') {
            this.state.candyRate += 1;
        } else if (id === 'max_hp') {
            this.state.maxHp += 10;
        }

        this.state.upgrades.push(name);
        this.addLog(`Bought ${name}!`);
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

    // UI listeners
    const eatBtn = document.getElementById('eat-candy-btn');
    if (eatBtn) {
        eatBtn.addEventListener('click', () => {
            game.eatCandy();
            game.render();
        });
    }

    const exportBtn = document.getElementById('export-save-btn');
    if (exportBtn) {
        exportBtn.addEventListener('click', () => {
            alert('Save:\n' + JSON.stringify(game.state));
        });
    }

    const clearBtn = document.getElementById('clear-save-btn');
    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            if (confirm('New game?')) location.reload();
        });
    }

    game.render();
});

// CANDY BOX 3 - Main Game Engine (REWRITTEN)

class CandyBox3 {
    constructor() {
        this.state = {
            // Resources
            candies: 0,
            hp: 100,
            maxHp: 100,

            // Combat stats
            attack: 5,
            regenRate: 0.1,   // HP per second
            candyRate: 1,      // candies per second

            // Combat state
            inCombat: false,
            enemy: null,
            unlockedEnemies: [], // [{ name, difficulty, reward, hp, attack }, ...]

            // Upgrades tracking
            upgrades: {
                candy_production_1: {
                    id: 'candy_production_1',
                    name: 'Sugar Engine Lv1',
                    cost: 15,
                    purchased: false,
                    effect: '+0.5 candies/sec'
                },
                candy_production_2: {
                    id: 'candy_production_2',
                    name: 'Sugar Engine Lv2',
                    cost: 50,
                    purchased: false,
                    effect: '+1.0 candies/sec'
                },
                max_hp_1: {
                    id: 'max_hp_1',
                    name: 'Iron Body Lv1',
                    cost: 20,
                    purchased: false,
                    effect: '+25 Max HP'
                },
                max_hp_2: {
                    id: 'max_hp_2',
                    name: 'Iron Body Lv2',
                    cost: 60,
                    purchased: false,
                    effect: '+50 Max HP'
                },
                attack_1: {
                    id: 'attack_1',
                    name: 'Sharp Teeth Lv1',
                    cost: 25,
                    purchased: false,
                    effect: '+3 Attack'
                },
                attack_2: {
                    id: 'attack_2',
                    name: 'Sharp Teeth Lv2',
                    cost: 70,
                    purchased: false,
                    effect: '+6 Attack'
                },
                regen_1: {
                    id: 'regen_1',
                    name: 'Healing Factor Lv1',
                    cost: 30,
                    purchased: false,
                    effect: '+0.15 HP/sec regen'
                },
                regen_2: {
                    id: 'regen_2',
                    name: 'Healing Factor Lv2',
                    cost: 80,
                    purchased: false,
                    effect: '+0.30 HP/sec regen'
                }
            },

            // Inventory (upgrade names as strings)
            inventory: [],

            // Timing
            lastUpdate: Date.now(),
            lastEnemyAttack: 0
        };

        this.gameLog = [];

        // Predefined enemies
        this.enemyData = {
            neural_lemon: {
                name: 'Neural Lemon',
                difficulty: 1,
                hp: 30,
                attack: 4,
                reward: 50
            },
            candy_golem: {
                name: 'Candy Golem',
                difficulty: 2,
                hp: 60,
                attack: 8,
                reward: 150
            },
            meme_beast: {
                name: 'Meme Beast',
                difficulty: 3,
                hp: 100,
                attack: 12,
                reward: 300
            }
        };
    }

    // ====== TICK SYSTEM ======
    tick() {
        const now = Date.now();
        const deltaTime = (now - this.state.lastUpdate) / 1000; // seconds
        this.state.lastUpdate = now;

        // Passive candy generation
        this.state.candies += this.state.candyRate * deltaTime;

        // Passive HP regeneration (only if not dead)
        if (this.state.hp > 0) {
            this.state.hp += this.state.regenRate * deltaTime;
            if (this.state.hp > this.state.maxHp) {
                this.state.hp = this.state.maxHp;
            }
        }

        // Auto-enemy attack timing (every 1 second during combat)
        if (this.state.inCombat && this.state.enemy) {
            if (now - this.state.lastEnemyAttack > 1000) {
                this.enemyAttack();
                this.state.lastEnemyAttack = now;
            }
        }
    }

    // ====== CANDY & HP SYSTEM ======
    eatCandy() {
        if (this.state.candies <= 0) {
            this.addLog('You have no candy to eat!');
            return;
        }

        const candyAmount = Math.floor(this.state.candies);
        this.state.hp += candyAmount;
        if (this.state.hp > this.state.maxHp) {
            this.state.hp = this.state.maxHp;
        }
        this.addLog(`ate ${candyAmount} candy. HP: +${candyAmount}`);
        this.state.candies = 0;
    }

    // ====== EXPLORATION & COMBAT ======
    explore() {
        if (this.state.inCombat) {
            this.addLog('You are in combat! Cannot explore.');
            return;
        }

        if (this.state.hp <= 0) {
            this.addLog('You are dead! Must recover first.');
            return;
        }

        // 60% find treasure, 40% encounter
        const roll = Math.random();
        if (roll < 0.6) {
            const treasure = 30 + Math.floor(Math.random() * 50);
            this.state.candies += treasure;
            this.addLog(`Found treasure! +${treasure} candies`);
        } else {
            this.startRandomCombat();
        }
    }

    startRandomCombat() {
        // First fight: always Neural Lemon
        if (this.state.unlockedEnemies.length === 0) {
            this.startCombat('neural_lemon');
        } else {
            // After first, random difficulty increase
            const roll = Math.random();
            if (roll < 0.5) {
                this.startCombat('neural_lemon');
            } else if (roll < 0.8) {
                this.startCombat('candy_golem');
            } else {
                this.startCombat('meme_beast');
            }
        }
    }

    startCombat(enemyKey) {
        const enemyTemplate = this.enemyData[enemyKey];
        this.state.enemy = {
            key: enemyKey,
            name: enemyTemplate.name,
            difficulty: enemyTemplate.difficulty,
            hp: enemyTemplate.hp,
            maxHp: enemyTemplate.hp,
            attack: enemyTemplate.attack,
            reward: enemyTemplate.reward
        };
        this.state.inCombat = true;
        this.state.lastEnemyAttack = Date.now() - 1100; // Allow first counter immediately
        this.addLog(`Encountered ${enemyTemplate.name}!`);
    }

    playerAttack() {
        if (!this.state.inCombat || !this.state.enemy) return;

        const baseDamage = this.state.attack;
        const variance = Math.floor(Math.random() * 5) - 2; // -2 to +2
        const damage = Math.max(1, baseDamage + variance);

        this.state.enemy.hp -= damage;
        this.addLog(`You attack! ${damage} damage to ${this.state.enemy.name}`);

        if (this.state.enemy.hp <= 0) {
            this.winCombat();
        }
    }

    enemyAttack() {
        if (!this.state.inCombat || !this.state.enemy) return;

        const baseDamage = this.state.enemy.attack;
        const variance = Math.floor(Math.random() * 4) - 1; // -1 to +2
        const damage = Math.max(1, baseDamage + variance);

        this.state.hp -= damage;
        this.addLog(`${this.state.enemy.name} attacks! ${damage} damage`);

        if (this.state.hp <= 0) {
            this.loseCombat();
        }
    }

    winCombat() {
        this.state.inCombat = false;
        const reward = this.state.enemy.reward;
        const enemyKey = this.state.enemy.key;

        // Unlock enemy
        if (!this.state.unlockedEnemies.find(e => e.key === enemyKey)) {
            this.state.unlockedEnemies.push({
                key: enemyKey,
                name: this.state.enemy.name,
                difficulty: this.state.enemy.difficulty,
                hp: this.state.enemy.hp,
                attack: this.state.enemy.attack,
                reward: this.state.enemy.reward
            });
        }

        this.state.candies += reward;
        this.addLog(`Victory! ${this.state.enemy.name} defeated.`);
        this.addLog(`Earned +${reward} candies`);
        this.state.enemy = null;
    }

    loseCombat() {
        this.state.inCombat = false;
        this.state.candies = 0; // Lose all candies
        this.addLog('You were defeated!');
        this.addLog('You lost all your candies.');
        this.addLog('Recover HP to fight again.');
        this.state.enemy = null;
    }

    // ====== UPGRADES ======
    buyUpgrade(upgradeKey) {
        const upgrade = this.state.upgrades[upgradeKey];
        if (!upgrade || upgrade.purchased) {
            return false;
        }

        if (this.state.candies < upgrade.cost) {
            this.addLog(`Not enough candies. Need ${upgrade.cost}, have ${Math.floor(this.state.candies)}`);
            return false;
        }

        this.state.candies -= upgrade.cost;

        // Apply upgrade effect
        switch (upgradeKey) {
            case 'candy_production_1':
                this.state.candyRate += 0.5;
                break;
            case 'candy_production_2':
                this.state.candyRate += 1.0;
                break;
            case 'max_hp_1':
                this.state.maxHp += 25;
                this.state.hp = Math.min(this.state.hp + 25, this.state.maxHp);
                break;
            case 'max_hp_2':
                this.state.maxHp += 50;
                this.state.hp = Math.min(this.state.hp + 50, this.state.maxHp);
                break;
            case 'attack_1':
                this.state.attack += 3;
                break;
            case 'attack_2':
                this.state.attack += 6;
                break;
            case 'regen_1':
                this.state.regenRate += 0.15;
                break;
            case 'regen_2':
                this.state.regenRate += 0.30;
                break;
        }

        upgrade.purchased = true;
        this.state.inventory.push(upgrade.name);
        this.addLog(`${upgrade.name} purchased!`);
        return true;
    }

    // ====== LOGGING ======
    addLog(message) {
        const timestamp = new Date().toLocaleTimeString();
        this.gameLog.push(`[${timestamp}] ${message}`);
        if (this.gameLog.length > 25) {
            this.gameLog.shift();
        }
    }

    // ====== RENDERING ======
    render() {
        this.renderStatus();
        this.renderScene();
        this.renderLog();
        this.renderActions();
        this.renderUpgrades();
        this.renderInventory();
    }

    renderStatus() {
        document.getElementById('candy-count').textContent = Math.floor(this.state.candies);
        document.getElementById('hp-current').textContent = Math.floor(this.state.hp);
        document.getElementById('hp-max').textContent = this.state.maxHp;
        document.getElementById('hp-bar').textContent = this.getHPBar();
        document.getElementById('candy-rate').textContent = this.state.candyRate.toFixed(2);
        document.getElementById('attack-value').textContent = this.state.attack;
    }

    getHPBar() {
        const percentage = Math.floor((this.state.hp / this.state.maxHp) * 10);
        const filled = '█'.repeat(percentage);
        const empty = '░'.repeat(10 - percentage);
        return `[${filled}${empty}]`;
    }

    renderScene() {
        const panel = document.getElementById('scene-content');
        if (this.state.inCombat && this.state.enemy) {
            panel.textContent = this.getEnemyScene();
        } else if (this.state.hp <= 0) {
            panel.textContent = '💀 YOU ARE DEAD 💀\n\nRecover HP to continue...';
        } else {
            panel.textContent = ASCII.title + '\n' + SCENES.start.text;
        }
    }

    getEnemyScene() {
        const enemyHPPercent = Math.floor((this.state.enemy.hp / this.state.enemy.maxHp) * 10);
        const enemyBar = '█'.repeat(enemyHPPercent) + '░'.repeat(10 - enemyHPPercent);
        return `
 ╔════════════════════════╗
 ║   IN COMBAT            ║
 ╚════════════════════════╝

 Enemy: ${this.state.enemy.name}
 HP: [${enemyBar}] ${Math.floor(this.state.enemy.hp)}/${this.state.enemy.maxHp}

 Your HP: [${this.getHPBar()}] ${Math.floor(this.state.hp)}/${this.state.maxHp}
        `;
    }

    renderLog() {
        const logDiv = document.getElementById('game-log');
        logDiv.innerHTML = '';
        for (let msg of this.gameLog) {
            const entry = document.createElement('div');
            entry.className = 'log-entry';
            entry.textContent = msg;
            logDiv.appendChild(entry);
        }
        logDiv.scrollTop = logDiv.scrollHeight;
    }

    renderActions() {
        const btnContainer = document.getElementById('action-buttons');
        btnContainer.innerHTML = '';

        // Combat actions
        if (this.state.inCombat && this.state.enemy) {
            const attackBtn = document.createElement('button');
            attackBtn.className = 'action-btn';
            attackBtn.textContent = `⚔️ Attack`;
            attackBtn.onclick = () => {
                this.playerAttack();
                this.render();
            };
            btnContainer.appendChild(attackBtn);
            return;
        }

        // Dead state
        if (this.state.hp <= 0) {
            const statusDiv = document.createElement('div');
            statusDiv.textContent = `You are dead. Recover to ${this.state.maxHp} HP to continue.`;
            statusDiv.style.color = '#000';
            btnContainer.appendChild(statusDiv);
            return;
        }

        // Normal exploration
        const exploreBtn = document.createElement('button');
        exploreBtn.className = 'action-btn';
        exploreBtn.textContent = '🔍 Explore';
        exploreBtn.onclick = () => {
            this.explore();
            this.render();
        };
        btnContainer.appendChild(exploreBtn);

        // Fight previously defeated enemies
        if (this.state.unlockedEnemies.length > 0) {
            const label = document.createElement('div');
            label.style.marginTop = '10px';
            label.style.fontWeight = 'bold';
            label.textContent = 'Fight Known Enemy:';
            btnContainer.appendChild(label);

            for (let enemy of this.state.unlockedEnemies) {
                const fightBtn = document.createElement('button');
                fightBtn.className = 'action-btn';
                fightBtn.textContent = enemy.name;
                fightBtn.onclick = () => {
                    this.startCombat(enemy.key);
                    this.render();
                };
                btnContainer.appendChild(fightBtn);
            }
        }
    }

    renderUpgrades() {
        const upgDiv = document.getElementById('upgrades-list');
        upgDiv.innerHTML = '';

        // Group by type
        const groups = {
            'Production': ['candy_production_1', 'candy_production_2'],
            'HP': ['max_hp_1', 'max_hp_2'],
            'Attack': ['attack_1', 'attack_2'],
            'Regeneration': ['regen_1', 'regen_2']
        };

        for (let groupName in groups) {
            const groupKeys = groups[groupName];

            for (let key of groupKeys) {
                const upgrade = this.state.upgrades[key];
                const div = document.createElement('div');
                div.className = 'upgrade-item';

                if (upgrade.purchased) {
                    div.className += ' upgrade-purchased';
                    const nameSpan = document.createElement('span');
                    nameSpan.className = 'upgrade-name';
                    nameSpan.textContent = upgrade.name;
                    div.appendChild(nameSpan);

                    const checkSpan = document.createElement('span');
                    checkSpan.style.marginLeft = '10px';
                    checkSpan.textContent = '✓';
                    div.appendChild(checkSpan);
                } else {
                    const nameSpan = document.createElement('span');
                    nameSpan.className = 'upgrade-name';
                    nameSpan.textContent = upgrade.name;
                    div.appendChild(nameSpan);

                    const costSpan = document.createElement('span');
                    costSpan.className = 'upgrade-cost';
                    costSpan.textContent = ` (${upgrade.cost} candy)`;
                    div.appendChild(costSpan);

                    const btn = document.createElement('button');
                    btn.className = 'upgrade-btn';
                    btn.textContent = 'BUY';
                    btn.disabled = this.state.candies < upgrade.cost;
                    btn.onclick = () => {
                        this.buyUpgrade(key);
                        this.render();
                    };
                    div.appendChild(btn);
                }

                upgDiv.appendChild(div);
            }
        }
    }

    renderInventory() {
        const invDiv = document.getElementById('inventory-items');
        invDiv.innerHTML = '';

        if (this.state.inventory.length === 0) {
            invDiv.textContent = '(empty)';
        } else {
            for (let item of this.state.inventory) {
                const div = document.createElement('div');
                div.className = 'inventory-item';
                div.textContent = '✓ ' + item;
                invDiv.appendChild(div);
            }
        }
    }

    // ====== STATE MANAGEMENT ======
    loadGameState(state) {
        if (state) {
            this.state = state;
        }
    }

    getGameState() {
        return this.state;
    }
}

// ============================================================================
// INITIALIZATION & UI BINDING
// ============================================================================

let game;

function initGame() {
    let savedState = SaveSystem.loadFromHash();
    if (!savedState) {
        savedState = SaveSystem.loadFromLocal();
    }

    game = new CandyBox3();
    if (savedState) {
        game.loadGameState(savedState);
        game.addLog('Game loaded from save!');
    } else {
        game.addLog('Welcome to Candy Box 3!');
        game.addLog('Explore to find enemies and treasure.');
        game.addLog('Defeat enemies to earn candies.');
        game.addLog('Buy upgrades to get stronger.');
    }
    game.render();
}

function setupEventListeners() {
    // Eat candy
    document.getElementById('eat-candy-btn').addEventListener('click', () => {
        game.eatCandy();
        game.render();
    });

    // Settings
    document.getElementById('export-save-btn').addEventListener('click', () => {
        const data = game.getGameState();
        const text = SaveSystem.exportSave(data);
        alert('Copy this to save:\n\n' + text);
    });

    document.getElementById('import-save-btn').addEventListener('click', () => {
        const text = prompt('Paste your save data:');
        if (text) {
            const state = SaveSystem.importSave(text);
            if (state) {
                game.loadGameState(state);
                game.addLog('Save imported!');
                game.render();
            } else {
                alert('Invalid save data');
            }
        }
    });

    document.getElementById('clear-save-btn').addEventListener('click', () => {
        if (confirm('Start a new game? Current progress will be lost.')) {
            SaveSystem.clearAll();
            window.location.reload();
        }
    });
}

function gameLoop() {
    game.tick();
    game.render();
}

function autoSave() {
    const state = game.getGameState();
    SaveSystem.saveToLocal(state);
}

document.addEventListener('DOMContentLoaded', () => {
    initGame();
    setupEventListeners();
    setInterval(gameLoop, 1000 / 60); // 60 FPS
    setInterval(autoSave, 3000);
});

window.addEventListener('beforeunload', () => {
    const state = game.getGameState();
    SaveSystem.saveToLocal(state);
});

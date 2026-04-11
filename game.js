// CANDY BOX 3 - Main Game Engine

class CandyBox3 {
    constructor() {
        // Game State
        this.state = {
            candy: 0,
            totalCandy: 0,
            lastUpdate: Date.now(),

            // Per-second generation (base 1)
            baseGenerationRate: 1,

            // Upgrades
            upgrades: {
                autoharvest: {
                    name: 'Auto-Harvest',
                    cost: 10,
                    effect: 'Generates +1 candy/sec',
                    purchased: false,
                    effectValue: 1
                },
                neural_candy: {
                    name: 'Neural Candy Seeds',
                    cost: 30,
                    effect: 'Generates +2 candy/sec',
                    purchased: false,
                    effectValue: 2
                },
                prompt_scroll: {
                    name: 'Prompt Scroll',
                    cost: 100,
                    effect: 'Generates +5 candy/sec',
                    purchased: false,
                    effectValue: 5
                },
                quantum_harvester: {
                    name: 'Quantum Harvester',
                    cost: 300,
                    effect: 'Generates +15 candy/sec',
                    purchased: false,
                    effectValue: 15
                }
            },

            // Inventory
            inventory: {
                lollipop: 0,
                sweetness_token: 0,
                meme_scroll: 0,
                candy_gem: 0
            },

            // Quests
            quests: {
                first_harvest: {
                    name: 'First Harvest',
                    description: 'Gather 50 candy',
                    target: 50,
                    reward: 50,
                    completed: false
                },
                neural_awakening: {
                    name: 'Neural Awakening',
                    description: 'Purchase 2 upgrades',
                    target: 2,
                    current: 0,
                    reward: 100,
                    completed: false
                },
                the_lemon_trial: {
                    name: 'The Lemon Trial',
                    description: 'Defeat the Neural Lemon',
                    target: 1,
                    current: 0,
                    reward: 200,
                    completed: false
                }
            },

            // Combat
            inCombat: false,
            currentEnemy: null,
            playerHP: 50,

            // Exploration
            currentScene: 'start',
            explored: false,

            // Settings
            soundEnabled: true
        };

        this.gameLog = [];
    }

    // Calculate total candy generation rate
    getGenerationRate() {
        let total = this.state.baseGenerationRate;
        for (let key in this.state.upgrades) {
            if (this.state.upgrades[key].purchased) {
                total += this.state.upgrades[key].effectValue;
            }
        }
        return total;
    }

    // Add candy over time
    tick() {
        const now = Date.now();
        const deltaTime = (now - this.state.lastUpdate) / 1000; // seconds
        const generationRate = this.getGenerationRate();
        const candyGained = generationRate * deltaTime;

        this.state.candy += candyGained;
        this.state.totalCandy += candyGained;
        this.state.lastUpdate = now;
    }

    // Manual candy earn
    eatCandy() {
        this.state.candy += 10;
        this.state.totalCandy += 10;
        this.addLog('You ate a piece of candy! +10');
        this.checkQuest('first_harvest');
    }

    // Exploration
    explore() {
        if (!this.state.explored) {
            this.state.explored = true;
            this.state.currentScene = 'explored';
            this.addLog('You explored the Candy Garden. It was magnificent.');
        }

        // Random encounter
        const roll = Math.random();
        if (roll < 0.4) {
            this.addLog('You found some loose candy: +25');
            this.state.candy += 25;
            this.state.totalCandy += 25;
        } else if (roll < 0.7) {
            this.addLog('You encountered the Neural Lemon!');
            this.startCombat();
        } else {
            this.addLog('You discovered a hidden treasure! +200 candy');
            this.state.candy += 200;
            this.state.totalCandy += 200;
        }
    }

    // Combat system
    startCombat() {
        this.state.inCombat = true;
        this.state.currentEnemy = {
            name: 'Neural Lemon',
            hp: 25,
            maxHp: 25,
            attack: 5,
            reward: 150
        };
        this.state.playerHP = 50;
        this.addLog(`Combat started: ${this.state.currentEnemy.name}`);
    }

    playerAttack() {
        if (!this.state.inCombat) return;

        const damage = Math.floor(Math.random() * 10) + 5;
        this.state.currentEnemy.hp -= damage;
        this.addLog(`You attack! Dealt ${damage} damage.`);

        if (this.state.currentEnemy.hp <= 0) {
            this.winCombat();
            return;
        }

        // Enemy counter
        setTimeout(() => this.enemyAttack(), 500);
    }

    enemyAttack() {
        if (!this.state.inCombat) return;

        const damage = Math.floor(Math.random() * 10) + 3;
        this.state.playerHP -= damage;
        this.addLog(`${this.state.currentEnemy.name} attacks! You took ${damage} damage.`);

        if (this.state.playerHP <= 0) {
            this.loseCombat();
        }
    }

    winCombat() {
        this.state.inCombat = false;
        const reward = this.state.currentEnemy.reward;
        this.state.candy += reward;
        this.state.totalCandy += reward;
        this.addLog(`Victory! You defeated the ${this.state.currentEnemy.name}.`);
        this.addLog(`Earned +${reward} candy`);
        this.checkQuest('the_lemon_trial');
    }

    loseCombat() {
        this.state.inCombat = false;
        this.addLog('You were defeated... but the candy grid protects you.');
        this.addLog('You revive with your candy intact.');
        this.state.playerHP = 50;
    }

    // Purchase upgrade
    buyUpgrade(key) {
        const upgrade = this.state.upgrades[key];
        if (!upgrade || upgrade.purchased) return false;

        if (this.state.candy >= upgrade.cost) {
            this.state.candy -= upgrade.cost;
            upgrade.purchased = true;
            this.addLog(`Purchased: ${upgrade.name}`);
            this.checkQuest('neural_awakening');
            return true;
        }
        return false;
    }

    // Quest tracking
    checkQuest(questKey) {
        const quest = this.state.quests[questKey];
        if (quest.completed) return;

        if (questKey === 'first_harvest') {
            if (this.state.totalCandy >= quest.target) {
                this.completeQuest(questKey);
            }
        } else if (questKey === 'neural_awakening') {
            let purchased = 0;
            for (let key in this.state.upgrades) {
                if (this.state.upgrades[key].purchased) purchased++;
            }
            quest.current = purchased;
            if (purchased >= quest.target) {
                this.completeQuest(questKey);
            }
        } else if (questKey === 'the_lemon_trial') {
            quest.current = 1;
            this.completeQuest(questKey);
        }
    }

    completeQuest(questKey) {
        const quest = this.state.quests[questKey];
        quest.completed = true;
        this.state.candy += quest.reward;
        this.state.totalCandy += quest.reward;
        this.addLog(`✓ QUEST COMPLETE: ${quest.name} | +${quest.reward} candy`);
    }

    // Logging
    addLog(message) {
        const timestamp = new Date().toLocaleTimeString();
        this.gameLog.push(`[${timestamp}] ${message}`);
        if (this.gameLog.length > 20) {
            this.gameLog.shift();
        }
    }

    // Render
    render() {
        this.renderStatus();
        this.renderScene();
        this.renderLog();
        this.renderActions();
        this.renderInventory();
        this.renderUpgrades();
    }

    renderStatus() {
        const rate = this.getGenerationRate();
        document.getElementById('candy-count').textContent = Math.floor(this.state.candy);
        document.getElementById('total-candy').textContent = Math.floor(this.state.totalCandy);
        document.getElementById('per-second').textContent = rate;
    }

    renderScene() {
        const panel = document.getElementById('scene-content');

        if (this.state.inCombat) {
            panel.textContent = ASCII.combatScene;
        } else if (this.state.currentScene === 'start') {
            panel.textContent = ASCII.title + '\n' + SCENES.start.text;
        } else if (this.state.currentScene === 'explored') {
            panel.textContent = ASCII.candyGarden;
        }
    }

    renderLog() {
        const logDiv = document.getElementById('game-log');
        logDiv.innerHTML = '';
        for (let msg of this.gameLog) {
            const entry = document.createElement('div');
            entry.className = 'log-entry';
            if (msg.includes('QUEST')) entry.className += ' log-quest';
            if (msg.includes('Reward') || msg.includes('Earned')) entry.className += ' log-reward';
            entry.textContent = msg;
            logDiv.appendChild(entry);
        }
        logDiv.scrollTop = logDiv.scrollHeight;
    }

    renderActions() {
        const btnContainer = document.getElementById('action-buttons');
        btnContainer.innerHTML = '';

        // Combat buttons
        if (this.state.inCombat) {
            const attackBtn = document.createElement('button');
            attackBtn.className = 'action-btn';
            attackBtn.textContent = `Attack! (${this.state.currentEnemy.name} HP: ${Math.floor(this.state.currentEnemy.hp)}/${this.state.currentEnemy.maxHp})`;
            attackBtn.onclick = () => this.playerAttack();
            btnContainer.appendChild(attackBtn);

            const hpDiv = document.createElement('div');
            hpDiv.textContent = `Your HP: ${this.state.playerHP}/50`;
            hpDiv.style.marginTop = '5px';
            btnContainer.appendChild(hpDiv);
        }

        // Quest buttons
        for (let key in this.state.quests) {
            const quest = this.state.quests[key];
            if (!quest.completed) {
                const progress = quest.current ? ` (${quest.current}/${quest.target})` : '';
                const label = `${quest.name}${progress}`;
                const btn = document.createElement('button');
                btn.className = 'action-btn';
                btn.textContent = label;
                btn.disabled = true;
                btnContainer.appendChild(btn);
            }
        }
    }

    renderInventory() {
        const invDiv = document.getElementById('inventory-items');
        invDiv.innerHTML = '';

        let hasItems = false;
        for (let item in this.state.inventory) {
            const count = this.state.inventory[item];
            if (count > 0) {
                hasItems = true;
                const div = document.createElement('div');
                div.className = 'inventory-item';
                div.innerHTML = `<span class="item-name">${this.formatName(item)}</span><span class="item-count">x${count}</span>`;
                invDiv.appendChild(div);
            }
        }

        if (!hasItems) {
            invDiv.textContent = '(empty)';
        }
    }

    renderUpgrades() {
        const upgDiv = document.getElementById('upgrades-list');
        upgDiv.innerHTML = '';

        for (let key in this.state.upgrades) {
            const upgrade = this.state.upgrades[key];
            const div = document.createElement('div');
            div.className = 'upgrade-item';
            if (upgrade.purchased) div.className += ' upgrade-purchased';

            const nameSpan = document.createElement('span');
            nameSpan.className = 'upgrade-name';
            nameSpan.textContent = upgrade.name;
            div.appendChild(nameSpan);

            const costSpan = document.createElement('span');
            costSpan.className = 'upgrade-cost';
            costSpan.textContent = upgrade.purchased ? ' [PURCHASED]' : ` - ${upgrade.cost} candy`;
            div.appendChild(costSpan);

            if (!upgrade.purchased) {
                const btn = document.createElement('button');
                btn.className = 'upgrade-btn';
                btn.textContent = 'BUY';
                btn.disabled = this.state.candy < upgrade.cost;
                btn.onclick = () => {
                    if (this.buyUpgrade(key)) {
                        this.render();
                    }
                };
                div.appendChild(btn);
            }

            upgDiv.appendChild(div);
        }
    }

    formatName(str) {
        return str.replace(/_/g, ' ').toUpperCase();
    }

    // Load/Save
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
    // Try to load from hash first, then localStorage
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
        game.addLog('Click buttons to begin your adventure...');
    }
    game.render();
}

function setupEventListeners() {
    // Eat candy
    document.getElementById('eat-candy-btn').addEventListener('click', () => {
        game.eatCandy();
        game.render();
    });

    // Explore
    document.getElementById('explore-btn').addEventListener('click', () => {
        game.explore();
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
                game.addLog('Save imported successfully!');
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

// Main game loop
function gameLoop() {
    game.tick();
    game.render();
}

// Auto-save to localStorage
function autoSave() {
    const state = game.getGameState();
    SaveSystem.saveToLocal(state);
}

// On page load
document.addEventListener('DOMContentLoaded', () => {
    initGame();
    setupEventListeners();

    // Game loop at 60 FPS
    setInterval(gameLoop, 1000 / 60);

    // Auto-save every 3 seconds
    setInterval(autoSave, 3000);
});

// Cleanup on unload
window.addEventListener('beforeunload', () => {
    const state = game.getGameState();
    SaveSystem.saveToLocal(state);
});

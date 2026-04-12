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
    { id: 40, name: 'Candy Constellation', hp: 180, attack: 15, reward: 300, tier: 6, emoji: '💫', ascii: '  ***\n ****\n *****' }
];

function getCandyCostPerHp(maxHp) {
    let cost;
    if (maxHp <= 100) cost = 10;
    else if (maxHp <= 200) cost = 20;
    else if (maxHp <= 300) cost = 30;
    else if (maxHp <= 400) cost = 50;
    else cost = 100;

    console.log("[getCandyCostPerHp] maxHp:", maxHp, "-> cost:", cost);
    return cost;
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
        // Colosseum buffs
        colosseumBuffs: {}
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

function applyColosseumBuffs(state) {
    let candyMultiplier = 1;
    let attackMultiplier = 1;
    let regenMultiplier = 1;
    let hpMultiplier = 1;

    if (state.colosseumBuffs.candyBoost) candyMultiplier += 0.25;
    if (state.colosseumBuffs.attackBoost) attackMultiplier += 0.25;
    if (state.colosseumBuffs.regenBoost) regenMultiplier += 0.25;
    if (state.colosseumBuffs.hpBoost) hpMultiplier += 0.25;

    if (state.colosseumBuffs.megaBoost) {
        candyMultiplier += 0.5;
        attackMultiplier += 0.5;
        regenMultiplier += 0.5;
        hpMultiplier += 0.5;
    }

    return {
        candyMultiplier,
        attackMultiplier,
        regenMultiplier,
        hpMultiplier
    };
}

class CandyBox3 {
    constructor() {
        this.state = getDefaultGameState();
        this.lastUpdate = Date.now();
        this.monsters = MONSTERS;
        this.colosseumInterval = null; // Track colosseum combat interval
    }

    checkColosseumUnlock() {
        if (this.state.colosseumUnlocked) return; // Already unlocked
        if (this.state.unlockedMonsters.length >= 40 &&
            this.state.unlockedMonsters.every(m => m.level >= 10)) {
            this.state.colosseumUnlocked = true;
            this.addLog('🏟️ The Candy Colosseum is now open...');
            this.updateUI();
        }
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
                <div class="stat-row"><span class="stat-label">Attack:</span><span id="attack-value">5</span></div>
                <div class="stat-row"><span class="stat-label">HP:</span><span id="hp-bar">[██████████]</span><span id="hp-current">10</span><span>/</span><span id="hp-max">10</span></div>
            </div>
            <div id="mainView">
                <div id="actions-panel" class="panel"><div id="action-buttons"></div><div id="quick-actions"><button class="action-btn" data-action="eat">🍬 Eat Candy</button><button class="action-btn" data-action="go-map">🗺️ Map</button></div></div>
                <div id="combat-display" class="panel" style="display:none;"><div id="enemy-ascii" style="white-space: pre-wrap; font-size: 12px;"></div><div id="enemy-name" style="font-weight: bold; margin-top: 5px;"></div><div id="enemy-hp" style="margin-bottom: 10px;"></div></div>
                <div id="spells-panel" class="panel" style="display:none;"><h3>Spells</h3><div id="spells-list"></div></div>
                <div id="monster-select-panel" class="panel" style="display:none;"><div style="margin-bottom: 10px;"><strong>Face Known Monster:</strong></div><select id="monster-select"><option value="">-- Select Monster --</option></select><button class="action-btn" data-action="fight-selected" style="margin-left: 5px;">Fight</button></div>
                <div id="upgrades-panel" class="panel"><h3>Upgrades</h3><div id="upgrades-list"></div></div>
                <div id="inventory-panel" class="panel"><h3>Inventory</h3><div id="inventory-items">(empty)</div></div>
                <div id="log-panel" class="panel" style="max-height: 200px; overflow-y: auto;"><h3>Log</h3><div id="game-log"></div></div>
                <div id="settings-panel" class="panel"><h3>Options</h3><button class="settings-btn" data-action="export-save">Export Save</button><button class="settings-btn" data-action="import-save">Import Save</button><button class="settings-btn" data-action="new-game">New Game</button></div>
            </div>
            <div id="mapView" style="display:none;"></div>
            <div id="forestView" style="display:none; position: relative; min-height: 400px;"></div>
            <div id="colosseumView" style="display:none; position: relative; min-height: 500px;"></div>
        `;
        this.buildUpgrades();
    }

    buildUpgrades() {
        const container = document.getElementById('upgrades-list');
        if (!container) return;
        container.innerHTML = '';
        const defs = [
            { key: 'candy', display: 'Sugar Engine', baseCost: 10 },
            { key: 'attack', display: 'Candy Sword', baseCost: 15 },
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
        const container = document.getElementById('spells-list');
        if (!container) return;
        container.innerHTML = '';
        const defs = [
            { key: 'fire', name: 'Fire Candy', cost: 50, effect: '30-50 dmg' },
            { key: 'heal', name: 'Sugar Heal', cost: 100, effect: '+50 HP' },
            { key: 'storm', name: 'Candy Storm', cost: 300, effect: '80-120 dmg' }
        ];
        for (let spell of defs) {
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

    buildMapUI() {
        const map = document.getElementById('mapView');
        if (!map) return;

        const forestLink = this.state.forestUnlocked
            ? '<span data-action="go-forest" class="clickable">Chocolate Forest</span>'
            : '<span class="locked">??? (locked)</span>';

        map.innerHTML = `
            <div class="panel">
                <h2>🗺️ World Map</h2>
                <pre id="asciiMap" style="font-family: monospace; margin: 20px 0; text-align: center;">
        ┌──────────────────────┐
        │                      │
        │  <span data-action="go-main" class="clickable">🏭 Candy Factory</span>  │
        │                      │
        └───────────┬──────────┘
                    │
        ┌───────────▼──────────┐
        │                      │
        │  ${forestLink}  │
        │                      │
        └──────────────────────┘
                </pre>
                <div style="text-align: center; margin: 20px 0;">
                    <button class="action-btn" data-action="go-main">Return to Factory</button>
                </div>
            </div>
        `;
    }

    buildForestUI() {
        const forest = document.getElementById('forestView');
        if (!forest) return;
        forest.innerHTML = `
            <div class="panel">
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
            </div>
        `;
    }

    updateView() {
        const mainView = document.getElementById('mainView');
        const mapView = document.getElementById('mapView');
        const forestView = document.getElementById('forestView');
        const colosseumView = document.getElementById('colosseumView');

        // Show/hide views based on current view
        mainView.style.display = this.state.view === 'main' ? 'block' : 'none';
        mapView.style.display = this.state.view === 'map' ? 'block' : 'none';
        forestView.style.display = this.state.view === 'forest' ? 'block' : 'none';
        colosseumView.style.display = this.state.view === 'colosseum' ? 'block' : 'none';

        // Build map, forest, or colosseum UI when entering those views
        if (this.state.view === 'map') {
            this.buildMapUI();
        } else if (this.state.view === 'forest') {
            this.buildForestUI();
            this.updateForestDisplay();
            this.renderForest(); // Render trees from state
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
                <div id="colosseum-buffs-display" style="margin: 20px 0; border: 1px solid #ccc; padding: 10px; background: #f5f5f5;">
                    <strong>Active Buffs:</strong>
                    <div id="colosseum-buffs-list" style="margin-top: 8px; font-size: 12px;">
                        (none active)
                    </div>
                </div>
                <div style="text-align: center; margin: 20px 0;">
                    <button class="action-btn" data-action="go-main">Exit Colosseum</button>
                </div>
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
                // Restart combat loop with new speed
                if (this.colosseumInterval) clearInterval(this.colosseumInterval);
                const tickRate = 1000 / (10 * this.state.colosseumSpeed);
                this.colosseumInterval = setInterval(() => this.colosseumTick(), tickRate);
                this.addLog('Speed changed to x' + newSpeed);
            };
        }

        // Start combat loop
        if (this.colosseumInterval) clearInterval(this.colosseumInterval);
        const tickRate = 1000 / (10 * this.state.colosseumSpeed);
        this.colosseumInterval = setInterval(() => this.colosseumTick(), tickRate);

        this.addLog('🏟️ Entered the Colosseum!');
    }

    spawnColosseumMonster() {
        const randomMonsters = this.state.unlockedMonsters;
        if (randomMonsters.length === 0) return;

        const unl = randomMonsters[Math.floor(Math.random() * randomMonsters.length)];
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
    }

    colosseumTick() {
        if (!this.state.inColosseum || !this.state.enemy) return;

        this.state.colosseumSurvivalTime += (10 * this.state.colosseumSpeed) / 1000; // Convert to seconds

        // Apply colosseum buffs to player attack
        const buffs = applyColosseumBuffs(this.state);
        const dmg = (this.state.attack * buffs.attackMultiplier) + (Math.random() < 0.5 ? 1 : 0);
        this.state.enemy.hp -= dmg;

        if (this.state.enemy.hp <= 0) {
            this.winColosseumCombat();
        } else {
            // Enemy counter-attack (reduced by speed)
            const enemyDmg = Math.max(1, Math.floor((this.state.enemy.attack + (Math.random() < 0.5 ? 1 : 0)) / this.state.colosseumSpeed));
            this.state.hp -= enemyDmg;

            if (this.state.hp <= 0) {
                this.loseColosseum();
            }
        }

        this.updateColosseumUI();
    }

    winColosseumCombat() {
        const r = Math.floor(this.state.enemy.reward / 2); // Half reward
        this.state.candies += r;

        // Level up monster
        const ex = this.state.unlockedMonsters.find(m => m.id === this.state.enemy.id);
        if (ex) {
            ex.level += 1;
        }

        // Check speed unlock
        const nextSpeed = this.state.colosseumSpeed + 1;
        const timeThreshold = this.state.colosseumSpeed * 10; // 10s for x1, 20s for x2, etc.
        if (this.state.colosseumSurvivalTime >= timeThreshold &&
            !this.state.colosseumUnlockedSpeeds.includes(nextSpeed)) {
            this.state.colosseumUnlockedSpeeds.push(nextSpeed);
            this.addLog('⚡ Speed x' + nextSpeed + ' unlocked!');
            this.updateColosseumSpeedOptions();
        }

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
        this.state.hp = this.state.maxHp;
        // Death penalty: lose all candies
        this.state.candies = 0;
        this.addLog(`💀 Fell in the Colosseum after ${this.state.colosseumSurvivalTime.toFixed(1)}s - Lost all candies!`);
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

        if (NameEl) NameEl.textContent = this.state.enemy.name + ' (Lv' + this.state.enemy.level + ')';
        if (emojiEl) emojiEl.textContent = this.state.enemy.emoji;
        if (hpEl) {
            const p = Math.max(0, Math.floor((this.state.enemy.hp / this.state.enemy.maxHp) * 10));
            hpEl.innerHTML = `HP: [${`█`.repeat(p)}${`░`.repeat(10 - p)}] ${Math.max(0, Math.floor(this.state.enemy.hp))}/${this.state.enemy.maxHp}`;
        }
        if (playerHpEl) playerHpEl.textContent = Math.floor(this.state.hp) + '/' + this.state.maxHp;
        if (timeEl) timeEl.textContent = this.state.colosseumSurvivalTime.toFixed(1) + 's';
        if (bestTimeEl) bestTimeEl.textContent = this.state.colosseumBestTime.toFixed(1) + 's';
        if (chocolateEl) chocolateEl.textContent = Math.floor(this.state.chocolate);

        // Update buff display
        if (buffsListEl) {
            let buffHtml = '';
            let activeCount = 0;
            COLOSSEUM_BUFFS.forEach(buff => {
                if (this.state.colosseumBuffs[buff.id]) {
                    buffHtml += `<div>⭐ ${buff.label} (${buff.effect})</div>`;
                    activeCount++;
                }
            });
            buffsListEl.innerHTML = activeCount > 0 ? buffHtml : '(none active)';
        }
    }

    updateColosseumSpeedOptions() {
        const select = document.getElementById('colosseumSpeedSelect');
        if (!select) return;

        select.innerHTML = '';
        for (let speed of this.state.colosseumUnlockedSpeeds) {
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
        for (let m of this.state.unlockedMonsters) {
            const opt = document.createElement('option');
            opt.value = m.id;
            opt.textContent = `${m.name} (Lv ${m.level})`;
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
        const now = Date.now();
        const deltaTime = (now - this.lastUpdate) / 1000;
        this.lastUpdate = now;

        // Apply colosseum buffs for stat multipliers
        const buffs = applyColosseumBuffs(this.state);

        // Candy generation with buff multiplier
        this.state.candies += this.state.candyRate * buffs.candyMultiplier * deltaTime;
        this.state.chocolate += this.state.chocolateRate * (deltaTime / 3600); // per hour

        // HP regen with buff multiplier
        this.state.hp += this.state.regenRate * buffs.regenMultiplier * deltaTime;
        if (this.state.hp > this.state.maxHp) {
            this.state.hp = this.state.maxHp;
        }

        // Track colosseum time only when running
        if (this.state.colosseumRunning) {
            this.state.colosseumCurrentTime += deltaTime;
        }
    }

    updateUI() {
        const u = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
        u('candy-count', Math.floor(this.state.candies));
        u('total-eaten', Math.floor(this.state.totalCandiesEaten));
        u('candy-rate', this.state.candyRate.toFixed(1));
        u('chocolate-count', Math.floor(this.state.chocolate));
        u('chocolate-rate', this.state.chocolateRate.toFixed(1));
        u('attack-value', this.state.attack);
        u('hp-current', Math.floor(this.state.hp));
        u('hp-max', this.state.maxHp);
        const percent = Math.max(0, Math.floor((this.state.hp / this.state.maxHp) * 10));
        document.getElementById('hp-bar').textContent = '[' + '█'.repeat(percent) + '░'.repeat(10 - percent) + ']';

        console.log("[updateUI] HP Display:", {
            hp: Math.floor(this.state.hp),
            maxHp: this.state.maxHp,
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
                let buttons = '<button class="action-btn" data-action="explore">🔍 Explore</button>';
                if (this.state.colosseumUnlocked) {
                    buttons += '<button class="action-btn" data-action="go-colosseum" style="margin-left: 5px;">🏟️ Colosseum</button>';
                }
                if (!c.querySelector('[data-action="explore"]')) {
                    c.innerHTML = buttons;
                }
            }
        }

        const m = document.getElementById('monster-select-panel');
        if (m) {
            m.style.display = (!this.state.inCombat && this.state.hp > 0 && this.state.unlockedMonsters.length > 0) ? 'block' : 'none';
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
                const c = Math.floor(d.baseCost * (lv + 1) * 1.5);
                cost.textContent = ` (Lv ${lv} → ${lv + 1}) - ${c}`;
                btn.disabled = this.state.candies < c;
            }
        }

        const sp = document.getElementById('spells-panel');
        if (sp) {
            sp.style.display = (this.state.spellsUnlocked && this.state.inCombat) ? 'block' : 'none';
        }

        const inv = document.getElementById('inventory-items');
        if (inv) {
            const upgs = {
              'candy': { name: 'Sugar Engine', emoji: '⚙️' },
                'attack': { name: 'Candy Sword', emoji: '⚔️' },
                'regen': { name: 'Candy Metabolism', emoji: '❤️' }
            };
            let h = '';
            for (let k in upgs) {
                const lv = this.state.upgradesPurchased[k];
                if (lv > 0) h += `<div class="inventory-item">${upgs[k].emoji} ${upgs[k].name} +${lv}</div>`;
            }
            if (this.state.spellsUnlocked) h += `<div class="inventory-item">✨ Spells Unlocked</div>`;

            // Show active colosseum buffs
            if (this.state.inColosseum) {
                COLOSSEUM_BUFFS.forEach(buff => {
                    if (this.state.colosseumBuffs[buff.id]) {
                        h += `<div class="inventory-item">⭐ ${buff.label}</div>`;
                    }
                });
            }

            inv.innerHTML = h || '(empty)';
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
            this.state.hp = Math.min(this.state.hp + maxHpGained, this.state.maxHp);
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
            this.addLog(`Found ${g} candies`);
        } else if (roll < 85) {
            this.spawnRandomMonster();
            this.updateUI();
            this.doSave();
            return;
        } else if (roll < 95) {
            const g = 100 + Math.floor(Math.random() * 101);
            this.state.candies += g;
            this.addLog(`Lucky! Found ${g}`);
        } else {
            const g = 1000 + Math.floor(Math.random() * 1001);
            this.state.candies += g;
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
        const dmg = this.state.attack + (Math.random() < 0.5 ? 1 : 0);
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
            'heal': { cost: 100, effect: () => { this.state.hp = Math.min(this.state.hp + 50, this.state.maxHp); this.addLog(`Heal +50`); }},
            'storm': { cost: 300, effect: () => { const d = 80 + Math.floor(Math.random() * 41); this.state.enemy.hp -= d; this.addLog(`Storm! ${d} dmg`); }}
        };
        const s = spells[key];
        if (!s || this.state.candies < s.cost) return;
        this.state.candies -= s.cost;
        s.effect();
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
        this.state.hp -= dmg;
        this.addLog(`${this.state.enemy.name} hits ${dmg}`);
        if (this.state.hp <= 0) {
            this.loseCombat();
        }
        this.updateUI();
    }

    winCombat() {
        const r = this.state.enemy.reward;
        this.state.candies += r;
        const ex = this.state.unlockedMonsters.find(m => m.id === this.state.enemy.id);
        if (ex) {
            ex.level += 1;
        } else {
            this.state.unlockedMonsters.push({
                id: this.state.enemy.id,
                name: this.state.enemy.name,
                level: 1
            });
        }
        this.rebuildMonsterDropdown();
        const wins = this.state.unlockedMonsters.filter(m => {
            const mon = this.monsters.find(x => x.id === m.id);
            return mon && mon.tier <= this.state.maxUnlockedTier;
        }).length;
        if (wins >= 2 && this.state.maxUnlockedTier < 6) {
            this.state.maxUnlockedTier += 1;
            this.addLog(`Tier ${this.state.maxUnlockedTier} unlocked`);
        }
        this.addLog(`Defeated ${this.state.enemy.name} (Lv${this.state.enemy.level}) +${r} candies`);

        // Unlock forest if enemy level >= 10
        if (this.state.enemy.level >= 10 && !this.state.forestUnlocked) {
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
        const costs = { 'candy': 10, 'attack': 15, 'regen': 20 };
        const cost = Math.floor(costs[key] * (lv + 1) * 1.5);
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
        const names = { 'candy': 'Sugar Engine', 'attack': 'Candy Sword', 'regen': 'Candy Metabolism' };
        this.addLog(`Bought ${names[key]} (Lv${lv + 1})`);
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
    game.state.colosseumBuffs = game.state.colosseumBuffs || {};

    game.buildUI();
    game.rebuildMonsterDropdown();
    if (game.state.spellsUnlocked) {
        game.buildSpells();
    }
    game.updateUI();
    game.updateView(); // Initialize view (main or forest)
    game.checkColosseumUnlock(); // Check if colosseum should be unlocked

    setInterval(() => {
        game.tick();
        game.updateUI();
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
                        game.rebuildMonsterDropdown();
                        game.updateUI();
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
                game.updateView();
                break;
            case 'go-main':
                game.state.view = 'main';
                game.updateView();
                break;
            case 'go-colosseum':
                // Check chocolate cost
                if (game.state.chocolate < 1) {
                    game.addLog('You need at least 1 🍫 to enter the Colosseum.');
                    return;
                }
                game.state.chocolate -= 1;
                game.state.view = 'colosseum';
                game.startColosseum();
                game.updateView();
                break;
            case 'start-colosseum':
                if (!game.state.colosseumRunning) {
                    game.state.colosseumRunning = true;
                    game.state.colosseumCurrentTime = 0;
                    game.addLog('⚔️ Combat started!');
                }
                break;
            case 'stop-colosseum':
                game.stopColosseumCombat();
                if (game.state.colosseumCurrentTime > game.state.colosseumBestTime) {
                    game.state.colosseumBestTime = game.state.colosseumCurrentTime;
                    // Check for buff unlocks
                    COLOSSEUM_BUFFS.forEach(buff => {
                        if (game.state.colosseumBestTime >= buff.time && !game.state.colosseumBuffs[buff.id]) {
                            game.state.colosseumBuffs[buff.id] = true;
                            game.addLog('✨ Buff unlocked: ' + buff.label + '!');
                        }
                    });
                    game.addLog('🏆 New record! ' + game.state.colosseumBestTime.toFixed(1) + 's');
                }
                game.updateColosseumUI();
                game.doSave();
                break;
            case 'plant-tree':
                game.plantTree();
                break;
        }
    });
});

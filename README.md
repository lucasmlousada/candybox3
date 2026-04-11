# CANDY BOX 3

An incremental browser game with a modern twist. Collect candy, unlock upgrades, explore strange lands, and battle AI-themed creatures—all in pure ASCII art.

**Status:** Fully playable prototype | No external dependencies required

## What is This?

Candy Box 3 is a spiritual successor to the original Candy Box 1 and Candy Box 2, preserved in the minimalist aesthetic of early internet games. It runs entirely in your browser—no servers, no APIs, no frameworks.

**Core loop:**
- Candy generates passively over time (1 per second by default)
- Click to earn candy manually
- Purchase upgrades to increase generation
- Explore to find treasure and battle enemies
- Complete quests for rewards
- Export/import saves via URL or text

## How to Play

### Starting Out
1. Click **Eat Candy** to manually earn 10 candy
2. Click **Explore** to find discoveries and combat encounters
3. Use earned candy to purchase **Upgrades**

### Upgrades
| Name | Cost | Effect |
|------|------|--------|
| Auto-Harvest | 10 | +1 candy/sec |
| Neural Candy Seeds | 30 | +2 candy/sec |
| Prompt Scroll | 100 | +5 candy/sec |
| Quantum Harvester | 300 | +15 candy/sec |

### Quests
- **First Harvest:** Collect 50 total candy → 50 reward
- **Neural Awakening:** Purchase 2 upgrades → 100 reward
- **The Lemon Trial:** Defeat the Neural Lemon → 200 reward

### Combat
When you encounter an enemy:
1. Click **Attack** to deal 5-15 damage
2. Enemy counter-attacks after a short delay
3. Defeat the enemy to earn candy rewards
4. You respawn with full HP if defeated

## Save System

### Local Save (Auto)
The game automatically saves to your browser's localStorage every 3 seconds. Close and reopen the tab—your progress is safe.

### URL Share Save
Click **Export Save** to copy a compact save string. Paste it into the import dialog later, or manually append it to the URL:
```
https://<username>.github.io/candybox3/#save=<your_save_string>
```

When you load a page with a save in the URL hash, it will automatically restore that game state.

### Manual Import/Export
- **Export Save:** Displays a text save code you can save or share
- **Import Save:** Paste a code to restore a previous game
- **New Game:** Starts fresh (cannot be undone)

## Deploy on GitHub Pages

### Steps

1. **Create a repository** named `candybox3` (or any name)

2. **Add these files:**
   ```
   candybox3/
   ├── index.html
   ├── style.css
   ├── game.js
   ├── save.js
   ├── ascii.js
   └── README.md
   ```

3. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit: Candy Box 3"
   git push
   ```

4. **Enable GitHub Pages:**
   - Go to Settings > Pages
   - Select "Deploy from a branch"
   - Choose `main` (or your default branch)
   - Save

5. **Access your game:**
   - `https://<your-username>.github.io/candybox3/`

## Technical Details

### Architecture
- **No frameworks:** Pure HTML, CSS, and vanilla JavaScript
- **No build tools:** Everything runs as-is in the browser
- **No external APIs:** 100% static
- **Lightweight:** ~40KB total (unminified, for readability)

### File Structure
- **index.html** — Page structure and containers
- **style.css** — Monospace ASCII styling
- **game.js** — Game loop, mechanics, and rendering
- **save.js** — Serialization and URL encoding
- **ascii.js** — ASCII art and scene definitions

### Game State
The entire game state is a single JavaScript object:
```javascript
{
  candy: 5000,
  totalCandy: 10000,
  upgrades: { /* upgrade status */ },
  inventory: { /* item counts */ },
  quests: { /* quest completion */ },
  // etc...
}
```

This is serialized to JSON, base64-encoded, and compressed for URLs.

### Save Encoding
The URL hash format is safe for sharing:
- Standard base64 encoding with URL-safe substitution (+→-, /→_, =→removed)
- Compatible with all browsers and URL shorteners

## Customization

### Add More Content
Edit `ascii.js` to add new scenes and ASCII art.

### Adjust Game Balance
Edit the upgrade costs and effects in `game.js` in the `constructor` method.

### Change Styling
Modify `style.css` to adjust colors, fonts, or layout.

All changes take effect immediately when you refresh the page.

## Browser Support

Works on:
- Chrome/Chromium (v60+)
- Firefox (v55+)
- Safari (v11+)
- Edge (all versions)
- Mobile browsers (iOS Safari, Android Chrome)

Requires `localStorage` support (enabled by default on all modern browsers).

## License

Made as a fan project inspired by Candy Box 1 & 2 by Aniwey.

Enjoy the sweet singularity! 🍬

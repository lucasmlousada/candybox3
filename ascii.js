// ASCII Art and Scene Definitions

const ASCII = {
    // Title ASCII
    title: `
  ╔═══════════════════════════════════╗
  ║                                   ║
  ║       CANDY BOX 3                 ║
  ║   An Incremental Adventure        ║
  ║                                   ║
  ║  2026 - The Candy Singularity     ║
  ║                                   ║
  ╚═══════════════════════════════════╝
    `,

    // Main scene - Candy Garden
    candyGarden: `
  ┌─────────────────────────────────┐
  │   THE CANDY GARDEN              │
  │                                 │
  │      * * *   * * *   * * *       │
  │    *  CANDY  CANDY  CANDY  *     │
  │   *    BUSH    BUSH    BUSH   *   │
  │    *  * * *   * * *   * * *  *    │
  │   *                           *   │
  │   *  The land is made of       *   │
  │   *  pure sweetness...         *   │
  │    *                         *    │
  │     *  *  *  *  *  *  *  *  *     │
  │      ═══════════════════════      │
  │         Candy Ground              │
  │                                 │
  └─────────────────────────────────┘
    `,

    // Combat scene - Neural Lemon
    combatScene: `
  ┌─────────────────────────────────┐
  │                                 │
  │   A NEURAL LEMON appears!       │
  │                                 │
  │        @@@@@                    │
  │       @     @                   │
  │       @ o o @    [AI THREAT]    │
  │       @  >  @                   │
  │       @     @                   │
  │        @@@@@                    │
  │                                 │
  │   HP: 25 / 25                   │
  │                                 │
  └─────────────────────────────────┘
    `,

    // Quest completion
    questComplete: `
  ┌─────────────────────────────────┐
  │                                 │
  │    ★ QUEST COMPLETE ★           │
  │                                 │
  │    Your candy has been          │
  │    recognized by The Council    │
  │    of Sweetness!                │
  │                                 │
  │    [+50 CANDY REWARD]           │
  │                                 │
  └─────────────────────────────────┘
    `,

    // Training AI
    trainingAI: `
  ┌─────────────────────────────────┐
  │  TRAINING NEURAL CANDY MODEL    │
  │                                 │
  │  [=======     ] 60%             │
  │                                 │
  │  Processing sweetness tokens... │
  │  Adjusting flavor weights...    │
  │                                 │
  │  Reward earned: +10 candy       │
  │                                 │
  └─────────────────────────────────┘
    `,

    // Hidden treasure
    hiddenTreasure: `
  ┌─────────────────────────────────┐
  │                                 │
  │   You found the Hidden          │
  │   Lollipop Treasury!            │
  │                                 │
  │        *~*~*~*~*~*              │
  │      ~*  LOLLIPOPS  *~           │
  │     ~*   EVERYWHERE   *~         │
  │      ~*             *~           │
  │        *~*~*~*~*~*              │
  │                                 │
  │   +200 CANDY EARNED!            │
  │                                 │
  └─────────────────────────────────┘
    `,

    // Shop/Merchant
    merchant: `
  ┌─────────────────────────────────┐
  │   THE CANDY MERCHANT            │
  │                                 │
  │    /\\_/\\                        │
  │   ( o.o )  "Welcome, explorer!" │
  │    > ^ <                        │
  │   /|   |\\                       │
  │    |   |                        │
  │                                 │
  │   Browse my wares...            │
  │                                 │
  └─────────────────────────────────┘
    `,

    // Upgrade purchased
    upgradePurchased: `
  ┌─────────────────────────────────┐
  │                                 │
  │    ✓ UPGRADE PURCHASED          │
  │                                 │
  │   Your candy generation         │
  │   capabilities have been        │
  │   ENHANCED!                     │
  │                                 │
  └─────────────────────────────────┘
    `,

    // Loot drop
    lootDrop: `
  ※  ※  ※  ※  ※  ※
    ※ LOOT DROP! ※
  ※  ※  ※  ※  ※  ※
    `,
};

// Scene descriptions
const SCENES = {
    start: {
        title: 'Welcome to Candy Box 3',
        text: `You awaken in a field of candy.

The year is 2026, and candy has become sentient.
You are the Candy Keeper.

Your quest: Harvest the candy singularity.

[Use the buttons below to begin your adventure]`
    },
    explored: {
        title: 'The Candy Garden',
        text: `You have explored the candy garden.

Candy bushes surround you, gently
generating candy from the quantum foam.

This is the source of all sweetness.`
    }
};

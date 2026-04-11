// Save System: localStorage + URL hash

const SAVE_KEY = 'candybox3_save';

const SaveSystem = {
    // Encode game state to compact base64 URL-safe string
    encode(gameState) {
        const json = JSON.stringify(gameState);
        // btoa encodes to base64, replace standard chars with URL-safe ones
        const base64 = btoa(json);
        const urlSafe = base64
            .replace(/\+/g, '-')
            .replace(/\//g, '_')
            .replace(/=/g, '');
        return urlSafe;
    },

    // Decode base64 URL-safe string back to game state
    decode(encoded) {
        try {
            // Restore padding
            let padded = encoded;
            padded += '='.repeat((4 - padded.length % 4) % 4);
            // Restore standard base64 chars
            const base64 = padded
                .replace(/-/g, '+')
                .replace(/_/g, '/');
            const json = atob(base64);
            return JSON.parse(json);
        } catch (e) {
            console.error('Failed to decode save:', e);
            return null;
        }
    },

    // Save to localStorage
    saveToLocal(gameState) {
        try {
            localStorage.setItem(SAVE_KEY, JSON.stringify(gameState));
        } catch (e) {
            console.error('Failed to save to localStorage:', e);
        }
    },

    // Load from localStorage
    loadFromLocal() {
        try {
            const data = localStorage.getItem(SAVE_KEY);
            return data ? JSON.parse(data) : null;
        } catch (e) {
            console.error('Failed to load from localStorage:', e);
            return null;
        }
    },

    // Save to URL hash
    saveToHash(gameState) {
        const encoded = this.encode(gameState);
        window.location.hash = `save=${encoded}`;
    },

    // Load from URL hash (on page init)
    loadFromHash() {
        const hash = window.location.hash.substring(1);
        const params = new URLSearchParams(hash);
        const encoded = params.get('save');

        if (encoded) {
            return this.decode(encoded);
        }
        return null;
    },

    // Export save as text for user
    exportSave(gameState) {
        const encoded = this.encode(gameState);
        const text = `CANDY BOX 3 SAVE\n$ ${encoded}`;
        return text;
    },

    // Import save from text
    importSave(text) {
        // Extract the encoded part (after $)
        const lines = text.split('\n');
        for (let line of lines) {
            if (line.startsWith('$')) {
                const encoded = line.substring(2).trim();
                return this.decode(encoded);
            }
        }
        return null;
    },

    // Clear all saves
    clearAll() {
        localStorage.removeItem(SAVE_KEY);
        window.location.hash = '';
    }
};

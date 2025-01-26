const crypto = require('crypto');
const decryptionKey = Buffer.from(import.meta.env.ENCRYPTION_KEY, 'hex'); 
const iv = Buffer.from(import.meta.env.ENCRYPTION_IV, 'hex');

export function groupPlayers(players) {
    const currentPlayer = localStorage.getItem('username');
    const playerGroup = { main: -1, opponents: [] };
    const mainPlayerIndex = players.findIndex((username) => username === String(currentPlayer))

    if (mainPlayerIndex === -1) {
        throw new Error('Current player username does not match any player in the room');
    }

    // Group players by separating the main player and the opponents
    playerGroup.main = mainPlayerIndex;
    playerGroup.opponents = players
        .map((username, index) => index)
        .filter(index => index !== mainPlayerIndex);
        
    return playerGroup;
}

export function groupPlayedCards(players, playedCards) {
    const bids = {};

    playedCards.forEach((playedCard) => {
        if (!(playedCard.username in bids)) {
            bids[playedCard.username] = [playedCard.card];
        } else {
            bids[playedCard.username].push(playedCard.card);
        }
    });

    return bids;
}

// Decrypt function for AES-256-CBC
function decrypt(encryptedData) {
    const decipher = crypto.createDecipheriv('aes-256-cbc', decryptionKey, iv);
    let decrypted = decipher.update(encryptedData, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return JSON.parse(decrypted);
}

// Decrypt the game state (only the current player's hand)
export function decryptGameState(gameState, currentPlayer) {
    return gameState.players.map(player => {
        if (player.playerInfo.username === currentPlayer) {
            // Decrypt the hand of the current player
            return {
                ...player,
                hand: decrypt(player.hand),
            };
        } else {
            // Hide the hand of other players
            return { ...player, hand: ["EAT SHIT YOU PEASANT!"] };
        }
    });
}

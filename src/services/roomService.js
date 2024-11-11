import { playCard } from "../redux/slices/gameSlice";

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

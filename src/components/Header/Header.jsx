import React from "react";
import Header from "../../components/Header/Header";

function Learn() {
    return (
        <div className="bg-[#f5f5f5] text-black min-h-screen flex flex-col">
            {/* Header */}
            <Header />

            {/* Main Content */}
            <div className="flex-grow container mx-auto px-4 sm:px-8 py-8">
                <h1 className="text-green-900 text-4xl font-bold mb-6 text-center">
                    How to Play Ghanaian Poker
                </h1>

                <section className="mb-10">
                    <h2 className="text-green-700 text-2xl font-semibold mb-4">
                        Requirements
                    </h2>
                    <ul className="list-disc pl-6 text-gray-700">
                        <li>A deck of cards</li>
                        <li>2–4 players</li>
                        <li>A table</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="text-green-700 text-2xl font-semibold mb-4">
                        Players and Their Roles
                    </h2>
                    <h3 className="text-green-600 text-xl font-medium mb-2">
                        The Dealer
                    </h3>
                    <ul className="list-disc pl-6 text-gray-700">
                        <li>
                            Randomly assigned to shuffle and share cards after the leader
                            grants permission.
                        </li>
                        <li>
                            Shares cards in two rounds:
                            <ul className="list-decimal pl-6">
                                <li>3 cards to each player in an anticlockwise manner.</li>
                                <li>2 additional cards to each player, making 5 cards in total.</li>
                            </ul>
                        </li>
                    </ul>

                    <h3 className="text-green-600 text-xl font-medium mt-4 mb-2">
                        The Leader
                    </h3>
                    <ul className="list-disc pl-6 text-gray-700">
                        <li>
                            Grants permission to deal cards by:
                            <ul className="list-decimal pl-6">
                                <li>Dividing the deck into two parts.</li>
                                <li>Hitting the deck.</li>
                                <li>Verbally instructing the dealer to proceed.</li>
                            </ul>
                        </li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="text-green-700 text-2xl font-semibold mb-4">Cards</h2>
                    <p className="text-gray-700 mb-4">
                        The total cards used depend on the game version:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700">
                        <li>
                            <strong>Advanced:</strong> 27 cards (ranks 7–King except Spades).
                        </li>
                        <li>
                            <strong>Intermediate:</strong> 32 cards (ranks 6–King).
                        </li>
                        <li>
                            <strong>Beginner:</strong> 36 cards (ranks 6–Ace).
                        </li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="text-green-700 text-2xl font-semibold mb-4">
                        Logic Behind the Game
                    </h2>
                    <p className="text-gray-700 mb-4">The game progresses as follows:</p>
                    <ol className="list-decimal pl-6 text-gray-700">
                        <li>
                            The leader bids by playing a card. Other players must follow suit
                            with a higher rank if possible.
                        </li>
                        <li>
                            If a player cannot follow suit, they play any card but must still
                            follow suit if they can.
                        </li>
                        <li>
                            The player with the highest-ranking card of the leading suit wins
                            the move and becomes the next bidder.
                        </li>
                        <li>
                            Steps repeat until all cards are played. The player who wins the
                            last move earns points for the round.
                        </li>
                    </ol>
                </section>

                <section>
                    <h2 className="text-green-700 text-2xl font-semibold mb-4">
                        Scoring System
                    </h2>
                    <p className="text-gray-700 mb-4">
                        Points are awarded based on the rank of the winning card in the last
                        move of a round:
                    </p>
                    <table className="table-auto w-full text-left border border-green-300">
                        <thead className="bg-green-100 text-green-700">
                            <tr>
                                <th className="px-4 py-2">Card Rank</th>
                                <th className="px-4 py-2">Points Awarded</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700">
                            <tr>
                                <td className="px-4 py-2">6</td>
                                <td className="px-4 py-2">3 points</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">7</td>
                                <td className="px-4 py-2">2 points</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">8, 9, 10, Jack, Queen, King</td>
                                <td className="px-4 py-2">1 point</td>
                            </tr>
                        </tbody>
                    </table>
                    <p className="text-gray-700 mt-4">
                        Special combinations (e.g., three 6s or 7s in specific moves) grant
                        bonus points.
                    </p>
                </section>
            </div>
        </div>
    );
}

export default Learn;

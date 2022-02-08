'use strict';

const game = {
   team1: 'Bayern Munich',
   team2: 'Borrussia Dortmund',
   players: [
      ['Neuer', 'Pavard', 'Martinez', 'Alaba', 'Davies', 'Kimmich', 'Goretzka', 'Coman', 'Muller', 'Gnarby', 'Lewandowski'],
      ['Burki', 'Schulz', 'Hummels', 'Akanji', 'Hakimi', 'Weigl', 'Witsel', 'Hazard', 'Brandt', 'Sancho', 'Gotze'],
   ],
   score: '4:0',
   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Muller'],
   date: 'Nov 9th, 2037',
   odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
   },
   printGoals: function (...players) {
      console.log(`%cPlayers: `, styleRed);
      players.forEach(player => console.log(`%c${player}`, styleGreen));

      console.log(`%cGoals: `, styleYellow);
      console.log(`Total goals: %c${players.length}`, styleYellow);
   },
};

// console.log(``, 'color: green; font-style:italic');
const styleGreen = 'color: green; font-style: italic';
const styleRed = 'color: red; font-weight: bold';
const styleYellow = 'color: yellow';

// 1.
console.log('%c1.', styleGreen);
for (const [i, player] of game.scored.entries()) console.log(`Goal ${i + 1}: ${player}`);

// 2.
console.log('%c2.', styleGreen);
let average = 0;
for (const odd of Object.values(game.odds)) average += odd;
average = average / 3;
console.log('Average odd:', average.toFixed(2));

// 3.
console.log('%c3.', styleGreen);
const entries = Object.entries(game.odds);
for (const [team, odd] of entries) {
   game[team] ? console.log(`Odd of victory ${game[team]}: ${odd}`) : console.log(`Odd of draw: ${odd}`);
}

// BONUS
console.log('%cBONUS.', styleGreen);
const scorers = {};
for (const player of game.scored) {
   scorers[player] ? (scorers[player] += 1) : (scorers[player] = 1);
}
console.log('scorers:', scorers);

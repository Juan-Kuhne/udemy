const game = {
   team1: 'Bayern Munich',
   team2: 'Borrussia Dortmund',
   players: [
      ['Neuer', 'Pavard', 'Martinez', 'Alaba', 'Davies', 'Kimmich', 'Goretzka', 'Coman', 'Muller', 'Gnarby', 'Lewandowski'],
      ['Burki', 'Schulz', 'Hummels', 'Akanji', 'Hakimi', 'Weigl', 'Witsel', 'Hazard', 'Brandt', 'Sancho', 'Gotze'],
   ],
   score: '4:0',
   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
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
const [players1, players2] = [...game.players];
console.log(`players1: %c${players1}`, styleGreen);
console.log(`players2: %c${players2}`, styleGreen);

// 2.
const [gk, ...fieldPlayers] = players1;
console.log(`gk: %c${gk}`, styleGreen);
console.log(`fieldPlayers: %c${fieldPlayers}`, styleGreen);

// 3.
const allPlayers = [...players1, ...players2];
console.log(`allPlayers: %c${allPlayers}`, styleGreen);

// 4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(`players1Final: %c${players1Final}`, styleGreen);

// 5.
const {
   odds: { team1, x: draw, team2 },
} = game;
console.log(`team1: %c${team1}`, styleGreen);
console.log(`draw: %c${draw}`, styleGreen);
console.log(`team2: %c${team2}`, styleGreen);

// 6.
game.printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
game.printGoals(...game.scored);

// 7.
team1 < team2 && console.log('%cTeam 1 is more likely to win', styleGreen);
team1 < team2 && console.log('%cTeam 2 is more likely to win', styleGreen);

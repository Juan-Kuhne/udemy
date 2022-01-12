console.log("Coding Challenge #1");

const calcAverage = (pt1, pt2, pt3) => (pt1 + pt2 + pt3) / 3;

const avgDolphins = calcAverage(85, 54, 41);
const avgKoalas = calcAverage(23, 34, 27);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
  } else {
    console.log(`No winner ... (D${avgDolphins} vs K${avgKoalas})`);
  }
}

checkWinner(avgDolphins, avgKoalas);

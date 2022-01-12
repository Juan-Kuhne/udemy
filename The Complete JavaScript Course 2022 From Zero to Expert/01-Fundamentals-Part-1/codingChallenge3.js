console.log("Coding Challenge #3");

const avr = (pt1, pt2, pt3) => {
  return (pt1 + pt2 + pt3) / 3;
};

/* const dolphinsAvr = avr(96, 108, 89);
const koalasAvr = avr(88, 91, 110);

console.log(`Dolphins: ${dolphinsAvr}\nKoalas: ${koalasAvr}`);

if (dolphinsAvr > koalasAvr) {
  console.log("Dolphins wins!");
} else if (dolphinsAvr < koalasAvr) {
  console.log("Koalas wins!");
} else {
  console.log("It's a draw!");
} */

//Bonus #1 #2 ================================================
// const dolphinsAvr = avr(97, 112, 101);
// const koalasAvr = avr(109, 95, 123);

const dolphinsAvr = avr(97, 112, 101);
const koalasAvr = avr(109, 95, 106);

console.log(`Dolphins: ${dolphinsAvr}\nKoalas: ${koalasAvr}`);

if (dolphinsAvr >= 100 && koalasAvr >= 100) {
  if (dolphinsAvr > koalasAvr) {
    console.log("Dolphins wins!");
  } else if (dolphinsAvr < koalasAvr) {
    console.log("Koalas wins!");
  } else {
    console.log("It's a draw!");
  }
} else {
  console.log("There's no winner ...");
}

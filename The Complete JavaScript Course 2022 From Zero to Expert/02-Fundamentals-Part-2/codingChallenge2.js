"use strict";

console.log("Coding Challenge #2");

const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;

const bills = [125, 555, 44];

const tips = [];
const total = [];
bills.forEach((bill) => {
  const tip = calcTip(bill);
  tips.push(tip);
  total.push(bill + tip);
});

console.log(bills);
console.log(tips);
console.log(total);

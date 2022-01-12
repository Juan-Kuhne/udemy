console.log("Coding Challenge #4");

const bill = 430;
const tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;

console.log(`Bill: U$${bill}`);
console.log(`Tip: U$${tip}`);
console.log(`Total: U$${bill + tip}`);

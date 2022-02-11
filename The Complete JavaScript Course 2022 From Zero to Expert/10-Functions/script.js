'use strict';

/* 
///////////////////////////////////////////////////////////////
// Default parameters
const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers) {
   // ES5
   // numPassengers = numPassengers || 1;
   // price = price || 199;
   const booking = {
      flightNum,
      numPassengers,
      price,
   };

   console.log(booking);
   bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

createBooking('LH123', undefined, 1000); */

/* 
////////////////////////////////////////////////////////////////
// Passing arguments: value x reference
const flight = 'LH234';
const jonas = {
   name: 'Jonas Schmedtmann',
   passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
   flightNum = 'LH999';
   passenger.name = 'Mr.' + passenger.name;

   if (passenger.passport === 24739479284) {
      alert('Check in');
   } else {
      alert('Wrong passport!');
   }
};

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

const newPassport = function (person) {
   person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(jonas);
checkIn(flight, jonas); */

/* 
/////////////////////////////////////////////////////////////////////////
// functions accepting callback functions
const oneWord = function (str) {
   return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
   const [first, ...others] = str.split(' ');
   return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
   console.log(`Original String: ${str}`);
   console.log(`Transformed string: ${fn(str)}`);

   console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

const high5 = function () {
   console.log('👋');
};
document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5); */

/* 
////////////////////////////////////////////////////////////
// Functions returning functions
// const greet = function (greeting) {
//    return function (name) {
//       console.log(`${greeting} ${name}`);
//    };
// };

// Challenge
const greet = greeting => name => console.log(`${greeting} ${name}`);

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Jonas'); */

/* 
//////////////////////////////////////////////////////////////////////////
// The call and apply methods
const lufthansa = {
   airline: 'Lufthansa',
   iataCode: 'LH',
   bookings: [],
   // book: function() {}
   book(flightNum, name) {
      console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
      this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
   },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

const eurowings = {
   name: 'Eurowings',
   iataCode: 'EW',
   bookings: [],
};

const book = lufthansa.book;

// Does not work
// book(23, 'Sara Willians');

//Call method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

lufthansa.book.call(lufthansa, 66, 'Bigaill');
console.log(lufthansa);

const swiss = {
   airline: 'Swiss Air Lines',
   iataCode: 'LX',
   bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

// Apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

// Bind method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schmedtmann');
bookEW23('Martha Cooper');

// With event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
   this.planes++;
   console.log(this.planes);
};

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23
console.log(addVAT(23));

// const addTaxRate = function (rate) {
//    return function (value) {
//       return addTax(rate, value);
//    };
// };
// const addVAT2 = addTaxRate(0.23);
const addtaxrate = rate => value => addTax(rate, value);
const addVAT2 = addtaxrate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23)); */

/* 
//////////////////////////////////////////////////////////
// Immediately invoked function expressions
const runOnce = function () {
   console.log('This will never run again');
};
runOnce();

(function () {
   console.log('This will never run again');
})();

(() => console.log('This will ALSO never run again'))(); */

//////////////////////////////////////////////////////////////
// Closures

// const secureBooking = function () {
//    let passengerCount = 0;

//    return function () {
//       passengerCount++;
//       console.log(`${passengerCount} passengers`);
//    };
// };

// const booker = secureBooking();

// booker();
// booker();
// booker();

// console.dir(booker);

let f;

const g = function () {
   const a = 23;
   f = function () {
      console.log(a * 2);
   };
};

const h = function () {
   const b = 777;
   f = function () {
      console.log(b * 2);
   };
};

g();
f();

// Re-assigning f function
h();
f();
console.dir(f);

// Example 2
const boardPassengers = function (n, wait) {
   const perGroup = n / 3;

   setTimeout(function () {
      console.log(`We are now boarding all ${n} passengers`);
      console.log(`There are three groups, each with ${perGroup} passengers`);
   }, 1000 * wait);

   console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassengers(180, 3);

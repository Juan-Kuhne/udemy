'use strict';

// Data needed for a later exercise
const flights =
   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
   [weekdays[3]]: {
      open: 12,
      close: 22,
   },
   [weekdays[4]]: {
      open: 11,
      close: 23,
   },
   [weekdays[5]]: {
      open: 0, // Open 24 hours
      close: 24,
   },
};

const restaurant = {
   name: 'Classico Italiano',
   location: 'Via Angelo Tavanti 23, Firenze, Italy',
   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

   // ES6 enhanced object literals
   openingHours,

   order(starterIndex, mainIndex) {
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
   },

   orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
      console.log(`Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
   },

   orderPasta(ing1, ing2, ing3) {
      console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
   },

   orderPizza(mainIngredient, ...otherIngredients) {
      console.log(mainIngredient);
      console.log(otherIngredients);
   },
};

const airline = 'TAP Air Portugal';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix caputalization in name
const passenger = 'JoNaS'; //Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

//Comparing emails
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// Replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement = 'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));

//Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Air'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) console.log('Part of the new Airbus family!');

//Practice exercise
const checkBaggage = function (items) {
   const baggage = items.toLowerCase();
   if (baggage.includes('knife') || baggage.includes('gun')) {
      console.log('You are not allowed on board');
   } else {
      console.log('Welcome aboard');
   }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

/* 
//////////////////////////////////////////////////////
// Working with strings - part 1
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-5));
console.log(airline.slice(1, -5));

const checkMiddleSeat = function (seat) {
   // B and E are middle seats
   const s = seat.slice(-1);
   if (s === 'B' || s === 'E') console.log('You got the middle seat 😁');
   else console.log('You got lucky 😎');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E'); */

/* 
/////////////////////////////////////////////////////////////////
// Maps: Iteration
const question = new Map([
   ['question', 'What is the best programming language in the world?'],
   [1, 'C'],
   [2, 'Java'],
   [3, 'JavaScript'],
   ['correct', 3],
   [true, 'Correct 🎉'],
   [false, 'Try again!'],
]);

console.log(question);

// Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz app
console.log('%cQuiz App', 'color: green');
console.log(question.get('question'));
for (const [key, value] of question) {
   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
const answer = Number(prompt('Your answer'));
console.log(answer);
console.log(question.get(answer === question.get('correct')));

// Convert map to array
console.log([...question]);
console.log(question.entries());
console.log(...question.keys());
console.log(question.values()); */

/* 
///////////////////////////////////////////////////////////
// Maps: fundamentals
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
   .set('open', 11)
   .set('close', 23)
   .set(true, 'We are open :D')
   .set(false, 'We are closed :(');

console.log(rest);

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
console.log(rest);
console.log(rest.size);
// rest.clear();

const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.get(arr)); */

/* 
//////////////////////////////////////////////////////////////////////////////////
// Sets
const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);
console.log(ordersSet);

console.log(new Set('Jonas'));

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
console.log(ordersSet);
ordersSet.delete('Risotto');
// ordersSet.clear();
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(new Set(staff).size); // quantity of different staffs
console.log(new Set('jonasschmedtmann').size); // quantity of different letters */

/* 
//////////////////////////////////////////////////////////////
// Looping Objects
// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);
let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
   openStr += `${day}, `;
}
console.log(openStr);

// Property VALUES
const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
console.log(entries);

// [key, value]
for (const [key, { open, close }] of entries) {
   console.log(`On ${key} we open at ${open} and close at ${close}`);
} */

/* 
//////////////////////////////////////////////////////
// Enhanced object literals
if (restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// With optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
   // console.log(day);
   const open = restaurant.openingHours[day]?.open ?? 'closed';
   console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.orderRizotto?.(0, 1) ?? 'Method does not exist');

// Arrays
const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
console.log(users[0]?.name ?? 'Users array empty');
 */

/* 
/////////////////////////////////////////////////////////////
// The for-of loops
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

// console.log([...menu.entries()]);
for (const [i, el] of menu.entries()) {
   console.log(`${i + 1}: ${el}`);
}
 */

/* 
/////////////////////////////////////////////////////
// Logical assignment operators
const rest1 = {
   name: 'Capri',
   // numGuests: 20,
   numGuests: 0,
};

const rest2 = {
   name: 'La Piazza',
   owner: 'Giovanni Rossi',
};

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// Nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND assignment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);
 */

/* 
////////////////////////////////////////////////////
// The Nullish Coalescing Operator
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
 */

/* 
////////////////////////////////////////////////////
// Short circuiting (&& and ||)
console.log('---- OR ----');
// Use ANY, data type, return ANY data type, short-circuiting
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('---- AND ----');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && 'Jonas');

// Practical example
if (restaurant.orderPizza) {
   restaurant.orderPizza('mushrooms', 'spinach');
}
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
 */

/* 
//////////////////////////////////////////////////
// Rest pattern and parameters
// 1) Destructurig

// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = { ...restaurant.openingHours };
console.log(sat, weekdays);

// 2) Functions
const add = function (...numbers) {
   let sum = 0;
   numbers.forEach(num => (sum += num));
   console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushroms', 'onions', 'olives', 'spinach');
restaurant.orderPizza('mushroms');
 */

/* 
/////////////////////////////////////////////////////
// The Spread Operator
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const goodNewArr = [1, 2, ...arr];
console.log(goodNewArr);

console.log(...goodNewArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);

// Real world example
// const ingredients = [prompt("Let's make pasta! Ingredient 1?"), prompt('Ingredient 2?'), prompt('Ingredient 3?')];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
 */

/* restaurant.orderDelivery({
   time: '22:30',
   address: 'Via del sole, 21',
   mainIndex: 2,
   starterIndex: 2,
});

restaurant.orderDelivery({
   address: 'Via del sole, 21',
   starterIndex: 2,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// Nested objects
const {
   fri: { open: o, close: c },
} = openingHours;
console.log(o, c); */

/* const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);
[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

//Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); */

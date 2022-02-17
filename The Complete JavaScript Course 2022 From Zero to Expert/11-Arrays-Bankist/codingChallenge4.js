'use strict';

const dogs = [
   { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
   { weight: 8, curFood: 200, owners: ['Matilda'] },
   { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
   { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1.
dogs.forEach((dog, i, arr) => (dog.recFood = Number((dog.weight ** 0.75 * 28).toFixed())));
console.log(dogs);

// 2.
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(`Sarah's dog is eating too ${dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'}`);

// 3.
const ownersTooMuch = dogs.filter(dog => dog.curFood > dog.recFood).flatMap(dog => dog.owners);
const ownersTooLittle = dogs.filter(dog => dog.curFood < dog.recFood).flatMap(dog => dog.owners);

console.log(`Too much: ${ownersTooMuch}`);
console.log(`Too little: ${ownersTooLittle}`);

// 4.
console.log(`${ownersTooMuch.join(' and ')}'s dogs eat too much`);
console.log(`${ownersTooLittle.join(' and ')}'s dogs eat too little`);

// 5.
console.log(dogs.some(dog => dog.curFood === dog.recFood));

// 6.
// const dogsEatingOK = dog => dog.curFood >= dog.recFood * 0.9 && dog.curFood <= dog.recFood * 1.1;
const dogsEatingOK = dog => dog.curFood >= dog.recFood * 0.9 && dog.curFood <= dog.recFood * 1.1;
console.log(dogs.some(dogsEatingOK));

// 7.
console.log(dogs.filter(dogsEatingOK));

// 8.
console.log(dogs.slice().sort((a, b) => a.recFood - b.recFood));

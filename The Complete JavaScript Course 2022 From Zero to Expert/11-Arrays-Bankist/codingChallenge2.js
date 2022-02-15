'use strict';

// TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
// TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = dogAgeList => {
   return dogAgeList
      .map(age => (age <= 2 ? 2 * age : 16 + age * 4)) // converts all the ages
      .filter(age => age >= 18) // filter adults dogs
      .reduce((acc, age, i, arr) => acc + age / arr.length, 0); // sums up all of the filtered ages
};

console.log(calcAverageHumanAge(data1));
console.log(calcAverageHumanAge(data2));

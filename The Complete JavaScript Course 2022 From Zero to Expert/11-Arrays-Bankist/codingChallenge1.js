'use strict';
// TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
const juliaData1 = [3, 5, 2, 12, 7];
const kateData1 = [4, 1, 15, 8, 3];
const juliaData2 = [9, 16, 6, 8, 3];
const kateData2 = [10, 5, 6, 1, 4];

const checkDogs = (dogsJulia, dogsKate) => {
   const juliaCorrect = dogsJulia.slice(1, -2);
   console.log(juliaCorrect);

   const data = [...juliaCorrect, ...dogsKate];
   console.log(data);

   data.forEach((age, dogNum) => {
      const dogClass = age >= 3 ? `is an adult, and is ${age} years old` : `is still a puppy 🐶`;
      console.log(`Dog number ${dogNum + 1} ${dogClass}`);
   });
};

console.log('---- Test Data 1 ----');
checkDogs(juliaData1, kateData1);
console.log('---- Test Data 2 ----');
checkDogs(juliaData2, kateData2);

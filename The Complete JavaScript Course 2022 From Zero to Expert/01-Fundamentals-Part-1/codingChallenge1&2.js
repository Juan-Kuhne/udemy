/*
Coding Challenge #1

Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK
*/

console.log("===========================================");
console.log("Coding Challenge #1");
console.log("===========================================");

const bmi = (mass, height) => {
  return mass / height ** 2;
};

// const mMass = 78;
// const mHeight = 1.69;
// const jMass = 92;
// const jHeight = 1.95;

const mMass = 95;
const mHeight = 1.88;
const jMass = 85;
const jHeight = 1.76;

const mBmi = bmi(mMass, mHeight);
const jBmi = bmi(jMass, jHeight);

const markHigherBMI = mBmi > jBmi;

console.log(`Mark: ${mBmi}\nJohn: ${jBmi}`);
markHigherBMI ? console.log("Higher: Mark") : console.log("Higher: John");

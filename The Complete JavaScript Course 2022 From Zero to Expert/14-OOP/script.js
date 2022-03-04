'use strict';
/* 
const Person = function (firstName, birthYear) {
   // Instance properties
   this.firstName = firstName;
   this.birthYear = birthYear;

   // Never do this
   // this.calcAge = function () {
   //    console.log(2037 - this.birthYear);
   // };
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

const jay = 'Jay';

console.log(jonas instanceof Person);
console.log(jay instanceof Person);

// Prototypes
console.log(Person.prototype);
Person.prototype.calcAge = function () {
   console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

// .prototypeOfLinkedObjects

Person.prototype.species = 'Homo Sapiens';
console.log(jonas, matilda);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

console.log(jonas.__proto__);
// Object.prototype (top of prototype chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.log(Person.prototype.constructor);

const arr = [3, 6, 6, 5, 6, 9, 9]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
   return [...new Set(this)];
};
console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1); */

/* 
/////////////////////////////////////////////////////
// ES6 classes

// class expression
// const PersonCl = class {}

// class declaration
class PersonCl {
   constructor(fullName, birthYear) {
      this.fullName = fullName;
      this.birthYear = birthYear;
   }

   // Instance methods
   // Methods will be added to .prototype property
   calcAge() {
      console.log(2037 - this.birthYear);
   }

   greet() {
      console.log(`Hey ${this.fullName}`);
   }

   get age() {
      return 2037 - this.birthYear;
   }

   set fullName(name) {
      if (name.includes(' ')) this._fullName = name;
      else alert(`${name} is not a full name`);
   }

   get fullName() {
      return this._fullName;
   }

   // Static method
   static hey() {
      console.log('Hey there 👋🏻');
      console.log(this);
   }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//    console.log(`Hey ${this.firstName}`);
// };
jessica.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizes
// 3. Classes are executed in strict mode

const walter = new PersonCl('Walter White', 1965);

// PersonCl.hey(); */

/* 
/////////////////////////////////////////////////////
// Getters and setters
const account = {
   owner: 'jonas',
   movements: [200, 530, 120, 300],
   
   get latest() {
      return this.movements.slice(-1).pop();
   },
   
   set latest(mov) {
      this.movements.push(mov);
   },
};

console.log(account.latest); // getter
account.latest = 50; // setter
console.log(account.movements); */

/* 
/////////////////////////////////////////////////////
// Object.create
const PersonProto = {
   calcAge() {
      console.log(2037 - this.birthYear);
   },

   init(firstName, birthYear) {
      this.firstName = firstName;
      this.birthYear = birthYear;
   },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge(); */

/* 
/////////////////////////////////////////////////////
// Inheritance between "Classes": Constructor functions

const Person = function (firstName, birthYear) {
   this.firstName = firstName;
   this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
   console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
   Person.call(this, firstName, birthYear);
   this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
   console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor); */

/////////////////////////////////////////////////////
// Inheritance between "Classes": ES6 Classes
class PersonCl {
   constructor(fullName, birthYear) {
      this.fullName = fullName;
      this.birthYear = birthYear;
   }

   // Instance methods
   calcAge() {
      console.log(2037 - this.birthYear);
   }

   greet() {
      console.log(`Hey ${this.fullName}`);
   }

   get age() {
      return 2037 - this.birthYear;
   }

   set fullName(name) {
      if (name.includes(' ')) this._fullName = name;
      else alert(`${name} is not a full name`);
   }

   get fullName() {
      return this._fullName;
   }

   // Static method
   static hey() {
      console.log('Hey there 👋🏻');
      console.log(this);
   }
}

class StudenCl extends PersonCl {
   constructor(fullName, birthYear, course) {
      // Always needs to happen first!
      super(fullName, birthYear);
      this.course = course;
   }

   introduce() {
      console.log(`My name is ${this.fullName} and I study ${this.course}`);
   }

   calcAge() {
      console.log(`I'm ${2037 - this.birthYear} years old, but as a student I feel more like ${2037 - this.birthYear + 10}`);
   }
}

const martha = new StudenCl('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();

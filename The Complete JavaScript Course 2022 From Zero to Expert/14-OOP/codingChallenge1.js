'use strict';

const Car = function (make, speed) {
   this.make = make;
   this.speed = speed;
};

Car.prototype.accelerate = function () {
   this.speed += 10;
   console.log(`Current speed: ${this.speed} Km/h`);
};

Car.prototype.brake = function () {
   this.speed -= 5;
   console.log(`Current speed: ${this.speed} Km/h`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
bmw.brake();

mercedes.brake();
mercedes.brake();
mercedes.brake();
mercedes.accelerate();

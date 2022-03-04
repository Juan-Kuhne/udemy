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

const EV = function (make, speed, charge) {
   Car.call(this, make, speed);
   this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
   this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
   this.speed += 20;
   this.charge--;
   console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`);
};

const tesla = new EV('Tesla', 120, 23);
tesla.accelerate();
tesla.brake();
console.log(tesla.charge + '%');
tesla.chargeBattery(90);
console.log(tesla.charge + '%');

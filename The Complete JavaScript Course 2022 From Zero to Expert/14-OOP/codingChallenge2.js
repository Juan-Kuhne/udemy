class Car {
   constructor(make, speed) {
      this.make = make;
      this.speed = speed;
   }

   accelerate() {
      this.speed += 10;
      console.log(`Current speed: ${this.speed} Km/h`);
   }

   brake() {
      this.speed -= 5;
      console.log(`Current speed: ${this.speed} Km/h`);
   }

   get speedUS() {
      return this.speed / 1.6;
   }

   set speedUS(speed) {
      this.speed = speed * 1.6;
   }
}

const ford = new Car('Ford', 120);

ford.accelerate();
ford.brake();
ford.brake();
console.log(`Speed: ${ford.speedUS} mi/h`);
ford.speedUS = 100;
console.log(`Speed: ${ford.speed} km/h = ${ford.speedUS} mi/h`);

"use strict";

class CarCL {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(this.speed);
  }

  brake() {
    this.speed -= 5;
    console.log(this.speed);
    return this;
  }

  speedUS() {
    this.speed /= 1.6;
    console.log(this.speed);
  }

  speedUS(speed) {
    this.speed = speed * 1.6;
    console.log(this.speed);
  }
}

class EVCL extends CarCL {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(this.speed, this.#charge);
    return this;
  }

  brake() {
    this.speed -= 10;
    return this;
  }
}

const rivian = new EVCL("Rivian", 120, 23);

rivian.accelerate().accelerate().accelerate().brake().chargeBattery(89).accelerate().brake();

console.log(rivian);

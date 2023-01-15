"use strict";

const  Car=function(make, speed)  {

    (this.make = make), (this.speed = speed);
  }

  Car.prototype.accelerate=function() {
    this.speed += 10;
    console.log(this.speed);
  }

  Car.prototype.brake=function() {
    this.speed -= 5;
    console.log(this.speed);
  }

Car.prototype.speedUS=function() {
    this.speed /= 1.6;
    console.log(this.speed);
  }

Car.prototype.speedUS=function(speed) {
    this.speed = speed * 1.6;
    console.log(this.speed);
  }


const ford = new Car("ford", 120);

// 


const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

// link car->ev
EV.prototype = Object.create(Car.prototype);


EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge *= 0.99;
  console.log(`Tesla going at ${this.speed}, with a charge of ${this.charge}`);
};

const tesla = new EV("Tesla", 120, 23);

tesla.chargeBattery(90)
console.log(tesla)



// ---------------------------------------------
// ----------------NEXT----------------
// ---------------------------------------------

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`Hello ${this.firstName}!`);
};

const nikos = new Student("nikos", 1993, "Computer Science");

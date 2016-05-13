var motorBike = {
  "wheels":2,
  "engines":1,
  "seats":2
};

var MotorBike = function() {
  this.wheels = 2;
  this.engines = 1;
  this.seats = 1;
};

var Car = function() {
  this.wheels = 4;
  this.engines = 1;
  this.seats = 1;
};

var myCar = new Car();
myCar.nickname = "betty";

var Car = function(wheels, seats, engines) {
  this.wheels = wheels;
  this.seats = seats;
  this.engines = engines;
};

var myCar = new Car(4,4,1);


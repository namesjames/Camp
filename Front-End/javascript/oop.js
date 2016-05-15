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

var Car = function() {
  var speed = 10;

  this.accelerate = function(change) {
    speed += change;
  };

  this.decelerate = function() {
    speed -= 5;
  };

  this.getSpeed = function() {
    return speed;
  };
};

var Bike = function() {


var gear;

  this.getGear = function(){
    return gear;
  };
  this.setGear = function(set){
   gear = set;
  };
};

var myCar = new Car();

var myBike = new Bike();

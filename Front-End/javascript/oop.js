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


var oldArray = [1,2,3,4,5];

var newArray = oldArray.map(function(val){
  return val + 3;
});

var array = [4,5,6,7,8];
var singleVal = 0;

singleVal = array.reduce(function(array, singleVal) {
  return array + singleVal;
});

var oldArray = [1,2,3,4,5,6,7,8,9,10];

var newArray = oldArray.filter(function(val) {
  return val < 6;
});

var array = [1, 12, 21, 2];

array.sort(function(a, b) {
  return b - a;
});


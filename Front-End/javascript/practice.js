// JS Practice

var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

var myStr = "\\\ \t \t \r \n";

/*
\'	single quote
\"	double quote
\\	backslash
\n	new line
\r	carriage return
\t	tab
\b	backspace
\f	form feed
*/

// Concatenation
var myStr = "This is the start. " + "This is the end.";

var myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";

var myName = "James";
var myStr = "My name is " + myName + " and I am swell!";

var someAdjective = "awesome!";

var firstNameLength = 0;
var firstName = "Ada";

firstNameLength = firstName.length;

var lastNameLength = 0;
var lastName = "Lovelace"

lastNameLength = lastName.length;
var myStr = "Learning to code is " 
myStr += someAdjective;

var firstLetterOfFirstName = "";
var firstName = "Ada";

firstLetterOfFirstName = firstName[0];
var lastLetterOfLastName = lastName[lastName.length -1];
var secondToLastLetterOfLastName = lastName[lastName.length -2];

// MadLibs
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  var result = "";
    result+= "My "+myAdjective+" "+myNoun+" "+myVerb+" very "+myAdverb+".";
  return result;
}
wordBlanks("cat", "little", "hit", "slowly");

// Arrays
var testArray = ["James", 25];
var nestedArray = [["Pizza", 5],["Burger",5], ["Soda", 1]];
var myArray = [1,2,3];
var myData = myArray[0];
myArray[0] = 3;
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
var myData = myArray[2][1];
myArray.push(["dog",3]);
var removedFromMyArray = myArray.pop();
var removedFromMyArray = myArray.shift();
myArray.unshift(["Paul",35]);
var myList = [["Rice", 3], ["Avocado", 4], ["Cilantro", 1.75], ["Beans", 2], ["Tortilla", 3]];

//functions
function myFunction() {
console.log("Hello World");
}
function myFunction(a, b) {
  console.log(a + b);
}
myFunction(1, 2);

var myGlobal = 10;
function fun1() 
oopsGlobal = 5;
}
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

function myFunction() {
  'use strict';
  var myVar = "foo";
  
  console.log(myVar);
}
myFunction();

function minusSeven(num) {
  return num - 7;
}

function timesFive(num){
 return num * 5;
}

var processed = 0;

function process(num) {
  return (num + 3) / 5;
}
processed = process(7);

//queues
function queue(arr, item) {
  arr.push(item);
  var removed = arr.shift();
  return removed;
}

var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr));
console.log(queue(testArr, 6)); 
console.log("After: " + JSON.stringify(testArr));

function myFunction(wasThatTrue) {
  if (wasThatTrue) {
    return "That was true";
    }
    return "That was false";
    }
myFunction(true);
myFunction(false);

function myTest(val) {
  if (val == 12) { 
    return "Equal";
  }
  return "Not Equal";
}

function myTest(val) {
  if (val === 7) { 
    return "Equal";
  }
  return "Not Equal";
}

function myTest(val) {
  if (val != 99) { 
    return "Not Equal";
  }
  return "Equal";
}

function myTest(val) {
  if (val <= 12) {
    return "Smaller Than or Equal to 12";
  }
  
  if (val <= 24) {  
    return "Smaller Than or Equal to 24";
  }

  return "25 or More";
}

function myTest(val) {

  if (val > 24 && val < 51) {
      return "Yes";
  }

  return "No";
}

function myTest(val) {

  if (val < 10 || val > 20) {
    return "Outside";
  }

  return "Inside";
}

function myTest(val) {
  var result = "";
  
  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }

  return result;
}

function myTest(val) {
 
 if (val > 10) {
    return "Greater than 10";
  
  } else if (val < 5) {
    return "Smaller than 5";

  } else {
  return "Between 5 and 10";
  }
}

function myTest(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

function myTest(num) {
  if (num < 5) {
  return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else if (num >= 20) {
      return "Huge";
  }
}

function isLess(a, b) {
  return (a < b); 
}
isLess(10, 15);

function myTest(val) {

var answer = "";

  switch (val) {
    case 1: 
      answer = "alpha"; 
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
    break;
  }  
  return answer;
} 

function switchOfStuff(val) {
  var answer = "";
  
  switch (val) {
  case "a":
    answer = "apple";
    break;
  case "b":
    answer = "bird";
    break;
  case "c":
    answer = "cat";
    break;
  default:
    answer = "stuff";
}
  
  return answer;  
}

function abTest(a, b) {
  if (a < 0) {
    return undefined;
  }
  if (b < 0) {
    return undefined;
  }

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(-2,2);

var myDog = {
  "name": "Cooper",
  "legs": 4,
  "tails": 1,
  "friends": ["Me, Tanya, Jack, Squirrell"]
};

var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

var hatValue = testObj.hat;
var shirtValue = testObj.shirt;

var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

var entreeValue = testObj["an entree"];
var drinkValue = testObj["the drink"];

var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

var playerNumber = 16; 
var player = testObj[playerNumber];

var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.name = "Happy Camper";

var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["Free Code Camp Campers"]
};

myDog.name = "Happy Coder";

var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.bark = "bow-wow";

var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["Camp Campers"]
};

myDog.bark = "woof";

var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["Free Code Camp Campers"],
  "bark": "woof"
};

delete myDog.tails;

function phoneticLookup(val) {
  var result = "";

var lookup = {
"alpha":"Adams",
"bravo":"Boston",
"charlie":"Chicago",
"delta":"Denver",
"echo":"Easy",
"foxtrot":"Frank"
};

  return result = lookup[val];
}

var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  if (myObj.hasOwnProperty(checkProp)) {
return myObj[checkProp];
  } else {
return "Not Found";
  }
}

var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

var gloveBoxContents = myStorage.car.inside["glove box"];

var myPlants = [
  { 
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }  
];

var secondTree = myPlants[1].list[1];

var collection = {
    2548: {
      album: "Slippery When Wet",
      artist: "Bon Jovi",
      tracks: [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    2468: {
      album: "1999",
      artist: "Prince",
      tracks: [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    1245: {
      artist: "Robert Palmer",
      tracks: [ ]
    },
    5439: {
      album: "ABBA Gold"
    }
};
var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
if (prop === "tracks" && value !== "") {
    collection[id][prop].push(value);
  } else if (value !== ""){
    collection[id][prop] = value;
  } else {
    delete collection[id][prop];
  }

  return collection;
}

var myArray = [];

for (var i=1; i<=5; i++) {
  myArray.push(i);
}

var myArray = [];

for (var i=1; i < 10; i+=2) {
  myArray.push(i);
}

var myArray = [];

for (var i = 9; i > 0; i-=2) {
  myArray.push(i);
}


function multiplyAll(arr) {
  var product = 1;
  for (var i=0; i < arr.length; i++) {
  for (var j=0; j < arr[i].length; j++) {
  product = (arr[i][j] * product);
  }
}
  return product;
}

multiplyAll([[1,2],[3,4],[5,6,7]]);


function randomFraction() {

  return Math.random();


var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {

  return Math.floor(Math.random() * 10);
}

function randomRange(myMin, myMax) {

  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;

}

var myRandom = randomRange(5, 15);

var expressionToGetSoftware = /software/gi;
var softwareCount = testString.match(expressionToGetSoftware).length;

var expression = /and/gi; 

var andCount = testString.match(expression).length;

var testString = "There are 3 cats but 4 dogs.";

var expression = /\d+/g;  

var digitCount = testString.match(expression).length;

var testString = "How many spaces are there in this sentence?";

var expression = /\s+/g;

var spaceCount = testString.match(expression).length;

var testString = "How many non-space characters are there in this sentence?";

var expression = /\S/g;

var nonSpaceCount = testString.match(expression).length;

var ourArr = [ 9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
  ourTotal += ourArr[i];
}

var myArr = [ 2, 3, 4, 5, 6];

var total = 0;

for (var i = 0; i < myArr.length; i++) {
  console.log(myArr[i]);

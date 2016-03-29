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

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

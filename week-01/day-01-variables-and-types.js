//Day 01: Variables and Data Types
//Practicing var, let, const and primitive types in JavaScript 


// Using var
var myName = "Adrian";
console.log("My name is: " + myName);

myName = "Adrian2";
console.log("My new name is: " + myName);


// Using let
let myAge = 20;
console.log("My age is: " + myAge);

myAge = 21;
console.log("My new age is: " + myAge);


// Using const
const pi = 3.1415;
console.log("The value of pi is: " + pi);

// pi = 1; //Impossible: you can't reassign a const


// Primitive types
let myString = "anything";
let myNumber = 10;
let myBoolean = false;
let myNull = null;
let myUndefined; // Undefined: a variable that has not been initialized

// Using typeof to show the type of each variable
console.log("Type of myString:", typeof myString);
console.log("Type of myNumber:", typeof myNumber);
console.log("Type of myBoolean:", typeof myBoolean);
console.log("Type of myNull:", typeof myNull); // Note: typeof null is "object" (quirk in JS)
console.log("Type of myUndefined:", typeof myUndefined);
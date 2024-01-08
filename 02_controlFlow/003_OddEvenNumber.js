//! JavaScript program to check if the number is even or odd

//!METHOD 01: Using if...else

// take input from the user
const number = prompt("Enter a number: ");

//check if the number is even
if (number % 2 == 0) {
  console.log("The number is even.");
}

// if the number is odd
else {
  console.log("The number is odd.");
}

//!METHOD 02: Using Ternary Operator

// take input from the user
const num = prompt("Enter a number: ");

// ternary operator
const result = num % 2 == 0 ? "even" : "odd";

// display the result
console.log(`The number is ${result}.`);


//! JavaScript Program to Find Sum of Natural Numbers Using Recursion

function sum(num) {
   if(num > 0) {
       return num + sum(num - 1);
   }
   else {
       return num;
   }
}
//! ---------------------@TAZHEEB_SHAMSI---------------------
// take input from the user
const number = parseInt(prompt('Enter a positive integer: '));

const result = sum(number);

// display the result
console.log(`The sum is ${result}`);

//! FLOW OF CODE:

// In the above program, the user is prompted to enter a number.
// Then the sum() function is called by passing the parameter (here 5) that the user entered.
// If the number is greater than 0, the function calls itself by decreasing the number by 1.
// This process continues until the number is 1. When the number reaches 0, the program stops.
// If the user enters a negative number, the negative number is returned and the program stops.

// Here,
// sum(5) returns 5 + sum(4)
// sum(4) returns 5 + 4 + sum(3)
// sum(3) returns 5 + 4 + 3 + sum(2)
// sum(2) returns 5 + 4 + 3 + 2 + sum(1)
// sum(1) returns 5 + 4 + 3 + 2 + 1 + sum(0)
// sum(0) returns 5 + 4 + 3 + 2 + 1 + 0

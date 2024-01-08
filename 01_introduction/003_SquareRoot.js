// To find the square root of a number in JavaScript, 
// We can use the built-in Math.sqrt() function

//! Example 1: Square Root of a Number
// take the input from the user
const number = prompt('Enter the number: ');

const result = Math.sqrt(number);
console.log(`The square root of ${number} is ${result}`);

//! Example 2: Square Root of Different Data Types
const number1 = 2.25;
const number2 = -4;
const number3 = 'hello';

const result1 = Math.sqrt(number1);
const result2 = Math.sqrt(number2);
const result3 = Math.sqrt(number3);

console.log(`The square root of ${number1} is ${result1}`);
console.log(`The square root of ${number2} is ${result2}`);
console.log(`The square root of ${number3} is ${result3}`);

//Note:
// a. If 0 or a positive number is passed in the Math.sqrt() method, 
//    then the square root of that number is returned.
// b. If a negative number is passed, NaN is returned.
// c. If a string is passed, NaN is returned.
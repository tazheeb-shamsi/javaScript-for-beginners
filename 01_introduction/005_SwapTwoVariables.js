//! JavaScript Program to Swap Two Variables

//! Example 1: Using a Temporary Variable
//take input from the users
let a = prompt('Enter the first variable: ');
let b = prompt('Enter the second variable: ');

//create a temporary variable
let temp;

//swap variables
temp = a;
a = b;
b = temp;

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);

//! Let's see how the above program swaps values.
// 1. We created a temp variable to store the value of a temporarily.
// 2. We assigned the value of b to a.
// 3. The value of temp is assigned to b
// As a result, the value of the variables are swapped.

//!Note: 
// We can also swap strings or other data types using this method.


//! Example 2: Using es6(ES2015) Destructuring assignment
//take input from the users
let c = prompt('Enter the first variable: ');
let d = prompt('Enter the second variable: ');

//using destructuring assignment
[c, d] = [d, c];

console.log(`The value of c after swapping: ${c}`);
console.log(`The value of d after swapping: ${d}`);

//! Let's see how the above program swaps values.
// Here, a new es6 feature, called destructuring assignment 
// [c, d] = [d, c], is used to swap the value of two variables. 
// If [c, d] = [1, 2, 3], the value of c will be 1 and value of d will be 2.

// First a temporary array [d, c] is created. 
// Here the value of [d, c] will be [2, 4].
// The destructuring of the array is done, i.e [c, d] = [2, 4].
// As a result, the value of the variables are swapped.

//! Note:
// we can also swap strings or other data types using this method.


//! Example 3: Using Arithmetic Operators
//take input from the users
let e = parseInt(prompt('Enter the first variable: '));
let f = parseInt(prompt('Enter the second variable: '));

// addition and subtraction operator
e = e + f;
f = e - f;
e = e - f;

console.log(`The value of e after swapping: ${e}`);
console.log(`The value of f after swapping: ${f}`);

//! Let's see how the above program swaps values. 
// Initially, a is 4 and b is 2.

// e = e + b assigns the value 4 + 2 to e (now 6).
// f = e - f assigns the value 6 - 2 to f (now 4).
// e = e - f assign the value 6 - 4 to e (now 2).
// Finally, e is 2 and f is 4.

//! Note: 
// We can use arithmetic operators (+, -) 
// if both variables are of number type.


//! Example 4: Using Bitwise XOR operator
//take input from the users
let g = prompt('Enter the first variable: ');
let h = prompt('Enter the second variable: ');

// XOR operator
g = g ^ h
h = g ^ h
g = g ^ h

console.log(`The value of g after swapping: ${g}`);
console.log(`The value of h after swapping: ${h}`);

//! Let's see how the above program swaps values. 
// Initially, g is 4 and h is 2.
// g = g ^ h assigns the value 4 ^ 2 to g (now 6).
// h = g ^ h assigns the value 6 ^ 2 to h (now 4).
// g = g ^ h assign the value 6 ^ 4 to g (now 2).
// Finally, g is 2 and h is 4.

//!Note: 
// We can use this method for only integer (whole number) values.
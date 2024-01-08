//! JavaScript Program to Find the Sum of Natural Numbers.

//! Solution 1: Sum of Natural Numbers Using for Loop
// take input from the user
const number = parseInt(prompt('Enter a positive integer: '));

let sum = 0;

// looping from i = 1 to number
// in each iteration, i is increased by 1
for (let i = 1; i <= number; i++) {
    sum += i;
}

console.log('The sum of natural numbers:', sum);

// =======================================================

//! Solution 2: Sum of Natural Numbers Using while Loop

// take input from the user
const Number = parseInt(prompt('Enter a positive integer: '));

let Sum = 0, i = 1;

// looping from i = 1 to number
while(i <= Number) {
    Sum += i;
    i++;
}

console.log('The sum of natural numbers:', sum);
//! JavaScript Program to Find the Factorial of a Number

// take input from the user
const number = parseInt(prompt('Enter a positive integer: '));

// checking if number is negative
if (number < 0) {
    console.log('Error! Factorial for negative number does not exist.');
}

// if number is 0
else if (number === 0) {
    console.log(`The factorial of ${number} is 1.`);
}

// if number is positive
else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
    }
    console.log(`The factorial of ${number} is ${fact}.`);
}

// In the above program, the user is prompted to enter an integer. Then if...else if...else statement is used to check the condition of a number.

// 1. When the user enters a negative number, an error message is shown.
// 2. When the user enters 0, the factorial is 1.
// 3. When the user enters a positive integer, a for loop is used to iterate over 1 to the number entered by the user to find the factorial.
// 4. Each number is multiplied and stored in the fact variable.
//! JavaScript Program to Display the Multiplication Table

//! Example 1: Multiplication Table Up to 10

// take input from the user
const number = parseInt(prompt('Enter an integer: '));

//creating a multiplication table
for(let i = 1; i <= 10; i++) {

    // multiply i with number
    const result = i * number;

    // display the result
    console.log(`${number} * ${i} = ${result}`);
}

//! Example 2: Multiplication Table Up to a Range

// take number input from the user
const number = parseInt(prompt('Enter an integer: '));

// take range input from the user
const range = parseInt(prompt('Enter a range: '));

//creating a multiplication table
for(let i = 1; i <= range; i++) {
    const result = i * number;
    console.log(`${number} * ${i} = ${result}`);
}
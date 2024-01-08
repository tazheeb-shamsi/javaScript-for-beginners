//! JavaScript program to print prime numbers between the two numbers

// take input from the user
const lowerNumber = parseInt(prompt('Enter lower number: '));
const higherNumber = parseInt(prompt('Enter higher number: '));

console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);

// looping from lowerNumber to higherNumber
for (let i = lowerNumber; i <= higherNumber; i++) {
    let flag = 0;

    // looping through 2 to user input number
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}

//! Lets see the flow of this javascript program

// ==> User is prompted to enter lower and higher bound numbers..
// ==> Two nested for loops are used in the above program.

// 1. The first for loop is used to loop between the numbers 
//    provided by the user. In this case, from 2 to 10.
// 2. A variable flag is set to 0.
// 3. The second for loop is used to loop between 2 to the number 
//    that is stored in i.
// 3. Inside the second loop, the value of i is divided by each 
//    number from 2 to value one less than i (i - 1).
// 4. While dividing, if any number remainder results in 0,
//    that number is not a prime number. So the variable flag is set to 1.
// 5. Finally, all the numbers that have a flag 0 (not divisible 
//    by other numbers) are printed.
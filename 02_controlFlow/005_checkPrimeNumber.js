//! JavaScript Program to Check Prime Number

//! What is Prime Number?
// A prime number is a positive integer that is only divisible by 1 and itself. 
// For example, 2, 3, 5, 7, 11 are the first few prime numbers.



// take input from the user
const number = parseInt(prompt("Enter a positive number: "));
let isPrime = true;

// check if number is equal to 1
if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}

// check if number is greater than 1
else if (number > 1) {

    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
}

// check if number is less than 1
else {
    console.log("The number is not a prime number.");
}


// In the above program, the user is prompted to enter a number. The number entered by the user is checked if it is greater than 1 using if...else if... else statement.

// a. 1 is considered neither prime nor composite.
// b. All negative numbers are excluded because prime numbers
//    are positive.
// c. Numbers greater than 1 are tested using a for loop.

// ==> The (for loop) is used to iterate through the positive numbers to check if the number entered by the user is divisible by positive numbers (2 to user-entered number minus 1).

// ==> The condition number % i == 0 checks if the number is 
//     divisible by numbers other than 1 and itself.

// 1. If the remainder value is evaluated to 0, that number is not
//    a prime number.
// 2. The isPrime variable is used to store a boolean value:
//    either true or false.
// 3. The isPrime variable is set to false if the number is not 
//    a prime number.
// 4. The isPrime variable remains true if the number is a prime number.

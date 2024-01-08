//! Javascript Program to Generate a Random Number

//! Example 1: Generate a Random Number
// generating a random number
const a = Math.random();
console.log(a);  
//Output:  0.5856407221615856

// ---------------------@TAZHEEB_SHAMSI---------------------

//! Example 2: Get a Random Number between 1 and 10
// generating a random number
const b = Math.random() * (10-1) + 1
console.log(`Random value between 1 and 10 is ${b}`);
//Output: Random value between 1 and 10 is 7.392579122270686

// ---------------------@TAZHEEB_SHAMSI---------------------

//! Example 3: Integer Value between 1 and 10
// generating a random number
const c = Math.floor(Math.random() * (10 - 1)) + 1;
console.log(`Random value between 1 and 10 is ${c}`);
//Output: Random value between 1 and 10 is 2

// ---------------------@TAZHEEB_SHAMSI---------------------

//! Example 4: Integer Value between Two Numbers (Inclusive)
// input from the user
const min = parseInt(prompt("Enter a min value: "));
const max = parseInt(prompt("Enter a max value: "));

// generating a random number
const d = Math.floor(Math.random() * (max - min + 1)) + min;

// display a random number
console.log(`Random value between ${min} and ${max} is ${d}`);

// if Enter a min value: 1
// if Enter a max value: 50
// Then, Random value between 1 and 50 is 47

//! NOTE: Math.floor() is used to convert decimal to integer value.
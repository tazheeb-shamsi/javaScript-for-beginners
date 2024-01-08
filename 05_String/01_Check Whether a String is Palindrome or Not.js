// JavaScript Program to Check Whether a String is Palindrome or Not.
/*
Palindrome: A string is a palindrome if it is read the same from forward or backward. 
For example, dad reads the same either from forward or backward.So the word dad is a palindrome. 
Similarly, madam is also a palindrome.
*/

// Example 1: Check Palindrome Using for Loop.

function checkPalindrome(string) {
  // find the length of a string
  const len = string.length;

  // loop through half of the string
  for (let i = 0; i < len / 2; i++) {
    // check if first and last string are same
    if (string[i] !== string[len - 1 - i]) {
      return "It is not a palindrome";
    }
  }
  return "It is a palindrome";
}

// take input
const string = prompt("Enter a string: ");

// call the function
const value = checkPalindrome(string);

console.log(value);

//! --------------------- @TAZHEEB_SHAMSI ----------------------

// Example 2: Check Palindrome using built-in Functions.

function checkPalindrome(string) {
  // convert string to an array
  const arrayValues = string.split("");

  // reverse the array values
  const reverseArrayValues = arrayValues.reverse();

  // convert array to string
  const reverseString = reverseArrayValues.join("");

  if (string == reverseString) {
    console.log("It is a palindrome");
  } else {
    console.log("It is not a palindrome");
  }
}

//take input
const String = prompt("Enter a string: ");

checkPalindrome(String);


// Note: The multiple lines of code can be reduced and written in one line:

// const reverseString = string.split('').reverse().join('');
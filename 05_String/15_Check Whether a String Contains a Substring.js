//! JavaScript Program to Check Whether a String Contains a Substring.

//! Example 1: Check String with includes().

// take input
const str = prompt("Enter a string:");
const checkString = prompt("Enter a string that you want to check:");

// check if string contains a substring
if (str.includes(checkString)) {
  console.log(`The string contains ${checkString}`);
} else {
  console.log(`The string does not contain ${checkString}`);
}

//! --------------------- @TAZHEEB_SHAMSI ----------------------

//! Example 2: Check String with indexOf().

// take input
const string = prompt("Enter a string:");
const CheckString = prompt("Enter a string that you want to check:");

// check if string contains a substring
if (string.indexOf(CheckString) !== -1) {
  console.log(`The string contains ${CheckString}`);
} else {
  console.log(`The string does not contain ${CheckString}`);
}

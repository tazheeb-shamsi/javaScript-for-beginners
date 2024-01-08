//! JavaScript Program to Empty an Array

//! Example 1: Empty Array by Substituting New Array.

function emptyArray(arr) {
  // substituting new array
  arr = [];

  return arr;
}

const array = [1, 2, 3];
console.log(array); // Output: [1, 2, 3]

// call the function
const result = emptyArray(array);
console.log(result); // Output : []

//! --------------------- @TAZHEEB_SHAMSI ----------------------

//! Example 2: Empty Array Using splice()

function emptyArray(arr) {
  // substituting new array
  arr.splice(0, arr.length);

  return arr;
}

const array = [1, 2, 3];
console.log(array); // Output: [1, 2, 3]

// call the function
const result = emptyArray(array);
console.log(result); // Output : []

//! --------------------- @TAZHEEB_SHAMSI ----------------------

// Example 3: Empty Array by Setting Length 0

function emptyArray(arr) {
  // setting array length to 0
  arr.length = 0;

  return arr;
}

const array = [1, 2, 3];
console.log(array); // Output: [1, 2, 3]

// call the function
const result = emptyArray(array);
console.log(result); // Output : []

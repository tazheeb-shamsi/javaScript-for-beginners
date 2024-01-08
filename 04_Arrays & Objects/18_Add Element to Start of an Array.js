//! JavaScript Program to Add Element to Start of an Array

//! Example 1: Add Element to Array Using unshift()

function addElement(arr) {
  // adding new array element
  arr.unshift(4);

  console.log(arr);
}

const array = [1, 2, 3];

// calling the function & passing array argument
addElement(array);

// ✅ Output: [4, 1, 2, 3]


//! --------------------- @TAZHEEB_SHAMSI ----------------------

//! Example 2: Add Element to Array Using splice()

function addElement(arr) {
  // adding element to array
  arr.splice(0, 0, 4);

  console.log(arr);
}

const array = [1, 2, 3];

// calling the function
addElement(array);

// ✅ Output: [4, 1, 2, 3]


//! --------------------- @TAZHEEB_SHAMSI ----------------------

//! Example 3: Add Element to Array Using Spread Operator

function addElement(arr) {
  // adding element to array
  arr = [4, ...arr];

  console.log(arr);
}

const array = [1, 2, 3];

// calling the function
addElement(arr);

// ✅ Output: [4, 1, 2, 3]


//! --------------------- @TAZHEEB_SHAMSI ----------------------

//! Example 4: Add Element to Array Using concat()

function addElement(arr) {
  // adding element to array
  arr = [4].concat(arr);

  console.log(arr);
}

const array = [1, 2, 3];

// calling the function
addElement(array);

// ✅ Output: [4, 1, 2, 3]
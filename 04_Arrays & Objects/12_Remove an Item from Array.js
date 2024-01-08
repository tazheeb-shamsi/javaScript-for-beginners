//! JavaScript Program to Remove Specific Item From an Array

//! Example 1: Using For Loop.

function removeItemFromArray(array, n) {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== n) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

const Result = removeItemFromArray([1, 2, 3, 4, 5], 2);

console.log(Result); // [1, 3, 4, 5]

//! Example 2: Using Array.splice()

function removeItemFromArray(array, n) {
  const index = array.indexOf(n);

  // if the element is in the array, remove it
  if (index > -1) {
    // remove item
    array.splice(index, 1);
  }
  return array;
}

const result = removeItemFromArray([1, 2, 3, 4, 5], 2);

console.log(result); // [1, 3, 4, 5]

/*
📝 NOTE:
The above program only works for arrays without duplicate elements.

Only the first element of an array that matches is removed.

For example, [1, 2, 3, 2, 5] results in [1, 3, 2, 5]
*/

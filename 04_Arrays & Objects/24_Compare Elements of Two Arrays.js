//! JavaScript Program to Compare Elements of Two Arrays

//! Example 1: Compare Arrays using for Loop.

function compareArrays(arr1, arr2) {
  // check the length
  if (arr1.length != arr2.length) {
    return false;
  } else {
    let result = false;

    // comparing each element of array
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] != arr2[i]) {
        return false;
      } else {
        result = true;
      }
    }
    return result;
  }
}

const array1 = [1, 3, 5, 8];
const array2 = [1, 3, 5, 8];

const result = compareArrays(array1, array2);

// if result is true
if (result) {
  console.log("The arrays have the same elements.");
} else {
  console.log("The arrays have different elements.");
}
// Output: The arrays have the same elements.
//💡Note: The above program does not work if the array element contains objects.
//         For example, array1 = [1, {a : 2}, 3, 5]

//! --------------------- @TAZHEEB_SHAMSI ----------------------

//! Example 2 : Compare Arrays Using JSON.stringify()

function compareArrays(arr1, arr2) {
  // compare arrays
  const result = JSON.stringify(arr1) == JSON.stringify(arr2);

  // if result is true
  if (result) {
    console.log("The arrays have the same elements.");
  } else {
    console.log("The arrays have different elements.");
  }
}

const Array1 = [1, 3, 5, 8];
const Array2 = [1, 3, 5, 8];

compareArrays(Array1, Array2);

// Output: The arrays have the same elements.

//! JavaScript Program to Split Array into Smaller Chunks
// Example 1: Split Array Using slice()

function splitIntoChunk(arr, chunk) {
  for (i = 0; i < arr.length; i += chunk) {
    let tempArray;
    tempArray = arr.slice(i, i + chunk);
    console.log(tempArray);
  }
}

const array = [1, 2, 3, 4, 5, 6, 7, 8];
const chunk = 2;
splitIntoChunk(array, chunk);

// ✅ Output:
// [1, 2]
// [3, 4]
// [5, 6]
// [7, 8]

//! --------------------- @TAZHEEB_SHAMSI ----------------------

// Example 2: Split Array Using splice()

function splitIntoChunk(arr, chunk) {
  while (arr.length > 0) {
    let tempArray;
    tempArray = arr.splice(0, chunk);
    console.log(tempArray);
  }
}

const Array = [1, 2, 3, 4, 5, 6, 7, 8];
const Chunk = 2;
splitIntoChunk(Array, Chunk);

// ✅ Output:
// [1, 2]
// [3, 4]
// [5, 6]
// [7, 8]
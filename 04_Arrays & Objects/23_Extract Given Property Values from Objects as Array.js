//! JavaScript Program to Extract Given Property Values from Objects as Array

//! Example 1 : Extract Value Using for Loop.

function extractValue(arr, prop) {

    let extractedValue = [];

    for (let i=0; i < arr.length ; ++i) {

        // extract value from property
        extractedValue.push(arr[i][prop]);
    }
    return extractedValue;
}

const objArray = [{a: 1, b: 2}, {a: 4, b: 5}, {a: 8, b: 9}];

// passing an array of objects and property 'a' to extract
const A = extractValue(objArray, 'a');
const B = extractValue(objArray, 'b');
console.log(A);  //Output: [1, 4, 8]
console.log(B);  //Output: [2, 5, 9]

//! --------------------- @TAZHEEB_SHAMSI ----------------------

//! Example 2: Extract Value Using map()

function extractValue(arr, prop) {

    // extract value from property
    let extractedValue = arr.map(item => item[prop]);

    return extractedValue;

}

const ObjArray = [{a: 1, b: 2}, {a: 4, b: 5}, {a: 8, b: 9}];

// passing an array of objects and property 'a' to extract
const E = extractValue(ObjArray, 'a');
const F = extractValue(ObjArray, 'b');
console.log(E);  //Output: [1, 4, 8]
console.log(F);  //Output: [2, 5, 9]
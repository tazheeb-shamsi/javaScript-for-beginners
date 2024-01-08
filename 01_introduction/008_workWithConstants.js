//! Work With Constants
//! program to include constants

//!Note:
// JavaScript ES6 has introduced the const keyword to work with constants. const denotes that the reference to value is constant and cannot be changed.
// Constants are block-scoped. Hence the variable defined inside a block represents a different value than the one outside.

const a = 5;
console.log(a);

// constants are block-scoped
{
    const a = 50;
    console.log(a);
}
console.log(a);

const arr = ['work', 'exercise', 'eat'];
console.log(arr);

// add elements to arr array
arr[3] = 'hello';
console.log(arr);

// the following code gives error
// changing the value of a throws an error
// uncomment to verify
// a = 8;

// throws an error
// const x; 
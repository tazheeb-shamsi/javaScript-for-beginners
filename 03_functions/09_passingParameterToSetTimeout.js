
//! JavaScript Program to Pass Parameter to a setTimeout() Function

//! Example 1: Passing Parameter to setTimeout
function greet() {
   console.log('Hello world');
}
// passing parameter
setTimeout(greet, 3000);
console.log('This message is shown first');

//! Example 2: Passing Parameter to Function in setTimeout()

function greet(x, y) {
   console.log(x);
   console.log(y);
}
// passing parameter
setTimeout(greet, 3000, 'hello', 'world');
console.log('This message is shown first');

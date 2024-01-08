//! JavaScript Program to Count the Number of Keys/Properties in an Object

//! Example 1: Count the Number of Key in an Object Using for...in


const Student = {
  name: "John",
  age: 20,
  hobbies: ["reading", "games", "coding"],
};

let count = 0;

// loop through each key/value
for (let key in Student) {
  // increase the count
  ++count;
}

console.log(count);  //3

//! --------------------- @TAZHEEB_SHAMSI ----------------------

//! Example 2: Count the Number of Key in an Object Using Object.key()

const student = {
  name: "John",
  age: 20,
  hobbies: ["reading", "games", "coding"],
};

// count the key/value
const result = Object.keys(student).length;

console.log(result);    //3

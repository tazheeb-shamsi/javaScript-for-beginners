//! JavaScript Program to Loop Through an Object.

//! Example 1: Loop Through Object Using for...in

const student = {
  name: "John",
  age: 20,
  hobbies: ["reading", "games", "coding"],
};

// using for...in
for (let key in student) {
  let value;

  // get the value
  value = student[key];

  console.log(key + " - " + value);
}

/*
✅ OUTPUT:
name - John
age - 20
hobbies - ["reading", "games", "coding"]
*/

//! --------------------- @TAZHEEB_SHAMSI ----------------------

//! Example 2: Loop Through Object Using Object.entries and for...of

const Student = {
  name: "John",
  age: 20,
  hobbies: ["reading", "games", "coding"],
};

// using Object.entries
// using for...of loop
for (let [key, value] of Object.entries(Student)) {
  console.log(key + " - " + value);
}
/*
✅ OUTPUT:
name - John
age - 20
hobbies - ["reading", "games", "coding"]
*/

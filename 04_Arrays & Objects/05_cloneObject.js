//! JavaScript Program to Clone a JavaScript Object

//! Example 1. Clone the Object Using Object.assign()

// declaring object
const person = {
  name: "John",
  age: 21,
};
// cloning the object
const clonePerson = Object.assign({}, person);
console.log(clonePerson);   //{name: "John", age: 21}

// changing the value of clonePerson
clonePerson.name = "Peter";

console.log(clonePerson.name);   //Peter
console.log(person.name);        //John

//! --------------------- @TAZHEEB_SHAMSI ----------------------

//! Example 2: Clone the Object Using Spread Operator

// declaring object
const Person = {
  name: "John",
  age: 21,
};
// cloning the object
const clonePerson = { ...Person };

console.log(clonePerson);   //{name: "John", age: 21}

// changing the value of clonePerson
clonePerson.name = "Peter";

console.log(clonePerson.name);   //Peter
console.log(Person.name);        //John

//! --------------------- @TAZHEEB_SHAMSI ----------------------

//! Example 3: Clone the Object Using JSON.parse().

// declaring object
const PERSON = {
  name: "John",
  age: 21,
};

// cloning the object
const clonePerson = JSON.parse(JSON.stringify(PERSON));

console.log(clonePerson);     //{name: "John", age: 21}

// changing the value of clonePerson
clonePerson.name = "Peter";

console.log(clonePerson.name);   //Peter
console.log(person.name);        //John

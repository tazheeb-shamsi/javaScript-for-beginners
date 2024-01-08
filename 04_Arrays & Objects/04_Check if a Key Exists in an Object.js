
//! JavaScript Program to Check if a Key Exists in an Object

//! Example 1: Check if Key Exists in Object Using in Operator

const person = {
   id: 1,
   name: 'John',
   age: 23
}

// check if key exists
const hasKey = 'name' in person;

if(hasKey) {
   console.log('The key exists.');
}
else {
   console.log('The key does not exist.');
}

//! --------------------- @TAZHEEB_SHAMSI ----------------------

//! Example 2: Check if Key Exists in Object Using hasOwnProperty()

const person = {
   id: 1,
   name: 'John',
   age: 23
}

//check if key exists
const hasKey = person.hasOwnProperty('name');

if(hasKey) {
   console.log('The key exists.');
}
else {
   console.log('The key does not exist.');
}
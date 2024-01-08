//! JavaScript Program to Add Key/Value Pair to an Object

//! Example 1: Add Key/Value Pair to an Object Using Dot Notation

const person = {
   name: 'Monica',
   age: 22,
   gender: 'female'
}

// add a key/value pair
person.height = 5.4;

console.log(person);


//! Example 2: Add Key/Value Pair to an Object Using Square Bracket Notation

const person = {
   name: 'Monica',
   age: 22,
   gender: 'female'
}

// add a key/value pair
person['height'] = 5.4;

console.log(person);

/*
✅ OUTPUT of both programs:
{
    name: "Monica",
    age: 22,
    gender: "female",
    height: 5.4
}
*/
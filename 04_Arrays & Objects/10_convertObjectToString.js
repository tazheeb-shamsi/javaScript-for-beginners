//! JavaScript Program to Convert Objects to Strings

//! Example 1: Convert Object to String Using JSON.stringify()

const person = {
   name: 'Jack',
   age: 27
}

const result =  JSON.stringify(person);

console.log(result);            // {"name":"Jack","age":27}
console.log(typeof result);     //  string

//! --------------------- @TAZHEEB_SHAMSI ----------------------

//! Example 2: Convert Object to String Using String()

const Person = {
   name: 'Jack',
   age: 27
}

const result1 = String(Person);
const result2 = String(Person['name']);

console.log(result1);            // [object Object]
console.log(result2);            // Jack

console.log(typeof result1);     // string

// NOTE: When using the String() function on an Object,the converted result will give [object Object].
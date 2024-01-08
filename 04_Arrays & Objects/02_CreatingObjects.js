
//! JavaScript Program to Create Objects in Different Ways.

//! Example 1: Using object literal.
const person = { 
   name: 'John',
   age: 20,
   hobbies: ['reading', 'games', 'coding'],
   greet: function() {
       console.log('Hello everyone.');
   },
   score: {
       maths: 90,
       science: 80
   }
};

console.log(typeof person); // object

// accessing the object value
console.log(person.name);  //John
console.log(person.hobbies[0]);  //reading
person.greet();   //Hello everyone.
console.log(person.score.maths); //90

//! --------------------- @TAZHEEB_SHAMSI ----------------------

//! Example 2: Create an Object using Instance of Object Directly
const person = new Object ( { 
   name: 'John',
   age: 20,
   hobbies: ['reading', 'games', 'coding'],
   greet: function() {
       console.log('Hello everyone.');
   },
   score: {
       maths: 90,
       science: 80
   }
});

console.log(typeof person); // object

// accessing the object value
console.log(person.name);  //John
console.log(person.hobbies[0]);  //reading
person.greet();   //Hello everyone.
console.log(person.score.maths); //90

//! --------------------- @TAZHEEB_SHAMSI ----------------------

//! Example 3: Create an object using Constructor Function

function Person() {
   this.name = 'John',
   this.age = 20,
   this.hobbies = ['reading', 'games', 'coding'],
   this.greet = function() {
       console.log('Hello everyone.');
   },
   this.score = {
       maths: 90,
       science: 80
   }

}

const person = new Person();

console.log(typeof person); // object

// accessing the object value
console.log(person.name);  //John
console.log(person.hobbies[0]);  //reading
person.greet();   //Hello everyone.
console.log(person.score.maths); //90
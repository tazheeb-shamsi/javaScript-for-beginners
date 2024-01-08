
//! JavaScript Program to Merge Property of Two Objects

//! Example 1: Merge Property of Two Objects Using Object.assign()

// object 1
const person = {
   name: 'Jack',
   age:26
}

// object 2
const student = {
   gender: 'male'
}

// merge two objects
const newObj = Object.assign(person, student);

console.log(newObj);


//! Example 2: Merge Property of Two Objects Using Spread Operator

// object 1
const Person = {
   name: 'Jack',
   age:26
}

// object 2
const Student = {
   gender: 'male'
}

// merge two objects
const newObject = {...Person, ...Student};

console.log(newObject);
/*
✅ OUTPUT OF Both Programs:
{
   name: "Jack",
   age: 26,
   gender: "male"
}
*/
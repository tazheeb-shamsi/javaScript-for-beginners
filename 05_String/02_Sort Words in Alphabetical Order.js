// JavaScript Program to Sort Words in Alphabetical Order

// take input
const string = prompt('Enter a sentence: ');

// converting to an array
const words = string.split(' ');

// sort the array elements
words.sort();

// display the sorted words
console.log('The sorted words are:');

for (const element of words) {
  console.log(element);
}
/*
Output:
Enter a sentence: i am learning javascript
The sorted words are:
am
i
javascript
learning
*/
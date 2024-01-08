// JavaScript Program to Replace All Occurrences of a String

// Example : Replace All Occurrence of String Using built-in Method

const string = 'Mr red has a red house and a red car';

const result = string.split('red').join('blue');

console.log(result);    // Mr blue has a blue house and a blue car

//! --------------------- @TAZHEEB_SHAMSI ----------------------

// Example : Replace All Occurrence of String Using RegEx

const _string = 'Mr Red has a red house and a red car'; 

// regex expression
const regex = /red/gi;i

// replace the characters
const newText = _string.replace(regex, 'blue');

// display the result
console.log(newText);   // Mr blue has a blue house and a blue car
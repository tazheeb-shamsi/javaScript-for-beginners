//! JavaScript Program to Replace Characters of a String

// Example: Replace First Occurrence of a Character in a String

const string = 'Mr Tazheeb has a red house and a red car';

// replace the characters
const newText = string.replace('red', 'blue');

// display the result
console.log(newText);   //Output: Mr Red has a blue house and a blue car

//! --------------------- @TAZHEEB_SHAMSI ----------------------

// Example 2: Replace Character of a String Using RegEx

const String = 'Mr Red has a red house and a red car';

// regex expression
const regex = /red/g;

// replace the characters
const NewText = String.replace(regex, 'blue');

// display the result
console.log(NewText);   //Output: Mr Red has a blue house and a blue car
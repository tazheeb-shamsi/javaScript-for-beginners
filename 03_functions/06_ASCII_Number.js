
/* What is ASCII?
ASCII stands for American Standard Code for Information Interchange.
ASCII is a numeric value that is given to different characters and 
symbols for computers to store and manipulate. 
For example, the ASCII value of the letter 'A' is 65.

Resource: ASCII chart of all 127 characters in JavaScript.
https://www.ascii-code.com
*/

//! Solution 1: ASCII Value of Character Using charCodeAt().

// take input from the user
const string = prompt("Enter a character: ");
// convert into ASCII value
const result = string.charCodeAt(0);
console.log(`The ASCII value is: ${result}`);

//! --------------------- @TAZHEEB_SHAMSI ---------------------------
/*
✅ OUTPUT:
Enter a character: a
The ASCII value is: 97

📝 NOTE:
 The charCodeAt() method takes in an index value and returns an integer representing its UTF-16 (16-bit Unicode Transformation Format) code.

 If we don't pass the index value, the default index value will be 0.
 If the index value is out of range, it gives NaN.
*/

//! --------------------- @TAZHEEB_SHAMSI ---------------------------

//! Example 2: ASCII Value of Character Using codePointAt().

// take input from the user
const String = prompt('Enter a character: ');
// convert into ASCII value
const Result = String.codePointAt(0);
console.log(`The ASCII value is: ${Result}`);

/*
✅ OUTPUT:
Enter a character: abc
The ASCII value is: 97

📝 NOTE:
The codePointAt() method returns a Unicode code point value.
*/

//! JavaScript Program to Compare Two Strings

//! Example 1: Using toUpperCase().

const string1 = 'JavaScript Program';
const string2 = 'javascript program';

// compare both strings
const result = string1.toUpperCase() === string2.toUpperCase();

if(result) {
    console.log('The strings are similar.');
} else {
    console.log('The strings are not similar.');
}
// Output :The strings are similar.

// Note: You can also use the toLowerCase() method to convert all the strings to lowercase and perform the comparison.

//! --------------------- @TAZHEEB_SHAMSI ----------------------

// Example 2: Using localeCompare().

// program to perform case insensitive string comparison
const string1 = 'JavaScript Program';
const string2 = 'javascript program';

const result = string1.localeCompare(string2, undefined, { sensitivity: 'base' });

if(result == 0) {
    console.log('The strings are similar.');
} else {
    console.log('The strings are not similar.');
}

//! --------------------- @TAZHEEB_SHAMSI ----------------------

// Example 3: JS String Comparison Using RegEx.

const string1 = 'JavaScript Program';
const string2 = 'javascript program';

// create regex
const pattern = new RegExp(string1, "gi");

// compare the stings
const result = pattern.test(string2)

if(result) {
    console.log('The strings are similar.');
} else {
    console.log('The strings are not similar.');
}
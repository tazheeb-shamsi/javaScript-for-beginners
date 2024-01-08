//! Example 1: Replace All Instances Of a Character Using Regex

const string = 'Learning JavaScript Program';

const result = string.replace(/a/g, "A");

console.log(result);   // LeArning JAvAScript ProgrAm

//! --------------------- @TAZHEEB_SHAMSI ----------------------

//! Example 2: Replace All Instances Of Character Using Built-in Methods

const String = 'Learning JavaScript Program';

const splitString = String.split('a');

const Result = splitString.join('A');

console.log(Result);    // LeArning JAvAScript ProgrAm
//! JavaScript Program to Remove All Whitespaces From a Text.

// Example 1: Using split() and join().

const string = "      Hello World       ";

const result = string.split(" ").join("");

console.log(result); // HelloWorld

//! --------------------- @TAZHEEB_SHAMSI ----------------------

// Example 2: Using Regular Expression.

function trimString(x) {
  const Result = x.replace(/\s/g, "");
  return Result;
}

const Result = trimString("    Hello World    ");
console.log(result); // HelloWorld

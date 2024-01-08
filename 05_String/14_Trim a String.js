//! Javascript program to trim a string

// Example 1: Trim a String

const string = "      Hello World       ";

const result = string.trim();

console.log(result); // Output: Hello World

// Example 2: Trim a String Using RegEx.

function trimString(x) {
  let trimValue = x.replace(/^\s+|\s+$/g, "");
  return trimValue;
}

const result = trimString("    Hello world    ");
console.log(result); // Output: Hello World

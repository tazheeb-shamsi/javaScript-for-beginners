//! JavaScript Program to Convert the First Letter of a String into UpperCase.

// Example 1: Convert First letter to UpperCase.

function capitalizeFirstLetter(str) {

    // converting first letter to uppercase
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

    return capitalized;
}

// take input
const string = prompt('Enter a string: ');

const result = capitalizeFirstLetter(string);

console.log(result);

//! --------------------- @TAZHEEB_SHAMSI ----------------------

// Example 2: Convert First letter to UpperCase using Regex.

function capitalizeFirstLetter(str) {

    // converting first letter to uppercase
    const capitalized = str.replace(/^./, str[0].toUpperCase());

    return capitalized;
}

// take input
const _string = prompt('Enter a string: ');

const _result = capitalizeFirstLetter(_string);

console.log(_result);
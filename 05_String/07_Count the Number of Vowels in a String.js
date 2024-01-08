//! JavaScript Program to Count the Number of Vowels in a String.

// Example: Count the Number of Vowels Using for Loop.

// defining vowels
const vowels = ["a", "e", "i", "o", "u"]

function countVowel(str) {
    // initialize count
    let count = 0;

    // loop through string to test if each character is a vowel
    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }

    // return number of vowels
    return count
}

// take input
const string = prompt('Enter a string: ');

const result = countVowel(string);

console.log(result);

//! --------------------- @TAZHEEB_SHAMSI ----------------------

// Example: Count the Number of Vowels Using Regex.

function countVowel(str) { 

    // find the count of vowels
    const count = str.match(/[aeiou]/gi).length;

    // return number of vowels
    return count;
}

// take input
const _string = prompt('Enter a string: ');

const _result = countVowel(_string);

console.log(_result);
//! JavaScript Program to Check if a String Starts With Another String.

// Example 1: Using startsWith().

const string = 'hello world';

const toCheckString = 'he';

if(string.startsWith(toCheckString)) {
    console.warn('The string starts with "he".');
}
else {
    console.warn(`The string does not starts with "he".`);
}

// Example 2: Using lastIndexOf().

const string = 'hello world';

const toCheckString = 'he';

let result = string.lastIndexOf(toCheckString, 0) === 0;
if(result) {
    console.warn('The string starts with "he".');
}
else {
    console.warn(`The string does not starts with "he".`);
}

// Example 3: Using RegEx.

const string = 'hello world';

const pattern = /^he/;

let result = pattern.test(string);

if(result) {
    console.warn('The string starts with "he".');
}
else {
    console.warn(`The string does not starts with "he".`);
}

// Output of all programs : The string starts with "he".
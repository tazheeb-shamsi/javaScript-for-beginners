//! JavaScript Program to Generate Random String

// Example 1: Generate Random Strings

// declare all characters
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

console.log(generateString(5));     //Output : B5cgH

// Example 2: Generate Random Strings Using Built-in Methods

const result = Math.random().toString(36).substring(2,7);
console.log(result);                //Output: gyjvo
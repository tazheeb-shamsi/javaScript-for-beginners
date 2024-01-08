// program to convert celsius to fahrenheit & vice versa

//! General Formula:
//Celsius to Fahrenheit : fahrenheit = celsius * 1.8 + 32
//Fahrenheit to Celsius : celsius = (fahrenheit - 32) / 1.8

// ask the celsius value to the user 
const celsius = prompt("Enter a celsius value: ");
// ask the Fahrenheit value to the user 
const Fahrenheit = prompt("Enter a fahrenheit value: ");

// calculate fahrenheit
const fahrenheit = (celsius * 1.8) + 32
// calculate celsius
const Celsius  = (Fahrenheit - 32) / 1.8

// display the result
console.log(`${celsius} degree celsius is equal to ${fahrenheit} degree fahrenheit.`);
console.log(`${Fahrenheit} degree celsius is equal to ${Celsius} degree fahrenheit.`);
//! JavaScript Program to Convert Kilometers to Miles

// taking kilometers input from the user
const kilometers = prompt("Enter value in kilometers: ")

// conversion factor
const factor = 0.62137119

// calculate miles
const miles = kilometers * factor

console.log(`${kilometers} kilometers is equal to ${miles} miles.`);
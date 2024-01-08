//! JavaScript program to display current date

// get local machine date time
const date = new Date();

// get the date as a string
const n = date.toDateString();

// get the time as a string
const time = date.toLocaleTimeString();

// display date
console.log("Date: " + n);     // Date: Wed Aug 26 2020

// display time
console.log("Time: " + time);  // Time: 1:13:12 PM

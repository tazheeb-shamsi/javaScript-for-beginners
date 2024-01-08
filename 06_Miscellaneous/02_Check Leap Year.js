//! JavaScript Program to Check Leap Year.

//! Example 1: Check Leap Year Using if...else.

function checkLeapYear(year) {
  //three conditions to find out the leap year
  if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
    console.log(year + " is a leap year");
  } else {
    console.log(year + " is not a leap year");
  }
}

// take input
const year = prompt("Enter a year:");

checkLeapYear(year);

//! --------------------- @TAZHEEB_SHAMSI ----------------------

//! Example 2: Check Leap Year Using newDate().

function checkLeapYear(year) {
  const leap = new Date(year, 1, 29).getDate() === 29;
  if (leap) {
    console.log(year + " is a leap year");
  } else {
    console.log(year + " is not a leap year");
  }
}

// take input
const _year = prompt("Enter a year:");

checkLeapYear(_year);

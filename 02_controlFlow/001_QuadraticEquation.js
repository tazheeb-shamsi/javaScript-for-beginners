//! program to solve quadratic equation

let root1, root2;

// take input from the user
let a = prompt("Enter the first number: ");
let b = prompt("Enter the second number: ");
let c = prompt("Enter the third number: ");

// calculate discriminant
let discriminant = b * b - 4 * a * c;

// condition for real and different roots
if (discriminant > 0) {
  root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
  root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

  // result
  console.log(`The roots of quadratic equation are :
  ${root1} and ${root2}`);
}

// condition for real and equal roots
else if (discriminant == 0) {
  root1 = root2 = -b / (2 * a);

  // result
  console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}

// if roots are not real
else {
  let realPart = (-b / (2 * a)).toFixed(2);
  let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

  // result
  console.log(
    `The roots of quadratic equation are:
     ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
  );
}

//! General Approach to solve this problem:
// To find the roots of such equation, we use the formula: 
// (root1,root2) = (-b ± √b2-4ac)/2

// The term b2-4ac is known as the discriminant of a quadratic equation. 
// It tells the nature of the roots.

// If the discriminant is greater than 0, the roots are real and different.
// If the discriminant is equal to 0, the roots are real and equal.
// If the discriminant is less than 0, the roots are complex and different.
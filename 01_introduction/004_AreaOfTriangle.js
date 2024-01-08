//! JavaScript Program to Calculate the Area of a Triangle

//! Case 1: Area When Base and Height is Known.
const baseValue = prompt('Enter the base of a triangle: ');
const heightValue = prompt('Enter the height of a triangle: ');

// calculating the area
const area = (baseValue * heightValue) / 2;

console.log(
  `The area of the triangle is ${area}`
);

//! Case 2: Area When All Sides are Known

const side1 = parseInt(prompt('Enter side1: '));
const side2 = parseInt(prompt('Enter side2: '));
const side3 = parseInt(prompt('Enter side3: '));

// calculate the semi-perimeter
const s = (side1 + side2 + side3) / 2;

//calculate the area
const areaValue = Math.sqrt(
  s * (s - side1) * (s - side2) * (s - side3)
);

console.log(
  `The area of the triangle is ${areaValue}`
);
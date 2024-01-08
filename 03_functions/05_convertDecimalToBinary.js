
//! JavaScript Program to Convert Decimal to Binary

function convertToBinary(x) {
  let bin = 0;
  let rem,
    i = 1,
    step = 1;
  while (x != 0) {
    rem = x % 2;
    console.log(
      `Step ${step++}: ${x}/2, Remainder = ${rem}, Quotient = ${parseInt(
        x / 2
      )}`
    );
    x = parseInt(x / 2);
    bin = bin + rem * i;
    i = i * 10;
  }
  console.log(`Binary: ${bin}`);
}

// take input
let number = prompt("Enter a decimal number: ");

convertToBinary(number);

//! --------------------- @TAZHEEB_SHAMSI ---------------------------

/*
✅ OUTPUT:
Step 1: 9/2, Remainder = 1, Quotient = 4
Step 2: 4/2, Remainder = 0, Quotient = 2
Step 3: 2/2, Remainder = 0, Quotient = 1
Step 4: 1/2, Remainder = 1, Quotient = 0
Binary: 1001

🎯 FLOW OF CODE:

👉 In the above program, the user is prompted to enter a decimal number. 
👉 The number entered by the user is passed as an argument to the 
   convertToBinary() function.
👉 The while loop is used until the number entered by the user becomes 0.
👉 The binary value is calculated by: bin = bin + rem * i;
👉 Here, rem is the modulus % value of the number when divided by 2 and i 
   gives the place value of the binary number.
*/

//! --------------------- @TAZHEEB_SHAMSI ---------------------------

//! Solution 2: Convert Decimal to Binary Using toString()

// take input
const number = parseInt(prompt('Enter a decimal number: '));
// convert to binary
const result = number.toString(2);
console.log('Binary:' + ' ' + result);

//! --------------------- @TAZHEEB_SHAMSI ---------------------------
/*
✅ OUTPUT:
Enter a decimal number: 9
Binary: 1001

📝 NOTE:
🔵 The parseInt() method is used to convert a string value to an integer.
   e.g: Here, toString(2) converts the decimal number to binary number.
🔴 The JavaScript built-in method toString([radix]) returns a string 
   value in a specified radix (base). 
*/

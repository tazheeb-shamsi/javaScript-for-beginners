// JavaScript Program to Format Numbers as Currency Strings

// Example 1: Format Numbers as Currency String.

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

formatter.format(2500);     //Output: $2,500.00


// Example 2: Format Numbers as Currency String Using concatenation.

const number = 1234.5678;

const result = '$ ' + number.toFixed(2);

console.log(result);        //Output: $1234.57

// Example 3: Format Numbers as Currency String Using toLocaleString().

const result =  (2500).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
});

console.log(result);        //Output: $2,500.00

// Example 4: Format Numbers as Currency String Using RegEx.

const result = 1234.5678.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

console.warn('$ ' + result);    //Output: $1,234.57
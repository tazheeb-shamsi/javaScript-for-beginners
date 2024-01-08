//! JavaScript Program to Replace All Line Breaks with <br>

//! Example 1: Replace All Line Breaks Using Built-in Methods

const string = `I am Learning JavaScript with Tazheeb Shamsi.
JavaScript is fun.
JavaScript is easy.`;

const result = string.split('\n').join('<br>');

console.log(result);   

//! --------------------- @TAZHEEB_SHAMSI ----------------------

//! Example 2: Replace All Line Breaks Using RegEx

const _string = `I am Learning JavaScript with Tazheeb Shamsi.
JavaScript is fun.
JavaScript is easy.`;

const Result = _string.replace(/(\r\n|\r|\n)/g, '<br>');

console.log(Result);

//✅ Output of both program:
//I am Learning JavaScript with Tazheeb Shamsi.<br>JavaScript is fun.<br>JavaScript is easy.
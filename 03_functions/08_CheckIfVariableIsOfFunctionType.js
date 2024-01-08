//! JavaScript Program to Check If a Variable is of Function Type

//! Example 1: Using instanceof Operator
//  instanceof operator is used to check the type of variable.
function testVariable(variable) {
  if (variable instanceof Function) {
    console.log("The variable is of function type");
  } else {
    console.log("The variable is not of function type");
  }
}

const count = true;
const x = function () {
  console.log("hello");
};
//! --------------------- @TAZHEEB_SHAMSI ---------------------------
testVariable(count); //The variable is not of function type
testVariable(x); //The variable is of function type

//! Example 2: Using typeof Operator
// program to check if a variable is of function type

function testVariable(variable) {
  if (typeof variable === "function") {
    console.log("The variable is of function type");
  } else {
    console.log("The variable is not of function type");
  }
}

const count = true;
const x = function () {
  console.log("hello");
};
//! --------------------- @TAZHEEB_SHAMSI ---------------------------
testVariable(count); //The variable is not of function type
testVariable(x); //The variable is of function type

//! Example 3: Using Object.prototype.toString.call() Method

function testVariable(variable) {
  if (Object.prototype.toString.call(variable) == "[object Function]") {
    console.log("The variable is of function type");
  } else {
    console.log("The variable is not of function type");
  }
}

const count = true;
const x = function () {
  console.log("hello");
};
//! --------------------- @TAZHEEB_SHAMSI ---------------------------
testVariable(count); //The variable is not of function type
testVariable(x); //The variable is of function type

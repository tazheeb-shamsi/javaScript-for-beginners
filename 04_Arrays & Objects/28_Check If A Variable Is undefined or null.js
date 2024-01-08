//! JavaScript Program To Check If A Variable Is undefined or null

//! Example 1: Check undefined or null.

function checkVariable(variable) {
  if (variable == null) {
    console.log("The variable is undefined or null");
  } else {
    console.log("The variable is neither undefined nor null");
  }
}

let newVariable;

checkVariable(5);
checkVariable("hello");
checkVariable(null);
checkVariable(newVariable);

// ✅ Output:
// The variable is neither undefined nor null
// The variable is neither undefined nor null
// The variable is undefined or null
// The variable is undefined or null

//! Example 2: using typeof.

function checkVariable(variable) {
  if (typeof variable === "undefined" || variable === null) {
    console.log("The variable is undefined or null");
  } else {
    console.log("The variable is neither undefined nor null");
  }
}

let newVariables;

checkVariable(5);
checkVariable("hello");
checkVariable(null);
checkVariable(newVariables);

// ✅ Output:
// The variable is neither undefined nor null
// The variable is neither undefined nor null
// The variable is undefined or null
// The variable is undefined or null

//! Note: We cannot use the typeof operator for null as it returns object.
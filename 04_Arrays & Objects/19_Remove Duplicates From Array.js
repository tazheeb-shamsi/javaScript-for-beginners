//! JavaScript Program to Remove Duplicates From Array

//! Example 1: Using indexOf() and push()

function getUnique(arr){
    
   let uniqueArr = [];
   
   // loop through array
   for(let i of arr) {
       if(uniqueArr.indexOf(i) === -1) {
           uniqueArr.push(i);
       }
   }
   console.log(uniqueArr);
}

const array = [1, 2, 3, 2, 3];

// calling the function
// passing array argument
getUnique(array);


/*
Flow Of Code:

Here,
The for...of loop is used to loop through all the elements of an arr array.
The indexOf() method returns -1 if the element is not in the array. Hence, during each iteration, if the element equals -1, the element is added to uniqueArr using push()
*/

//! --------------------- @TAZHEEB_SHAMSI ----------------------


//! Example 2: Using Set

function getUnique(arr){

   // removing duplicate
   let uniqueArr = [...new Set(arr)];

   console.log(uniqueArr);
}

const Array = [1, 2, 3, 2, 3];

// calling the function
getUnique(Array);

/*
Flow Of Code:
=> A Set is a collection of unique values.

Here,
The array is converted to Set and all the duplicate elements are automatically removed.
The spread syntax ... is used to include all the elements of the Set to a new array.
*/

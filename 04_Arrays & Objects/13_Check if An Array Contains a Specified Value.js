//! JavaScript Program to Check if An Array Contains a Specified Value.

//! Example 1: Check Array Using includes()

const array = ['you', 'will', 'learn', 'javascript'];

const hasValue = array.includes('javascript');

// check the condition
if(hasValue) {
    console.log('Array contains a value.');
} else {
    console.log('Array does not contain a value.');
}

//! --------------------- @TAZHEEB_SHAMSI ----------------------

//! Example 2: Check Array Using indexOf()

const Array = ['you', 'will', 'learn', 'javascript'];

const HasValue = array.indexOf('javascript') !== -1;

// check the condition
if(HasValue) {
    console.log('Array contains a value.');
} else {
    console.log('Array does not contain a value.');
}

// 📝Note: Both includes() and indexOf() are case sensitive. 
//          Hence, J and j are different.
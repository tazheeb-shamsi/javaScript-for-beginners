
//! JavaScript program to pass a function as a parameter

function greet() {
   return 'Hello';
}
// passing function greet() as a parameter
function name(user, func)
{
   // accessing passed function
   const message = func();
//! --------------------- @TAZHEEB_SHAMSI ---------------------------
   console.log(`${message} ${user}`);
}

name('John', greet);    // Hello John
name('Jack', greet);    // Hello Jack
name('Sara', greet);    // Hello Sara

var functionName = function() {
  x = 2;
  var y = 3;
  return true;
}

functionName();
console.log(x); // works because x has global scope
console.log(y); // error because y has function scope

// always always declare variables with var!!!

//if we don't declare variables with var, then stuff outside of our functions can change the value of stuff inside of our functions

//always always declare your variables with var!!!


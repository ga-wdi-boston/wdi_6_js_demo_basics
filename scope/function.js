write a function called square that takes one number as an input and returns that number squared

var square = function(number){
  return number * number;
}

when we have a recursive function
function square() {
  return number * number;
}

exponents
write a function that takes two numbers as arguments and reutrns the first to the power of the second

right way...
var powerNumber = function(number1, number2){
  return Math.pow(number1, number2);
}

not sure, could work...
function exponent() {
  x = 3
  y = 2
  return x^y
}


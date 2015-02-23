//write a function called luckynumber that generates a lucky number
function luckynumber() {
  tempNum = Math.random()*10;
  return Math.round(tempNum)
}

// console.log(luckynumber());

//write a function called getName that prompts the user for a name
function getname() {
  return prompt("What is your name?");
}
// console.log(getname());

function fortune(name, luckynumber) {
  return alert(name + " your lucky number is " + luckynumber);
}

console.log(fortune(getname(), luckynumber()));

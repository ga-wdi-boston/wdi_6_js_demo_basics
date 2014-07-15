var secretNumber = Math.floor(Math.random() * 10) + 1;
var guesses = 3;
var guess;

while(guess !== secretNumber && guesses > 0) {
  if(guess === undefined) {
    guess = prompt('Guess the number!');
  } else if(guess > secretNumber) {
    guess = prompt('Guess lower...');
  } else if(guess < secretNumber) {
    guess = prompt('Guess higher...');
  }
  guesses -= 1;
}

if(parseInt(guess) === secretNumber) {
  alert('You got it!');
} else {
  alert('Sorry, the number was: ' + secretNumber);
}

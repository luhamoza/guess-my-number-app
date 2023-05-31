'use strict';

//randam number generator 1-20
let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
const displayBackgroundColor = function (backgroundColor) {
  document.querySelector('body').style.backgroundColor = backgroundColor;
};
const enlargeNumberWidth = function (width) {
  document.querySelector('.number').style.width = width;
};
//compare between input number and random number
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //when there is no input
  if (!guess) {
    displayMessage('⛔ Please insert a number!');
  }
  //when player wins
  else if (guess === secretNumber) {
    displayMessage('💃 That is correct!');
    displayNumber(secretNumber);
    displayBackgroundColor('#60b347');
    enlargeNumberWidth('30rem');

    //implementing highscores
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } //when the guest is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('💥 You lose the game');
      displayScore(0);
    }
  }
});

//making Again! button working
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  displayMessage('Start guessing...');
  displayScore(score);
  displayNumber('?');
  document.querySelector('.guess').value = '';
  displayBackgroundColor('#222');
  enlargeNumberWidth('15rem');
});

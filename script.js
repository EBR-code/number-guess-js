'use strict';

const number = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = number;
console.log(number);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number';
  } else if (guess > number) {
    document.querySelector('.message').textContent = '📈 Too High';
  } else if (guess < number) {
    document.querySelector('.message').textContent = '📉 Too Low.';
  }
});

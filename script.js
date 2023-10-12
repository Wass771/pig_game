'use strict';
let score1 = document.querySelector('#score--0');
let score2 = document.querySelector('#score--1');
const dice = document.querySelector('.dice');
let scoretemp1 = document.querySelector('#current--0');
let scoretemp2 = document.querySelector('#current--1');
const buttonNew = document.querySelector('.btn--new');
const buttonRoll = document.querySelector('.btn--roll');
const buttonHold = document.querySelector('.btn--hold');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
let currentPlayer = 0;
let player1Score = 0;
let player2Score = 0;
let player1Temp = 0;
let player2Temp = 0;
let diceValue;

buttonNew.addEventListener('click', () => {
  currentPlayer = 0;
  player1Score = 0;
  player2Score = 0;
  player1Temp = 0;
  player2Temp = 0;
  console.log('-----------');
  score1.textContent = 0;
  score2.textContent = 0;
  dice.src = 'dice-1.png';
  scoretemp1.textContent = 0;
  scoretemp2.textContent = 0;
  player1.classList.remove('player--winner');
  player2.classList.remove('player--winner');
});

buttonRoll.addEventListener('click', () => {
  diceValue = Math.trunc(Math.random() * 6) + 1;
  dice.src = `dice-${diceValue}.png`;
  if (!currentPlayer) {
    player1.classList.add('player--active');
    player2.classList.remove('player--active');
    if (diceValue === 1) {
      player1Temp = 0;
      currentPlayer = !currentPlayer;
      scoretemp1.textContent = 0;
    } else {
      console.log('player1');
      scoretemp1.textContent = Number(scoretemp1.textContent) + diceValue;
    }
  } else {
    player2.classList.add('player--active');
    player1.classList.remove('player--active');
    if (diceValue === 1) {
      player2Temp = 0;
      currentPlayer = !currentPlayer;
      scoretemp2.textContent = 0;
    } else {
      scoretemp2.textContent = Number(scoretemp2.textContent) + diceValue;
      console.log('player2');
    }
  }
});
buttonHold.addEventListener('click', () => {
  currentPlayer = !currentPlayer;
  if (Number(scoretemp1.textContent > 0)) {
    score1.textContent =
      Number(scoretemp1.textContent) + Number(score1.textContent);
    scoretemp1.textContent = 0;
    if (Number(score1.textContent >= 100)) {
      player1.classList.add('player--winner');
    }
  } else {
    if (Number(scoretemp2.textContent > 0)) {
      score2.textContent =
        Number(scoretemp2.textContent) + Number(score2.textContent);
      scoretemp2.textContent = 0;
      if (Number(score2.textContent >= 100)) {
        player2.classList.add('player--winner');
      }
    }
  }
});

//currentPlayer = !currentPlayer

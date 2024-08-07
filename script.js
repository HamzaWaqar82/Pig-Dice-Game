"use strict"

////////////////// Selecting Elements ////////////////////////////////////////
const score0Element = document.querySelector('#total-score0');
const score1Element = document.querySelector('#total-score1');
const diceElement = document.querySelector('.dice');
const newGameBtnElement = document.querySelector('.new-game-btn');
const rollDiceBtnElement = document.querySelector('.roll-dice-btn');
const holdBtnElement = document.querySelector('.hold-btn');
const currentScore0Element = document.getElementById('current-score0');
const currentScore1Element = document.getElementById('current-score1');
const player0Element = document.querySelector('.player-0');
const player1Element = document.querySelector('.player-1');


////////////////// Starting Conditions ////////////////////////////////////////
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add('hidden');
let currentScore = 0;
let activePlayer = 0;

////////////////// Dice Roll Functionality /////////////////////////////////////
rollDiceBtnElement.addEventListener('click', function () {
    // 1. Generate random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
        diceElement.classList.remove('hidden');
        diceElement.src = `/Game Asset/dice-${dice}.png`;

    // 3. check for dice-1
    if (dice !== 1) {
        // when dice is not equal to one add to current score
        currentScore += dice;
        document.getElementById(`current-score${activePlayer}`).textContent = currentScore;
    } else {
        // switch player 
        currentScore = 0;
        document.getElementById(`current-score${activePlayer}`).textContent = currentScore;
        activePlayer = (activePlayer === 0) ? 1: 0;
        player0Element.classList.toggle('active-player');
        player1Element.classList.toggle('active-player');
    }
});
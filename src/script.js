"use strict";

// TODO - write your code here.

// const nameOfFunction = () => {
// return randomNumberStuff
// }

// const randomDamage = () => {
//     return
//     }

const randomDamage = () => {
  return Math.floor(Math.random() * 11);
};

const chooseOption = (opt1, opt2) => {
  const randNum = Math.floor(Math.random() * 2);
  return randNum === 0 ? opt1 : opt2;
};

const attackPlayer = (health) => {
  return health - randomDamage;
};

const logHealth = (player, health) => {
  console.log(`${player} health: ${health}`);
};

const logDeath = (winner, loser) => {
  console.log(`${winner} defeated ${loser}`);
};

function isDead(health) {
  return health <= 0 ? true : false;
}

function fight(_player1, _player2, _player1Health, _player2Health) {
  while (true) {
    let attacker = chooseOption(_player1, _player2);
    if (attacker === _player1) {
      _player2Health = attackPlayer(_player2Health);
      console.log(logHealth(_player2, _player2Health));
    } else if (isDead(_player2Health) === true) {
      logDeath(_player1, _player2);
      break;
    } else if (attacker === _player2) {
      _player1Health = attackPlayer(_player1Health);
      logHealth(_player1, _player1Health);
    } else if (isDead(_player1Health) === true) {
      logDeath(_player2, _player1);
    }
    break;
  }
}

fight("Leon", "Chris", 100, 100);

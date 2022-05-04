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

function attackPlayer(health) {
  return health - randomDamage;
}

const logHealth = (player, health) => {
  console.log(`${player} health: ${health}`);
};

const logDeath = (winner, loser) => {
  console.log(`${winner} defeated ${loser}`);
};

const isDead = (health) => {
  return health <= 0 ? true : false;
};

const fight = (player1, player2, _player1Health, player2Health) => {
  while (true) {
    const attacker = chooseOption(player1, player2);
    if (attacker === player1) {
      player2Health = attackPlayer(player2Health);
      console.log(logHealth(player2, player2Health));
    } else if (isDead(player2Health) === true) {
      console.log(logDeath(player1, player2));
    }
    break;
  }
};

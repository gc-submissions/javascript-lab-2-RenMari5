"use strict";

// TODO - write your code here.

// const nameOfFunction = () => {
// return randomNumberStuff
// }

// const randomDamage = () => {
//     return
//     }

const randomDamage = () => Math.floor(Math.random() * 11);

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

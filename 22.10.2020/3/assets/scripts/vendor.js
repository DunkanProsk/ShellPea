const monsterHealthBar = document.getElementById('monster-health');
const playerHealthBar = document.getElementById('player-health');
const bonusLifeEl = document.getElementById('bonus-life');
const valueStrongAttack = document.getElementById('value-strong-attack');
const valueHeals = document.getElementById('value-heals');


const attackBtn = document.getElementById('attack-btn');
const strongAttackBtn = document.getElementById('strong-attack-btn');
const healBtn = document.getElementById('heal-btn');
const logBtn = document.getElementById('log-btn');

function adjustHealthBars(maxLife) {
  monsterHealthBar.max = +maxLife * 2;
  monsterHealthBar.value = +maxLife * 2;
  playerHealthBar.max = maxLife;
  playerHealthBar.value = maxLife;
}

function applyMonsterDamage(damage) {
  const appliedDamage = (Math.floor(Math.random() * (damageMonster - 1 + 1)) + 1) * damage;
  monsterHealthBar.value = +monsterHealthBar.value - appliedDamage;
  return appliedDamage;
}

function applyPlayerStrongDamage(damage) {
  const appliedDamage = (Math.floor(Math.random() * (damagePlayer - 1 + 1)) + 1) * damage;
  playerHealthBar.value = +monsterHealthBar.value - appliedDamage;
  return appliedDamage;
}

function applyPlayerDamage(damage) {
  const appliedDamage = (Math.floor(Math.random() * (damagePlayer - 1 + 1)) + 1) * damage;
  playerHealthBar.value = +playerHealthBar.value - appliedDamage;
  return appliedDamage;
}

function increasePlayerHealth(healValue) {
  playerHealthBar.value = +playerHealthBar.value + healValue;
}

function resetGame(value) {
  playerHealthBar.value = value;
  monsterHealthBar.value = value;
}

function removeBonusLife() {
  bonusLifeEl.parentNode.removeChild(bonusLifeEl);
}

function valueHealsChange(value) {
  if(+valueHeals.innerText > 0) {
    valueHeals.innerText = value
  }
}

function valueStrongAttackChange(value) {
  if(+valueStrongAttack.innerText > 0) {
    valueStrongAttack.innerText = value
  }
}

function setPlayerHealth(health) {
  playerHealthBar.value = health;
}

const maxLife = prompt('enter value HP')
const damageMonster = 15
const damagePlayer = 10
const healValue = 20
let bonusLife = 1
let healsPoint = 5
let strongAttackPoint = 5
let logArr = [{
    HPplayer: +maxLife,
    HPmonster: maxLife * 2,
    DPlayer: 0,
    DMonster: 0,
    DDPlayer: strongAttackPoint,
    Heals: healsPoint,
    BLife: bonusLife
}]

const attack = () => {
    applyPlayerDamage(damageMonster)
    applyMonsterDamage(damagePlayer)
    checkWiner()
}

const strongAttack = () => {
    if(strongAttackPoint > 0) {
        --strongAttackPoint
        valueStrongAttackChange(strongAttackPoint)
        applyPlayerDamage(damageMonster)
        applyMonsterDamage(damagePlayer * 2)
    }

    checkWiner()
}

const addHeals = () => {

    if(healsPoint > 0) {
        --healsPoint
        increasePlayerHealth(healValue)
    }
    valueHealsChange(healsPoint)
    checkWiner()
}

const checkWiner = () => {
    showLogArr(
        playerHealthBar.value, 
        monsterHealthBar.value,
        logArr[logArr.length - 1].HPmonster - monsterHealthBar.value,
        logArr[logArr.length - 1].HPplayer - playerHealthBar.value,
        strongAttackPoint,
        healsPoint,
        bonusLife
    )

    if(monsterHealthBar.value === 0) {
        alert('You Win!')
        location.reload()
    }

    if(playerHealthBar.value === 0 && bonusLife === 1) {
        --bonusLife
        playerHealthBar.value = maxLife
        removeBonusLife()
    } else if(playerHealthBar.value === 0 && bonusLife === 0){
        alert('You lose!')
        location.reload()
    }
}

const showLogArr = (HPP,HPM,DP,DM,DD,HE,BL) => {
    logArr.push({
        HPplayer: HPP,
        HPmonster: HPM,
        DPlayer: DP,
        DMonster: DM,
        DDPlayer: DD,
        Heals: HE,
        BLife: BL
    })
}

adjustHealthBars(maxLife)

attackBtn.addEventListener('click', attack)
strongAttackBtn.addEventListener('click', strongAttack)
healBtn.addEventListener('click', addHeals)
logBtn.addEventListener('click', () => {console.log(logArr)})

let flamethrower = {
    name: "Flamethrower",
    type: "fire",
    effect: function (attacker, defender) {
        defender.temp.hp -= calcSpecialDamage(attacker, defender, 80)
    },
    accuracy: 100,
    pp: 15,
}

let calcPhysicalDamage = function (attacker, defender, attackPower) {
    let attackStat = attacker.attack * attacker.temp.attack
    let defenseStat = defender.defense * defender.temp.defense
    let randomNumber = 85 // TODO randomize between 85 and 100
    let STAB = 1.0 // TODO calculate stab
    let weakness = 1.0 // TODO
    let resistance = 1.0 // TODO
    let damage = ((((2 * attacker.level / 5 + 2) * attackStat * attackPower / defenseStat) / 50) + 2) * STAB * weakness / resistance * randomNumber / 100
    return Math.round(damage)
}


let calcSpecialDamage = function (attacker, defender, attackPower) {
    let attackStat = attacker.spAttack * attacker.temp.spAttack
    let defenseStat = defender.spDefense * defender.temp.spDefense
    let randomNumber = 85 // TODO randomize between 85 and 100
    let STAB = 1.0 // TODO calculate stab
    let weakness = 1.0 // TODO
    let resistance = 1.0 // TODO
    let damage = ((((2 * attacker.level / 5 + 2) * attackStat * attackPower / defenseStat) / 50) + 2) * STAB * weakness / resistance * randomNumber / 100
    return Math.round(damage)
}


let dragonClaw = {
    name: "Dragon Claw",
    type: "dragon",
    category: "attack",
    effect: function (attacker, defender) {
        defender.temp.hp -= calcPhysicalDamage(attacker, defender, 80)
    },
    accuracy: 100,
    pp: 15,
}

let smokescreen = {
    name: "Smokescreen",
    type: "normal",
    effect: function (attacker, defender) {
        if (defender.accuracy > 0.4) {
            defender.accuracy -= 0.1;
        }
    },
    accuracy: 100,
    pp: 15,
}



let shadowball = {
    name: "Shadow Ball",
    type: "ghost",
    effect: function (attacker, defender) {
        defender.temp.hp -= calcSpecialDamage(attacker, defender, 80)
    },
    accuracy: 100,
    pp: 15,
}




let charizard = {
    name: "charizard",
    type: ["fire", "flying"],
    level: 50,
    moves: [
        flamethrower,
        dragonClaw,
        smokescreen,
    ],
    hp: 78,
    attack: 84,
    defense: 78,
    spAttack: 109,
    spDefense: 85,
    speed: 100,
}

let gengar = {
    name: "gengar",
    type: ["ghost", "poison"],
    level: 50,
    moves: [
        shadowball,
        smokescreen,
    ],
    hp: 60,
    attack: 65,
    defense: 60,
    spAttack: 130,
    spDefense: 75,
    speed: 110,
}

let teamA = [
    charizard,
]

let teamB = [
    gengar,
]

let defaultTempStats = function (pokemon) {
    return {
        hp: pokemon.hp,
        acc: 100,
        evasiveness: 1.0,
        attack: 1.0,
        defense: 1.0,
        spAttack: 1.0,
        spDefense: 1.0,
        speed: 1.0,
    }

}
let startBattle = function (teamA, teamB) {
    let activeA = teamA[0]
    let activeB = teamB[0]

    activeA.temp = defaultTempStats(activeA)
    activeB.temp = defaultTempStats(activeB)
    
    let battle = {
        isFinished: false,
        teamA,
        teamB,
        activeA,
        activeB,
    }
    console.log (battle)
    let attacker = battle.activeA
    let defender = battle.activeB
    let chosenAttack = attacker.moves[0]
    chosenAttack.effect (attacker, defender)
    console.log (defender)
    return battle
}
startBattle (teamA, teamB)

// This is a comment, it doesn't do anything
// let attack = function (damageAmount) {
//     return "dealt " + damageDealt(pokemonC, pokemonB) + " damage"
// }

// let damageDealt = function (a, b) {
//     return a.attack - b.defense
// }

// let pokemonAName = document.createElement("p")
// pokemonAName.innerText = attack(pokemonA.attack)
// document.body.appendChild(pokemonAName)

// let pokemonBName = document.createElement("p")
// pokemonBName.innerText = pokemonB.name + " " + pokemonB.hp
// document.body.appendChild(pokemonBName)


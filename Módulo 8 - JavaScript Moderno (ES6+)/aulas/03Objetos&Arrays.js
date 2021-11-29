let spaceship = {
    name: "Colossus",
    crewQuantity: 10,
    isHitched: false
}

let { name: spaceshipName, crewQuantity } = spaceship // Mapeação das propriedades do objeto
console.log(`Nome da nave: ${spaceshipName}\nQuantidade de tripulantes: ${crewQuantity}\n`)

let spaceships = ["Colossus", "Ártemis", "Fênix"]
let [colossus, artemis, fenix] = spaceships
console.log(colossus, artemis, fenix)


let newSpaceships = ["Hercules", "Asura", "Apolo"]
function printNewSpaceships([hercules, asura, apolo]) {
    console.log(hercules, asura, apolo)
}

printNewSpaceships(newSpaceships)

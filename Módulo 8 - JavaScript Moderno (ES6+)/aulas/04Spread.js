let spaceships = ["Colossus", "Ártemis", "Fênix"]

console.log(spaceships)
console.log(...spaceships)

let newSpaceship = [spaceships, "Puller"]
console.log(newSpaceship)
newSpaceship = [...spaceships, "Puller"]
console.log(newSpaceship)

function speedUp(velocity, acceleration) {
    return velocity + acceleration
}

let spaceshipAcceleration = [60, 10]
let newVelocity = speedUp(...spaceshipAcceleration)
console.log(`${newVelocity} km/s`)

let spaceship = {
    name: "Deméter",
    type: "Extração",
    maxCrew: 20,
    turnOn: function() {
        console.log("Preparando propulsão\nLigando computador de bordo")
    },
    newMaxCrew: function setMaxCrew(crew) {
        this.maxCrew = crew
    }
}

console.log(spaceship.turnOn())
console.log("Tripulação Máxima da nave " + spaceship.name + ": " + spaceship.maxCrew + " tripulantes")
spaceship.newMaxCrew(30)
console.log("Aumento da Tripulação. Quantidade Máxima: " + spaceship.maxCrew + " tripulantes")

spaceship.velocity = 0
spaceship.speedUp = function(acceleration) {
    this.velocity += acceleration
}

console.log(spaceship)
console.log("Velocidade inicial da nave " + spaceship.name + ": " + spaceship.velocity + "km/s")
spaceship.speedUp(10)
console.log("Velocidade atual da nave " + spaceship.name + ": " + spaceship.velocity + "km/s")
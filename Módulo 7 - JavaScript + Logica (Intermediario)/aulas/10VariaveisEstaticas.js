class Spaceship {
    constructor(name) {
        this.name = name
        this.currentVelocity = 0
    }

    static get decelarationRate() {
        return 0.15
    }

    speedUp(acceleration) {
        this.currentVelocity += (acceleration * (1 - Spaceship.decelarationRate))
    }
}

let spaceship = new Spaceship("Apollo")
spaceship.speedUp(100)
console.log("Velocidade da nave " + spaceship.name + ": " + spaceship.currentVelocity + "km/s")
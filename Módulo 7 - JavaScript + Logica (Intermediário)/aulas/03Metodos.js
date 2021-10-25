class Spaceship {
    constructor(name) {
        this.name = name
        this.velocity = 0
    }

    getName() {
        return this.name
    }

    getVelocity() {
        return this.velocity + "km/s"
    }

    speedUp(acceleration) {
        this.velocity += acceleration
    }
}

let artemis = new Spaceship("Artemis");
console.log(artemis.getName())

artemis.speedUp(10)
artemis.speedUp(15)
console.log(artemis.getVelocity())
console.log(artemis)